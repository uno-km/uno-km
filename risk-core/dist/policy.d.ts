import { RuleDefinition } from './rules.js';
import { BotPolicyConfig } from './types.js';
export interface SentinelThresholds {
    rateLimit: number;
    appVerification: number;
    deny: number;
}
export interface SentinelPolicy {
    version: string;
    thresholds: SentinelThresholds;
    rules: RuleDefinition[];
    botPolicy?: BotPolicyConfig;
}
export interface CreatePolicyOptions {
    version?: string;
    thresholds?: Partial<SentinelThresholds>;
    rules?: RuleDefinition[];
    botPolicy?: BotPolicyConfig;
}
export declare function createPolicy(options?: CreatePolicyOptions): SentinelPolicy;
export declare const defaultPolicy: SentinelPolicy;
