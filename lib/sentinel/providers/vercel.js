/**
 * AMEVA Sentinel v2.1 - Vercel Edge Provider Adapter
 * Module: lib/sentinel/providers/vercel.js
 * 
 * Interprets Vercel Edge Middleware and Serverless Function headers:
 * x-vercel-ip-country, x-vercel-ip-city, x-vercel-ip-as-number, x-vercel-id
 */
import { BaseEdgeProviderAdapter } from './base.js';
import { maskIpAddress } from '../../privacy/network-identifiers.js';

export class VercelEdgeAdapter extends BaseEdgeProviderAdapter {
  constructor() {
    super('VERCEL');
  }

  extractClientInfo(req) {
    const headers = this.normalizeHeaders(req?.headers || {});
    const rawIp = String(
      headers['x-forwarded-for'] ||
      headers['x-real-ip'] ||
      req?.socket?.remoteAddress ||
      '127.0.0.1'
    ).split(',')[0].trim();
    const maskedIp = maskIpAddress(rawIp);

    const country = headers['x-vercel-ip-country'] || 'GLOBAL';
    let city = 'Vercel Edge';
    if (headers['x-vercel-ip-city']) {
      try { city = decodeURIComponent(headers['x-vercel-ip-city']); } catch { city = headers['x-vercel-ip-city']; }
    }

    let asn = headers['x-vercel-ip-as-number'] ? 'AS' + headers['x-vercel-ip-as-number'] : 'Vercel Edge Network';
    const ua = headers['user-agent'] || '';
    if (/amazon|aws/i.test(ua)) asn = 'AWS Cloud Infrastructure';
    else if (/azure/i.test(ua)) asn = 'Microsoft Azure Cloud';
    else if (/google/i.test(ua)) asn = 'Google Cloud / Crawler Network';

    return {
      provider: this.name,
      requestId: headers['x-vercel-id'] || 'vcl_' + Math.random().toString(36).slice(2, 10),
      rawIp,
      maskedIp,
      country,
      city,
      region: headers['x-vercel-ip-country-region'] || null,
      asn,
      userAgent: ua,
      ja3Hash: headers['x-vercel-ja3-hash'] || null,
      ja4Hash: null,
      cdnBotScore: null,
      isCdnVerifiedBot: false,
      rawHeaders: headers
    };
  }
}
