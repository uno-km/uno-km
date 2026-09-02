/**
 * AMEVA Ecosystem - Master Universal Multilingual (i18n) Core Engine (SSOT v5.0)
 * 100% Deterministic Immutable DOM Multi-Pass Engine across 13 Languages with Complete Ecosystem Phrase Coverage.
 */

(function(global) {
  'use strict';

  const SUPPORTED_LANGUAGES = {
  "en": {
    "name": "English",
    "native": "English",
    "flag": "🇺🇸",
    "dir": "ltr"
  },
  "ko": {
    "name": "Korean",
    "native": "한국어",
    "flag": "🇰🇷",
    "dir": "ltr"
  },
  "ja": {
    "name": "Japanese",
    "native": "日本語",
    "flag": "🇯🇵",
    "dir": "ltr"
  },
  "zh": {
    "name": "Chinese",
    "native": "简体中文",
    "flag": "🇨🇳",
    "dir": "ltr"
  },
  "ar": {
    "name": "Arabic",
    "native": "العربية",
    "flag": "🇸🇦",
    "dir": "rtl"
  },
  "fr": {
    "name": "French",
    "native": "Français",
    "flag": "🇫🇷",
    "dir": "ltr"
  },
  "de": {
    "name": "German",
    "native": "Deutsch",
    "flag": "🇩🇪",
    "dir": "ltr"
  },
  "es": {
    "name": "Spanish",
    "native": "Español",
    "flag": "🇪🇸",
    "dir": "ltr"
  },
  "hi": {
    "name": "Hindi",
    "native": "हिन्दी",
    "flag": "🇮🇳",
    "dir": "ltr"
  },
  "ru": {
    "name": "Russian",
    "native": "Русский",
    "flag": "🇷🇺",
    "dir": "ltr"
  },
  "vi": {
    "name": "Vietnamese",
    "native": "Tiếng Việt",
    "flag": "🇻🇳",
    "dir": "ltr"
  },
  "pl": {
    "name": "Polish",
    "native": "Polski",
    "flag": "🇵🇱",
    "dir": "ltr"
  },
  "la": {
    "name": "Latin",
    "native": "Latina",
    "flag": "🏛️",
    "dir": "ltr"
  }
};
  const DEFAULT_LANG = 'en';
  const STORAGE_KEYS = ['ameva_global_lang', 'uno_km_lang', 'ameva_lib_doc_lang', 'forge_lang'];

  const PROTECTED_PHRASES = new Set(["AMEVA-Vulkan-Runtime", "llms.txt (AI Fast Context)", "Termux-BitNet", "Termux-Train (LoRA Engine)", "Termux-STT (Voice STT)", "Node.js (npm)", "AMEVA-Forge", "llms-full.txt", "Termux-AIChain (Zero-Dep Agent)", "Termux-Vision (CV & VLM)", "Infra-Index", "Termux-Train", "Termux-TTS", "AMEVA-Sentinel (Security SDK)", "Termux-TTS (Voice Synthesis)", "Termux-Diffusion (Image AI)", "AMEVA-Sentinel", "AMEVA-Vulkan-Runtime (Vulkan HAL)", "Termux-AIChain", "Termux-Vision", "AMEVA-MCP-Hub", "Termux-Playwright", "Termux-BitNet (1.58-bit LLM)", "llms.txt", "sitemap.xml (Sitemap)", "Termux-LlamaCpp (GGUF Runtime)", "AMEVA-Forge (WebGPU Autograd)", "llms-full.txt (Full Spec)", "Python (pip)", "sitemap.xml", "Termux-STT", "robots.txt", "npm", "Termux-Diffusion", "AMEVA-MCP-Hub (Polyglot WASM)", "pip", "robots.txt (AI Crawlers)", "AMEVA Workstation (Web App)", "pip / npm", "Termux-LlamaCpp", "Termux-Playwright (Automation)"]);
  const PHRASES_DB = {
  "Foundation": {
    "ko": "재단 소개",
    "ja": "財団紹介",
    "zh": "基金会介绍",
    "vi": "Giới thiệu quỹ",
    "fr": "Présentation Fondation",
    "de": "Über die Stiftung",
    "es": "Sobre la Fundación",
    "ru": "О Фонде",
    "ar": "عن المؤسسة",
    "hi": "फाउंडेशन परिचय",
    "pl": "O Fundacji",
    "la": "De Fundatione",
    "en": "Foundation"
  },
  "재단 소개": {
    "ko": "재단 소개",
    "ja": "財団紹介",
    "zh": "基金会介绍",
    "vi": "Giới thiệu quỹ",
    "fr": "Présentation Fondation",
    "de": "Über die Stiftung",
    "es": "Sobre la Fundación",
    "ru": "О Фонде",
    "ar": "عن المؤسسة",
    "hi": "फाउंडेशन परिचय",
    "pl": "O Fundacji",
    "la": "De Fundatione",
    "en": "재단 소개"
  },
  "GitHub": {
    "ko": "깃허브",
    "ja": "GitHub",
    "zh": "GitHub",
    "vi": "GitHub",
    "fr": "GitHub",
    "de": "GitHub",
    "es": "GitHub",
    "ru": "GitHub",
    "ar": "GitHub",
    "hi": "GitHub",
    "pl": "GitHub",
    "la": "GitHub",
    "en": "GitHub"
  },
  "깃허브": {
    "ko": "깃허브",
    "ja": "GitHub",
    "zh": "GitHub",
    "vi": "GitHub",
    "fr": "GitHub",
    "de": "GitHub",
    "es": "GitHub",
    "ru": "GitHub",
    "ar": "GitHub",
    "hi": "GitHub",
    "pl": "GitHub",
    "la": "GitHub",
    "en": "깃허브"
  },
  "Sponsor": {
    "ko": "스폰서",
    "ja": "スポンサー",
    "zh": "赞助",
    "vi": "Tài trợ",
    "fr": "Sponsoriser",
    "de": "Sponsorn",
    "es": "Patrocinar",
    "ru": "Спонсор",
    "ar": "رعاية",
    "hi": "प्रायोजक",
    "pl": "Sponsoruj",
    "la": "Fautor",
    "en": "Sponsor"
  },
  "스폰서": {
    "ko": "스폰서",
    "ja": "スポンサー",
    "zh": "赞助",
    "vi": "Tài trợ",
    "fr": "Sponsoriser",
    "de": "Sponsorn",
    "es": "Patrocinar",
    "ru": "Спонсор",
    "ar": "رعاية",
    "hi": "प्रायोजक",
    "pl": "Sponsoruj",
    "la": "Fautor",
    "en": "스폰서"
  },
  "Open Collective": {
    "ko": "오픈 컬렉티브",
    "ja": "オープンコレクティブ",
    "zh": "Open Collective",
    "vi": "Open Collective",
    "fr": "Open Collective",
    "de": "Open Collective",
    "es": "Open Collective",
    "ru": "Open Collective",
    "ar": "Open Collective",
    "hi": "Open Collective",
    "pl": "Open Collective",
    "la": "Open Collective",
    "en": "Open Collective"
  },
  "오픈 컬렉티브": {
    "ko": "오픈 컬렉티브",
    "ja": "オープンコレクティブ",
    "zh": "Open Collective",
    "vi": "Open Collective",
    "fr": "Open Collective",
    "de": "Open Collective",
    "es": "Open Collective",
    "ru": "Open Collective",
    "ar": "Open Collective",
    "hi": "Open Collective",
    "pl": "Open Collective",
    "la": "Open Collective",
    "en": "오픈 컬렉티브"
  },
  "Founder CV": {
    "ko": "창립자 소개",
    "ja": "創設者紹介",
    "zh": "创始人简历",
    "vi": "Hồ sơ sáng lập",
    "fr": "CV Fondateur",
    "de": "Gründer-Profil",
    "es": "CV del Fundador",
    "ru": "Основатель",
    "ar": "سيرة المؤسس",
    "hi": "संस्थापक सीवी",
    "pl": "CV Założyciela",
    "la": "Curriculum Vitae",
    "en": "Founder CV"
  },
  "창립자 소개": {
    "ko": "창립자 소개",
    "ja": "創設者紹介",
    "zh": "创始人简历",
    "vi": "Hồ sơ sáng lập",
    "fr": "CV Fondateur",
    "de": "Gründer-Profil",
    "es": "CV del Fundador",
    "ru": "Основатель",
    "ar": "سيرة المؤسس",
    "hi": "संस्थापक सीवी",
    "pl": "CV Założyciela",
    "la": "Curriculum Vitae",
    "en": "창립자 소개"
  },
  "Blog": {
    "ko": "블로그",
    "ja": "ブログ",
    "zh": "博客",
    "vi": "Blog",
    "fr": "Blog",
    "de": "Blog",
    "es": "Blog",
    "ru": "Блог",
    "ar": "المدونة",
    "hi": "ब्लॉग",
    "pl": "Blog",
    "la": "Ephemeris",
    "en": "Blog"
  },
  "블로그": {
    "ko": "블로그",
    "ja": "ブログ",
    "zh": "博客",
    "vi": "Blog",
    "fr": "Blog",
    "de": "Blog",
    "es": "Blog",
    "ru": "Блог",
    "ar": "المدونة",
    "hi": "ब्लॉग",
    "pl": "Blog",
    "la": "Ephemeris",
    "en": "블로그"
  },
  "Document Navigation": {
    "ko": "문서 상세 목차",
    "ja": "ドキュメント目次",
    "zh": "文档导航目录",
    "vi": "Điều hướng tài liệu",
    "en": "Document Navigation",
    "ar": "Document Navigation",
    "fr": "Document Navigation",
    "de": "Document Navigation",
    "es": "Document Navigation",
    "hi": "Document Navigation",
    "ru": "Document Navigation",
    "pl": "Document Navigation",
    "la": "Document Navigation"
  },
  "Foundation Info": {
    "ko": "재단 소개 (AOSF)",
    "ja": "財団情報",
    "zh": "基金会概览",
    "vi": "Thông tin quỹ",
    "en": "Foundation Info",
    "ar": "Foundation Info",
    "fr": "Foundation Info",
    "de": "Foundation Info",
    "es": "Foundation Info",
    "hi": "Foundation Info",
    "ru": "Foundation Info",
    "pl": "Foundation Info",
    "la": "Foundation Info"
  },
  "Home / Architecture": {
    "ko": "홈 / 아키텍처",
    "ja": "ホーム / アーキテクチャ",
    "zh": "首页 / 架构设计",
    "vi": "Trang chủ / Kiến trúc",
    "en": "Home / Architecture",
    "ar": "Home / Architecture",
    "fr": "Home / Architecture",
    "de": "Home / Architecture",
    "es": "Home / Architecture",
    "hi": "Home / Architecture",
    "ru": "Home / Architecture",
    "pl": "Home / Architecture",
    "la": "Home / Architecture"
  },
  "Installation Guide": {
    "ko": "설치 가이드",
    "ja": "インストールガイド",
    "zh": "安装部署指南",
    "vi": "Hướng dẫn cài đặt",
    "en": "Installation Guide",
    "ar": "Installation Guide",
    "fr": "Installation Guide",
    "de": "Installation Guide",
    "es": "Installation Guide",
    "hi": "Installation Guide",
    "ru": "Installation Guide",
    "pl": "Installation Guide",
    "la": "Installation Guide"
  },
  "Quickstart & Recipes": {
    "ko": "퀵스타트 & 실행 레시피",
    "ja": "クイックスタート＆レシピ",
    "zh": "快速上手与示例",
    "vi": "Bắt đầu nhanh & Công thức",
    "en": "Quickstart & Recipes",
    "ar": "Quickstart & Recipes",
    "fr": "Quickstart & Recipes",
    "de": "Quickstart & Recipes",
    "es": "Quickstart & Recipes",
    "hi": "Quickstart & Recipes",
    "ru": "Quickstart & Recipes",
    "pl": "Quickstart & Recipes",
    "la": "Quickstart & Recipes"
  },
  "API Reference": {
    "ko": "전체 API 명세서",
    "ja": "APIリファレンス",
    "zh": "完整 API 规范",
    "vi": "Tài liệu tham khảo API",
    "en": "API Reference",
    "ar": "API Reference",
    "fr": "API Reference",
    "de": "API Reference",
    "es": "API Reference",
    "hi": "API Reference",
    "ru": "API Reference",
    "pl": "API Reference",
    "la": "API Reference"
  },
  "Pretrained Checkpoints": {
    "ko": "사전학습 체크포인트",
    "ja": "事前学習済みチェックポイント",
    "zh": "预训练模型检查点",
    "vi": "Điểm kiểm tra được đào tạo trước",
    "en": "Pretrained Checkpoints",
    "ar": "Pretrained Checkpoints",
    "fr": "Pretrained Checkpoints",
    "de": "Pretrained Checkpoints",
    "es": "Pretrained Checkpoints",
    "hi": "Pretrained Checkpoints",
    "ru": "Pretrained Checkpoints",
    "pl": "Pretrained Checkpoints",
    "la": "Pretrained Checkpoints"
  },
  "Model Checkpoints": {
    "ko": "모델 체크포인트",
    "ja": "モデルチェックポイント",
    "zh": "模型检查点",
    "vi": "Điểm kiểm tra mô hình",
    "en": "Model Checkpoints",
    "ar": "Model Checkpoints",
    "fr": "Model Checkpoints",
    "de": "Model Checkpoints",
    "es": "Model Checkpoints",
    "hi": "Model Checkpoints",
    "ru": "Model Checkpoints",
    "pl": "Model Checkpoints",
    "la": "Model Checkpoints"
  },
  "GGUF Quant Models": {
    "ko": "GGUF 양자화 모델 허브",
    "ja": "GGUF量子化モデルハブ",
    "zh": "GGUF 量化模型中心",
    "vi": "Mô hình lượng tử GGUF",
    "en": "GGUF Quant Models",
    "ar": "GGUF Quant Models",
    "fr": "GGUF Quant Models",
    "de": "GGUF Quant Models",
    "es": "GGUF Quant Models",
    "hi": "GGUF Quant Models",
    "ru": "GGUF Quant Models",
    "pl": "GGUF Quant Models",
    "la": "GGUF Quant Models"
  },
  "Models Directory": {
    "ko": "모델 디렉터리",
    "ja": "モデルディレクトリ",
    "zh": "模型索引目录",
    "vi": "Thư mục mô hình",
    "en": "Models Directory",
    "ar": "Models Directory",
    "fr": "Models Directory",
    "de": "Models Directory",
    "es": "Models Directory",
    "hi": "Models Directory",
    "ru": "Models Directory",
    "pl": "Models Directory",
    "la": "Models Directory"
  },
  "Benchmarks & Profiling": {
    "ko": "벤치마크 & 하드웨어 프로파일링",
    "ja": "ベンチマーク＆プロファイリング",
    "zh": "基准测试与性能分析",
    "vi": "Đo điểm chuẩn & Phân tích",
    "en": "Benchmarks & Profiling",
    "ar": "Benchmarks & Profiling",
    "fr": "Benchmarks & Profiling",
    "de": "Benchmarks & Profiling",
    "es": "Benchmarks & Profiling",
    "hi": "Benchmarks & Profiling",
    "ru": "Benchmarks & Profiling",
    "pl": "Benchmarks & Profiling",
    "la": "Benchmarks & Profiling"
  },
  "Advanced Parameters": {
    "ko": "고급 파라미터 제어",
    "ja": "高度なパラメータ制御",
    "zh": "高级参数与内核调优",
    "vi": "Tham số nâng cao",
    "en": "Advanced Parameters",
    "ar": "Advanced Parameters",
    "fr": "Advanced Parameters",
    "de": "Advanced Parameters",
    "es": "Advanced Parameters",
    "hi": "Advanced Parameters",
    "ru": "Advanced Parameters",
    "pl": "Advanced Parameters",
    "la": "Advanced Parameters"
  },
  "Version Archive": {
    "ko": "버전 릴리즈 아카이브",
    "ja": "バージョンアーカイブ",
    "zh": "版本发布存档",
    "vi": "Kho lưu trữ phiên bản",
    "en": "Version Archive",
    "ar": "Version Archive",
    "fr": "Version Archive",
    "de": "Version Archive",
    "es": "Version Archive",
    "hi": "Version Archive",
    "ru": "Version Archive",
    "pl": "Version Archive",
    "la": "Version Archive"
  },
  "Visual Gallery": {
    "ko": "시각 갤러리",
    "ja": "ビジュアルギャラリー",
    "zh": "视觉画廊",
    "vi": "Thư viện trực quan",
    "en": "Visual Gallery",
    "ar": "Visual Gallery",
    "fr": "Visual Gallery",
    "de": "Visual Gallery",
    "es": "Visual Gallery",
    "hi": "Visual Gallery",
    "ru": "Visual Gallery",
    "pl": "Visual Gallery",
    "la": "Visual Gallery"
  },
  "Audio Showcase": {
    "ko": "오디오 쇼케이스",
    "ja": "オーディオショーケース",
    "zh": "音频演示",
    "vi": "Trưng bày âm thanh",
    "en": "Audio Showcase",
    "ar": "Audio Showcase",
    "fr": "Audio Showcase",
    "de": "Audio Showcase",
    "es": "Audio Showcase",
    "hi": "Audio Showcase",
    "ru": "Audio Showcase",
    "pl": "Audio Showcase",
    "la": "Audio Showcase"
  },
  "Live WebGPU Demo": {
    "ko": "실시간 WebGPU 데모",
    "ja": "ライブWebGPUデモ",
    "zh": "实时 WebGPU 演示",
    "vi": "Bản demo WebGPU trực tiếp",
    "en": "Live WebGPU Demo",
    "ar": "Live WebGPU Demo",
    "fr": "Live WebGPU Demo",
    "de": "Live WebGPU Demo",
    "es": "Live WebGPU Demo",
    "hi": "Live WebGPU Demo",
    "ru": "Live WebGPU Demo",
    "pl": "Live WebGPU Demo",
    "la": "Live WebGPU Demo"
  },
  "WASM Tools Catalog": {
    "ko": "WASM 도구 카탈로그",
    "ja": "WASMツールカタログ",
    "zh": "WASM 工具目录",
    "vi": "Danh mục công cụ WASM",
    "en": "WASM Tools Catalog",
    "ar": "WASM Tools Catalog",
    "fr": "WASM Tools Catalog",
    "de": "WASM Tools Catalog",
    "es": "WASM Tools Catalog",
    "hi": "WASM Tools Catalog",
    "ru": "WASM Tools Catalog",
    "pl": "WASM Tools Catalog",
    "la": "WASM Tools Catalog"
  },
  "Training Guide": {
    "ko": "온디바이스 학습 가이드",
    "ja": "学習ガイド",
    "zh": "模型训练指南",
    "vi": "Hướng dẫn đào tạo",
    "en": "Training Guide",
    "ar": "Training Guide",
    "fr": "Training Guide",
    "de": "Training Guide",
    "es": "Training Guide",
    "hi": "Training Guide",
    "ru": "Training Guide",
    "pl": "Training Guide",
    "la": "Training Guide"
  },
  "Overview & Mission": {
    "ko": "재단 개요 및 사명",
    "ja": "概要と使命",
    "zh": "概览与使命",
    "vi": "Tổng quan & Sứ mệnh",
    "en": "Overview & Mission",
    "ar": "Overview & Mission",
    "fr": "Overview & Mission",
    "de": "Overview & Mission",
    "es": "Overview & Mission",
    "hi": "Overview & Mission",
    "ru": "Overview & Mission",
    "pl": "Overview & Mission",
    "la": "Overview & Mission"
  },
  "Foundation Charter": {
    "ko": "재단 헌장",
    "ja": "財団憲章",
    "zh": "基金会章程",
    "vi": "Hiến chương quỹ",
    "en": "Foundation Charter",
    "ar": "Foundation Charter",
    "fr": "Foundation Charter",
    "de": "Foundation Charter",
    "es": "Foundation Charter",
    "hi": "Foundation Charter",
    "ru": "Foundation Charter",
    "pl": "Foundation Charter",
    "la": "Foundation Charter"
  },
  "Governance & Merit": {
    "ko": "거버넌스 및 기여 모델",
    "ja": "ガバナンスと貢献モデル",
    "zh": "治理与贡献体系",
    "vi": "Quản trị & Đóng góp",
    "en": "Governance & Merit",
    "ar": "Governance & Merit",
    "fr": "Governance & Merit",
    "de": "Governance & Merit",
    "es": "Governance & Merit",
    "hi": "Governance & Merit",
    "ru": "Governance & Merit",
    "pl": "Governance & Merit",
    "la": "Governance & Merit"
  },
  "Incubation Policy": {
    "ko": "인큐베이션 정책",
    "ja": "インキュベーション方針",
    "zh": "孵化政策",
    "vi": "Chính sách ươm tạo",
    "en": "Incubation Policy",
    "ar": "Incubation Policy",
    "fr": "Incubation Policy",
    "de": "Incubation Policy",
    "es": "Incubation Policy",
    "hi": "Incubation Policy",
    "ru": "Incubation Policy",
    "pl": "Incubation Policy",
    "la": "Incubation Policy"
  },
  "Sponsorship & Support": {
    "ko": "후원 및 지원 안내",
    "ja": "スポンサーと支援案内",
    "zh": "赞助与支持",
    "vi": "Tài trợ & Hỗ trợ",
    "en": "Sponsorship & Support",
    "ar": "Sponsorship & Support",
    "fr": "Sponsorship & Support",
    "de": "Sponsorship & Support",
    "es": "Sponsorship & Support",
    "hi": "Sponsorship & Support",
    "ru": "Sponsorship & Support",
    "pl": "Sponsorship & Support",
    "la": "Sponsorship & Support"
  },
  "3D Neural Fabric Map": {
    "ko": "3D 뉴럴 패브릭 맵",
    "ja": "3Dニューラルマップ",
    "zh": "3D 神经网络拓扑图",
    "vi": "Bản đồ mạng nơ-ron 3D",
    "en": "3D Neural Fabric Map",
    "ar": "3D Neural Fabric Map",
    "fr": "3D Neural Fabric Map",
    "de": "3D Neural Fabric Map",
    "es": "3D Neural Fabric Map",
    "hi": "3D Neural Fabric Map",
    "ru": "3D Neural Fabric Map",
    "pl": "3D Neural Fabric Map",
    "la": "3D Neural Fabric Map"
  },
  "Flagship Libraries": {
    "ko": "플래그십 라이브러리",
    "ja": "フラグシップライブラリ",
    "zh": "旗舰开源库",
    "vi": "Thư viện hàng đầu",
    "en": "Flagship Libraries",
    "ar": "Flagship Libraries",
    "fr": "Flagship Libraries",
    "de": "Flagship Libraries",
    "es": "Flagship Libraries",
    "hi": "Flagship Libraries",
    "ru": "Flagship Libraries",
    "pl": "Flagship Libraries",
    "la": "Flagship Libraries"
  },
  "AI Agent Protocols": {
    "ko": "AI 에이전트 프로토콜",
    "ja": "AIエージェントプロトコル",
    "zh": "AI 智能体交互协议",
    "vi": "Giao thức tác tử AI",
    "en": "AI Agent Protocols",
    "ar": "AI Agent Protocols",
    "fr": "AI Agent Protocols",
    "de": "AI Agent Protocols",
    "es": "AI Agent Protocols",
    "hi": "AI Agent Protocols",
    "ru": "AI Agent Protocols",
    "pl": "AI Agent Protocols",
    "la": "AI Agent Protocols"
  },
  "Quickstart & Execution Recipes": {
    "ko": "퀵스타트 & 실행 레시피",
    "ja": "クイックスタート＆実行レシピ",
    "zh": "快速上手与执行范式",
    "vi": "Bắt đầu nhanh & Công thức thực thi",
    "en": "Quickstart & Execution Recipes",
    "ar": "Quickstart & Execution Recipes",
    "fr": "Quickstart & Execution Recipes",
    "de": "Quickstart & Execution Recipes",
    "es": "Quickstart & Execution Recipes",
    "hi": "Quickstart & Execution Recipes",
    "ru": "Quickstart & Execution Recipes",
    "pl": "Quickstart & Execution Recipes",
    "la": "Quickstart & Execution Recipes"
  },
  "Standard usage patterns and rapid prototyping code": {
    "ko": "표준 사용 패턴 및 빠른 프로토타이핑 코드",
    "ja": "標準的な使用パターンと高速プロトタイピングコード",
    "zh": "标准用法模式与快速原型开发代码",
    "vi": "Các mẫu sử dụng chuẩn và mã tạo mẫu nhanh",
    "en": "Standard usage patterns and rapid prototyping code",
    "ar": "Standard usage patterns and rapid prototyping code",
    "fr": "Standard usage patterns and rapid prototyping code",
    "de": "Standard usage patterns and rapid prototyping code",
    "es": "Standard usage patterns and rapid prototyping code",
    "hi": "Standard usage patterns and rapid prototyping code",
    "ru": "Standard usage patterns and rapid prototyping code",
    "pl": "Standard usage patterns and rapid prototyping code",
    "la": "Standard usage patterns and rapid prototyping code"
  },
  "Prerequisites & Environment Setup": {
    "ko": "사전 요구사항 및 환경 설정",
    "ja": "前提条件と環境設定",
    "zh": "前置要求与环境配置",
    "vi": "Điều kiện tiên quyết & Thiết lập môi trường",
    "en": "Prerequisites & Environment Setup",
    "ar": "Prerequisites & Environment Setup",
    "fr": "Prerequisites & Environment Setup",
    "de": "Prerequisites & Environment Setup",
    "es": "Prerequisites & Environment Setup",
    "hi": "Prerequisites & Environment Setup",
    "ru": "Prerequisites & Environment Setup",
    "pl": "Prerequisites & Environment Setup",
    "la": "Prerequisites & Environment Setup"
  },
  "Hardware Requirements & Toolchain Setup": {
    "ko": "하드웨어 요구 사양 및 툴체인 설정",
    "ja": "ハードウェア要件とツールチェーン設定",
    "zh": "硬件要求与工具链配置",
    "vi": "Yêu cầu phần cứng & Thiết lập chuỗi công cụ",
    "en": "Hardware Requirements & Toolchain Setup",
    "ar": "Hardware Requirements & Toolchain Setup",
    "fr": "Hardware Requirements & Toolchain Setup",
    "de": "Hardware Requirements & Toolchain Setup",
    "es": "Hardware Requirements & Toolchain Setup",
    "hi": "Hardware Requirements & Toolchain Setup",
    "ru": "Hardware Requirements & Toolchain Setup",
    "pl": "Hardware Requirements & Toolchain Setup",
    "la": "Hardware Requirements & Toolchain Setup"
  },
  "Step 1: Termux Environment Setup": {
    "ko": "1단계: Termux 환경 설정",
    "ja": "ステップ1：Termux環境設定",
    "zh": "步骤 1：Termux 环境配置",
    "vi": "Bước 1: Thiết lập môi trường Termux",
    "en": "Step 1: Termux Environment Setup",
    "ar": "Step 1: Termux Environment Setup",
    "fr": "Step 1: Termux Environment Setup",
    "de": "Step 1: Termux Environment Setup",
    "es": "Step 1: Termux Environment Setup",
    "hi": "Step 1: Termux Environment Setup",
    "ru": "Step 1: Termux Environment Setup",
    "pl": "Step 1: Termux Environment Setup",
    "la": "Step 1: Termux Environment Setup"
  },
  "Step 2: Install Package": {
    "ko": "2단계: 패키지 설치",
    "ja": "ステップ2：パッケージのインストール",
    "zh": "步骤 2：安装软件包",
    "vi": "Bước 2: Cài đặt gói",
    "en": "Step 2: Install Package",
    "ar": "Step 2: Install Package",
    "fr": "Step 2: Install Package",
    "de": "Step 2: Install Package",
    "es": "Step 2: Install Package",
    "hi": "Step 2: Install Package",
    "ru": "Step 2: Install Package",
    "pl": "Step 2: Install Package",
    "la": "Step 2: Install Package"
  },
  "Step 3: Verify Hardware Capabilities": {
    "ko": "3단계: 하드웨어 가속 역량 검증",
    "ja": "ステップ3：ハードウェア機能の検証",
    "zh": "步骤 3：验证硬件加速能力",
    "vi": "Bước 3: Xác minh khả năng phần cứng",
    "en": "Step 3: Verify Hardware Capabilities",
    "ar": "Step 3: Verify Hardware Capabilities",
    "fr": "Step 3: Verify Hardware Capabilities",
    "de": "Step 3: Verify Hardware Capabilities",
    "es": "Step 3: Verify Hardware Capabilities",
    "hi": "Step 3: Verify Hardware Capabilities",
    "ru": "Step 3: Verify Hardware Capabilities",
    "pl": "Step 3: Verify Hardware Capabilities",
    "la": "Step 3: Verify Hardware Capabilities"
  },
  "Step 4: Execute Sanity Check": {
    "ko": "4단계: 정상 동작 검증 (Sanity Check)",
    "ja": "ステップ4：動作確認（サニティチェック）",
    "zh": "步骤 4：执行冒烟测试验证",
    "vi": "Bước 4: Thực thi kiểm tra tính toàn vẹn",
    "en": "Step 4: Execute Sanity Check",
    "ar": "Step 4: Execute Sanity Check",
    "fr": "Step 4: Execute Sanity Check",
    "de": "Step 4: Execute Sanity Check",
    "es": "Step 4: Execute Sanity Check",
    "hi": "Step 4: Execute Sanity Check",
    "ru": "Step 4: Execute Sanity Check",
    "pl": "Step 4: Execute Sanity Check",
    "la": "Step 4: Execute Sanity Check"
  },
  "Benchmarks & Hardware Profiling": {
    "ko": "벤치마크 & 하드웨어 프로파일링",
    "ja": "ベンチマーク＆ハードウェアプロファイリング",
    "zh": "基准测试与硬件性能分析",
    "vi": "Đo điểm chuẩn & Phân tích phần cứng",
    "en": "Benchmarks & Hardware Profiling",
    "ar": "Benchmarks & Hardware Profiling",
    "fr": "Benchmarks & Hardware Profiling",
    "de": "Benchmarks & Hardware Profiling",
    "es": "Benchmarks & Hardware Profiling",
    "hi": "Benchmarks & Hardware Profiling",
    "ru": "Benchmarks & Hardware Profiling",
    "pl": "Benchmarks & Hardware Profiling",
    "la": "Benchmarks & Hardware Profiling"
  },
  "Deterministic throughput, memory consumption, and thermal telemetry": {
    "ko": "결정론적 처리량, 메모리 점유율 및 발열 텔레메트리 지표",
    "ja": "決定論的スループット、メモリ消費量、熱テレメトリ指標",
    "zh": "确定性吞吐量、内存消耗及功耗发热遥测数据",
    "vi": "Thông lượng xác định, mức tiêu thụ bộ nhớ và phép đo từ xa nhiệt",
    "en": "Deterministic throughput, memory consumption, and thermal telemetry",
    "ar": "Deterministic throughput, memory consumption, and thermal telemetry",
    "fr": "Deterministic throughput, memory consumption, and thermal telemetry",
    "de": "Deterministic throughput, memory consumption, and thermal telemetry",
    "es": "Deterministic throughput, memory consumption, and thermal telemetry",
    "hi": "Deterministic throughput, memory consumption, and thermal telemetry",
    "ru": "Deterministic throughput, memory consumption, and thermal telemetry",
    "pl": "Deterministic throughput, memory consumption, and thermal telemetry",
    "la": "Deterministic throughput, memory consumption, and thermal telemetry"
  },
  "Advanced Parameter Control": {
    "ko": "고급 파라미터 제어",
    "ja": "高度なパラメータ制御",
    "zh": "高级参数与底层调优",
    "vi": "Kiểm soát tham số nâng cao",
    "en": "Advanced Parameter Control",
    "ar": "Advanced Parameter Control",
    "fr": "Advanced Parameter Control",
    "de": "Advanced Parameter Control",
    "es": "Advanced Parameter Control",
    "hi": "Advanced Parameter Control",
    "ru": "Advanced Parameter Control",
    "pl": "Advanced Parameter Control",
    "la": "Advanced Parameter Control"
  },
  "Low-level kernel configurations, buffer alignment, and scheduling flags": {
    "ko": "저수준 커널 설정, 버퍼 정렬 및 스레드 스케줄링 플래그",
    "ja": "低レベルカーネル設定、バッファアライメント、スケジューリングフラグ",
    "zh": "底层内核配置、缓冲区对齐及调度标志",
    "vi": "Cấu hình nhân cấp thấp, căn chỉnh bộ đệm và cờ lập lịch",
    "en": "Low-level kernel configurations, buffer alignment, and scheduling flags",
    "ar": "Low-level kernel configurations, buffer alignment, and scheduling flags",
    "fr": "Low-level kernel configurations, buffer alignment, and scheduling flags",
    "de": "Low-level kernel configurations, buffer alignment, and scheduling flags",
    "es": "Low-level kernel configurations, buffer alignment, and scheduling flags",
    "hi": "Low-level kernel configurations, buffer alignment, and scheduling flags",
    "ru": "Low-level kernel configurations, buffer alignment, and scheduling flags",
    "pl": "Low-level kernel configurations, buffer alignment, and scheduling flags",
    "la": "Low-level kernel configurations, buffer alignment, and scheduling flags"
  },
  "API Reference & Struct Definitions": {
    "ko": "전체 API 명세 & 구조체 정의",
    "ja": "APIリファレンスと構造体定義",
    "zh": "完整 API 规范与结构体定义",
    "vi": "Tham chiếu API & Định nghĩa cấu trúc",
    "en": "API Reference & Struct Definitions",
    "ar": "API Reference & Struct Definitions",
    "fr": "API Reference & Struct Definitions",
    "de": "API Reference & Struct Definitions",
    "es": "API Reference & Struct Definitions",
    "hi": "API Reference & Struct Definitions",
    "ru": "API Reference & Struct Definitions",
    "pl": "API Reference & Struct Definitions",
    "la": "API Reference & Struct Definitions"
  },
  "Complete specification of exported classes, methods, signatures, and types": {
    "ko": "내보내기된 클래스, 메서드, 시그니처 및 타입의 완전한 명세",
    "ja": "エクスポートされたクラス、メソッド、シグネチャ、型の完全な仕様",
    "zh": "导出类、方法、函数签名与类型系统的完整规范",
    "vi": "Đặc tả đầy đủ về các lớp, phương thức, chữ ký và kiểu được xuất",
    "en": "Complete specification of exported classes, methods, signatures, and types",
    "ar": "Complete specification of exported classes, methods, signatures, and types",
    "fr": "Complete specification of exported classes, methods, signatures, and types",
    "de": "Complete specification of exported classes, methods, signatures, and types",
    "es": "Complete specification of exported classes, methods, signatures, and types",
    "hi": "Complete specification of exported classes, methods, signatures, and types",
    "ru": "Complete specification of exported classes, methods, signatures, and types",
    "pl": "Complete specification of exported classes, methods, signatures, and types",
    "la": "Complete specification of exported classes, methods, signatures, and types"
  },
  "Version Release Archive": {
    "ko": "버전 릴리즈 아카이브",
    "ja": "バージョンリリースアーカイブ",
    "zh": "版本发布归档",
    "vi": "Kho lưu trữ phát hành phiên bản",
    "en": "Version Release Archive",
    "ar": "Version Release Archive",
    "fr": "Version Release Archive",
    "de": "Version Release Archive",
    "es": "Version Release Archive",
    "hi": "Version Release Archive",
    "ru": "Version Release Archive",
    "pl": "Version Release Archive",
    "la": "Version Release Archive"
  },
  "Cryptographically validated release history, changelogs, and integrity hashes": {
    "ko": "암호학적으로 검증된 릴리즈 이력, 변경 로그 및 무결성 해시",
    "ja": "暗号学的に検証されたリリース履歴、変更ログ、整合性ハッシュ",
    "zh": "经过密码学验证的发布历史、更新日志与完整性哈希",
    "vi": "Lịch sử phát hành được xác thực bằng mật mã, nhật ký thay đổi và hàm băm tính toàn vẹn",
    "en": "Cryptographically validated release history, changelogs, and integrity hashes",
    "ar": "Cryptographically validated release history, changelogs, and integrity hashes",
    "fr": "Cryptographically validated release history, changelogs, and integrity hashes",
    "de": "Cryptographically validated release history, changelogs, and integrity hashes",
    "es": "Cryptographically validated release history, changelogs, and integrity hashes",
    "hi": "Cryptographically validated release history, changelogs, and integrity hashes",
    "ru": "Cryptographically validated release history, changelogs, and integrity hashes",
    "pl": "Cryptographically validated release history, changelogs, and integrity hashes",
    "la": "Cryptographically validated release history, changelogs, and integrity hashes"
  },
  "Recipe 1: Model Hub Download & CLI Inference": {
    "ko": "레시피 1: 모델 허브 다운로드 및 CLI 추론",
    "ja": "レシピ1：モデルハブのダウンロードとCLI推論",
    "zh": "范式 1：模型中心下载与 CLI 推理",
    "vi": "Công thức 1: Tải xuống trung tâm mô hình & Suy luận CLI",
    "en": "Recipe 1: Model Hub Download & CLI Inference",
    "ar": "Recipe 1: Model Hub Download & CLI Inference",
    "fr": "Recipe 1: Model Hub Download & CLI Inference",
    "de": "Recipe 1: Model Hub Download & CLI Inference",
    "es": "Recipe 1: Model Hub Download & CLI Inference",
    "hi": "Recipe 1: Model Hub Download & CLI Inference",
    "ru": "Recipe 1: Model Hub Download & CLI Inference",
    "pl": "Recipe 1: Model Hub Download & CLI Inference",
    "la": "Recipe 1: Model Hub Download & CLI Inference"
  },
  "Query verified 1.58-bit GGUF models, download with HTTP Range resume support, and execute instant inference:": {
    "ko": "검증된 1.58비트 GGUF 모델을 조회하고, HTTP Range 이어받기를 통해 다운로드하여 즉각적인 추론을 실행합니다:",
    "ja": "検証済みの1.58ビットGGUFモデルを照会し、HTTP Range再開機能でダウンロードして即座に推論を実行します：",
    "zh": "查询已验证的 1.58 位 GGUF 模型，基于 HTTP 断点续传极速下载并立即执行推理：",
    "vi": "Truy vấn các mô hình GGUF 1.58-bit đã được xác minh, tải xuống với hỗ trợ tiếp tục HTTP và thực thi suy luận ngay lập tức:",
    "en": "Query verified 1.58-bit GGUF models, download with HTTP Range resume support, and execute instant inference:",
    "ar": "Query verified 1.58-bit GGUF models, download with HTTP Range resume support, and execute instant inference:",
    "fr": "Query verified 1.58-bit GGUF models, download with HTTP Range resume support, and execute instant inference:",
    "de": "Query verified 1.58-bit GGUF models, download with HTTP Range resume support, and execute instant inference:",
    "es": "Query verified 1.58-bit GGUF models, download with HTTP Range resume support, and execute instant inference:",
    "hi": "Query verified 1.58-bit GGUF models, download with HTTP Range resume support, and execute instant inference:",
    "ru": "Query verified 1.58-bit GGUF models, download with HTTP Range resume support, and execute instant inference:",
    "pl": "Query verified 1.58-bit GGUF models, download with HTTP Range resume support, and execute instant inference:",
    "la": "Query verified 1.58-bit GGUF models, download with HTTP Range resume support, and execute instant inference:"
  },
  "Recipe 2: Python SDK Token Streaming": {
    "ko": "레시피 2: Python SDK 비동기 토큰 스트리밍",
    "ja": "レシピ2：Python SDKトークンストリーミング",
    "zh": "范式 2：Python SDK 异步 Token 流式生成",
    "vi": "Công thức 2: Truyền phát mã thông báo SDK Python",
    "en": "Recipe 2: Python SDK Token Streaming",
    "ar": "Recipe 2: Python SDK Token Streaming",
    "fr": "Recipe 2: Python SDK Token Streaming",
    "de": "Recipe 2: Python SDK Token Streaming",
    "es": "Recipe 2: Python SDK Token Streaming",
    "hi": "Recipe 2: Python SDK Token Streaming",
    "ru": "Recipe 2: Python SDK Token Streaming",
    "pl": "Recipe 2: Python SDK Token Streaming",
    "la": "Recipe 2: Python SDK Token Streaming"
  },
  "Stream generated tokens asynchronously with context manager memory cleanup:": {
    "ko": "컨텍스트 매니저 메모리 자동 정리를 통해 생성된 토큰을 비동기식으로 스트리밍합니다:",
    "ja": "コンテキストマネージャーのメモリ自動クリーンアップを使用して、生成されたトークンを非同期にストリーミングします：",
    "zh": "借助上下文管理器自动清理内存，异步流式输出生成的 Token：",
    "vi": "Truyền phát các mã thông báo được tạo không đồng bộ với dọn dẹp bộ nhớ của trình quản lý ngữ cảnh:",
    "en": "Stream generated tokens asynchronously with context manager memory cleanup:",
    "ar": "Stream generated tokens asynchronously with context manager memory cleanup:",
    "fr": "Stream generated tokens asynchronously with context manager memory cleanup:",
    "de": "Stream generated tokens asynchronously with context manager memory cleanup:",
    "es": "Stream generated tokens asynchronously with context manager memory cleanup:",
    "hi": "Stream generated tokens asynchronously with context manager memory cleanup:",
    "ru": "Stream generated tokens asynchronously with context manager memory cleanup:",
    "pl": "Stream generated tokens asynchronously with context manager memory cleanup:",
    "la": "Stream generated tokens asynchronously with context manager memory cleanup:"
  },
  "Recipe 3: Advanced Pipeline Configuration": {
    "ko": "레시피 3: 고급 파이프라인 구성",
    "ja": "レシピ3：高度なパイプライン構成",
    "zh": "范式 3：高级流水线配置",
    "vi": "Công thức 3: Cấu hình đường ống nâng cao",
    "en": "Recipe 3: Advanced Pipeline Configuration",
    "ar": "Recipe 3: Advanced Pipeline Configuration",
    "fr": "Recipe 3: Advanced Pipeline Configuration",
    "de": "Recipe 3: Advanced Pipeline Configuration",
    "es": "Recipe 3: Advanced Pipeline Configuration",
    "hi": "Recipe 3: Advanced Pipeline Configuration",
    "ru": "Recipe 3: Advanced Pipeline Configuration",
    "pl": "Recipe 3: Advanced Pipeline Configuration",
    "la": "Recipe 3: Advanced Pipeline Configuration"
  },
  "Recipe 4: Zero-Copy Memory Management": {
    "ko": "레시피 4: 제로 카피 메모리 관리",
    "ja": "レシピ4：ゼロコピーメモリ管理",
    "zh": "范式 4：零拷贝内存管理",
    "vi": "Công thức 4: Quản lý bộ nhớ không sao chép",
    "en": "Recipe 4: Zero-Copy Memory Management",
    "ar": "Recipe 4: Zero-Copy Memory Management",
    "fr": "Recipe 4: Zero-Copy Memory Management",
    "de": "Recipe 4: Zero-Copy Memory Management",
    "es": "Recipe 4: Zero-Copy Memory Management",
    "hi": "Recipe 4: Zero-Copy Memory Management",
    "ru": "Recipe 4: Zero-Copy Memory Management",
    "pl": "Recipe 4: Zero-Copy Memory Management",
    "la": "Recipe 4: Zero-Copy Memory Management"
  },
  "Recipe 5: Production Batch Processing": {
    "ko": "레시피 5: 프로덕션 배치 처리",
    "ja": "レシピ5：本番バッチ処理",
    "zh": "范式 5：生产级批量处理",
    "vi": "Công thức 5: Xử lý hàng loạt sản xuất",
    "en": "Recipe 5: Production Batch Processing",
    "ar": "Recipe 5: Production Batch Processing",
    "fr": "Recipe 5: Production Batch Processing",
    "de": "Recipe 5: Production Batch Processing",
    "es": "Recipe 5: Production Batch Processing",
    "hi": "Recipe 5: Production Batch Processing",
    "ru": "Recipe 5: Production Batch Processing",
    "pl": "Recipe 5: Production Batch Processing",
    "la": "Recipe 5: Production Batch Processing"
  },
  "1-Line Quick Installation": {
    "ko": "1줄 빠른 설치",
    "ja": "1行クイックインストール",
    "zh": "一行命令快速安装",
    "vi": "Cài đặt nhanh 1 dòng",
    "en": "1-Line Quick Installation",
    "ar": "1-Line Quick Installation",
    "fr": "1-Line Quick Installation",
    "de": "1-Line Quick Installation",
    "es": "1-Line Quick Installation",
    "hi": "1-Line Quick Installation",
    "ru": "1-Line Quick Installation",
    "pl": "1-Line Quick Installation",
    "la": "1-Line Quick Installation"
  },
  "1-LINE QUICK INSTALLATION": {
    "ko": "1줄 빠른 설치",
    "ja": "1行クイックインストール",
    "zh": "一行命令快速安装",
    "vi": "Cài đặt nhanh 1 dòng",
    "en": "1-LINE QUICK INSTALLATION",
    "ar": "1-LINE QUICK INSTALLATION",
    "fr": "1-LINE QUICK INSTALLATION",
    "de": "1-LINE QUICK INSTALLATION",
    "es": "1-LINE QUICK INSTALLATION",
    "hi": "1-LINE QUICK INSTALLATION",
    "ru": "1-LINE QUICK INSTALLATION",
    "pl": "1-LINE QUICK INSTALLATION",
    "la": "1-LINE QUICK INSTALLATION"
  },
  "Install the official package directly into your runtime:": {
    "ko": "공식 패키지를 런타임 환경에 직접 설치하십시오:",
    "ja": "公式パッケージを実行環境に直接インストールします：",
    "zh": "直接将官方包安装至您的运行环境：",
    "vi": "Cài đặt gói chính thức trực tiếp vào môi trường chạy của bạn:",
    "en": "Install the official package directly into your runtime:",
    "ar": "Install the official package directly into your runtime:",
    "fr": "Install the official package directly into your runtime:",
    "de": "Install the official package directly into your runtime:",
    "es": "Install the official package directly into your runtime:",
    "hi": "Install the official package directly into your runtime:",
    "ru": "Install the official package directly into your runtime:",
    "pl": "Install the official package directly into your runtime:",
    "la": "Install the official package directly into your runtime:"
  },
  "The Engineering Challenge": {
    "ko": "기술적 당면 과제",
    "ja": "エンジニアリング上の課題",
    "zh": "工程挑战与背景",
    "vi": "Thách thức kỹ thuật",
    "en": "The Engineering Challenge",
    "ar": "The Engineering Challenge",
    "fr": "The Engineering Challenge",
    "de": "The Engineering Challenge",
    "es": "The Engineering Challenge",
    "hi": "The Engineering Challenge",
    "ru": "The Engineering Challenge",
    "pl": "The Engineering Challenge",
    "la": "The Engineering Challenge"
  },
  "The Architectural Breakthrough": {
    "ko": "아키텍처 혁신 및 해결책",
    "ja": "アーキテクチャのブレークスルー",
    "zh": "架构突破与创新",
    "vi": "Đột phá kiến trúc",
    "en": "The Architectural Breakthrough",
    "ar": "The Architectural Breakthrough",
    "fr": "The Architectural Breakthrough",
    "de": "The Architectural Breakthrough",
    "es": "The Architectural Breakthrough",
    "hi": "The Architectural Breakthrough",
    "ru": "The Architectural Breakthrough",
    "pl": "The Architectural Breakthrough",
    "la": "The Architectural Breakthrough"
  },
  "Key Capabilities & Built-in Hardening": {
    "ko": "핵심 역량 및 빌트인 안정화 계층",
    "ja": "主要機能と組み込みの強化",
    "zh": "核心能力与内建安全加固",
    "vi": "Khả năng chính & Tăng cường tích hợp",
    "en": "Key Capabilities & Built-in Hardening",
    "ar": "Key Capabilities & Built-in Hardening",
    "fr": "Key Capabilities & Built-in Hardening",
    "de": "Key Capabilities & Built-in Hardening",
    "es": "Key Capabilities & Built-in Hardening",
    "hi": "Key Capabilities & Built-in Hardening",
    "ru": "Key Capabilities & Built-in Hardening",
    "pl": "Key Capabilities & Built-in Hardening",
    "la": "Key Capabilities & Built-in Hardening"
  },
  "Supported Compute Kernels & Operations": {
    "ko": "지원 연산 커널 및 실행 백엔드",
    "ja": "サポートされている計算カーネルと操作",
    "zh": "支持的计算内核与算子矩阵",
    "vi": "Các hạt nhân tính toán & Hoạt động được hỗ trợ",
    "en": "Supported Compute Kernels & Operations",
    "ar": "Supported Compute Kernels & Operations",
    "fr": "Supported Compute Kernels & Operations",
    "de": "Supported Compute Kernels & Operations",
    "es": "Supported Compute Kernels & Operations",
    "hi": "Supported Compute Kernels & Operations",
    "ru": "Supported Compute Kernels & Operations",
    "pl": "Supported Compute Kernels & Operations",
    "la": "Supported Compute Kernels & Operations"
  },
  "Subsystem Category": {
    "ko": "하위 시스템 분류",
    "ja": "サブシステムカテゴリ",
    "zh": "子系统分类",
    "vi": "Danh mục hệ thống phụ",
    "en": "Subsystem Category",
    "ar": "Subsystem Category",
    "fr": "Subsystem Category",
    "de": "Subsystem Category",
    "es": "Subsystem Category",
    "hi": "Subsystem Category",
    "ru": "Subsystem Category",
    "pl": "Subsystem Category",
    "la": "Subsystem Category"
  },
  "Operations & Kernels": {
    "ko": "연산 및 커널 명세",
    "ja": "操作およびカーネル仕様",
    "zh": "算子与计算内核",
    "vi": "Hoạt động & Hạt nhân",
    "en": "Operations & Kernels",
    "ar": "Operations & Kernels",
    "fr": "Operations & Kernels",
    "de": "Operations & Kernels",
    "es": "Operations & Kernels",
    "hi": "Operations & Kernels",
    "ru": "Operations & Kernels",
    "pl": "Operations & Kernels",
    "la": "Operations & Kernels"
  },
  "Status": {
    "ko": "상태",
    "ja": "ステータス",
    "zh": "状态",
    "vi": "Trạng thái",
    "en": "Status",
    "ar": "Status",
    "fr": "Status",
    "de": "Status",
    "es": "Status",
    "hi": "Status",
    "ru": "Status",
    "pl": "Status",
    "la": "Status"
  },
  "Production": {
    "ko": "프로덕션",
    "ja": "本番環境",
    "zh": "生产就绪",
    "vi": "Sản xuất",
    "en": "Production",
    "ar": "Production",
    "fr": "Production",
    "de": "Production",
    "es": "Production",
    "hi": "Production",
    "ru": "Production",
    "pl": "Production",
    "la": "Production"
  },
  "Production Release (Latest)": {
    "ko": "프로덕션 최신 릴리즈",
    "ja": "最新の安定版リリース",
    "zh": "最新正式生产发布",
    "vi": "Bản phát hành sản xuất (Mới nhất)",
    "en": "Production Release (Latest)",
    "ar": "Production Release (Latest)",
    "fr": "Production Release (Latest)",
    "de": "Production Release (Latest)",
    "es": "Production Release (Latest)",
    "hi": "Production Release (Latest)",
    "ru": "Production Release (Latest)",
    "pl": "Production Release (Latest)",
    "la": "Production Release (Latest)"
  },
  "Canonical Usage Example": {
    "ko": "표준 사용 예제",
    "ja": "標準的な使用例",
    "zh": "标准用法示例",
    "vi": "Ví dụ sử dụng chuẩn",
    "en": "Canonical Usage Example",
    "ar": "Canonical Usage Example",
    "fr": "Canonical Usage Example",
    "de": "Canonical Usage Example",
    "es": "Canonical Usage Example",
    "hi": "Canonical Usage Example",
    "ru": "Canonical Usage Example",
    "pl": "Canonical Usage Example",
    "la": "Canonical Usage Example"
  },
  "Getting Started & Deep Guides": {
    "ko": "시작하기 및 심층 기술 가이드",
    "ja": "入門と詳細ガイド",
    "zh": "快速入门与深度技术指南",
    "vi": "Bắt đầu & Hướng dẫn chuyên sâu",
    "en": "Getting Started & Deep Guides",
    "ar": "Getting Started & Deep Guides",
    "fr": "Getting Started & Deep Guides",
    "de": "Getting Started & Deep Guides",
    "es": "Getting Started & Deep Guides",
    "hi": "Getting Started & Deep Guides",
    "ru": "Getting Started & Deep Guides",
    "pl": "Getting Started & Deep Guides",
    "la": "Getting Started & Deep Guides"
  },
  "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)": {
    "ko": "상세 설치 가이드 (하드웨어 의존성, Termux 설정, WebGPU 플래그)",
    "ja": "詳細インストールガイド（ハードウェア依存関係、Termux設定、WebGPUフラグ）",
    "zh": "详细安装指南（硬件依赖项、Termux 配置、WebGPU 标志）",
    "vi": "Hướng dẫn cài đặt chi tiết (phần phụ thuộc phần cứng, thiết lập Termux)",
    "en": "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)",
    "ar": "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)",
    "fr": "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)",
    "de": "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)",
    "es": "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)",
    "hi": "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)",
    "ru": "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)",
    "pl": "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)",
    "la": "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)"
  },
  "Quickstart Recipes & Common Execution Patterns": {
    "ko": "퀵스타트 레시피 & 공통 실행 패턴",
    "ja": "クイックスタートレシピ＆一般的な実行パターン",
    "zh": "快速上手示例与常用执行范式",
    "vi": "Công thức bắt đầu nhanh & Các mẫu thực thi phổ biến",
    "en": "Quickstart Recipes & Common Execution Patterns",
    "ar": "Quickstart Recipes & Common Execution Patterns",
    "fr": "Quickstart Recipes & Common Execution Patterns",
    "de": "Quickstart Recipes & Common Execution Patterns",
    "es": "Quickstart Recipes & Common Execution Patterns",
    "hi": "Quickstart Recipes & Common Execution Patterns",
    "ru": "Quickstart Recipes & Common Execution Patterns",
    "pl": "Quickstart Recipes & Common Execution Patterns",
    "la": "Quickstart Recipes & Common Execution Patterns"
  },
  "100% Full API Reference & Struct Definitions": {
    "ko": "100% 전체 API 명세 및 구조체 정의",
    "ja": "100%完全なAPIリファレンスと構造体定義",
    "zh": "100% 完整 API 接口与结构体规范",
    "vi": "Tài liệu tham khảo API đầy đủ 100% & Định nghĩa cấu trúc",
    "en": "100% Full API Reference & Struct Definitions",
    "ar": "100% Full API Reference & Struct Definitions",
    "fr": "100% Full API Reference & Struct Definitions",
    "de": "100% Full API Reference & Struct Definitions",
    "es": "100% Full API Reference & Struct Definitions",
    "hi": "100% Full API Reference & Struct Definitions",
    "ru": "100% Full API Reference & Struct Definitions",
    "pl": "100% Full API Reference & Struct Definitions",
    "la": "100% Full API Reference & Struct Definitions"
  }
};

  class UniversalI18nEngine {
    constructor() {
      this.currentLang = this._detectLanguage();
      this.translations = typeof translations !== 'undefined' ? translations : {};
      this.initialized = false;
    }

    _detectLanguage() {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && SUPPORTED_LANGUAGES[urlLang]) {
          this._saveLang(urlLang);
          return urlLang;
        }

        for (const key of STORAGE_KEYS) {
          const saved = localStorage.getItem(key);
          if (saved && SUPPORTED_LANGUAGES[saved]) return saved;
        }

        const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase().split('-')[0];
        if (SUPPORTED_LANGUAGES[browserLang]) return browserLang;
      } catch (e) {}
      return DEFAULT_LANG;
    }

    _saveLang(lang) {
      try {
        STORAGE_KEYS.forEach(key => localStorage.setItem(key, lang));
        document.cookie = `uno_km_lang=${lang};path=/;max-age=31536000;SameSite=Lax`;
      } catch (e) {}
    }

    init() {
      if (this.initialized) return;
      this.initialized = true;

      if (typeof document !== 'undefined') {
        this._freezeOriginalTemplates();
      }

      this._setupLanguageSelectors();
      this.applyLanguage(this.currentLang);

      try {
        window.addEventListener('storage', (e) => {
          if (STORAGE_KEYS.includes(e.key) && e.newValue && SUPPORTED_LANGUAGES[e.newValue]) {
            if (e.newValue !== this.currentLang) {
              this.setLanguage(e.newValue);
            }
          }
        });
      } catch (e) {}
    }

    _freezeOriginalTemplates() {
      const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, th, td, span, li, a, button, div.alert, [data-i18n]');
      elements.forEach(el => {
        if (el.querySelector('pre, code, input, select, textarea') || el.closest('pre, code, script, style')) {
          return;
        }
        const txt = el.textContent.trim();
        if (!el.dataset.i18nOrig && txt) {
          el.dataset.i18nOrig = txt;
        }
      });
    }

    setLanguage(lang) {
      if (!SUPPORTED_LANGUAGES[lang]) return;
      this.currentLang = lang;
      this._saveLang(lang);
      this.applyLanguage(lang);

      document.querySelectorAll('.lang-select').forEach(sel => {
        sel.value = lang;
      });

      document.documentElement.lang = lang;
      document.documentElement.dir = SUPPORTED_LANGUAGES[lang].dir || 'ltr';
    }

    _lookup(dict, keyPath) {
      if (!keyPath || !dict) return undefined;
      const parts = keyPath.split('.');
      let cur = dict;
      for (let i = 0; i < parts.length; i++) {
        if (cur === undefined || cur === null) return undefined;
        cur = cur[parts[i]];
      }
      return cur;
    }

    applyLanguage(lang) {
      const dict = this.translations[lang] || this.translations[DEFAULT_LANG] || {};

      const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, th, td, span, li, a, button, [data-i18n]');
      elements.forEach(el => {
        if (el.querySelector('pre, code, input, select, textarea') || el.closest('pre, code, script, style')) {
          return;
        }

        const origText = el.dataset.i18nOrig || el.textContent.trim();
        if (!el.dataset.i18nOrig && origText) {
          el.dataset.i18nOrig = origText;
        }

        // 1. Sidebar Flagship Libraries & AI Protocols Protection (MUST REMAIN IN ENGLISH)
        const parentLi = el.closest('nav.sidebar ul li');
        if (parentLi) {
          const isFlagship = el.closest('nav.sidebar')?.querySelector('h3[data-i18n="common.nav.libraries"]')?.nextElementSibling?.contains(el);
          const isAi = el.closest('nav.sidebar')?.querySelector('h3[data-i18n="common.nav.aiSpecs"]')?.nextElementSibling?.contains(el);
          if (isFlagship || isAi) {
            if (el.textContent.trim() !== origText) el.textContent = origText;
            return;
          }
        }

        // 2. Header Brand Logo Protection (MUST REMAIN IN ENGLISH)
        if (el.closest('header .header-brand') && el.tagName === 'H1') {
          if (el.textContent.trim() !== origText) el.textContent = origText;
          return;
        }

        // 3. Exact PHRASES_DB Translation Lookup
        if (PHRASES_DB[origText]) {
          const entry = PHRASES_DB[origText];
          const trans = (lang === 'en') ? origText : (entry[lang] || entry['en'] || origText);
          if (trans && el.textContent.trim() !== trans) {
            el.textContent = trans;
          }
          return;
        }

        // 4. [data-i18n] Attribute Lookup
        const i18nKey = el.getAttribute('data-i18n');
        if (i18nKey) {
          const val = this._lookup(dict, i18nKey);
          if (val !== undefined && val !== null && typeof val === 'string') {
            el.textContent = val;
            return;
          }
        }

        // 5. English Default Fallback
        if (lang === 'en' && origText && el.textContent.trim() !== origText) {
          el.textContent = origText;
        }
      });

      document.querySelectorAll('.lang-select').forEach(sel => {
        sel.value = lang;
      });
    }

    _setupLanguageSelectors() {
      const optionsHtml = Object.values(SUPPORTED_LANGUAGES).map(l => 
        `<option value="${l.code}">${l.flag} ${l.native}</option>`
      ).join('');

      if (typeof document !== 'undefined') {
        document.querySelectorAll('.lang-selector-wrapper').forEach(wrap => {
          if (!wrap.querySelector('.lang-select')) {
            const sel = document.createElement('select');
            sel.className = 'lang-select';
            sel.setAttribute('aria-label', 'Language Selector');
            sel.innerHTML = optionsHtml;
            wrap.appendChild(sel);
          }
        });

        const existingSelects = document.querySelectorAll('.lang-select');
        if (existingSelects.length === 0) {
          const controls = document.querySelector('header .header-controls');
          if (controls) {
            const wrap = document.createElement('div');
            wrap.className = 'lang-selector-wrapper';
            const sel = document.createElement('select');
            sel.className = 'lang-select';
            sel.setAttribute('aria-label', 'Language Selector');
            sel.innerHTML = optionsHtml;
            wrap.appendChild(sel);
            controls.insertBefore(wrap, controls.firstChild);
          }
        }

        document.querySelectorAll('.lang-select').forEach(sel => {
          if (!sel.children.length || sel.children.length < 10) {
            sel.innerHTML = optionsHtml;
          }
          sel.value = this.currentLang;
          sel.onchange = (e) => this.setLanguage(e.target.value);
        });
      }
    }
  }

  const i18n = new UniversalI18nEngine();
  global.i18n = i18n;

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => i18n.init());
    } else {
      i18n.init();
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { UniversalI18nEngine, i18n, SUPPORTED_LANGUAGES, PHRASES_DB };
  }

})(typeof window !== 'undefined' ? window : global);
