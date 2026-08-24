/**
 * @ameva/sentinel-risk-core
 * Path Flow Aggregator & Transition Matrix Generator for Sankey Diagrams
 */
import type { PathFlowMatrix } from './types.js';
export declare class PathFlowAggregator {
    /**
     * Parse an array of past_paths_history strings and aggregate into a Sankey transition matrix.
     * e.g. ["/foundation/ -> /lib/playwright/ -> /sdk/sentinel/"]
     */
    static aggregateFlows(rawPathsList: (string | null | undefined)[]): PathFlowMatrix;
}
