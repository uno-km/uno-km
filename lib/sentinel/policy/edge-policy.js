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
  const isCdnVerified = clientInfo?.isCdnVerifiedBot === true;

  const result = {
    ...assessment,
    edgeProvider: clientInfo?.provider || 'GENERIC',
    edgeCapabilities: clientInfo?.capabilities || {},
    edgeTelemetry: {
      requestId: clientInfo?.requestId || null,
      maskedIp: clientInfo?.maskedIp || '0.0.0.0',
      country: clientInfo?.country || 'GLOBAL',
      city: clientInfo?.city || 'Edge',
      asn: clientInfo?.asn || 'Standard',
      cdnBotScore: clientInfo?.cdnBotScore !== undefined ? clientInfo.cdnBotScore : null,
      isCdnVerifiedBot: isCdnVerified
    }
  };

  // ── Verification & Trust Boundary Enforcement ────────────────
  // Trust Boundary Rule: VERIFIED escalation requires BOTH provider verified-bot signal
  // AND an authenticated edge-to-origin channel with direct-origin access blocked.
  const trustBoundaryValidated = Boolean(options.directOriginBlocked && options.edgeAuthenticated);

  if (isCdnVerified && result.actorClaim && result.actorClaim.state === 'CLAIMED') {
    const isFullyTrusted = trustBoundaryValidated;
    result.actorClaim = {
      ...result.actorClaim,
      verification: isFullyTrusted ? 'VERIFIED' : 'UNVERIFIED',
      verificationEvidence: [{
        method: 'PROVIDER_VERIFIED_BOT_SIGNAL',
        provider: clientInfo.provider,
        signal: 'VERIFIED_BOT',
        origin: 'EDGE_RUNTIME_METADATA',
        trustBoundaryValidated,
        edgeAuthenticated: Boolean(options.edgeAuthenticated),
        directOriginBlocked: options.directOriginBlocked ? 'ENFORCED' : 'UNVERIFIED_NETWORK_BOUNDARY'
      }],
      verificationSource: [`${clientInfo.provider}_VERIFIED_BOT`],
      trustBoundary: {
        provider: clientInfo.provider,
        edgeAuthenticated: Boolean(options.edgeAuthenticated),
        directOriginBlocked: options.directOriginBlocked ? 'ENFORCED' : 'UNVERIFIED_NETWORK_BOUNDARY'
      },
      basis: [
        ...(result.actorClaim.basis || []),
        isFullyTrusted ? 'PROVIDER_VALIDATED_BOT_SIGNAL' : 'UNVALIDATED_PROVIDER_HEADER'
      ]
    };
  }

  // Safety guardrail: ensure no passive single-signal TEMPORARY_DENY
  if (result.decision?.enforcedAction === 'TEMPORARY_DENY' && result.riskLevel !== 'HIGH_AUTOMATION_RISK') {
    result.decision.enforcedAction = 'OBSERVE';
  }

  return result;
}
