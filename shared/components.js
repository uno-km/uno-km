/**
 * AMEVA Ecosystem - Standard Web Components (shared/components.js)
 * High-Clarity Custom Elements for Universal Modular Header & Sidebar (SSOT v1.0)
 */

(function(global) {
  'use strict';

  const ECOSYSTEM_REGISTRY = {
    "sentinel": {
      "name": "AMEVA-Sentinel",
      "version": "v2.3.0",
      "github": "https://github.com/uno-km/ameva-sentinel",
      "pypi": "ameva-sentinel",
      "npm": "@ameva/sentinel",
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
      "version": "v3.1.3",
      "github": "https://github.com/uno-km/ameva-mcp-hub",
      "pypi": "ameva-mcp-hub",
      "npm": "ameva-mcp-hub",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["tools.html", "WASM Tools Catalog"],
        ["showcase.html", "Feature Showcase"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["versions.html", "Version Archive"]
      ]
    },
    "vulkan": {
      "name": "AMEVA-Runtime",
      "version": "v2.7.7",
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
      "version": "v1.1.4",
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
      "version": "v2.0.1",
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
      "version": "v2.0.1",
      "github": "https://github.com/uno-km/termux-diffusion",
      "pypi": "termux-diffusion",
      "npm": "termux-diffusion",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["amfyui.html", "AmfyUI (ComfyUI Mobile)"],
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
      "version": "v1.81.2",
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
      "version": "v1.3.3",
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
      "version": "v1.5.5",
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
      "version": "v2.0.1",
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
      "version": "v1.3.13",
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
      "version": "v1.6.0",
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
      "version": "v1.0.1",
      "github": "https://github.com/uno-km/AMEVA-Forge",
      "pypi": "ameva-forge",
      "npm": "@uno-km/ameva-forge",
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
    "cluster": {
      "name": "AMEVA-Cluster",
      "version": "v1.0.0",
      "github": "https://github.com/uno-km/ameva-cluster",
      "pypi": "ameva-cluster",
      "npm": "@ameva/cluster",
      "doc_pages": [
        ["index.html", "Home / Architecture"],
        ["fleet-optimization.html", "Fleet Optimization"],
        ["guard-protocol.html", "Guard Protocol"],
        ["modalities-guide.html", "Modalities Guide"],
        ["models.html", "Distributed Models"],
        ["installation.html", "Installation Guide"],
        ["quickstart.html", "Quickstart & Recipes"],
        ["api-reference.html", "API Reference"],
        ["training-guide.html", "Training Guide"],
        ["benchmarks.html", "Benchmarks & Profiling"],
        ["advanced-parameters.html", "Advanced Parameters"],
        ["versions.html", "Version Archive"]
      ]
    }
  };

  // ── Centralized Live Ecosystem Version Hydration Engine ───────────────────
  let versionsPromise = null;

  async function getLiveEcosystemVersions() {
    if (global.__ECOSYSTEM_VERSIONS_DATA) {
      return global.__ECOSYSTEM_VERSIONS_DATA;
    }
    if (versionsPromise) {
      return versionsPromise;
    }

    versionsPromise = (async () => {
      let packages = null;
      try {
        const res = await fetch('/api/versions', {
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          const data = await res.json();
          if (data && data.ok && data.packages) {
            packages = data.packages;
          }
        }
      } catch (e) {
        // Network or offline fallback
      }

      if (!packages) {
        // Baseline fallback strictly defaulting to v0.0.1
        packages = {};
        Object.keys(ECOSYSTEM_REGISTRY).forEach(k => {
          const item = ECOSYSTEM_REGISTRY[k];
          packages[k] = {
            key: k,
            name: item.name,
            version: 'v0.0.1',
            raw_version: '0.0.1',
            pypi_package: item.pypi,
            npm_package: item.npm
          };
        });
      }

      global.__ECOSYSTEM_VERSIONS_DATA = packages;

      // Update registry in-memory versions
      Object.keys(packages).forEach(k => {
        if (ECOSYSTEM_REGISTRY[k] && packages[k].version) {
          ECOSYSTEM_REGISTRY[k].version = packages[k].version;
        }
      });

      // Hydrate all DOM elements across the document
      hydrateEcosystemBadges(packages);

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('ameva:versions-synced', { detail: packages }));
      }

      return packages;
    })();

    return versionsPromise;
  }

  function hydrateEcosystemBadges(packages, targetRoot) {
    if (!packages || typeof document === 'undefined') return;
    const root = targetRoot || document;
    const ctx = detectContext();

    // 1. Update AmevaHeader release-tag if present
    const headerReleaseTag = root.querySelector('ameva-header .release-tag, header .release-tag');
    if (headerReleaseTag && ctx.libKey && packages[ctx.libKey]) {
      headerReleaseTag.textContent = packages[ctx.libKey].version;
    }

    // 2. Hydrate elements with explicit [data-package-version] attribute
    root.querySelectorAll('[data-package-version]').forEach(el => {
      const key = el.getAttribute('data-package-version');
      if (packages[key] && packages[key].version) {
        el.textContent = packages[key].version;
      }
    });

    // 3. Hydrate Foundation Package Matrix Table (.pkg-dyn-ver)
    root.querySelectorAll('.pkg-dyn-ver').forEach(el => {
      const pypi = el.getAttribute('data-pypi');
      const npm = el.getAttribute('data-npm');
      const key = el.getAttribute('data-key');
      let matched = null;
      if (key && packages[key]) {
        matched = packages[key];
      } else {
        matched = Object.values(packages).find(p => (pypi && p.pypi_package === pypi) || (npm && p.npm_package === npm));
      }
      if (matched && matched.version) {
        el.textContent = matched.version;
        el.title = `Live verified: ${matched.version}`;
      }
    });

    // 4. Synchronize .badges-bar on library documentation pages
    const badgesBar = root.querySelector('.badges-bar');
    if (badgesBar && ctx.libKey && packages[ctx.libKey]) {
      const curPkg = packages[ctx.libKey];
      let liveBadge = badgesBar.querySelector('.live-badge-indicator');
      if (!liveBadge) {
        liveBadge = document.createElement('span');
        liveBadge.className = 'live-badge-indicator';
        liveBadge.style.cssText = 'display:inline-flex; align-items:center; background:#0f172a; color:#38bdf8; font-family:ui-monospace, monospace; font-size:0.75rem; font-weight:700; padding:3px 8px; border-radius:4px; border:1px solid #0284c7; margin-left:4px; vertical-align:middle; text-decoration:none;';
        badgesBar.appendChild(liveBadge);
      }
      liveBadge.innerHTML = `<span style="width:6px; height:6px; background:#22c55e; border-radius:50%; display:inline-block; margin-right:6px; box-shadow:0 0 6px #22c55e;"></span><span class="live-ver-text">${curPkg.version}</span>`;
      liveBadge.title = `Real-time official release synchronized: ${curPkg.version}`;
    }

    // 5. Update Sidebar Flagship links hover title / attributes
    root.querySelectorAll('.sidebar a[data-lib-key]').forEach(a => {
      const lk = a.getAttribute('data-lib-key');
      if (packages[lk] && packages[lk].version) {
        a.title = `${packages[lk].name} (${packages[lk].version})`;
      }
    });

    // 6. Synchronize Foundation Metrics Table (.cell-version)
    root.querySelectorAll('#metrics-tbody tr').forEach(row => {
      const pypi = row.getAttribute('data-pypi-pkg');
      const npm = row.getAttribute('data-npm');
      const matched = Object.values(packages).find(p => (pypi && p.pypi_package === pypi) || (npm && p.npm_package === npm));
      if (matched && matched.version) {
        const verCode = row.querySelector('.cell-version');
        if (verCode) {
          verCode.textContent = matched.version;
          verCode.title = `Live synchronized: ${matched.version}`;
        }
      }
    });
  }

  // ── 3-Tier Categorized Ecosystem Navigation ──────────────────────────────
  const APPLICATIONS_LIST = [
    ["https://ameva-workstation-web-core.vercel.app/", "workstation", "AMEVA Workstation (Web App)"],
    ["https://infraindex-platform-front.vercel.app/", "infra-index", "InfraIndex | GPU Scanner"]
  ];

  const AMEVA_FRAMEWORKS_LIST = [
    ["/lib/sentinel/", "sentinel", "AMEVA-Sentinel (Security SDK)"],
    ["/lib/mcp/", "mcp", "AMEVA-MCP-Hub (Polyglot WASM)"],
    ["/lib/vulkan/", "vulkan", "AMEVA-Runtime (Unified Hardware HAL)"],
    ["/lib/cluster/", "cluster", "AMEVA-Cluster (Memory Pooling)"],
    ["/lib/forge/", "forge", "AMEVA-Forge (WebGPU Autograd)"]
  ];

  const TERMUX_AI_LIST = [
    ["/lib/aichain/", "aichain", "Termux-AIChain (Zero-Dep Agent)"],
    ["/lib/bitnet/", "bitnet", "Termux-BitNet (1.58-bit LLM)"],
    ["/lib/diffusion/", "diffusion", "Termux-Diffusion (Image AI)"],
    ["/lib/playwright/", "playwright", "Termux-Playwright (Automation)"],
    ["/lib/stt/", "stt", "Termux-STT (Voice STT)"],
    ["/lib/tts/", "tts", "Termux-TTS (4-Tier Speech Synthesis)"],
    ["/lib/train/", "train", "Termux-Train (LoRA Engine)"],
    ["/lib/llamacpp/", "llamacpp", "Termux-LlamaCpp (GGUF Runtime)"],
    ["/lib/vision/", "vision", "Termux-Vision (CV & VLM)"]
  ];

  // Backward compatibility alias for legacy scripts
  const FLAGSHIP_LIST = [
    ...APPLICATIONS_LIST,
    ...AMEVA_FRAMEWORKS_LIST,
    ...TERMUX_AI_LIST
  ];

  const AI_PROTOCOLS = [
    ["llms.txt", "llms.txt (AI Fast Context)"],
    ["llms-full.txt", "llms-full.txt (Full Spec)"],
    ["robots.txt", "robots.txt (AI Crawlers)"],
    ["sitemap.xml", "sitemap.xml (Sitemap)"]
  ];

  const DEFAULT_LABS_MENUS = [
    { id: 'newsletter', name: '뉴스레터', parent_id: null, depth: 0, sort_order: 1, board_type: 'news', description: '온디바이스 시스템 및 생태계 공식 엔지니어링 소식' },
    { id: 'research', name: '연구', parent_id: null, depth: 0, sort_order: 2, board_type: 'anal', description: '온디바이스 AI, Bionic 시스템 연구 및 벤치마크' },
    { id: 'research-handbook', name: '안드로이드 시스템 핸드북', parent_id: 'research', depth: 1, sort_order: 1, board_type: 'anal', description: '26개 전 강좌 및 320대 핵심 용어 해설집' },
    { id: 'research-papers', name: '기술 연구 백서', parent_id: 'research', depth: 1, sort_order: 2, board_type: 'anal', description: 'GPU 셰이더 컴파일러, 16KB 페이지 호환 등 심층 기술 분석' },
    { id: 'research-benchmarks', name: '실기기 벤치마크', parent_id: 'research', depth: 1, sort_order: 3, board_type: 'anal', description: 'S25~S7 6종 실기기 8대 모달리티 실측 성능 DB' },
    { id: 'research-cluster', name: '엣지 분산 클러스터', parent_id: 'research', depth: 1, sort_order: 4, board_type: 'anal', description: '모바일 기기 분산 서버 구축 및 네트워크 연동' },
    { id: 'research-opensource', name: '오픈소스 기여 연구', parent_id: 'research', depth: 1, sort_order: 5, board_type: 'anal', description: '글로벌 오픈소스(whisper.cpp, BitNet 등) 업스트림 기여 및 핵심 커널 연구' },
    { id: 'free-board', name: '자유게시판', parent_id: null, depth: 0, sort_order: 3, board_type: 'board', description: '자유로운 기술 토론 및 하드웨어 이야기' },
    { id: 'board-ai', name: 'AI', parent_id: 'free-board', depth: 1, sort_order: 5, board_type: 'blog', description: '온디바이스 AI, LLM, 경량화 모델 및 신경망 기고' },
    { id: 'board-cs', name: 'CS', parent_id: 'free-board', depth: 1, sort_order: 6, board_type: 'blog', description: '컴퓨터 구조, 운영체제, Bionic libc 및 시스템 프로그래밍 기고' }
  ];

  const MENU_ICONS = {
    // Labs menus
    'newsletter': '📰',
    'research': '🔬',
    'research-handbook': '📚',
    'research-papers': '📄',
    'research-benchmarks': '⚡',
    'research-cluster': '🌐',
    'research-opensource': '🐙',
    'free-board': '💬',
    'board-ai': '🤖',
    'board-cs': '💻',

    // Flagship libraries
    'sentinel': '🛡️',
    'mcp': '🧩',
    'vulkan': '⚙️',
    'runtime': '⚙️',
    'cluster': '🌐',
    'aichain': '⛓️',
    'bitnet': '🧠',
    'diffusion': '🎨',
    'playwright': '🎭',
    'stt': '🎙️',
    'tts': '🔊',
    'train': '🏋️',
    'llamacpp': '🦙',
    'vision': '👁️',
    'forge': '⚡',
    'workstation': '💻',
    'infra-index': '📊',
    'infraindex': '📊',

    // Foundation
    'charter': '📜',
    'governance': '⚖️',
    'incubation': '🌱',
    'sponsorship': '💎',
    'metrics': '📊',
    'dashboard': '🌐',

    // AI specs
    'llms.txt': '📑',
    'llms-full.txt': '📚',
    'robots.txt': '🤖',
    'sitemap.xml': '🗺️',

    // Default fallback
    'default': '📌'
  };

  function getMenuIcon(key) {
    if (!key) return MENU_ICONS['default'];
    const k = String(key).toLowerCase();
    if (MENU_ICONS[k]) return MENU_ICONS[k];
    for (const [mKey, icon] of Object.entries(MENU_ICONS)) {
      if (k.includes(mKey)) return icon;
    }
    return MENU_ICONS['default'];
  }

  function buildLabsMenuTreeHtml(menus, curMenu) {
    if (!Array.isArray(menus) || menus.length === 0) return '';
    const nodeMap = {};
    const rootNodes = [];

    menus.forEach(m => {
      nodeMap[m.id] = { ...m, children: [] };
    });

    menus.forEach(m => {
      if (m.parent_id && nodeMap[m.parent_id]) {
        nodeMap[m.parent_id].children.push(nodeMap[m.id]);
      } else {
        rootNodes.push(nodeMap[m.id]);
      }
    });

    const sortFn = (a, b) => (a.sort_order || 0) - (b.sort_order || 0);
    rootNodes.sort(sortFn);
    Object.values(nodeMap).forEach(node => node.children.sort(sortFn));

    function renderBranch(nodes, isSub = false) {
      if (!nodes || nodes.length === 0) return '';
      let out = isSub ? '      <ul class="tree-sub-list">\n' : '';
      nodes.forEach(n => {
        const isAct = (n.id === curMenu);
        const actClass = isAct ? ' class="active"' : '';
        const href = `/labs/index.html?menu=${encodeURIComponent(n.id)}`;
        const hasChildren = n.children && n.children.length > 0;
        const icon = getMenuIcon(n.id);

        out += `      <li class="${isSub ? 'tree-sub-item' : 'tree-root-item'}">`;
        out += `<a href="${href}"${actClass} data-menu-id="${n.id}" title="${n.name}"><span class="nav-icon">${icon}</span><span class="nav-text">${n.name}</span></a>`;
        if (hasChildren) {
          out += '\n' + renderBranch(n.children, true);
        }
        out += `</li>\n`;
      });
      if (isSub) out += '      </ul>\n';
      return out;
    }

    return renderBranch(rootNodes, false);
  }

  const FOUNDATION_PAGES = [
    ["/foundation/index.html", "Overview & Mission"],
    ["/foundation/charter.html", "Foundation Charter"],
    ["/foundation/governance.html", "Governance & Merit"],
    ["/foundation/incubation.html", "Incubation Policy"],
    ["/foundation/sponsorship.html", "Sponsorship & Support"],
    ["/foundation/metrics.html", "Ecosystem Metrics & Analytics"],
    ["/foundation/dashboard/", "3D Neural Fabric Map"],
    ["/labs/index.html", "AMEVA Labs (공식 연구소)"]
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
    const isLabs = path.includes('/labs/') || path.endsWith('/labs');
    const isDocs = path.includes('/docs/');
    const activePage = normalizePageName(path, libKey);
    return { path, libKey, isFoundation, isLabs, isDocs, activePage };
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

      if (ctx.isLabs) {
        brandName = 'AMEVA Labs';
        releaseTag = 'Labs';
      } else if (ctx.isFoundation) {
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
    <button type="button" id="headerSidebarToggle" class="header-sidebar-toggle" aria-label="사이드바 메뉴 토글" title="사이드바 접기/펼치기 (Ctrl+B)">
      <svg class="icon-toggle-panel" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="9" y1="3" x2="9" y2="21"></line>
      </svg>
      <svg class="icon-toggle-hamburger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
      <span class="header-sidebar-toggle-text">메뉴</span>
    </button>
    <a href="index.html" class="header-brand">
      <img src="/shared/favicon.svg" alt="${brandName} Logo">
      <h1 data-i18n="common.brand">${brandName}</h1>
    </a>
    <div class="header-controls">
      <span class="release-tag" data-i18n="common.releaseTag">${releaseTag}</span>
      <div class="lang-selector-wrapper"></div>
      <div class="header-btn-dual labs-dual">
        <a href="/labs/index.html" class="dual-link labs-link" style="color: #0284c7; font-weight: 700;">Labs</a>
        <span class="dual-divider">/</span>
        <a href="/foundation/index.html" class="dual-link foundation-link">Foundation</a>
      </div>
      <div class="header-btn-dual github-dual">
        <a href="${githubUrl}" target="_blank" class="dual-link github-link">GitHub</a>
      </div>${pkgBtnHtml}
      <div class="header-btn-dual sponsor-dual">
        <a href="https://github.com/sponsors/uno-km" target="_blank" class="dual-link sponsor-link">Sponsor</a>
        <span class="dual-divider">/</span>
        <a href="https://opencollective.com/ameva-fund" target="_blank" class="dual-link opencollective-link">Open Collective</a>
      </div>${founderBtnHtml}
    </div>
  </header>`;

      
      // Real-time Ecosystem Live Version Sync (Backend /api/versions & In-Memory Hydration)
      if (libData) {
        getLiveEcosystemVersions().then(packages => {
          if (packages && libKey && packages[libKey]) {
            const tagEl = this.querySelector('.release-tag');
            if (tagEl && packages[libKey].version) {
              tagEl.textContent = packages[libKey].version;
            }
          }
        }).catch(() => {});
      }

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

      if (ctx.isLabs) {
        tier1H3 = '<h3>AMEVA Labs</h3>';
        const search = window.location.search || '';
        const curMenu = window.__curLabsMenu || new URLSearchParams(search).get('menu') || 'newsletter';
        window.__curLabsMenu = curMenu;

        let initialMenus = DEFAULT_LABS_MENUS;
        try {
          const cached = localStorage.getItem('__labs_cached_menus');
          if (cached) {
            const parsed = JSON.parse(cached);
            if (Array.isArray(parsed) && parsed.length > 0) {
              initialMenus = parsed;
            }
          }
        } catch (e) {}

        tier1Items = [buildLabsMenuTreeHtml(initialMenus, curMenu)];

        // Asynchronously fetch from DB & update browser cache & update DOM (Stale-While-Revalidate)
        if (typeof fetch !== 'undefined') {
          fetch('/api/labs?action=get_menus')
            .then(res => res.json())
            .then(data => {
              if (data && data.ok && Array.isArray(data.menus) && data.menus.length > 0) {
                const freshStr = JSON.stringify(data.menus);
                const prevStr = localStorage.getItem('__labs_cached_menus');
                localStorage.setItem('__labs_cached_menus', freshStr);
                if (freshStr !== prevStr) {
                  const treeContainer = this.querySelector('#sidebarLabsTree');
                  if (treeContainer) {
                    const activeMenu = window.__curLabsMenu || new URLSearchParams(window.location.search).get('menu') || 'newsletter';
                    treeContainer.innerHTML = buildLabsMenuTreeHtml(data.menus, activeMenu);
                  }
                }
              }
            })
            .catch(() => {});
        }
      } else if (ctx.isFoundation) {
        tier1H3 = '<h3 data-i18n="common.nav.foundation"><span class="section-title-text">Foundation (AOSF)</span></h3>';
        FOUNDATION_PAGES.forEach(([href, title]) => {
          const isAct = href.includes('/labs/') ? ctx.isLabs : (!ctx.isLabs && normalizePageName(href) === currentNorm);
          const act = isAct ? ' class="active"' : '';
          const icon = getMenuIcon(href);
          tier1Items.push(`      <li><a href="${href}"${act} title="${title}"><span class="nav-icon">${icon}</span><span class="nav-text">${title}</span></a></li>`);
        });
      } else if (libData && libData.doc_pages) {
        tier1H3 = '<h3 data-i18n="common.nav.docNav"><span class="section-title-text">Document Navigation</span></h3>';
        libData.doc_pages.forEach(([p, title]) => {
          const pageNorm = normalizePageName(p);
          const isAct = (pageNorm === currentNorm);
          const act = isAct ? ' class="active"' : '';
          const icon = getMenuIcon(p);
          tier1Items.push(`      <li><a href="${p}"${act} title="${title}"><span class="nav-icon">${icon}</span><span class="nav-text">${title}</span></a></li>`);
        });
      } else {
        tier1H3 = '<h3 data-i18n="common.nav.docNav"><span class="section-title-text">Document Navigation</span></h3>';
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
          const icon = getMenuIcon(p);
          tier1Items.push(`      <li><a href="${p}"${act} title="${title}"><span class="nav-icon">${icon}</span><span class="nav-text">${title}</span></a></li>`);
        });
      }

      // Category 1: Applications
      let appItems = [];
      APPLICATIONS_LIST.forEach(([href, lk, title]) => {
        const act = (!ctx.isFoundation && lk === libKey) ? ' class="active"' : '';
        const target = href.startsWith('http') ? ' target="_blank"' : '';
        const icon = getMenuIcon(lk);
        appItems.push(`      <li><a href="${href}"${act}${target} data-lib-key="${lk}" title="${title}"><span class="nav-icon">${icon}</span><span class="nav-text">${title}</span></a></li>`);
      });

      // Category 2: AMEVA Core Frameworks
      let amevaItems = [];
      AMEVA_FRAMEWORKS_LIST.forEach(([href, lk, title]) => {
        const act = (!ctx.isFoundation && lk === libKey) ? ' class="active"' : '';
        const target = href.startsWith('http') ? ' target="_blank"' : '';
        const icon = getMenuIcon(lk);
        amevaItems.push(`      <li><a href="${href}"${act}${target} data-lib-key="${lk}" title="${title}"><span class="nav-icon">${icon}</span><span class="nav-text">${title}</span></a></li>`);
      });

      // Category 3: Termux On-Device AI
      let termuxItems = [];
      TERMUX_AI_LIST.forEach(([href, lk, title]) => {
        const act = (!ctx.isFoundation && lk === libKey) ? ' class="active"' : '';
        const target = href.startsWith('http') ? ' target="_blank"' : '';
        const icon = getMenuIcon(lk);
        termuxItems.push(`      <li><a href="${href}"${act}${target} data-lib-key="${lk}" title="${title}"><span class="nav-icon">${icon}</span><span class="nav-text">${title}</span></a></li>`);
      });

      // Category 4: AI Protocols & Specifications
      let tier3Items = [];
      AI_PROTOCOLS.forEach(([href, title]) => {
        const icon = getMenuIcon(href);
        tier3Items.push(`      <li><a href="${href}" target="_blank" title="${title}"><span class="nav-icon">${icon}</span><span class="nav-text">${title}</span></a></li>`);
      });

      this.innerHTML = `
  <nav class="sidebar">
    <!-- Tier 1: Primary Document / Foundation Navigation -->
    ${tier1H3}
    <ul${ctx.isLabs ? ' id="sidebarLabsTree" class="sidebar-labs-tree"' : ''}>
${tier1Items.join('\n')}
    </ul>
    <!-- Category 1: Applications -->
    <h3 data-i18n="common.nav.applications"><span class="section-title-text">Applications</span></h3>
    <ul>
${appItems.join('\n')}
    </ul>
    <!-- Category 2: AMEVA Core Frameworks -->
    <h3 data-i18n="common.nav.amevaFrameworks"><span class="section-title-text">AMEVA Frameworks</span></h3>
    <ul>
${amevaItems.join('\n')}
    </ul>
    <!-- Category 3: Termux On-Device AI -->
    <h3 data-i18n="common.nav.termuxAi"><span class="section-title-text">Termux On-Device AI</span></h3>
    <ul>
${termuxItems.join('\n')}
    </ul>
    <!-- Category 4: AI Protocols & Specifications -->
    <h3 data-i18n="common.nav.aiSpecs"><span class="section-title-text">AI Agent Protocols</span></h3>
    <ul>
${tier3Items.join('\n')}
    </ul>
  </nav>`;

      if (global.i18n && typeof global.i18n.applyLanguage === 'function') {
        global.i18n.applyLanguage(global.i18n.currentLang);
      }

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('ameva:sidebar-ready'));
      }
    }
  }

  // Global helper to synchronize Labs sidebar active link
  window.__updateLabsSidebarActive = function(menuId) {
    window.__curLabsMenu = menuId;
    const anchors = document.querySelectorAll('#sidebarLabsTree a[data-menu-id], .sidebar a[data-menu-id]');
    anchors.forEach(a => {
      if (a.getAttribute('data-menu-id') === menuId) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  };

  // Register Web Components
  if (typeof customElements !== 'undefined') {
    if (!customElements.get('ameva-header')) {
      customElements.define('ameva-header', AmevaHeader);
    }
    if (!customElements.get('ameva-sidebar')) {
      customElements.define('ameva-sidebar', AmevaSidebar);
    }
  }

  // Auto-initiate live version synchronization once DOM is ready
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        getLiveEcosystemVersions();
      });
    } else {
      getLiveEcosystemVersions();
    }
  }

  global.getLiveEcosystemVersions = getLiveEcosystemVersions;
  global.hydrateEcosystemBadges = hydrateEcosystemBadges;
  global.ECOSYSTEM_REGISTRY = ECOSYSTEM_REGISTRY;

})(typeof window !== 'undefined' ? window : global);
