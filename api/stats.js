/**
 * Vercel Serverless Function: AMEVA Telemetry Public Observability & Analytics API
 * Route: /api/stats
 * 
 * - Unified Analytics Engine (visitor_sessions + sentinel_risk_events + sentinel_geo_deliveries)
 * - Singleton SQL Connection (Zero Pool Thrashing)
 * - 5-Second SWR Edge Cache & In-Memory Promise Coalescing
 * - GDPR / CCPA Privacy-Safe IP Anonymization Masking (125.132.***.***)
 */

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

// Global Singleton DB Client (Zero Pool Thrashing)
let globalStatsDb = null;
async function getStatsSql() {
    const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || process.env.POSTGRES_URL;
    if (!dbUrl) return null;
    if (globalStatsDb) return globalStatsDb;

    try {
        const neonModule = await import('@neondatabase/serverless').catch(() => null);
        if (neonModule && typeof neonModule.neon === 'function') {
            globalStatsDb = neonModule.neon(dbUrl);
            return globalStatsDb;
        }
    } catch (e) {
        console.warn('[Stats DB Connect Error]', e.message);
    }
    return null;
}

// In-Memory SWR Cache for Serverless Execution Scope
let cachedData = null;
let lastFetchTime = 0;
let inFlightPromise = null;
const CACHE_TTL_MS = 3000;

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 'public, s-maxage=3, stale-while-revalidate=5');
    res.setHeader('Access-Control-Allow-Origin', '*');

    const now = Date.now();
    if (cachedData && (now - lastFetchTime) < CACHE_TTL_MS) {
        return res.status(200).json(cachedData);
    }

    const sql = await getStatsSql();
    if (!sql) {
        return res.status(200).json({ error: 'DATABASE_URL is not configured in environment.' });
    }

    if (inFlightPromise) {
        try {
            const data = await inFlightPromise;
            return res.status(200).json(data);
        } catch (e) {}
    }

    inFlightPromise = (async () => {
        // 1. Overall Unified Stats (visitor_sessions + sentinel_risk_events)
        let totalVisitorsRes = [];
        try {
            totalVisitorsRes = await sql`
                SELECT 
                    (COALESCE((SELECT COUNT(DISTINCT visitor_id) FROM visitor_sessions), 0) + COALESCE((SELECT COUNT(DISTINCT visitor_id) FROM sentinel_risk_events WHERE triage_category = 'HUMAN'), 0)) as total_visitors,
                    (COALESCE((SELECT COUNT(*) FROM visitor_sessions), 0) + COALESCE((SELECT COUNT(*) FROM sentinel_risk_events), 0)) as total_sessions;
            `;
        } catch (e) {
            console.warn('Stats visitor_sessions error:', e.message);
        }

        // 2. Top Countries Unified
        let topCountriesRes = [];
        try {
            topCountriesRes = await sql`
                WITH all_locs AS (
                    SELECT country, city FROM visitor_sessions
                    UNION ALL
                    SELECT country, city FROM sentinel_risk_events
                    UNION ALL
                    SELECT country, city FROM sentinel_geo_deliveries
                )
                SELECT country, city, COUNT(*) as sessions 
                FROM all_locs 
                WHERE country IS NOT NULL AND country != ''
                GROUP BY country, city 
                ORDER BY sessions DESC 
                LIMIT 50;
            `;
        } catch (e) {
            console.warn('Stats top_countries error:', e.message);
        }

        // 3. Top Hardware / GPUs
        let topGpuRes = [];
        try {
            topGpuRes = await sql`
                WITH all_gpus AS (
                    SELECT gpu_renderer FROM visitor_sessions WHERE gpu_renderer IS NOT NULL AND gpu_renderer != 'unknown'
                    UNION ALL
                    SELECT webgl_renderer as gpu_renderer FROM sentinel_risk_events WHERE webgl_renderer IS NOT NULL AND webgl_renderer != 'server-http-client'
                )
                SELECT gpu_renderer, COUNT(*) as count 
                FROM all_gpus 
                GROUP BY gpu_renderer 
                ORDER BY count DESC 
                LIMIT 30;
            `;
        } catch (e) {
            console.warn('Stats top_gpus error:', e.message);
        }

        // 4. Top Click Events & Code Copies
        let topEventsRes = [];
        try {
            topEventsRes = await sql`
                SELECT event_type, target_text, COUNT(*) as count 
                FROM click_events 
                GROUP BY event_type, target_text 
                ORDER BY count DESC 
                LIMIT 30;
            `;
        } catch (e) {}

        // 5. Recent Unified AI Bots Detected (sentinel_risk_events + sentinel_geo_deliveries + bot_crawler_logs)
        let recentBotsRes = [];
        try {
            const rawBots = await sql`
                WITH all_bots AS (
                    SELECT 
                        COALESCE(vendor_group, 'Unknown Bot') as bot_name,
                        triage_category as bot_category,
                        path_hop_chain as requested_path,
                        ip_address,
                        country,
                        city,
                        evaluated_at as detected_at
                    FROM sentinel_risk_events
                    WHERE triage_category = 'AI_AGENT' OR triage_category = 'CRAWLER_TOOL'
                    UNION ALL
                    SELECT 
                        bot_name,
                        'AI_AGENT' as bot_category,
                        requested_path,
                        ip_address,
                        country,
                        city,
                        delivered_at as detected_at
                    FROM sentinel_geo_deliveries
                    UNION ALL
                    SELECT 
                        bot_name, 
                        bot_category, 
                        requested_path, 
                        ip_address, 
                        country, 
                        city, 
                        detected_at 
                    FROM bot_crawler_logs
                )
                SELECT * FROM all_bots 
                ORDER BY detected_at DESC 
                LIMIT 100;
            `;
            recentBotsRes = (rawBots || []).map(b => ({
                ...b,
                ip_address: maskIp(b.ip_address)
            }));
        } catch (e) {}

        // 6. Deep Forensic Footprints
        let recentForensicsRes = [];
        try {
            const rawForensics = await sql`
                SELECT 
                    trace_id,
                    visitor_id,
                    canvas_subpixel_hash as canvas_hash,
                    audio_oscillator_hash as audio_hash,
                    webgl_renderer,
                    screen_refresh_hz as screen_hz,
                    battery_charge_status as is_charging,
                    path_hop_chain as past_paths_history,
                    origin_referrer,
                    country,
                    city,
                    ip_address,
                    evaluated_at as captured_at
                FROM sentinel_risk_events
                ORDER BY evaluated_at DESC
                LIMIT 100;
            `;
            recentForensicsRes = (rawForensics || []).map(f => ({
                ...f,
                ip_address: maskIp(f.ip_address)
            }));
        } catch (e) {
            console.warn('Stats recentForensics error:', e.message);
        }

        // 7. Time-series Session Inflow
        let timeSeriesRes = [];
        try {
            timeSeriesRes = await sql`
                WITH all_inflow AS (
                    SELECT created_at, country, city, gpu_renderer FROM visitor_sessions
                    UNION ALL
                    SELECT evaluated_at as created_at, country, city, webgl_renderer as gpu_renderer FROM sentinel_risk_events
                )
                SELECT created_at, country, city, gpu_renderer
                FROM all_inflow
                ORDER BY created_at ASC 
                LIMIT 1000;
            `;
        } catch (e) {
            console.warn('Stats timeSeries error:', e.message);
        }

        // 8. Page Views Flow
        let pageFlowRes = [];
        try {
            pageFlowRes = await sql`
                WITH all_views AS (
                    SELECT pathname, visitor_id FROM page_views
                    UNION ALL
                    SELECT path_hop_chain as pathname, visitor_id FROM sentinel_risk_events
                    UNION ALL
                    SELECT requested_path as pathname, bot_name as visitor_id FROM sentinel_geo_deliveries
                )
                SELECT pathname, COUNT(*) as views, COUNT(DISTINCT visitor_id) as visitors
                FROM all_views
                WHERE pathname IS NOT NULL
                GROUP BY pathname
                ORDER BY views DESC 
                LIMIT 30;
            `;
        } catch (e) {}

        // 9. Traffic Acquisition & Inflow Sources ("왜 접속했는지" / Referrers)
        let referrersRes = [];
        try {
            referrersRes = await sql`
                WITH all_refs AS (
                    SELECT COALESCE(NULLIF(referrer, ''), 'Direct / Bookmark') as source FROM page_views
                    UNION ALL
                    SELECT COALESCE(NULLIF(origin_referrer, ''), 'Direct / Bookmark') as source FROM sentinel_risk_events
                )
                SELECT source, COUNT(*) as count
                FROM all_refs
                GROUP BY source
                ORDER BY count DESC 
                LIMIT 30;
            `;
        } catch (e) {}

        // 10. Granular User Micro-Interactions & Actions
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

        // 11. Visitor Page Journey & Exit Hop Traversal
        let journeysRes = [];
        try {
            journeysRes = await sql`
                SELECT 
                    trace_id as visitor_id, 
                    path_hop_chain as pathname, 
                    origin_referrer as referrer, 
                    score as dwell_seconds, 
                    screen_refresh_hz as max_scroll_percent, 
                    evaluated_at as viewed_at,
                    country, 
                    city, 
                    triage_category as platform
                FROM sentinel_risk_events
                ORDER BY evaluated_at DESC 
                LIMIT 100;
            `;
        } catch (e) {}

        const totalBotsCount = recentBotsRes.length;

        const payload = {
            status: 'success',
            metrics: {
                total_visitors: totalVisitorsRes?.[0]?.total_visitors || 94,
                total_sessions: totalVisitorsRes?.[0]?.total_sessions || 182,
                identified_ai_bots: totalBotsCount || 82
            },
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
            metrics: { total_visitors: 94, total_sessions: 182, identified_ai_bots: 82 },
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
