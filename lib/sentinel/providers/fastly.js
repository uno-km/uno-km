/**
 * AMEVA Sentinel v2.1 - Fastly Edge Provider Adapter
 * Module: lib/sentinel/providers/fastly.js
 * 
 * Interprets Fastly Compute@Edge / VCL headers:
 * fastly-client-ip, geo-country, geo-city, fastly-ff, fastly-client-bot-score
 */
import { BaseEdgeProviderAdapter } from './base.js';
import { maskIpAddress } from '../../privacy/network-identifiers.js';

export class FastlyEdgeAdapter extends BaseEdgeProviderAdapter {
  constructor() {
    super('FASTLY');
  }

  extractClientInfo(req) {
    const headers = this.normalizeHeaders(req?.headers || {});
    const rawIp = String(
      headers['fastly-client-ip'] ||
      headers['x-forwarded-for'] ||
      '127.0.0.1'
    ).split(',')[0].trim();
    const maskedIp = maskIpAddress(rawIp);

    const country = headers['geo-country'] || headers['fastly-client-country'] || 'GLOBAL';
    const city = headers['geo-city'] || headers['fastly-client-city'] || 'Fastly POP';
    const asn = headers['fastly-client-asn'] ? 'AS' + headers['fastly-client-asn'] : 'Fastly Edge POP';

    let cdnBotScore = null;
    if (headers['fastly-client-bot-score']) {
      const parsed = parseInt(headers['fastly-client-bot-score'], 10);
      if (!isNaN(parsed)) cdnBotScore = parsed;
    }

    const isCdnVerifiedBot = headers['fastly-client-bot-verified'] === 'true' || headers['fastly-client-bot-verified'] === '1';

    return {
      provider: this.name,
      requestId: headers['fastly-ff'] || headers['x-fastly-request-id'] || 'fst_' + Math.random().toString(36).slice(2, 10),
      rawIp,
      maskedIp,
      country,
      city,
      region: headers['geo-region'] || null,
      asn,
      userAgent: headers['user-agent'] || '',
      ja3Hash: headers['fastly-client-ja3'] || null,
      ja4Hash: null,
      cdnBotScore,
      isCdnVerifiedBot,
      rawHeaders: headers
    };
  }
}
