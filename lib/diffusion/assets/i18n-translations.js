/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
// AMEVA Auto-Generated i18n Dictionary
(function(global) {
  const translations = {
  "en": {
    "common": {
      "brand": "Termux-Diffusion",
      "releaseTag": "v1.8.0",
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
      "subtitle": "Official Z-Image Turbo (6.0B DiT) & Pure Native On-Device Diffusion Acceleration Runtime",
      "challengeText": "Generating AI images locally on mobile devices without relying on third-party cloud APIs typically forces users into bloated PRoot Linux containers, multi-gigabyte disk consumption, severe DRAM exhaustion (OOM crashes), and arduous C++ Vulkan/NCNN build failures.",
      "breakthroughText": "Delivers an ultra-lightweight Android Bionic ARM64 native Stable Diffusion runtime running directly without root or PRoot containers. Combines ARMv8.2-A DotProd SIMD vector execution with GPU Vulkan compute shaders into an effortless 1-line pip/npm library with automatic Samsung Gallery indexing.",
      "features.0.title": "Zero-PRoot Native ARM64 Bionic",
      "features.0.desc": "Executes directly on Android Bionic libc without root privileges, virtual machines, or PRoot container overhead, cutting RAM consumption by over 70%.",
      "features.1.title": "Adaptive SIMD & Vulkan Compute Routing",
      "features.1.desc": "Intelligently dynamically balances ARM NEON multi-threaded FP16 SIMD CPU routines and Vulkan compute shaders based on current SoC capabilities.",
      "features.2.title": "Samsung Gallery Auto-Indexing",
      "features.2.desc": "Automatically broadcasts Android MEDIA_SCANNER intents upon image generation, immediately displaying results inside the native photo album without manual refresh."
    }
  },
  "ko": {
    "common": {
      "brand": "Termux-Diffusion",
      "releaseTag": "v1.8.0",
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
      "subtitle": "공식 Z-Image Turbo (6.0B DiT) 및 순수 네이티브 온디바이스 Diffusion 가속 런타임",
      "challengeText": "스마트폰에서 외부 클라우드 API에 의존하지 않고 AI 이미지를 생성하려 하면, 무거운 PRoot 리눅스 가상 컨테이너 환경 구축, 수십 기가바이트의 디스크 낭비, 모바일 DRAM 부족으로 인한 강제 프로세스 종료(OOM 킬), 그리고 난해한 C++ Vulkan/NCNN 컴파일 오류에 직면하게 됩니다.",
      "breakthroughText": "루팅(Root)이나 PRoot 컨테이너 없이 Android Bionic 네이티브 환경에서 직접 구동되는 초경량 Stable Diffusion 런타임을 구현하였으며, ARMv8.2-A DotProd SIMD 및 Vulkan GPU 셰이더 가속을 단일 pip/npm 라이브러리로 완성하여 스마트폰에서 단 몇 줄의 코드로 이미지를 생성하고 갤러리에 자동 등록할 수 있게 하였습니다.",
      "features.0.title": "루팅/컨테이너 없는 순수 네이티브 구동",
      "features.0.desc": "가상 머신이나 무거운 PRoot 리눅스 환경 없이 Android Bionic libc에서 직접 실행되어 시스템 메모리 점유율을 70% 이상 대폭 절감합니다.",
      "features.1.title": "디바이스 적응형 가속 라우팅",
      "features.1.desc": "기기 하드웨어 스펙을 감지하여 ARM NEON 멀티스레드 FP16 SIMD 연산과 모바일 GPU Vulkan 컴퓨트 파이프라인을 최적으로 지능형 분기 실행합니다.",
      "features.2.title": "삼성 갤러리 즉시 자동 동기화",
      "features.2.desc": "이미지 생성 즉시 안드로이드 MEDIA_SCANNER 브로드캐스트를 전송하여 파일 이동이나 새로고침 없이 스마트폰 기본 갤러리 앱에 바로 사진이 노출됩니다."
    }
  },
  "ja": {
    "common": {
      "brand": "Termux-Diffusion",
      "releaseTag": "v1.8.0",
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
      "subtitle": "公式Z-Image Turbo（6.0B DiT）および完全ネイティブオンデバイスDiffusion高速化ランタイム",
      "challengeText": "外部クラウドAPIに頼らずスマートフォン端末上でAI画像生成を行おうとすると、重厚なPRoot仮想コンテナの構築、膨大なストレージ浪費、メモリ枯渇（OOMクラッシュ）、難解なC++ Vulkan/NCNNコンパイルエラーの壁に阻まれます。",
      "breakthroughText": "ルート権限やPRootコンテナを一切使わずAndroid Bionic上で直接動作する超軽量Stable Diffusionランタイムを実現。ARMv8.2-A DotProd SIMDおよびVulkan GPUシェーダー加速を統合pip/npmパッケージ化し、Samsung Galleryへの自動登録まで完結させました。",
      "features.0.title": "PRoot不要の純粋ARM64ネイティブ動作",
      "features.0.desc": "仮想マシンや重いPRoot環境を介さず、Android Bionic libc上で直接実行されるため、メモリオーバーヘッドを70%以上削減します。",
      "features.1.title": "適応型SIMD＆Vulkanコンピュートルーティング",
      "features.1.desc": "SoCスペックを自動検知し、ARM NEONマルチスレッドFP16 SIMDとモバイルGPU Vulkanパイプラインを最適に自動選択・実行します。",
      "features.2.title": "端末ギャラリーへの即時自動登録",
      "features.2.desc": "画像生成完了時にAndroid MEDIA_SCANNERインテントを発行し、手動更新不要で端末の標準写真アプリに即時反映させます。"
    }
  },
  "hi": {
    "common": {
      "brand": "Termux-Diffusion",
      "releaseTag": "v1.8.0",
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
      "subtitle": "आधिकारिक Z-Image Turbo (6.0B DiT) और शुद्ध मूल ऑन-डिवाइस डिफ्यूज़न त्वरण रनटाइम",
      "challengeText": "क्लाउड API पर निर्भर हुए बिना मोबाइल पर स्थानीय रूप से AI छवियां उत्पन्न करने के लिए उपयोगकर्ताओं को भारी PRoot कंटेनरों, अत्यधिक डिस्क खपत, मेमोरी की कमी (OOM क्रैश) और कठिन C++ संकलन विफलताओं का सामना करना पड़ता है।",
      "breakthroughText": "बिना रूट या PRoot कंटेनरों के सीधे Android Bionic पर चलने वाला एक हल्का नेटिव Stable Diffusion रनटाइम प्रदान करता है, जो ARMv8.2-A DotProd SIMD और Vulkan GPU त्वरण को स्वचालित गैलरी इंडेक्सिंग के साथ pip/npm में जोड़ता है।",
      "features.0.title": "शून्य-PRoot नेटिव ARM64 Bionic",
      "features.0.desc": "रूट या वर्चुअल मशीनों के बिना सीधे Android Bionic libc पर निष्पादित होता है, जिससे RAM की खपत 70% से अधिक कम हो जाती है।",
      "features.1.title": "अनुकूली SIMD और Vulkan कंप्यूट रूटिंग",
      "features.1.desc": "SoC क्षमताओं के आधार पर ARM NEON मल्टी-थ्रेडेड FP16 SIMD और Vulkan शेडर्स के बीच बुद्धिमानी से संतुलन बनाता है।",
      "features.2.title": "स्वचालित सैमसंग गैलरी इंडेक्सिंग",
      "features.2.desc": "छवि निर्माण पर तुरंत Android MEDIA_SCANNER ब्रॉडकास्ट भेजता है, जिससे परिणाम तुरंत नेटिव फोटो एलबम में दिखाई देता है।"
    }
  },
  "zh": {
    "common": {
      "brand": "Termux-Diffusion",
      "releaseTag": "v1.8.0",
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
      "subtitle": "官方 Z-Image Turbo (6.0B DiT) 与纯原生端侧扩散模型硬件加速运行时",
      "challengeText": "在移动端完全脱离第三方云端 API 生成 AI 图像时，开发者往往被迫配置臃肿的 PRoot Linux 容器环境，面临数十 GB 磁盘消耗、端侧内存暴涨溢出（OOM 被杀）以及极其复杂的 C++ Vulkan/NCNN 编译失败阻碍。",
      "breakthroughText": "实现了无需 Root 权限或 PRoot 虚拟容器、直接在 Android Bionic 原生环境中运行的超轻量 Stable Diffusion 运行时。将 ARMv8.2-A DotProd SIMD 与 Vulkan GPU 计算加速深度整合进 pip/npm 库，并支持生成图片自动入库三星相册。",
      "features.0.title": "免 PRoot 容器免 Root 纯原生执行",
      "features.0.desc": "脱离虚拟机或笨重 Linux 容器，直接在 Android Bionic libc 环境下原生运行，系统内存开销直降 70% 以上。",
      "features.1.title": "硬件自适应向量与 Vulkan 计算路由",
      "features.1.desc": "智能感知端侧芯片算力特性，在 ARM NEON 多线程 FP16 向量计算与移动端 Vulkan 着色器管线之间实现最优动态调度。",
      "features.2.title": "系统相册秒级自动扫描入库",
      "features.2.desc": "图像生成完毕后立即广播 Android MEDIA_SCANNER 意图，无需手动翻找文件系统，照片立即可在系统原生相册中直接查看。"
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
