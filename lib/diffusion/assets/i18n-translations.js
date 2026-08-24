// AMEVA Auto-Generated i18n Dictionary
if (window.i18nManager) {
  window.i18nManager.registerTranslations({
  "en": {
    "common": {
      "brand": "Termux-Diffusion",
      "releaseTag": "v1.0.0 (Bionic ARM64 Native Runtime)",
      "pypiBtn": "PyPI (pip)",
      "npmBtn": "npm (Node.js)",
      "githubBtn": "GitHub",
      "footerText": "© 2026 AMEVA Open-Source Foundation. Released under the Apache-2.0 License.",
      "nav": {
        "overview": "Overview",
        "reference": "Official Reference",
        "ecosystem": "AMEVA Ecosystem",
        "aiSpecs": "AI Agent Protocols",
        "home": "Home / Architecture",
        "installation": "Installation Guide",
        "quickstart": "Quickstart & Recipes",
        "apiReference": "API Reference",
        "benchmarks": "Benchmarks & Profiling",
        "advancedParams": "Advanced Parameters",
        "versions": "Version Archive"
      }
    },
    "home": {
      "title": "Termux-Diffusion",
      "subtitle": "Non-Root On-Device Stable Diffusion Image Generation Framework for Android Termux",
      "quickInstallTitle": "1-Line Quick Installation",
      "quickInstallDesc": "Install the official package directly into your runtime:",
      "challengeTitle": "The Engineering Challenge",
      "challengeText": "Running heavy image generation models usually requires cloud GPUs or rooted mobile environments with custom Linux kernels.",
      "breakthroughTitle": "The Architectural Breakthrough",
      "breakthroughText": "Compiles C++ NEON kernels directly to Android Bionic libc, running Stable Diffusion v1.5 / Turbo entirely locally within 4GB RAM.",
      "featuresTitle": "Key Capabilities & Built-in Hardening",
      "matrixTitle": "Supported Compute Kernels & Operations",
      "matrixCol1": "Subsystem Category",
      "matrixCol2": "Operations & Kernels",
      "matrixCol3": "Status",
      "codeExampleTitle": "Canonical Usage Example",
      "nextStepsTitle": "Getting Started & Deep Guides",
      "linkInstall": "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)",
      "linkQuickstart": "Quickstart Recipes & Common Execution Patterns",
      "linkApi": "100% Full API Reference & Struct Definitions",
      "features": {
        "0": {
          "title": "Deterministic 0-Drift Output",
          "desc": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware."
        },
        "1": {
          "title": "Zero Cloud Egress Architecture",
          "desc": "Operates 100% on the local client without external network telemetry leaks."
        },
        "2": {
          "title": "Memory Leakage Protection",
          "desc": "Weakref lifetime management preventing GPU VRAM / system RAM leaks."
        }
      }
    }
  },
  "ko": {
    "common": {
      "brand": "Termux-Diffusion",
      "releaseTag": "v1.0.0 (Bionic ARM64 Native Runtime)",
      "pypiBtn": "PyPI 패키지",
      "npmBtn": "npm 패키지",
      "githubBtn": "GitHub 저장소",
      "footerText": "© 2026 AMEVA 오픈소스 재단. Apache-2.0 라이선스로 배포됨.",
      "nav": {
        "overview": "개요",
        "reference": "공식 레퍼런스",
        "ecosystem": "AMEVA 생태계",
        "aiSpecs": "AI 에이전트 프로토콜",
        "home": "홈 / 아키텍처",
        "installation": "설치 가이드",
        "quickstart": "퀵스타트 & 레시피",
        "apiReference": "전체 API 명세",
        "benchmarks": "벤치마크 & 하드웨어",
        "advancedParams": "고급 파라미터",
        "versions": "버전 아카이브"
      }
    },
    "home": {
      "title": "Termux-Diffusion",
      "subtitle": "안드로이드 Termux 환경을 위한 비루팅 온디바이스 Stable Diffusion AI 이미지 생성 프레임워크",
      "quickInstallTitle": "1줄 빠른 설치",
      "quickInstallDesc": "환경에 맞는 공식 패키지를 즉시 설치하세요:",
      "challengeTitle": "엔지니어링 도전 과제",
      "challengeText": "기존 AI 이미지 생성 모델은 고비용 클라우드 GPU나 루팅된 리눅스 커널 환경을 필수로 요구했습니다.",
      "breakthroughTitle": "아키텍처 혁신 및 해결책",
      "breakthroughText": "C++ NEON 커널을 안드로이드 Bionic libc에 직접 빌드하여 4GB 메모리 환경에서도 루팅 없이 로컬 이미지 생성을 완벽히 수행합니다.",
      "featuresTitle": "핵심 역량 및 빌트인 보안/안정성",
      "matrixTitle": "지원 연산 커널 및 모듈 매트릭스",
      "matrixCol1": "서브시스템 분류",
      "matrixCol2": "지원 연산 및 커널",
      "matrixCol3": "상태",
      "codeExampleTitle": "정석 사용법 코드 예제",
      "nextStepsTitle": "시작하기 & 심층 가이드",
      "linkInstall": "상세 설치 가이드 (하드웨어 의존성, Termux 설정, WebGPU 플래그)",
      "linkQuickstart": "퀵스타트 레시피 및 주요 실행 패턴",
      "linkApi": "100% 전체 API 명세 및 구조체 정의",
      "features": {
        "0": {
          "title": "결정론적 0% 오차 연산",
          "desc": "이기종 하드웨어 간 비트 단위로 동일한 결정론적 수치 정밀도를 보장합니다."
        },
        "1": {
          "title": "서버 비용 0원 완전 온디바이스",
          "desc": "외부 네트워크 통신 없이 100% 로컬 클라이언트에서 독립 구동됩니다."
        },
        "2": {
          "title": "자동 메모리 버퍼 풀링 보호",
          "desc": "Weakref 수명 주기 관리로 메모리 누수를 원천 차단합니다."
        }
      }
    }
  },
  "ja": {
    "common": {
      "brand": "Termux-Diffusion",
      "releaseTag": "v1.0.0 (Bionic ARM64 Native Runtime)",
      "pypiBtn": "PyPIパッケージ",
      "npmBtn": "npmパッケージ",
      "githubBtn": "GitHub",
      "footerText": "© 2026 AMEVA Open-Source Foundation. Apache-2.0 ライセンスの下で公開。",
      "nav": {
        "overview": "概要",
        "reference": "公式リファレンス",
        "ecosystem": "AMEVA エコシステム",
        "aiSpecs": "AIエージェント仕様",
        "home": "ホーム / アーキテクチャ",
        "installation": "インストールガイド",
        "quickstart": "クイックスタート",
        "apiReference": "APIリファレンス",
        "benchmarks": "ベンチマーク",
        "advancedParams": "詳細パラメータ",
        "versions": "バージョン履歴"
      }
    },
    "home": {
      "title": "Termux-Diffusion",
      "subtitle": "Non-Root On-Device Stable Diffusion Image Generation Framework for Android Termux",
      "quickInstallTitle": "1行クイックインストール",
      "quickInstallDesc": "ランタイムに公式パッケージを直接インストールします:",
      "challengeTitle": "技術的課題",
      "challengeText": "Running heavy image generation models usually requires cloud GPUs or rooted mobile environments with custom Linux kernels.",
      "breakthroughTitle": "アーキテクチャのブレークスルー",
      "breakthroughText": "Compiles C++ NEON kernels directly to Android Bionic libc, running Stable Diffusion v1.5 / Turbo entirely locally within 4GB RAM.",
      "featuresTitle": "コア機能と安定性",
      "matrixTitle": "サポートされている演算とカーネル",
      "matrixCol1": "サブシステム区分",
      "matrixCol2": "サポート演算",
      "matrixCol3": "状態",
      "codeExampleTitle": "標準的なコード例",
      "nextStepsTitle": "はじめに",
      "linkInstall": "詳細インストールガイド",
      "linkQuickstart": "クイックスタートレシピ",
      "linkApi": "API仕様書"
    }
  },
  "zh": {
    "common": {
      "brand": "Termux-Diffusion",
      "releaseTag": "v1.0.0 (Bionic ARM64 Native Runtime)",
      "pypiBtn": "PyPI (pip)",
      "npmBtn": "npm (Node.js)",
      "githubBtn": "GitHub",
      "footerText": "© 2026 AMEVA 开源基金会。在 Apache-2.0 许可下发布。",
      "nav": {
        "overview": "概述",
        "reference": "官方参考",
        "ecosystem": "AMEVA 生态系统",
        "aiSpecs": "AI 协议",
        "home": "主页 / 架构",
        "installation": "安装指南",
        "quickstart": "快速入门",
        "apiReference": "API 参考",
        "benchmarks": "基准测试",
        "advancedParams": "高级参数",
        "versions": "版本归档"
      }
    },
    "home": {
      "title": "Termux-Diffusion",
      "subtitle": "Non-Root On-Device Stable Diffusion Image Generation Framework for Android Termux",
      "quickInstallTitle": "一键快速安装",
      "quickInstallDesc": "直接将官方包安装到您的环境中:",
      "challengeTitle": "工程挑战",
      "challengeText": "Running heavy image generation models usually requires cloud GPUs or rooted mobile environments with custom Linux kernels.",
      "breakthroughTitle": "架构突破",
      "breakthroughText": "Compiles C++ NEON kernels directly to Android Bionic libc, running Stable Diffusion v1.5 / Turbo entirely locally within 4GB RAM.",
      "featuresTitle": "核心特性与加固",
      "matrixTitle": "支持的计算内核与操作",
      "matrixCol1": "分类",
      "matrixCol2": "操作与模块",
      "matrixCol3": "状态",
      "codeExampleTitle": "标准代码示例",
      "nextStepsTitle": "开始使用",
      "linkInstall": "详细安装指南",
      "linkQuickstart": "快速入门方案",
      "linkApi": "完整 API 规范"
    }
  },
  "es": {
    "common": {
      "brand": "Termux-Diffusion",
      "releaseTag": "v1.0.0 (Bionic ARM64 Native Runtime)",
      "pypiBtn": "PyPI (pip)",
      "npmBtn": "npm (Node.js)",
      "githubBtn": "GitHub",
      "footerText": "© 2026 Fundación AMEVA. Licencia Apache-2.0.",
      "nav": {
        "overview": "Visión General",
        "reference": "Referencia Oficial",
        "ecosystem": "Ecosistema AMEVA",
        "aiSpecs": "Protocolos de IA",
        "home": "Inicio / Arquitectura",
        "installation": "Guía de Instalación",
        "quickstart": "Inicio Rápido",
        "apiReference": "Referencia de API",
        "benchmarks": "Evaluaciones de Rendimiento",
        "advancedParams": "Parámetros Avanzados",
        "versions": "Archivo de Versiones"
      }
    },
    "home": {
      "title": "Termux-Diffusion",
      "subtitle": "Non-Root On-Device Stable Diffusion Image Generation Framework for Android Termux",
      "quickInstallTitle": "Instalación Rápida en 1 Línea",
      "quickInstallDesc": "Instale el paquete oficial directamente en su entorno:",
      "challengeTitle": "El Desafío de Ingeniería",
      "challengeText": "Running heavy image generation models usually requires cloud GPUs or rooted mobile environments with custom Linux kernels.",
      "breakthroughTitle": "El Avance Arquitectónico",
      "breakthroughText": "Compiles C++ NEON kernels directly to Android Bionic libc, running Stable Diffusion v1.5 / Turbo entirely locally within 4GB RAM.",
      "featuresTitle": "Capacidades Clave y Seguridad",
      "matrixTitle": "Operaciones y Núcleos Soportados",
      "matrixCol1": "Categoría",
      "matrixCol2": "Operaciones",
      "matrixCol3": "Estado",
      "codeExampleTitle": "Ejemplo de Uso Estándar",
      "nextStepsTitle": "Primeros Pasos",
      "linkInstall": "Guía Detallada de Instalación",
      "linkQuickstart": "Recetas de Inicio Rápido",
      "linkApi": "Especificación de API"
    }
  },
  "de": {
    "common": {
      "brand": "Termux-Diffusion",
      "releaseTag": "v1.0.0 (Bionic ARM64 Native Runtime)",
      "pypiBtn": "PyPI (pip)",
      "npmBtn": "npm (Node.js)",
      "githubBtn": "GitHub",
      "footerText": "© 2026 AMEVA Open-Source Foundation. Lizenziert unter Apache-2.0.",
      "nav": {
        "overview": "Überblick",
        "reference": "Offizielle Referenz",
        "ecosystem": "AMEVA Ökosystem",
        "aiSpecs": "KI-Agenten-Protokolle",
        "home": "Startseite / Architektur",
        "installation": "Installationsanleitung",
        "quickstart": "Schnellstart & Rezepte",
        "apiReference": "API-Referenz",
        "benchmarks": "Benchmarks & Profiling",
        "advancedParams": "Erweiterte Parameter",
        "versions": "Versionsarchiv"
      }
    },
    "home": {
      "title": "Termux-Diffusion",
      "subtitle": "Non-Root On-Device Stable Diffusion Image Generation Framework for Android Termux",
      "quickInstallTitle": "1-Zeilen-Schnellinstallation",
      "quickInstallDesc": "Installieren Sie das offizielle Paket direkt in Ihre Laufzeitumgebung:",
      "challengeTitle": "Die Technische Herausforderung",
      "challengeText": "Running heavy image generation models usually requires cloud GPUs or rooted mobile environments with custom Linux kernels.",
      "breakthroughTitle": "Der Architektonische Durchbruch",
      "breakthroughText": "Compiles C++ NEON kernels directly to Android Bionic libc, running Stable Diffusion v1.5 / Turbo entirely locally within 4GB RAM.",
      "featuresTitle": "Kernfunktionen & Stabilität",
      "matrixTitle": "Unterstützte Rechenkerne & Operationen",
      "matrixCol1": "Kategorie",
      "matrixCol2": "Operationen",
      "matrixCol3": "Status",
      "codeExampleTitle": "Standard-Codebeispiel",
      "nextStepsTitle": "Erste Schritte",
      "linkInstall": "Detaillierte Installationsanleitung",
      "linkQuickstart": "Schnellstartanleitung",
      "linkApi": "API-Spezifikation"
    }
  }
});
};
