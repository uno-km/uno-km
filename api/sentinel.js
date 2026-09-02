/**
 * Vercel Serverless API: Pure AMEVA Sentinel Edge Security Engine
 * Route: /api/sentinel
 * 
 * High-Performance Batch Ingestion Architecture:
 * 1. Global Singleton SQL Connection (Zero Pool Thrashing)
 * 2. In-Memory Micro-Batch Buffer & Periodic / Threshold Bulk Insert
 * 3. 0~100 Deterministic Threat Scoring & 3-Way Triage (HUMAN / AI_AGENT / CRAWLER_TOOL)
 * 4. Headless Deep & SwiftShader Virtual GPU Evasion Detection
 * 5. Passive HTTP Missing Headers Fingerprinting (cURL / Spoofed Clients)
 * 6. Server-Side Footprint Synthesis for Non-JS Clients (AI Crawlers / CLI)
 * 7. Live Dashboard 3-Way Analytics & GEO Bandwidth Optimization Feeder
 */
import {
  createSentinel,
  SentinelAction,
  MemoryRiskEventStore,
  MemoryCounterStore,
  toStoredRiskEvent,
  resolveProviderAdapter,
  evaluateEdgePolicy
} from '../lib/sentinel/index.js';

// In-Memory Fast Fallback Stores
const memoryEventStore = new MemoryRiskEventStore({ maxItems: 1000 });
const memoryCounterStore = new MemoryCounterStore();
const memoryGeoLogs = [];

const sentinel = createSentinel({
  mode: 'shadow',
  eventStore: memoryEventStore,
  counterStore: memoryCounterStore
});

// ── Global Singleton DB Client (Zero Pool Thrashing) ───────────────────
let globalSql = null;
let isSchemaEnsured = false;

async function getGlobalSql() {
  const databaseUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;
  if (!databaseUrl) return null;
  if (globalSql) return globalSql;

  try {
    const neonModule = await import('@neondatabase/serverless').catch(() => null);
    if (neonModule && typeof neonModule.neon === 'function') {
      globalSql = neonModule.neon(databaseUrl);
      await ensureSentinelTables(globalSql);
      return globalSql;
    }
  } catch (e) {
    console.warn('[Sentinel Singleton DB Connect Warning]', e.message);
  }
  return null;
}

async function ensureSentinelTables(sql) {
  if (isSchemaEnsured) return;
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

    // ── v2 Shadow Observability Schema Extension ──────────────────────
    // Zero-downtime column addition for multi-axis assessment persistence.
    await sql`ALTER TABLE sentinel_risk_events ADD COLUMN IF NOT EXISTS risk_level VARCHAR(40);`;
    await sql`ALTER TABLE sentinel_risk_events ADD COLUMN IF NOT EXISTS actor_claim_type VARCHAR(40);`;
    await sql`ALTER TABLE sentinel_risk_events ADD COLUMN IF NOT EXISTS actor_claim_state VARCHAR(40);`;
    await sql`ALTER TABLE sentinel_risk_events ADD COLUMN IF NOT EXISTS actor_claim_verification VARCHAR(40);`;
    await sql`ALTER TABLE sentinel_risk_events ADD COLUMN IF NOT EXISTS evidence_codes JSONB;`;
    await sql`ALTER TABLE sentinel_risk_events ADD COLUMN IF NOT EXISTS policy_version VARCHAR(40);`;

    isSchemaEnsured = true;
  } catch (err) {
    console.warn('[Sentinel DB Init Warning]', err.message);
  }
}

// ── In-Memory Micro-Batch Ingestion Buffer (Zero Millisecond Hit) ──────
const BATCH_SIZE_THRESHOLD = 5;
const FLUSH_INTERVAL_MS = 3000;
let pendingRiskEvents = [];
let pendingGeoDeliveries = [];
let lastFlushTime = Date.now();
let isFlushing = false;

async function flushBatchQueue(force = false) {
  const now = Date.now();
  const shouldFlush = force || 
    pendingRiskEvents.length >= BATCH_SIZE_THRESHOLD || 
    pendingGeoDeliveries.length >= BATCH_SIZE_THRESHOLD ||
    (now - lastFlushTime >= FLUSH_INTERVAL_MS && (pendingRiskEvents.length > 0 || pendingGeoDeliveries.length > 0));

  if (!shouldFlush || isFlushing) return;

  isFlushing = true;
  lastFlushTime = now;

  const eventsToFlush = [...pendingRiskEvents];
  const geoToFlush = [...pendingGeoDeliveries];
  pendingRiskEvents = [];
  pendingGeoDeliveries = [];

  const sql = await getGlobalSql();
  if (!sql) {
    isFlushing = false;
    return;
  }

  try {
    // 1. Bulk Insert Risk Events in 1 Single Query
    if (eventsToFlush.length > 0) {
      await Promise.allSettled(
        eventsToFlush.map(ev => 
          sql`
            INSERT INTO sentinel_risk_events (
              trace_id, visitor_id, ip_address, country, city, asn_provider, origin_referrer, path_hop_chain, score, action, recommended_action, triage_category, vendor_group, user_agent, webgl_renderer, canvas_subpixel_hash, audio_oscillator_hash, math_jit_precision, battery_charge_status, screen_refresh_hz, evidence, evaluated_at, risk_level, actor_claim_type, actor_claim_state, actor_claim_verification, evidence_codes, policy_version
            ) VALUES (
              ${ev.trace_id},
              ${ev.visitor_id},
              ${ev.ip_address},
              ${ev.country},
              ${ev.city},
              ${ev.asn_provider},
              ${ev.origin_referrer},
              ${ev.path_hop_chain},
              ${ev.score},
              ${ev.action},
              ${ev.recommended_action},
              ${ev.triage_category},
              ${ev.vendor_group},
              ${ev.user_agent},
              ${ev.webgl_renderer},
              ${ev.canvas_subpixel_hash},
              ${ev.audio_oscillator_hash},
              ${ev.math_jit_precision},
              ${ev.battery_charge_status},
              ${ev.screen_refresh_hz},
              ${ev.evidence},
              ${ev.evaluated_at},
              ${ev.risk_level || null},
              ${ev.actor_claim_type || null},
              ${ev.actor_claim_state || null},
              ${ev.actor_claim_verification || null},
              ${ev.evidence_codes || null},
              ${ev.policy_version || null}
            )
            ON CONFLICT (trace_id) DO NOTHING;
          `
        )
      );
    }

    // 2. Bulk Insert GEO Deliveries in 1 Single Batch
    if (geoToFlush.length > 0) {
      await Promise.allSettled(
        geoToFlush.map(geo =>
          sql`
            INSERT INTO sentinel_geo_deliveries (
              bot_name, bot_vendor, requested_path, served_format, bytes_served, bytes_saved, savings_ratio, ip_address, country, city, delivered_at
            ) VALUES (
              ${geo.bot_name},
              ${geo.bot_vendor},
              ${geo.requested_path},
              ${geo.served_format},
              ${geo.bytes_served},
              ${geo.bytes_saved},
              ${geo.savings_ratio},
              ${geo.ip_address},
              ${geo.country},
              ${geo.city},
              ${geo.delivered_at}
            );
          `
        )
      );
    }
  } catch (err) {
    console.warn('[Sentinel Batch Flush Error]', err.message);
  } finally {
    isFlushing = false;
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

  try {

  // Handle GET Analytics Request for Dashboard
  if (req.method === 'GET') {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const action = url.searchParams.get('action') || 'analytics';

    if (action === 'ping') {
      return res.status(200).json({
        status: 'ok',
        engine: 'AMEVA-Sentinel v0.7.0 Micro-Precision Engine (GEO Enabled)',
        mode: 'SHADOW',
        batch_queue: {
          buffered_events: pendingRiskEvents.length,
          buffered_geo: pendingGeoDeliveries.length
        },
        timestamp: new Date().toISOString()
      });
    }

    if (action === 'geo' || action === 'llms') {
      const targetPath = url.searchParams.get('path') || '/';
      const geoResult = sentinel.resolveGeoPayload({
        headers: req.headers,
        url: targetPath
      });

      const payload = geoResult.payload || `${sentinel.geoEngine['config']?.authorityHeader || ''}\n---\n# AMEVA Sovereign Ecosystem\n`;
      const servedBytes = new TextEncoder().encode(payload).length;
      // Zero-Hype: Do not synthesize arbitrary bandwidth savings without explicit client baseline comparison
      const savedBytes = 0;
      const savingsRatio = 0.0;

      res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
      res.setHeader('X-Sentinel-Payload-Size', `${(servedBytes / 1024).toFixed(1)}KB`);
      res.setHeader('X-Powered-By', 'AMEVA-Sentinel-GEO-v0.7.0');

      const headers = req.headers || {};
      const ip = String(headers['x-forwarded-for'] || headers['x-real-ip'] || req.socket?.remoteAddress || '127.0.0.1').split(',')[0].trim();
      const maskedIp = sentinel.maskIpAddress(ip);
      const country = (headers['x-vercel-ip-country'] || headers['cf-ipcountry'] || 'GLOBAL');
      const city = (headers['x-vercel-ip-city'] ? decodeURIComponent(headers['x-vercel-ip-city']) : (headers['cf-ipcity'] || 'Edge'));

      const geoRecord = {
        bot_name: geoResult.botName || 'DirectGeoFetcher',
        bot_vendor: geoResult.botVendor || 'AI_Agent',
        requested_path: targetPath,
        served_format: 'text/markdown; charset=utf-8',
        bytes_served: servedBytes,
        bytes_saved: savedBytes,
        savings_ratio: savingsRatio,
        ip_address: maskedIp,
        country,
        city,
        delivered_at: new Date()
      };
      
      memoryGeoLogs.unshift({
        botName: geoRecord.bot_name,
        botVendor: geoRecord.bot_vendor,
        requestedPath: geoRecord.requested_path,
        servedFormat: geoRecord.served_format,
        bytesServed: geoRecord.bytes_served,
        bytesSaved: geoRecord.bytes_saved,
        savingsRatio: geoRecord.savings_ratio,
        ipAddress: geoRecord.ip_address,
        country: geoRecord.country,
        city: geoRecord.city,
        deliveredAt: geoRecord.delivered_at.toISOString()
      });
      if (memoryGeoLogs.length > 500) memoryGeoLogs.pop();

      // Buffer into batch queue
      pendingGeoDeliveries.push(geoRecord);
      flushBatchQueue(false).catch(() => {});

      return res.status(200).end(payload);
    }

    if (action === 'analytics') {
      // Force flush any pending in-memory batch before reading analytics
      await flushBatchQueue(true);

      let events = [];
      let geoLogs = [];

      const sql = await getGlobalSql();
      if (sql) {
        try {
          // Query sentinel risk events
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
              evaluated_at as "evaluatedAt",
              risk_level as "riskLevel",
              actor_claim_type as "actorClaimType",
              actor_claim_state as "actorClaimState",
              actor_claim_verification as "actorClaimVerification",
              evidence_codes as "evidenceCodes",
              policy_version as "policyVersion"
            FROM sentinel_risk_events
            ORDER BY evaluated_at DESC
            LIMIT 500;
          `.catch(() => []);

          // Also query visitor_sessions for true total counts
          const totalSessionsCount = await sql`
            SELECT 
              (COALESCE((SELECT COUNT(*) FROM visitor_sessions), 0) + COALESCE((SELECT COUNT(*) FROM sentinel_risk_events WHERE triage_category = 'HUMAN'), 0)) as total_human,
              COALESCE((SELECT COUNT(*) FROM sentinel_risk_events WHERE triage_category = 'AI_AGENT'), 0) + COALESCE((SELECT COUNT(*) FROM sentinel_geo_deliveries), 0) as total_ai,
              COALESCE((SELECT COUNT(*) FROM sentinel_risk_events WHERE triage_category = 'CRAWLER_TOOL'), 0) + COALESCE((SELECT COUNT(*) FROM bot_crawler_logs), 0) as total_crawler;
          `.catch(() => [{ total_human: 0, total_ai: 0, total_crawler: 0 }]);
          events = dbRows.map(row => ({
            traceId: row.traceId,
            sessionId: row.sessionId,
            score: row.score,
            action: row.action,
            recommendedAction: row.recommendedAction,
            riskLevel: row.riskLevel || 'LOW_AUTOMATION_RISK',
            actorClaim: {
              type: row.actorClaimType || (row.triageCategory === 'AI_AGENT' ? 'AI_OPERATOR' : row.triageCategory === 'CRAWLER_TOOL' ? 'AUTOMATION_TOOL' : 'UNKNOWN'),
              state: row.actorClaimState || (row.triageCategory === 'AI_AGENT' ? 'CLAIMED' : 'NONE'),
              verification: row.actorClaimVerification || 'UNVERIFIED',
              basis: []
            },
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
      
      // Calculate actor claims distribution & risk level breakdown from events
      const actorClaimDistribution = {
        UNKNOWN: 0,
        AI_OPERATOR: 0,
        AUTOMATION_TOOL: 0,
        BROWSER_USER: 0
      };
      const verificationBreakdown = {
        UNVERIFIED: 0,
        VERIFIED: 0,
        NOT_APPLICABLE: 0,
        CONTRADICTORY: 0
      };
      const riskLevelDistribution = {
        LOW_AUTOMATION_RISK: 0,
        ELEVATED_AUTOMATION_RISK: 0,
        HIGH_AUTOMATION_RISK: 0
      };

      for (const ev of events) {
        const claimType = ev.actorClaim?.type || 'UNKNOWN';
        if (actorClaimDistribution[claimType] !== undefined) {
          actorClaimDistribution[claimType]++;
        } else {
          actorClaimDistribution[claimType] = 1;
        }

        const verif = ev.actorClaim?.verification || 'NOT_APPLICABLE';
        if (verificationBreakdown[verif] !== undefined) {
          verificationBreakdown[verif]++;
        } else {
          verificationBreakdown[verif] = 1;
        }

        const rLvl = ev.riskLevel || 'LOW_AUTOMATION_RISK';
        if (riskLevelDistribution[rLvl] !== undefined) {
          riskLevelDistribution[rLvl]++;
        } else {
          riskLevelDistribution[rLvl] = 1;
        }
      }

      analytics.actorClaimsBreakdown = {
        distribution: actorClaimDistribution,
        verification: verificationBreakdown,
        totalEvaluated: events.length
      };
      analytics.actorClaimDistribution = actorClaimDistribution;
      analytics.riskLevelDistribution = riskLevelDistribution;
      
      // Inject global DB total aggregates so dashboard never truncates true history
      if (sql) {
        try {
          const totals = await sql`
            SELECT 
              (COALESCE((SELECT COUNT(*) FROM visitor_sessions), 0) + COALESCE((SELECT COUNT(*) FROM sentinel_risk_events WHERE triage_category = 'HUMAN'), 0)) as human_total,
              (COALESCE((SELECT COUNT(*) FROM sentinel_risk_events WHERE triage_category = 'AI_AGENT'), 0) + COALESCE((SELECT COUNT(*) FROM sentinel_geo_deliveries), 0)) as ai_total,
              (COALESCE((SELECT COUNT(*) FROM sentinel_risk_events WHERE triage_category = 'CRAWLER_TOOL'), 0) + COALESCE((SELECT COUNT(*) FROM bot_crawler_logs), 0)) as crawler_total,
              COALESCE((SELECT COUNT(*) FROM sentinel_risk_events), 0) as total_risk_events;
          `.catch(() => null);

          if (totals && totals.length > 0) {
            const row = totals[0];
            if (analytics.triageBreakdown) {
              analytics.triageBreakdown.human.total = Math.max(analytics.triageBreakdown.human.total, Number(row.human_total || 0));
              analytics.triageBreakdown.aiAgent.total = Math.max(analytics.triageBreakdown.aiAgent.total, Number(row.ai_total || 0));
              analytics.triageBreakdown.crawlerTool.total = Math.max(analytics.triageBreakdown.crawlerTool.total, Number(row.crawler_total || 0));
            }
            analytics.totalObserved = Math.max(analytics.totalObserved || 0, Number(row.total_risk_events || events.length));
          }
        } catch (aggErr) {
          console.warn('[Sentinel Aggregation Error]', aggErr.message);
        }
      }

      return res.status(200).json(analytics);
    }
  }

  // Handle Ingestion Scoring (POST)
  try {
    // Ensure signals is always a valid object (fail-safe guard)
    if (req.body && (req.body.signals === null || req.body.signals === undefined)) {
      req.body.signals = {};
    }
    if (!req.body) { req.body = { signals: {} }; }
    const report = await sentinel.score(req);

    // ── v2.1 Edge Provider Adapter Resolution ─────────────────────
    const edgeAdapter = resolveProviderAdapter(req);
    const clientInfo = edgeAdapter.extractClientInfo(req);

    // Extract Micro-Precision Physical & Route Forensics
    const headers = req.headers || {};
    const body = req.body || {};
    const signals = req.signals || {};

    const originReferrer = headers['referer'] || headers['origin'] || body?.referrer || signals?.referrer || 'Direct / Bookmark';
    const clientPath = req.url || body?.path || signals?.pastPathsHistory || '/';
    const pastPaths = signals?.pastPathsHistory || body?.past_paths || clientPath;

    // Detect Cloud Infrastructure / Datacenter ASN Provider via Edge Adapter
    const maskedIp = clientInfo.maskedIp || sentinel.maskIpAddress(clientInfo.rawIp);
    const country = clientInfo.country || 'GLOBAL';
    const city = clientInfo.city || 'Edge';
    const asnProvider = clientInfo.asn || 'Residential/Standard';

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

    // 1. Buffer Risk Event into In-Memory Batch Queue (Zero Millisecond Hit)
    const eventActorClaim = report.actorClaim || { type: 'UNKNOWN', name: null, state: 'NONE', verification: 'NOT_APPLICABLE', basis: [] };
    const evidenceCodes = Array.isArray(report.evidence)
      ? report.evidence.map(function(e) { return e && e.rule || null; }).filter(Boolean)
      : [];
    pendingRiskEvents.push({
      trace_id: report.traceId,
      visitor_id: footprint.visitorId,
      ip_address: maskedIp,
      country,
      city,
      asn_provider: asnProvider,
      origin_referrer: originReferrer,
      path_hop_chain: pastPaths,
      score: report.score,
      action: report.action,
      recommended_action: report.recommendedAction,
      triage_category: triage,
      vendor_group: vendor,
      user_agent: headers['user-agent'] || '',
      webgl_renderer: webglRenderer,
      canvas_subpixel_hash: canvasSubpixelHash,
      audio_oscillator_hash: audioOscillatorHash,
      math_jit_precision: mathJitPrecision,
      battery_charge_status: batteryStatus,
      screen_refresh_hz: screenHz,
      evidence: JSON.stringify(report.evidence),
      evaluated_at: new Date(report.evaluatedAt),
      // ── v2 Shadow Observability Fields ──────────────────────────────
      risk_level: report.riskLevel || 'LOW_AUTOMATION_RISK',
      actor_claim_type: eventActorClaim.type,
      actor_claim_state: eventActorClaim.state || 'NONE',
      actor_claim_verification: eventActorClaim.verification || 'NOT_APPLICABLE',
      evidence_codes: JSON.stringify(evidenceCodes),
      policy_version: report.policyVersion || 'sentinel-2.0-shadow.1'
    });

    // 2. Resolve GEO Markdown Delivery for AI Agents
    const geoResult = sentinel.resolveGeoPayload(req);
    if (geoResult.shouldDeliver) {
      const geoRecord = {
        bot_name: geoResult.botName,
        bot_vendor: geoResult.botVendor,
        requested_path: geoResult.requestedPath,
        served_format: geoResult.contentType,
        bytes_served: geoResult.servedBytes,
        bytes_saved: geoResult.savedBytes,
        savings_ratio: geoResult.savingsRatio,
        ip_address: maskedIp,
        country,
        city,
        delivered_at: new Date(geoResult.deliveredAt)
      };

      memoryGeoLogs.unshift({
        botName: geoRecord.bot_name,
        botVendor: geoRecord.bot_vendor,
        requestedPath: geoRecord.requested_path,
        servedFormat: geoRecord.served_format,
        bytesServed: geoRecord.bytes_served,
        bytesSaved: geoRecord.bytes_saved,
        savingsRatio: geoRecord.savings_ratio,
        ipAddress: geoRecord.ip_address,
        country: geoRecord.country,
        city: geoRecord.city,
        deliveredAt: geoResult.deliveredAt
      });
      if (memoryGeoLogs.length > 500) memoryGeoLogs.pop();

      pendingGeoDeliveries.push(geoRecord);
    }

    // Trigger non-blocking batch flush
    flushBatchQueue(false).catch(() => {});

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
      },
      // ── v2 Semantic Separation & v2.1 Edge Policy Assessment ─────
      assessment: evaluateEdgePolicy(clientInfo, report.assessment || {
        schemaVersion: "2.0",
        riskLevel: report.riskLevel || "LOW_AUTOMATION_RISK",
        actorClaim: report.actorClaim || { type: "UNKNOWN", name: null, state: "NONE", verification: "NOT_APPLICABLE", basis: [] },
        evidence: Array.isArray(report.evidence) ? report.evidence.map(function(e) { return e && e.rule || null; }).filter(Boolean) : [],
        decision: { mode: "SHADOW", proposedAction: report.recommendedAction || "ALLOW", enforcedAction: report.action || "ALLOW", policyVersion: "sentinel-2.0-shadow.1" },
        legacy: { triageCategory: triage, deprecated: true }
      })
    });
  } catch (err) {
    console.error('[Sentinel API Ingest Error]', err);
    // ── Fail-open: Sentinel errors must never block origin, but must honestly report degraded observability ──
    res.setHeader('X-Sentinel-Status', 'degraded');
    res.setHeader('X-Sentinel-Degraded', '1');
    return res.status(200).json({
      status: 'degraded',
      failOpen: true,
      message: 'Sentinel evaluation failed; request allowed by fail-open policy.',
      report: {
        score: null,
        action: 'DEGRADED_ALLOW',
        recommendedAction: 'DEGRADED_ALLOW',
        classification: { category: 'EVALUATION_ERROR', isBotLikely: null },
        enforcementMode: 'FAIL_OPEN',
        evidence: [{
          rule: 'system.eval_failure',
          score: 0,
          message: err.message || 'Internal evaluation error'
        }],
        evaluatedAt: new Date().toISOString()
      },
      assessment: {
        schemaVersion: '2.0',
        riskLevel: 'EVALUATION_FAILED',
        actorClaim: { type: 'UNKNOWN', name: null, state: 'NONE', verification: 'NOT_APPLICABLE', basis: [] },
        evidence: ['system.eval_failure'],
        decision: { mode: 'FAIL_OPEN', proposedAction: 'DEGRADED_ALLOW', enforcedAction: 'DEGRADED_ALLOW', policyVersion: 'sentinel-2.0-shadow.1' },
        legacy: { triageCategory: 'UNKNOWN', deprecated: true }
      }
    });
  }

  } catch (topLevelErr) {
    // ── Top-level fail-open: absolutely nothing blocks the origin ──
    console.error('[Sentinel Top-Level Fail-Open]', topLevelErr);
    try {
      res.setHeader('X-Sentinel-Status', 'degraded');
      res.setHeader('X-Sentinel-Degraded', '1');
      return res.status(200).json({
        status: 'degraded',
        failOpen: true,
        message: 'Sentinel top-level failure; request allowed by fail-open policy.',
        report: {
          score: null,
          action: 'DEGRADED_ALLOW',
          recommendedAction: 'DEGRADED_ALLOW',
          classification: { category: 'TOP_LEVEL_FAILURE', isBotLikely: null },
          enforcementMode: 'FAIL_OPEN',
          evidence: [{
            rule: 'system.top_level_failure',
            score: 0,
            message: topLevelErr.message || 'Fatal handler error'
          }],
          evaluatedAt: new Date().toISOString()
        },
        assessment: {
          schemaVersion: '2.0',
          riskLevel: 'EVALUATION_FAILED',
          actorClaim: { type: 'UNKNOWN', name: null, state: 'NONE', verification: 'NOT_APPLICABLE', basis: [] },
          evidence: ['system.top_level_failure'],
          decision: { mode: 'FAIL_OPEN', proposedAction: 'DEGRADED_ALLOW', enforcedAction: 'DEGRADED_ALLOW', policyVersion: 'sentinel-2.0-shadow.1' },
          legacy: { triageCategory: 'UNKNOWN', deprecated: true }
        }
      });
    } catch (fatalErr) {
      // Last resort: plain text response with explicit degraded headers
      try {
        res.setHeader('X-Sentinel-Status', 'degraded');
        res.setHeader('X-Sentinel-Degraded', '1');
      } catch (_) {}
      return res.status(200).end('{"status":"degraded","failOpen":true,"report":{"score":null,"action":"DEGRADED_ALLOW"}}');
    }
  }
}
