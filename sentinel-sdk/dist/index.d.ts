import { SentinelAction, defaultPolicy, evaluate, evaluateVerified, createPolicy, rules, classifyBot, resolveDecision, verifyCollectorToken, signCollectorToken, isVerifiedCollectorContext, readJsonBodyLimited, MemoryNonceStore, StaticKeyResolver, validateRedirectUrl, normalizeAllowedHost, CollectorVerificationError, MemoryFixedWindowCounterStore, MemoryCounterStore, MemoryRiskEventStore, LocalStorageRiskEventStore, toStoredRiskEvent, toStoredRiskEventV1, isStoredRiskEvent, isStoredRiskEventV1, isStoredRiskEventV2, sanitizeSignals, createTraceId, AsyncRingBufferSink, CompositeSink, NullSink, HeuristicProfileEngine, PathFlowAggregator, SnapshotCache, SingleflightCoalescer, maskIpAddress, GeoDeliveryEngine } from '@ameva/sentinel-risk-core';
import type { GeoDeliveryConfig, GeoDeliveryResult, GeoDeliveryLogRecord, GeoAnalyticsSummary, SentinelRiskReport, TelemetrySignals, UntrustedTelemetrySignals, SentinelPolicy, StoredRiskEvent, StoredRiskEventV1, StoredRiskEventV2, CounterStore, RiskEventStore, EventSink, StreamRecord, RiskEventRecord, RingBufferStats, RingBufferOverflowPolicy, AsyncRingBufferOptions, CompositeSinkOptions, DistributedNonceStore, DistributedCounterStore, DistributedRiskEventStore, TrafficTargetMode, BotCategory, BotIdentityState, BotClassificationResult, DecisionReasonCode, RedirectDestinationId, SentinelDecision, BotRoutingRule, BotPolicyConfig, VerifiedCollectorContext, VerificationOutcome, KeyResolver, NonceStore, ForensicFootprint, VisitorPersona, HeuristicVerdict, PathFlowNode, PathFlowLink, PathFlowMatrix, TriageCategory, TriageAnalyticsBreakdown } from '@ameva/sentinel-risk-core';
export { SentinelAction, defaultPolicy, createPolicy, rules, evaluate, evaluateVerified, classifyBot, resolveDecision, verifyCollectorToken, signCollectorToken, isVerifiedCollectorContext, readJsonBodyLimited, MemoryNonceStore, StaticKeyResolver, validateRedirectUrl, normalizeAllowedHost, CollectorVerificationError, MemoryFixedWindowCounterStore, MemoryCounterStore, MemoryRiskEventStore, LocalStorageRiskEventStore, toStoredRiskEvent, toStoredRiskEventV1, isStoredRiskEvent, isStoredRiskEventV1, isStoredRiskEventV2, sanitizeSignals, createTraceId, AsyncRingBufferSink, CompositeSink, NullSink, HeuristicProfileEngine, PathFlowAggregator };
export type { SentinelRiskReport, TelemetrySignals, UntrustedTelemetrySignals, SentinelPolicy, StoredRiskEvent, StoredRiskEventV1, StoredRiskEventV2, CounterStore, RiskEventStore, EventSink, StreamRecord, RiskEventRecord, RingBufferStats, RingBufferOverflowPolicy, AsyncRingBufferOptions, CompositeSinkOptions, DistributedNonceStore, DistributedCounterStore, DistributedRiskEventStore, TrafficTargetMode, BotCategory, BotIdentityState, BotClassificationResult, DecisionReasonCode, RedirectDestinationId, SentinelDecision, BotRoutingRule, BotPolicyConfig, VerifiedCollectorContext, VerificationOutcome, KeyResolver, NonceStore, ForensicFootprint, VisitorPersona, HeuristicVerdict, PathFlowNode, PathFlowLink, PathFlowMatrix, TriageCategory, TriageAnalyticsBreakdown };
export type StateFailureMode = 'FAIL_OPEN' | 'FAIL_CLOSED' | 'OBSERVE_ONLY';
export interface SentinelOptions {
    policy?: SentinelPolicy;
    mode?: 'shadow' | 'enforce';
    counterStore?: CounterStore;
    eventStore?: RiskEventStore | null;
    rateKeyProvider?: (req: any) => string | null;
    redirectRegistry?: Record<string, string | URL>;
    allowedRedirectHosts?: string[];
    allowRedirectSubdomains?: boolean;
    keyResolver?: KeyResolver;
    nonceStore?: NonceStore;
    expectedAudience?: string;
    expectedPurpose?: string;
    allowedIssuers?: string[];
    stateFailureMode?: StateFailureMode;
    onOperationalError?: (err: Error, context: string) => void;
    eventSink?: EventSink;
    geo?: GeoDeliveryConfig;
    timezone?: string;
    locale?: string;
}
export declare class Sentinel {
    private globalAnalyticsCache;
    private policy;
    private mode;
    private counterStore;
    private eventStore;
    private eventSink?;
    private rateKeyProvider?;
    private redirectRegistry;
    private allowedRedirectHosts?;
    private allowRedirectSubdomains;
    private keyResolver?;
    private nonceStore;
    private expectedAudience?;
    private expectedPurpose;
    private allowedIssuers?;
    private stateFailureMode;
    private onOperationalError?;
    geoEngine: GeoDeliveryEngine;
    private timezone?;
    private locale?;
    constructor(options?: SentinelOptions);
    score(req: any): Promise<SentinelRiskReport>;
    deriveRateKey(req: any): string | null;
    /**
     * Safe extraction of untrusted telemetry signals and presented token from HTTP/raw request.
     * Extracts headers and signals concurrently without mutually exclusive early returns.
     */
    collect(req: any): Promise<{
        signals: UntrustedTelemetrySignals;
        token: string | null;
    }>;
    /**
     * Cryptographically verifies the presented token against the configured KeyResolver and NonceStore
     */
    verify(token: string | null | undefined): Promise<VerificationOutcome>;
    /**
     * Synthesize a server-side Forensic Footprint for requests even without client JavaScript.
     */
    synthesizeFootprint(report: SentinelRiskReport, req?: any): ForensicFootprint;
    /**
     * Evaluate a single forensic footprint and generate natural language persona verdict.
     */
    profileFootprint(footprint: ForensicFootprint): HeuristicVerdict;
    /**
     * Parse an array of raw path history strings and aggregate into a Sankey transition matrix.
     */
    aggregatePathFlows(paths: (string | null | undefined)[]): PathFlowMatrix;
    /**
     * Mask IP address for privacy compliance (GDPR / CCPA).
     */
    maskIpAddress(ip: string | null | undefined): string;
    /**
     * Evaluates incoming request and negotiates optimized Markdown for AI Agents (GEO).
     */
    resolveGeoPayload(req: any): GeoDeliveryResult;
    /**
     * Cached headless forensic analytics with in-memory SWR.
     */
    getForensicAnalyticsCached(fetcher: () => Promise<ForensicAnalyticsReport>, cacheKey?: string): Promise<ForensicAnalyticsReport>;
    /**
     * Headless Forensic Analytics Engine: transforms raw footprints and risk events into
     * executive persona verdicts, transition flow matrices, 3-category triage breakdowns, and overview KPI stats.
     */
    getForensicAnalytics(input: ForensicAnalyticsInput): ForensicAnalyticsReport;
    private handleOperationalError;
}
export interface ForensicAnalyticsInput {
    footprints?: ForensicFootprint[];
    events?: (StoredRiskEvent | any)[];
    geoLogs?: GeoDeliveryLogRecord[];
    topPathsCap?: number;
}
export interface ForensicAnalyticsReport {
    overview: {
        totalRecords: number;
        totalUniqueVisitors: number;
        botCount: number;
        engineerCount: number;
        powerUserCount: number;
        standardCount: number;
    };
    triageBreakdown?: TriageAnalyticsBreakdown;
    geoDeliveryStats?: GeoAnalyticsSummary;
    verdicts: HeuristicVerdict[];
    flowMatrix: PathFlowMatrix;
    generatedAt: string;
}
export declare function createSentinel(options?: SentinelOptions): Sentinel;
export declare const sentinel: Sentinel;
export { maskIpAddress, SnapshotCache, SingleflightCoalescer };
