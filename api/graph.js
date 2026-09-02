/**
 * Vercel Serverless Function: AMEVA Comprehensive 45-Node Knowledge Graph Engine
 * Route: /api/graph
 * 
 * Powered by Neon PostgreSQL (@neondatabase/serverless)
 * Automatically syncs and serves all 32 AMEVA GitHub repositories, hubs, domains, and kernels.
 */
import { neon } from '@neondatabase/serverless';

let isGraphSchemaReady = false;

export const SEED_NODES = [
  {
    "id": "AMEVA-Universe",
    "name": "AMEVA Universe",
    "group": 1,
    "category": "ROOT",
    "radius": 36.0,
    "description": "Sovereign On-Device AI & Autonomous Systems Ecosystem without Cloud Dependency.",
    "tech_stack": [
      "WebGPU",
      "ARM64 Bionic",
      "Pyodide WASM",
      "C++17",
      "TypeScript"
    ],
    "tags": [
      "root",
      "sovereign-ai",
      "edge-native",
      "meritocracy"
    ],
    "url": "https://uno-km.vercel.app/foundation/",
    "repo_url": "https://github.com/uno-km/uno-km",
    "docs_url": "https://uno-km.vercel.app/foundation/",
    "readme_url": "https://raw.githubusercontent.com/uno-km/uno-km/main/README.md",
    "metadata": {
      "depth": 1,
      "category": "ROOT",
      "readme_url": "https://raw.githubusercontent.com/uno-km/uno-km/main/README.md"
    }
  },
  {
    "id": "AMEVA-Foundation",
    "name": "AMEVA Foundation (AOSF)",
    "group": 1,
    "category": "ROOT",
    "radius": 36.0,
    "description": "Open-Source Foundation Portal, Governance Charter, RFC Specifications & Project Directory.",
    "tech_stack": [
      "AOSF-RFC-001",
      "Open Governance",
      "Meritocracy",
      "Apache-2.0"
    ],
    "tags": [
      "foundation",
      "charter",
      "governance",
      "sponsorship"
    ],
    "url": "https://uno-km.vercel.app/foundation/",
    "repo_url": "https://github.com/uno-km/uno-km/tree/main/foundation",
    "docs_url": "https://uno-km.vercel.app/foundation/",
    "readme_url": "https://raw.githubusercontent.com/uno-km/uno-km/main/FOUNDATION.md",
    "metadata": {
      "depth": 1,
      "category": "ROOT",
      "readme_url": "https://raw.githubusercontent.com/uno-km/uno-km/main/FOUNDATION.md"
    }
  },
  {
    "id": "Eunho-Kim-CV",
    "name": "Founder Executive CV (김은호)",
    "group": 1,
    "category": "ROOT",
    "radius": 36.0,
    "description": "Official Executive Portfolio of Eunho Kim (@uno-km) · Enterprise Java/Spring Boot & PostgreSQL Tech Lead, AMEVA Edge-AI Ecosystem Creator, WebGPU Autograd, and MCP Systems Architect.",
    "tech_stack": [
      "Java 21",
      "Spring Boot",
      "PostgreSQL HA",
      "WebGPU",
      "ARM64 Bionic"
    ],
    "tags": [
      "portfolio",
      "spring-boot",
      "deep-learning",
      "mcp"
    ],
    "url": "https://uno-km.vercel.app/",
    "repo_url": "https://github.com/uno-km/uno-km",
    "docs_url": "https://uno-km.vercel.app/",
    "readme_url": "https://raw.githubusercontent.com/uno-km/uno-km/main/README.md",
    "metadata": {
      "depth": 1,
      "category": "ROOT",
      "readme_url": "https://raw.githubusercontent.com/uno-km/uno-km/main/README.md"
    }
  },
  {
    "id": "AMEVA-Portfolio",
    "name": "AMEVA-Portfolio",
    "group": 1,
    "category": "ROOT",
    "radius": 36.0,
    "description": "Adaptive interactive portfolio engine.",
    "tech_stack": [
      "Python",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "tags": [
      "portfolio",
      "adaptive",
      "resume"
    ],
    "url": "https://github.com/uno-km/AMEVA-Portfolio",
    "repo_url": "https://github.com/uno-km/AMEVA-Portfolio",
    "docs_url": "https://github.com/uno-km/AMEVA-Portfolio",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Portfolio/main/README.md",
    "metadata": {
      "depth": 1,
      "category": "ROOT",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Portfolio/main/README.md"
    }
  },
  {
    "id": "Mobile-Bionic-AI",
    "name": "Mobile & Bionic ARM64",
    "group": 2,
    "category": "DOMAIN",
    "radius": 26.0,
    "description": "Non-root Android Termux user-space AI runtimes with ARM NEON SIMD acceleration.",
    "tech_stack": [
      "Android Bionic",
      "ARM64 NEON",
      "Clang 17",
      "C++17"
    ],
    "tags": [
      "mobile-ai",
      "arm64",
      "termux",
      "simd"
    ],
    "url": "https://uno-km.vercel.app/foundation/charter.html",
    "repo_url": "https://github.com/uno-km",
    "docs_url": "https://uno-km.vercel.app/foundation/charter.html",
    "readme_url": null,
    "metadata": {
      "depth": 2,
      "category": "DOMAIN",
      "readme_url": null
    }
  },
  {
    "id": "WebGPU-Browser-AI",
    "name": "Browser & WebGPU AI",
    "group": 2,
    "category": "DOMAIN",
    "radius": 26.0,
    "description": "Browser-native WebGPU tensor compute shaders and zero-server client execution.",
    "tech_stack": [
      "WebGPU",
      "WGSL",
      "WASM",
      "Next.js",
      "TypeScript"
    ],
    "tags": [
      "webgpu",
      "in-browser-ai",
      "client-compute",
      "wgsl"
    ],
    "url": "https://uno-km.vercel.app/lib/forge/",
    "repo_url": "https://github.com/uno-km",
    "docs_url": "https://uno-km.vercel.app/lib/forge/",
    "readme_url": null,
    "metadata": {
      "depth": 2,
      "category": "DOMAIN",
      "readme_url": null
    }
  },
  {
    "id": "Security-Observability-SRE",
    "name": "Security, Observability & SRE",
    "group": 2,
    "category": "DOMAIN",
    "radius": 26.0,
    "description": "0-Data privacy observability, threat scoring, model nexus SRE, and distributed harvesters.",
    "tech_stack": [
      "TypeScript",
      "WebCrypto",
      "Edge Middleware",
      "Neon PostgreSQL"
    ],
    "tags": [
      "security",
      "observability",
      "sre",
      "threat-scoring"
    ],
    "url": "https://uno-km.vercel.app/sdk/sentinel/",
    "repo_url": "https://github.com/uno-km",
    "docs_url": "https://uno-km.vercel.app/sdk/sentinel/",
    "readme_url": null,
    "metadata": {
      "depth": 2,
      "category": "DOMAIN",
      "readme_url": null
    }
  },
  {
    "id": "Autonomous-Systems-Multi-Agent",
    "name": "Autonomous Systems & Multi-Agent",
    "group": 2,
    "category": "DOMAIN",
    "radius": 26.0,
    "description": "Decentralized multi-agent state machines, Windows assistants, Dead Internet simulations, and WoL gateways.",
    "tech_stack": [
      "Docker",
      "node-pty",
      "WebSocket",
      "Multi-Agent DAG",
      "llama.cpp"
    ],
    "tags": [
      "multi-agent",
      "orchestra",
      "dead-internet",
      "desktop-assistant"
    ],
    "url": "https://uno-km.vercel.app/foundation/",
    "repo_url": "https://github.com/uno-km",
    "docs_url": "https://uno-km.vercel.app/foundation/",
    "readme_url": null,
    "metadata": {
      "depth": 2,
      "category": "DOMAIN",
      "readme_url": null
    }
  },
  {
    "id": "AI-Training-Data-Tooling",
    "name": "AI Training, STT & Tooling",
    "group": 2,
    "category": "DOMAIN",
    "radius": 26.0,
    "description": "On-premise LLM/STT trainers, doc compilers, offline doc AI, and multi-environment CLI suites.",
    "tech_stack": [
      "Python 3",
      "SafeTensors",
      "Whisper LoRA",
      "Ollama DocAI",
      "TypeScript CLI"
    ],
    "tags": [
      "llm-trainer",
      "stt-trainer",
      "doc-ai",
      "crawler"
    ],
    "url": "https://uno-km.vercel.app/",
    "repo_url": "https://github.com/uno-km",
    "docs_url": "https://uno-km.vercel.app/",
    "readme_url": null,
    "metadata": {
      "depth": 2,
      "category": "DOMAIN",
      "readme_url": null
    }
  },
  {
    "id": "termux-bitnet",
    "name": "termux-bitnet",
    "group": 3,
    "category": "TLP_LIBRARY",
    "radius": 18.0,
    "description": "1.58-bit (i2_s) On-Device LLM Inference Engine with ARM64 NEON DotProd SIMD acceleration.",
    "tech_stack": [
      "C++17",
      "ARM64 NEON",
      "DotProd",
      "Python ctypes",
      "Node.js npm"
    ],
    "tags": [
      "bitnet",
      "1.58-bit",
      "llm",
      "on-device",
      "neon"
    ],
    "url": "https://uno-km.vercel.app/lib/bitnet/",
    "repo_url": "https://github.com/uno-km/termux-bitnet",
    "docs_url": "https://uno-km.vercel.app/lib/bitnet/",
    "readme_url": "https://raw.githubusercontent.com/uno-km/termux-bitnet/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TLP_LIBRARY",
      "readme_url": "https://raw.githubusercontent.com/uno-km/termux-bitnet/main/README.md"
    }
  },
  {
    "id": "termux-train",
    "name": "termux-train",
    "group": 3,
    "category": "TLP_LIBRARY",
    "radius": 18.0,
    "description": "Ultra-lightweight On-Device Tensor & DAG Autograd Deep Learning Framework for Android ARM64 Termux. SafeTensors zero-copy, LoRA fine-tuning, and RoPE Transformers.",
    "tech_stack": [
      "Python",
      "OpenBLAS NEON",
      "SafeTensors",
      "LoRA",
      "RoPE"
    ],
    "tags": [
      "android",
      "python",
      "machine-learning",
      "deep-learning",
      "pypi",
      "autograd",
      "transformer"
    ],
    "url": "https://uno-km.vercel.app/lib/train/",
    "repo_url": "https://github.com/uno-km/termux-train",
    "docs_url": "https://uno-km.vercel.app/lib/train/",
    "readme_url": "https://raw.githubusercontent.com/uno-km/termux-train/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TLP_LIBRARY",
      "readme_url": "https://raw.githubusercontent.com/uno-km/termux-train/main/README.md"
    }
  },
  {
    "id": "termux-stt",
    "name": "termux-stt",
    "group": 3,
    "category": "TLP_LIBRARY",
    "radius": 18.0,
    "description": "Production-grade On-Device Speech-to-Text & 128d X-Vector Speaker Diarization for Android Termux. whisper.cpp, Vosk, Sherpa-ONNX, and 0 PyTorch Dependency.",
    "tech_stack": [
      "Whisper.cpp",
      "Vosk",
      "Sherpa-ONNX",
      "Python"
    ],
    "tags": [
      "nodejs",
      "android",
      "python",
      "npm",
      "typescript",
      "ai",
      "pypi"
    ],
    "url": "https://uno-km.vercel.app/lib/stt/",
    "repo_url": "https://github.com/uno-km/termux-stt",
    "docs_url": "https://uno-km.vercel.app/lib/stt/",
    "readme_url": "https://raw.githubusercontent.com/uno-km/termux-stt/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TLP_LIBRARY",
      "readme_url": "https://raw.githubusercontent.com/uno-km/termux-stt/main/README.md"
    }
  },
  {
    "id": "termux-diffusion",
    "name": "termux-diffusion",
    "group": 3,
    "category": "TLP_LIBRARY",
    "radius": 18.0,
    "description": "Production On-Device AI Image Generation Framework for Android Termux. Dual-Engine (Python & Node.js), Bionic ARM NEON SIMD, Vulkan GPU acceleration.",
    "tech_stack": [
      "C++ NEON",
      "GGUF",
      "Stable Diffusion",
      "Python"
    ],
    "tags": [
      "nodejs",
      "android",
      "python",
      "npm",
      "typescript",
      "ai",
      "deep-learning"
    ],
    "url": "https://uno-km.vercel.app/lib/diffusion/",
    "repo_url": "https://github.com/uno-km/termux-diffusion",
    "docs_url": "https://uno-km.vercel.app/lib/diffusion/",
    "readme_url": "https://raw.githubusercontent.com/uno-km/termux-diffusion/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TLP_LIBRARY",
      "readme_url": "https://raw.githubusercontent.com/uno-km/termux-diffusion/main/README.md"
    }
  },
  {
    "id": "termux-playwright",
    "name": "termux-playwright",
    "group": 3,
    "category": "TLP_LIBRARY",
    "radius": 18.0,
    "description": "The definitive, production-grade Playwright & Chromium automation toolkit for Android Termux. Zero root, anti-bot stealth, and crash-resilient.",
    "tech_stack": [
      "Chromium CDP",
      "Node.js",
      "Python",
      "Bionic ARM64"
    ],
    "tags": [
      "nodejs",
      "android",
      "python",
      "testing",
      "npm",
      "crawler",
      "scraper"
    ],
    "url": "https://uno-km.vercel.app/lib/playwright/",
    "repo_url": "https://github.com/uno-km/termux-playwright",
    "docs_url": "https://uno-km.vercel.app/lib/playwright/",
    "readme_url": "https://raw.githubusercontent.com/uno-km/termux-playwright/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TLP_LIBRARY",
      "readme_url": "https://raw.githubusercontent.com/uno-km/termux-playwright/main/README.md"
    }
  },
  {
    "id": "AMEVA-Edge-Agent",
    "name": "AMEVA-Edge-Agent",
    "group": 3,
    "category": "APPLICATION",
    "radius": 18.0,
    "description": "인터넷 연결 없이 기기 자체에서 음성을 처리하는 안드로이드 및 터묵스(Termux) 기반의 자율형 모바일 에지 프레임워크.",
    "tech_stack": [
      "Python",
      "Termux",
      "Edge STT",
      "Voice Agent"
    ],
    "tags": [
      "ma",
      "edge-agent",
      "offline-voice"
    ],
    "url": "https://github.com/uno-km/AMEVA-Edge-Agent",
    "repo_url": "https://github.com/uno-km/AMEVA-Edge-Agent",
    "docs_url": "https://github.com/uno-km/AMEVA-Edge-Agent",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Edge-Agent/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "APPLICATION",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Edge-Agent/main/README.md"
    }
  },
  {
    "id": "ameva-forge",
    "name": "ameva-forge",
    "group": 3,
    "category": "TLP_LIBRARY",
    "radius": 18.0,
    "description": "Zero-Server-Cost Browser-Native WebGPU Autograd Deep Learning Engine with PyTorch compatibility, WGSL Compute Shaders, and Zero-Copy Buffer Recycling.",
    "tech_stack": [
      "WebGPU",
      "WGSL",
      "Pyodide",
      "WASM"
    ],
    "tags": [
      "python",
      "open-source",
      "machine-learning",
      "typescript",
      "ai",
      "deep-learning",
      "wasm"
    ],
    "url": "https://uno-km.vercel.app/lib/forge/",
    "repo_url": "https://github.com/uno-km/ameva-forge",
    "docs_url": "https://uno-km.vercel.app/lib/forge/",
    "readme_url": "https://raw.githubusercontent.com/uno-km/ameva-forge/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TLP_LIBRARY",
      "readme_url": "https://raw.githubusercontent.com/uno-km/ameva-forge/main/README.md"
    }
  },
  {
    "id": "AMEVA-Workstation-Web",
    "name": "AMEVA-Workstation-Web",
    "group": 3,
    "category": "APPLICATION",
    "radius": 18.0,
    "description": "The World's First 100% On-Device WebGPU AI & In-App Multi-Media (Video/Audio/Image) Workspace with Zero Data Leakage.",
    "tech_stack": [
      "React",
      "Next.js",
      "WebGPU",
      "WebLLM",
      "Spatial Canvas"
    ],
    "tags": [
      "markdown-editor",
      "openstreetmap",
      "leaflet",
      "wasm",
      "audio-editor",
      "map-reduce",
      "knowledge-graph"
    ],
    "url": "https://github.com/uno-km/AMEVA-Workstation-Web",
    "repo_url": "https://github.com/uno-km/AMEVA-Workstation-Web",
    "docs_url": "https://github.com/uno-km/AMEVA-Workstation-Web",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Workstation-Web/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "APPLICATION",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Workstation-Web/main/README.md"
    }
  },
  {
    "id": "AMEVA-Workstation",
    "name": "AMEVA-Workstation",
    "group": 3,
    "category": "APPLICATION",
    "radius": 18.0,
    "description": "Core Desktop AI Workspace & multi-agent native execution shell.",
    "tech_stack": [
      "TypeScript",
      "Electron",
      "React",
      "WebLLM"
    ],
    "tags": [
      "desktop-workspace",
      "electron",
      "local-ai"
    ],
    "url": "https://github.com/uno-km/AMEVA-Workstation",
    "repo_url": "https://github.com/uno-km/AMEVA-Workstation",
    "docs_url": "https://github.com/uno-km/AMEVA-Workstation",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Workstation/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "APPLICATION",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Workstation/main/README.md"
    }
  },
  {
    "id": "AMEVA-Workstation-Market-Place",
    "name": "AMEVA-Workstation-Market-Place",
    "group": 3,
    "category": "APPLICATION",
    "radius": 18.0,
    "description": "Decentralized Model, Plugin & Extension Marketplace for AMEVA Workstation.",
    "tech_stack": [
      "JavaScript",
      "React",
      "Decentralized Index"
    ],
    "tags": [
      "marketplace",
      "extensions",
      "plugins"
    ],
    "url": "https://github.com/uno-km/AMEVA-Workstation-Market-Place",
    "repo_url": "https://github.com/uno-km/AMEVA-Workstation-Market-Place",
    "docs_url": "https://github.com/uno-km/AMEVA-Workstation-Market-Place",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Workstation-Market-Place/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "APPLICATION",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Workstation-Market-Place/main/README.md"
    }
  },
  {
    "id": "AMEVA-Egde-Brower",
    "name": "AMEVA-Egde-Brower",
    "group": 3,
    "category": "APPLICATION",
    "radius": 18.0,
    "description": "Zero-telemetry privacy-first edge browser client tailored for local AI interfaces.",
    "tech_stack": [
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    "tags": [
      "edge-browser",
      "privacy",
      "client"
    ],
    "url": "https://github.com/uno-km/AMEVA-Egde-Brower",
    "repo_url": "https://github.com/uno-km/AMEVA-Egde-Brower",
    "docs_url": "https://github.com/uno-km/AMEVA-Egde-Brower",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Egde-Brower/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "APPLICATION",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Egde-Brower/main/README.md"
    }
  },
  {
    "id": "ameva-sentinel",
    "name": "ameva-sentinel",
    "group": 3,
    "category": "TLP_LIBRARY",
    "radius": 18.0,
    "description": "Privacy-first Security Observability & Deterministic Threat Scoring Layer for Web Applications. Zero raw PII coordinates, 0-100 Risk Engine, Policy-as-Code.",
    "tech_stack": [
      "TypeScript",
      "WebCrypto",
      "Node.js",
      "Neon PostgreSQL"
    ],
    "tags": [
      "nodejs",
      "security",
      "typescript",
      "browser",
      "telemetry",
      "cybersecurity",
      "web-security"
    ],
    "url": "https://uno-km.vercel.app/sdk/sentinel/",
    "repo_url": "https://github.com/uno-km/ameva-sentinel",
    "docs_url": "https://uno-km.vercel.app/sdk/sentinel/",
    "readme_url": "https://raw.githubusercontent.com/uno-km/ameva-sentinel/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TLP_LIBRARY",
      "readme_url": "https://raw.githubusercontent.com/uno-km/ameva-sentinel/main/README.md"
    }
  },
  {
    "id": "AMEVA-Model-Nexus",
    "name": "AMEVA-Model-Nexus",
    "group": 3,
    "category": "TLP_LIBRARY",
    "radius": 18.0,
    "description": "파편화된 로컬 GGUF 모델을 단일화하고, SRE(사이트 신뢰성 엔지니어링) 기반의 동적 스케줄링(Throttling)으로 다중 기기의 AI 추론 요청을 무중단으로 서빙하는 중앙 집중형 API 허브.",
    "tech_stack": [
      "Python",
      "FastAPI",
      "GGUF",
      "SRE Throttling"
    ],
    "tags": [
      "mlops",
      "gguf",
      "sre",
      "load-balancer"
    ],
    "url": "https://github.com/uno-km/AMEVA-Model-Nexus",
    "repo_url": "https://github.com/uno-km/AMEVA-Model-Nexus",
    "docs_url": "https://github.com/uno-km/AMEVA-Model-Nexus",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Model-Nexus/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TLP_LIBRARY",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Model-Nexus/main/README.md"
    }
  },
  {
    "id": "AMEVA-Benchmark-Suite",
    "name": "AMEVA-Benchmark-Suite",
    "group": 3,
    "category": "TOOLING",
    "radius": 18.0,
    "description": "자동화 엣지 디바이스 검증 및 하드웨어 벤치마크 평가 아키텍처.",
    "tech_stack": [
      "Python",
      "Benchmarking",
      "Latency Matrix"
    ],
    "tags": [
      "llm",
      "benchmarking",
      "edge-testing"
    ],
    "url": "https://github.com/uno-km/AMEVA-Benchmark-Suite",
    "repo_url": "https://github.com/uno-km/AMEVA-Benchmark-Suite",
    "docs_url": "https://github.com/uno-km/AMEVA-Benchmark-Suite",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Benchmark-Suite/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TOOLING",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Benchmark-Suite/main/README.md"
    }
  },
  {
    "id": "AMEVA-Data-Harvester",
    "name": "AMEVA-Data-Harvester",
    "group": 3,
    "category": "TOOLING",
    "radius": 18.0,
    "description": "A hyper-resilient, database-free edge forwarder featuring dynamic multi-transport backup (SCP/HTTPS/Telegram Bot) and zero-loss payload validation.",
    "tech_stack": [
      "Python",
      "SCP",
      "HTTPS",
      "Telegram Bot API"
    ],
    "tags": [
      "mlops",
      "data-harvester",
      "edge-forwarder"
    ],
    "url": "https://github.com/uno-km/AMEVA-Data-Harvester",
    "repo_url": "https://github.com/uno-km/AMEVA-Data-Harvester",
    "docs_url": "https://github.com/uno-km/AMEVA-Data-Harvester",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Data-Harvester/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TOOLING",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Data-Harvester/main/README.md"
    }
  },
  {
    "id": "AMEVA-Database",
    "name": "AMEVA-Database",
    "group": 3,
    "category": "TOOLING",
    "radius": 18.0,
    "description": "Lightweight Tkinter-based SQLite & log inspector for edge AI environments — unified DB, log, and CSV analysis.",
    "tech_stack": [
      "Python",
      "Tkinter",
      "SQLite3",
      "Log Parser"
    ],
    "tags": [
      "mlops",
      "sqlite",
      "log-inspector"
    ],
    "url": "https://github.com/uno-km/AMEVA-Database",
    "repo_url": "https://github.com/uno-km/AMEVA-Database",
    "docs_url": "https://github.com/uno-km/AMEVA-Database",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Database/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TOOLING",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Database/main/README.md"
    }
  },
  {
    "id": "AMEVA-Agent-Orchestra",
    "name": "AMEVA-Agent-Orchestra",
    "group": 3,
    "category": "APPLICATION",
    "radius": 18.0,
    "description": "로컬 GGUF 모델 기반의 계층형 멀티 에이전트 오케스트레이션 시스템 (Nobles & Workers Hierarchy).",
    "tech_stack": [
      "Python",
      "Multi-Agent State Machine",
      "GGUF Swarm"
    ],
    "tags": [
      "ma",
      "agent-orchestra",
      "swarm"
    ],
    "url": "https://github.com/uno-km/AMEVA-Agent-Orchestra",
    "repo_url": "https://github.com/uno-km/AMEVA-Agent-Orchestra",
    "docs_url": "https://github.com/uno-km/AMEVA-Agent-Orchestra",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Agent-Orchestra/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "APPLICATION",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Agent-Orchestra/main/README.md"
    }
  },
  {
    "id": "AMEVA-Window-Assistant",
    "name": "AMEVA-Window-Assistant",
    "group": 3,
    "category": "APPLICATION",
    "radius": 18.0,
    "description": "Windows-only local AI desktop assistant with OCR-first screen understanding, multimodal fallback, offline voice I/O, and llama.cpp-powered reasoning.",
    "tech_stack": [
      "Python",
      "Windows API",
      "OCR Engine",
      "llama.cpp",
      "PyQt"
    ],
    "tags": [
      "multi-agent",
      "ma",
      "window-assistant"
    ],
    "url": "https://github.com/uno-km/AMEVA-Window-Assistant",
    "repo_url": "https://github.com/uno-km/AMEVA-Window-Assistant",
    "docs_url": "https://github.com/uno-km/AMEVA-Window-Assistant",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Window-Assistant/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "APPLICATION",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Window-Assistant/main/README.md"
    }
  },
  {
    "id": "AMEVA-Dead-Internet-Threatre",
    "name": "AMEVA-Dead-Internet-Threatre",
    "group": 3,
    "category": "APPLICATION",
    "radius": 18.0,
    "description": "A fully autonomous, Dockerized multi-agent simulation of the Dead Internet Theory where local GGUF models generate, consume, and moderate their own community.",
    "tech_stack": [
      "Docker",
      "Python",
      "Local GGUF",
      "Social Simulation"
    ],
    "tags": [
      "sr",
      "social-research",
      "dead-internet-theory"
    ],
    "url": "https://github.com/uno-km/AMEVA-Dead-Internet-Threatre",
    "repo_url": "https://github.com/uno-km/AMEVA-Dead-Internet-Threatre",
    "docs_url": "https://github.com/uno-km/AMEVA-Dead-Internet-Threatre",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Dead-Internet-Threatre/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "APPLICATION",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Dead-Internet-Threatre/main/README.md"
    }
  },
  {
    "id": "AMEVA-Dead-Internet-Threatre_v2",
    "name": "AMEVA-Dead-Internet-Threatre_v2",
    "group": 3,
    "category": "APPLICATION",
    "radius": 18.0,
    "description": "Autonomous multi-agent society simulation engine v2 with real-time vector memory.",
    "tech_stack": [
      "Python",
      "Vector Memory",
      "Swarm State Machine"
    ],
    "tags": [
      "dead-internet-v2",
      "vector-memory",
      "society-sim"
    ],
    "url": "https://github.com/uno-km/AMEVA-Dead-Internet-Threatre_v2",
    "repo_url": "https://github.com/uno-km/AMEVA-Dead-Internet-Threatre_v2",
    "docs_url": "https://github.com/uno-km/AMEVA-Dead-Internet-Threatre_v2",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Dead-Internet-Threatre_v2/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "APPLICATION",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Dead-Internet-Threatre_v2/main/README.md"
    }
  },
  {
    "id": "ameva-docfold",
    "name": "ameva-docfold",
    "group": 3,
    "category": "TLP_LIBRARY",
    "radius": 18.0,
    "description": "DocFold BCP v5.0: Native Language Object & Communication Protocol Layer for Heterogeneous AI-to-AI Inter-LLM Systems.",
    "tech_stack": [
      "Python",
      "Semantic DAG",
      "BCP v5.0",
      "Lossless Folding"
    ],
    "tags": [
      "docfold",
      "inter-llm",
      "semantic-protocol"
    ],
    "url": "https://github.com/uno-km/ameva-docfold",
    "repo_url": "https://github.com/uno-km/ameva-docfold",
    "docs_url": "https://github.com/uno-km/ameva-docfold",
    "readme_url": "https://raw.githubusercontent.com/uno-km/ameva-docfold/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TLP_LIBRARY",
      "readme_url": "https://raw.githubusercontent.com/uno-km/ameva-docfold/main/README.md"
    }
  },
  {
    "id": "AMEVA-Conductor",
    "name": "AMEVA-Conductor",
    "group": 3,
    "category": "TOOLING",
    "radius": 18.0,
    "description": "텔레그램 봇을 활용한 원격 VS Code 코파일럿 제어 및 시스템 관리 자동화 도구.",
    "tech_stack": [
      "Python",
      "Telegram Bot API",
      "VS Code Automation"
    ],
    "tags": [
      "mlops",
      "conductor",
      "copilot-control"
    ],
    "url": "https://github.com/uno-km/AMEVA-Conductor",
    "repo_url": "https://github.com/uno-km/AMEVA-Conductor",
    "docs_url": "https://github.com/uno-km/AMEVA-Conductor",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Conductor/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TOOLING",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Conductor/main/README.md"
    }
  },
  {
    "id": "AMEVA-WoL",
    "name": "AMEVA-WoL",
    "group": 3,
    "category": "TOOLING",
    "radius": 18.0,
    "description": "Telegram-controlled Wake-on-LAN gateway for remotely waking multiple PCs using simple device aliases.",
    "tech_stack": [
      "Python",
      "Wake-on-LAN",
      "Telegram Bot"
    ],
    "tags": [
      "wol",
      "remote-power",
      "telegram"
    ],
    "url": "https://github.com/uno-km/AMEVA-WoL",
    "repo_url": "https://github.com/uno-km/AMEVA-WoL",
    "docs_url": "https://github.com/uno-km/AMEVA-WoL",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-WoL/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TOOLING",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-WoL/main/README.md"
    }
  },
  {
    "id": "AMEVA-ViewPort",
    "name": "AMEVA-ViewPort",
    "group": 3,
    "category": "TOOLING",
    "radius": 18.0,
    "description": "A lightweight Windows launcher for AMEVA-ViewPort, designed to simplify the setup and startup of a local WebRTC-based screen sharing and control system.",
    "tech_stack": [
      "Python",
      "WebRTC",
      "Screen Sharing"
    ],
    "tags": [
      "ma",
      "viewport",
      "webrtc"
    ],
    "url": "https://github.com/uno-km/AMEVA-ViewPort",
    "repo_url": "https://github.com/uno-km/AMEVA-ViewPort",
    "docs_url": "https://github.com/uno-km/AMEVA-ViewPort",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-ViewPort/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TOOLING",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-ViewPort/main/README.md"
    }
  },
  {
    "id": "AMEVA-Civil",
    "name": "AMEVA-Civil",
    "group": 3,
    "category": "APPLICATION",
    "radius": 18.0,
    "description": "Civil agent society & governance simulation framework.",
    "tech_stack": [
      "TypeScript",
      "Node.js",
      "Agent Governance"
    ],
    "tags": [
      "civil-agent",
      "governance",
      "simulation"
    ],
    "url": "https://github.com/uno-km/AMEVA-Civil",
    "repo_url": "https://github.com/uno-km/AMEVA-Civil",
    "docs_url": "https://github.com/uno-km/AMEVA-Civil",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Civil/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "APPLICATION",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Civil/main/README.md"
    }
  },
  {
    "id": "AMEVA-LLM-Trainer",
    "name": "AMEVA-LLM-Trainer",
    "group": 3,
    "category": "TOOLING",
    "radius": 18.0,
    "description": "Headless API & Interactive CLI-driven On-premise LLM Fine-tuning Engine for AMEVA Swarm Architecture.",
    "tech_stack": [
      "Python",
      "PyTorch",
      "PEFT",
      "LoRA"
    ],
    "tags": [
      "llm",
      "fine-tuning",
      "swarm"
    ],
    "url": "https://github.com/uno-km/AMEVA-LLM-Trainer",
    "repo_url": "https://github.com/uno-km/AMEVA-LLM-Trainer",
    "docs_url": "https://github.com/uno-km/AMEVA-LLM-Trainer",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-LLM-Trainer/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TOOLING",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-LLM-Trainer/main/README.md"
    }
  },
  {
    "id": "AMEVA-STT-Trainer",
    "name": "AMEVA-STT-Trainer",
    "group": 3,
    "category": "TOOLING",
    "radius": 18.0,
    "description": "A Whisper-based Korean STT trainer featuring LoRA fine-tuning for high-accuracy speech recognition with minimal resources.",
    "tech_stack": [
      "Python",
      "Whisper",
      "LoRA",
      "Audio Pipeline"
    ],
    "tags": [
      "stt",
      "whisper",
      "korean-stt",
      "lora"
    ],
    "url": "https://github.com/uno-km/AMEVA-STT-Trainer",
    "repo_url": "https://github.com/uno-km/AMEVA-STT-Trainer",
    "docs_url": "https://github.com/uno-km/AMEVA-STT-Trainer",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-STT-Trainer/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TOOLING",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-STT-Trainer/main/README.md"
    }
  },
  {
    "id": "AMEVA-STT-Agent",
    "name": "AMEVA-STT-Agent",
    "group": 3,
    "category": "APPLICATION",
    "radius": 18.0,
    "description": "Autonomous speech-to-text processing edge agent for background transcription.",
    "tech_stack": [
      "Python",
      "STT Pipeline",
      "Voice Agent"
    ],
    "tags": [
      "stt",
      "voice-agent",
      "audio-stream"
    ],
    "url": "https://github.com/uno-km/AMEVA-STT-Agent",
    "repo_url": "https://github.com/uno-km/AMEVA-STT-Agent",
    "docs_url": "https://github.com/uno-km/AMEVA-STT-Agent",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-STT-Agent/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "APPLICATION",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-STT-Agent/main/README.md"
    }
  },
  {
    "id": "AMEVA-Doc-AI",
    "name": "AMEVA-Doc-AI",
    "group": 3,
    "category": "TOOLING",
    "radius": 18.0,
    "description": "Ollama 기반 오프라인 문서(HWP, Word, Excel 등) 요약 및 PDF 변환 도구.",
    "tech_stack": [
      "Python",
      "Ollama",
      "HWP Parser",
      "PDF Converter"
    ],
    "tags": [
      "llm",
      "doc-ai",
      "hwp",
      "pdf"
    ],
    "url": "https://github.com/uno-km/AMEVA-Doc-AI",
    "repo_url": "https://github.com/uno-km/AMEVA-Doc-AI",
    "docs_url": "https://github.com/uno-km/AMEVA-Doc-AI",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Doc-AI/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TOOLING",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Doc-AI/main/README.md"
    }
  },
  {
    "id": "AMEVA-Multi-CLI",
    "name": "AMEVA-Multi-CLI",
    "group": 3,
    "category": "TOOLING",
    "radius": 18.0,
    "description": "Unified multi-environment command-line management toolkit for distributed edge nodes.",
    "tech_stack": [
      "TypeScript",
      "Node.js",
      "CLI"
    ],
    "tags": [
      "cli",
      "typescript",
      "tooling"
    ],
    "url": "https://github.com/uno-km/AMEVA-Multi-CLI",
    "repo_url": "https://github.com/uno-km/AMEVA-Multi-CLI",
    "docs_url": "https://github.com/uno-km/AMEVA-Multi-CLI",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Multi-CLI/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TOOLING",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Multi-CLI/main/README.md"
    }
  },
  {
    "id": "AMEVA-Crawler",
    "name": "AMEVA-Crawler",
    "group": 3,
    "category": "TOOLING",
    "radius": 18.0,
    "description": "Resilient multi-agent web scraping and structured data extraction bot.",
    "tech_stack": [
      "Python",
      "Playwright",
      "BeautifulSoup4",
      "AsyncIO"
    ],
    "tags": [
      "crawler",
      "scraper",
      "data-extraction"
    ],
    "url": "https://github.com/uno-km/AMEVA-Crawler",
    "repo_url": "https://github.com/uno-km/AMEVA-Crawler",
    "docs_url": "https://github.com/uno-km/AMEVA-Crawler",
    "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Crawler/main/README.md",
    "metadata": {
      "depth": 3,
      "category": "TOOLING",
      "readme_url": "https://raw.githubusercontent.com/uno-km/AMEVA-Crawler/main/README.md"
    }
  },
  {
    "id": "ARM64-NEON-DotProd",
    "name": "ARM64 NEON vdotq_s32",
    "group": 4,
    "category": "CORE_ENGINE",
    "radius": 12.0,
    "description": "Vectorized assembly dot product kernel executing 16 ternary integer weights per cycle.",
    "tech_stack": [
      "ARMv8.2-A",
      "NEON",
      "DotProd",
      "vdotq_s32"
    ],
    "tags": [
      "neon",
      "dotprod",
      "assembly",
      "kernel"
    ],
    "url": "https://uno-km.vercel.app/",
    "repo_url": null,
    "docs_url": null,
    "readme_url": null,
    "metadata": {
      "depth": 4,
      "category": "CORE_ENGINE",
      "readme_url": null
    }
  },
  {
    "id": "LoRA-Adapter-Engine",
    "name": "LoRA Low-Rank Tuning",
    "group": 4,
    "category": "ALGORITHM",
    "radius": 12.0,
    "description": "Low-rank matrix decomposition adapter fine-tuning with SafeTensors weight checkpoints.",
    "tech_stack": [
      "SafeTensors",
      "LoRA",
      "Gradient Descent"
    ],
    "tags": [
      "lora",
      "fine-tuning",
      "adapter"
    ],
    "url": "https://uno-km.vercel.app/",
    "repo_url": null,
    "docs_url": null,
    "readme_url": null,
    "metadata": {
      "depth": 4,
      "category": "ALGORITHM",
      "readme_url": null
    }
  },
  {
    "id": "WGSL-Compute-Shaders",
    "name": "WGSL Tensor Shaders",
    "group": 4,
    "category": "CORE_ENGINE",
    "radius": 12.0,
    "description": "Parallel WebGPU compute pipelines with zero-allocation ring buffer pooling.",
    "tech_stack": [
      "WGSL",
      "WebGPU",
      "Buffer Pooling"
    ],
    "tags": [
      "wgsl",
      "shader",
      "gpu-compute"
    ],
    "url": "https://uno-km.vercel.app/",
    "repo_url": null,
    "docs_url": null,
    "readme_url": null,
    "metadata": {
      "depth": 4,
      "category": "CORE_ENGINE",
      "readme_url": null
    }
  },
  {
    "id": "Pure-Python-Diarization",
    "name": "128d X-Vector Diarization",
    "group": 4,
    "category": "ALGORITHM",
    "radius": 12.0,
    "description": "Pure Python K-Means clustering and cosine distance speaker separation.",
    "tech_stack": [
      "Python",
      "X-Vector",
      "K-Means"
    ],
    "tags": [
      "diarization",
      "clustering",
      "audio"
    ],
    "url": "https://uno-km.vercel.app/",
    "repo_url": null,
    "docs_url": null,
    "readme_url": null,
    "metadata": {
      "depth": 4,
      "category": "ALGORITHM",
      "readme_url": null
    }
  },
  {
    "id": "Deterministic-Risk-Core",
    "name": "0~100 Threat Scoring Core",
    "group": 4,
    "category": "ALGORITHM",
    "radius": 12.0,
    "description": "Multi-factor rule matrix assessing client anomaly without capturing user keystrokes.",
    "tech_stack": [
      "Rule Engine",
      "Entropy Matrix"
    ],
    "tags": [
      "risk-scoring",
      "entropy",
      "bot-rules"
    ],
    "url": "https://uno-km.vercel.app/",
    "repo_url": null,
    "docs_url": null,
    "readme_url": null,
    "metadata": {
      "depth": 4,
      "category": "ALGORITHM",
      "readme_url": null
    }
  }
];

export const SEED_EDGES = [
  {
    "source": "AMEVA-Universe",
    "target": "AMEVA-Foundation",
    "value": 5.0,
    "label": "Foundation Charter"
  },
  {
    "source": "AMEVA-Universe",
    "target": "Eunho-Kim-CV",
    "value": 5.0,
    "label": "Systems Architect"
  },
  {
    "source": "AMEVA-Universe",
    "target": "AMEVA-Portfolio",
    "value": 4.0,
    "label": "Portfolio Engine"
  },
  {
    "source": "AMEVA-Universe",
    "target": "Mobile-Bionic-AI",
    "value": 4.5,
    "label": "Ecosystem Pillar"
  },
  {
    "source": "AMEVA-Universe",
    "target": "WebGPU-Browser-AI",
    "value": 4.5,
    "label": "Ecosystem Pillar"
  },
  {
    "source": "AMEVA-Universe",
    "target": "Security-Observability-SRE",
    "value": 4.5,
    "label": "Ecosystem Pillar"
  },
  {
    "source": "AMEVA-Universe",
    "target": "Autonomous-Systems-Multi-Agent",
    "value": 4.5,
    "label": "Ecosystem Pillar"
  },
  {
    "source": "AMEVA-Universe",
    "target": "AI-Training-Data-Tooling",
    "value": 4.5,
    "label": "Ecosystem Pillar"
  },
  {
    "source": "Mobile-Bionic-AI",
    "target": "termux-bitnet",
    "value": 3.5,
    "label": "Flagship LLM"
  },
  {
    "source": "Mobile-Bionic-AI",
    "target": "termux-train",
    "value": 3.5,
    "label": "Tensor Autograd"
  },
  {
    "source": "Mobile-Bionic-AI",
    "target": "termux-stt",
    "value": 3.5,
    "label": "Voice STT"
  },
  {
    "source": "Mobile-Bionic-AI",
    "target": "termux-diffusion",
    "value": 3.5,
    "label": "Image Gen"
  },
  {
    "source": "Mobile-Bionic-AI",
    "target": "termux-playwright",
    "value": 3.5,
    "label": "Automation"
  },
  {
    "source": "Mobile-Bionic-AI",
    "target": "AMEVA-Edge-Agent",
    "value": 3.0,
    "label": "Mobile Voice Edge"
  },
  {
    "source": "WebGPU-Browser-AI",
    "target": "ameva-forge",
    "value": 3.5,
    "label": "WebGPU Autograd"
  },
  {
    "source": "WebGPU-Browser-AI",
    "target": "AMEVA-Workstation-Web",
    "value": 3.8,
    "label": "Primary Web App"
  },
  {
    "source": "WebGPU-Browser-AI",
    "target": "AMEVA-Workstation",
    "value": 3.5,
    "label": "Desktop Workspace"
  },
  {
    "source": "WebGPU-Browser-AI",
    "target": "AMEVA-Workstation-Market-Place",
    "value": 3.0,
    "label": "Model Marketplace"
  },
  {
    "source": "WebGPU-Browser-AI",
    "target": "AMEVA-Egde-Brower",
    "value": 2.8,
    "label": "Edge Browser"
  },
  {
    "source": "Security-Observability-SRE",
    "target": "ameva-sentinel",
    "value": 3.8,
    "label": "Security SDK"
  },
  {
    "source": "Security-Observability-SRE",
    "target": "AMEVA-Model-Nexus",
    "value": 3.5,
    "label": "SRE Inference Hub"
  },
  {
    "source": "Security-Observability-SRE",
    "target": "AMEVA-Benchmark-Suite",
    "value": 3.2,
    "label": "Hardware Benchmarks"
  },
  {
    "source": "Security-Observability-SRE",
    "target": "AMEVA-Data-Harvester",
    "value": 3.2,
    "label": "Resilient Forwarder"
  },
  {
    "source": "Security-Observability-SRE",
    "target": "AMEVA-Database",
    "value": 3.0,
    "label": "SQLite Inspector"
  },
  {
    "source": "Autonomous-Systems-Multi-Agent",
    "target": "AMEVA-Agent-Orchestra",
    "value": 3.8,
    "label": "Swarm Hierarchy"
  },
  {
    "source": "Autonomous-Systems-Multi-Agent",
    "target": "AMEVA-Window-Assistant",
    "value": 3.5,
    "label": "Windows Assistant"
  },
  {
    "source": "Autonomous-Systems-Multi-Agent",
    "target": "AMEVA-Dead-Internet-Threatre",
    "value": 3.5,
    "label": "Social Simulation"
  },
  {
    "source": "Autonomous-Systems-Multi-Agent",
    "target": "AMEVA-Dead-Internet-Threatre_v2",
    "value": 3.5,
    "label": "Vector Swarm v2"
  },
  {
    "source": "Autonomous-Systems-Multi-Agent",
    "target": "ameva-docfold",
    "value": 3.2,
    "label": "Semantic Protocol"
  },
  {
    "source": "Autonomous-Systems-Multi-Agent",
    "target": "AMEVA-Conductor",
    "value": 3.0,
    "label": "Telegram Copilot"
  },
  {
    "source": "Autonomous-Systems-Multi-Agent",
    "target": "AMEVA-WoL",
    "value": 2.8,
    "label": "Power Gateway"
  },
  {
    "source": "Autonomous-Systems-Multi-Agent",
    "target": "AMEVA-ViewPort",
    "value": 2.8,
    "label": "WebRTC Launcher"
  },
  {
    "source": "Autonomous-Systems-Multi-Agent",
    "target": "AMEVA-Civil",
    "value": 2.8,
    "label": "Civil Society"
  },
  {
    "source": "AI-Training-Data-Tooling",
    "target": "AMEVA-LLM-Trainer",
    "value": 3.5,
    "label": "LLM Fine-Tuning"
  },
  {
    "source": "AI-Training-Data-Tooling",
    "target": "AMEVA-STT-Trainer",
    "value": 3.5,
    "label": "Whisper LoRA"
  },
  {
    "source": "AI-Training-Data-Tooling",
    "target": "AMEVA-STT-Agent",
    "value": 3.2,
    "label": "Voice Transcriber"
  },
  {
    "source": "AI-Training-Data-Tooling",
    "target": "AMEVA-Doc-AI",
    "value": 3.2,
    "label": "HWP/Doc Parser"
  },
  {
    "source": "AI-Training-Data-Tooling",
    "target": "AMEVA-Multi-CLI",
    "value": 3.0,
    "label": "CLI Suite"
  },
  {
    "source": "AI-Training-Data-Tooling",
    "target": "AMEVA-Crawler",
    "value": 3.0,
    "label": "Web Harvester"
  },
  {
    "source": "AMEVA-Model-Nexus",
    "target": "termux-bitnet",
    "value": 2.5,
    "label": "Inference Servicing"
  },
  {
    "source": "AMEVA-Agent-Orchestra",
    "target": "AMEVA-Model-Nexus",
    "value": 2.5,
    "label": "GGUF Scheduling"
  },
  {
    "source": "AMEVA-LLM-Trainer",
    "target": "termux-train",
    "value": 2.5,
    "label": "LoRA Export"
  },
  {
    "source": "AMEVA-STT-Trainer",
    "target": "termux-stt",
    "value": 2.5,
    "label": "Whisper Weights"
  },
  {
    "source": "AMEVA-Workstation-Web",
    "target": "ameva-forge",
    "value": 2.8,
    "label": "WebGPU Acceleration"
  },
  {
    "source": "ameva-sentinel",
    "target": "AMEVA-Workstation-Web",
    "value": 2.5,
    "label": "Security Shield"
  },
  {
    "source": "termux-bitnet",
    "target": "ARM64-NEON-DotProd",
    "value": 2.0,
    "label": "SIMD Acceleration"
  },
  {
    "source": "termux-train",
    "target": "LoRA-Adapter-Engine",
    "value": 2.0,
    "label": "Adapter Tuning"
  },
  {
    "source": "ameva-forge",
    "target": "WGSL-Compute-Shaders",
    "value": 2.0,
    "label": "GPU Pipeline"
  },
  {
    "source": "termux-stt",
    "target": "Pure-Python-Diarization",
    "value": 2.0,
    "label": "Speaker Diarization"
  },
  {
    "source": "ameva-sentinel",
    "target": "Deterministic-Risk-Core",
    "value": 2.0,
    "label": "Risk Evaluation"
  }
];

async function ensureGraphSchemaAndSeed(sql) {
    if (isGraphSchemaReady) return;
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS graph_nodes (
                node_id VARCHAR(100) PRIMARY KEY,
                name VARCHAR(150) NOT NULL,
                category VARCHAR(50) NOT NULL,
                depth_level INT DEFAULT 1,
                parent_id VARCHAR(100),
                description TEXT,
                tech_stack TEXT[],
                tags TEXT[],
                node_radius NUMERIC(5,2) DEFAULT 16.0,
                node_weight NUMERIC(5,2) DEFAULT 1.0,
                group_color VARCHAR(30) DEFAULT '#7C3AED',
                pos_x NUMERIC(8,3) DEFAULT 0.0,
                pos_y NUMERIC(8,3) DEFAULT 0.0,
                pos_z NUMERIC(8,3) DEFAULT 0.0,
                orbit_phase NUMERIC(6,4) DEFAULT 0.0,
                orbit_freq NUMERIC(6,4) DEFAULT 0.002,
                repo_url TEXT,
                docs_url TEXT,
                readme_url TEXT,
                demo_url TEXT,
                pypi_package VARCHAR(100),
                npm_package VARCHAR(100),
                tour_order INT,
                audio_narrative TEXT,
                is_active BOOLEAN DEFAULT TRUE,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;

        await sql`
            CREATE TABLE IF NOT EXISTS graph_edges (
                edge_id BIGSERIAL PRIMARY KEY,
                source_node_id VARCHAR(100) NOT NULL,
                target_node_id VARCHAR(100) NOT NULL,
                relation_type VARCHAR(50) DEFAULT 'HIERARCHY',
                edge_weight NUMERIC(4,2) DEFAULT 1.0,
                is_bidirectional BOOLEAN DEFAULT FALSE,
                label VARCHAR(100),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                CONSTRAINT uq_graph_edge_link UNIQUE (source_node_id, target_node_id, relation_type)
            );
        `;

        for (const n of SEED_NODES) {
            await sql`
                INSERT INTO graph_nodes (
                    node_id, name, category, depth_level, description,
                    tech_stack, tags, node_radius, node_weight, group_color,
                    repo_url, docs_url, readme_url
                ) VALUES (
                    ${n.id}, ${n.name}, ${n.category || 'GENERAL'}, ${n.group || 1}, ${n.description || ''},
                    ${n.tech_stack || []}, ${n.tags || []}, ${n.radius || 16.0}, 1.0, '#3ECF8E',
                    ${n.repo_url || ''}, ${n.docs_url || ''}, ${n.readme_url || ''}
                ) ON CONFLICT (node_id) DO UPDATE SET
                    name = EXCLUDED.name,
                    category = EXCLUDED.category,
                    depth_level = EXCLUDED.depth_level,
                    description = EXCLUDED.description,
                    tech_stack = EXCLUDED.tech_stack,
                    tags = EXCLUDED.tags,
                    repo_url = EXCLUDED.repo_url,
                    docs_url = EXCLUDED.docs_url,
                    readme_url = EXCLUDED.readme_url,
                    updated_at = CURRENT_TIMESTAMP;
            `;
        }

        for (const e of SEED_EDGES) {
            await sql`
                INSERT INTO graph_edges (
                    source_node_id, target_node_id, relation_type, edge_weight, label
                ) VALUES (
                    ${e.source}, ${e.target}, ${e.type || 'HIERARCHY'}, ${e.value || 1.0}, ${e.label || ''}
                ) ON CONFLICT DO NOTHING;
            `;
        }

        isGraphSchemaReady = true;
    } catch (err) {
        console.warn('Knowledge Graph Schema Init Warning:', err.message);
    }
}

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || process.env.POSTGRES_URL;

    if (!dbUrl) {
        return res.status(200).json({
            ok: true,
            source: 'embedded_fallback',
            total_nodes: SEED_NODES.length,
            total_edges: SEED_EDGES.length,
            data: {
                nodes: SEED_NODES,
                links: SEED_EDGES
            }
        });
    }

    try {
        const sql = neon(dbUrl);
        await ensureGraphSchemaAndSeed(sql);

        const rawNodes = await sql`
            SELECT node_id as id, name, category, depth_level as "group", description,
                   tech_stack, tags, node_radius as radius, repo_url, docs_url, readme_url
            FROM graph_nodes
            WHERE is_active = true
            ORDER BY depth_level ASC;
        `;

        const rawEdges = await sql`
            SELECT source_node_id as source, target_node_id as target, edge_weight as value, relation_type as type, label
            FROM graph_edges;
        `;

        const formattedNodes = rawNodes.map(n => ({
            ...n,
            radius: parseFloat(n.radius) || 16.0,
            url: n.docs_url || n.repo_url,
            metadata: {
                depth: n.group,
                category: n.category,
                readme_url: n.readme_url
            }
        }));

        const formattedLinks = rawEdges.map(e => ({
            source: e.source,
            target: e.target,
            value: parseFloat(e.value) || 1.0,
            type: e.type,
            label: e.label
        }));

        res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
        return res.status(200).json({
            ok: true,
            source: 'neon_postgresql',
            total_nodes: formattedNodes.length,
            total_edges: formattedLinks.length,
            data: {
                nodes: formattedNodes,
                links: formattedLinks
            }
        });
    } catch (error) {
        console.error('Neon DB Graph API Error:', error);
        return res.status(500).json({ ok: false, error: error.message });
    }
}
