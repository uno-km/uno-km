import { BotClassificationResult, TelemetrySignals } from './types.js';
/**
 * Pure heuristic bot classifier.
 *
 * Guarantees:
 * - O(N) bounded execution: Max 512 bytes string clamp.
 * - ReDoS-immunity: No nested quantifiers or dynamic RegExp compilation.
 * - Clear distinction between CLAIMED identity vs VERIFIED cryptographic context.
 */
export declare function classifyBot(uaString?: string, signals?: TelemetrySignals): BotClassificationResult;
