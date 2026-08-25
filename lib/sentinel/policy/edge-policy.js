/**
 * AMEVA Sentinel v2.1 - Edge Policy Layer
 * Module: lib/sentinel/policy/edge-policy.js
 * 
 * Provider-Neutral Trust & Abuse Integration Policy Layer.
 * Fuses Edge CDN metadata (e.g. verified bot flags, CDN bot scores)
 * with Sentinel v2 Heuristic Risk Assessment.
 * 
 * Guardrail Principle: Passive signals alone cannot trigger TEMPORARY_DENY.
 * Verification escalation occurs only when cryptographic/provenance evidence exists.
 */

/**
 * Fuses Edge Client Telemetry with Sentinel Assessment
 * @param {object} clientInfo Standardized EdgeClientInfo
 * @param {object} assessment Sentinel v2 Assessment Object
 * @param {object} [options]
 * @returns {object} Augmented Assessment Object
 */
export function evaluateEdgePolicy(clientInfo, assessment, options = {}) {
  const result = {
    ...assessment,
    edgeProvider: clientInfo?.provider || 'GENERIC',
    edgeTelemetry: {
      requestId: clientInfo?.requestId || null,
      maskedIp: clientInfo?.maskedIp || '0.0.0.0',
      country: clientInfo?.country || 'GLOBAL',
      city: clientInfo?.city || 'Edge',
      asn: clientInfo?.asn || 'Standard',
      cdnBotScore: clientInfo?.cdnBotScore ?? null,
      isCdnVerifiedBot: Boolean(clientInfo?.isCdnVerifiedBot)
    }
  };

  // If CDN verifies bot identity with reverse-DNS / cryptographic evidence,
  // we can elevate actorClaim verification from UNVERIFIED to VERIFIED
  if (clientInfo?.isCdnVerifiedBot && result.actorClaim && result.actorClaim.state === 'CLAIMED') {
    result.actorClaim = {
      ...result.actorClaim,
      verification: 'VERIFIED',
      basis: [...(result.actorClaim.basis || []), 'CDN_CRYPTOGRAPHIC_REVERSE_DNS']
    };
  }

  // Safety check: ensure no passive single-signal TEMPORARY_DENY
  if (result.decision?.enforcedAction === 'TEMPORARY_DENY' && result.riskLevel !== 'HIGH_AUTOMATION_RISK') {
    result.decision.enforcedAction = 'OBSERVE';
  }

  return result;
}
