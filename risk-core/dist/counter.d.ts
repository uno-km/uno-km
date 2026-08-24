import type { CounterStore, CounterIncrementResult } from './types.js';
export type { CounterStore, CounterIncrementResult };
export interface MemoryCounterStoreOptions {
    maxKeys?: number;
}
/**
 * Fixed-Window Memory Counter Store with Bounded Memory
 */
export declare class MemoryFixedWindowCounterStore implements CounterStore {
    private store;
    private readonly maxKeys;
    constructor(options?: MemoryCounterStoreOptions);
    increment(key: string, options: {
        windowMs: number;
        amount?: number;
    }): Promise<CounterIncrementResult>;
    get(key: string): Promise<number>;
    reset(key: string): Promise<void>;
    private prune;
}
export declare const MemoryCounterStore: typeof MemoryFixedWindowCounterStore;
