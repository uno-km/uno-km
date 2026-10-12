/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
/**
 * AMEVA Ecosystem - Vercel Serverless Diffusion Proxy (api/diffusion.js)
 * Hardened BFF Architecture: Input validation, rate limiting & DoS defense
 */

// In-Memory sliding-window rate limiter (per-instance)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 12;

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.startTime > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, startTime: now });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  entry.count++;
  return true;
}

const ALLOWED_MODELS = {
  'flux-schnell': 'masterpiece, 8k uhd, cinematic lighting',
  'animagine-turbo': 'anime illustration, vibrant cel shading',
  'sd-turbo': 'photorealistic, studio lighting',
  'ghibli-studio': 'studio ghibli aesthetic, watercolor painting',
  'realistic-vision': '35mm photograph, authentic texture, 8k',
  '3d-pixar': '3d pixar animation, octane render',
  'pixel-art': '16-bit pixel art, retro arcade',
  'cyberpunk-neon': 'cyberpunk neon, unreal engine 5',
  'midjourney-v6': 'midjourney v6 atmospheric composition',
  'anything-v5': 'anime artwork, colorful linework'
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  // 1. Rate Limit Defense
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket?.remoteAddress || '127.0.0.1';
  if (!checkRateLimit(ip)) {
    res.setHeader('Retry-After', '60');
    return res.status(429).json({
      ok: false,
      error: 'RATE_LIMIT_EXCEEDED',
      message: 'Too many requests. Please wait 60 seconds before retrying.'
    });
  }

  const { prompt = '', model = 'flux-schnell' } = req.query;
  const rawPrompt = (typeof prompt === 'string' ? prompt : '').trim();

  // 2. Input Length Defense
  if (rawPrompt.length > 300) {
    return res.status(400).json({
      ok: false,
      error: 'PROMPT_TOO_LONG',
      message: 'Prompt exceeds maximum length of 300 characters.'
    });
  }

  const safePrompt = rawPrompt || 'cute orange cat surfing on wave';
  const selectedModel = ALLOWED_MODELS[model] ? model : 'flux-schnell';
  const styleSuffix = ALLOWED_MODELS[selectedModel];

  // Smart Extraction: Take only the primary subject clause to guarantee sub-3s inference
  const parts = safePrompt.split(',').map(s => s.trim()).filter(Boolean);
  const primaryClause = (parts[0] || 'cute cat').slice(0, 100);
  const optimizedPrompt = `${primaryClause}, ${styleSuffix}`;
  const encoded = encodeURIComponent(optimizedPrompt);

  const candidateUrls = [
    `https://image.pollinations.ai/prompt/${encoded}?nologo=true`,
    `https://image.pollinations.ai/prompt/${encodeURIComponent(primaryClause)}?nologo=true`
  ];

  for (const url of candidateUrls) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7500); // 7.5s safe timeout

      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
        }
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const contentType = response.headers.get('content-type') || 'image/jpeg';
        const buffer = await response.arrayBuffer();

        res.setHeader('Content-Type', contentType);
        res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400');
        return res.status(200).send(Buffer.from(buffer));
      }
    } catch (err) {
      console.warn('[Vercel Diffusion Proxy] candidate attempt note:', err.message);
    }
  }

  return res.status(503).json({
    ok: false,
    error: 'AI_INFERENCE_UNAVAILABLE',
    message: 'AI inference server busy. Please retry with a shorter prompt or wait a few seconds.'
  });
}
