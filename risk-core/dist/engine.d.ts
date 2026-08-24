import { SentinelRiskReport, UntrustedTelemetrySignals, EnforcementMode, VerifiedCollectorContext } from './types.js';
import { SentinelPolicy } from './policy.js';
export interface EvaluateOptions {
    policy?: SentinelPolicy;
    traceId?: string;
    enforcementMode?: EnforcementMode;
    timezone?: string;
    locale?: string;
}
/**
 * Pure risk evaluation engine (4-Stage Pipeline).
 * 1. Classification -> 2. Scoring -> 3. Decision -> 4. Report Resolution
 * Always executes in unverified trust state (verification.state: 'NONE').
 */
export declare function evaluate(signals?: UntrustedTelemetrySignals, optionsOrPolicy?: EvaluateOptions | SentinelPolicy): SentinelRiskReport;
/**
 * Evaluates with cryptographically verified Server Context.
 * General user API cannot spoof verified context.
 */
export declare function evaluateVerified(signals: UntrustedTelemetrySignals, verifiedContext: VerifiedCollectorContext | null | undefined, optionsOrPolicy?: EvaluateOptions | SentinelPolicy): SentinelRiskReport;
