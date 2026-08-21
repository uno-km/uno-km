/**
 * Vercel Serverless Function: AMEVA Telemetry & Deep Forensic Ingestion API
 * Route: /api/telemetry
 * 
 * 100% Secure & Stealthy:
 * - Uses @neondatabase/serverless for instant pooled edge queries
 * - Ingests session data, page views, click dynamics, and deep forensic fingerprints
 * - Extracts Vercel Edge Headers for accurate Geo/ISP metadata
 * - Zero credentials leakage to frontend
 */
import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        let body = req.body;
        if (typeof body === 'string') {
            try { body = JSON.parse(body); } catch (e) { body = {}; }
        }
        body = body || {};

        const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || process.env.POSTGRES_URL;

        const headers = req.headers || {};
        const ip = headers['x-forwarded-for'] ? headers['x-forwarded-for'].split(',')[0].trim() : (req.socket?.remoteAddress || '127.0.0.1');
        const country = headers['x-vercel-ip-country'] || 'LOCAL';
        const city = headers['x-vercel-ip-city'] ? decodeURIComponent(headers['x-vercel-ip-city']) : 'Localhost';
        const region = headers['x-vercel-ip-country-region'] || '';
        const latitude = headers['x-vercel-ip-latitude'] ? parseFloat(headers['x-vercel-ip-latitude']) : null;
        const longitude = headers['x-vercel-ip-longitude'] ? parseFloat(headers['x-vercel-ip-longitude']) : null;

        const { type, session_id, visitor_id, pathname, url, referrer, hardware, forensics } = body;

        if (!session_id || !visitor_id) {
            return res.status(200).json({ ok: true });
        }

        if (dbUrl) {
            const sql = neon(dbUrl);

            // 1. Session Init Handshake
            if (type === 'session_init' && hardware) {
                await sql`
                    INSERT INTO visitor_sessions (
                        session_id, visitor_id, ip_address, country, city, region,
                        latitude, longitude, platform, user_agent, language, timezone,
                        cpu_cores, ram_gb, gpu_renderer, has_webgpu, screen_resolution,
                        pixel_ratio, color_depth, is_touch, connection_type, downlink_mbps, rtt_ms
                    ) VALUES (
                        ${session_id}, ${visitor_id}, ${ip.slice(0, 45)}, ${country.slice(0, 10)},
                        ${city.slice(0, 100)}, ${region.slice(0, 50)}, ${latitude}, ${longitude},
                        ${(hardware.platform || '').slice(0, 50)}, ${(hardware.user_agent || '').slice(0, 1000)},
                        ${(hardware.language || '').slice(0, 20)}, ${(hardware.timezone || '').slice(0, 50)},
                        ${hardware.cpu_cores || null}, ${hardware.ram_gb || null},
                        ${(hardware.gpu_renderer || '').slice(0, 500)}, ${!!hardware.has_webgpu},
                        ${`${hardware.screen_width}x${hardware.screen_height}`},
                        ${hardware.pixel_ratio || 1.0}, ${hardware.color_depth || 24},
                        ${!!hardware.is_touch}, ${(hardware.connection_type || '').slice(0, 20)},
                        ${hardware.downlink_mbps || null}, ${hardware.rtt_ms || null}
                    )
                    ON CONFLICT (session_id) DO UPDATE SET
                        last_seen_at = CURRENT_TIMESTAMP;
                `;

                await sql`
                    INSERT INTO page_views (session_id, visitor_id, url, pathname, referrer)
                    VALUES (
                        ${session_id}, ${visitor_id}, ${(url || '').slice(0, 1000)},
                        ${(pathname || '/').slice(0, 255)}, ${(referrer || '').slice(0, 1000)}
                    );
                `;
            }

            // 2. Deep Forensic Ingestion (영혼/하드웨어 고유지문 & 과거사)
            else if (type === 'deep_forensic_ping' && forensics) {
                await sql`
                    INSERT INTO deep_forensic_footprints (
                        session_id, visitor_id, canvas_hash, audio_hash,
                        webgl_vendor, webgl_renderer, webgl_max_texture_size, math_jit_precision,
                        installed_fonts, font_count, screen_hz, color_gamut, is_hdr, color_depth,
                        battery_level, is_charging, charging_time,
                        audio_inputs_count, video_inputs_count, audio_outputs_count,
                        is_webdriver, cookie_enabled, do_not_track, languages_list,
                        first_seen_at, total_visit_count, total_session_count, past_paths_history
                    ) VALUES (
                        ${session_id}, ${visitor_id},
                        ${(forensics.canvas_hash || '').slice(0, 64)},
                        ${(forensics.audio_hash || '').slice(0, 64)},
                        ${(forensics.webgl_vendor || '').slice(0, 255)},
                        ${(forensics.webgl_renderer || '').slice(0, 500)},
                        ${forensics.webgl_max_texture_size || 0},
                        ${(forensics.math_jit_precision || '').slice(0, 100)},
                        ${forensics.installed_fonts || ''},
                        ${forensics.font_count || 0},
                        ${forensics.screen_hz || null},
                        ${(forensics.color_gamut || '').slice(0, 20)},
                        ${!!forensics.is_hdr},
                        ${forensics.color_depth || 24},
                        ${forensics.battery_level || null},
                        ${forensics.is_charging !== null ? !!forensics.is_charging : null},
                        ${forensics.charging_time || null},
                        ${forensics.audio_inputs_count || null},
                        ${forensics.video_inputs_count || null},
                        ${forensics.audio_outputs_count || null},
                        ${!!forensics.is_webdriver},
                        ${forensics.cookie_enabled !== false},
                        ${(forensics.do_not_track || '').slice(0, 10)},
                        ${(forensics.languages_list || '').slice(0, 255)},
                        ${forensics.first_seen_at ? new Date(forensics.first_seen_at) : null},
                        ${forensics.total_visit_count || 1},
                        ${forensics.total_session_count || 1},
                        ${forensics.past_paths_history || ''}
                    );
                `;
            }

            // 3. Dwell Time & Scroll Depth
            else if (type === 'dwell_ping') {
                const dwellSeconds = parseInt(body.dwell_seconds, 10) || 0;
                const maxScroll = parseInt(body.max_scroll_percent, 10) || 0;

                await sql`
                    UPDATE page_views
                    SET dwell_seconds = GREATEST(dwell_seconds, ${dwellSeconds}),
                        max_scroll_percent = GREATEST(max_scroll_percent, ${maxScroll})
                    WHERE view_id = (
                        SELECT view_id FROM page_views
                        WHERE session_id = ${session_id} AND pathname = ${(pathname || '/').slice(0, 255)}
                        ORDER BY viewed_at DESC LIMIT 1
                    );
                `;
            }

            // 4. Click & Interaction Dynamics
            else if (type === 'interaction_click' || type === 'custom_event') {
                await sql`
                    INSERT INTO click_events (
                        session_id, visitor_id, pathname, event_type,
                        target_tag, target_id, target_class, target_text, target_url, is_external
                    ) VALUES (
                        ${session_id}, ${visitor_id}, ${(pathname || '/').slice(0, 255)},
                        ${(body.event_type || type).slice(0, 50)}, ${(body.target_tag || '').slice(0, 30)},
                        ${(body.target_id || '').slice(0, 100)}, ${(body.target_class || '').slice(0, 150)},
                        ${(body.target_text || '').slice(0, 250)}, ${(body.target_url || '').slice(0, 1000)},
                        ${!!body.is_external}
                    );
                `;
            }
        }

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('Telemetry Ingestion Error:', err.message);
        return res.status(200).json({ ok: true });
    }
}
