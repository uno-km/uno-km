/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
// AMEVA Auto-Generated i18n Dictionary
(function(global) {
  const translations = {
  "en": {
    "common": {
      "brand": "Termux-LlamaCpp",
      "releaseTag": "v1.3.11",
      "pkgBtn": "pip / npm",
      "pypiBtn": "PyPI",
      "npmBtn": "npm",
      "foundationBtn": "Foundation",
      "githubBtn": "GitHub",
      "founderBtn": "Founder CV",
      "footerText": "© 2026 AMEVA Open-Source Foundation. Released under the Apache-2.0 License.",
      "nav": {
        "docNav": "Document Navigation",
        "foundation": "Foundation Info",
        "libraries": "Flagship Libraries",
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
      "subtitle": "Production-Grade GGUF LLM Runtime Utilizing Device Resources, Model Manager & OpenAI API",
      "challengeText": "Running local GGUF LLMs on Android via upstream llama.cpp traditionally forces developers into multi-gigabyte build toolchains (Clang, CMake, Ninja), 20+ minute on-device compilation times, fragile Bionic linker incompatibilities, and sudden process terminations triggered by aggressive mobile OS memory managers.",
      "breakthroughText": "Ships verified Android ARM64 native binaries with bundled runtime libraries and octa-core big.LITTLE scheduling, delivering instant zero-compilation deployment, OpenAI-compatible REST/SSE streaming endpoints, and automated background process cleanup in a single pip/npm package.",
      "features.0.title": "Zero-Compilation Instant Deployment",
      "features.0.desc": "Installs verified Android Bionic ARM64 binaries and bundled shared libraries via pip or npm, launching local LLM inference in under 10 seconds.",
      "features.1.title": "Octa-Core big.LITTLE Scheduling",
      "features.1.desc": "Automatically detects physical CPU topology, pinning compute workloads to performance cores to maximize token throughput while curbing heat.",
      "features.2.title": "Built-in OpenAI REST & SSE Streaming Server",
      "features.2.desc": "Exposes standard /v1/chat/completions and /v1/models endpoints locally, enabling instant drop-in integration with AI agent frameworks.",
      "features.3.title": "Automated Lifecycle & Zombie Process Guard",
      "features.3.desc": "Supervises background child processes, ensuring 100% clean process termination upon shutdown or error without orphaned instances draining battery."
    }
  },
  "ko": {
    "common": {
      "brand": "Termux-LlamaCpp",
      "releaseTag": "v1.3.11",
      "pkgBtn": "패키지 (pip / npm)",
      "pypiBtn": "PyPI 패키지",
      "npmBtn": "npm 패키지",
      "foundationBtn": "재단 소개",
      "githubBtn": "GitHub",
      "founderBtn": "설립자 CV",
      "footerText": "© 2026 AMEVA 오픈소스 재단. Apache-2.0 라이선스로 배포됨.",
      "nav": {
        "docNav": "문서 상세 목차",
        "foundation": "재단 소개 (AOSF)",
        "libraries": "플래그십 라이브러리",
        "aiSpecs": "AI 에이전트 프로토콜",
        "home": "홈 / 아키텍처",
        "installation": "설치 가이드",
        "quickstart": "퀵스타트 & 레시피",
        "apiReference": "전체 API 명세",
        "benchmarks": "벤치마크 & 하드웨어",
        "advancedParams": "고급 파라미터 제어",
        "versions": "버전 릴리즈 아카이브"
      }
    },
    "home": {
      "subtitle": "기기 자원 최적화, 모델 매니저 및 OpenAI 규격 API를 지원하는 프로덕션급 GGUF LLM 런타임",
      "challengeText": "스마트폰에서 대형 언어 모델(GGUF)을 돌리기 위해 오픈소스 llama.cpp를 활용하려 해도 Clang, CMake, Ninja 등 수 기가바이트의 빌드 툴체인 설치, 20분이 넘는 긴 컴파일 시간, Bionic 동적 링커 에러, 그리고 모바일 백그라운드 환경에서 OS에 의해 프로세스가 강제 종료되는 번거로운 문제들이 산적해 있었습니다.",
      "breakthroughText": "사전에 안드로이드 ARM64 Bionic 네이티브에 맞추어 극한으로 최적화 컴파일된 바이너리를 동봉하여 컴파일 과정 없이 즉시 실행할 수 있게 하였으며, OpenAI 규격 REST/SSE 스트리밍 서버와 빅리틀 옥타코어 튜닝, 자동 프로세스 생명주기 관리자를 단일 라이브러리로 패키징하였습니다.",
      "features.0.title": "컴파일 0분 즉시 실행 배포",
      "features.0.desc": "pip 또는 npm 설치 즉시 사전 검증된 안드로이드 바이너리와 공유 라이브러리가 연동되어 10초 만에 온디바이스 LLM 추론을 개시합니다.",
      "features.1.title": "빅리틀 옥타코어 최적화 스레딩",
      "features.1.desc": "스마트폰 CPU 토폴로지를 자동 분석하여 고성능 빅 코어에 연산 스레드를 고정함으로써 발열을 억제하면서 토큰 생성 속도를 극대화합니다.",
      "features.2.title": "OpenAI 규격 로컬 API 서버 내장",
      "features.2.desc": "표준 /v1/chat/completions 및 /v1/models 엔드포인트를 로컬에서 즉시 제공하여 기존 AI 에이전트 도구 및 WebUI와 무수정 호환됩니다.",
      "features.3.title": "좀비 프로세스 원천 방지 및 자원 정리",
      "features.3.desc": "백그라운드 자식 프로세스를 항시 감시하여 오류나 종료 시 고아 프로세스를 완벽히 정리하고 배터리 방전과 멈춤을 원천 차단합니다."
    }
  },
  "ja": {
    "common": {
      "brand": "Termux-LlamaCpp",
      "releaseTag": "v1.3.11",
      "pkgBtn": "パッケージ (pip / npm)",
      "pypiBtn": "PyPI パッケージ",
      "npmBtn": "npm パッケージ",
      "foundationBtn": "財団概要",
      "githubBtn": "GitHub",
      "founderBtn": "創設者経歴",
      "footerText": "© 2026 AMEVAオープンソース財団. Apache-2.0 ライセンスの下で公開.",
      "nav": {
        "docNav": "ドキュメント目次",
        "foundation": "財団情報 (AOSF)",
        "libraries": "主要ライブラリ",
        "aiSpecs": "AIエージェント仕様",
        "home": "ホーム / アーキテクチャ",
        "installation": "インストールガイド",
        "quickstart": "クイックスタート＆レシピ",
        "apiReference": "完全APIリファレンス",
        "benchmarks": "ベンチマーク＆測定",
        "advancedParams": "高度パラメータ設定",
        "versions": "バージョンアーカイブ"
      }
    },
    "home": {
      "subtitle": "デバイスリソース最適化、モデルマネージャー、OpenAI互換APIを備えたプロダクショングレードGGUF LLMランタイム",
      "challengeText": "Android端末上でllama.cppを用いてGGUFモデルを実行しようとすると、数ギガバイトに及ぶビルドツール（Clang、CMake、Ninja）の導入、20分以上の長大なコンパイル時間、Bionicリンカーの不整合、OSによるプロセスの強制終了に悩まされていました。",
      "breakthroughText": "Android ARM64 Bionicネイティブ向けに極限まで最適化・コンパイル済みのバイナリを同梱し、コンパイル不要で即時利用を実現。OpenAI互換REST/SSEストリーミングサーバーと自動プロセス管理を統合pip/npmパッケージとして提供します。",
      "features.0.title": "コンパイル不要の即座配備",
      "features.0.desc": "pipまたはnpmによるインストール後、事前検証済みのバイナリとライブラリにより10秒以内にローカルLLM推論を開始できます。",
      "features.1.title": "オクタコアbig.LITTLE最適化スレッド制御",
      "features.1.desc": "CPUトポロジを自動検知して高性能コアに計算スレッドを固定し、発熱を抑えつつトークン生成速度を最大化します。",
      "features.2.title": "OpenAI互換ローカルREST/SSEサーバー内蔵",
      "features.2.desc": "標準的な/v1/chat/completionsおよび/v1/modelsエンドポイントを提供し、既存のAIエージェントやWebUIとコード変更なしで即時連携します。",
      "features.3.title": "ゾンビプロセス防止＆自動リソース解放",
      "features.3.desc": "バックグラウンドの子プロセスを常時監視し、終了時やエラー発生時に孤立プロセスを完全に消滅させてバッテリ消耗を防ぎます。"
    }
  },
  "hi": {
    "common": {
      "brand": "Termux-LlamaCpp",
      "releaseTag": "v1.3.11",
      "pkgBtn": "पैकेज (pip / npm)",
      "pypiBtn": "PyPI पैकेज",
      "npmBtn": "npm पैकेज",
      "foundationBtn": "फाउंडेशन परिचय",
      "githubBtn": "GitHub",
      "founderBtn": "संस्थापक सीवी",
      "footerText": "© 2026 AMEVA ओपन-सोर्स फाउंडेशन. Apache-2.0 लाइसेंस के तहत जारी.",
      "nav": {
        "docNav": "दस्तावेज़ नेविगेशन",
        "foundation": "फाउंडेशन जानकारी (AOSF)",
        "libraries": "फ्लैगशिप लाइब्रेरी",
        "aiSpecs": "AI एजेंट प्रोटोकॉल",
        "home": "होम / आर्किटेक्चर",
        "installation": "स्थापना गाइड",
        "quickstart": "त्वरित शुरुआत और रेसिपी",
        "apiReference": "एपीआई संदर्भ",
        "benchmarks": "बेंचमार्क और प्रोफाइलिंग",
        "advancedParams": "उन्नत पैरामीटर",
        "versions": "संस्करण संग्रह"
      }
    },
    "home": {
      "subtitle": "डिवाइस संसाधन अनुकूलन, मॉडल मैनेजर और OpenAI एपीआई से सुसज्जित उत्पादन-ग्रेड GGUF LLM रनटाइम",
      "challengeText": "Android पर llama.cpp के माध्यम से स्थानीय GGUF मॉडल चलाने के लिए भारी टूलचेन (Clang, CMake), 20+ मिनट का संकलन समय, Bionic लिंकर त्रुटियों और OS द्वारा प्रक्रिया को अचानक बंद किए जाने की समस्याओं का सामना करना पड़ता है।",
      "breakthroughText": "पूर्व-संकलित Android ARM64 नेटिव बायनेरिज़ को शामिल करता है, जो बिना कंपाइलेशन के त्वरित तैनाती, OpenAI-संगत REST/SSE सर्वर और एक ही पैकेज में स्वचालित पृष्ठभूमि प्रक्रिया प्रबंधन प्रदान करता है।",
      "features.0.title": "शून्य-कंपाइलेशन त्वरित परिनियोजन",
      "features.0.desc": "pip या npm के माध्यम से सत्यापित Android Bionic बायनेरिज़ स्थापित करता है, जिससे 10 सेकंड से भी कम समय में स्थानीय LLM अनुमान शुरू हो जाता है।",
      "features.1.title": "ऑक्टा-कोर big.LITTLE शेड्यूलिंग",
      "features.1.desc": "CPU टोपोलॉजी का स्वतः पता लगाता है और गर्मी को रोकते हुए टोकन गति को अधिकतम करने के लिए कार्य को प्रदर्शन कोर पर पिन करता है।",
      "features.2.title": "अंतर्निहित OpenAI REST और SSE स्ट्रीमिंग सर्वर",
      "features.2.desc": "स्थानीय रूप से मानक /v1/chat/completions एंडपॉइंट्स प्रदान करता है, जिससे AI एजेंट टूल के साथ सहज एकीकरण संभव होता है।",
      "features.3.title": "स्वचालित ज़ोंबी प्रक्रिया सुरक्षा और संसाधन सफाई",
      "features.3.desc": "पृष्ठभूमि प्रक्रियाओं की निगरानी करता है और त्रुटि होने पर उन्हें पूरी तरह से समाप्त करता है ताकि बैटरी ड्रेन न हो।"
    }
  },
  "zh": {
    "common": {
      "brand": "Termux-LlamaCpp",
      "releaseTag": "v1.3.11",
      "pkgBtn": "软件包 (pip / npm)",
      "pypiBtn": "PyPI 软件包",
      "npmBtn": "npm 软件包",
      "foundationBtn": "基金会介绍",
      "githubBtn": "GitHub",
      "founderBtn": "创始人履历",
      "footerText": "© 2026 AMEVA 开源基金会. 根据 Apache-2.0 许可证发布.",
      "nav": {
        "docNav": "文档详细目录",
        "foundation": "基金会信息 (AOSF)",
        "libraries": "旗舰库列表",
        "aiSpecs": "AI 代理协议规范",
        "home": "首页 / 架构",
        "installation": "安装指南",
        "quickstart": "快速上手与示例",
        "apiReference": "完整 API 参考",
        "benchmarks": "基准测试与性能",
        "advancedParams": "高级参数微调",
        "versions": "版本发布存档"
      }
    },
    "home": {
      "subtitle": "具备设备资源自适应、模型管理器与 OpenAI 兼容 API 的工业级 GGUF 大模型运行时",
      "challengeText": "在 Android 手机上借助开源 llama.cpp 运行 GGUF 大模型时，开发者通常不得不下载数 GB 的构建工具链（Clang、CMake、Ninja），忍受超过 20 分钟的漫长编译，还要面对脆弱的 Bionic 链接器报错以及后台进程被移动系统频繁强杀的痛点。",
      "breakthroughText": "预先针对 Android ARM64 Bionic 架构完成极致优化与二进制编译，彻底告别端侧本地编译；同时将 OpenAI 兼容的标准 REST/SSE 流式服务器、八核调度与进程自动生命周期守护封装进统一的 pip/npm 库中。",
      "features.0.title": "零编译等待即刻投产部署",
      "features.0.desc": "通过 pip 或 npm 安装后直接加载经全量自检的 Android 原生二进制文件，10 秒内即可开启本地大模型推理。",
      "features.1.title": "八核 big.LITTLE 拓扑自适应调度",
      "features.1.desc": "自动探测手机 CPU 硬件拓扑，将密集计算线程精准绑定至高性能大核，在有效抑制温升的同时最大化 Token 生成速率。",
      "features.2.title": "内置标准 OpenAI REST/SSE 流式服务器",
      "features.2.desc": "本地直接暴露标准 /v1/chat/completions 与 /v1/models 接口，现有 WebUI、AI 智能体框架及开发生态无需任何修改即可无缝接入。",
      "features.3.title": "僵尸进程主动防御与资源自动回收",
      "features.3.desc": "对后台子进程进行全生命周期监管，在异常或关停时彻底清除孤儿进程，严防后台残留与电池无谓消耗。"
    }
  }
};
  if (typeof window !== 'undefined') {
    if (window.i18nManager && window.i18nManager.registerTranslations) {
      window.i18nManager.registerTranslations(translations);
    }
    if (window.i18n && window.i18n.registerTranslations) {
      window.i18n.registerTranslations(translations);
    }
  }
  if (typeof global !== 'undefined') {
    global.i18nTranslations = Object.assign(global.i18nTranslations || {}, translations);
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
  }
})(typeof window !== 'undefined' ? window : global);
