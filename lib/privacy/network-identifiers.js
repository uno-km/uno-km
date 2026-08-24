/**
 * AMEVA Privacy Utility: Network Identifier Processing
 * Shared module for IP masking and target type normalization.
 * Extracted from api/sentinel.js to prevent circular dependencies.
 */

const ALLOWED_TARGET_TYPES = new Set([
  'BUTTON',
  'LINK', 
  'CODE',
  'INPUT',
  'NAVIGATION',
  'OTHER'
]);

/**
 * Masks an IPv4/IPv6 address by zeroing the host portion.
 * Returns null for invalid input.
 * @param {string} ip - Raw IP address
 * @returns {string|null} Masked IP or null
 */
export function maskIpAddress(ip) {
  if (typeof ip !== 'string' || ip.length === 0) {
    return null;
  }
  if (ip.includes('.')) {
    const parts = ip.split('.');
    if (parts.length !== 4) return null;
    return `${parts[0]}.${parts[1]}.***.***`;
  }
  if (ip.includes(':')) {
    const parts = ip.split(':');
    return `${parts.slice(0, 4).join(':')}::`;
  }
  return null;
}

/**
 * Normalizes a client-provided target type to a server-side allowlist.
 * Prevents arbitrary free-text from being stored.
 * @param {*} value - Raw target type from client
 * @returns {string} Normalized enum value
 */
export function normalizeTargetType(value) {
  const normalized = String(value || '').toUpperCase();
  return ALLOWED_TARGET_TYPES.has(normalized) ? normalized : 'OTHER';
}
