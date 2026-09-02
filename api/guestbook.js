import { neon } from '@neondatabase/serverless';

let isGuestbookSchemaReady = false;

async function ensureGuestbookSchema(sql) {
    if (isGuestbookSchemaReady) return;
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS guestbook_entries (
                id BIGSERIAL PRIMARY KEY,
                author VARCHAR(100) DEFAULT '익명 엔지니어',
                message TEXT NOT NULL,
                ip_country VARCHAR(50) DEFAULT 'KR',
                avatar_color VARCHAR(20) DEFAULT '#00EFFF',
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;

        await sql`
            CREATE TABLE IF NOT EXISTS analytics_visitors (
                id INT PRIMARY KEY DEFAULT 1,
                visitor_count BIGINT DEFAULT 1,
                last_visited TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;

        await sql`
            INSERT INTO analytics_visitors (id, visitor_count)
            VALUES (1, 1)
            ON CONFLICT (id) DO NOTHING;
        `;

        isGuestbookSchemaReady = true;
    } catch (err) {
        console.warn('[Guestbook] Schema init note:', err.message);
    }
}

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || process.env.POSTGRES_URL;

    // Fallback if DB URL not provided in environment
    if (!dbUrl) {
        return res.status(200).json({
            ok: true,
            source: 'db_unconfigured',
            database_connected: false,
            message: '데이터베이스 미연결 (DB 미연결)',
            visitor_count: 0,
            entries: []
        });
    }

    try {
        const sql = neon(dbUrl);
        await ensureGuestbookSchema(sql);

        // GET: Increment visitor count & fetch recent 20 guestbook entries
        if (req.method === 'GET') {
            const isNoCount = req.query && req.query.nocount === 'true';
            
            let visitorCount = 1;
            if (!isNoCount) {
                const countRes = await sql`
                    UPDATE analytics_visitors
                    SET visitor_count = visitor_count + 1,
                        last_visited = CURRENT_TIMESTAMP
                    WHERE id = 1
                    RETURNING visitor_count;
                `;
                if (countRes && countRes.length > 0) {
                    visitorCount = parseInt(countRes[0].visitor_count, 10);
                }
            } else {
                const countRes = await sql`SELECT visitor_count FROM analytics_visitors WHERE id = 1;`;
                if (countRes && countRes.length > 0) {
                    visitorCount = parseInt(countRes[0].visitor_count, 10);
                }
            }

            const entries = await sql`
                SELECT id, author, message, ip_country, avatar_color, created_at
                FROM guestbook_entries
                ORDER BY id DESC
                LIMIT 25;
            `;

            return res.status(200).json({
                ok: true,
                source: 'neon_postgresql',
                visitor_count: visitorCount,
                entries: entries
            });
        }

        // POST: Write a new guestbook message
        if (req.method === 'POST') {
            const body = req.body || {};
            const message = (body.message || '').trim();
            const author = (body.author || '익명 엔지니어').trim().slice(0, 40);
            const country = (body.country || 'KR').trim().slice(0, 10);
            const avatarColor = body.avatarColor || '#00EFFF';

            if (!message) {
                return res.status(400).json({ ok: false, error: 'Message cannot be empty.' });
            }

            const inserted = await sql`
                INSERT INTO guestbook_entries (author, message, ip_country, avatar_color)
                VALUES (${author}, ${message}, ${country}, ${avatarColor})
                RETURNING id, author, message, ip_country, avatar_color, created_at;
            `;

            return res.status(200).json({
                ok: true,
                message: 'Guestbook entry saved successfully.',
                entry: inserted[0]
            });
        }

        return res.status(405).json({ ok: false, error: 'Method not allowed' });
    } catch (err) {
        console.error('Neon Guestbook API Error:', err);
        return res.status(500).json({ ok: false, error: err.message });
    }
}
