/**
 * AMEVA Sentinel v2.1 - Generic HTTP / Node.js Provider Adapter
 * Module: lib/sentinel/providers/generic.js
 * 
 * Fallback provider adapter for standard Node.js http.IncomingMessage,
 * Express, Koa, and Fastify server environments.
 */
import { BaseEdgeProviderAdapter } from './base.js';

export class GenericEdgeAdapter extends BaseEdgeProviderAdapter {
  constructor() {
    super('GENERIC');
  }
}
