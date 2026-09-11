/**
 * AMEVA Sentinel v2.1 - Edge Provider Adapters Entrypoint & Factory
 * Module: lib/sentinel/providers/index.js
 */
import { BaseEdgeProviderAdapter } from './base.js';
import { CloudflareEdgeAdapter } from './cloudflare.js';
import { VercelEdgeAdapter } from './vercel.js';
import { FastlyEdgeAdapter } from './fastly.js';
import { GenericEdgeAdapter } from './generic.js';

export {
  BaseEdgeProviderAdapter,
  CloudflareEdgeAdapter,
  VercelEdgeAdapter,
  FastlyEdgeAdapter,
  GenericEdgeAdapter
};

const cfAdapter = new CloudflareEdgeAdapter();
const vercelAdapter = new VercelEdgeAdapter();
const fastlyAdapter = new FastlyEdgeAdapter();
const genericAdapter = new GenericEdgeAdapter();

/**
 * Automatically resolve suitable EdgeProviderAdapter based on request headers
 * @param {any} req 
 * @returns {BaseEdgeProviderAdapter}
 */
export function resolveProviderAdapter(req) {
  if (!req || !req.headers) return genericAdapter;
  const h = req.headers;

  if (h['cf-ray'] || h['CF-RAY'] || h['cf-connecting-ip'] || h['CF-Connecting-IP']) {
    return cfAdapter;
  }
  if (h['x-vercel-id'] || h['x-vercel-ip-country'] || process.env.VERCEL) {
    return vercelAdapter;
  }
  if (h['fastly-client-ip'] || h['fastly-ff'] || h['Fastly-Client-IP']) {
    return fastlyAdapter;
  }
  return genericAdapter;
}
