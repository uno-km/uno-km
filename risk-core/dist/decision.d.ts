import { SentinelAction, SentinelDecision, BotPolicyConfig, BotClassificationResult, TelemetrySignals, EnforcementMode, InternalDecisionTrustState } from './types.js';
export interface DecisionContext {
    score: number;
    recommendedScoreAction: SentinelAction;
    classification: BotClassificationResult;
    signals: TelemetrySignals;
    botPolicy?: BotPolicyConfig;
    enforcementMode: EnforcementMode;
}
/**
 * Pure Deterministic Decision Engine (Stage 3)
 *
 * Guarantees:
 * - Implements the complete Truth Table across all 4 TrafficTargetModes.
 * - Closed-Destination ID routing only (zero open redirect vulnerabilities).
 * - Accepts an internal trustedState parameter; raw caller signals cannot spoof verification state.
 */
export declare function resolveDecision(context: DecisionContext, trustedState?: InternalDecisionTrustState): SentinelDecision;
