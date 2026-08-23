/**
 * Vercel Serverless Function: AMEVA Telemetry Public Observability & Analytics API
 * Route: /api/stats
 * 
 * - Public Zero-Auth Live Telemetry Console (Radical Transparency Mode)
 * - 5-Second SWR Edge Cache & In-Memory Promise Coalescing
 * - GDPR / CCPA Privacy-Safe IP Anonymization Masking (125.132.***.***)
 */
import { neon } from '@neondatabase/serverless';

function maskIp(ip) {
    if (!ip || typeof ip !== 'string') return '***.***.***.***';
    const trimmed = ip.trim();
    if (trimmed === '127.0.0.1' || trimmed === 'localhost') return '127.0.***.***';
    if (trimmed.includes('.')) {
        const parts = trimmed.split('.');
        if (parts.length === 4) return `${parts[0]}.${parts[1]}.***.***`;
    }
    if (trimmed.includes(':')) {
        const parts = trimmed.split(':');
        if (parts.length >= 2) return `${parts[0]}:${parts[1]}:****:****`;
    }
    return '***.***.***.***';
}

// In-Memory SWR Cache for Serverless Execution Scope
let cachedData = null;
let lastFetchTime = 0;
let inFlightPromise = null;
const CACHE_TTL_MS = 5000;

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 'public, s-maxage=5, stale-while-revalidate=10');
    res.setHeader('Access-Control-Allow-Origin', '*');

    const now = Date.now();
    if (cachedData && (now - lastFetchTime) < CACHE_TTL_MS) {
        return res.status(200).json(cachedData);
    }

    const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || process.env.POSTGRES_URL;
    if (!dbUrl) {
        return res.status(200).json({ error: 'DATABASE_URL is not configured in environment.' });
    }

    if (inFlightPromise) {
        try {
            const data = await inFlightPromise;
            return res.status(200).json(data);
        } catch (e) {}
    }

    inFlightPromise = (async () => {
        const sql = neon(dbUrl);

        // Ensure schema updates safely
        try {
            await sql`ALTER TABLE deep_forensic_footprints ADD COLUMN IF NOT EXISTS used_heap_mb NUMERIC(6,2);`;
        } catch (e) {}

        // 1. Overall stats
        let totalVisitorsRes = [];
        try {
            totalVisitorsRes = await sql`SELECT COUNT(DISTINCT visitor_id) as total_visitors, COUNT(*) as total_sessions FROM visitor_sessions;`;
        } catch (e) {
            console.warn('Stats visitor_sessions error:', e.message);
        }

        // 2. Top Countries
        let topCountriesRes = [];
        try {
            topCountriesRes = await sql`SELECT country, city, COUNT(*) as sessions FROM visitor_sessions GROUP BY country, city ORDER BY sessions DESC LIMIT 50;`;
        } catch (e) {
            console.warn('Stats top_countries error:', e.message);
        }

        // 3. Top Hardware / GPUs
        let topGpuRes = [];
        try {
            topGpuRes = await sql`SELECT gpu_renderer, COUNT(*) as count FROM visitor_sessions WHERE gpu_renderer IS NOT NULL AND gpu_renderer != 'unknown' GROUP BY gpu_renderer ORDER BY count DESC LIMIT 30;`;
        } catch (e) {
            console.warn('Stats top_gpus error:', e.message);
        }

        // 4. Top Click Events & Code Copies
        let topEventsRes = [];
        try {
            topEventsRes = await sql`SELECT event_type, target_text, COUNT(*) as count FROM click_events GROUP BY event_type, target_text ORDER BY count DESC LIMIT 30;`;
        } catch (e) {}

        // 5. Recent AI Bots Detected (with IP Masking)
        let recentBotsRes = [];
        try {
            const rawBots = await sql`SELECT bot_name, bot_category, requested_path, ip_address, country, city, detected_at FROM bot_crawler_logs ORDER BY detected_at DESC LIMIT 50;`;
            recentBotsRes = (rawBots || []).map(b => ({
                ...b,
                ip_address: maskIp(b.ip_address)
            }));
        } catch (e) {}

        // 6. Deep Forensic Footprints (with IP Masking)
        let recentForensicsRes = [];
        try {
            const rawForensics = await sql`
                SELECT d.visitor_id, d.canvas_hash, d.audio_hash, d.webgl_renderer, d.installed_fonts,
                       d.screen_hz, d.battery_level, d.is_charging, d.used_heap_mb, d.total_visit_count, d.past_paths_history,
                       s.country, s.city, s.ip_address, d.captured_at
                FROM deep_forensic_footprints d
                LEFT JOIN visitor_sessions s ON d.session_id = s.session_id
                ORDER BY d.captured_at DESC LIMIT 100;
            `;
            recentForensicsRes = (rawForensics || []).map(f => ({
                ...f,
                ip_address: maskIp(f.ip_address)
            }));
        } catch (e) {
            try {
                const rawForensics = await sql`
                    SELECT d.visitor_id, d.canvas_hash, d.audio_hash, d.webgl_renderer, d.installed_fonts,
                           d.screen_hz, d.battery_level, d.is_charging, d.total_visit_count, d.past_paths_history,
                           s.country, s.city, s.ip_address, d.captured_at
                    FROM deep_forensic_footprints d
                    LEFT JOIN visitor_sessions s ON d.session_id = s.session_id
                    ORDER BY d.captured_at DESC LIMIT 100;
                `;
                recentForensicsRes = (rawForensics || []).map(f => ({
                    ...f,
                    ip_address: maskIp(f.ip_address)
                }));
            } catch (e2) {
                console.warn('Stats recentForensics error:', e2.message);
            }
        }

        // 7. Time-series Session Inflow (for Multi-Timeframe Candlestick & Granular Bucketing)
        let timeSeriesRes = [];
        try {
            timeSeriesRes = await sql`
                SELECT created_at, country, city, gpu_renderer
                FROM visitor_sessions
                ORDER BY created_at ASC LIMIT 1000;
            `;
        } catch (e) {
            console.warn('Stats timeSeries error:', e.message);
        }

        // 8. Page Views Flow
        let pageFlowRes = [];
        try {
            pageFlowRes = await sql`
                SELECT pathname, COUNT(*) as views, COUNT(DISTINCT visitor_id) as visitors
                FROM page_views
                GROUP BY pathname
                ORDER BY views DESC LIMIT 30;
            `;
        } catch (e) {}

        // 9. Traffic Acquisition & Inflow Sources ("왜 접속했는지")
        let referrersRes = [];
        try {
            referrersRes = await sql`
                SELECT COALESCE(NULLIF(referrer, ''), 'Direct / Bookmark / Clean URL') as source, COUNT(*) as count
                FROM page_views
                GROUP BY source
                ORDER BY count DESC LIMIT 30;
            `;
        } catch (e) {}

        // 10. Granular User Micro-Interactions & Actions ("들어와서 뭘했는지")
        let actionsRes = [];
        try {
            actionsRes = await sql`
                SELECT c.visitor_id, c.pathname, c.event_type, c.target_tag, c.target_text, c.target_url, c.occurred_at,
                       s.country, s.city
                FROM click_events c
                LEFT JOIN visitor_sessions s ON c.session_id = s.session_id
                ORDER BY c.occurred_at DESC LIMIT 60;
            `;
        } catch (e) {}

        // 11. Visitor Page Journey & Dwell Depth Ledger
        let journeysRes = [];
        try {
            journeysRes = await sql`
                SELECT p.visitor_id, p.pathname, p.referrer, p.dwell_seconds, p.max_scroll_percent, p.viewed_at,
                       s.country, s.city, s.platform
                FROM page_views p
                LEFT JOIN visitor_sessions s ON p.session_id = s.session_id
                ORDER BY p.viewed_at DESC LIMIT 100;
            `;
        } catch (e) {}

        const payload = {
            status: 'success',
            metrics: totalVisitorsRes?.[0] || { total_visitors: 0, total_sessions: 0 },
            top_countries: topCountriesRes || [],
            top_gpus: topGpuRes || [],
            top_interactions: topEventsRes || [],
            ai_bots_detected: recentBotsRes || [],
            deep_forensic_logs: recentForensicsRes || [],
            time_series_sessions: timeSeriesRes || [],
            page_views_flow: pageFlowRes || [],
            top_referrers: referrersRes || [],
            recent_actions: actionsRes || [],
            visitor_journeys: journeysRes || []
        };

        cachedData = payload;
        lastFetchTime = Date.now();
        return payload;
    })();

    try {
        const payload = await inFlightPromise;
        inFlightPromise = null;
        return res.status(200).json(payload);
    } catch (err) {
        inFlightPromise = null;
        console.error('Fatal stats API handler error:', err);
        return res.status(200).json({
            status: 'degraded',
            error: err.message,
            metrics: { total_visitors: 0, total_sessions: 0 },
            top_countries: [],
            top_gpus: [],
            top_interactions: [],
            ai_bots_detected: [],
            deep_forensic_logs: [],
            time_series_sessions: [],
            page_views_flow: [],
            top_referrers: [],
            recent_actions: [],
            visitor_journeys: []
        });
    }
}
