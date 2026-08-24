// src/types.ts
var SentinelAction = /* @__PURE__ */ ((SentinelAction2) => {
  SentinelAction2["ALLOW"] = "ALLOW";
  SentinelAction2["OBSERVE"] = "OBSERVE";
  SentinelAction2["RATE_LIMIT"] = "RATE_LIMIT";
  SentinelAction2["REQUIRE_APP_VERIFICATION"] = "REQUIRE_APP_VERIFICATION";
  SentinelAction2["TEMPORARY_DENY"] = "TEMPORARY_DENY";
  SentinelAction2["REDIRECT"] = "REDIRECT";
  return SentinelAction2;
})(SentinelAction || {});
function createTraceId() {
  const uuid = typeof globalThis !== "undefined" && globalThis.crypto && typeof globalThis.crypto.randomUUID === "function" ? globalThis.crypto.randomUUID() : `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
  return `trc_${uuid.replace(/-/g, "").slice(0, 16)}`;
}

// src/confidence.ts
function calculateConfidence(signals = {}) {
  if (!signals || typeof signals !== "object") {
    return 0.1;
  }
  const qSignal = signals.telemetryObserved ? 1 : 0.6;
  const validSignalKeys = [
    "webdriver",
    "burstCount10s",
    "isTrustedEventsCount",
    "touchMismatch",
    "suspiciousUA"
  ];
  const presentCount = validSignalKeys.filter((k) => signals[k] !== void 0).length;
  const cRules = Math.min(1, Math.max(0.4, presentCount / 4));
  const latency = typeof signals.tokenFreshnessMs === "number" ? signals.tokenFreshnessMs : 0;
  let fFreshness = 1;
  if (latency > 3e4) {
    fFreshness = 0.5;
  } else if (latency > 1e4) {
    fFreshness = 0.75;
  } else if (latency > 5e3) {
    fFreshness = 0.9;
  }
  const sCompleteness = signals.telemetryObserved === true && signals.isTrustedEventsCount !== void 0 ? 1 : 0.6;
  const raw = qSignal * cRules * fFreshness * sCompleteness;
  return Math.min(1, Math.max(0.05, Math.round(raw * 100) / 100));
}

// src/counter.ts
var MemoryFixedWindowCounterStore = class {
  store = /* @__PURE__ */ new Map();
  maxKeys;
  constructor(options = {}) {
    this.maxKeys = options.maxKeys ?? 1e4;
  }
  async increment(key, options) {
    const now = Date.now();
    const amount = options.amount ?? 1;
    this.prune();
    const existing = this.store.get(key);
    if (!existing || existing.expiresAt <= now) {
      if (this.store.size >= this.maxKeys) {
        this.prune();
        if (this.store.size >= this.maxKeys) {
          const oldestKey = this.store.keys().next().value;
          if (oldestKey) this.store.delete(oldestKey);
        }
      }
      const resetAt = now + options.windowMs;
      this.store.set(key, { count: amount, expiresAt: resetAt });
      return { count: amount, resetAt };
    }
    existing.count += amount;
    return { count: existing.count, resetAt: existing.expiresAt };
  }
  async get(key) {
    const now = Date.now();
    const existing = this.store.get(key);
    if (!existing || existing.expiresAt <= now) {
      this.store.delete(key);
      return 0;
    }
    return existing.count;
  }
  async reset(key) {
    this.store.delete(key);
  }
  prune() {
    const now = Date.now();
    for (const [k, bucket] of this.store.entries()) {
      if (bucket.expiresAt <= now) {
        this.store.delete(k);
      }
    }
  }
};
var MemoryCounterStore = MemoryFixedWindowCounterStore;

// src/rules.ts
var rules = {
  /**
   * Evaluates navigator.webdriver automation flag
   */
  webdriver: (options = {}) => {
    const weight = options.weight ?? 25;
    return {
      id: "automation.webdriver",
      weight,
      evaluate: (signals) => {
        const isTriggered = !!signals.webdriver;
        return {
          triggered: isTriggered,
          score: isTriggered ? weight : 0,
          attributes: {
            observed: isTriggered,
            property: "navigator.webdriver"
          },
          message: isTriggered ? "navigator.webdriver automation flag is active" : "navigator.webdriver is clean"
        };
      }
    };
  },
  /**
   * Evaluates high frequency request burst within fixed window
   */
  burst: (options = {}) => {
    const weight = options.weight ?? 30;
    const threshold = options.threshold ?? 30;
    const windowMs = options.windowMs ?? 1e4;
    return {
      id: "rate.burst_request",
      weight,
      evaluate: (signals) => {
        const count = signals.burstCount10s ?? 1;
        const isTriggered = count >= threshold;
        return {
          triggered: isTriggered,
          score: isTriggered ? weight : 0,
          attributes: {
            window: `${windowMs / 1e3}s`,
            count,
            threshold
          },
          message: isTriggered ? `Request frequency exceeded the configured threshold (${count} req / ${windowMs / 1e3}s)` : `Request rate is within limits (${count} req / ${windowMs / 1e3}s)`
        };
      }
    };
  },
  /**
   * Evaluates absence of trusted human interaction ONLY when telemetry was genuinely observed
   * Guards against false positives when client telemetry is uninitialized or JS is disabled.
   */
  trustedInputAbsent: (options = {}) => {
    const weight = options.weight ?? 20;
    const minDuration = options.minDurationMs ?? 5e3;
    const minBurst = options.minBurst ?? 1;
    return {
      id: "interaction.trusted_input_absent",
      weight,
      evaluate: (signals) => {
        if (!signals.telemetryObserved) {
          return {
            triggered: false,
            score: 0,
            attributes: { telemetry_observed: false },
            message: "Client interaction telemetry not observed (insufficient evidence)"
          };
        }
        const duration = signals.observationDurationMs ?? 0;
        const trustedCount = signals.isTrustedEventsCount ?? 0;
        const burstCount = signals.burstCount10s ?? 1;
        const isTriggered = duration >= minDuration && trustedCount === 0 && burstCount >= minBurst;
        return {
          triggered: isTriggered,
          score: isTriggered ? weight : 0,
          attributes: {
            telemetry_observed: true,
            observation_duration_ms: duration,
            is_trusted_count: trustedCount,
            burst_count: burstCount
          },
          message: isTriggered ? "No trusted interaction events were observed during the active sampling window" : "Interaction signals are consistent"
        };
      }
    };
  },
  /**
   * Evaluates touch and mobile platform capability mismatch
   */
  touchMismatch: (options = {}) => {
    const weight = options.weight ?? 15;
    return {
      id: "environment.touch_mismatch",
      weight,
      evaluate: (signals) => {
        const isTriggered = !!signals.touchMismatch;
        return {
          triggered: isTriggered,
          score: isTriggered ? weight : 0,
          attributes: {
            touch_mismatch: isTriggered
          },
          message: isTriggered ? "Mobile platform Client-Hints and touch capability mismatch detected" : "Platform attributes are consistent"
        };
      }
    };
  },
  /**
   * Evaluates known automated bot signatures in User-Agent header
   */
  suspiciousUA: (options = {}) => {
    const weight = options.weight ?? 15;
    return {
      id: "header.suspicious_ua",
      weight,
      evaluate: (signals) => {
        const isTriggered = !!signals.suspiciousUA;
        return {
          triggered: isTriggered,
          score: isTriggered ? weight : 0,
          attributes: {
            suspicious_ua: isTriggered,
            claimed_bot: signals.claimedBot || null
          },
          message: isTriggered ? `Suspicious or automated scraper signature detected (${signals.claimedBot || "headless"})` : "User-Agent header format is standard"
        };
      }
    };
  },
  /**
   * Evaluates Bot Category against Denylist and Automated Tool patterns
   */
  botClassification: (options = {}) => {
    const weight = options.weight ?? 35;
    return {
      id: "bot.classification_denylist",
      weight,
      evaluate: (signals) => {
        const isAutomatedTool = signals.botCategory === "AUTOMATED_TOOL";
        return {
          triggered: isAutomatedTool,
          score: isAutomatedTool ? weight : 0,
          attributes: {
            bot_category: signals.botCategory || "NONE",
            claimed_bot: signals.claimedBot || null,
            is_automated_tool: isAutomatedTool
          },
          message: isAutomatedTool ? `Automated tool/scraper category detected (${signals.claimedBot || "scraper"})` : "Bot classification posture is standard"
        };
      }
    };
  },
  /**
   * Evaluates deep headless browser evasions & software WebGL renderers (Playwright/Puppeteer/Selenium)
   */
  headlessDeep: (options = {}) => {
    const weight = options.weight ?? 40;
    return {
      id: "automation.headless_deep",
      weight,
      evaluate: (signals) => {
        const isTriggered = !!signals.isHeadlessRenderer || !!signals.headlessEvasionsDetected;
        return {
          triggered: isTriggered,
          score: isTriggered ? weight : 0,
          attributes: {
            headless_renderer: !!signals.isHeadlessRenderer,
            evasions_detected: !!signals.headlessEvasionsDetected,
            webgl_renderer: signals.webglRenderer || null,
            webgl_vendor: signals.webglVendor || null
          },
          message: isTriggered ? `Stealth headless browser artifact or virtual CPU renderer detected (${signals.webglRenderer || "SwiftShader/Headless"})` : "Browser graphics and environment runtime is authentic"
        };
      }
    };
  },
  /**
   * Evaluates missing standard browser headers on Browser-claiming User-Agent (cURL/CLI spoofing)
   */
  httpMissingHeaders: (options = {}) => {
    const weight = options.weight ?? 35;
    return {
      id: "header.http_missing_headers",
      weight,
      evaluate: (signals) => {
        const isTriggered = !!signals.httpMissingHeaders;
        return {
          triggered: isTriggered,
          score: isTriggered ? weight : 0,
          attributes: {
            http_missing_headers: isTriggered,
            user_agent: signals.userAgent || null
          },
          message: isTriggered ? "Browser User-Agent claiming request lacks mandatory Sec-Fetch / Sec-CH-UA browser headers (CLI/cURL Spoofing)" : "HTTP protocol headers are consistent with browser signature"
        };
      }
    };
  }
};

// src/policy.ts
function createPolicy(options = {}) {
  return {
    version: options.version || "2026-08-21.v0.6",
    thresholds: {
      rateLimit: options.thresholds?.rateLimit ?? 30,
      appVerification: options.thresholds?.appVerification ?? 50,
      deny: options.thresholds?.deny ?? 75
    },
    rules: options.rules || [
      rules.webdriver({ weight: 25 }),
      rules.burst({ weight: 30, threshold: 30 }),
      rules.trustedInputAbsent({ weight: 20 }),
      rules.touchMismatch({ weight: 15 }),
      rules.suspiciousUA({ weight: 15 }),
      rules.botClassification({ weight: 35 }),
      rules.headlessDeep({ weight: 40 }),
      rules.httpMissingHeaders({ weight: 35 })
    ],
    botPolicy: options.botPolicy
  };
}
var defaultPolicy = createPolicy();

// src/bot-classifier.ts
var BOT_SIGNATURES = [
  // 1. Search Engines (Claimed)
  { category: "SEARCH_ENGINE", triageCategory: "CRAWLER_TOOL", vendorGroup: "SearchEngine", name: "Googlebot", pattern: /Googlebot/i },
  { category: "SEARCH_ENGINE", triageCategory: "CRAWLER_TOOL", vendorGroup: "SearchEngine", name: "Bingbot", pattern: /bingbot|msnbot/i },
  { category: "SEARCH_ENGINE", triageCategory: "CRAWLER_TOOL", vendorGroup: "SearchEngine", name: "YandexBot", pattern: /YandexBot/i },
  { category: "SEARCH_ENGINE", triageCategory: "CRAWLER_TOOL", vendorGroup: "SearchEngine", name: "Baiduspider", pattern: /Baiduspider/i },
  { category: "SEARCH_ENGINE", triageCategory: "CRAWLER_TOOL", vendorGroup: "SearchEngine", name: "DuckDuckBot", pattern: /DuckDuckBot/i },
  { category: "SEARCH_ENGINE", triageCategory: "CRAWLER_TOOL", vendorGroup: "SearchEngine", name: "SogouSpider", pattern: /Sogou/i },
  { category: "SEARCH_ENGINE", triageCategory: "CRAWLER_TOOL", vendorGroup: "SearchEngine", name: "NaverYeti", pattern: /Yeti|NaverBot/i },
  // 2. AI Agents & LLM Scrapers (Claimed)
  { category: "AI_AGENT", triageCategory: "AI_AGENT", vendorGroup: "OpenAI", name: "GPTBot", pattern: /GPTBot|ChatGPT-User|OAI-SearchBot/i },
  { category: "AI_AGENT", triageCategory: "AI_AGENT", vendorGroup: "Anthropic", name: "ClaudeBot", pattern: /ClaudeBot|Claude-Web|anthropic-ai/i },
  { category: "AI_AGENT", triageCategory: "AI_AGENT", vendorGroup: "Perplexity", name: "PerplexityBot", pattern: /PerplexityBot/i },
  { category: "AI_AGENT", triageCategory: "AI_AGENT", vendorGroup: "Google", name: "Google-Extended", pattern: /Google-Extended|GoogleOther/i },
  { category: "AI_AGENT", triageCategory: "AI_AGENT", vendorGroup: "ByteDance", name: "Bytespider", pattern: /Bytespider/i },
  { category: "AI_AGENT", triageCategory: "AI_AGENT", vendorGroup: "CommonCrawl", name: "CCBot", pattern: /CCBot/i },
  { category: "AI_AGENT", triageCategory: "AI_AGENT", vendorGroup: "Cohere", name: "CohereBot", pattern: /cohere-ai/i },
  { category: "AI_AGENT", triageCategory: "AI_AGENT", vendorGroup: "DeepSeek", name: "DeepSeekBot", pattern: /DeepSeek|DeepSeekBot/i },
  { category: "AI_AGENT", triageCategory: "AI_AGENT", vendorGroup: "Mistral", name: "MistralBot", pattern: /MistralAI|Mistral/i },
  { category: "AI_AGENT", triageCategory: "AI_AGENT", vendorGroup: "OtherAI", name: "LLMAgent", pattern: /langchain|llamaindex|autogpt|chatglm|qwen/i },
  // 3. Social Media & Link Preview Bots (Claimed)
  { category: "SOCIAL_PREVIEW", triageCategory: "CRAWLER_TOOL", vendorGroup: "SocialPreview", name: "Twitterbot", pattern: /Twitterbot/i },
  { category: "SOCIAL_PREVIEW", triageCategory: "CRAWLER_TOOL", vendorGroup: "SocialPreview", name: "Slackbot", pattern: /Slackbot/i },
  { category: "SOCIAL_PREVIEW", triageCategory: "CRAWLER_TOOL", vendorGroup: "SocialPreview", name: "Discordbot", pattern: /Discordbot/i },
  { category: "SOCIAL_PREVIEW", triageCategory: "CRAWLER_TOOL", vendorGroup: "SocialPreview", name: "FacebookBot", pattern: /facebookexternalhit|facebookcatalog/i },
  { category: "SOCIAL_PREVIEW", triageCategory: "CRAWLER_TOOL", vendorGroup: "SocialPreview", name: "TelegramBot", pattern: /TelegramBot/i },
  { category: "SOCIAL_PREVIEW", triageCategory: "CRAWLER_TOOL", vendorGroup: "SocialPreview", name: "WhatsApp", pattern: /WhatsApp/i },
  { category: "SOCIAL_PREVIEW", triageCategory: "CRAWLER_TOOL", vendorGroup: "SocialPreview", name: "LinkedInBot", pattern: /LinkedInBot/i },
  // 4. Monitoring & Healthcheck Services (Claimed)
  { category: "MONITORING", triageCategory: "CRAWLER_TOOL", vendorGroup: "Monitoring", name: "Pingdom", pattern: /Pingdom/i },
  { category: "MONITORING", triageCategory: "CRAWLER_TOOL", vendorGroup: "Monitoring", name: "UptimeRobot", pattern: /UptimeRobot/i },
  { category: "MONITORING", triageCategory: "CRAWLER_TOOL", vendorGroup: "Monitoring", name: "Datadog", pattern: /Datadog/i },
  { category: "MONITORING", triageCategory: "CRAWLER_TOOL", vendorGroup: "Monitoring", name: "NewRelic", pattern: /NewRelicPinger/i },
  { category: "MONITORING", triageCategory: "CRAWLER_TOOL", vendorGroup: "Monitoring", name: "BetterUptime", pattern: /Better Uptime/i },
  // 5. Feed Fetchers & Readers (Claimed)
  { category: "FEED_FETCHER", triageCategory: "CRAWLER_TOOL", vendorGroup: "FeedFetcher", name: "AppleNewsBot", pattern: /AppleNewsBot/i },
  { category: "FEED_FETCHER", triageCategory: "CRAWLER_TOOL", vendorGroup: "FeedFetcher", name: "Feedfetcher-Google", pattern: /Feedfetcher-Google/i },
  { category: "FEED_FETCHER", triageCategory: "CRAWLER_TOOL", vendorGroup: "FeedFetcher", name: "Feedly", pattern: /Feedly/i },
  // 6. Automated Tools, Scrapers & Headless Drivers (Claimed / Suspected)
  { category: "AUTOMATED_TOOL", triageCategory: "CRAWLER_TOOL", vendorGroup: "HeadlessDriver", name: "Playwright", pattern: /Playwright/i },
  { category: "AUTOMATED_TOOL", triageCategory: "CRAWLER_TOOL", vendorGroup: "HeadlessDriver", name: "Puppeteer", pattern: /Puppeteer/i },
  { category: "AUTOMATED_TOOL", triageCategory: "CRAWLER_TOOL", vendorGroup: "HeadlessDriver", name: "Selenium", pattern: /Selenium/i },
  { category: "AUTOMATED_TOOL", triageCategory: "CRAWLER_TOOL", vendorGroup: "HeadlessDriver", name: "HeadlessChrome", pattern: /HeadlessChrome/i },
  { category: "AUTOMATED_TOOL", triageCategory: "CRAWLER_TOOL", vendorGroup: "HeadlessDriver", name: "PhantomJS", pattern: /PhantomJS/i },
  { category: "AUTOMATED_TOOL", triageCategory: "CRAWLER_TOOL", vendorGroup: "CLITool", name: "cURL", pattern: /^curl\//i },
  { category: "AUTOMATED_TOOL", triageCategory: "CRAWLER_TOOL", vendorGroup: "CLITool", name: "Wget", pattern: /^Wget\//i },
  { category: "AUTOMATED_TOOL", triageCategory: "CRAWLER_TOOL", vendorGroup: "CLITool", name: "Python-requests", pattern: /python-requests|python-urllib|aiohttp|httpx|Scrapy/i },
  { category: "AUTOMATED_TOOL", triageCategory: "CRAWLER_TOOL", vendorGroup: "CLITool", name: "Go-http-client", pattern: /Go-http-client/i },
  { category: "AUTOMATED_TOOL", triageCategory: "CRAWLER_TOOL", vendorGroup: "CLITool", name: "Axios", pattern: /axios\//i },
  { category: "AUTOMATED_TOOL", triageCategory: "CRAWLER_TOOL", vendorGroup: "CLITool", name: "Node-fetch", pattern: /node-fetch|undici/i },
  { category: "AUTOMATED_TOOL", triageCategory: "CRAWLER_TOOL", vendorGroup: "CLITool", name: "Java-HttpClient", pattern: /Java\/|Apache-HttpClient/i }
];
var GENERIC_BOT_PATTERN = /\b(bot|crawler|spider|scraper|archiver|transcoder)\b/i;
function classifyBot(uaString, signals) {
  const evidenceCodes = [];
  const rawUA = typeof uaString === "string" ? uaString : signals?.userAgent || "";
  const ua = rawUA.slice(0, 512).trim();
  if (!ua) {
    if (signals?.webdriver || signals?.isHeadlessRenderer || signals?.headlessEvasionsDetected) {
      return {
        isBotLikely: true,
        category: "AUTOMATED_TOOL",
        triageCategory: "CRAWLER_TOOL",
        vendorGroup: "HeadlessDriver",
        claimedName: "headless-webdriver",
        identityState: "SUSPECTED",
        heuristicConfidence: 0.95,
        evidenceCodes: ["SIGNAL_WEBDRIVER_ACTIVE", "UA_EMPTY"]
      };
    }
    return {
      isBotLikely: false,
      category: "NONE",
      triageCategory: "HUMAN",
      vendorGroup: "HumanUser",
      identityState: "NOT_BOT",
      heuristicConfidence: 0.2,
      evidenceCodes: ["UA_EMPTY"]
    };
  }
  for (const entry of BOT_SIGNATURES) {
    if (entry.pattern.test(ua)) {
      evidenceCodes.push(`SIGNATURE_MATCH_${entry.category}`);
      if (signals?.webdriver || signals?.isHeadlessRenderer) {
        evidenceCodes.push("SIGNAL_WEBDRIVER_ACTIVE");
      }
      const identityState = entry.category === "AUTOMATED_TOOL" ? "SUSPECTED" : "CLAIMED";
      return {
        isBotLikely: true,
        category: entry.category,
        triageCategory: entry.triageCategory,
        vendorGroup: entry.vendorGroup,
        claimedName: entry.name,
        identityState,
        heuristicConfidence: entry.category === "AUTOMATED_TOOL" ? 0.9 : 0.8,
        evidenceCodes
      };
    }
  }
  if (GENERIC_BOT_PATTERN.test(ua)) {
    evidenceCodes.push("GENERIC_BOT_TOKEN_FOUND");
    return {
      isBotLikely: true,
      category: "UNKNOWN_BOT",
      triageCategory: "CRAWLER_TOOL",
      vendorGroup: "OtherCrawler",
      claimedName: "generic-crawler",
      identityState: "CLAIMED",
      heuristicConfidence: 0.7,
      evidenceCodes
    };
  }
  if (signals?.webdriver || signals?.isHeadlessRenderer || signals?.headlessEvasionsDetected) {
    evidenceCodes.push("SIGNAL_WEBDRIVER_ON_STANDARD_UA");
    return {
      isBotLikely: true,
      category: "AUTOMATED_TOOL",
      triageCategory: "CRAWLER_TOOL",
      vendorGroup: "HeadlessDriver",
      claimedName: "stealth-headless-browser",
      identityState: "SUSPECTED",
      heuristicConfidence: 0.95,
      evidenceCodes
    };
  }
  if (signals?.httpMissingHeaders) {
    evidenceCodes.push("SIGNAL_SPOOFED_BROWSER_UA_CLI");
    return {
      isBotLikely: true,
      category: "AUTOMATED_TOOL",
      triageCategory: "CRAWLER_TOOL",
      vendorGroup: "CLITool",
      claimedName: "spoofed-http-client",
      identityState: "SUSPECTED",
      heuristicConfidence: 0.88,
      evidenceCodes
    };
  }
  evidenceCodes.push("STANDARD_BROWSER_HEURISTIC");
  return {
    isBotLikely: false,
    category: "NONE",
    triageCategory: "HUMAN",
    vendorGroup: "HumanUser",
    identityState: "NOT_BOT",
    heuristicConfidence: 0.9,
    evidenceCodes
  };
}

// src/decision.ts
function resolveDecision(context, trustedState = { isVerified: false }) {
  const {
    score,
    recommendedScoreAction,
    classification,
    signals,
    botPolicy = {},
    enforcementMode
  } = context;
  const targetMode = botPolicy.targetMode || "ANY";
  const allowlist = new Set(botPolicy.allowlist || []);
  const denylist = new Set(botPolicy.denylist || []);
  const categoryRouting = botPolicy.categoryRouting || {};
  const isVerified = trustedState.isVerified === true;
  if (targetMode === "VERIFIED_PARTNERS_ONLY") {
    if (isVerified) {
      return {
        action: "ALLOW" /* ALLOW */,
        reasonCode: "BOT_ALLOWLIST_PASSED"
      };
    }
    return {
      action: "TEMPORARY_DENY" /* TEMPORARY_DENY */,
      reasonCode: "TARGET_MODE_PARTNERS_UNVERIFIED"
    };
  }
  if (targetMode === "HUMANS_ONLY") {
    if (classification.category === "AUTOMATED_TOOL" || denylist.has(classification.category)) {
      return {
        action: "TEMPORARY_DENY" /* TEMPORARY_DENY */,
        reasonCode: "TARGET_MODE_HUMANS_ONLY_VIOLATION"
      };
    }
    if (classification.isBotLikely && !isVerified) {
      return {
        action: "TEMPORARY_DENY" /* TEMPORARY_DENY */,
        reasonCode: "TARGET_MODE_HUMANS_ONLY_VIOLATION"
      };
    }
    return {
      action: recommendedScoreAction,
      reasonCode: recommendedScoreAction === "ALLOW" /* ALLOW */ ? "BASELINE_CLEAN" : "AUTOMATION_SUSPECTED"
    };
  }
  if (targetMode === "BOTS_ONLY") {
    if (!classification.isBotLikely && classification.category === "NONE") {
      const guidanceRoute = categoryRouting["NONE"] || {
        action: "REDIRECT" /* REDIRECT */,
        destinationId: "BOT_GUIDANCE",
        statusCode: 302,
        reasonCode: "TARGET_MODE_BOTS_ONLY_VIOLATION"
      };
      return {
        action: guidanceRoute.action,
        reasonCode: guidanceRoute.reasonCode || "TARGET_MODE_BOTS_ONLY_VIOLATION",
        redirect: guidanceRoute.destinationId ? {
          destinationId: guidanceRoute.destinationId,
          statusCode: guidanceRoute.statusCode || 302
        } : void 0
      };
    }
  }
  if (denylist.has(classification.category) || classification.claimedName && denylist.has(classification.claimedName)) {
    return {
      action: "TEMPORARY_DENY" /* TEMPORARY_DENY */,
      reasonCode: "BOT_DENYLIST_TRIGGERED"
    };
  }
  if (isVerified || allowlist.has(classification.category) || classification.claimedName && allowlist.has(classification.claimedName)) {
    return {
      action: "ALLOW" /* ALLOW */,
      reasonCode: "BOT_ALLOWLIST_PASSED"
    };
  }
  const categoryRule = categoryRouting[classification.category];
  if (categoryRule) {
    return {
      action: categoryRule.action,
      reasonCode: categoryRule.reasonCode || "CATEGORY_ROUTING_REDIRECT",
      redirect: categoryRule.destinationId ? {
        destinationId: categoryRule.destinationId,
        statusCode: categoryRule.statusCode || 302
      } : void 0
    };
  }
  if (classification.category === "UNKNOWN_BOT" && botPolicy.unknownBotAction) {
    return {
      action: botPolicy.unknownBotAction.action,
      reasonCode: botPolicy.unknownBotAction.reasonCode || "UNKNOWN_BOT_POLICY_ACTION",
      redirect: botPolicy.unknownBotAction.destinationId ? {
        destinationId: botPolicy.unknownBotAction.destinationId,
        statusCode: botPolicy.unknownBotAction.statusCode || 302
      } : void 0
    };
  }
  return {
    action: recommendedScoreAction,
    reasonCode: recommendedScoreAction === "ALLOW" /* ALLOW */ ? "BASELINE_CLEAN" : recommendedScoreAction === "TEMPORARY_DENY" /* TEMPORARY_DENY */ ? "POLICY_SCORE_DENY" : recommendedScoreAction === "REQUIRE_APP_VERIFICATION" /* REQUIRE_APP_VERIFICATION */ ? "POLICY_SCORE_APP_VERIFICATION" : "POLICY_SCORE_RATE_LIMIT"
  };
}

// src/collector-crypto.ts
var CollectorVerificationError = class extends Error {
  code;
  httpStatus;
  constructor(code, message, httpStatus = 400) {
    super(message);
    this.name = "CollectorVerificationError";
    this.code = code;
    this.httpStatus = httpStatus;
  }
};
var VERIFIED_COLLECTOR_BRAND = /* @__PURE__ */ Symbol("AMEVA_VERIFIED_COLLECTOR_INTERNAL");
var MemoryNonceStore = class {
  nonces = /* @__PURE__ */ new Map();
  maxEntries;
  constructor(options = {}) {
    this.maxEntries = options.maxEntries ?? 1e4;
  }
  async consume(namespace, expiresAtEpochMs) {
    if (!namespace || !namespace.issuer || !namespace.kid || !namespace.nonce) {
      return false;
    }
    const key = `${namespace.issuer}:${namespace.kid}:${namespace.nonce}`;
    this.prune();
    if (this.nonces.has(key)) {
      return false;
    }
    if (this.nonces.size >= this.maxEntries) {
      this.prune();
      if (this.nonces.size >= this.maxEntries) {
        throw new CollectorVerificationError(
          "NONCE_STORE_CAPACITY_REACHED",
          `Nonce store capacity limit (${this.maxEntries} entries) reached`,
          503
        );
      }
    }
    this.nonces.set(key, expiresAtEpochMs);
    return true;
  }
  prune() {
    const now = Date.now();
    for (const [key, exp] of this.nonces.entries()) {
      if (exp <= now) {
        this.nonces.delete(key);
      }
    }
  }
};
var StaticKeyResolver = class {
  constructor(keys) {
    this.keys = keys;
  }
  keys;
  async resolveKey(kid) {
    return this.keys[kid] || null;
  }
};
function createVerifiedCollectorContext(payload) {
  return Object.freeze({
    [VERIFIED_COLLECTOR_BRAND]: true,
    kid: payload.kid,
    issuer: payload.iss,
    audience: payload.aud,
    sessionRef: payload.sessionRef,
    issuedAtEpochMs: payload.iat,
    expiresAtEpochMs: payload.exp
  });
}
function isVerifiedCollectorContext(obj) {
  return typeof obj === "object" && obj !== null && obj[VERIFIED_COLLECTOR_BRAND] === true;
}
function canonicalizeJsonSubset(obj, seen = /* @__PURE__ */ new Set()) {
  if (obj === null) return "null";
  if (typeof obj === "number") {
    if (!Number.isFinite(obj)) {
      throw new CollectorVerificationError("MALFORMED_TOKEN", "Non-finite numbers are not permitted in canonical JSON", 400);
    }
    return JSON.stringify(obj);
  }
  if (typeof obj === "boolean" || typeof obj === "string") {
    return JSON.stringify(obj);
  }
  if (typeof obj === "undefined") {
    throw new CollectorVerificationError("MALFORMED_TOKEN", "Undefined values are not permitted in canonical JSON", 400);
  }
  if (typeof obj !== "object") {
    throw new CollectorVerificationError("MALFORMED_TOKEN", `Unsupported type ${typeof obj} in canonical JSON`, 400);
  }
  if (seen.has(obj)) {
    throw new CollectorVerificationError("MALFORMED_TOKEN", "Circular reference detected in payload", 400);
  }
  seen.add(obj);
  if (Array.isArray(obj)) {
    const items = obj.map((item) => canonicalizeJsonSubset(item, seen));
    seen.delete(obj);
    return "[" + items.join(",") + "]";
  }
  const keys = Object.keys(obj).sort();
  const entries = keys.map((k) => `${JSON.stringify(k)}:${canonicalizeJsonSubset(obj[k], seen)}`);
  seen.delete(obj);
  return "{" + entries.join(",") + "}";
}
var BASE64URL_RE = /^[A-Za-z0-9_-]+$/;
function assertBase64UrlSegment(segment, name) {
  if (!segment || typeof segment !== "string" || !BASE64URL_RE.test(segment) || segment.length % 4 === 1) {
    throw new CollectorVerificationError("MALFORMED_TOKEN", `Invalid ${name} Base64URL encoding`, 400);
  }
}
function base64UrlEncode(data) {
  const bytes = typeof data === "string" ? new TextEncoder().encode(data) : data;
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = typeof btoa === "function" ? btoa(binary) : globalThis.Buffer.from(bytes).toString("base64");
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function base64UrlDecodeToBytes(str) {
  assertBase64UrlSegment(str, "segment");
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  if (typeof atob === "function") {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }
  return new Uint8Array(globalThis.Buffer.from(base64, "base64"));
}
function base64UrlDecode(str) {
  const bytes = base64UrlDecodeToBytes(str);
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}
function constantTimeEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a[i] ^ b[i];
  }
  return diff === 0;
}
function computeSha256(data) {
  const K = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ];
  let H = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ];
  const l = data.length * 8;
  const k = (448 - (l + 8) % 512 + 512) % 512;
  const paddedLen = (l + 8 + k + 64) / 8;
  const padded = new Uint8Array(paddedLen);
  padded.set(data);
  padded[data.length] = 128;
  const view = new DataView(padded.buffer, padded.byteOffset, padded.byteLength);
  view.setUint32(paddedLen - 8, Math.floor(data.length / 536870912) >>> 0, false);
  view.setUint32(paddedLen - 4, l >>> 0, false);
  const W = new Uint32Array(64);
  const rotr = (n, x) => x >>> n | x << 32 - n;
  for (let i = 0; i < paddedLen; i += 64) {
    for (let t = 0; t < 16; t++) {
      W[t] = view.getUint32(i + t * 4, false);
    }
    for (let t = 16; t < 64; t++) {
      const s0 = rotr(7, W[t - 15]) ^ rotr(18, W[t - 15]) ^ W[t - 15] >>> 3;
      const s1 = rotr(17, W[t - 2]) ^ rotr(19, W[t - 2]) ^ W[t - 2] >>> 10;
      W[t] = W[t - 16] + s0 + W[t - 7] + s1 >>> 0;
    }
    let a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
    for (let t = 0; t < 64; t++) {
      const S1 = rotr(6, e) ^ rotr(11, e) ^ rotr(25, e);
      const ch = e & f ^ ~e & g;
      const temp1 = h + S1 + ch + K[t] + W[t] >>> 0;
      const S0 = rotr(2, a) ^ rotr(13, a) ^ rotr(22, a);
      const maj = a & b ^ a & c ^ b & c;
      const temp2 = S0 + maj >>> 0;
      h = g;
      g = f;
      f = e;
      e = d + temp1 >>> 0;
      d = c;
      c = b;
      b = a;
      a = temp1 + temp2 >>> 0;
    }
    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
    H[5] = H[5] + f >>> 0;
    H[6] = H[6] + g >>> 0;
    H[7] = H[7] + h >>> 0;
  }
  const out = new Uint8Array(32);
  const outView = new DataView(out.buffer);
  for (let i = 0; i < 8; i++) {
    outView.setUint32(i * 4, H[i], false);
  }
  return out;
}
function computeHmacSha256(key, data) {
  const encoder = new TextEncoder();
  const keyBytes = typeof key === "string" ? encoder.encode(key) : key;
  const dataBytes = typeof data === "string" ? encoder.encode(data) : data;
  const blockSize = 64;
  let finalKey = keyBytes;
  if (keyBytes.length > blockSize) {
    finalKey = computeSha256(keyBytes);
  }
  const paddedKey = new Uint8Array(blockSize);
  paddedKey.set(finalKey);
  const oKeyPad = new Uint8Array(blockSize);
  const iKeyPad = new Uint8Array(blockSize);
  for (let i = 0; i < blockSize; i++) {
    oKeyPad[i] = paddedKey[i] ^ 92;
    iKeyPad[i] = paddedKey[i] ^ 54;
  }
  const inner = new Uint8Array(blockSize + dataBytes.length);
  inner.set(iKeyPad);
  inner.set(dataBytes, blockSize);
  const innerHash = computeSha256(inner);
  const outer = new Uint8Array(blockSize + innerHash.length);
  outer.set(oKeyPad);
  outer.set(innerHash, blockSize);
  return computeSha256(outer);
}
function signCollectorToken(payload, secretKey) {
  const canonical = canonicalizeJsonSubset(payload);
  const payloadB64 = base64UrlEncode(canonical);
  const signingInput = `sv1.${payloadB64}`;
  const sigBytes = computeHmacSha256(secretKey, signingInput);
  const sigB64 = base64UrlEncode(sigBytes);
  return `${signingInput}.${sigB64}`;
}
async function verifyCollectorToken(token, keyResolver, nonceStore, options) {
  if (!options || typeof options.expectedAudience !== "string" || !options.expectedAudience.trim()) {
    throw new CollectorVerificationError("CONFIGURATION_ERROR", "options.expectedAudience must be a non-empty string", 500);
  }
  if (typeof options.expectedPurpose !== "string" || !options.expectedPurpose.trim()) {
    throw new CollectorVerificationError("CONFIGURATION_ERROR", "options.expectedPurpose must be a non-empty string", 500);
  }
  if (typeof token !== "string" || token.length === 0 || token.length > 4096) {
    throw new CollectorVerificationError("MALFORMED_TOKEN", "Token exceeds maximum allowed size of 4096 bytes or is empty", 400);
  }
  const parts = token.split(".");
  if (parts.length !== 3 || parts[0] !== "sv1") {
    throw new CollectorVerificationError("MALFORMED_TOKEN", "Invalid token format. Expected sv1.<payload>.<sig>", 400);
  }
  const [, payloadB64, sigB64] = parts;
  assertBase64UrlSegment(payloadB64, "payload");
  assertBase64UrlSegment(sigB64, "signature");
  let payload;
  try {
    const rawJson = base64UrlDecode(payloadB64);
    payload = JSON.parse(rawJson);
  } catch (err) {
    throw new CollectorVerificationError("MALFORMED_TOKEN", "Failed to decode or parse token payload JSON", 400);
  }
  if (payload.v !== 1 || typeof payload.kid !== "string" || !payload.kid || typeof payload.iss !== "string" || !payload.iss || typeof payload.aud !== "string" || !payload.aud || typeof payload.purpose !== "string" || !payload.purpose || !Number.isSafeInteger(payload.iat) || payload.iat <= 0 || !Number.isSafeInteger(payload.exp) || payload.exp <= 0 || typeof payload.nonce !== "string" || !payload.nonce || typeof payload.sessionRef !== "string") {
    throw new CollectorVerificationError("MALFORMED_TOKEN", "Token payload contains invalid or missing mandatory claims", 400);
  }
  const secretKey = await keyResolver.resolveKey(payload.kid);
  if (!secretKey) {
    throw new CollectorVerificationError("UNKNOWN_KEY_ID", `Key ID "${payload.kid}" is not recognized or has been revoked`, 401);
  }
  const canonical = canonicalizeJsonSubset(payload);
  const reEncodedPayloadB64 = base64UrlEncode(canonical);
  if (payloadB64 !== reEncodedPayloadB64) {
    throw new CollectorVerificationError("MALFORMED_TOKEN", "Token payload is not in canonical form", 400);
  }
  const signingInput = `sv1.${reEncodedPayloadB64}`;
  const expectedSigBytes = computeHmacSha256(secretKey, signingInput);
  const providedSigBytes = base64UrlDecodeToBytes(sigB64);
  if (!constantTimeEqual(expectedSigBytes, providedSigBytes)) {
    throw new CollectorVerificationError("INVALID_SIGNATURE", "Cryptographic signature verification failed", 401);
  }
  const now = options.nowEpochMs ?? Date.now();
  if (payload.exp <= payload.iat) {
    throw new CollectorVerificationError("MALFORMED_TOKEN", "Token expiration must be strictly greater than issued timestamp", 400);
  }
  const maxLifetime = options.maxTokenLifetimeMs ?? 3e5;
  if (payload.exp - payload.iat > maxLifetime) {
    throw new CollectorVerificationError("MALFORMED_TOKEN", `Token lifetime exceeds maximum allowed duration (${maxLifetime}ms)`, 400);
  }
  if (payload.exp < now) {
    throw new CollectorVerificationError("TOKEN_EXPIRED", "Collector token has expired", 401);
  }
  const maxClockSkewMs = options.maxClockSkewMs ?? 3e4;
  if (Math.abs(now - payload.iat) > maxClockSkewMs) {
    throw new CollectorVerificationError("INVALID_TIMESTAMP_FRESHNESS", "Token timestamp violates freshness window", 401);
  }
  if (payload.aud !== options.expectedAudience) {
    throw new CollectorVerificationError("AUDIENCE_MISMATCH", `Expected audience "${options.expectedAudience}", got "${payload.aud}"`, 403);
  }
  if (payload.purpose !== options.expectedPurpose) {
    throw new CollectorVerificationError("PURPOSE_MISMATCH", `Expected purpose "${options.expectedPurpose}", got "${payload.purpose}"`, 403);
  }
  if (options.allowedIssuers && options.allowedIssuers.length > 0) {
    if (!options.allowedIssuers.includes(payload.iss)) {
      throw new CollectorVerificationError("UNAUTHORIZED_ISSUER", `Issuer "${payload.iss}" is not in authorized issuers whitelist`, 403);
    }
  }
  const namespace = {
    issuer: payload.iss,
    kid: payload.kid,
    nonce: payload.nonce
  };
  const nonceAccepted = await nonceStore.consume(namespace, payload.exp);
  if (!nonceAccepted) {
    throw new CollectorVerificationError("REPLAY_ATTACK_DETECTED", `Nonce "${payload.nonce}" has already been used for issuer "${payload.iss}" (Replay Attack Detected)`, 409);
  }
  return createVerifiedCollectorContext(payload);
}
async function readJsonBodyLimited(request, maxBytes = 65536) {
  if (!request) return {};
  if (typeof request.headers?.get === "function") {
    const contentLength = request.headers.get("content-length");
    if (contentLength && Number.isFinite(Number(contentLength)) && Number(contentLength) > maxBytes) {
      throw new CollectorVerificationError("REQUEST_BODY_TOO_LARGE", `Request body exceeds maximum size of ${maxBytes} bytes`, 413);
    }
    if (request.body && typeof request.body.getReader === "function") {
      const reader = request.body.getReader();
      const chunks = [];
      let total = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        total += value.byteLength;
        if (total > maxBytes) {
          await reader.cancel();
          throw new CollectorVerificationError("REQUEST_BODY_TOO_LARGE", `Request body exceeds maximum size of ${maxBytes} bytes`, 413);
        }
        chunks.push(value);
      }
      const bytes = new Uint8Array(total);
      let offset = 0;
      for (const chunk of chunks) {
        bytes.set(chunk, offset);
        offset += chunk.byteLength;
      }
      let text = "";
      try {
        text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
      } catch {
        throw new CollectorVerificationError("MALFORMED_REQUEST_BODY", "Request body contains invalid UTF-8 encoding", 400);
      }
      try {
        return text.trim() ? JSON.parse(text) : {};
      } catch {
        throw new CollectorVerificationError("MALFORMED_REQUEST_BODY", "Request body contains invalid JSON syntax", 400);
      }
    }
  }
  if (request.body !== void 0 && request.body !== null) {
    if (typeof request.body === "string") {
      const bytes = new TextEncoder().encode(request.body);
      if (bytes.byteLength > maxBytes) {
        throw new CollectorVerificationError("REQUEST_BODY_TOO_LARGE", `Request body exceeds maximum size of ${maxBytes} bytes`, 413);
      }
      try {
        return request.body.trim() ? JSON.parse(request.body) : {};
      } catch {
        throw new CollectorVerificationError("MALFORMED_REQUEST_BODY", "Request body contains invalid JSON syntax", 400);
      }
    }
    if (typeof request.body === "object" && !ArrayBuffer.isView(request.body)) {
      let serialized;
      try {
        serialized = JSON.stringify(request.body);
      } catch {
        throw new CollectorVerificationError("MALFORMED_REQUEST_BODY", "Request body is not JSON-serializable", 400);
      }
      const bytes = new TextEncoder().encode(serialized);
      if (bytes.byteLength > maxBytes) {
        throw new CollectorVerificationError("REQUEST_BODY_TOO_LARGE", `Request body exceeds maximum size of ${maxBytes} bytes`, 413);
      }
      return request.body;
    }
  }
  if (typeof request.json === "function") {
    try {
      const parsed = await request.json();
      if (parsed !== null && typeof parsed === "object" && !ArrayBuffer.isView(parsed)) {
        const serialized = JSON.stringify(parsed);
        const bytes = new TextEncoder().encode(serialized);
        if (bytes.byteLength > maxBytes) {
          throw new CollectorVerificationError("REQUEST_BODY_TOO_LARGE", `Request body exceeds maximum size of ${maxBytes} bytes`, 413);
        }
      }
      return parsed ?? {};
    } catch (err) {
      if (err instanceof CollectorVerificationError) throw err;
      throw new CollectorVerificationError("MALFORMED_REQUEST_BODY", "Request body contains invalid JSON or UTF-8", 400);
    }
  }
  return {};
}

// src/engine.ts
function evaluate(signals = {}, optionsOrPolicy = defaultPolicy) {
  return evaluateWithTrust(signals, { isVerified: false }, optionsOrPolicy);
}
function evaluateVerified(signals = {}, verifiedContext, optionsOrPolicy = defaultPolicy) {
  let isAuthentic = false;
  let verificationState = "NONE";
  let issuer;
  let kid;
  let error;
  if (verifiedContext) {
    if (isVerifiedCollectorContext(verifiedContext)) {
      isAuthentic = true;
      verificationState = "VERIFIED";
      issuer = verifiedContext.issuer;
      kid = verifiedContext.kid;
    } else {
      verificationState = "FAILED";
      error = "AUTHENTICATION_FAILED";
    }
  }
  const report = evaluateWithTrust(
    signals,
    { isVerified: isAuthentic },
    optionsOrPolicy
  );
  report.verification = {
    state: verificationState,
    issuer,
    kid,
    error
  };
  return report;
}
function evaluateWithTrust(signals = {}, trustedState, optionsOrPolicy = defaultPolicy) {
  let policy = defaultPolicy;
  let traceId;
  let enforcementMode = "SHADOW";
  if ("rules" in optionsOrPolicy && Array.isArray(optionsOrPolicy.rules)) {
    policy = optionsOrPolicy;
  } else {
    const opts = optionsOrPolicy;
    if (opts.policy) policy = opts.policy;
    if (opts.traceId) traceId = opts.traceId;
    if (opts.enforcementMode) enforcementMode = opts.enforcementMode;
  }
  const currentTraceId = traceId || createTraceId();
  const evidence = [];
  let calculatedScore = 0;
  const safeSignals = { ...signals };
  const classification = classifyBot(safeSignals.userAgent, safeSignals);
  if (classification.isBotLikely && classification.category !== "NONE") {
    safeSignals.botCategory = classification.category;
    if (classification.claimedName && !safeSignals.claimedBot) {
      safeSignals.claimedBot = classification.claimedName;
    }
  }
  for (const rule of policy.rules) {
    const result = rule.evaluate(safeSignals);
    if (result.triggered) {
      calculatedScore += result.score;
      evidence.push({
        rule: rule.id,
        score: result.score,
        attributes: { ...result.attributes },
        message: result.message
      });
    }
  }
  const finalScore = Number.isFinite(calculatedScore) ? Math.min(100, Math.max(0, calculatedScore)) : 0;
  const evidenceConfidence = calculateConfidence(safeSignals);
  let recommendedScoreAction = "ALLOW" /* ALLOW */;
  if (finalScore >= policy.thresholds.deny) {
    recommendedScoreAction = "TEMPORARY_DENY" /* TEMPORARY_DENY */;
  } else if (finalScore >= policy.thresholds.appVerification) {
    recommendedScoreAction = "REQUIRE_APP_VERIFICATION" /* REQUIRE_APP_VERIFICATION */;
  } else if (finalScore >= policy.thresholds.rateLimit) {
    recommendedScoreAction = "RATE_LIMIT" /* RATE_LIMIT */;
  } else if (finalScore > 20) {
    recommendedScoreAction = "OBSERVE" /* OBSERVE */;
  }
  const decision = resolveDecision(
    {
      score: finalScore,
      recommendedScoreAction,
      classification,
      signals: safeSignals,
      botPolicy: policy.botPolicy,
      enforcementMode
    },
    trustedState
  );
  const recommendedAction = decision.action;
  let action = recommendedAction;
  if (enforcementMode === "SHADOW") {
    if (recommendedAction === "ALLOW" /* ALLOW */) {
      action = "ALLOW" /* ALLOW */;
    } else {
      action = "OBSERVE" /* OBSERVE */;
    }
  }
  return {
    traceId: currentTraceId,
    score: finalScore,
    evidenceConfidence,
    action,
    recommendedAction,
    decision,
    classification,
    verification: {
      state: trustedState.isVerified ? "VERIFIED" : "NONE"
    },
    redirectTo: decision.redirect?.destinationId,
    redirectStatusCode: decision.redirect?.statusCode,
    enforcementMode,
    policyVersion: policy.version,
    evidence,
    evaluatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    signals: safeSignals
  };
}

// src/store.ts
var VALID_ACTIONS = new Set(Object.values(SentinelAction));
var VALID_MODES = /* @__PURE__ */ new Set(["SHADOW", "ENFORCE"]);
function isIsoDate(value) {
  if (typeof value !== "string") return false;
  const time = Date.parse(value);
  if (!Number.isFinite(time)) return false;
  try {
    return new Date(time).toISOString() === value;
  } catch (e) {
    return false;
  }
}
function hasPrimitiveAttributes(value) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  return Object.values(value).every((item) => {
    return item === null || typeof item === "string" || typeof item === "number" || typeof item === "boolean";
  });
}
function isMinimalDerivedSignals(signals) {
  if (signals === null || typeof signals !== "object" || Array.isArray(signals)) return false;
  const s = signals;
  if (s.webdriverObserved !== void 0 && typeof s.webdriverObserved !== "boolean") return false;
  if (s.telemetryObserved !== void 0 && typeof s.telemetryObserved !== "boolean") return false;
  if (s.sampleComplete !== void 0 && typeof s.sampleComplete !== "boolean") return false;
  if (s.observationDurationMs !== void 0 && typeof s.observationDurationMs !== "number") return false;
  if (s.trustedInputCount !== void 0 && typeof s.trustedInputCount !== "number") return false;
  if (s.burstCount10s !== void 0 && typeof s.burstCount10s !== "number") return false;
  if (s.touchMismatch !== void 0 && typeof s.touchMismatch !== "boolean") return false;
  if (s.suspiciousUA !== void 0 && typeof s.suspiciousUA !== "boolean") return false;
  return true;
}
function isValidEvidenceItem(item) {
  if (item === null || typeof item !== "object" || Array.isArray(item)) return false;
  const e = item;
  return typeof e.rule === "string" && typeof e.score === "number" && Number.isFinite(e.score) && typeof e.message === "string" && hasPrimitiveAttributes(e.attributes);
}
function isStoredRiskEventV1(value) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return false;
  const item = value;
  return item.schemaVersion === "1.0" && typeof item.traceId === "string" && item.traceId.length > 0 && typeof item.score === "number" && Number.isFinite(item.score) && item.score >= 0 && item.score <= 100 && typeof item.evidenceConfidence === "number" && Number.isFinite(item.evidenceConfidence) && item.evidenceConfidence >= 0 && item.evidenceConfidence <= 1 && typeof item.action === "string" && VALID_ACTIONS.has(item.action) && typeof item.enforcementMode === "string" && VALID_MODES.has(item.enforcementMode) && typeof item.policyVersion === "string" && isIsoDate(item.evaluatedAt) && Array.isArray(item.evidence) && item.evidence.every(isValidEvidenceItem);
}
function isStoredRiskEventV2(value) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return false;
  const item = value;
  const hasValidDecision = typeof item.decision === "object" && item.decision !== null && typeof item.decision.action === "string" && VALID_ACTIONS.has(item.decision.action) && typeof item.decision.reasonCode === "string";
  return item.schemaVersion === "2.0" && typeof item.traceId === "string" && item.traceId.length > 0 && typeof item.score === "number" && Number.isFinite(item.score) && item.score >= 0 && item.score <= 100 && typeof item.evidenceConfidence === "number" && Number.isFinite(item.evidenceConfidence) && item.evidenceConfidence >= 0 && item.evidenceConfidence <= 1 && typeof item.action === "string" && VALID_ACTIONS.has(item.action) && hasValidDecision && isIsoDate(item.evaluatedAt) && Array.isArray(item.evidence) && item.evidence.every(isValidEvidenceItem);
}
function isStoredRiskEvent(value) {
  return isStoredRiskEventV2(value) || isStoredRiskEventV1(value);
}
function sanitizeSignals(signals = {}) {
  return {
    webdriverObserved: !!signals.webdriver || !!signals.webdriverObserved,
    telemetryObserved: !!signals.telemetryObserved,
    sampleComplete: !!signals.sampleComplete,
    observationDurationMs: typeof signals.observationDurationMs === "number" ? signals.observationDurationMs : 0,
    trustedInputCount: typeof signals.isTrustedEventsCount === "number" ? signals.isTrustedEventsCount : typeof signals.trustedInputCount === "number" ? signals.trustedInputCount : 0,
    burstCount10s: typeof signals.burstCount10s === "number" ? signals.burstCount10s : 1,
    touchMismatch: !!signals.touchMismatch,
    suspiciousUA: !!signals.suspiciousUA
  };
}
function sanitizeEvidence(item) {
  const safeAttrs = {};
  if (item.attributes && typeof item.attributes === "object" && !Array.isArray(item.attributes)) {
    for (const [k, v] of Object.entries(item.attributes)) {
      if (typeof v === "string" || typeof v === "number" || typeof v === "boolean" || v === null) {
        safeAttrs[k] = v;
      }
    }
  }
  return {
    rule: String(item.rule || "unknown"),
    score: Number(item.score || 0),
    attributes: safeAttrs,
    message: String(item.message || "")
  };
}
function toStoredRiskEvent(report) {
  return {
    schemaVersion: "2.0",
    traceId: report.traceId,
    evaluatedAt: report.evaluatedAt,
    score: report.score,
    evidenceConfidence: report.evidenceConfidence,
    action: report.action,
    decision: report.decision || {
      action: report.action,
      reasonCode: "BASELINE_CLEAN"
    },
    classification: report.classification ? {
      category: report.classification.category,
      identityState: report.classification.identityState,
      claimedName: report.classification.claimedName
    } : void 0,
    verification: report.verification,
    evidence: (report.evidence || []).map(sanitizeEvidence)
  };
}
function toStoredRiskEventV1(report) {
  return {
    schemaVersion: "1.0",
    traceId: report.traceId,
    evaluatedAt: report.evaluatedAt,
    score: report.score,
    evidenceConfidence: report.evidenceConfidence,
    action: report.action,
    enforcementMode: report.enforcementMode,
    policyVersion: report.policyVersion,
    evidence: (report.evidence || []).map(sanitizeEvidence),
    derivedSignals: {
      webdriver: !!report.signals?.webdriver,
      burstCount10s: report.signals?.burstCount10s || 1,
      hasPhysics: (report.signals?.isTrustedEventsCount || 0) > 0
    }
  };
}
var MemoryRiskEventStore = class {
  events = [];
  maxItems;
  maxAgeMs;
  constructor(options = {}) {
    this.maxItems = options.maxItems ?? 500;
    this.maxAgeMs = options.maxAgeMs ?? 864e5;
  }
  async append(report) {
    const stored = toStoredRiskEvent(report);
    if (!isStoredRiskEvent(stored)) {
      return;
    }
    const existingIndex = this.events.findIndex((e) => e.traceId === stored.traceId);
    if (existingIndex >= 0) {
      this.events[existingIndex] = stored;
      return;
    }
    this.events.push(stored);
    this.prune();
  }
  async list(options = {}) {
    this.prune();
    let res = [...this.events];
    if (options.since) {
      res = res.filter((e) => Date.parse(e.evaluatedAt) >= options.since);
    }
    if (options.limit && options.limit > 0) {
      res = res.slice(-options.limit);
    }
    return res.reverse();
  }
  async clear() {
    this.events = [];
  }
  prune() {
    const now = Date.now();
    this.events = this.events.filter((e) => {
      const ts = Date.parse(e.evaluatedAt);
      return Number.isFinite(ts) && now - ts <= this.maxAgeMs;
    });
    if (this.events.length > this.maxItems) {
      this.events = this.events.slice(this.events.length - this.maxItems);
    }
  }
};
var LocalStorageRiskEventStore = class {
  key = "ameva:sentinel:risk_events_v2";
  legacyKey = "ameva:sentinel:risk_events_v1";
  maxItems;
  maxAgeMs;
  constructor(options = {}) {
    this.maxItems = options.maxItems ?? 500;
    this.maxAgeMs = options.maxAgeMs ?? 864e5;
  }
  async append(report) {
    if (typeof localStorage === "undefined") return;
    const stored = toStoredRiskEvent(report);
    if (!isStoredRiskEvent(stored)) return;
    const events = await this.readRaw();
    const existingIndex = events.findIndex((e) => e.traceId === stored.traceId);
    if (existingIndex >= 0) {
      events[existingIndex] = stored;
    } else {
      events.push(stored);
    }
    this.writeRaw(this.prune(events));
  }
  async list(options = {}) {
    if (typeof localStorage === "undefined") return [];
    let events = this.prune(await this.readRaw());
    if (options.since) {
      events = events.filter((e) => Date.parse(e.evaluatedAt) >= options.since);
    }
    if (options.limit && options.limit > 0) {
      events = events.slice(-options.limit);
    }
    return events.reverse();
  }
  async clear() {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(this.key);
      localStorage.removeItem(this.legacyKey);
    }
  }
  async readRaw() {
    try {
      const raw = localStorage.getItem(this.key) || localStorage.getItem(this.legacyKey);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed.filter(isStoredRiskEvent);
      }
    } catch (e) {
    }
    return [];
  }
  writeRaw(events) {
    try {
      localStorage.setItem(this.key, JSON.stringify(events));
    } catch (e) {
    }
  }
  prune(events) {
    const now = Date.now();
    let valid = events.filter((e) => {
      const ts = Date.parse(e.evaluatedAt);
      return Number.isFinite(ts) && now - ts <= this.maxAgeMs;
    });
    if (valid.length > this.maxItems) {
      valid = valid.slice(valid.length - this.maxItems);
    }
    return valid;
  }
};

// src/redirect-security.ts
var FORBIDDEN_PROTOCOLS = /^(javascript|data|file|vbscript|about):/i;
var CONTROL_CHARACTERS = /[\u0000-\u001F\u007F\r\n]/;
var HOSTNAME_LABEL_RE = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;
function isValidIpv4Octet(octet) {
  if (!/^[0-9]{1,3}$/.test(octet)) return false;
  if (octet.length > 1 && octet.startsWith("0")) return false;
  const num = Number(octet);
  return num >= 0 && num <= 255;
}
function isIpv4Shaped(host) {
  const parts = host.split(".");
  return parts.length === 4 && parts.every((p) => /^[0-9]+$/.test(p));
}
function normalizeAllowedHost(value) {
  if (typeof value !== "string") {
    throw new Error(`Invalid allowed host: expected non-empty string, got ${typeof value}`);
  }
  const host = value.trim().toLowerCase().replace(/\.$/, "");
  if (!host || host.length > 253 || host.includes("/") || host.includes(":") || host.includes("@") || host.includes("?") || host.includes("#") || host.includes("%") || host.includes("_") || /\s/.test(host)) {
    throw new Error(`Invalid allowed host format: "${value}". Must be a valid hostname or IPv4 without protocol, port, path, or credentials.`);
  }
  if (host === "localhost") {
    return host;
  }
  if (isIpv4Shaped(host)) {
    const parts = host.split(".");
    if (!parts.every(isValidIpv4Octet)) {
      throw new Error(`Invalid IPv4 address: "${value}". Each octet must be between 0 and 255 without leading zeros.`);
    }
    return host;
  }
  const labels = host.split(".");
  for (const label of labels) {
    if (!label || !HOSTNAME_LABEL_RE.test(label)) {
      throw new Error(`Invalid allowed host label: "${label}" in "${value}". Labels must contain only alphanumeric characters or hyphens and cannot start or end with a hyphen.`);
    }
  }
  const tld = labels[labels.length - 1];
  if (/^[0-9]+$/.test(tld)) {
    throw new Error(`Invalid allowed host format: "${value}". Top-level domain cannot be purely numeric.`);
  }
  return host;
}
function validateRedirectUrl(rawUrl, options = {}) {
  if (typeof rawUrl !== "string" || !rawUrl.trim()) {
    return { valid: false, error: "Redirect URL must be a non-empty string" };
  }
  const trimmed = rawUrl.trim();
  if (trimmed.length > 2048) {
    return { valid: false, error: "URL exceeds maximum length of 2048 characters" };
  }
  if (CONTROL_CHARACTERS.test(trimmed)) {
    return { valid: false, error: "URL contains forbidden control characters or CRLF" };
  }
  if (trimmed.includes("\\")) {
    return { valid: false, error: "URL contains forbidden backslash characters" };
  }
  if (trimmed.startsWith("//") || trimmed.startsWith("/\\")) {
    return { valid: false, error: "Protocol-relative URLs (//) are strictly prohibited" };
  }
  if (FORBIDDEN_PROTOCOLS.test(trimmed)) {
    return { valid: false, error: "Dangerous URL protocol scheme detected" };
  }
  if (trimmed.startsWith("/")) {
    if (options.allowRelative !== false) {
      try {
        const dummyBase = new URL("https://internal.sentinel.base");
        const parsedRel = new URL(trimmed, dummyBase);
        if (parsedRel.origin !== dummyBase.origin) {
          return { valid: false, error: "Relative URL parsed across origin boundary" };
        }
        return { valid: true, sanitizedUrl: parsedRel.pathname + parsedRel.search + parsedRel.hash };
      } catch (err) {
        return { valid: false, error: "Malformed relative URL structure" };
      }
    }
    return { valid: false, error: "Relative URLs are not permitted in this context" };
  }
  let parsed;
  try {
    parsed = new URL(trimmed);
  } catch (err) {
    return { valid: false, error: "Malformed URL structure" };
  }
  const isLocalhost = parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";
  if (parsed.protocol !== "https:" && !(parsed.protocol === "http:" && isLocalhost)) {
    return { valid: false, error: "Redirect URL must use https: protocol" };
  }
  if (parsed.username || parsed.password) {
    return { valid: false, error: "URLs with embedded user credentials are prohibited" };
  }
  if (options.allowedHosts && options.allowedHosts.length > 0) {
    const allowSub = options.allowSubdomains !== false;
    let normalizedAllowedHosts;
    try {
      normalizedAllowedHosts = options.allowedHosts.map(normalizeAllowedHost);
    } catch (err) {
      return { valid: false, error: err.message };
    }
    const currentHost = parsed.hostname.toLowerCase().replace(/\.$/, "");
    const hostAllowed = normalizedAllowedHosts.some((h) => currentHost === h || allowSub && currentHost.endsWith(`.${h}`));
    if (!hostAllowed) {
      return { valid: false, error: `Host ${parsed.hostname} is not in allowed redirect whitelist` };
    }
  }
  return { valid: true, sanitizedUrl: parsed.toString() };
}

// src/null-sink.ts
var NullSink = class {
  name = "NullSink";
  emittedCount = 0;
  emit(record) {
    this.emittedCount++;
  }
  emitBatch(records) {
    this.emittedCount += records.length;
  }
  flush() {
    return Promise.resolve();
  }
  close() {
    return Promise.resolve();
  }
  reset() {
    this.emittedCount = 0;
  }
};

// src/composite-sink.ts
var CompositeSink = class {
  name = "CompositeSink";
  sinks;
  timeoutMs;
  constructor(sinks, options = {}) {
    this.sinks = [...sinks];
    this.timeoutMs = options.emitTimeoutMs ?? 5e3;
  }
  get downstreamSinks() {
    return this.sinks;
  }
  async withTimeout(promise, sinkName) {
    if (!promise || typeof promise.then !== "function") {
      return promise;
    }
    let timer;
    const timeoutPromise = new Promise((_, reject) => {
      timer = setTimeout(() => {
        reject(new Error(`[CompositeSink] Downstream sink "${sinkName}" timed out after ${this.timeoutMs}ms`));
      }, this.timeoutMs);
    });
    try {
      return await Promise.race([promise, timeoutPromise]);
    } finally {
      if (timer) clearTimeout(timer);
    }
  }
  async emit(record) {
    await Promise.allSettled(
      this.sinks.map((sink) => this.withTimeout(Promise.resolve(sink.emit(record)), sink.name))
    );
  }
  async emitBatch(records) {
    await Promise.allSettled(
      this.sinks.map((sink) => this.withTimeout(Promise.resolve(sink.emitBatch(records)), sink.name))
    );
  }
  async flush() {
    await Promise.allSettled(
      this.sinks.map((sink) => sink.flush ? this.withTimeout(sink.flush(), sink.name) : Promise.resolve())
    );
  }
  async close() {
    await Promise.allSettled(
      this.sinks.map((sink) => sink.close ? this.withTimeout(sink.close(), sink.name) : Promise.resolve())
    );
  }
};

// src/ring-buffer-sink.ts
var AsyncRingBufferSink = class {
  name = "AsyncRingBufferSink";
  downstream;
  capacity;
  mask;
  flushIntervalMs;
  batchSize;
  overflowPolicy;
  circuitBreakerThreshold;
  circuitBreakerCooldownMs;
  onError;
  buffer;
  head = 0;
  // Index for next write
  tail = 0;
  // Index for next read
  count = 0;
  // Current buffered count
  // Metrics counters
  droppedOldest = 0;
  droppedNewest = 0;
  circuitBreakerDrops = 0;
  failClosedRejects = 0;
  flushed = 0;
  flushFailures = 0;
  lastFlushTimestamp = null;
  // Circuit Breaker state
  circuitBreakerState = "CLOSED";
  consecutiveFailures = 0;
  lastFailureTime = 0;
  flushTimer = null;
  isClosed = false;
  isFlushing = false;
  constructor(options) {
    if (!options.downstream) {
      throw new Error("[AsyncRingBufferSink] Downstream EventSink is required");
    }
    this.downstream = options.downstream;
    let cap = options.capacity ?? 16384;
    if (cap < 2 || (cap & cap - 1) !== 0) {
      let p = 2;
      while (p < cap) p <<= 1;
      cap = p;
    }
    this.capacity = cap;
    this.mask = cap - 1;
    this.flushIntervalMs = options.flushIntervalMs ?? 100;
    this.batchSize = Math.min(options.batchSize ?? 100, this.capacity);
    this.overflowPolicy = options.overflowPolicy ?? "DROP_OLDEST";
    this.circuitBreakerThreshold = options.circuitBreakerThreshold ?? 5;
    this.circuitBreakerCooldownMs = options.circuitBreakerCooldownMs ?? 5e3;
    this.onError = options.onError ?? (() => {
    });
    this.buffer = new Array(this.capacity).fill(null);
    this.startTimer();
  }
  startTimer() {
    if (this.flushIntervalMs > 0 && typeof setInterval !== "undefined") {
      this.flushTimer = setInterval(() => {
        void this.flush();
      }, this.flushIntervalMs);
      if (this.flushTimer && typeof this.flushTimer.unref === "function") {
        this.flushTimer.unref();
      }
    }
  }
  updateCircuitBreakerOnEnqueue(now) {
    if (this.circuitBreakerState === "OPEN") {
      if (now - this.lastFailureTime >= this.circuitBreakerCooldownMs) {
        this.circuitBreakerState = "HALF_OPEN";
        return true;
      }
      return false;
    }
    return true;
  }
  emit(record) {
    if (this.isClosed) return;
    const now = Date.now();
    if (!this.updateCircuitBreakerOnEnqueue(now)) {
      this.circuitBreakerDrops++;
      return;
    }
    if (this.count >= this.capacity) {
      if (this.overflowPolicy === "DROP_OLDEST") {
        this.buffer[this.tail & this.mask] = null;
        this.tail++;
        this.count--;
        this.droppedOldest++;
      } else if (this.overflowPolicy === "DROP_NEWEST") {
        this.droppedNewest++;
        return;
      } else if (this.overflowPolicy === "FAIL_CLOSED") {
        this.failClosedRejects++;
        throw new Error(`[AsyncRingBufferSink] Ring buffer saturated (${this.capacity}) with FAIL_CLOSED policy`);
      }
    }
    this.buffer[this.head & this.mask] = record;
    this.head++;
    this.count++;
    if (this.flushIntervalMs > 0 && this.count >= this.batchSize) {
      void this.flush();
    }
  }
  emitBatch(records) {
    for (const rec of records) {
      this.emit(rec);
    }
  }
  async flush() {
    if (this.isFlushing || this.count === 0) return;
    this.isFlushing = true;
    try {
      while (this.count > 0) {
        const batchSize = Math.min(this.count, this.batchSize);
        const batch = [];
        for (let i = 0; i < batchSize; i++) {
          const item = this.buffer[this.tail & this.mask];
          this.buffer[this.tail & this.mask] = null;
          this.tail++;
          this.count--;
          if (item) batch.push(item);
        }
        if (batch.length === 0) continue;
        try {
          if (typeof this.downstream.emitBatch === "function") {
            await this.downstream.emitBatch(batch);
          } else {
            for (const item of batch) {
              await this.downstream.emit(item);
            }
          }
          this.flushed += batch.length;
          this.lastFlushTimestamp = (/* @__PURE__ */ new Date()).toISOString();
          if (this.circuitBreakerState === "HALF_OPEN") {
            this.circuitBreakerState = "CLOSED";
          }
          this.consecutiveFailures = 0;
        } catch (err) {
          const error = err instanceof Error ? err : new Error(String(err));
          this.flushFailures++;
          this.consecutiveFailures++;
          if (this.consecutiveFailures >= this.circuitBreakerThreshold) {
            this.circuitBreakerState = "OPEN";
            this.lastFailureTime = Date.now();
          }
          this.onError(error, batch.length);
          break;
        }
      }
      if (this.downstream.flush) {
        await this.downstream.flush().catch(() => {
        });
      }
    } finally {
      this.isFlushing = false;
    }
  }
  stats() {
    const totalDropped = this.droppedOldest + this.droppedNewest + this.circuitBreakerDrops + this.failClosedRejects;
    return {
      buffered: this.count,
      capacity: this.capacity,
      dropped: totalDropped,
      droppedOldest: this.droppedOldest,
      droppedNewest: this.droppedNewest,
      circuitBreakerDrops: this.circuitBreakerDrops,
      failClosedRejects: this.failClosedRejects,
      flushed: this.flushed,
      flushFailures: this.flushFailures,
      circuitBreakerState: this.circuitBreakerState,
      lastFlushTimestamp: this.lastFlushTimestamp
    };
  }
  async close() {
    if (this.isClosed) return;
    this.isClosed = true;
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
      this.flushTimer = null;
    }
    await this.flush();
    if (this.downstream.close) {
      await this.downstream.close();
    }
  }
};

// src/heuristic-profiler.ts
var HeuristicProfileEngine = class {
  /**
   * Evaluate forensic footprint and produce an automated natural language verdict.
   */
  static profileSession(footprint) {
    const reasons = [];
    const tags = [];
    let persona = "DESKTOP_STANDARD";
    let riskLevel = "LOW";
    let confidence = 0.7;
    const renderer = (footprint.webglRenderer || "").toLowerCase();
    const vendor = (footprint.webglVendor || "").toLowerCase();
    const fonts = (footprint.installedFonts || "").toLowerCase();
    const visitCount = Number(footprint.totalVisitCount || 1);
    const country = footprint.country || "GLOBAL";
    const city = footprint.city || "Edge";
    const hz = Number(footprint.screenHz || 60);
    const isCharging = footprint.isCharging === true;
    const battery = Number(footprint.batteryLevel || 100);
    if (footprint.triageCategory === "AI_AGENT") {
      persona = "HEADLESS_SCRAPER";
      riskLevel = "MEDIUM";
      confidence = 0.95;
      tags.push("AI_Agent", "LLM_Crawler", footprint.vendorGroup || "AI_Vendor");
      reasons.push("Identified verified AI model/agent signature (" + (footprint.vendorGroup || "AI_Agent") + ").");
    } else if (footprint.triageCategory === "CRAWLER_TOOL" && footprint.vendorGroup === "CLITool") {
      persona = "HEADLESS_SCRAPER";
      riskLevel = "HIGH";
      confidence = 0.9;
      tags.push("CLI_Client", "Automated_Script", footprint.vendorGroup);
      reasons.push("Identified non-browser HTTP CLI client (cURL/Python/Scraper).");
    }
    const isCloudHeadless = renderer.includes("swiftshader") || renderer.includes("llvmpipe") || renderer.includes("subzero") || renderer.includes("softpipe") || renderer.includes("virtualbox") || renderer.includes("vmware") || renderer.includes("mesa offscreen");
    if (isCloudHeadless) {
      persona = "CLOUD_AUTOMATION_BOT";
      riskLevel = "HIGH";
      confidence = 0.95;
      tags.push("Headless_Browser", "Virtual_GPU", "Cloud_Infrastructure");
      reasons.push("Detected software CPU-emulated WebGL renderer (" + (footprint.webglRenderer || "SwiftShader") + ").");
    } else if (renderer === "unknown" || renderer === "server-http-client") {
      if (country === "US" && (city.includes("Ashburn") || city.includes("Boydton") || city.includes("Dallas"))) {
        persona = "HEADLESS_SCRAPER";
        riskLevel = "MEDIUM";
        confidence = 0.85;
        tags.push("Datacenter_Proxy", "GPU_Disabled");
        reasons.push("Hardware GPU acceleration is disabled on major datacenter IP range.");
      } else if (country === "DATACENTER" || country === "VPN") {
        persona = "DATACENTER_PROXY";
        riskLevel = "HIGH";
        confidence = 0.88;
        tags.push("Datacenter_Proxy", "VPN_Exit_Node", "GPU_Disabled");
        reasons.push("Hardware GPU acceleration is disabled on known datacenter / VPN proxy exit IP range.");
      }
    }
    const devFontMatches = [
      "d2coding",
      "cascadia code",
      "consolas",
      "fira code",
      "jetbrains mono",
      "monaco"
    ].filter((f) => fonts.includes(f));
    if (devFontMatches.length >= 2 && !isCloudHeadless && persona === "DESKTOP_STANDARD") {
      persona = "SOFTWARE_ENGINEER";
      riskLevel = "LOW";
      confidence = 0.9;
      tags.push("Developer_Environment", "IDE_Fonts");
      reasons.push("Installed programmer fonts detected: [" + devFontMatches.join(", ") + "].");
    }
    if (visitCount >= 5 && !isCloudHeadless && persona === "DESKTOP_STANDARD") {
      persona = "POWER_USER";
      tags.push("High_Retention", "Visits_" + visitCount);
      reasons.push("High engagement session with " + visitCount + " accumulated site visits.");
    }
    if (isCharging && battery >= 90) {
      tags.push("AC_Powered", "Workstation");
    }
    if (hz >= 120) {
      tags.push("High_Refresh_Display", hz + "Hz");
    }
    let summaryNarrative = "";
    const locStr = country + " (" + city + ")";
    if (footprint.triageCategory === "AI_AGENT") {
      summaryNarrative = "[AI \uC5D0\uC774\uC804\uD2B8/LLM \uD06C\uB864\uB7EC] " + locStr + "\uC5D0\uC11C " + (footprint.vendorGroup || "AI Bot") + " \uACC4\uC5F4\uC758 AI \uAC80\uC0C9/\uC778\uB371\uC2F1 \uBD07\uC774 \uC9C4\uC785\uD558\uC5EC \uBB38\uC11C\uB97C \uC218\uC9D1\uD55C \uC5D0\uC774\uC804\uD2B8 \uC138\uC158\uC785\uB2C8\uB2E4.";
    } else if (persona === "CLOUD_AUTOMATION_BOT") {
      summaryNarrative = "[\uC790\uB3D9\uD654 \uBD07 \uC758\uC2EC] " + locStr + " \uD074\uB77C\uC6B0\uB4DC \uB370\uC774\uD130\uC13C\uD130 \uD658\uACBD\uC5D0\uC11C \uAC00\uC0C1 \uB80C\uB354\uB7EC(" + (footprint.webglRenderer || "SwiftShader") + ")\uB97C \uD1B5\uD574 \uD398\uC774\uC9C0\uB97C \uC2A4\uD06C\uB808\uC774\uD551\uD55C \uD5E4\uB4DC\uB9AC\uC2A4 \uBD07 \uC138\uC158\uC785\uB2C8\uB2E4.";
    } else if (persona === "DATACENTER_PROXY") {
      summaryNarrative = "[VPN/\uB370\uC774\uD130\uC13C\uD130 \uD504\uB85D\uC2DC] " + locStr + " \uB300\uC5ED\uC758 \uD074\uB77C\uC6B0\uB4DC \uD504\uB85D\uC2DC \uB610\uB294 VPN \uCD9C\uAD6C \uB178\uB4DC\uC5D0\uC11C \uC720\uC785\uB41C \uBB34-GPU \uC778\uB371\uC2F1 \uC138\uC158\uC785\uB2C8\uB2E4.";
    } else if (persona === "HEADLESS_SCRAPER") {
      summaryNarrative = "[\uB370\uC774\uD130\uC13C\uD130 \uD06C\uB864\uB7EC] " + locStr + " \uB300\uC5ED\uC5D0\uC11C GPU \uAC00\uC18D \uC5C6\uC774 \uBCA4\uCE58\uB9C8\uD06C \uBC0F \uBB38\uC11C\uB97C \uC21C\uD68C\uD55C \uB370\uC774\uD130\uC13C\uD130 \uC778\uB371\uC2F1 \uBD07 \uC138\uC158\uC785\uB2C8\uB2E4.";
    } else if (persona === "SOFTWARE_ENGINEER") {
      const gpuStr = footprint.webglRenderer ? footprint.webglRenderer.slice(0, 40) : "\uD45C\uC900 \uADF8\uB798\uD53D\uC2A4";
      summaryNarrative = "[\uAC1C\uBC1C\uC790/\uC5D4\uC9C0\uB2C8\uC5B4 \uD658\uACBD] " + locStr + "\uC5D0\uC11C \uAC1C\uBC1C\uC790 \uC804\uC6A9 \uD3F0\uD2B8(" + devFontMatches.slice(0, 2).join(", ") + ") \uBC0F " + gpuStr + " \uD658\uACBD\uC73C\uB85C \uC811\uADFC\uD55C \uACE0\uAD00\uC5EC \uC5D4\uC9C0\uB2C8\uC5B4\uB9C1 \uC138\uC158\uC785\uB2C8\uB2E4.";
    } else if (persona === "POWER_USER") {
      summaryNarrative = "[\uCF54\uC5B4 \uC0AC\uC6A9\uC790] " + locStr + "\uC5D0\uC11C " + visitCount + "\uD68C \uC774\uC0C1 \uBC18\uBCF5 \uBC29\uBB38\uD558\uBA70 \uC5D0\uCF54\uC2DC\uC2A4\uD15C \uBB38\uC11C\uB97C \uC9D1\uC911 \uD0D0\uC0C9\uD55C \uCDA9\uC131 \uBC29\uBB38\uC790 \uC138\uC158\uC785\uB2C8\uB2E4.";
    } else {
      summaryNarrative = "[\uC77C\uBC18 \uBC29\uBB38\uC790] " + locStr + "\uC5D0\uC11C \uC720\uC785\uB418\uC5B4 \uD45C\uC900 \uBE0C\uB77C\uC6B0\uC800 \uD658\uACBD\uC5D0\uC11C \uD398\uC774\uC9C0\uB97C \uC5F4\uB78C\uD55C \uC0AC\uC6A9\uC790 \uC138\uC158\uC785\uB2C8\uB2E4.";
    }
    return {
      visitorId: footprint.visitorId,
      persona,
      confidence: Math.round(confidence * 100) / 100,
      riskLevel,
      tags,
      summaryNarrative,
      detailedReasons: reasons,
      evaluatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
};

// src/path-flow.ts
var PathFlowAggregator = class {
  /**
   * Parse an array of past_paths_history strings and aggregate into a Sankey transition matrix.
   * e.g. ["/foundation/ -> /lib/playwright/ -> /sdk/sentinel/"]
   */
  static aggregateFlows(rawPathsList) {
    const nodeVisitCounts = /* @__PURE__ */ new Map();
    const linkTransitions = /* @__PURE__ */ new Map();
    let totalHops = 0;
    let validPathsCount = 0;
    for (const raw of rawPathsList) {
      if (!raw || typeof raw !== "string") continue;
      const trimmed = raw.trim();
      if (!trimmed) continue;
      validPathsCount++;
      const segments = trimmed.split(/\s*(?:->|──>)\s*/).map((s) => s.trim()).filter(Boolean);
      if (segments.length === 0) continue;
      for (const seg of segments) {
        nodeVisitCounts.set(seg, (nodeVisitCounts.get(seg) || 0) + 1);
      }
      for (let i = 0; i < segments.length - 1; i++) {
        const source = segments[i];
        const target = segments[i + 1];
        if (source && target) {
          const key = source + "===>" + target;
          linkTransitions.set(key, (linkTransitions.get(key) || 0) + 1);
          totalHops++;
        }
      }
    }
    const nodes = Array.from(nodeVisitCounts.entries()).map(([id, totalVisits]) => ({
      id,
      name: id,
      totalVisits
    }));
    const links = Array.from(linkTransitions.entries()).map(([key, value]) => {
      const [source, target] = key.split("===>");
      return {
        source,
        target,
        value
      };
    });
    return {
      nodes,
      links,
      totalHops,
      uniquePaths: validPathsCount
    };
  }
};

// src/snapshot-cache.ts
var SingleflightCoalescer = class {
  inFlightPromises = /* @__PURE__ */ new Map();
  async execute(key, fn) {
    const existing = this.inFlightPromises.get(key);
    if (existing) {
      return existing;
    }
    const promise = (async () => {
      try {
        return await fn();
      } finally {
        this.inFlightPromises.delete(key);
      }
    })();
    this.inFlightPromises.set(key, promise);
    return promise;
  }
  get inFlightCount() {
    return this.inFlightPromises.size;
  }
};
var SnapshotCache = class {
  cachedValue = null;
  lastFetchedAt = 0;
  isRefreshing = false;
  coalescer = new SingleflightCoalescer();
  ttlMs;
  constructor(options = {}) {
    this.ttlMs = Math.max(10, options.ttlMs ?? 5e3);
  }
  async getOrFetch(key, fetcher) {
    const now = Date.now();
    const isFresh = this.cachedValue !== null && now - this.lastFetchedAt < this.ttlMs;
    if (isFresh && this.cachedValue !== null) {
      return this.cachedValue;
    }
    if (this.cachedValue !== null) {
      if (!this.isRefreshing) {
        this.isRefreshing = true;
        this.coalescer.execute(key, async () => {
          try {
            const fresh = await fetcher();
            this.cachedValue = fresh;
            this.lastFetchedAt = Date.now();
            return fresh;
          } finally {
            this.isRefreshing = false;
          }
        }).catch(() => {
        });
      }
      return this.cachedValue;
    }
    const result = await this.coalescer.execute(key, async () => {
      const fresh = await fetcher();
      this.cachedValue = fresh;
      this.lastFetchedAt = Date.now();
      return fresh;
    });
    return result;
  }
  invalidate() {
    this.cachedValue = null;
    this.lastFetchedAt = 0;
  }
  get lastUpdated() {
    return this.lastFetchedAt;
  }
};
function maskIpAddress(ip) {
  if (!ip || typeof ip !== "string") return "***.***.***.***";
  const trimmed = ip.trim();
  if (trimmed === "127.0.0.1" || trimmed === "localhost") return "127.0.***.***";
  if (trimmed.includes(".")) {
    const parts = trimmed.split(".");
    if (parts.length === 4) {
      return parts[0] + "." + parts[1] + ".***.***";
    }
  }
  if (trimmed.includes(":")) {
    const parts = trimmed.split(":");
    if (parts.length >= 2) {
      return parts[0] + ":" + parts[1] + ":****:****";
    }
  }
  return "***.***.***.***";
}
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
  SentinelAction,
  SingleflightCoalescer,
  SnapshotCache,
  StaticKeyResolver,
  assertBase64UrlSegment,
  base64UrlDecode,
  base64UrlDecodeToBytes,
  base64UrlEncode,
  calculateConfidence,
  canonicalizeJsonSubset,
  classifyBot,
  computeHmacSha256,
  computeSha256,
  constantTimeEqual,
  createPolicy,
  createTraceId,
  defaultPolicy,
  evaluate,
  evaluateVerified,
  hasPrimitiveAttributes,
  isIsoDate,
  isMinimalDerivedSignals,
  isStoredRiskEvent,
  isStoredRiskEventV1,
  isStoredRiskEventV2,
  isValidEvidenceItem,
  isVerifiedCollectorContext,
  maskIpAddress,
  normalizeAllowedHost,
  readJsonBodyLimited,
  resolveDecision,
  rules,
  sanitizeEvidence,
  sanitizeSignals,
  signCollectorToken,
  toStoredRiskEvent,
  toStoredRiskEventV1,
  validateRedirectUrl,
  verifyCollectorToken
};
