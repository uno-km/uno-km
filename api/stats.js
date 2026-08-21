/**
 * Vercel Serverless Function: AMEVA Telemetry Admin Analytics API
 * Route: /api/stats
 * 
 * Protected by secret key (x-admin-key header or ?key= query parameter).
 * Returns real-time footprinting analytics, top devices, GPUs, and interaction funnels.
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

        // 1. Overall stats
        const totalVisitorsRes = await sql`SELECT COUNT(DISTINCT visitor_id) as total_visitors, COUNT(*) as total_sessions FROM visitor_sessions;`;
        // 2. Top Countries
        const topCountriesRes = await sql`SELECT country, city, COUNT(*) as sessions FROM visitor_sessions GROUP BY country, city ORDER BY sessions DESC LIMIT 10;`;
        // 3. Top Hardware / GPUs
        const topGpuRes = await sql`SELECT gpu_renderer, COUNT(*) as count FROM visitor_sessions WHERE gpu_renderer != 'unknown' GROUP BY gpu_renderer ORDER BY count DESC LIMIT 8;`;
        // 4. Top Click Events & Code Copies
        const topEventsRes = await sql`SELECT event_type, target_text, COUNT(*) as count FROM click_events GROUP BY event_type, target_text ORDER BY count DESC LIMIT 15;`;
        // 5. Recent 20 Visitors
        const recentSessionsRes = await sql`SELECT session_id, ip_address, country, city, platform, gpu_renderer, created_at, last_seen_at FROM visitor_sessions ORDER BY created_at DESC LIMIT 20;`;

        return res.status(200).json({
            status: 'success',
            metrics: totalVisitorsRes?.[0] || {},
            top_countries: topCountriesRes || [],
            top_gpus: topGpuRes || [],
            top_interactions: topEventsRes || [],
            recent_visitors: recentSessionsRes || []
        });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
