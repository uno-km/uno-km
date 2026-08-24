/**
 * @ameva/sentinel-risk-core
 * Heuristic Natural Language Profiling & Persona Diagnostic Engine
 */
import type { ForensicFootprint, HeuristicVerdict } from './types.js';
export declare class HeuristicProfileEngine {
    /**
     * Evaluate forensic footprint and produce an automated natural language verdict.
     */
    static profileSession(footprint: ForensicFootprint): HeuristicVerdict;
}
