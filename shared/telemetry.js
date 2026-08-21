/**
 * AMEVA Sovereign Telemetry & Hyper-Footprinting Engine (shared/telemetry.js)
 * High-performance, zero-dependency client telemetry collector.
 * Captures hardware specs, network state, engagement dwell time, and interaction events.
 * Transmits via navigator.sendBeacon with graceful silent failover.
 */
(function() {
    'use strict';

    const API_ENDPOINT = '/api/telemetry';

    // 1. Generate / Retrieve Persistent Identifiers
    function getUUID(key, storage) {
        try {
            let val = storage.getItem(key);
            if (!val) {
                val = 'usr_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now().toString(36);
                storage.setItem(key, val);
            }
            return val;
        } catch (e) {
            return 'anon_' + Math.random().toString(36).substring(2, 15);
        }
    }

    const visitorId = getUUID('__ameva_vid', localStorage);
    const sessionId = getUUID('__ameva_sid', sessionStorage);

    // 2. Hardware & Device Fingerprinting
    function getHardwareFootprint() {
        const nav = navigator || {};
        const scr = window.screen || {};

        // WebGL GPU Renderer Inspection
        let gpuRenderer = 'unknown';
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (gl) {
                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                if (debugInfo) {
                    gpuRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || 'generic_webgl';
                }
            }
        } catch (e) {}

        // Network Connection API
        const conn = nav.connection || nav.mozConnection || nav.webkitConnection || {};

        return {
            visitor_id: visitorId,
            session_id: sessionId,
            cpu_cores: nav.hardwareConcurrency || null,
            ram_gb: nav.deviceMemory || null,
            gpu_renderer: gpuRenderer,
            has_webgpu: !!nav.gpu,
            screen_width: scr.width || window.innerWidth,
            screen_height: scr.height || window.innerHeight,
            viewport_width: window.innerWidth,
            viewport_height: window.innerHeight,
            pixel_ratio: window.devicePixelRatio || 1,
            color_depth: scr.colorDepth || 24,
            is_touch: (nav.maxTouchPoints || 0) > 0,
            platform: nav.platform || 'unknown',
            user_agent: nav.userAgent || '',
            language: nav.language || 'en',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
            connection_type: conn.effectiveType || conn.type || 'unknown',
            downlink_mbps: conn.downlink || null,
            rtt_ms: conn.rtt || null
        };
    }

    // 3. Telemetry Transmission Dispatcher
    function sendPayload(type, data) {
        const payload = {
            type: type,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            pathname: window.location.pathname,
            referrer: document.referrer || '',
            session_id: sessionId,
            visitor_id: visitorId,
            ...data
        };

        const jsonStr = JSON.stringify(payload);

        // Prefer sendBeacon for unblockable background transmission
        if (navigator.sendBeacon) {
            try {
                const blob = new Blob([jsonStr], { type: 'application/json' });
                navigator.sendBeacon(API_ENDPOINT, blob);
                return;
            } catch (e) {}
        }

        // Fallback to fetch with keepalive
        try {
            fetch(API_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: jsonStr,
                keepalive: true
            }).catch(() => {});
        } catch (e) {}
    }

    // 4. Session & Pageview Initializer
    const startTime = Date.now();
    let maxScroll = 0;
    const hardware = getHardwareFootprint();

    // Send initial session handshake + pageview
    sendPayload('session_init', { hardware });

    // 5. Scroll Depth Tracking
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const currentPercent = Math.round((window.scrollY / totalHeight) * 100);
            if (currentPercent > maxScroll) {
                maxScroll = currentPercent;
            }
        }
    }, { passive: true });

    // 6. Dwell Time & Exit Flush
    function flushEngagement() {
        const dwellSeconds = Math.round((Date.now() - startTime) / 1000);
        sendPayload('dwell_ping', {
            dwell_seconds: dwellSeconds,
            max_scroll_percent: maxScroll
        });
    }

    // Heartbeat every 20 seconds
    setInterval(flushEngagement, 20000);

    // Flush on page leave / visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            flushEngagement();
        }
    });
    window.addEventListener('beforeunload', flushEngagement);

    // 7. Global Click & Interaction Capture
    document.addEventListener('click', (e) => {
        const target = e.target.closest('a, button, [role="button"], select');
        if (!target) return;

        const tag = target.tagName.toLowerCase();
        const text = (target.innerText || target.value || target.getAttribute('aria-label') || '').trim().slice(0, 80);
        const href = target.getAttribute('href') || '';
        const id = target.id || '';
        const cls = (target.className || '').toString().slice(0, 80);

        sendPayload('interaction_click', {
            target_tag: tag,
            target_id: id,
            target_class: cls,
            target_text: text,
            target_url: href,
            is_external: href.startsWith('http') && !href.includes(window.location.hostname)
        });
    }, { passive: true });

    // Export global helper for manual telemetry hooks
    window.AMEVA_TELEMETRY = {
        trackEvent: (eventType, customData) => {
            sendPayload('custom_event', { event_type: eventType, ...customData });
        },
        visitorId,
        sessionId
    };
})();
