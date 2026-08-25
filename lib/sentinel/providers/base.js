/**
 * AMEVA Sentinel v2.1 - Edge Provider Base Adapter
 * Module: lib/sentinel/providers/base.js
 * 
 * Provides base interface, capabilities contract, and utilities for Edge & CDN Platform Adapters.
 * Provider-neutral trust, abuse observation, and GEO content policy layer.
 */
import { maskIpAddress } from '../../privacy/network-identifiers.js';

export class BaseEdgeProviderAdapter {
  constructor(name = 'GENERIC') {
    this.name = name;
  }

  /**
   * Declares provider feature capabilities.
   * Unsupported signals return undefined rather than false/0 to avoid misinterpretation.
   */
  getCapabilities() {
    return {
      verifiedBot: false,
      botScore: false,
      countryCode: false,
      city: false,
      asn: false,
      ja3: false,
      ja4: false
    };
  }

  normalizeHeaders(rawHeaders) {
    if (!rawHeaders) return {};
    const normalized = {};

    if (typeof rawHeaders.forEach === 'function') {
      rawHeaders.forEach((val, key) => {
        normalized[String(key).toLowerCase()] = String(val);
      });
      return normalized;
    }

    if (typeof rawHeaders === 'object') {
      for (const [k, v] of Object.entries(rawHeaders)) {
        if (v !== undefined && v !== null) {
          normalized[String(k).toLowerCase()] = Array.isArray(v) ? v.join(', ') : String(v);
        }
      }
    }
    return normalized;
  }

  extractIp(headers, req) {
    const rawIp = String(
      headers['x-forwarded-for'] ||
      headers['x-real-ip'] ||
      req?.socket?.remoteAddress ||
      '127.0.0.1'
    ).split(',')[0].trim();

    return {
      rawIp,
      maskedIp: maskIpAddress(rawIp)
    };
  }

  extractClientInfo(req) {
    const headers = this.normalizeHeaders(req?.headers || {});
    const { rawIp, maskedIp } = this.extractIp(headers, req);

    return {
      provider: this.name,
      capabilities: this.getCapabilities(),
      requestId: headers['x-request-id'] || 'req_' + Math.random().toString(36).slice(2, 10),
      rawIp,
      maskedIp,
      country: headers['x-country'] || 'GLOBAL',
      city: headers['x-city'] || 'Edge Gateway',
      region: headers['x-region'] || undefined,
      asn: headers['x-asn'] || 'Standard/Residential',
      userAgent: headers['user-agent'] || '',
      ja3Hash: undefined,
      ja4Hash: undefined,
      cdnBotScore: undefined,
      isCdnVerifiedBot: undefined,
      rawHeaders: headers
    };
  }
}
