import { SentinelRiskReport, EvidenceItem, StoredRiskEventV1, StoredRiskEventV2, StoredRiskEvent, SanitizedEvidence, RiskEventStore, RiskEventStoreOptions } from './types.js';
export interface MinimalDerivedSignals {
    webdriverObserved?: boolean;
    telemetryObserved?: boolean;
    sampleComplete?: boolean;
    observationDurationMs?: number;
    trustedInputCount?: number;
    burstCount10s?: number;
    touchMismatch?: boolean;
    suspiciousUA?: boolean;
}
export declare function isIsoDate(value: unknown): value is string;
export declare function hasPrimitiveAttributes(value: unknown): value is SanitizedEvidence['attributes'];
export declare function isMinimalDerivedSignals(signals: unknown): signals is MinimalDerivedSignals;
export declare function isValidEvidenceItem(item: unknown): item is SanitizedEvidence;
/**
 * Strict Schema V1 Runtime Guard
 */
export declare function isStoredRiskEventV1(value: unknown): value is StoredRiskEventV1;
/**
 * Strict Schema V2 Runtime Guard
 */
export declare function isStoredRiskEventV2(value: unknown): value is StoredRiskEventV2;
/**
 * Universal Stored Event Guard (Supports both V1 and V2 for seamless migration)
 */
export declare function isStoredRiskEvent(value: unknown): value is StoredRiskEvent;
export declare function sanitizeSignals(signals?: any): MinimalDerivedSignals;
export declare function sanitizeEvidence(item: EvidenceItem): SanitizedEvidence;
/**
 * Creates canonical StoredRiskEventV2
 */
export declare function toStoredRiskEvent(report: SentinelRiskReport & {
    signals?: any;
}): StoredRiskEventV2;
/**
 * Creates legacy StoredRiskEventV1 for backward compatibility tests
 */
export declare function toStoredRiskEventV1(report: SentinelRiskReport & {
    signals?: any;
}): StoredRiskEventV1;
export declare class MemoryRiskEventStore implements RiskEventStore {
    private events;
    private maxItems;
    private maxAgeMs;
    constructor(options?: RiskEventStoreOptions);
    append(report: SentinelRiskReport): Promise<void>;
    list(options?: {
        limit?: number;
        since?: number;
    }): Promise<StoredRiskEvent[]>;
    clear(): Promise<void>;
    private prune;
}
export declare class LocalStorageRiskEventStore implements RiskEventStore {
    private key;
    private legacyKey;
    private maxItems;
    private maxAgeMs;
    constructor(options?: RiskEventStoreOptions);
    append(report: SentinelRiskReport): Promise<void>;
    list(options?: {
        limit?: number;
        since?: number;
    }): Promise<StoredRiskEvent[]>;
    clear(): Promise<void>;
    private readRaw;
    private writeRaw;
    private prune;
}
