// api/labs.js - AMEVA Labs Serverless API (Neon PostgreSQL / Serverless)
import { neon } from '@neondatabase/serverless';
import { SEED_POSTS } from './seed_posts.js';

let isSchemaReady = false;

// ── In-Memory Serverless Cache (10-minute TTL for Warm Instances) ─────────────
const CACHE_TTL_MS = 10 * 60 * 1000;
const SERVER_CACHE = {
  menus: { data: null, expiresAt: 0 },
  posts: new Map(), // cacheKey -> { data, expiresAt }
  postDetail: new Map(), // postId -> { data, expiresAt }

  getMenus() {
    if (this.menus.data && Date.now() < this.menus.expiresAt) return this.menus.data;
    return null;
  },
  setMenus(data) {
    this.menus = { data, expiresAt: Date.now() + CACHE_TTL_MS };
  },

  getPosts(key) {
    const entry = this.posts.get(key);
    if (entry && Date.now() < entry.expiresAt) return entry.data;
    return null;
  },
  setPosts(key, data) {
    this.posts.set(key, { data, expiresAt: Date.now() + CACHE_TTL_MS });
  },

  getPost(id) {
    const entry = this.postDetail.get(id);
    if (entry && Date.now() < entry.expiresAt) return entry.data;
    return null;
  },
  setPost(id, data) {
    this.postDetail.set(id, { data, expiresAt: Date.now() + CACHE_TTL_MS });
  },

  invalidateAll() {
    this.menus.data = null;
    this.posts.clear();
    this.postDetail.clear();
  }
};

// 9 Standard Menus (4 Research Subdomains + Board Subdomains)
const INITIAL_MENUS = [
  { id: 'newsletter', name: '뉴스레터', parent_id: null, depth: 0, sort_order: 1, board_type: 'news', description: '온디바이스 시스템 및 생태계 공식 엔지니어링 소식' },
  { id: 'research', name: '연구', parent_id: null, depth: 0, sort_order: 2, board_type: 'anal', description: '온디바이스 AI, Bionic 시스템 연구 및 벤치마크' },
  { id: 'research-handbook', name: '안드로이드 시스템 핸드북', parent_id: 'research', depth: 1, sort_order: 1, board_type: 'anal', description: '26개 전 강좌 및 320대 핵심 용어 해설집' },
  { id: 'research-papers', name: '기술 연구 백서', parent_id: 'research', depth: 1, sort_order: 2, board_type: 'anal', description: 'GPU 셰이더 컴파일러, 16KB 페이지 호환 등 심층 기술 분석' },
  { id: 'research-benchmarks', name: '실기기 벤치마크', parent_id: 'research', depth: 1, sort_order: 3, board_type: 'anal', description: 'S25~S7 6종 실기기 8대 모달리티 실측 성능 DB' },
  { id: 'research-cluster', name: '엣지 분산 클러스터', parent_id: 'research', depth: 1, sort_order: 4, board_type: 'anal', description: '모바일 기기 분산 서버 구축 및 네트워크 연동' },
  { id: 'free-board', name: '자유게시판', parent_id: null, depth: 0, sort_order: 3, board_type: 'board', description: '자유로운 기술 토론 및 하드웨어 이야기' },
  { id: 'board-ai', name: 'AI', parent_id: 'free-board', depth: 1, sort_order: 5, board_type: 'blog', description: '온디바이스 AI, LLM, 경량화 모델 및 신경망 기고' },
  { id: 'board-cs', name: 'CS', parent_id: 'free-board', depth: 1, sort_order: 6, board_type: 'blog', description: '컴퓨터 구조, 운영체제, Bionic libc 및 시스템 프로그래밍 기고' }
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

    // Metadata table for migrations and tracking
    await sql`
      CREATE TABLE IF NOT EXISTS labs_meta (
        key VARCHAR(50) PRIMARY KEY,
        value TEXT
      );
    `;

    // Seed/Synchronize all menus with ON CONFLICT DO UPDATE
    for (const m of INITIAL_MENUS) {
      await sql`
        INSERT INTO labs_menus (id, name, parent_id, depth, sort_order, board_type, description)
        VALUES (${m.id}, ${m.name}, ${m.parent_id}, ${m.depth}, ${m.sort_order}, ${m.board_type}, ${m.description})
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          parent_id = EXCLUDED.parent_id,
          depth = EXCLUDED.depth,
          sort_order = EXCLUDED.sort_order,
          board_type = EXCLUDED.board_type,
          description = EXCLUDED.description;
      `;
    }

    // Dynamic Seed & Sync of Research Posts & Handbook Chapters with Optimistic Lock
    const SEED_VERSION = 'v13_fix_seed_id_and_cache';
    const seedCheck = await sql`SELECT value FROM labs_meta WHERE key = 'seed_posts_version' LIMIT 1;`;
    if (!seedCheck || seedCheck.length === 0 || seedCheck[0].value !== SEED_VERSION) {
      // Optimistic Concurrency Lock: Only the first concurrent instance acquires the lock
      const lockAcquired = await sql`
        INSERT INTO labs_meta (key, value)
        VALUES ('seed_posts_version', ${SEED_VERSION})
        ON CONFLICT (key) DO UPDATE SET value = ${SEED_VERSION}
        WHERE labs_meta.value IS DISTINCT FROM ${SEED_VERSION}
        RETURNING key;
      `;

      if (lockAcquired && lockAcquired.length > 0) {
        // Clean refresh of master archive: Truncate and insert with strict unique IDs
        await sql`TRUNCATE TABLE labs_posts RESTART IDENTITY CASCADE;`;

        for (let i = 0; i < SEED_POSTS.length; i++) {
          const p = SEED_POSTS[i];
          const postId = p.id || (i + 1);
          const createdAt = p.created_at || new Date().toISOString();
          await sql`
            INSERT INTO labs_posts (id, menu_id, title, content, author, author_ip, status, created_at, updated_at)
            VALUES (${postId}, ${p.menu_id}, ${p.title}, ${p.content}, ${p.author || 'uno-km'}, '127.0.0.1', 'published', ${createdAt}, ${createdAt})
            ON CONFLICT (id) DO UPDATE SET
              menu_id = EXCLUDED.menu_id,
              title = EXCLUDED.title,
              content = EXCLUDED.content,
              author = EXCLUDED.author,
              status = EXCLUDED.status,
              updated_at = EXCLUDED.updated_at;
          `;
        }

        // Align Postgres sequence to max id to ensure subsequent user posts work seamlessly
        await sql`SELECT setval(pg_get_serial_sequence('labs_posts', 'id'), COALESCE((SELECT MAX(id) FROM labs_posts), 1));`;
      }
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

  const userAgent = req.headers['user-agent'] || '';
  const isSearchEngine = /googlebot|bingbot|yeti|daumoa|duckduckbot/i.test(userAgent);
  const isAiOrScraper = /gptbot|chatgpt|claudebot|claude-web|anthropic|perplexity|deepseek|google-extended|bytespider|cohere-ai|applebot-extended|ccbot|diffbot|amazonbot|scrapy|python-requests|aiohttp|httpclient|urllib|postman|go-http-client|node-fetch|axios|headlesschrome/i.test(userAgent);

  // Sentinel Active Defense: Intercept AI training crawlers and automated scrapers
  if (!isSearchEngine && isAiOrScraper) {
    res.setHeader('X-Robots-Tag', 'noai, noimageai, noindex, nofollow, noarchive');
    res.setHeader('X-Sentinel-Active-Defense', 'LABS_API_VAULT_BLOCKED');
    return res.status(403).json({
      ok: false,
      error: 'SENTINEL_ACTIVE_DEFENSE_ENGAGED',
      message: 'Automated harvesting of AMEVA Labs research is blocked by Sentinel. Non-commercial research vault protected under AOSF-RFC-001.',
      status: 403
    });
  }

  res.setHeader('X-Robots-Tag', 'noai, noimageai');

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
      res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=3600, stale-while-revalidate=86400');
      const cached = SERVER_CACHE.getMenus();
      if (cached) {
        return res.status(200).json({ ok: true, database_connected: true, cached: true, menus: cached });
      }

      const menus = await sql`
        SELECT id, name, parent_id, depth, sort_order, board_type, description, is_active
        FROM labs_menus
        WHERE is_active = TRUE
        ORDER BY depth ASC, sort_order ASC, name ASC;
      `;
      SERVER_CACHE.setMenus(menus);
      return res.status(200).json({ ok: true, database_connected: true, menus });
    }

    // ── 2. Posts (CRUD) ───────────────────────────────────────────────────────
    if (action === 'get_posts') {
      res.setHeader('Cache-Control', 'public, max-age=30, s-maxage=600, stale-while-revalidate=3600');
      const menu_id = req.query.menu_id || 'all';
      const includeContent = req.query.include_content === 'true' || menu_id === 'newsletter';
      const cacheKey = `${menu_id}_${includeContent}`;

      const cached = SERVER_CACHE.getPosts(cacheKey);
      if (cached) {
        return res.status(200).json({ ok: true, database_connected: true, cached: true, posts: cached });
      }

      let posts;
      if (menu_id && menu_id !== 'all') {
        if (includeContent) {
          posts = await sql`
            SELECT p.id, p.menu_id, p.title, p.content, 
                   SUBSTRING(p.content FROM 1 FOR 300) as excerpt,
                   p.author, p.author_ip, p.status, 
                   p.view_count, p.like_count, p.comment_count, p.created_at, p.updated_at,
                   m.name as menu_name, m.board_type
            FROM labs_posts p
            JOIN labs_menus m ON p.menu_id = m.id
            WHERE (p.menu_id = ${menu_id} OR m.parent_id = ${menu_id})
              AND p.status = 'published'
            ORDER BY 
              CASE WHEN p.menu_id = 'research-handbook' THEN p.id END ASC,
              p.created_at DESC,
              p.id DESC
            LIMIT 100;
          `;
        } else {
          posts = await sql`
            SELECT p.id, p.menu_id, p.title, 
                   SUBSTRING(p.content FROM 1 FOR 300) as excerpt,
                   p.author, p.author_ip, p.status, 
                   p.view_count, p.like_count, p.comment_count, p.created_at, p.updated_at,
                   m.name as menu_name, m.board_type
            FROM labs_posts p
            JOIN labs_menus m ON p.menu_id = m.id
            WHERE (p.menu_id = ${menu_id} OR m.parent_id = ${menu_id})
              AND p.status = 'published'
            ORDER BY 
              CASE WHEN p.menu_id = 'research-handbook' THEN p.id END ASC,
              p.created_at DESC,
              p.id DESC
            LIMIT 100;
          `;
        }
      } else {
        posts = await sql`
          SELECT p.id, p.menu_id, p.title, 
                 SUBSTRING(p.content FROM 1 FOR 300) as excerpt,
                 p.author, p.author_ip, p.status, 
                 p.view_count, p.like_count, p.comment_count, p.created_at, p.updated_at,
                 m.name as menu_name, m.board_type
          FROM labs_posts p
          JOIN labs_menus m ON p.menu_id = m.id
          WHERE p.status = 'published'
          ORDER BY 
            CASE WHEN p.menu_id = 'research-handbook' THEN p.id END ASC,
            p.created_at DESC,
            p.id DESC
          LIMIT 100;
        `;
      }
      SERVER_CACHE.setPosts(cacheKey, posts);
      return res.status(200).json({ ok: true, database_connected: true, posts });
    }

    if (action === 'get_post') {
      res.setHeader('Cache-Control', 'public, max-age=30, s-maxage=1800, stale-while-revalidate=86400');
      const post_id = parseInt(req.query.post_id, 10);
      if (!post_id) return res.status(400).json({ ok: false, error: 'post_id required' });

      const cached = SERVER_CACHE.getPost(post_id);
      if (cached) {
        // Asynchronously track view count without blocking response
        sql`UPDATE labs_posts SET view_count = view_count + 1 WHERE id = ${post_id};`.catch(() => {});
        return res.status(200).json({ ok: true, database_connected: true, cached: true, post: cached });
      }

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
      SERVER_CACHE.setPost(post_id, rows[0]);
      return res.status(200).json({ ok: true, database_connected: true, post: rows[0] });
    }

    if (action === 'create_post' && req.method === 'POST') {
      res.setHeader('Cache-Control', 'no-store');
      return res.status(403).json({
        ok: false,
        error: '보안 정책: AMEVA Labs는 읽기 전용 영구 주권 보관소(Read-Only Sovereign Archive)로 외부 임의 게시글 작성을 영구 차단합니다.'
      });
    }

    if (action === 'delete_post' && req.method === 'POST') {
      res.setHeader('Cache-Control', 'no-store');
      return res.status(403).json({
        ok: false,
        error: '보안 정책: AMEVA Labs는 영구 아카이브로 게시글 삭제가 허용되지 않습니다.'
      });
    }

    if (action === 'like_post' && req.method === 'POST') {
      res.setHeader('Cache-Control', 'no-store');
      const { post_id } = req.body;
      if (!post_id) return res.status(400).json({ ok: false, error: 'post_id required' });
      const updated = await sql`
        UPDATE labs_posts 
        SET like_count = like_count + 1 
        WHERE id = ${post_id}
        RETURNING like_count;
      `;
      SERVER_CACHE.invalidateAll();
      return res.status(200).json({ 
        ok: true, 
        database_connected: true,
        like_count: (updated && updated[0]) ? updated[0].like_count : 0 
      });
    }

    // ── 3. Comments (Nested hierarchy) ────────────────────────────────────────
    if (action === 'get_comments') {
      res.setHeader('Cache-Control', 'public, max-age=5, s-maxage=30, stale-while-revalidate=60');
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
      return res.status(403).json({
        ok: false,
        error: '보안 정책: AMEVA Labs는 읽기 전용 영구 주권 보관소로 외부 댓글 작성을 차단합니다.'
      });
    }

    if (action === 'delete_comment' && req.method === 'POST') {
      return res.status(403).json({
        ok: false,
        error: '보안 정책: 댓글 삭제가 허용되지 않습니다.'
      });
    }

    // Database Reset Action (for maintenance)
    if (action === 'reset_database' && req.method === 'POST') {
      if (!isLocalRequest(req) && process.env.NODE_ENV === 'production' && !req.headers['x-local-secret']) {
        return res.status(403).json({ ok: false, error: 'Unauthorized' });
      }
      await sql`TRUNCATE TABLE labs_comments, labs_posts RESTART IDENTITY CASCADE;`;
      return res.status(200).json({ ok: true, message: 'Database wiped successfully.' });
    }

    // ── Diagnostic / Force Seed Actions ────────────────────────────────────────
    if (action === 'debug_db') {
      res.setHeader('Cache-Control', 'no-store');
      const postCount = await sql`SELECT count(*) FROM labs_posts;`;
      const meta = await sql`SELECT * FROM labs_meta;`;
      const samplePosts = await sql`SELECT id, menu_id, title FROM labs_posts LIMIT 5;`;
      return res.status(200).json({
        ok: true,
        postCount: postCount[0]?.count,
        meta,
        samplePosts,
        lastSchemaError
      });
    }

    if (action === 'force_seed') {
      res.setHeader('Cache-Control', 'no-store');
      await sql`TRUNCATE TABLE labs_posts RESTART IDENTITY CASCADE;`;
      let inserted = 0;
      const errors = [];
      for (let i = 0; i < SEED_POSTS.length; i++) {
        const p = SEED_POSTS[i];
        const postId = i + 1;
        const createdAt = p.created_at || new Date().toISOString();
        try {
          await sql`
            INSERT INTO labs_posts (id, menu_id, title, content, author, author_ip, status, created_at, updated_at)
            VALUES (${postId}, ${p.menu_id}, ${p.title}, ${p.content}, ${p.author || 'uno-km'}, '127.0.0.1', 'published', ${createdAt}, ${createdAt})
            ON CONFLICT (id) DO UPDATE SET
              menu_id = EXCLUDED.menu_id,
              title = EXCLUDED.title,
              content = EXCLUDED.content,
              author = EXCLUDED.author,
              status = EXCLUDED.status,
              updated_at = EXCLUDED.updated_at;
          `;
          inserted++;
        } catch (e) {
          errors.push({ id: postId, title: p.title, error: e.message });
        }
      }
      await sql`SELECT setval(pg_get_serial_sequence('labs_posts', 'id'), COALESCE((SELECT MAX(id) FROM labs_posts), 1));`;
      await sql`
        INSERT INTO labs_meta (key, value) VALUES ('seed_posts_version', 'v13_fix_seed_id_and_cache')
        ON CONFLICT (key) DO UPDATE SET value = 'v13_fix_seed_id_and_cache';
      `;
      SERVER_CACHE.invalidateAll();
      return res.status(200).json({ ok: true, inserted, errors, total: SEED_POSTS.length });
    }

    return res.status(400).json({ ok: false, error: `Unknown action: ${action}` });
  } catch (err) {
    console.error('[Labs API Error]:', err);
    return res.status(500).json({ ok: false, error: err.message });
  }
}
