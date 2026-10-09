/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
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
