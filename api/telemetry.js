/**
 * Vercel Serverless Function: AMEVA Telemetry & Footprint Ingestion API
 * Route: /api/telemetry
 * 
 * 100% Secure & Stealthy:
 * - Zero client-side credentials leakage (DATABASE_URL stays on Vercel backend).
 * - Direct HTTP SQL query execution against Neon PostgreSQL.
 * - Parses Vercel Edge Headers for accurate Geo/ISP metadata.
 * - Silent error handling to prevent frontend console errors.
 */

// Helper to execute parameterized SQL on Neon Serverless HTTP endpoint
async function executeNeonSQL(databaseUrl, query, params = []) {
    if (!databaseUrl) return null;

    try {
        // Parse postgres connection string: postgresql://user:pass@host/dbname?sslmode=require
        const url = new URL(databaseUrl.replace(/^postgres(ql)?:/, 'https:'));
        const host = url.hostname;
        const username = url.username;
        const password = url.password;
        const pathname = url.pathname; // /dbname

        const endpoint = `https://${host}/sql`;
        const authHeader = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json',
                'Neon-Connection-String': databaseUrl
            },
            body: JSON.stringify({ query, params })
        });

        if (!response.ok) {
            const errText = await response.text();
            console.error('Neon SQL Error:', response.status, errText);
            return null;
        }

        return await response.json();
    } catch (err) {
        console.error('Neon Connection Failed:', err.message);
        return null;
    }
}

export default async function handler(req, res) {
    // Enable CORS for preflight and standard calls
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

        // Extract Edge Geospatial Metadata from Vercel Headers
        const headers = req.headers || {};
        const ip = headers['x-forwarded-for'] ? headers['x-forwarded-for'].split(',')[0].trim() : (req.socket?.remoteAddress || '127.0.0.1');
        const country = headers['x-vercel-ip-country'] || 'LOCAL';
        const city = headers['x-vercel-ip-city'] ? decodeURIComponent(headers['x-vercel-ip-city']) : 'Localhost';
        const region = headers['x-vercel-ip-country-region'] || '';
        const latitude = headers['x-vercel-ip-latitude'] ? parseFloat(headers['x-vercel-ip-latitude']) : null;
        const longitude = headers['x-vercel-ip-longitude'] ? parseFloat(headers['x-vercel-ip-longitude']) : null;

        const { type, session_id, visitor_id, pathname, url, referrer, hardware } = body;

        if (!session_id || !visitor_id) {
            return res.status(200).json({ ok: true, note: 'Missing identifiers' });
        }

        if (dbUrl) {
            // 1. Handle Session Init Handshake
            if (type === 'session_init' && hardware) {
                const sessionQuery = `
                    INSERT INTO visitor_sessions (
                        session_id, visitor_id, ip_address, country, city, region,
                        latitude, longitude, platform, user_agent, language, timezone,
                        cpu_cores, ram_gb, gpu_renderer, has_webgpu, screen_resolution,
                        pixel_ratio, color_depth, is_touch, connection_type, downlink_mbps, rtt_ms
                    ) VALUES (
                        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13,
                        $14, $15, $16, $17, $18, $19, $20, $21, $22, $23
                    )
                    ON CONFLICT (session_id) DO UPDATE SET
                        last_seen_at = CURRENT_TIMESTAMP;
                `;
                const sessionParams = [
                    session_id,
                    visitor_id,
                    ip.slice(0, 45),
                    country.slice(0, 10),
                    city.slice(0, 100),
                    region.slice(0, 50),
                    latitude,
                    longitude,
                    (hardware.platform || '').slice(0, 50),
                    (hardware.user_agent || '').slice(0, 1000),
                    (hardware.language || '').slice(0, 20),
                    (hardware.timezone || '').slice(0, 50),
                    hardware.cpu_cores || null,
                    hardware.ram_gb || null,
                    (hardware.gpu_renderer || '').slice(0, 500),
                    !!hardware.has_webgpu,
                    `${hardware.screen_width}x${hardware.screen_height}`,
                    hardware.pixel_ratio || 1.0,
                    hardware.color_depth || 24,
                    !!hardware.is_touch,
                    (hardware.connection_type || '').slice(0, 20),
                    hardware.downlink_mbps || null,
                    hardware.rtt_ms || null
                ];

                await executeNeonSQL(dbUrl, sessionQuery, sessionParams);

                // Also record initial Pageview
                const pvQuery = `
                    INSERT INTO page_views (session_id, visitor_id, url, pathname, referrer)
                    VALUES ($1, $2, $3, $4, $5);
                `;
                await executeNeonSQL(dbUrl, pvQuery, [
                    session_id,
                    visitor_id,
                    (url || '').slice(0, 1000),
                    (pathname || '/').slice(0, 255),
                    (referrer || '').slice(0, 1000)
                ]);
            }

            // 2. Handle Engagement / Dwell Time Ping
            else if (type === 'dwell_ping') {
                const dwellSeconds = parseInt(body.dwell_seconds, 10) || 0;
                const maxScroll = parseInt(body.max_scroll_percent, 10) || 0;

                const updatePvQuery = `
                    UPDATE page_views
                    SET dwell_seconds = GREATEST(dwell_seconds, $1),
                        max_scroll_percent = GREATEST(max_scroll_percent, $2)
                    WHERE view_id = (
                        SELECT view_id FROM page_views
                        WHERE session_id = $3 AND pathname = $4
                        ORDER BY viewed_at DESC LIMIT 1
                    );
                `;
                await executeNeonSQL(dbUrl, updatePvQuery, [
                    dwellSeconds,
                    maxScroll,
                    session_id,
                    (pathname || '/').slice(0, 255)
                ]);
            }

            // 3. Handle Interaction Click & Code Copy
            else if (type === 'interaction_click' || type === 'custom_event') {
                const clickQuery = `
                    INSERT INTO click_events (
                        session_id, visitor_id, pathname, event_type,
                        target_tag, target_id, target_class, target_text, target_url, is_external
                    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
                `;
                await executeNeonSQL(dbUrl, clickQuery, [
                    session_id,
                    visitor_id,
                    (pathname || '/').slice(0, 255),
                    (body.event_type || type).slice(0, 50),
                    (body.target_tag || '').slice(0, 30),
                    (body.target_id || '').slice(0, 100),
                    (body.target_class || '').slice(0, 150),
                    (body.target_text || '').slice(0, 250),
                    (body.target_url || '').slice(0, 1000),
                    !!body.is_external
                ]);
            }
        }

        // Return clean 204 or 200 to prevent any visible network overhead
        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('Telemetry Handler Error:', err);
        return res.status(200).json({ ok: true, fallback: true });
    }
}
