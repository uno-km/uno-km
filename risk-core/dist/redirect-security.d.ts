export interface RedirectValidationResult {
    valid: boolean;
    error?: string;
    sanitizedUrl?: string;
}
/**
 * Normalizes and validates an allowed redirect hostname according to RFC 1123 and IPv4 specifications.
 * Strips whitespace, lowercases, removes trailing dot, and strictly validates IPv4 octets and RFC 1123 DNS labels.
 */
export declare function normalizeAllowedHost(value: string): string;
export interface RedirectValidationOptions {
    allowedHosts?: string[];
    allowSubdomains?: boolean;
    allowRelative?: boolean;
}
/**
 * Validates redirect destination URLs against Open Redirect, CRLF, and protocol injection attacks.
 * Supports exact hostname matching and optional subdomain matching (allowSubdomains: true by default).
 */
export declare function validateRedirectUrl(rawUrl: string, options?: RedirectValidationOptions): RedirectValidationResult;
