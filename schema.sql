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

