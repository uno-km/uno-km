// api/labs.js - AMEVA Labs Serverless API (Neon PostgreSQL / Serverless)
import { neon } from '@neondatabase/serverless';

let isSchemaReady = false;

// 5 Clean Menus (Zero-Emoji)
const INITIAL_MENUS = [
  { id: 'newsletter', name: '뉴스레터', parent_id: null, depth: 0, sort_order: 1, board_type: 'news', description: '온디바이스 시스템 및 생태계 공식 엔지니어링 소식' },
  { id: 'research', name: '연구중이거나 연구내용', parent_id: null, depth: 0, sort_order: 2, board_type: 'anal', description: '실리콘 커널, Vulkan 셰이더, ARM64 NEON 어셈블리 및 온디바이스 AI 연구' },
  { id: 'free-board', name: '자유게시판', parent_id: null, depth: 0, sort_order: 3, board_type: 'board', description: '자유로운 기술 토론 및 하드웨어 이야기' },
  { id: 'board-ai', name: 'AI', parent_id: 'free-board', depth: 1, sort_order: 4, board_type: 'blog', description: '온디바이스 AI, LLM, 경량화 모델 및 신경망 기고' },
  { id: 'board-cs', name: 'CS', parent_id: 'free-board', depth: 1, sort_order: 5, board_type: 'blog', description: '컴퓨터 구조, 운영체제, Bionic libc 및 시스템 프로그래밍 기고' }
];

async function ensureSchema(sql) {
  if (isSchemaReady) return;
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS labs_menus (
        id VARCHAR(50) PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        parent_id VARCHAR(50) REFERENCES labs_menus(id) ON DELETE SET NULL,
        depth INT NOT NULL DEFAULT 0,
        sort_order INT NOT NULL DEFAULT 0,
        board_type VARCHAR(20) NOT NULL DEFAULT 'board',
        description TEXT,
        is_active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS labs_posts (
        id BIGSERIAL PRIMARY KEY,
        menu_id VARCHAR(50) NOT NULL REFERENCES labs_menus(id) ON DELETE CASCADE,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        author VARCHAR(50) NOT NULL,
        author_ip VARCHAR(50) NOT NULL,
        password_hash VARCHAR(64),
        status VARCHAR(20) NOT NULL DEFAULT 'published',
        view_count BIGINT DEFAULT 0,
        like_count INT DEFAULT 0,
        comment_count INT DEFAULT 0,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS labs_comments (
        id BIGSERIAL PRIMARY KEY,
        post_id BIGINT NOT NULL REFERENCES labs_posts(id) ON DELETE CASCADE,
        parent_id BIGINT REFERENCES labs_comments(id) ON DELETE CASCADE,
        root_id BIGINT REFERENCES labs_comments(id) ON DELETE CASCADE,
        depth INT NOT NULL DEFAULT 0,
        author VARCHAR(50) NOT NULL,
        author_ip VARCHAR(50) NOT NULL,
        password_hash VARCHAR(64),
        content TEXT NOT NULL,
        like_count INT DEFAULT 0,
        is_deleted BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Metadata table for migrations and one-time wipe tracking
    await sql`
      CREATE TABLE IF NOT EXISTS labs_meta (
        key VARCHAR(50) PRIMARY KEY,
        value TEXT
      );
    `;

    // One-time hard wipe of any legacy mock/seed data
    const wipeCheck = await sql`SELECT value FROM labs_meta WHERE key = 'initial_wipe_done';`;
    if (!wipeCheck || wipeCheck.length === 0) {
      await sql`TRUNCATE TABLE labs_comments, labs_posts RESTART IDENTITY CASCADE;`;
      await sql`INSERT INTO labs_meta (key, value) VALUES ('initial_wipe_done', 'true') ON CONFLICT (key) DO NOTHING;`;
    }

    // Seed default menus if empty
    const countRes = await sql`SELECT count(*)::int as cnt FROM labs_menus`;
    if (countRes && countRes[0] && countRes[0].cnt === 0) {
      for (const m of INITIAL_MENUS) {
        await sql`
          INSERT INTO labs_menus (id, name, parent_id, depth, sort_order, board_type, description)
          VALUES (${m.id}, ${m.name}, ${m.parent_id}, ${m.depth}, ${m.sort_order}, ${m.board_type}, ${m.description})
          ON CONFLICT (id) DO NOTHING;
        `;
      }
    } else {
      // Sanitize any existing records that might have literal ㄴ
      await sql`UPDATE labs_menus SET name = 'AI' WHERE id = 'board-ai' AND name LIKE '%ㄴ%';`;
      await sql`UPDATE labs_menus SET name = 'CS' WHERE id = 'board-cs' AND name LIKE '%ㄴ%';`;
    }

    isSchemaReady = true;
  } catch (err) {
    console.warn('[Labs API] Schema init error:', err.message);
  }
}

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return req.headers['x-real-ip'] || req.socket?.remoteAddress || '127.0.0.1';
}

function maskIp(ip) {
  if (!ip) return '0.0.*.*';
  const parts = ip.split('.');
  if (parts.length === 4) {
    return `${parts[0]}.${parts[1]}.*.*`;
  }
  return ip.substring(0, 8) + '...';
}

function isLocalRequest(req) {
  const host = req.headers['host'] || '';
  const origin = req.headers['origin'] || '';
  const referer = req.headers['referer'] || '';
  const clientIp = getClientIp(req);

  return host.includes('localhost') || host.includes('127.0.0.1') ||
         origin.includes('localhost') || origin.includes('127.0.0.1') ||
         referer.includes('localhost') || referer.includes('127.0.0.1') ||
         clientIp === '127.0.0.1' || clientIp === '::1' || clientIp === 'localhost';
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Local-Secret');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || process.env.POSTGRES_URL;
  if (!dbUrl) {
    return res.status(200).json({
      ok: true,
      database_connected: false,
      message: 'Database not configured. Falling back to client-side engine.',
      menus: INITIAL_MENUS,
      posts: [],
      comments: []
    });
  }

  const clientIp = getClientIp(req);
  const maskedIp = maskIp(clientIp);

  try {
    const sql = neon(dbUrl);
    await ensureSchema(sql);

    const action = req.query.action || (req.body && req.body.action) || 'get_posts';

    // ── 1. Menus (Tree hierarchy) ─────────────────────────────────────────────
    if (action === 'get_menus') {
      const menus = await sql`
        SELECT id, name, parent_id, depth, sort_order, board_type, description, is_active
        FROM labs_menus
        WHERE is_active = TRUE
        ORDER BY depth ASC, sort_order ASC, name ASC;
      `;
      return res.status(200).json({ ok: true, database_connected: true, menus });
    }

    // ── 2. Posts (CRUD) ───────────────────────────────────────────────────────
    if (action === 'get_posts') {
      const menu_id = req.query.menu_id;
      let posts;
      if (menu_id && menu_id !== 'all') {
        posts = await sql`
          SELECT p.id, p.menu_id, p.title, p.content, p.author, p.author_ip, p.status, 
                 p.view_count, p.like_count, p.comment_count, p.created_at, p.updated_at,
                 m.name as menu_name, m.board_type
          FROM labs_posts p
          JOIN labs_menus m ON p.menu_id = m.id
          WHERE (p.menu_id = ${menu_id} OR m.parent_id = ${menu_id})
            AND p.status = 'published'
          ORDER BY p.created_at DESC
          LIMIT 100;
        `;
      } else {
        posts = await sql`
          SELECT p.id, p.menu_id, p.title, p.content, p.author, p.author_ip, p.status, 
                 p.view_count, p.like_count, p.comment_count, p.created_at, p.updated_at,
                 m.name as menu_name, m.board_type
          FROM labs_posts p
          JOIN labs_menus m ON p.menu_id = m.id
          WHERE p.status = 'published'
          ORDER BY p.created_at DESC
          LIMIT 100;
        `;
      }
      return res.status(200).json({ ok: true, database_connected: true, posts });
    }

    if (action === 'get_post') {
      const post_id = parseInt(req.query.post_id, 10);
      if (!post_id) return res.status(400).json({ ok: false, error: 'post_id required' });

      // Increment view count
      await sql`UPDATE labs_posts SET view_count = view_count + 1 WHERE id = ${post_id};`;

      const rows = await sql`
        SELECT p.*, m.name as menu_name, m.board_type
        FROM labs_posts p
        JOIN labs_menus m ON p.menu_id = m.id
        WHERE p.id = ${post_id};
      `;
      if (!rows || rows.length === 0) {
        return res.status(404).json({ ok: false, error: 'Post not found' });
      }
      return res.status(200).json({ ok: true, database_connected: true, post: rows[0] });
    }

    if (action === 'create_post' && req.method === 'POST') {
      // Security Policy: Writing allowed strictly in local environment
      if (!isLocalRequest(req) && process.env.NODE_ENV === 'production' && !req.headers['x-local-secret']) {
        return res.status(403).json({
          ok: false,
          error: '보안 정책: 글쓰기는 로컬 개발 환경(localhost)에서만 허용됩니다.'
        });
      }

      const { menu_id, title, content, author = '익명 해커', password = '' } = req.body;
      if (!menu_id || !title || !content) {
        return res.status(400).json({ ok: false, error: 'menu_id, title, content are required' });
      }

      // Check board type
      const menuRes = await sql`SELECT board_type FROM labs_menus WHERE id = ${menu_id}`;
      if (!menuRes || menuRes.length === 0) {
        return res.status(404).json({ ok: false, error: '존재하지 않는 게시판입니다.' });
      }

      const status = 'published';

      const insertRes = await sql`
        INSERT INTO labs_posts (menu_id, title, content, author, author_ip, password_hash, status)
        VALUES (${menu_id}, ${title}, ${content}, ${author}, ${maskedIp}, ${password}, ${status})
        RETURNING id, menu_id, title, content, author, author_ip, status, view_count, like_count, comment_count, created_at, updated_at;
      `;

      return res.status(201).json({
        ok: true,
        database_connected: true,
        post: insertRes[0],
        post_id: insertRes[0].id,
        status: insertRes[0].status,
        message: '게시글이 성공적으로 등록되었습니다.'
      });
    }

    if (action === 'delete_post' && req.method === 'POST') {
      const { post_id, password = '' } = req.body;
      if (!post_id) return res.status(400).json({ ok: false, error: 'post_id required' });
      const rows = await sql`SELECT password_hash FROM labs_posts WHERE id = ${post_id}`;
      if (!rows || rows.length === 0) return res.status(404).json({ ok: false, error: '게시글을 찾을 수 없습니다.' });

      const storedHash = rows[0].password_hash;
      if (storedHash && storedHash.trim() !== '') {
        if (storedHash !== password) {
          return res.status(403).json({ ok: false, error: '비밀번호가 일치하지 않습니다.' });
        }
      }
      await sql`DELETE FROM labs_posts WHERE id = ${post_id}`;
      return res.status(200).json({ ok: true, database_connected: true, message: '게시글이 삭제되었습니다.' });
    }

    if (action === 'like_post' && req.method === 'POST') {
      const { post_id } = req.body;
      if (!post_id) return res.status(400).json({ ok: false, error: 'post_id required' });
      const updated = await sql`
        UPDATE labs_posts 
        SET like_count = like_count + 1 
        WHERE id = ${post_id}
        RETURNING like_count;
      `;
      return res.status(200).json({ 
        ok: true, 
        database_connected: true,
        like_count: (updated && updated[0]) ? updated[0].like_count : 0 
      });
    }

    // ── 3. Comments (Nested hierarchy) ────────────────────────────────────────
    if (action === 'get_comments') {
      const post_id = parseInt(req.query.post_id, 10);
      if (!post_id) return res.status(400).json({ ok: false, error: 'post_id required' });

      const comments = await sql`
        SELECT id, post_id, parent_id, root_id, depth, author, author_ip, content, like_count, is_deleted, created_at
        FROM labs_comments
        WHERE post_id = ${post_id}
        ORDER BY COALESCE(root_id, id) ASC, depth ASC, created_at ASC;
      `;
      return res.status(200).json({ ok: true, database_connected: true, comments });
    }

    if (action === 'create_comment' && req.method === 'POST') {
      // Security Policy: Comment writing allowed strictly in local environment
      if (!isLocalRequest(req) && process.env.NODE_ENV === 'production' && !req.headers['x-local-secret']) {
        return res.status(403).json({
          ok: false,
          error: '보안 정책: 댓글 작성은 로컬 개발 환경(localhost)에서만 허용됩니다.'
        });
      }

      const { post_id, parent_id = null, author = '익명 해커', password = '', content } = req.body;
      if (!post_id || !content) return res.status(400).json({ ok: false, error: 'post_id and content required' });

      let depth = 0;
      let root_id = null;
      if (parent_id) {
        const parentRow = await sql`SELECT depth, root_id, id FROM labs_comments WHERE id = ${parent_id}`;
        if (parentRow && parentRow.length > 0) {
          depth = Math.min((parentRow[0].depth || 0) + 1, 3); // cap depth at 3
          root_id = parentRow[0].root_id || parentRow[0].id;
        }
      }

      const resInsert = await sql`
        INSERT INTO labs_comments (post_id, parent_id, root_id, depth, author, author_ip, password_hash, content)
        VALUES (${post_id}, ${parent_id || null}, ${root_id || null}, ${depth}, ${author}, ${maskedIp}, ${password}, ${content})
        RETURNING id, post_id, parent_id, root_id, depth, author, author_ip, content, like_count, is_deleted, created_at;
      `;

      // Update post comment count
      await sql`UPDATE labs_posts SET comment_count = comment_count + 1 WHERE id = ${post_id}`;

      return res.status(201).json({ 
        ok: true, 
        database_connected: true,
        comment: resInsert[0],
        comment_id: resInsert[0].id, 
        message: '댓글이 등록되었습니다.' 
      });
    }

    if (action === 'delete_comment' && req.method === 'POST') {
      const { comment_id, password = '' } = req.body;
      if (!comment_id) return res.status(400).json({ ok: false, error: 'comment_id required' });
      const rows = await sql`SELECT password_hash, post_id FROM labs_comments WHERE id = ${comment_id}`;
      if (!rows || rows.length === 0) return res.status(404).json({ ok: false, error: '댓글을 찾을 수 없습니다.' });

      const storedHash = rows[0].password_hash;
      if (storedHash && storedHash.trim() !== '') {
        if (storedHash !== password) {
          return res.status(403).json({ ok: false, error: '비밀번호가 일치하지 않습니다.' });
        }
      }
      // Soft-delete to preserve replies tree
      await sql`UPDATE labs_comments SET is_deleted = TRUE, content = '[삭제된 댓글입니다]' WHERE id = ${comment_id}`;
      return res.status(200).json({ ok: true, database_connected: true, message: '댓글이 삭제되었습니다.' });
    }

    // Database Reset Action (for maintenance)
    if (action === 'reset_database' && req.method === 'POST') {
      if (!isLocalRequest(req) && process.env.NODE_ENV === 'production' && !req.headers['x-local-secret']) {
        return res.status(403).json({ ok: false, error: 'Unauthorized' });
      }
      await sql`TRUNCATE TABLE labs_comments, labs_posts RESTART IDENTITY CASCADE;`;
      return res.status(200).json({ ok: true, message: 'Database wiped successfully.' });
    }

    return res.status(400).json({ ok: false, error: `Unknown action: ${action}` });
  } catch (err) {
    console.error('[Labs API Error]:', err);
    return res.status(500).json({ ok: false, error: err.message });
  }
}
