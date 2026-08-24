-- ==============================================================================
-- AMEVA Sovereign Telemetry & Footprinting Schema (Neon PostgreSQL)
-- Multi-layered hardware, device, geospatial & interaction logging tables
-- ==============================================================================

-- 1. Visitor Sessions & Hardware Fingerprint
CREATE TABLE IF NOT EXISTS visitor_sessions (
    session_id VARCHAR(64) PRIMARY KEY,
    visitor_id VARCHAR(64) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_seen_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Geospatial & Network (from Vercel Edge Headers)
    ip_address VARCHAR(45),
    country VARCHAR(10),
    city VARCHAR(100),
    region VARCHAR(50),
    latitude NUMERIC(9,6),
    longitude NUMERIC(9,6),
    
    -- Device & Client OS
    platform VARCHAR(50),
    user_agent TEXT,
    device_type VARCHAR(20),
    is_touch BOOLEAN DEFAULT FALSE,
    language VARCHAR(20),
    timezone VARCHAR(50),
    
    -- Hardware Capabilities (Unmasked GPU / CPU / Memory)
    cpu_cores INT,
    ram_gb NUMERIC(4,1),
    gpu_renderer TEXT,
    has_webgpu BOOLEAN DEFAULT FALSE,
    screen_resolution VARCHAR(30),
    pixel_ratio NUMERIC(3,2),
    color_depth INT,
    
    -- Network Performance API
    connection_type VARCHAR(20),
    downlink_mbps NUMERIC(6,2),
    rtt_ms INT
);

CREATE INDEX IF NOT EXISTS idx_sessions_visitor_id ON visitor_sessions(visitor_id);
CREATE INDEX IF NOT EXISTS idx_sessions_created_at ON visitor_sessions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sessions_country ON visitor_sessions(country);

-- 2. Pageviews & Engagement Dwell Time
CREATE TABLE IF NOT EXISTS page_views (
    view_id BIGSERIAL PRIMARY KEY,
    session_id VARCHAR(64) REFERENCES visitor_sessions(session_id) ON DELETE CASCADE,
    visitor_id VARCHAR(64) NOT NULL,
    url TEXT NOT NULL,
    pathname VARCHAR(255) NOT NULL,
    referrer TEXT,
    viewed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    dwell_seconds INT DEFAULT 0,
    max_scroll_percent INT DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_pageviews_session_id ON page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_pageviews_pathname ON page_views(pathname);
CREATE INDEX IF NOT EXISTS idx_pageviews_viewed_at ON page_views(viewed_at DESC);

-- 3. Click & Micro-Interaction Footprints
CREATE TABLE IF NOT EXISTS click_events (
    event_id BIGSERIAL PRIMARY KEY,
    session_id VARCHAR(64) REFERENCES visitor_sessions(session_id) ON DELETE CASCADE,
    visitor_id VARCHAR(64) NOT NULL,
    pathname VARCHAR(255) NOT NULL,
    event_type VARCHAR(50) NOT NULL, -- 'interaction_click', 'copy_code', 'lang_switch', 'custom_event'
    target_tag VARCHAR(30),
    target_id VARCHAR(100),
    target_class VARCHAR(150),
    target_text TEXT,
    target_url TEXT,
    is_external BOOLEAN DEFAULT FALSE,
    occurred_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_clicks_session_id ON click_events(session_id);
CREATE INDEX IF NOT EXISTS idx_clicks_event_type ON click_events(event_type);
CREATE INDEX IF NOT EXISTS idx_clicks_occurred_at ON click_events(occurred_at DESC);

-- 4. AI Crawlers & Search Engine Bot Footprints
CREATE TABLE IF NOT EXISTS bot_crawler_logs (
    log_id BIGSERIAL PRIMARY KEY,
    bot_name VARCHAR(100) NOT NULL,
    bot_category VARCHAR(50) NOT NULL, -- 'AI_AGENT', 'SEARCH_ENGINE', 'SCRAPER', 'SOCIAL_BOT'
    requested_path VARCHAR(255) NOT NULL,
    ip_address VARCHAR(45),
    country VARCHAR(10),
    city VARCHAR(100),
    user_agent TEXT,
    detected_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_bot_name ON bot_crawler_logs(bot_name);
CREATE INDEX IF NOT EXISTS idx_bot_category ON bot_crawler_logs(bot_category);
CREATE INDEX IF NOT EXISTS idx_bot_detected_at ON bot_crawler_logs(detected_at DESC);

-- 5. Deep Forensic Footprints (하드웨어/브라우저/생체 고유 지문 & 과거사)
CREATE TABLE IF NOT EXISTS deep_forensic_footprints (
    footprint_id BIGSERIAL PRIMARY KEY,
    session_id VARCHAR(64) REFERENCES visitor_sessions(session_id) ON DELETE CASCADE,
    visitor_id VARCHAR(64) NOT NULL,
    canvas_hash VARCHAR(64),
    audio_hash VARCHAR(64),
    webgl_vendor TEXT,
    webgl_renderer TEXT,
    webgl_max_texture_size INT,
    math_jit_precision TEXT,
    installed_fonts TEXT,
    font_count INT DEFAULT 0,
    screen_hz INT,
    color_gamut VARCHAR(20),
    is_hdr BOOLEAN DEFAULT FALSE,
    color_depth INT,
    battery_level NUMERIC(5,2),
    is_charging BOOLEAN,
    charging_time INT,
    audio_inputs_count INT,
    video_inputs_count INT,
    audio_outputs_count INT,
    is_webdriver BOOLEAN DEFAULT FALSE,
    cookie_enabled BOOLEAN DEFAULT TRUE,
    do_not_track VARCHAR(10),
    languages_list TEXT,
    first_seen_at TIMESTAMP WITH TIME ZONE,
    total_visit_count INT DEFAULT 1,
    total_session_count INT DEFAULT 1,
    past_paths_history TEXT,
    captured_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_forensic_visitor_id ON deep_forensic_footprints(visitor_id);
CREATE INDEX IF NOT EXISTS idx_forensic_canvas_hash ON deep_forensic_footprints(canvas_hash);
CREATE INDEX IF NOT EXISTS idx_forensic_audio_hash ON deep_forensic_footprints(audio_hash);




-- ==============================================================================
-- 6. Multi-Tier Hierarchical & 3D Dynamic Knowledge Graph (Neon PostgreSQL)
-- Multi-level (1~4 depth), N:M relations, 3D physics coordinates & dynamic metadata
-- ==============================================================================

CREATE TABLE IF NOT EXISTS graph_nodes (
    node_id VARCHAR(100) PRIMARY KEY,              -- 'AMEVA-Universe', 'termux-bitnet', 'ARM64-NEON-DotProd'
    name VARCHAR(150) NOT NULL,                    -- UI Display Name
    category VARCHAR(50) NOT NULL,                 -- 'ROOT', 'DOMAIN', 'TLP_LIBRARY', 'CORE_ENGINE', 'ALGORITHM', 'APP'
    depth_level INT DEFAULT 1,                     -- 1=Root, 2=Domain Category, 3=Project/TLP, 4=Kernel/Module
    parent_id VARCHAR(100) REFERENCES graph_nodes(node_id) ON DELETE SET NULL,
    description TEXT,                              -- Technical Description
    tech_stack TEXT[],                             -- ARRAY['ARM64', 'NEON', 'C++17', 'Python']
    tags TEXT[],                                   -- ARRAY['llm', '1.58-bit', 'quantization']
    
    -- 3D Visual & Physics Attributes
    node_radius NUMERIC(5,2) DEFAULT 16.0,
    node_weight NUMERIC(5,2) DEFAULT 1.0,
    group_color VARCHAR(30) DEFAULT '#7C3AED',
    pos_x NUMERIC(8,3) DEFAULT 0.0,
    pos_y NUMERIC(8,3) DEFAULT 0.0,
    pos_z NUMERIC(8,3) DEFAULT 0.0,
    orbit_phase NUMERIC(6,4) DEFAULT 0.0,
    orbit_freq NUMERIC(6,4) DEFAULT 0.002,
    
    -- Ecosystem Integration & Links
    repo_url TEXT,
    docs_url TEXT,
    demo_url TEXT,
    pypi_package VARCHAR(100),
    npm_package VARCHAR(100),
    
    -- Cinematic Tour & Voice Narration
    tour_order INT,
    audio_narrative TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_graph_nodes_category ON graph_nodes(category);
CREATE INDEX IF NOT EXISTS idx_graph_nodes_depth ON graph_nodes(depth_level);
CREATE INDEX IF NOT EXISTS idx_graph_nodes_parent ON graph_nodes(parent_id);

CREATE TABLE IF NOT EXISTS graph_edges (
    edge_id BIGSERIAL PRIMARY KEY,
    source_node_id VARCHAR(100) NOT NULL REFERENCES graph_nodes(node_id) ON DELETE CASCADE,
    target_node_id VARCHAR(100) NOT NULL REFERENCES graph_nodes(node_id) ON DELETE CASCADE,
    relation_type VARCHAR(50) DEFAULT 'HIERARCHY', -- 'HIERARCHY', 'DEPENDENCY', 'DATA_FLOW', 'HARDWARE_BINDING'
    edge_weight NUMERIC(4,2) DEFAULT 1.0,
    is_bidirectional BOOLEAN DEFAULT FALSE,
    label VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_graph_edge UNIQUE (source_node_id, target_node_id, relation_type)
);

CREATE INDEX IF NOT EXISTS idx_graph_edges_source ON graph_edges(source_node_id);
CREATE INDEX IF NOT EXISTS idx_graph_edges_target ON graph_edges(target_node_id);
CREATE INDEX IF NOT EXISTS idx_graph_edges_type ON graph_edges(relation_type);

-- 5. Real-Time Guestbook & Visitor Analytics
CREATE TABLE IF NOT EXISTS guestbook_entries (
    id BIGSERIAL PRIMARY KEY,
    author VARCHAR(100) DEFAULT '익명 엔지니어',
    message TEXT NOT NULL,
    ip_country VARCHAR(50) DEFAULT 'KR',
    avatar_color VARCHAR(20) DEFAULT '#00EFFF',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_guestbook_created_at ON guestbook_entries(created_at DESC);

CREATE TABLE IF NOT EXISTS analytics_visitors (
    id INT PRIMARY KEY DEFAULT 1,
    visitor_count BIGINT DEFAULT 1420,
    last_visited TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO analytics_visitors (id, visitor_count)
VALUES (1, 1420)
ON CONFLICT (id) DO NOTHING;
