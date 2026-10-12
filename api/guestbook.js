/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
import { neon } from '@neondatabase/serverless';

let isGuestbookSchemaReady = false;

function escapeHtml(str) {
    if (!str || typeof str !== 'string') return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

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
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
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

        // GET: Fetch recent guestbook entries (Read-Only)
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

            const rawEntries = await sql`
                SELECT id, author, message, ip_country, avatar_color, created_at
                FROM guestbook_entries
                ORDER BY id DESC
                LIMIT 25;
            `;

            // Stored XSS defense: Sanitize string fields
            const entries = (rawEntries || []).map(e => ({
                id: e.id,
                author: escapeHtml(e.author),
                message: escapeHtml(e.message),
                ip_country: escapeHtml(e.ip_country),
                avatar_color: (e.avatar_color && /^#[0-9a-fA-F]{3,8}$/.test(e.avatar_color)) ? e.avatar_color : '#00EFFF',
                created_at: e.created_at
            }));

            return res.status(200).json({
                ok: true,
                source: 'neon_postgresql',
                visitor_count: visitorCount,
                entries: entries
            });
        }

        // POST: Write operations permanently disabled to prevent unauthenticated resource exhaustion & Stored XSS
        if (req.method === 'POST') {
            return res.status(403).json({
                ok: false,
                error: 'SECURITY_RESTRICTION: Guestbook submission is permanently disabled under security policy.'
            });
        }

        return res.status(405).json({ ok: false, error: 'Method not allowed' });
    } catch (err) {
        console.error('Neon Guestbook API Error:', err.message);
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
}
