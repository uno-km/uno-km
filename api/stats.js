/**
 * Vercel Serverless Function: AMEVA Telemetry Admin Analytics API
 * Route: /api/stats
 * 
 * Protected by secret key (x-admin-key header or ?key= query parameter).
 * Returns real-time footprinting analytics, top devices, GPUs, and deep forensic logs.
 */
import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    const adminKey = req.headers['x-admin-key'] || req.query.key;
    const expectedKey = process.env.ADMIN_SECRET_KEY || 'ameva_admin_secret_2026';

    if (!adminKey || adminKey !== expectedKey) {
        return res.status(403).json({ error: 'Unauthorized. Valid admin key required.' });
    }

    const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || process.env.POSTGRES_URL;
    if (!dbUrl) {
        return res.status(200).json({ error: 'DATABASE_URL is not configured in environment.' });
    }

    try {
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

        // 5. Recent AI Bots Detected
        let recentBotsRes = [];
        try {
            recentBotsRes = await sql`SELECT bot_name, bot_category, requested_path, ip_address, country, city, detected_at FROM bot_crawler_logs ORDER BY detected_at DESC LIMIT 50;`;
        } catch (e) {}

        // 6. Deep Forensic Footprints
        let recentForensicsRes = [];
        try {
            recentForensicsRes = await sql`
                SELECT d.visitor_id, d.canvas_hash, d.audio_hash, d.webgl_renderer, d.installed_fonts,
                       d.screen_hz, d.battery_level, d.is_charging, d.used_heap_mb, d.total_visit_count, d.past_paths_history,
                       s.country, s.city, s.ip_address, d.captured_at
                FROM deep_forensic_footprints d
                LEFT JOIN visitor_sessions s ON d.session_id = s.session_id
                ORDER BY d.captured_at DESC LIMIT 100;
            `;
        } catch (e) {
            // Fallback without used_heap_mb if column is not yet propagated
            try {
                recentForensicsRes = await sql`
                    SELECT d.visitor_id, d.canvas_hash, d.audio_hash, d.webgl_renderer, d.installed_fonts,
                           d.screen_hz, d.battery_level, d.is_charging, d.total_visit_count, d.past_paths_history,
                           s.country, s.city, s.ip_address, d.captured_at
                    FROM deep_forensic_footprints d
                    LEFT JOIN visitor_sessions s ON d.session_id = s.session_id
                    ORDER BY d.captured_at DESC LIMIT 100;
                `;
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

        return res.status(200).json({
            status: 'success',
            metrics: totalVisitorsRes?.[0] || { total_visitors: 0, total_sessions: 0 },
            top_countries: topCountriesRes || [],
            top_gpus: topGpuRes || [],
            top_interactions: topEventsRes || [],
            ai_bots_detected: recentBotsRes || [],
            deep_forensic_logs: recentForensicsRes || [],
            time_series_sessions: timeSeriesRes || [],
            page_views_flow: pageFlowRes || []
        });
    } catch (err) {
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
            page_views_flow: []
        });
    }
}
