/**
 * @ameva/sentinel-browser
 * Privacy-first browser environment & user interaction telemetry collector
 *
 * Guarantees:
 * - Throttled pointermove sampling (100ms interval) to protect 60fps main-thread
 * - Discrete click/touch/keyboard interactions recorded un-throttled
 * - ZERO raw mouse coordinates collected
 * - ZERO keystroke contents or form values collected
 * - Non-persistent per-tab ephemeral session identifier
 * - Clean lifecycle management with start() and destroy()
 */
export interface BrowserTelemetryOptions {
    samplingWindowMs?: number;
    maxEventsCap?: number;
    pointerSampleIntervalMs?: number;
    autoStart?: boolean;
    timezone?: string;
    locale?: string;
}
export interface BrowserTelemetrySnapshot {
    telemetryObserved: boolean;
    sampleComplete: boolean;
    observationDurationMs: number;
    webdriverObserved: boolean;
    trustedInputCount: number;
    pointerEventCount: number;
    touchEventCount: number;
    keyboardEventCount: number;
    touchMismatch: boolean;
    suspiciousUA: boolean;
    isHeadlessRenderer: boolean;
    headlessEvasionsDetected: boolean;
    webglVendor: string;
    webglRenderer: string;
    usedHeapMb: number;
    totalHeapMb: number;
    heapLimitMb: number;
    totalVisitCount: number;
    pastPathsHistory: string;
    collectedAt: string;
    timezone: string;
    timezoneOffset: number;
    locale: string;
    formattedCollectedAt: string;
}
export interface TimezoneFormatOptions {
    timezone?: string;
    locale?: string;
    format?: 'full' | 'time' | 'date' | 'iso' | 'relative';
}
/**
 * High-precision deterministic timezone formatter.
 * Supports IANA timezones ('Asia/Seoul', 'UTC', 'America/New_York', etc.), 'local', and RFC 3339.
 */
export declare function formatTimestamp(dateInput: Date | string | number, options?: TimezoneFormatOptions): string;
export interface HeadlessDiagnostics {
    isHeadlessRenderer: boolean;
    headlessEvasionsDetected: boolean;
    webglVendor: string;
    webglRenderer: string;
    evasionReasons: string[];
}
/**
 * Deep Browser Headless & Stealth Evasions Detection Engine.
 * Extracts WebGL hardware acceleration profile and validates runtime integrity.
 */
export declare function detectHeadlessEvasions(): HeadlessDiagnostics;
export interface HeapMemorySnapshot {
    usedHeapMb: number;
    totalHeapMb: number;
    heapLimitMb: number;
}
export interface SoulHistorySnapshot {
    firstSeenAt: string;
    totalVisitCount: number;
    totalSessionCount: number;
    pastPathsHistory: string;
}
/**
 * Capture browser JavaScript Heap Memory footprint via performance.memory (MB).
 * Safe fallback on browsers / engines without performance.memory API.
 */
export declare function getHeapMemoryUsage(): HeapMemorySnapshot;
/**
 * Persistent Soul & History Tracking across browser sessions.
 */
export declare function getSoulHistory(currentPath?: string): SoulHistorySnapshot;
/**
 * Ephemeral browser session identifier (pseudo-random, non-cryptographic).
 * Scoped exclusively to browser tab sessionStorage lifetime.
 */
export declare function getLocalSessionId(): string;
export declare class BrowserTelemetryCollector {
    private startTime;
    private isListening;
    private maxEventsCap;
    private pointerIntervalMs;
    private samplingWindowMs;
    private lastPointerSampleAt;
    private abortController;
    private options;
    private trustedEvents;
    private pointerEvents;
    private touchEvents;
    private keyboardEvents;
    constructor(options?: BrowserTelemetryOptions);
    private recordInteraction;
    start(): void;
    snapshot(): BrowserTelemetrySnapshot;
    reset(): void;
    destroy(): void;
}
export declare function createBrowserTelemetry(options?: BrowserTelemetryOptions): BrowserTelemetryCollector;
export declare const browserTelemetry: BrowserTelemetryCollector;
export interface DashboardMountOptions {
    endpoint?: string;
    data?: any;
    headers?: Record<string, string>;
    refreshIntervalMs?: number;
    title?: string;
}
export interface DashboardInstance {
    destroy: () => void;
    refresh: () => Promise<void>;
}
/**
 * Drop-in Embedded Observability & Forensic Intelligence Dashboard Mounter.
 */
export declare function mountDashboard(container: string | HTMLElement, options?: DashboardMountOptions): DashboardInstance;
