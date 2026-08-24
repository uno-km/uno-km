/**
 * SnapshotCache & Singleflight Coalescer Engine
 */
export interface SnapshotCacheOptions {
    ttlMs?: number;
    maxStaleMs?: number;
}
export declare class SingleflightCoalescer<T> {
    private inFlightPromises;
    execute(key: string, fn: () => Promise<T>): Promise<T>;
    get inFlightCount(): number;
}
export declare class SnapshotCache<T> {
    private cachedValue;
    private lastFetchedAt;
    private isRefreshing;
    private coalescer;
    private ttlMs;
    constructor(options?: SnapshotCacheOptions);
    getOrFetch(key: string, fetcher: () => Promise<T>): Promise<T>;
    invalidate(): void;
    get lastUpdated(): number;
}
export declare function maskIpAddress(ip: string | null | undefined): string;
