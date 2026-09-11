/**
 * Vercel Serverless Function: AMEVA-Sentinel Telemetry Observability API
 * Route: /api/public-stats
 * 
 * Dynamic SQL Aggregation from Neon PostgreSQL:
 * - Real queries: visitor_sessions, bot_crawler_logs, sentinel_risk_events, sentinel_geo_deliveries
 * - Strict PII Anonymization: Zero raw IP exposure (Aggregated by Country/City)
 */
const GEO_COORDS = {
    // South Korea (Seoul Districts, Tech Hubs & Major Metros)
    'seocho-gu': { lat: 37.4837, lng: 127.0324, name: 'Seocho-gu (Seoul), South Korea' },
    'seocho': { lat: 37.4837, lng: 127.0324, name: 'Seocho-gu (Seoul), South Korea' },
    'gangnam-gu': { lat: 37.4979, lng: 127.0276, name: 'Gangnam-gu (Seoul), South Korea' },
    'gangnam': { lat: 37.4979, lng: 127.0276, name: 'Gangnam-gu (Seoul), South Korea' },
    'songpa-gu': { lat: 37.5145, lng: 127.1058, name: 'Songpa-gu (Seoul), South Korea' },
    'songpa': { lat: 37.5145, lng: 127.1058, name: 'Songpa-gu (Seoul), South Korea' },
    'mapo-gu': { lat: 37.5663, lng: 126.9016, name: 'Mapo-gu (Seoul), South Korea' },
    'mapo': { lat: 37.5663, lng: 126.9016, name: 'Mapo-gu (Seoul), South Korea' },
    'yeongdeungpo-gu': { lat: 37.5264, lng: 126.8962, name: 'Yeouido / Yeongdeungpo (Seoul), South Korea' },
    'yeongdeungpo': { lat: 37.5264, lng: 126.8962, name: 'Yeouido / Yeongdeungpo (Seoul), South Korea' },
    'guro-gu': { lat: 37.4954, lng: 126.8874, name: 'Guro Digital Valley (Seoul), South Korea' },
    'guro': { lat: 37.4954, lng: 126.8874, name: 'Guro Digital Valley (Seoul), South Korea' },
    'jongno-gu': { lat: 37.5730, lng: 126.9794, name: 'Jongno-gu (Seoul), South Korea' },
    'jongno': { lat: 37.5730, lng: 126.9794, name: 'Jongno-gu (Seoul), South Korea' },
    'jung-gu': { lat: 37.5637, lng: 126.9975, name: 'Jung-gu (Seoul), South Korea' },
    'yongsan-gu': { lat: 37.5326, lng: 126.9900, name: 'Yongsan-gu (Seoul), South Korea' },
    'yongsan': { lat: 37.5326, lng: 126.9900, name: 'Yongsan-gu (Seoul), South Korea' },
    'gangdong-gu': { lat: 37.5301, lng: 127.1238, name: 'Gangdong-gu (Seoul), South Korea' },
    'seongdong-gu': { lat: 37.5634, lng: 127.0369, name: 'Seongsu / Seongdong (Seoul), South Korea' },
    'seongsu': { lat: 37.5634, lng: 127.0369, name: 'Seongsu / Seongdong (Seoul), South Korea' },
    'goyang-si': { lat: 37.6584, lng: 126.8320, name: 'Goyang-si, South Korea' },
    'goyang': { lat: 37.6584, lng: 126.8320, name: 'Goyang-si, South Korea' },
    'ilsan': { lat: 37.6584, lng: 126.8320, name: 'Ilsan / Goyang-si, South Korea' },
    'seoul': { lat: 37.5665, lng: 126.9780, name: 'Seoul, South Korea' },
    'seongnam-si': { lat: 37.4200, lng: 127.1265, name: 'Seongnam-si, South Korea' },
    'seongnam': { lat: 37.4200, lng: 127.1265, name: 'Seongnam-si, South Korea' },
    'bundang': { lat: 37.3827, lng: 127.1189, name: 'Bundang-gu (Seongnam), South Korea' },
    'pangyo': { lat: 37.3948, lng: 127.1119, name: 'Pangyo Techno Valley (Seongnam), South Korea' },
    'incheon': { lat: 37.4563, lng: 126.7052, name: 'Incheon, South Korea' },
    'songdo': { lat: 37.3888, lng: 126.6534, name: 'Songdo (Incheon), South Korea' },
    'suwon': { lat: 37.2636, lng: 127.0286, name: 'Suwon, South Korea' },
    'yongin': { lat: 37.2411, lng: 127.1776, name: 'Yongin, South Korea' },
    'hwaseong': { lat: 37.1995, lng: 126.8315, name: 'Hwaseong / Dongtan, South Korea' },
    'dongtan': { lat: 37.2002, lng: 127.0747, name: 'Dongtan, South Korea' },
    'pyeongtaek': { lat: 36.9921, lng: 127.1129, name: 'Pyeongtaek, South Korea' },
    'bucheon': { lat: 37.5034, lng: 126.7660, name: 'Bucheon, South Korea' },
    'anyang': { lat: 37.3943, lng: 126.9568, name: 'Anyang, South Korea' },
    'ansan': { lat: 37.3219, lng: 126.8309, name: 'Ansan, South Korea' },
    'gimpo': { lat: 37.6152, lng: 126.7156, name: 'Gimpo, South Korea' },
    'paju': { lat: 37.7599, lng: 126.7801, name: 'Paju, South Korea' },
    'namyangju': { lat: 37.6360, lng: 127.2165, name: 'Namyangju, South Korea' },
    'busan': { lat: 35.1796, lng: 129.0756, name: 'Busan, South Korea' },
    'daejeon': { lat: 36.3504, lng: 127.3845, name: 'Daejeon, South Korea' },
    'daegu': { lat: 35.8714, lng: 128.6014, name: 'Daegu, South Korea' },
    'gwangju': { lat: 35.1595, lng: 126.8526, name: 'Gwangju, South Korea' },
    'ulsan': { lat: 35.5384, lng: 129.3114, name: 'Ulsan, South Korea' },
    'sejong': { lat: 36.4800, lng: 127.2890, name: 'Sejong, South Korea' },
    'cheongju': { lat: 36.6424, lng: 127.4890, name: 'Cheongju, South Korea' },
    'cheonan': { lat: 36.8151, lng: 127.1139, name: 'Cheonan, South Korea' },
    'jeonju': { lat: 35.8242, lng: 127.1480, name: 'Jeonju, South Korea' },
    'pohang': { lat: 36.0190, lng: 129.3435, name: 'Pohang, South Korea' },
    'changwon': { lat: 35.2280, lng: 128.6811, name: 'Changwon, South Korea' },
    'jeju': { lat: 33.4996, lng: 126.5312, name: 'Jeju, South Korea' },

    // United States (Key Cloud Regions & Metros)
    'ashburn': { lat: 39.0438, lng: -77.4874, name: 'Ashburn (VA), United States' },
    'boydton': { lat: 36.6679, lng: -78.3875, name: 'Boydton (VA), United States' },
    'reston': { lat: 38.9586, lng: -77.3570, name: 'Reston (VA), United States' },
    'sterling': { lat: 39.0068, lng: -77.4291, name: 'Sterling (VA), United States' },
    'richmond': { lat: 37.5407, lng: -77.4360, name: 'Richmond (VA), United States' },
    'san jose': { lat: 37.3382, lng: -121.8863, name: 'San Jose (CA), United States' },
    'san francisco': { lat: 37.7749, lng: -122.4194, name: 'San Francisco (CA), United States' },
    'los angeles': { lat: 34.0522, lng: -118.2437, name: 'Los Angeles (CA), United States' },
    'mountain view': { lat: 37.3861, lng: -122.0839, name: 'Mountain View (CA), United States' },
    'sunnyvale': { lat: 37.3688, lng: -122.0363, name: 'Sunnyvale (CA), United States' },
    'seattle': { lat: 47.6062, lng: -122.3321, name: 'Seattle (WA), United States' },
    'boardman': { lat: 45.8399, lng: -119.7006, name: 'Boardman (OR), United States' },
    'the dalles': { lat: 45.5946, lng: -121.1787, name: 'The Dalles (OR), United States' },
    'hillsboro': { lat: 45.5229, lng: -122.9898, name: 'Hillsboro (OR), United States' },
    'portland': { lat: 45.5152, lng: -122.6784, name: 'Portland (OR), United States' },
    'columbus': { lat: 39.9612, lng: -82.9988, name: 'Columbus (OH), United States' },
    'chicago': { lat: 41.8781, lng: -87.6298, name: 'Chicago (IL), United States' },
    'council bluffs': { lat: 41.2619, lng: -95.8608, name: 'Council Bluffs (IA), United States' },
    'des moines': { lat: 41.5868, lng: -93.6250, name: 'Des Moines (IA), United States' },
    'dallas': { lat: 32.7767, lng: -96.7970, name: 'Dallas (TX), United States' },
    'austin': { lat: 30.2672, lng: -97.7431, name: 'Austin (TX), United States' },
    'houston': { lat: 29.7604, lng: -95.3698, name: 'Houston (TX), United States' },
    'san antonio': { lat: 29.4241, lng: -98.4936, name: 'San Antonio (TX), United States' },
    'atlanta': { lat: 33.7490, lng: -84.3880, name: 'Atlanta (GA), United States' },
    'miami': { lat: 25.7617, lng: -80.1918, name: 'Miami (FL), United States' },
    'new york': { lat: 40.7128, lng: -74.0060, name: 'New York (NY), United States' },
    'newark': { lat: 40.7357, lng: -74.1724, name: 'Newark (NJ), United States' },
    'north bergen': { lat: 40.7998, lng: -74.0238, name: 'North Bergen (NJ), United States' },
    'secaucus': { lat: 40.7895, lng: -74.0565, name: 'Secaucus (NJ), United States' },
    'salt lake city': { lat: 40.7608, lng: -111.8910, name: 'Salt Lake City (UT), United States' },
    'phoenix': { lat: 33.4484, lng: -112.0740, name: 'Phoenix (AZ), United States' },
    'denver': { lat: 39.7392, lng: -104.9903, name: 'Denver (CO), United States' },
    'minneapolis': { lat: 44.9778, lng: -93.2650, name: 'Minneapolis (MN), United States' },
    'charleston': { lat: 32.7765, lng: -79.9311, name: 'Charleston (SC), United States' },
    'las vegas': { lat: 36.1699, lng: -115.1398, name: 'Las Vegas (NV), United States' },

    // Japan
    'tokyo': { lat: 35.6762, lng: 139.6503, name: 'Tokyo, Japan' },
    'osaka': { lat: 34.6937, lng: 135.5023, name: 'Osaka, Japan' },
    'nagoya': { lat: 35.1815, lng: 136.9066, name: 'Nagoya, Japan' },
    'fukuoka': { lat: 33.5904, lng: 130.4017, name: 'Fukuoka, Japan' },
    'yokohama': { lat: 35.4437, lng: 139.6380, name: 'Yokohama, Japan' },

    // Europe
    'frankfurt': { lat: 50.1109, lng: 8.6821, name: 'Frankfurt, Germany' },
    'berlin': { lat: 52.5200, lng: 13.4050, name: 'Berlin, Germany' },
    'munich': { lat: 48.1351, lng: 11.5820, name: 'Munich, Germany' },
    'london': { lat: 51.5074, lng: -0.1278, name: 'London, United Kingdom' },
    'manchester': { lat: 53.4808, lng: -2.2426, name: 'Manchester, United Kingdom' },
    'dublin': { lat: 53.3498, lng: -6.2603, name: 'Dublin, Ireland' },
    'paris': { lat: 48.8566, lng: 2.3522, name: 'Paris, France' },
    'marseille': { lat: 43.2965, lng: 5.3698, name: 'Marseille, France' },
    'amsterdam': { lat: 52.3676, lng: 4.9041, name: 'Amsterdam, Netherlands' },
    'stockholm': { lat: 59.3293, lng: 18.0686, name: 'Stockholm, Sweden' },
    'helsinki': { lat: 60.1699, lng: 24.9384, name: 'Helsinki, Finland' },
    'madrid': { lat: 40.4168, lng: -3.7038, name: 'Madrid, Spain' },
    'milan': { lat: 45.4642, lng: 9.1900, name: 'Milan, Italy' },
    'zurich': { lat: 47.3769, lng: 8.5417, name: 'Zurich, Switzerland' },
    'warsaw': { lat: 52.2297, lng: 21.0122, name: 'Warsaw, Poland' },

    // Asia & Pacific & Others
    'singapore': { lat: 1.3521, lng: 103.8198, name: 'Singapore' },
    'hong kong': { lat: 22.3193, lng: 114.1694, name: 'Hong Kong' },
    'taipei': { lat: 25.0330, lng: 121.5654, name: 'Taipei, Taiwan' },
    'sydney': { lat: -33.8688, lng: 151.2093, name: 'Sydney, Australia' },
    'melbourne': { lat: -37.8136, lng: 144.9631, name: 'Melbourne, Australia' },
    'toronto': { lat: 43.6532, lng: -79.3832, name: 'Toronto, Canada' },
    'montreal': { lat: 45.5017, lng: -73.5673, name: 'Montreal, Canada' },
    'mumbai': { lat: 19.0760, lng: 72.8777, name: 'Mumbai, India' },
    'bengaluru': { lat: 12.9716, lng: 77.5946, name: 'Bengaluru, India' },
    'beijing': { lat: 39.9042, lng: 116.4074, name: 'Beijing, China' },
    'shanghai': { lat: 31.2304, lng: 121.4737, name: 'Shanghai, China' },
    'sao paulo': { lat: -23.5505, lng: -46.6333, name: 'São Paulo, Brazil' }
};

const COUNTRY_COORDS = {
    'KR': { lat: 36.5, lng: 127.8, name: 'South Korea' },
    'US': { lat: 38.0, lng: -97.0, name: 'United States' },
    'JP': { lat: 36.2, lng: 138.2, name: 'Japan' },
    'DE': { lat: 51.1, lng: 10.4, name: 'Germany' },
    'GB': { lat: 55.3, lng: -3.4, name: 'United Kingdom' },
    'FR': { lat: 46.2, lng: 2.2, name: 'France' },
    'SG': { lat: 1.35, lng: 103.8, name: 'Singapore' },
    'AU': { lat: -25.2, lng: 133.7, name: 'Australia' },
    'CA': { lat: 56.1, lng: -106.3, name: 'Canada' },
    'NL': { lat: 52.1, lng: 5.2, name: 'Netherlands' },
    'IE': { lat: 53.4, lng: -8.2, name: 'Ireland' },
    'IN': { lat: 20.5, lng: 78.9, name: 'India' },
    'CN': { lat: 35.8, lng: 104.1, name: 'China' },
    'GLOBAL': { lat: 20.0, lng: 0.0, name: 'Global Anycast' }
};

// Safe deterministic hash for coordinate offset in case of unknown cities
function getDeterministicCityOffset(cityName, countryCode = 'GLOBAL') {
    let hash = 0;
    const str = (cityName || 'default').toLowerCase();
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    const norm1 = ((Math.abs(hash) % 100) / 100 - 0.5);
    const norm2 = ((Math.abs(hash >> 3) % 100) / 100 - 0.5);

    if (countryCode === 'KR') {
        // Safe inland Korean bounds (Capital / Gyeonggi area)
        return { latOffset: norm1 * 0.08, lngOffset: norm2 * 0.08 };
    } else if (countryCode === 'US') {
        return { latOffset: norm1 * 1.5, lngOffset: norm2 * 2.5 };
    } else if (countryCode === 'JP') {
        return { latOffset: norm1 * 0.2, lngOffset: norm2 * 0.2 };
    }
    return { latOffset: norm1 * 0.3, lngOffset: norm2 * 0.3 };
}

// Global Singleton DB Client (Zero Pool Thrashing)
let globalStatsSql = null;

async function getGlobalStatsSql() {
    const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || process.env.POSTGRES_URL;
    if (!dbUrl) return null;
    if (globalStatsSql) return globalStatsSql;

    try {
        const neonModule = await import('@neondatabase/serverless').catch(() => null);
        if (neonModule && typeof neonModule.neon === 'function') {
            globalStatsSql = neonModule.neon(dbUrl);
            return globalStatsSql;
        }
    } catch (e) {
        console.warn('[Public Stats DB Connect Error]', e.message);
    }
    return null;
}

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Cache-Control', 'public, max-age=5, s-maxage=5, stale-while-revalidate=10');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const sql = await getGlobalStatsSql();

    if (!sql) {
        return res.status(200).json({
            status: 'db_unconfigured',
            database_connected: false,
            message: '데이터베이스 미연결 (DB 미연결)',
            updated_at: new Date().toISOString(),
            ecosystem_health_score: null,
            summary: {
                total_active_sessions: '-',
                total_unique_visitors: '-',
                ai_crawlers_identified: '-',
                human_count: '-',
                ai_count: '-',
                total_all_events: '-',
                webgpu_enabled_sessions: '-'
            },
            traffic_distribution: {
                human_percent: '-',
                ai_bots_percent: '-'
            },
            ai_crawlers_breakdown: [],
            top_regions: [],
            country_clusters: [],
            geo_clusters: [],
            hardware_adoption: {
                webgpu_supported_percent: '-',
                top_renderers: []
            },
            recent_activity_stream: []
        });
    }

    try {

        // Track individual query failures for transparent observability
        const queryErrors = [];

        // 1. Unified Session and Unique Visitor Aggregation (visitor_sessions + sentinel_risk_events)
        const sessionStats = await sql`
            SELECT 
                (COALESCE((SELECT COUNT(*) FROM visitor_sessions), 0) + COALESCE((SELECT COUNT(*) FROM sentinel_risk_events WHERE triage_category = 'HUMAN'), 0)) as total_sessions,
                (COALESCE((SELECT COUNT(DISTINCT visitor_id) FROM visitor_sessions), 0) + COALESCE((SELECT COUNT(DISTINCT visitor_id) FROM sentinel_risk_events WHERE triage_category = 'HUMAN'), 0)) as total_visitors,
                COALESCE((SELECT COUNT(*) FROM visitor_sessions WHERE has_webgpu = true), 0) as webgpu_count;
        `.catch((err) => {
            console.error('[public-stats] DB query error (sessionStats):', err.message);
            queryErrors.push({ query: 'sessionStats', error: err.message });
            return [{ total_sessions: 0, total_visitors: 0, webgpu_count: 0 }];
        });

        // 2. Real Unified AI Bot & Crawler Aggregation (sentinel_risk_events + sentinel_geo_deliveries + bot_crawler_logs)
        const botStats = await sql`
            SELECT 
                (
                    COALESCE((SELECT COUNT(*) FROM sentinel_risk_events WHERE triage_category = 'AI_AGENT'), 0) +
                    COALESCE((SELECT COUNT(*) FROM sentinel_geo_deliveries), 0) +
                    COALESCE((SELECT COUNT(*) FROM bot_crawler_logs), 0)
                ) as total_bots,
                COALESCE((SELECT COUNT(*) FROM sentinel_risk_events WHERE triage_category = 'CRAWLER_TOOL'), 0) as total_crawlers;
        `.catch((err) => {
            console.error('[public-stats] DB query error (botStats):', err.message);
            queryErrors.push({ query: 'botStats', error: err.message });
            return [{ total_bots: 0, total_crawlers: 0 }];
        });

        const botBreakdown = await sql`
            WITH all_ai_bots AS (
                SELECT vendor_group as bot_name FROM sentinel_risk_events WHERE triage_category = 'AI_AGENT'
                UNION ALL
                SELECT bot_vendor as bot_name FROM sentinel_geo_deliveries
                UNION ALL
                SELECT bot_name FROM bot_crawler_logs
            )
            SELECT 
                bot_name, 
                COUNT(*) as count,
                ROUND((COUNT(*) * 100.0 / NULLIF((SELECT COUNT(*) FROM all_ai_bots), 0)), 1) as percentage
            FROM all_ai_bots
            WHERE bot_name IS NOT NULL AND bot_name != ''
            GROUP BY bot_name
            ORDER BY count DESC
            LIMIT 10;
        `.catch((err) => {
            console.error('[public-stats] DB query error (botBreakdown):', err.message);
            queryErrors.push({ query: 'botBreakdown', error: err.message });
            return [];
        });

        // 3. Real Origin Regions & Global Geo Clustering (Zero IP Exposure)
        // Source: visitor_sessions + sentinel_risk_events (same as summary)
        const regionStats = await sql`
            WITH all_regions AS (
                SELECT country, city, 'LOW_RISK' as risk_category FROM visitor_sessions
                UNION ALL
                SELECT country, city, triage_category as risk_category FROM sentinel_risk_events
                    WHERE triage_category IN ('AI_AGENT', 'CRAWLER_TOOL')
            )
            SELECT 
                COALESCE(country, 'GLOBAL') as country,
                COALESCE(city, 'Edge Gateway') as city,
                COUNT(*) as session_count,
                COUNT(CASE WHEN risk_category = 'LOW_RISK' THEN 1 END) as human_count,
                COUNT(CASE WHEN risk_category IN ('AI_AGENT', 'CRAWLER_TOOL') THEN 1 END) as ai_count,
                ROUND((COUNT(*) * 100.0 / NULLIF((SELECT COUNT(*) FROM visitor_sessions) + (SELECT COUNT(*) FROM sentinel_risk_events WHERE triage_category IN ('AI_AGENT', 'CRAWLER_TOOL')), 0)), 1) as percentage
            FROM all_regions
            WHERE country IS NOT NULL AND country != ''
            GROUP BY country, city
            ORDER BY session_count DESC
            LIMIT 25;
        `.catch((err) => {
            console.error('[public-stats] DB query error (regionStats):', err.message);
            queryErrors.push({ query: 'regionStats', error: err.message });
            return [];
        });

        // 3.1 Aggregated by Country (same source as above)
        const countryStats = await sql`
            WITH all_regions AS (
                SELECT country, 'LOW_RISK' as risk_category FROM visitor_sessions
                UNION ALL
                SELECT country, triage_category as risk_category FROM sentinel_risk_events
                    WHERE triage_category IN ('AI_AGENT', 'CRAWLER_TOOL')
            )
            SELECT 
                COALESCE(country, 'GLOBAL') as country,
                COUNT(*) as session_count,
                COUNT(CASE WHEN risk_category = 'LOW_RISK' THEN 1 END) as human_count,
                COUNT(CASE WHEN risk_category IN ('AI_AGENT', 'CRAWLER_TOOL') THEN 1 END) as ai_count,
                ROUND((COUNT(*) * 100.0 / NULLIF((SELECT COUNT(*) FROM visitor_sessions) + (SELECT COUNT(*) FROM sentinel_risk_events WHERE triage_category IN ('AI_AGENT', 'CRAWLER_TOOL')), 0)), 1) as percentage
            FROM all_regions
            WHERE country IS NOT NULL AND country != ''
            GROUP BY country
            ORDER BY session_count DESC
            LIMIT 15;
        `.catch((err) => {
            console.error('[public-stats] DB query error (countryStats):', err.message);
            queryErrors.push({ query: 'countryStats', error: err.message });
            return [];
        });

        // 4. Real Top GPU / Hardware Renderers
        const gpuStats = await sql`
            SELECT 
                gpu_renderer, 
                COUNT(*) as count
            FROM visitor_sessions
            WHERE gpu_renderer IS NOT NULL AND gpu_renderer != 'unknown'
            GROUP BY gpu_renderer
            ORDER BY count DESC
            LIMIT 5;
        `.catch((err) => {
            console.error('[public-stats] DB query error (gpuStats):', err.message);
            queryErrors.push({ query: 'gpuStats', error: err.message });
            return [];
        });

        // 5. Recent Activity Stream (Unified)
        const recentBots = await sql`
            WITH all_streams AS (
                SELECT 
                    triage_category as bot_category,
                    COALESCE(vendor_group, 'Unknown') as bot_name,
                    path_hop_chain as requested_path,
                    country,
                    city,
                    evaluated_at as detected_at
                FROM sentinel_risk_events
                UNION ALL
                SELECT 
                    'AI_AGENT' as bot_category,
                    bot_name,
                    requested_path,
                    country,
                    city,
                    delivered_at as detected_at
                FROM sentinel_geo_deliveries
                UNION ALL
                SELECT 
                    bot_category,
                    bot_name,
                    requested_path,
                    country,
                    city,
                    detected_at
                FROM bot_crawler_logs
            )
            SELECT * FROM all_streams
            ORDER BY detected_at DESC
            LIMIT 12;
        `.catch((err) => {
            console.error('[public-stats] DB query error (recentBots):', err.message);
            queryErrors.push({ query: 'recentBots', error: err.message });
            return [];
        });

        const totalSessions = parseInt(sessionStats[0]?.total_sessions || 0, 10);
        const totalVisitors = parseInt(sessionStats[0]?.total_visitors || 0, 10);
        const webgpuCount = parseInt(sessionStats[0]?.webgpu_count || 0, 10);
        const totalBots = parseInt(botStats[0]?.total_bots || 0, 10);

        const totalAll = totalSessions + totalBots;
        const humanPct = totalAll > 0 ? Math.round((totalSessions / totalAll) * 100) : 100;
        const botPct = totalAll > 0 ? Math.round((totalBots / totalAll) * 100) : 0;
        const webgpuPct = totalSessions > 0 ? Math.round((webgpuCount / totalSessions) * 100) : 0;

        const stream = recentBots.map(b => {
            const rawIso = b.detected_at ? new Date(b.detected_at).toISOString() : new Date().toISOString();
            const kstTime = new Date(rawIso).toLocaleTimeString('ko-KR', {
                timeZone: 'Asia/Seoul',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            return {
                type: b.bot_category || 'AI_AGENT',
                source: b.bot_name,
                path: b.requested_path,
                status: 'GEO STREAM 200',
                location: `${b.country || 'GLOBAL'} (${b.city || 'Edge'})`,
                timestamp: rawIso,
                time_ago: kstTime
            };
        });

        const geoClusters = regionStats.map(r => {
            const cityKey = (r.city || '').toLowerCase().trim();
            const countryKey = (r.country || 'GLOBAL').toUpperCase().trim();
            let coord = GEO_COORDS[cityKey];
            if (!coord) {
                const base = COUNTRY_COORDS[countryKey] || { lat: 20.0, lng: 0.0, name: r.country };
                const offset = getDeterministicCityOffset(r.city || 'default', countryKey);
                coord = {
                    lat: base.lat + offset.latOffset,
                    lng: base.lng + offset.lngOffset,
                    name: `${r.city || 'Edge'}, ${r.country || 'GLOBAL'}`
                };
            }

            return {
                country: r.country,
                city: r.city,
                label: coord.name,
                lat: coord.lat,
                lng: coord.lng,
                count: parseInt(r.session_count, 10),
                human_count: parseInt(r.human_count || 0, 10),
                ai_count: parseInt(r.ai_count || 0, 10),
                tool_count: parseInt(r.tool_count || 0, 10),
                percentage: parseFloat(r.percentage) || 0
            };
        });

        const countryClusters = countryStats.map(c => {
            const countryKey = (c.country || 'GLOBAL').toUpperCase().trim();
            const coord = COUNTRY_COORDS[countryKey] || { lat: 20.0, lng: 0.0, name: c.country };
            return {
                country: c.country,
                name: coord.name,
                lat: coord.lat,
                lng: coord.lng,
                count: parseInt(c.session_count, 10),
                human_count: parseInt(c.human_count || 0, 10),
                ai_count: parseInt(c.ai_count || 0, 10),
                percentage: parseFloat(c.percentage) || 0
            };
        });

        const hasQueryError = queryErrors.length > 0;
        return res.status(200).json({
            status: hasQueryError ? 'degraded' : 'online',
            database_connected: queryErrors.length < 7,
            has_query_errors: hasQueryError,
            error_count: queryErrors.length,
            ...(hasQueryError ? { query_errors: queryErrors, partial_query_errors: queryErrors } : {}),
            updated_at: new Date().toISOString(),
            ecosystem_health_score: null, // Explicit null: synthetic SLA uptime scoring requires dedicated synthetic probe telemetry
            summary: {
                total_active_sessions: totalSessions,
                total_unique_visitors: totalVisitors,
                ai_crawlers_identified: totalBots,
                human_count: totalSessions,
                ai_count: totalBots,
                total_all_events: totalAll,
                webgpu_enabled_sessions: webgpuCount
            },
            traffic_distribution: {
                human_percent: humanPct,
                ai_percent: botPct,
                ai_bots_percent: botPct,
                metric: 'sessions',
                window: 'all_time',
                consistency_model: 'EVENTUAL',
                expected_tolerance_percent: 10,
                updated_at: new Date().toISOString(),
                dedup_key: 'visitor_id'
            },
            actor_claims_breakdown: {
                claimed_ai_operators: totalBots,
                low_risk_sessions: totalSessions,
                verification: {
                    unverified_claims: totalBots,
                    verified_claims: 0,
                    not_applicable: totalSessions
                }
            },
            ai_crawlers_breakdown: botBreakdown.map(b => ({
                name: b.bot_name,
                count: parseInt(b.count, 10),
                share: `${b.percentage || 0}%`,
                verification: 'UNVERIFIED'
            })),
            top_regions: regionStats.map(r => ({
                country: r.country,
                city: r.city,
                count: parseInt(r.session_count, 10),
                percentage: `${r.percentage || 0}%`
            })),
            country_clusters: countryClusters,
            geo_clusters: geoClusters,
            hardware_adoption: {
                webgpu_supported_percent: webgpuPct,
                top_renderers: gpuStats
            },
            recent_activity_stream: stream
        });

    } catch (err) {
        return res.status(500).json({
            status: 'error',
            error: err.message,
            updated_at: new Date().toISOString()
        });
    }
}
