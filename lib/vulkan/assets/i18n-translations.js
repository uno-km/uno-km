/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
// AMEVA Auto-Generated i18n Dictionary
(function(global) {
  const translations = {
  "en": {
    "common": {
      "brand": "AMEVA-Runtime",
      "releaseTag": "v2.7.3",
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
      "subtitle": "Unified Cross-Modal Vulkan GPU Acceleration Runtime & HAL for Mobile Android",
      "challengeText": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages.",
      "breakthroughText": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "features.0.title": "Single Loader Chain Pinning",
      "features.0.desc": "Eliminates Termux Mesa vs Android Bionic symbol collisions via dynamic dladdr provenance and sys_gpdf2 isolation.",
      "features.1.title": "12-Stage Probing & Fallback",
      "features.1.desc": "Validates GPU capability from dlopen (V0) to E2E model inference (V11) with transparent CPU NEON recovery.",
      "features.2.title": "Multi-Modal Cross-Acceleration",
      "features.2.desc": "Powers Whisper STT, LLaVA Vision, LLaMA/BitNet LLM, and Stable Diffusion from a single 58MB shared core."
    }
  },
  "ko": {
    "common": {
      "brand": "AMEVA-Runtime",
      "releaseTag": "v2.7.3",
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
      "subtitle": "모바일 안드로이드를 위한 통합 크로스 모달 Vulkan GPU 가속 런타임 및 하드웨어 추상화 계층(HAL)",
      "challengeText": "모바일 안드로이드 환경에서 멀티모달 AI를 실행할 때 파편화된 GPU 드라이버, Bionic과 Mesa 간 로더 충돌, 텐서 정렬 버퍼 오버플로우, 개별 패키지별 중복 바이너리 비대화 문제가 발생합니다.",
      "breakthroughText": "STT, Vision, LLM, Diffusion, Training을 아우르는 단일 C++20 Vulkan 하드웨어 추상화 계층(HAL)과 범용 런타임을 제공하며, 12단계 정밀 검증 계층(V0-V11) 및 무손실 자동 복구 기능을 갖추고 있습니다.",
      "features.0.title": "단일 로더 체인 핀닝",
      "features.0.desc": "동적 dladdr 출처 검증과 sys_gpdf2 격리를 통해 Termux Mesa와 Android Bionic 간 심볼 충돌을 원천 차단합니다.",
      "features.1.title": "12단계 하드웨어 진단 및 폴백",
      "features.1.desc": "dlopen(V0)부터 종단간 모델 추론(V11)까지 GPU 역량을 단계별로 검증하며 CPU NEON 백엔드로 안전하게 자동 전환합니다.",
      "features.2.title": "멀티모달 통합 가속",
      "features.2.desc": "단 58MB의 단일 공유 코어로 Whisper STT, LLaVA Vision, LLaMA/BitNet LLM, Stable Diffusion을 통합 가속합니다."
    }
  },
  "ja": {
    "common": {
      "brand": "AMEVA-Runtime",
      "releaseTag": "v2.7.3",
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
      "subtitle": "モバイルAndroid向け統合クロスモーダルVulkan GPUアクセラレーションランタイム＆HAL",
      "challengeText": "モバイルAndroid環境でマルチモーダルAIを実行する際、断片化されたGPUドライバ、BionicとMesa間のローダークラッシュ、テンソルアライメントバッファのオーバーフローが課題となります。",
      "breakthroughText": "STT、Vision、LLM、Diffusion、Trainingを包括する単一のC++20 Vulkanハードウェア抽象化層（HAL）と汎用ランタイムを提供し、12段階の検証階層（V0-V11）と自動復旧を実現します。",
      "features.0.title": "単一ローダーチェーン固定",
      "features.0.desc": "動的dladdr検証とsys_gpdf2分離により、Termux MesaとAndroid Bionic間のシンボル衝突を排除します。",
      "features.1.title": "12段階の診断とフォールバック",
      "features.1.desc": "dlopen（V0）からE2E推論（V11）までGPU能力を検証し、CPU NEONフォールバックで安全に自動復旧します。",
      "features.2.title": "マルチモーダル統合高速化",
      "features.2.desc": "単一の58MB共有コアからWhisper STT、LLaVA Vision、LLaMA/BitNet LLM、Stable Diffusionを高速化します。"
    }
  },
  "hi": {
    "common": {
      "brand": "AMEVA-Runtime",
      "releaseTag": "v2.7.3",
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
      "subtitle": "मोबाइल एंड्रॉइड के लिए एकीकृत क्रॉस-मॉडल वल्कान (Vulkan) जीपीयू त्वरण रनटाइम और हार्डवेयर एब्स्ट्रैक्शन लेयर (HAL)",
      "challengeText": "मोबाइल एंड्रॉइड पर मल्टी-मॉडल एआई चलाने में खंडित जीपीयू ड्राइवर, बायोनिक (Bionic) और मेसा (Mesa) के बीच लोडर क्रैश, टेंसर अलाइनमेंट बफर ओवरफ्लो और अनावश्यक बाइनरी ब्लोट जैसी गंभीर समस्याएं आती हैं।",
      "breakthroughText": "एसटीटी (STT), विज़न, एलएलएम, डिफ्यूज़न और ट्रेनिंग के लिए सिंगल, ज़ीरो-हार्डकोडेड C++20 वल्कान एचएएल और सार्वभौमिक रनटाइम प्रदान करता है, जिसमें 12-चरणीय सत्यापन पदानुक्रम (V0-V11) और डेटा-हानि रहित ऑटो-रिकवरी शामिल है।",
      "features.0.title": "सिंगल लोडर चेन पिनिंग",
      "features.0.desc": "डायनामिक dladdr उद्गम सत्यापन और sys_gpdf2 आइसोलेशन के माध्यम से टर्मक्स मेसा और एंड्रॉइड बायोनिक प्रतीकों के टकराव को समाप्त करता है।",
      "features.1.title": "12-चरणीय हार्डवेयर प्रोबिंग और फॉलबैक",
      "features.1.desc": "dlopen (V0) से एंड-टू-एंड मॉडल इनफेरेंस (V11) तक जीपीयू क्षमता का सत्यापन करता है और पारदर्शी सीपीयू नियॉन (NEON) रिकवरी प्रदान करता है।",
      "features.2.title": "मल्टी-मॉडल क्रॉस-त्वरण",
      "features.2.desc": "एकल 58MB साझा कोर से व्हिस्पर एसटीटी, लाभा (LLaVA) विज़न, लामा/बिटनेट एलएलएम और स्टेबल डिफ्यूज़न को एकीकृत रूप से त्वरित करता है।"
    }
  },
  "zh": {
    "common": {
      "brand": "AMEVA-Runtime",
      "releaseTag": "v2.7.3",
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
      "subtitle": "适用于移动端 Android 的统一跨模态 Vulkan GPU 硬件加速运行时与硬件抽象层 (HAL)",
      "challengeText": "在移动端 Android 上运行多模态 AI 面临碎片化的 GPU 驱动、Bionic 与 Mesa 之间的加载器崩溃以及张量对齐缓冲区溢出问题。",
      "breakthroughText": "提供单一、零硬编码的 C++20 Vulkan 硬件抽象层 (HAL) 与通用运行时，支持 STT、视觉、大模型、扩散模型与端侧训练，具备 12 级精准验证阶梯 (V0-V11) 与零数据丢失自动恢复机制。",
      "features.0.title": "单一加载器链锁定",
      "features.0.desc": "通过动态 dladdr 溯源验证与 sys_gpdf2 隔离，彻底消除 Termux Mesa 与 Android Bionic 之间的符号冲突。",
      "features.1.title": "12 级硬件探测与自适应回退",
      "features.1.desc": "从 dlopen (V0) 到端到端模型推理 (V11) 逐级验证 GPU 算力，并提供透明的 CPU NEON 恢复能力。",
      "features.2.title": "多模态跨架构一体化加速",
      "features.2.desc": "通过单一 58MB 共享内核，统一加速 Whisper 语音识别、LLaVA 视觉、LLaMA/BitNet 大模型及 Stable Diffusion。"
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
