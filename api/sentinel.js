/**
 * Vercel Serverless API: Pure AMEVA Sentinel Edge Security Engine
 * Route: /api/sentinel
 * 
 * Capabilities:
 * 1. 0~100 Deterministic Threat Scoring & 3-Way Triage (HUMAN / AI_AGENT / CRAWLER_TOOL)
 * 2. Headless Deep & SwiftShader Virtual GPU Evasion Detection
 * 3. Passive HTTP Missing Headers Fingerprinting (cURL / Spoofed Clients)
 * 4. Server-Side Footprint Synthesis for Non-JS Clients (AI Crawlers / CLI)
 * 5. Neon Serverless PostgreSQL Asynchronous Persistence & Fallback
 * 6. Live Dashboard 3-Way Analytics JSON Feeder
 */
import {
  createSentinel,
  SentinelAction,
  MemoryRiskEventStore,
  MemoryCounterStore,
  toStoredRiskEvent
} from '../lib/sentinel/index.js';

// In-Memory Fallback Stores
const memoryEventStore = new MemoryRiskEventStore({ maxItems: 1000 });
const memoryCounterStore = new MemoryCounterStore();
const memoryGeoLogs = [];

const sentinel = createSentinel({
  mode: 'shadow',
  eventStore: memoryEventStore,
  counterStore: memoryCounterStore
});

let isDbInitialized = false;

async function getNeonClient(databaseUrl) {
  if (!databaseUrl) return null;
  try {
    const neonModule = await import('@neondatabase/serverless').catch(() => null);
    if (neonModule && typeof neonModule.neon === 'function') {
      return neonModule.neon(databaseUrl);
    }
  } catch (e) {
    console.warn('[Sentinel Neon Dynamic Import Error]', e.message);
  }
  return null;
}

async function ensureSentinelTable(sql) {
  if (isDbInitialized) return;
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS sentinel_risk_events (
        id BIGSERIAL PRIMARY KEY,
        trace_id VARCHAR(64) UNIQUE NOT NULL,
        visitor_id VARCHAR(64) NOT NULL,
        ip_address VARCHAR(45),
        country VARCHAR(20),
        city VARCHAR(100),
        asn_provider VARCHAR(100),
        origin_referrer TEXT,
        path_hop_chain TEXT,
        score INT NOT NULL,
        action VARCHAR(40) NOT NULL,
        recommended_action VARCHAR(40) NOT NULL,
        triage_category VARCHAR(40) NOT NULL,
        vendor_group VARCHAR(100),
        user_agent TEXT,
        webgl_renderer TEXT,
        canvas_subpixel_hash VARCHAR(64),
        audio_oscillator_hash VARCHAR(64),
        math_jit_precision TEXT,
        battery_charge_status VARCHAR(30),
        screen_refresh_hz INT,
        evidence JSONB,
        evaluated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS sentinel_geo_deliveries (
        id BIGSERIAL PRIMARY KEY,
        bot_name VARCHAR(100) NOT NULL,
        bot_vendor VARCHAR(100) NOT NULL,
        requested_path VARCHAR(255) NOT NULL,
        served_format VARCHAR(50) NOT NULL,
        bytes_served INT NOT NULL,
        bytes_saved INT NOT NULL,
        savings_ratio NUMERIC(5,2) NOT NULL,
        ip_address VARCHAR(45),
        country VARCHAR(20),
        city VARCHAR(100),
        delivered_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    isDbInitialized = true;
  } catch (err) {
    console.warn('[Sentinel DB Init Warning]', err.message);
  }
}

export default async function handler(req, res) {
  // CORS & Security Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-ameva-collector-token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const databaseUrl = process.env.DATABASE_URL;
  let sql = null;
  if (databaseUrl) {
    try {
      sql = await getNeonClient(databaseUrl);
      if (sql) {
        await ensureSentinelTable(sql);
      }
    } catch (e) {
      console.warn('[Sentinel DB Connect Warning]', e.message);
    }
  }

  // Handle GET Analytics Request for Dashboard
  if (req.method === 'GET') {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const action = url.searchParams.get('action') || 'analytics';

    if (action === 'ping') {
      return res.status(200).json({
        status: 'ok',
        engine: 'AMEVA-Sentinel v0.7.0 Micro-Precision Engine (GEO Enabled)',
        mode: 'SHADOW',
        timestamp: new Date().toISOString()
      });
    }

    if (action === 'geo' || action === 'llms') {
      const targetPath = url.searchParams.get('path') || '/';
      const geoResult = sentinel.resolveGeoPayload({
        headers: req.headers,
        url: targetPath
      });

      // Force deliver markdown even if UA is browser for direct testing
      const payload = geoResult.payload || `${sentinel.geoEngine['config']?.authorityHeader || ''}\n---\n# AMEVA Sovereign Ecosystem\n`;
      const servedBytes = new TextEncoder().encode(payload).length;
      const originalBytes = 180000;
      const savedBytes = Math.max(0, originalBytes - servedBytes);
      const savingsRatio = Number(((savedBytes / originalBytes) * 100).toFixed(1));

      res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
      res.setHeader('X-Sentinel-Bandwidth-Saved', `${(savedBytes / 1024).toFixed(1)}KB (${savingsRatio}%)`);
      res.setHeader('X-Powered-By', 'AMEVA-Sentinel-GEO-v0.7.0');

      const headers = req.headers || {};
      const ip = String(headers['x-forwarded-for'] || headers['x-real-ip'] || req.socket?.remoteAddress || '127.0.0.1').split(',')[0].trim();
      const maskedIp = sentinel.maskIpAddress(ip);
      const country = (headers['x-vercel-ip-country'] || headers['cf-ipcountry'] || 'GLOBAL');
      const city = (headers['x-vercel-ip-city'] ? decodeURIComponent(headers['x-vercel-ip-city']) : (headers['cf-ipcity'] || 'Edge'));

      const geoRecord = {
        botName: geoResult.botName || 'DirectGeoFetcher',
        botVendor: geoResult.botVendor || 'AI_Agent',
        requestedPath: targetPath,
        servedFormat: 'text/markdown; charset=utf-8',
        bytesServed: servedBytes,
        bytesSaved: savedBytes,
        savingsRatio,
        ipAddress: maskedIp,
        country,
        city,
        deliveredAt: new Date().toISOString()
      };
      memoryGeoLogs.unshift(geoRecord);

      if (sql) {
        sql`
          INSERT INTO sentinel_geo_deliveries (
            bot_name, bot_vendor, requested_path, served_format, bytes_served, bytes_saved, savings_ratio, ip_address, country, city, delivered_at
          ) VALUES (
            ${geoRecord.botName},
            ${geoRecord.botVendor},
            ${targetPath},
            ${geoRecord.servedFormat},
            ${servedBytes},
            ${savedBytes},
            ${savingsRatio},
            ${maskedIp},
            ${country},
            ${city},
            CURRENT_TIMESTAMP
          );
        `.catch(e => console.warn('[Sentinel Direct Geo DB Insert Warning]', e.message));
      }

      return res.status(200).send(payload);
    }

    if (action === 'analytics') {
      let events = [];
      let geoLogs = [];

      // Query from Neon DB if available
      if (sql) {
        try {
          const dbRows = await sql`
            SELECT 
              trace_id as "traceId",
              visitor_id as "sessionId",
              ip_address as "ipAddress",
              country,
              city,
              asn_provider as "asnProvider",
              origin_referrer as "originReferrer",
              path_hop_chain as "pathHopChain",
              score,
              action,
              recommended_action as "recommendedAction",
              triage_category as "triageCategory",
              vendor_group as "vendorGroup",
              user_agent as "userAgent",
              webgl_renderer as "webglRenderer",
              canvas_subpixel_hash as "canvasHash",
              audio_oscillator_hash as "audioHash",
              math_jit_precision as "mathPrecision",
              battery_charge_status as "batteryStatus",
              screen_refresh_hz as "screenHz",
              evidence,
              evaluated_at as "evaluatedAt"
            FROM sentinel_risk_events
            ORDER BY evaluated_at DESC
            LIMIT 500;
          `;
          events = dbRows.map(row => ({
            traceId: row.traceId,
            sessionId: row.sessionId,
            score: row.score,
            action: row.action,
            recommendedAction: row.recommendedAction,
            classification: {
              triageCategory: row.triageCategory,
              vendorGroup: row.vendorGroup
            },
            signals: {
              userAgent: row.userAgent,
              webglRenderer: row.webglRenderer,
              pastPathsHistory: row.pathHopChain,
              customSignals: {
                country: row.country,
                city: row.city,
                asnProvider: row.asnProvider,
                originReferrer: row.originReferrer,
                screenHz: row.screenHz
              }
            },
            evidence: row.evidence || [],
            evaluatedAt: row.evaluatedAt
          }));

          const dbGeoRows = await sql`
            SELECT
              id,
              bot_name as "botName",
              bot_vendor as "botVendor",
              requested_path as "requestedPath",
              served_format as "servedFormat",
              bytes_served as "bytesServed",
              bytes_saved as "bytesSaved",
              savings_ratio as "savingsRatio",
              ip_address as "ipAddress",
              country,
              city,
              delivered_at as "deliveredAt"
            FROM sentinel_geo_deliveries
            ORDER BY delivered_at DESC
            LIMIT 100;
          `;
          geoLogs = dbGeoRows;
        } catch (dbErr) {
          console.warn('[Sentinel DB Query Fallback to Memory]', dbErr.message);
          events = await memoryEventStore.list({ limit: 500 });
          geoLogs = memoryGeoLogs;
        }
      } else {
        events = await memoryEventStore.list({ limit: 500 });
        geoLogs = memoryGeoLogs;
      }

      const analytics = sentinel.getForensicAnalytics({ events, geoLogs });
      return res.status(200).json(analytics);
    }
  }

  // Handle Ingestion Scoring (POST)
  try {
    const report = await sentinel.score(req);

    // Extract Micro-Precision Physical & Route Forensics
    const headers = req.headers || {};
    const body = req.body || {};
    const signals = req.signals || {};

    const originReferrer = headers['referer'] || headers['origin'] || body?.referrer || signals?.referrer || 'Direct / Bookmark';
    const clientPath = req.url || body?.path || signals?.pastPathsHistory || '/';
    const pastPaths = signals?.pastPathsHistory || body?.past_paths || clientPath;

    // Detect Cloud Infrastructure / Datacenter ASN Provider
    const ip = String(headers['x-forwarded-for'] || headers['x-real-ip'] || req.socket?.remoteAddress || '127.0.0.1').split(',')[0].trim();
    const maskedIp = sentinel.maskIpAddress(ip);
    const country = (headers['x-vercel-ip-country'] || headers['cf-ipcountry'] || 'GLOBAL');
    const city = (headers['x-vercel-ip-city'] ? decodeURIComponent(headers['x-vercel-ip-city']) : (headers['cf-ipcity'] || 'Edge'));

    let asnProvider = headers['x-vercel-ip-as-number'] ? `AS${headers['x-vercel-ip-as-number']}` : 'Residential/Standard';
    if (/amazon|aws/i.test(headers['user-agent'] || '')) asnProvider = 'AWS Cloud Infrastructure';
    else if (/azure/i.test(headers['user-agent'] || '')) asnProvider = 'Microsoft Azure Cloud';
    else if (/google/i.test(headers['user-agent'] || '')) asnProvider = 'Google Cloud / Crawler Network';
    else if (/cloudflare/i.test(headers['user-agent'] || '')) asnProvider = 'Cloudflare Edge Proxy';

    // Physical Hardware Fingerprints
    const webglRenderer = signals?.webglRenderer || body?.webgl_renderer || 'server-http-client';
    const canvasSubpixelHash = signals?.canvasHash || body?.canvas_hash || 'none';
    const audioOscillatorHash = signals?.audioHash || body?.audio_hash || 'none';
    const mathJitPrecision = signals?.mathPrecision || body?.math_jit_precision || String(Math.sin(1.0).toFixed(16));
    const batteryStatus = signals?.isCharging !== undefined ? (signals.isCharging ? 'AC Charging (Plugged)' : 'Battery Discharging') : 'Desktop/Unknown';
    const screenHz = Number(signals?.screenHz || body?.screen_hz || 60);

    const triage = report.classification?.triageCategory || 'HUMAN';
    const vendor = report.classification?.vendorGroup || 'HumanUser';
    const footprint = sentinel.synthesizeFootprint(report, req);

    // Asynchronously Persist to Neon DB
    if (sql) {
      sql`
        INSERT INTO sentinel_risk_events (
          trace_id, visitor_id, ip_address, country, city, asn_provider, origin_referrer, path_hop_chain, score, action, recommended_action, triage_category, vendor_group, user_agent, webgl_renderer, canvas_subpixel_hash, audio_oscillator_hash, math_jit_precision, battery_charge_status, screen_refresh_hz, evidence, evaluated_at
        ) VALUES (
          ${report.traceId},
          ${footprint.visitorId},
          ${maskedIp},
          ${country},
          ${city},
          ${asnProvider},
          ${originReferrer},
          ${pastPaths},
          ${report.score},
          ${report.action},
          ${report.recommendedAction},
          ${triage},
          ${vendor},
          ${headers['user-agent'] || ''},
          ${webglRenderer},
          ${canvasSubpixelHash},
          ${audioOscillatorHash},
          ${mathJitPrecision},
          ${batteryStatus},
          ${screenHz},
          ${JSON.stringify(report.evidence)},
          ${new Date(report.evaluatedAt)}
        )
        ON CONFLICT (trace_id) DO NOTHING;
      `.catch(err => {
        console.warn('[Sentinel DB Insert Async Error]', err.message);
      });
    }

    // 2. Resolve GEO Markdown Delivery for AI Agents
    const geoResult = sentinel.resolveGeoPayload(req);
    if (geoResult.shouldDeliver) {
      const geoRecord = {
        botName: geoResult.botName,
        botVendor: geoResult.botVendor,
        requestedPath: geoResult.requestedPath,
        servedFormat: geoResult.contentType,
        bytesServed: geoResult.servedBytes,
        bytesSaved: geoResult.savedBytes,
        savingsRatio: geoResult.savingsRatio,
        ipAddress: maskedIp,
        country,
        city,
        deliveredAt: geoResult.deliveredAt
      };
      memoryGeoLogs.unshift(geoRecord);
      if (memoryGeoLogs.length > 500) memoryGeoLogs.pop();

      if (sql) {
        sql`
          INSERT INTO sentinel_geo_deliveries (
            bot_name, bot_vendor, requested_path, served_format, bytes_served, bytes_saved, savings_ratio, ip_address, country, city, delivered_at
          ) VALUES (
            ${geoResult.botName},
            ${geoResult.botVendor},
            ${geoResult.requestedPath},
            ${geoResult.contentType},
            ${geoResult.servedBytes},
            ${geoResult.savedBytes},
            ${geoResult.savingsRatio},
            ${maskedIp},
            ${country},
            ${city},
            ${new Date(geoResult.deliveredAt)}
          );
        `.catch(e => console.warn('[Sentinel Geo DB Insert Warning]', e.message));
      }
    }

    return res.status(200).json({
      status: 'success',
      report,
      geo: geoResult.shouldDeliver ? geoResult : undefined,
      debugHeaders: {
        ua: headers['user-agent'],
        secFetchDest: headers['sec-fetch-dest'],
        secChUa: headers['sec-ch-ua'],
        acceptLang: headers['accept-language'],
        allHeaderKeys: Object.keys(headers)
      },
      forensics: {
        origin: originReferrer,
        hopChain: pastPaths,
        asn: asnProvider,
        geo: `${country} (${city})`,
        physical: {
          webglRenderer,
          screenHz,
          batteryStatus,
          mathJitPrecision
        }
      }
    });
  } catch (err) {
    console.error('[Sentinel API Ingest Error]', err);
    return res.status(500).json({
      status: 'error',
      message: err.message || 'Internal Sentinel Evaluation Error'
    });
  }
}
