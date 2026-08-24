// src/index.ts
import {
  SentinelAction,
  defaultPolicy,
  evaluate,
  evaluateVerified,
  createPolicy,
  rules,
  classifyBot,
  resolveDecision,
  verifyCollectorToken,
  signCollectorToken,
  isVerifiedCollectorContext,
  readJsonBodyLimited,
  MemoryNonceStore,
  StaticKeyResolver,
  validateRedirectUrl,
  normalizeAllowedHost,
  CollectorVerificationError,
  MemoryFixedWindowCounterStore,
  MemoryCounterStore,
  MemoryRiskEventStore,
  LocalStorageRiskEventStore,
  toStoredRiskEvent,
  toStoredRiskEventV1,
  isStoredRiskEvent,
  isStoredRiskEventV1,
  isStoredRiskEventV2,
  sanitizeSignals,
  createTraceId,
  AsyncRingBufferSink,
  CompositeSink,
  NullSink,
  HeuristicProfileEngine,
  PathFlowAggregator,
  SnapshotCache,
  SingleflightCoalescer,
  maskIpAddress
} from "./risk-core.js";
var Sentinel = class {
  globalAnalyticsCache = new SnapshotCache({ ttlMs: 5e3 });
  policy;
  mode;
  counterStore;
  eventStore;
  eventSink;
  rateKeyProvider;
  redirectRegistry;
  allowedRedirectHosts;
  allowRedirectSubdomains;
  keyResolver;
  nonceStore;
  expectedAudience;
  expectedPurpose;
  allowedIssuers;
  stateFailureMode;
  onOperationalError;
  constructor(options = {}) {
    this.policy = options.policy || defaultPolicy;
    this.mode = options.mode || "shadow";
    this.counterStore = options.counterStore || new MemoryFixedWindowCounterStore();
    this.eventStore = options.eventStore || null;
    this.eventSink = options.eventSink;
    this.rateKeyProvider = options.rateKeyProvider;
    this.keyResolver = options.keyResolver;
    this.nonceStore = options.nonceStore || new MemoryNonceStore();
    this.expectedAudience = options.expectedAudience;
    this.expectedPurpose = options.expectedPurpose || "telemetry-collect";
    this.allowedIssuers = options.allowedIssuers;
    this.stateFailureMode = options.stateFailureMode || "OBSERVE_ONLY";
    this.onOperationalError = options.onOperationalError;
    this.allowedRedirectHosts = options.allowedRedirectHosts;
    this.allowRedirectSubdomains = options.allowRedirectSubdomains ?? true;
    if (this.policy.botPolicy?.targetMode === "VERIFIED_PARTNERS_ONLY") {
      if (!this.keyResolver) {
        throw new Error('Sentinel configuration error: keyResolver is mandatory when botPolicy.targetMode is "VERIFIED_PARTNERS_ONLY"');
      }
      if (!this.expectedAudience) {
        throw new Error('Sentinel configuration error: expectedAudience is mandatory when botPolicy.targetMode is "VERIFIED_PARTNERS_ONLY"');
      }
      if (!this.allowedIssuers || this.allowedIssuers.length === 0) {
        throw new Error('Sentinel configuration error: non-empty allowedIssuers is mandatory when botPolicy.targetMode is "VERIFIED_PARTNERS_ONLY"');
      }
    }
    const rawRegistry = options.redirectRegistry || {
      AI_FEED: "/llms.txt",
      BOT_GUIDANCE: "/bot-guidance",
      DECOY_SERVICE: "/security/decoy"
    };
    this.redirectRegistry = {};
    for (const [destId, target] of Object.entries(rawRegistry)) {
      const targetStr = typeof target === "string" ? target : target.toString();
      const validation = validateRedirectUrl(targetStr, {
        allowedHosts: this.allowedRedirectHosts,
        allowSubdomains: this.allowRedirectSubdomains,
        allowRelative: true
      });
      if (!validation.valid || !validation.sanitizedUrl) {
        throw new Error(`Sentinel configuration error: Invalid redirectRegistry URL for "${destId}": ${validation.error}`);
      }
      this.redirectRegistry[destId] = validation.sanitizedUrl;
    }
  }
  async score(req) {
    const { signals: rawSignals, token } = await this.collect(req);
    let burstCount10s = rawSignals.burstCount10s ?? 1;
    const rateKey = this.deriveRateKey(req);
    if (rateKey) {
      try {
        const rate = await this.counterStore.increment(rateKey, { windowMs: 1e4 });
        burstCount10s = rate.count;
      } catch (err) {
        this.handleOperationalError(err, "counterStore.increment");
        if (this.stateFailureMode === "FAIL_CLOSED") {
          throw err;
        }
      }
    }
    const enrichedSignals = {
      ...rawSignals,
      burstCount10s
    };
    const verificationOutcome = await this.verify(token);
    if (verificationOutcome.state === "FAILED" && this.stateFailureMode === "FAIL_CLOSED") {
      const errorMsg = verificationOutcome.error || "Token verification failed";
      throw new Error(`Sentinel security violation: ${errorMsg}`);
    }
    const report = evaluateVerified(enrichedSignals, verificationOutcome.context, {
      policy: this.policy,
      enforcementMode: this.mode === "enforce" ? "ENFORCE" : "SHADOW"
    });
    const footprint = this.synthesizeFootprint(report, req);
    if (!report.signals) report.signals = enrichedSignals;
    report.signals.triageCategory = footprint.triageCategory;
    report.signals.vendorGroup = footprint.vendorGroup;
    report.signals.customSignals = {
      ...report.signals.customSignals || {},
      webglRenderer: footprint.webglRenderer,
      webglVendor: footprint.webglVendor,
      country: footprint.country,
      city: footprint.city,
      totalVisitCount: footprint.totalVisitCount,
      pastPathsHistory: footprint.pastPathsHistory
    };
    if (verificationOutcome.state === "FAILED") {
      report.verification = {
        state: "FAILED",
        error: String(verificationOutcome.error || "INVALID_TOKEN")
      };
    }
    if (report.redirectTo && this.redirectRegistry[report.redirectTo]) {
      report.redirectTo = this.redirectRegistry[report.redirectTo];
    }
    if (this.eventStore && typeof this.eventStore.append === "function") {
      try {
        await this.eventStore.append(report);
      } catch (err) {
        this.handleOperationalError(err, "eventStore.append");
        if (this.stateFailureMode === "FAIL_CLOSED") {
          throw err;
        }
      }
    }
    if (this.eventSink) {
      const stored = toStoredRiskEvent(report);
      const record = {
        ...stored,
        kind: "risk_event",
        id: stored.traceId,
        timestamp: stored.evaluatedAt
      };
      try {
        const emitRes = this.eventSink.emit(record);
        if (emitRes && typeof emitRes.catch === "function") {
          emitRes.catch((err) => {
            this.handleOperationalError(err, "eventSink.emit");
          });
        }
      } catch (err) {
        this.handleOperationalError(err, "eventSink.emit");
      }
    }
    return report;
  }
  deriveRateKey(req) {
    if (this.rateKeyProvider) {
      return this.rateKeyProvider(req);
    }
    if (!req) return null;
    if (req.sessionId) return `sess_${req.sessionId}`;
    if (req.testClientId) return `test_${req.testClientId}`;
    if (typeof sessionStorage !== "undefined") {
      try {
        const key = "ameva:sentinel:session-id";
        const existing = sessionStorage.getItem(key);
        if (existing) return existing;
        const newId = "sess_" + Math.random().toString(36).substring(2, 10);
        sessionStorage.setItem(key, newId);
        return newId;
      } catch (e) {
      }
    }
    return null;
  }
  /**
   * Safe extraction of untrusted telemetry signals and presented token from HTTP/raw request.
   * Extracts headers and signals concurrently without mutually exclusive early returns.
   */
  async collect(req) {
    if (!req) return { signals: {}, token: null };
    const headers = req.headers || {};
    const getHeader = (name) => {
      if (typeof headers.get === "function") return headers.get(name) || "";
      return headers[name] || headers[name.toLowerCase()] || headers[name.toUpperCase()] || "";
    };
    const ua = getHeader("user-agent");
    const secChUaMobile = getHeader("sec-ch-ua-mobile");
    let token = null;
    const authHeader = getHeader("authorization");
    const bearerMatch = /^Bearer\s+(.+)$/i.exec(authHeader);
    if (bearerMatch) {
      token = bearerMatch[1].trim();
    } else {
      const customTokenHeader = getHeader("x-ameva-collector-token").trim();
      if (customTokenHeader) token = customTokenHeader;
    }
    const signalInput = req.signals && typeof req.signals === "object" ? req.signals : {};
    if (!token && typeof signalInput.token === "string" && signalInput.token.trim()) {
      token = signalInput.token.trim();
    }
    let body = {};
    try {
      body = await readJsonBodyLimited(req, 65536);
    } catch (err) {
      this.handleOperationalError(err, "readJsonBodyLimited");
      throw err;
    }
    if (!token && typeof body?.token === "string" && body.token.trim()) {
      token = body.token.trim();
    }
    const isWebdriver = signalInput.webdriverObserved === true || signalInput.webdriver === true || body?.webdriver === true || /HeadlessChrome|PhantomJS|Selenium|Playwright/i.test(ua);
    const isTouchMismatch = signalInput.touchMismatch === true || secChUaMobile === "?1" && body?.is_touch === false;
    const isSuspiciousUA = signalInput.suspiciousUA === true || ua.length === 0 || /python-requests|curl|wget|scrapy|aiohttp|HeadlessChrome|PhantomJS|Selenium|Playwright/i.test(ua);
    const observationDurationMs = typeof signalInput.observationDurationMs === "number" ? signalInput.observationDurationMs : typeof body?.observation_duration_ms === "number" ? body.observation_duration_ms : 6e3;
    const isTrustedEventsCount = typeof signalInput.trustedInputCount === "number" ? signalInput.trustedInputCount : typeof signalInput.isTrustedEventsCount === "number" ? signalInput.isTrustedEventsCount : typeof body?.trusted_events === "number" ? body.trusted_events : 0;
    const telemetryObserved = typeof signalInput.telemetryObserved === "boolean" ? signalInput.telemetryObserved : typeof body?.telemetry_observed === "boolean" ? body.telemetry_observed : body?.trusted_events !== void 0;
    const sampleComplete = typeof signalInput.sampleComplete === "boolean" ? signalInput.sampleComplete : typeof body?.sample_complete === "boolean" ? body.sample_complete : false;
    const userAgent = typeof signalInput.userAgent === "string" ? signalInput.userAgent : ua || void 0;
    const isHeadlessRenderer = signalInput.isHeadlessRenderer === true || body?.is_headless_renderer === true;
    const headlessEvasionsDetected = signalInput.headlessEvasionsDetected === true || body?.headless_evasions_detected === true;
    const webglRenderer = typeof signalInput.webglRenderer === "string" ? signalInput.webglRenderer : body?.webgl_renderer || void 0;
    const webglVendor = typeof signalInput.webglVendor === "string" ? signalInput.webglVendor : body?.webgl_vendor || void 0;
    const isBrowserUA = /Mozilla\/5\.0/i.test(ua) && /Chrome|Safari|Firefox|Edge|Edg/i.test(ua) && !/bot|crawler|spider|scraper|HeadlessChrome/i.test(ua);
    const isChromeLike = /Chrome\/\d+/i.test(ua) && !/bot|crawler|spider|scraper|HeadlessChrome/i.test(ua);
    const hasSecFetch = Boolean(getHeader("sec-fetch-dest") || getHeader("sec-fetch-mode") || getHeader("sec-fetch-site") || getHeader("sec-ch-ua"));
    const hasAcceptLang = Boolean(getHeader("accept-language"));
    const isHttpMissingHeaders = isBrowserUA && !hasAcceptLang || isChromeLike && !hasSecFetch;
    const claimedBot = typeof signalInput.claimedBot === "string" ? signalInput.claimedBot : body?.claimed_bot || (ua && ua.includes("Bot") ? "claimed_bot" : void 0);
    const tokenFreshnessMs = typeof signalInput.tokenFreshnessMs === "number" ? signalInput.tokenFreshnessMs : body?.timestamp ? Date.now() - body.timestamp : 100;
    return {
      signals: {
        webdriver: isWebdriver,
        telemetryObserved,
        sampleComplete,
        observationDurationMs,
        isTrustedEventsCount,
        touchMismatch: isTouchMismatch,
        suspiciousUA: isSuspiciousUA,
        isHeadlessRenderer,
        headlessEvasionsDetected,
        httpMissingHeaders: isHttpMissingHeaders,
        webglRenderer,
        webglVendor,
        userAgent,
        claimedBot,
        tokenPresented: Boolean(token),
        tokenFreshnessMs
      },
      token
    };
  }
  /**
   * Cryptographically verifies the presented token against the configured KeyResolver and NonceStore
   */
  async verify(token) {
    if (!token) {
      return { state: "NONE", context: null };
    }
    if (!this.keyResolver || !this.expectedAudience) {
      return {
        state: "FAILED",
        context: null,
        error: "VERIFIER_CONFIGURATION_MISSING"
      };
    }
    try {
      const verified = await verifyCollectorToken(
        token,
        this.keyResolver,
        this.nonceStore,
        {
          expectedAudience: this.expectedAudience,
          expectedPurpose: this.expectedPurpose,
          allowedIssuers: this.allowedIssuers
        }
      );
      return { state: "VERIFIED", context: verified };
    } catch (err) {
      this.handleOperationalError(err, "verifyCollectorToken");
      if (err instanceof CollectorVerificationError && err.code === "NONCE_STORE_CAPACITY_REACHED") {
        throw err;
      }
      return {
        state: "FAILED",
        context: null,
        error: err.code || err.message
      };
    }
  }
  /**
   * Synthesize a server-side Forensic Footprint for requests even without client JavaScript.
   */
  synthesizeFootprint(report, req) {
    const sig = report.signals || {};
    const ip = req?.ip || req?.headers?.["x-forwarded-for"] || req?.headers?.["x-real-ip"] || "127.0.0.1";
    const cleanIp = String(ip).split(",")[0].trim();
    const maskedIp = this.maskIpAddress(cleanIp);
    const visitorId = req?.sessionId || req?.testClientId || `anon_${maskedIp.replace(/[^a-zA-Z0-9]/g, "_")}`;
    return {
      visitorId,
      ipAddress: maskedIp,
      webglRenderer: sig.webglRenderer || (sig.telemetryObserved ? "unknown" : "server-http-client"),
      webglVendor: sig.webglVendor || (sig.telemetryObserved ? "unknown" : "server-http-client"),
      country: req?.headers?.["cf-ipcountry"] || req?.headers?.["x-country-code"] || "GLOBAL",
      city: req?.headers?.["cf-ipcity"] || "Edge",
      totalVisitCount: Number(sig.totalVisitCount || 1),
      pastPathsHistory: typeof req?.url === "string" ? req.url : sig.pastPathsHistory || "/",
      triageCategory: report.classification?.triageCategory || "HUMAN",
      vendorGroup: report.classification?.vendorGroup || "HumanUser",
      capturedAt: report.evaluatedAt
    };
  }
  /**
   * Evaluate a single forensic footprint and generate natural language persona verdict.
   */
  profileFootprint(footprint) {
    return HeuristicProfileEngine.profileSession(footprint);
  }
  /**
   * Parse an array of raw path history strings and aggregate into a Sankey transition matrix.
   */
  aggregatePathFlows(paths) {
    return PathFlowAggregator.aggregateFlows(paths);
  }
  /**
   * Mask IP address for privacy compliance (GDPR / CCPA).
   */
  maskIpAddress(ip) {
    return maskIpAddress(ip);
  }
  /**
   * Cached headless forensic analytics with in-memory SWR.
   */
  async getForensicAnalyticsCached(fetcher, cacheKey = "global_analytics") {
    return this.globalAnalyticsCache.getOrFetch(cacheKey, fetcher);
  }
  /**
   * Headless Forensic Analytics Engine: transforms raw footprints and risk events into
   * executive persona verdicts, transition flow matrices, 3-category triage breakdowns, and overview KPI stats.
   */
  getForensicAnalytics(input) {
    const rawFootprints = [...input.footprints || []];
    if (input.events) {
      for (const ev of input.events) {
        if (!ev) continue;
        const sig = ev.signals || {};
        const classification = ev.classification || {};
        rawFootprints.push({
          visitorId: ev.sessionId || ev.traceId || "anon_visitor",
          webglRenderer: sig.webglRenderer || sig.customSignals?.webglRenderer || sig.customSignals?.gpuRenderer || "server-http-client",
          installedFonts: sig.customSignals?.installedFonts || "",
          country: sig.customSignals?.country || "GLOBAL",
          city: sig.customSignals?.city || "Edge",
          totalVisitCount: Number(sig.totalVisitCount || sig.customSignals?.totalVisitCount || 1),
          pastPathsHistory: sig.pastPathsHistory || sig.customSignals?.pastPathsHistory || "/",
          isCharging: Boolean(sig.customSignals?.isCharging),
          screenHz: Number(sig.customSignals?.screenHz || 60),
          triageCategory: classification.triageCategory || (classification.category === "AI_AGENT" ? "AI_AGENT" : classification.category === "AUTOMATED_TOOL" || classification.category === "SEARCH_ENGINE" ? "CRAWLER_TOOL" : "HUMAN"),
          vendorGroup: classification.vendorGroup || classification.claimedName || "HumanUser",
          capturedAt: ev.timestamp ? new Date(ev.timestamp).toISOString() : ev.evaluatedAt || (/* @__PURE__ */ new Date()).toISOString()
        });
      }
    }
    const uniqueVisitorIds = /* @__PURE__ */ new Set();
    let botCount = 0;
    let engineerCount = 0;
    let powerUserCount = 0;
    let standardCount = 0;
    const verdicts = [];
    const pathStrings = [];
    const triageBreakdown = {
      human: {
        total: 0,
        softwareEngineer: 0,
        powerUser: 0,
        desktopStandard: 0,
        mobileCasual: 0
      },
      aiAgent: {
        total: 0,
        openAi: 0,
        anthropic: 0,
        google: 0,
        perplexity: 0,
        byteDance: 0,
        commonCrawl: 0,
        cohere: 0,
        otherAi: 0,
        byVendor: {}
      },
      crawlerTool: {
        total: 0,
        searchEngine: 0,
        headlessDriver: 0,
        cliTool: 0,
        otherCrawler: 0,
        byTool: {}
      }
    };
    for (const fp of rawFootprints) {
      uniqueVisitorIds.add(fp.visitorId);
      const verdict = HeuristicProfileEngine.profileSession(fp);
      verdicts.push(verdict);
      const triageCat = fp.triageCategory || (verdict.persona === "CLOUD_AUTOMATION_BOT" || verdict.persona === "HEADLESS_SCRAPER" ? "CRAWLER_TOOL" : "HUMAN");
      const vendor = fp.vendorGroup || "Unknown";
      if (triageCat === "HUMAN") {
        triageBreakdown.human.total++;
        if (verdict.persona === "SOFTWARE_ENGINEER") {
          triageBreakdown.human.softwareEngineer++;
          engineerCount++;
        } else if (verdict.persona === "POWER_USER") {
          triageBreakdown.human.powerUser++;
          powerUserCount++;
        } else if (verdict.persona === "MOBILE_CASUAL") {
          triageBreakdown.human.mobileCasual++;
          standardCount++;
        } else {
          triageBreakdown.human.desktopStandard++;
          standardCount++;
        }
      } else if (triageCat === "AI_AGENT") {
        triageBreakdown.aiAgent.total++;
        botCount++;
        triageBreakdown.aiAgent.byVendor[vendor] = (triageBreakdown.aiAgent.byVendor[vendor] || 0) + 1;
        const vLower = vendor.toLowerCase();
        if (vLower.includes("openai") || vLower.includes("gpt")) triageBreakdown.aiAgent.openAi++;
        else if (vLower.includes("anthropic") || vLower.includes("claude")) triageBreakdown.aiAgent.anthropic++;
        else if (vLower.includes("google")) triageBreakdown.aiAgent.google++;
        else if (vLower.includes("perplexity")) triageBreakdown.aiAgent.perplexity++;
        else if (vLower.includes("bytedance") || vLower.includes("bytespider")) triageBreakdown.aiAgent.byteDance++;
        else if (vLower.includes("commoncrawl") || vLower.includes("ccbot")) triageBreakdown.aiAgent.commonCrawl++;
        else if (vLower.includes("cohere")) triageBreakdown.aiAgent.cohere++;
        else triageBreakdown.aiAgent.otherAi++;
      } else {
        triageBreakdown.crawlerTool.total++;
        botCount++;
        triageBreakdown.crawlerTool.byTool[vendor] = (triageBreakdown.crawlerTool.byTool[vendor] || 0) + 1;
        const vLower = vendor.toLowerCase();
        if (vLower.includes("searchengine") || vLower.includes("googlebot") || vLower.includes("bingbot")) triageBreakdown.crawlerTool.searchEngine++;
        else if (vLower.includes("headlessdriver") || vLower.includes("playwright") || vLower.includes("puppeteer")) triageBreakdown.crawlerTool.headlessDriver++;
        else if (vLower.includes("clitool") || vLower.includes("curl") || vLower.includes("python")) triageBreakdown.crawlerTool.cliTool++;
        else triageBreakdown.crawlerTool.otherCrawler++;
      }
      if (fp.pastPathsHistory) {
        pathStrings.push(fp.pastPathsHistory);
      }
    }
    const flowMatrix = PathFlowAggregator.aggregateFlows(pathStrings);
    return {
      overview: {
        totalRecords: rawFootprints.length,
        totalUniqueVisitors: uniqueVisitorIds.size,
        botCount,
        engineerCount,
        powerUserCount,
        standardCount
      },
      triageBreakdown,
      verdicts,
      flowMatrix,
      generatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  handleOperationalError(err, context) {
    if (this.onOperationalError) {
      try {
        this.onOperationalError(err, context);
      } catch (e) {
      }
    }
  }
};
function createSentinel(options = {}) {
  return new Sentinel(options);
}
var sentinel = new Sentinel();
export {
  AsyncRingBufferSink,
  CollectorVerificationError,
  CompositeSink,
  HeuristicProfileEngine,
  LocalStorageRiskEventStore,
  MemoryCounterStore,
  MemoryFixedWindowCounterStore,
  MemoryNonceStore,
  MemoryRiskEventStore,
  NullSink,
  PathFlowAggregator,
  Sentinel,
  SentinelAction,
  SingleflightCoalescer,
  SnapshotCache,
  StaticKeyResolver,
  classifyBot,
  createPolicy,
  createSentinel,
  createTraceId,
  defaultPolicy,
  evaluate,
  evaluateVerified,
  isStoredRiskEvent,
  isStoredRiskEventV1,
  isStoredRiskEventV2,
  isVerifiedCollectorContext,
  maskIpAddress,
  normalizeAllowedHost,
  readJsonBodyLimited,
  resolveDecision,
  rules,
  sanitizeSignals,
  sentinel,
  signCollectorToken,
  toStoredRiskEvent,
  toStoredRiskEventV1,
  validateRedirectUrl,
  verifyCollectorToken
};
