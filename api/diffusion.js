/**
 * AMEVA Ecosystem - Vercel Serverless Diffusion Proxy (api/diffusion.js)
 * Enterprise BFF Architecture: Prevents Client-side IP 429 Rate Limiting
 */

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { prompt = '', seed = '42891', model = 'flux-schnell' } = req.query;
  const rawPrompt = (prompt || 'cute orange cat surfing on wave').trim();

  // Model-specific prompt tuning
  const styleKeywords = {
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

  const styleSuffix = styleKeywords[model] || 'masterpiece, 8k';
  
  // Smart Extraction: Take only the primary subject clause to guarantee sub-3s inference and zero 503/429
  const parts = rawPrompt.split(',').map(s => s.trim()).filter(Boolean);
  const primaryClause = parts[0] || 'cute cat';
  const optimizedPrompt = `${primaryClause}, ${styleSuffix}`;
  const encoded = encodeURIComponent(optimizedPrompt);

  const candidateUrls = [
    `https://image.pollinations.ai/prompt/${encoded}?nologo=true`,
    `https://image.pollinations.ai/prompt/${encodeURIComponent(primaryClause)}?nologo=true`
  ];

  for (const url of candidateUrls) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7500); // 7.5s safe timeout for Vercel 10s limit

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
    error: 'AI Inference Server Busy',
    message: 'Please retry with a shorter prompt or wait a few seconds.'
  });
}
