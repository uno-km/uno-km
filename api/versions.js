/**
 * Vercel Serverless Function: AMEVA Ecosystem Live Package Version SSOT
 * Route: /api/versions
 * 
 * Provides centralized, real-time release versions across all 14 official packages.
 * Automatically synchronizes with PyPI and NPM registries with resilient in-memory SWR caching
 * and deterministic fallback to verified SSOT standards.
 */

const REGISTRY = {
  "sentinel": { name: "AMEVA-Sentinel", pypi: "ameva-sentinel", npm: "@ameva/sentinel", fallback: "0.0.1" },
  "mcp": { name: "AMEVA-MCP-Hub", pypi: "ameva-mcp-hub", npm: "ameva-mcp-hub", fallback: "0.0.1" },
  "vulkan": { name: "AMEVA-Runtime", pypi: "ameva-runtime", npm: "@ameva/runtime", fallback: "0.0.1" },
  "aichain": { name: "Termux-AIChain", pypi: "termux-aichain", npm: "termux-aichain", fallback: "0.0.1" },
  "bitnet": { name: "Termux-BitNet", pypi: "termux-bitnet", npm: "termux-bitnet", fallback: "0.0.1" },
  "diffusion": { name: "Termux-Diffusion", pypi: "termux-diffusion", npm: "termux-diffusion", fallback: "0.0.1" },
  "playwright": { name: "Termux-Playwright", pypi: "termux-playwright", npm: "termux-playwright", fallback: "0.0.1" },
  "stt": { name: "Termux-STT", pypi: "termux-stt", npm: "termux-stt", fallback: "0.0.1" },
  "tts": { name: "Termux-TTS", pypi: "termux-tts", npm: "termux-tts", fallback: "0.0.1" },
  "train": { name: "Termux-Train", pypi: "termux-train", npm: "termux-train", fallback: "0.0.1" },
  "llamacpp": { name: "Termux-LlamaCpp", pypi: "termux-llamacpp", npm: "termux-llamacpp", fallback: "0.0.1" },
  "vision": { name: "Termux-Vision", pypi: "termux-vision", npm: "termux-vision", fallback: "0.0.1" },
  "forge": { name: "AMEVA-Forge", pypi: "ameva-forge", npm: "ameva-forge", fallback: "0.0.1" }
};

let cachedResponse = null;
let lastCacheTime = 0;
const CACHE_TTL_MS = 1000 * 60 * 5; // 5 minutes

async function fetchWithTimeout(url, headers = {}, timeoutMs = 3500) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { headers, signal: controller.signal });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function resolvePackageVersion(key, meta) {
  let resolvedVer = null;
  let pypiVer = null;
  let npmVer = null;

  // 1. PyPI Registry Check
  if (meta.pypi) {
    try {
      const data = await fetchWithTimeout(`https://pypi.org/pypi/${encodeURIComponent(meta.pypi)}/json`, {
        'Accept': 'application/json'
      });
      if (data && data.info && data.info.version) {
        pypiVer = data.info.version;
      }
    } catch (e) {}
  }

  // 2. NPM Registry Check
  if (meta.npm) {
    try {
      const data = await fetchWithTimeout(
        `https://registry.npmjs.org/${encodeURIComponent(meta.npm)}`,
        { 'Accept': 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8' }
      );
      if (data && data['dist-tags'] && data['dist-tags'].latest) {
        npmVer = data['dist-tags'].latest;
      }
    } catch (e) {}
  }

  // Determine latest version (prefer npm / pypi over fallback)
  resolvedVer = npmVer || pypiVer || meta.fallback;

  const formattedVer = resolvedVer.startsWith('v') ? resolvedVer : `v${resolvedVer}`;
  const rawVer = resolvedVer.replace(/^v/, '');

  return {
    key,
    name: meta.name,
    version: formattedVer,
    raw_version: rawVer,
    pypi_package: meta.pypi,
    npm_package: meta.npm,
    pypi_version: pypiVer ? (pypiVer.startsWith('v') ? pypiVer : `v${pypiVer}`) : null,
    npm_version: npmVer ? (npmVer.startsWith('v') ? npmVer : `v${npmVer}`) : null
  };
}

export default async function handler(req, res) {
  // CORS & Caching Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const now = Date.now();
  if (cachedResponse && (now - lastCacheTime) < CACHE_TTL_MS) {
    return res.status(200).json(cachedResponse);
  }

  try {
    const keys = Object.keys(REGISTRY);
    const promises = keys.map(k => resolvePackageVersion(k, REGISTRY[k]));
    const results = await Promise.allSettled(promises);

    const packages = {};
    results.forEach((r, idx) => {
      const key = keys[idx];
      if (r.status === 'fulfilled' && r.value) {
        packages[key] = r.value;
      } else {
        const meta = REGISTRY[key];
        packages[key] = {
          key,
          name: meta.name,
          version: `v${meta.fallback}`,
          raw_version: meta.fallback,
          pypi_package: meta.pypi,
          npm_package: meta.npm,
          pypi_version: `v${meta.fallback}`,
          npm_version: `v${meta.fallback}`
        };
      }
    });

    const responsePayload = {
      ok: true,
      timestamp: new Date().toISOString(),
      packages
    };

    cachedResponse = responsePayload;
    lastCacheTime = now;

    return res.status(200).json(responsePayload);
  } catch (error) {
    // Fail-Safe Fallback
    const fallbackPackages = {};
    Object.keys(REGISTRY).forEach(k => {
      const meta = REGISTRY[k];
      fallbackPackages[k] = {
        key: k,
        name: meta.name,
        version: `v${meta.fallback}`,
        raw_version: meta.fallback,
        pypi_package: meta.pypi,
        npm_package: meta.npm
      };
    });

    return res.status(200).json({
      ok: true,
      timestamp: new Date().toISOString(),
      fallback: true,
      packages: fallbackPackages
    });
  }
}
