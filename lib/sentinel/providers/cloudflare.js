/**
 * AMEVA Sentinel v2.1 - Cloudflare Edge Provider Adapter
 * Module: lib/sentinel/providers/cloudflare.js
 */
import { BaseEdgeProviderAdapter } from './base.js';
import { maskIpAddress } from '../../privacy/network-identifiers.js';

export class CloudflareEdgeAdapter extends BaseEdgeProviderAdapter {
  constructor() {
    super('CLOUDFLARE');
  }

  getCapabilities() {
    return {
      verifiedBot: true,
      botScore: true,
      countryCode: true,
      city: true,
      asn: true,
      ja3: true,
      ja4: true
    };
  }

  parseBotManagement(headers) {
    let score = undefined;
    let verified = undefined;
    let ja3 = headers['cf-ja3-hash'] || undefined;
    let ja4 = headers['cf-ja4'] || undefined;

    if (headers['cf-bot-score']) {
      const parsed = parseInt(headers['cf-bot-score'], 10);
      if (!isNaN(parsed)) score = parsed;
    }

    if (headers['cf-verified-bot'] !== undefined) {
      verified = headers['cf-verified-bot'] === 'true' || headers['cf-verified-bot'] === '1';
    }

    const bmHeader = headers['cf-bot-management'];
    if (bmHeader) {
      try {
        const bm = JSON.parse(bmHeader);
        if (typeof bm.score === 'number') score = bm.score;
        if (typeof bm.verified_bot === 'boolean') verified = bm.verified_bot;
        if (bm.ja3Hash) ja3 = bm.ja3Hash;
        if (bm.ja4) ja4 = bm.ja4;
      } catch {}
    }

    return { score, verified, ja3, ja4 };
  }

  extractClientInfo(req) {
    const headers = this.normalizeHeaders(req?.headers || {});
    const rawIp = (headers['cf-connecting-ip'] || headers['x-real-ip'] || '127.0.0.1').split(',')[0].trim();
    const maskedIp = maskIpAddress(rawIp);

    const bm = this.parseBotManagement(headers);
    const rayId = headers['cf-ray'] || 'cf_' + Math.random().toString(36).slice(2, 10);

    const country = headers['cf-ipcountry'] || 'GLOBAL';
    let city = 'Cloudflare Edge';
    if (headers['cf-ipcity']) {
      try { city = decodeURIComponent(headers['cf-ipcity']); } catch { city = headers['cf-ipcity']; }
    }

    let asn = headers['cf-ipas-number'] ? 'AS' + headers['cf-ipas-number'] : 'Cloudflare ASN';
    if (headers['cf-ipcontinent']) {
      asn += ' (' + headers['cf-ipcontinent'] + ')';
    }

    return {
      provider: this.name,
      capabilities: this.getCapabilities(),
      requestId: rayId,
      rawIp,
      maskedIp,
      country,
      city,
      region: headers['cf-region'] || headers['cf-region-code'] || undefined,
      asn,
      userAgent: headers['user-agent'] || '',
      ja3Hash: bm.ja3,
      ja4Hash: bm.ja4,
      cdnBotScore: bm.score,
      isCdnVerifiedBot: bm.verified,
      rawHeaders: headers
    };
  }
}
