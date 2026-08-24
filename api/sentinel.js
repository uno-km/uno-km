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
        engine: 'AMEVA-Sentinel v0.7.0 Micro-Precision Engine',
        mode: 'SHADOW',
        timestamp: new Date().toISOString()
      });
    }

    if (action === 'analytics') {
      let events = [];
      let footprints = [];

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
        } catch (dbErr) {
          console.warn('[Sentinel DB Query Fallback to Memory]', dbErr.message);
          events = await memoryEventStore.list({ limit: 500 });
        }
      } else {
        events = await memoryEventStore.list({ limit: 500 });
      }

      const analytics = sentinel.getForensicAnalytics({ events });
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

    return res.status(200).json({
      status: 'success',
      report,
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
