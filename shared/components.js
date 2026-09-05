/**
 * AMEVA Ecosystem - Standard Web Components (shared/components.js)
 * High-Clarity Custom Elements for Universal Modular Header & Sidebar (SSOT v1.0)
 */

(function(global) {
  'use strict';

  const ECOSYSTEM_REGISTRY = {
    "sentinel": {
      "name": "AMEVA-Sentinel",
      "version": "v1.1.0",
      "github": "https://github.com/uno-km/ameva-sentinel",
      "pypi": "",
      "npm": "ameva-sentinel",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["admin.html", "Admin Dashboard"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["versions.html", "Version Archive"]
      ]
    },
    "mcp": {
      "name": "AMEVA-MCP-Hub",
      "version": "v1.1.0",
      "github": "https://github.com/uno-km/ameva-mcp-hub",
      "pypi": "ameva-mcp-hub",
      "npm": "ameva-mcp-hub",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["tools.html", "WASM Tools Catalog"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["versions.html", "Version Archive"]
      ]
    },
    "vulkan": {
      "name": "AMEVA-Runtime",
      "version": "v2.1.0",
      "github": "https://github.com/uno-km/ameva-runtime",
      "pypi": "ameva-runtime",
      "npm": "@ameva/runtime",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["six-modality-roadmap.html", "6-Modality Technical Paper"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["versions.html", "Version Archive"]
      ]
    },
    "aichain": {
      "name": "Termux-AIChain",
      "version": "v1.1.0",
      "github": "https://github.com/uno-km/termux-aichain",
      "pypi": "termux-aichain",
      "npm": "termux-aichain",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["versions.html", "Version Archive"]
      ]
    },
    "bitnet": {
      "name": "Termux-BitNet",
      "version": "v1.1.1",
      "github": "https://github.com/uno-km/termux-bitnet",
      "pypi": "termux-bitnet",
      "npm": "termux-bitnet",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["models.html", "Pretrained Checkpoints"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["versions.html", "Version Archive"]
      ]
    },
    "diffusion": {
      "name": "Termux-Diffusion",
      "version": "v1.1.0",
      "github": "https://github.com/uno-km/termux-diffusion",
      "pypi": "termux-diffusion",
      "npm": "termux-diffusion",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["models.html", "Model Checkpoints"],
        ["gallery.html", "Visual Gallery"],
        ["create.html", "Let's Create!"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["versions.html", "Version Archive"]
      ]
    },
    "playwright": {
      "name": "Termux-Playwright",
      "version": "v1.1.0",
      "github": "https://github.com/uno-km/termux-playwright",
      "pypi": "termux-playwright",
      "npm": "termux-playwright",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["nodejs.html", "Node.js Guide"],
        ["phantom-process.html", "Process Guard"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["test-report.html", "Audit Report"],
        ["blog-post.html", "Technical Blog"],
        ["versions.html", "Version Archive"]
      ]
    },
    "stt": {
      "name": "Termux-STT",
      "version": "v1.1.8",
      "github": "https://github.com/uno-km/termux-stt",
      "pypi": "termux-stt",
      "npm": "termux-stt",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["models.html", "Pretrained Checkpoints"],
        ["showcase.html", "Audio Showcase"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["versions.html", "Version Archive"]
      ]
    },
    "tts": {
      "name": "Termux-TTS",
      "version": "v1.3.0",
      "github": "https://github.com/uno-km/termux-tts",
      "pypi": "termux-tts",
      "npm": "termux-tts",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["vulkan-engineering-paper.html", "Vulkan C++ Engineering Paper"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["versions.html", "Version Archive"]
      ]
    },
    "train": {
      "name": "Termux-Train",
      "version": "v1.1.0",
      "github": "https://github.com/uno-km/termux-train",
      "pypi": "termux-train",
      "npm": "termux-train",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["models.html", "Pretrained Checkpoints"],
        ["training-guide.html", "Training Guide"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["versions.html", "Version Archive"]
      ]
    },
    "llamacpp": {
      "name": "Termux-LlamaCpp",
      "version": "v1.1.0",
      "github": "https://github.com/uno-km/termux-llamacpp",
      "pypi": "termux-llamacpp",
      "npm": "termux-llamacpp",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["versions.html", "Version Archive"]
      ]
    },
    "vision": {
      "name": "Termux-Vision",
      "version": "v1.1.0",
      "github": "https://github.com/uno-km/termux-vision",
      "pypi": "termux-vision",
      "npm": "termux-vision",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["versions.html", "Version Archive"]
      ]
    },
    "forge": {
      "name": "AMEVA-Forge",
      "version": "v1.1.0",
      "github": "https://github.com/uno-km/ameva-forge",
      "pypi": "ameva-forge",
      "npm": "ameva-forge",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["all-modal-studio.html", "All-Modal WebGPU Studio"],
        ["what-is-forge.html", "What is Forge"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["forge-vs-pytorch.html", "Forge vs PyTorch"],
        ["demo.html", "Live WebGPU Demo"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["versions.html", "Version Archive"]
      ]
    },
    "infra-index": {
      "name": "Infra-Index",
      "version": "v1.1.0",
      "github": "https://github.com/uno-km/infra-index",
      "pypi": "infra-index",
      "npm": "infra-index",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["versions.html", "Version Archive"]
      ]
    }
  };

  const FLAGSHIP_LIST = [
    ["/lib/sentinel/", "sentinel", "AMEVA-Sentinel (Security SDK)"],
    ["/lib/mcp/", "mcp", "AMEVA-MCP-Hub (Polyglot WASM)"],
    ["/lib/vulkan/", "vulkan", "AMEVA-Runtime (Unified Hardware HAL)"],
    ["/lib/aichain/", "aichain", "Termux-AIChain (Zero-Dep Agent)"],
    ["/lib/bitnet/", "bitnet", "Termux-BitNet (1.58-bit LLM)"],
    ["/lib/diffusion/", "diffusion", "Termux-Diffusion (Image AI)"],
    ["/lib/playwright/", "playwright", "Termux-Playwright (Automation)"],
    ["/lib/stt/", "stt", "Termux-STT (Voice STT)"],
    ["/lib/tts/", "tts", "Termux-TTS (4-Tier Speech Synthesis)"],
    ["/lib/train/", "train", "Termux-Train (LoRA Engine)"],
    ["/lib/llamacpp/", "llamacpp", "Termux-LlamaCpp (GGUF Runtime)"],
    ["/lib/vision/", "vision", "Termux-Vision (CV & VLM)"],
    ["/lib/forge/", "forge", "AMEVA-Forge (WebGPU Autograd)"],
    ["https://ameva-workstation-web-core.vercel.app/", "workstation", "AMEVA Workstation (Web App)"]
  ];

  const AI_PROTOCOLS = [
    ["llms.txt", "llms.txt (AI Fast Context)"],
    ["llms-full.txt", "llms-full.txt (Full Spec)"],
    ["robots.txt", "robots.txt (AI Crawlers)"],
    ["sitemap.xml", "sitemap.xml (Sitemap)"]
  ];

  const FOUNDATION_PAGES = [
    ["/foundation/index.html", "Overview & Mission"],
    ["/foundation/charter.html", "Foundation Charter"],
    ["/foundation/governance.html", "Governance & Merit"],
    ["/foundation/incubation.html", "Incubation Policy"],
    ["/foundation/sponsorship.html", "Sponsorship & Support"],
    ["/foundation/metrics.html", "Ecosystem Metrics & Analytics"],
    ["/foundation/dashboard/", "3D Neural Fabric Map"]
  ];

  function normalizePageName(raw, libKey) {
    if (!raw) return 'index';
    let clean = String(raw).split('?')[0].split('#')[0].replace(/\/+$/, '');
    if (!clean) return 'index';
    const parts = clean.split('/');
    let last = parts[parts.length - 1];
    if (!last || last === '' || (libKey && last.toLowerCase() === libKey.toLowerCase()) || last.toLowerCase() === 'foundation') {
      return 'index';
    }
    return last.replace(/\.html$/i, '').toLowerCase();
  }

  function detectContext() {
    const path = (window.location.pathname || '').toLowerCase();
    const match = path.match(/\/lib\/([a-z0-9_-]+)/);
    const libKey = match ? match[1] : '';
    const isFoundation = path.includes('/foundation/');
    const isDocs = path.includes('/docs/');
    const activePage = normalizePageName(path, libKey);
    return { path, libKey, isFoundation, isDocs, activePage };
  }

  // ── 1. AmevaHeader Web Component ──────────────────────────────────────────
  class AmevaHeader extends HTMLElement {
    connectedCallback() {
      const ctx = detectContext();
      const libKey = this.getAttribute('lib') || ctx.libKey;
      const libData = ECOSYSTEM_REGISTRY[libKey];

      let brandName = 'AMEVA Open Source Foundation';
      let releaseTag = 'AOSF v2.0 (Active)';
      let githubUrl = 'https://github.com/uno-km/uno-km';
      let pypiPkg = '';
      let npmPkg = '';

      if (ctx.isFoundation) {
        brandName = 'AMEVA Open Source Foundation';
        releaseTag = 'AOSF Tier 1 TLP';
      } else if (libData) {
        brandName = libData.name;
        releaseTag = libData.version;
        githubUrl = libData.github;
        pypiPkg = libData.pypi;
        npmPkg = libData.npm;
      }

      let pkgBtnHtml = '';
      if (pypiPkg && npmPkg) {
        pkgBtnHtml = `
      <div class="header-btn-dual registry-dual">
        <a href="https://pypi.org/project/${pypiPkg}/" target="_blank" class="dual-link pip-link">pip</a>
        <span class="dual-divider">/</span>
        <a href="https://www.npmjs.com/package/${npmPkg}" target="_blank" class="dual-link npm-link">npm</a>
      </div>`;
      }

      let founderBtnHtml = '';
      if (ctx.isFoundation || (!libData && !ctx.isDocs)) {
        founderBtnHtml = `
      <div class="header-btn-dual founder-dual">
        <a href="/" class="dual-link founder-link">Founder CV</a>
        <span class="dual-divider">/</span>
        <a href="https://uno-kim.tistory.com/" target="_blank" class="dual-link blog-link">Blog</a>
      </div>`;
      }

      this.innerHTML = `
  <header>
    <a href="index.html" class="header-brand">
      <img src="/shared/favicon.svg" alt="${brandName} Logo">
      <h1 data-i18n="common.brand">${brandName}</h1>
    </a>
    <div class="header-controls">
      <span class="release-tag" data-i18n="common.releaseTag">${releaseTag}</span>
      <div class="lang-selector-wrapper"></div>
      <div class="header-btn-dual foundation-dual">
        <a href="/foundation/index.html" class="dual-link foundation-link">Foundation</a>
        <span class="dual-divider">/</span>
        <a href="${githubUrl}" target="_blank" class="dual-link github-link">GitHub</a>
      </div>${pkgBtnHtml}
      <div class="header-btn-dual sponsor-dual">
        <a href="https://github.com/sponsors/uno-km" target="_blank" class="dual-link sponsor-link">Sponsor</a>
        <span class="dual-divider">/</span>
        <a href="https://opencollective.com/ameva-fund" target="_blank" class="dual-link opencollective-link">Open Collective</a>
      </div>${founderBtnHtml}
    </div>
  </header>`;

      if (global.i18n && typeof global.i18n._setupLanguageSelectors === 'function') {
        global.i18n._setupLanguageSelectors();
      }
    }
  }

  // ── 2. AmevaSidebar Web Component ─────────────────────────────────────────
  class AmevaSidebar extends HTMLElement {
    connectedCallback() {
      const ctx = detectContext();
      const libKey = this.getAttribute('lib') || ctx.libKey;
      const libData = ECOSYSTEM_REGISTRY[libKey];
      const explicitCurrent = this.getAttribute('current');
      const currentNorm = explicitCurrent ? normalizePageName(explicitCurrent) : ctx.activePage;

      let tier1H3 = '<h3 data-i18n="common.nav.docNav">Document Navigation</h3>';
      let tier1Items = [];

      if (ctx.isFoundation) {
        tier1H3 = '<h3 data-i18n="common.nav.foundation">Foundation (AOSF)</h3>';
        FOUNDATION_PAGES.forEach(([href, title]) => {
          const pageNorm = normalizePageName(href);
          const isAct = (pageNorm === currentNorm);
          const act = isAct ? ' class="active"' : '';
          tier1Items.push(`      <li><a href="${href}"${act}>${title}</a></li>`);
        });
      } else if (libData && libData.doc_pages) {
        libData.doc_pages.forEach(([p, title]) => {
          const pageNorm = normalizePageName(p);
          const isAct = (pageNorm === currentNorm);
          const act = isAct ? ' class="active"' : '';
          tier1Items.push(`      <li><a href="${p}"${act}>${title}</a></li>`);
        });
      } else {
        const defaultPages = [
          ["index.html", "Home / Architecture"],
          ["installation.html", "Installation Guide"],
          ["quickstart.html", "Quickstart & Recipes"],
          ["api-reference.html", "API Reference"],
          ["benchmarks.html", "Benchmarks & Profiling"],
          ["advanced-parameters.html", "Advanced Parameters"],
          ["versions.html", "Version Archive"]
        ];
        defaultPages.forEach(([p, title]) => {
          const pageNorm = normalizePageName(p);
          const isAct = (pageNorm === currentNorm);
          const act = isAct ? ' class="active"' : '';
          tier1Items.push(`      <li><a href="${p}"${act}>${title}</a></li>`);
        });
      }

      let tier2Items = [];
      FLAGSHIP_LIST.forEach(([href, lk, title]) => {
        const act = (!ctx.isFoundation && lk === libKey) ? ' class="active"' : '';
        const target = href.startsWith('http') ? ' target="_blank"' : '';
        tier2Items.push(`      <li><a href="${href}"${act}${target}>${title}</a></li>`);
      });

      let tier3Items = [];
      AI_PROTOCOLS.forEach(([href, title]) => {
        tier3Items.push(`      <li><a href="${href}" target="_blank">${title}</a></li>`);
      });

      this.innerHTML = `
  <nav class="sidebar">
    <!-- Tier 1: Primary Document / Foundation Navigation -->
    ${tier1H3}
    <ul>
${tier1Items.join('\n')}
    </ul>
    <!-- Tier 2: Flagship Libraries -->
    <h3 data-i18n="common.nav.libraries">Flagship Libraries</h3>
    <ul>
${tier2Items.join('\n')}
    </ul>
    <!-- Tier 3: AI Protocols & Specifications -->
    <h3 data-i18n="common.nav.aiSpecs">AI Agent Protocols</h3>
    <ul>
${tier3Items.join('\n')}
    </ul>
  </nav>`;

      if (global.i18n && typeof global.i18n.applyLanguage === 'function') {
        global.i18n.applyLanguage(global.i18n.currentLang);
      }
    }
  }

  // Register Web Components
  if (typeof customElements !== 'undefined') {
    if (!customElements.get('ameva-header')) {
      customElements.define('ameva-header', AmevaHeader);
    }
    if (!customElements.get('ameva-sidebar')) {
      customElements.define('ameva-sidebar', AmevaSidebar);
    }
  }

  global.ECOSYSTEM_REGISTRY = ECOSYSTEM_REGISTRY;

})(typeof window !== 'undefined' ? window : global);
