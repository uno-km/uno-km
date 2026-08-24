import { CollectorTokenPayload, VerifiedCollectorContext, KeyResolver, NonceNamespace, NonceStore, CollectorErrorCode } from './types.js';
export declare class CollectorVerificationError extends Error {
    readonly code: CollectorErrorCode;
    readonly httpStatus: number;
    constructor(code: CollectorErrorCode, message: string, httpStatus?: number);
}
/**
 * In-memory Nonce Store with bounded capacity and multi-tenant namespace (Single-thread synchronous execution).
 * Note: For distributed multi-instance architectures, deploy Redis SET NX or equivalent distributed adapters.
 */
export declare class MemoryNonceStore implements NonceStore {
    private nonces;
    private readonly maxEntries;
    constructor(options?: {
        maxEntries?: number;
    });
    consume(namespace: NonceNamespace, expiresAtEpochMs: number): Promise<boolean>;
    private prune;
}
/**
 * Static Key Resolver for HMAC verification
 */
export declare class StaticKeyResolver implements KeyResolver {
    private keys;
    constructor(keys: Record<string, string>);
    resolveKey(kid: string): Promise<string | null>;
}
/**
 * Internal guard checking if an object is an authentic VerifiedCollectorContext
 */
export declare function isVerifiedCollectorContext(obj: unknown): obj is VerifiedCollectorContext;
/**
 * AMEVA Deterministic Canonical JSON Subset
 * Handles primitives, objects with sorted keys, and arrays without circular references.
 */
export declare function canonicalizeJsonSubset(obj: unknown, seen?: Set<unknown>): string;
export declare function assertBase64UrlSegment(segment: string, name: string): void;
/**
 * Safe Base64URL utilities (Browser & Node isomorphic)
 */
export declare function base64UrlEncode(data: string | Uint8Array): string;
export declare function base64UrlDecodeToBytes(str: string): Uint8Array;
export declare function base64UrlDecode(str: string): string;
/**
 * Length pre-checked constant-time buffer comparison
 */
export declare function constantTimeEqual(a: Uint8Array, b: Uint8Array): boolean;
/**
 * Pure Isomorphic SHA-256 (NIST FIPS 180-4 compliant)
 */
export declare function computeSha256(data: Uint8Array): Uint8Array;
/**
 * Pure Isomorphic HMAC-SHA256 generator (RFC 4231 compliant)
 */
export declare function computeHmacSha256(key: string | Uint8Array, data: string | Uint8Array): Uint8Array;
/**
 * Server-side helper to sign a valid `sv1` token
 */
export declare function signCollectorToken(payload: CollectorTokenPayload, secretKey: string): string;
export interface VerifyTokenOptions {
    expectedAudience: string;
    expectedPurpose: string;
    allowedIssuers?: string[];
    maxClockSkewMs?: number;
    maxTokenLifetimeMs?: number;
    nowEpochMs?: number;
}
/**
 * Strict sv1 Token Verifier Pipeline (Fail-Closed, Non-malleable, Oracle-Resistant)
 */
export declare function verifyCollectorToken(token: string, keyResolver: KeyResolver, nonceStore: NonceStore, options: VerifyTokenOptions): Promise<VerifiedCollectorContext>;
/**
 * Stream and multi-byte safe Request JSON body reader with hard byte-level limits
 */
export declare function readJsonBodyLimited(request: any, maxBytes?: number): Promise<any>;
