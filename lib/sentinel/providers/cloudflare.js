/**
 * AMEVA Sentinel v2.1 - Cloudflare Edge Provider Adapter
 * Module: lib/sentinel/providers/cloudflare.js
 * 
 * Extracts telemetry, Bot Management metadata, JA3/JA4 fingerprints,
 * and Cloudflare-verified bot signals from CF Enterprise / Workers headers.
 */
import { BaseEdgeProviderAdapter } from './base.js';
import { maskIpAddress } from '../../privacy/network-identifiers.js';

export class CloudflareEdgeAdapter extends BaseEdgeProviderAdapter {
  constructor() {
    super('CLOUDFLARE');
  }

  /**
   * Parse Cloudflare Bot Management JSON/headers
   * @param {Record<string, string>} headers 
   * @returns {{ score: number | null, verified: boolean, ja3: string | null, ja4: string | null }}
   */
  parseBotManagement(headers) {
    let score = null;
    let verified = false;
    let ja3 = headers['cf-ja3-hash'] || null;
    let ja4 = headers['cf-ja4'] || null;

    if (headers['cf-bot-score']) {
      const parsed = parseInt(headers['cf-bot-score'], 10);
      if (!isNaN(parsed)) score = parsed;
    }

    if (headers['cf-verified-bot'] === 'true' || headers['cf-verified-bot'] === '1') {
      verified = true;
    }

    const bmHeader = headers['cf-bot-management'];
    if (bmHeader) {
      try {
        const bm = JSON.parse(bmHeader);
        if (typeof bm.score === 'number') score = bm.score;
        if (bm.verified_bot === true) verified = true;
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
      requestId: rayId,
      rawIp,
      maskedIp,
      country,
      city,
      region: headers['cf-region'] || headers['cf-region-code'] || null,
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
