/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
// AMEVA Auto-Generated i18n Dictionary
(function(global) {
  const translations = {
  "en": {
    "common": {
      "brand": "AMEVA-Tts",
      "releaseTag": "v1.0.0",
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
      "subtitle": "Production-Grade 4-Tier On-Device Speech Synthesis Framework (Multilingual Neural TTS)",
      "challengeText": "Running deep learning speech synthesis on mobile hardware frequently causes runtime crashes, thermal throttling, and massive memory spikes (>2GB). Furthermore, GPU shader compiler defects (Adreno JIT crashes, Mali subgroup truncation) historically prevented reliable on-device GPU text-to-speech without tedious C++ compilation barriers.",
      "breakthroughText": "Delivers a resilient 4-Tier on-device speech architecture spanning lightweight DSP synthesis (<50ms, 0MB model), Android native speech routing, and studio-grade 22.05kHz C++ Vulkan GPU neural acceleration, completely packaged for instant 1-click provisioning (termux-tts install).",
      "features.0.title": "4-Tier Resilient Architecture",
      "features.0.desc": "Tier 1: Zero-Dependency Parametric DSP Formant (0MB). Tier 2: Android Native System Voice Bridge. Tier 3: Isolated Sherpa CPU. Tier 4: Pure Vulkan GPU Hardware Neural Acceleration.",
      "features.1.title": "1-Click Automated Provisioning",
      "features.1.desc": "Command line provisioning (termux-tts install --tier high) automatically fetches verified ARM64 binaries and HuggingFace studio weights with built-in self-test verification.",
      "features.2.title": "Pure Vulkan GPU Acceleration",
      "features.2.desc": "Direct GPU compute via Vulkan 1.3 pipeline caching, resolving Adreno 830 and Mali-G68 shader driver quirks with zero silent CPU fallback.",
      "features.3.title": "Subprocess IPC Memory Isolation",
      "features.3.desc": "Architectural separation of speech synthesis and audio playback threads via subprocess IPC prevents Python GIL lockups and playback jitter.",
      "features.4.title": "Studio-Grade FP16 Fidelity",
      "features.4.desc": "Native support for high-resolution 22.05kHz 16-bit PCM studio models (vits-piper-en_US-lessac-high-fp16), delivering natural prosody on mobile hardware."
    }
  },
  "ko": {
    "common": {
      "brand": "AMEVA-Tts",
      "releaseTag": "v1.0.0",
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
      "subtitle": "프로덕션급 4계층 온디바이스 음성 합성 프레임워크 (다국어 신경망 TTS)",
      "challengeText": "모바일 단말기에서 고음질 신경망 음성 합성을 실행할 때 상용 클라우드는 데이터 유출과 비용을 유발하며, 온디바이스로 직접 올리려면 거대 런타임 의존성, 모바일 DRAM 고갈, GPU 셰이더 컴파일러 결함(Adreno JIT 파이프라인 크래시, Mali 서브그룹 절삭) 및 난해한 C++ 빌드 지옥에 직면하게 됩니다.",
      "breakthroughText": "0MB 무의존성 DSP 파라메트릭 합성부터 안드로이드 시스템 네이티브 음성 브릿지, 그리고 스튜디오급 22.05kHz C++ Vulkan GPU 신경망 가속까지 4단계(4-Tier)로 체계화하고, 복잡한 셋업 없이 명령어 1회(termux-tts install)로 즉시 구동되는 완전 복원형 라이브러리로 패키징하였습니다.",
      "features.0.title": "4단계 계층형 복원 아키텍처",
      "features.0.desc": "Tier 1 무의존성 DSP 포먼트(0MB) -> Tier 2 안드로이드 시스템 네이티브 음성 -> Tier 3 격리형 Sherpa CPU -> Tier 4 순수 Vulkan GPU 하드웨어 가속으로 어떤 상황에서도 안정적인 발화를 보장합니다.",
      "features.1.title": "1-클릭 자동 프로비저닝",
      "features.1.desc": "termux-tts install --tier high 명령어 한 줄로 ARM64 바이너리와 고해상도 모델 가중치를 자체 무결성 진단 검증과 함께 자동 설치합니다.",
      "features.2.title": "순수 Vulkan GPU 하드웨어 가속",
      "features.2.desc": "Vulkan 1.3 파이프라인 캐싱을 통해 Adreno 830 및 Mali-G68 드라이버 결함을 완전 해소하고 CPU 침묵 폴백 없이 순수 GPU 연산을 수행합니다.",
      "features.3.title": "서브프로세스 IPC 오디오 격리 보호",
      "features.3.desc": "음성 합성 연산과 OpenSL ES 오디오 재생 스레드를 서브프로세스 IPC로 분리하여 Python GIL 경합 및 오디오 지터(Jitter)를 원천 차단합니다.",
      "features.4.title": "22.05kHz 스튜디오급 FP16 고음질",
      "features.4.desc": "22.05kHz 16비트 PCM 고해상도 레퍼런스 모델을 지원하여 기계음이 아닌 지극히 자연스러운 인간의 억양과 음향 충실도를 구현합니다."
    }
  },
  "ja": {
    "common": {
      "brand": "AMEVA-Tts",
      "releaseTag": "v1.0.0",
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
      "subtitle": "プロダクショングレード4層オンデバイス音声合成フレームワーク（多言語ニューラルTTS）",
      "challengeText": "モバイル端末で高品質なニューラル音声合成を行う際、商用クラウドはプライバシー侵害やコストをもたらし、端末上で直接動かすには巨大な依存関係、メモリ枯渇、GPUシェーダー欠陥、難解なC++ビルド手順の壁に阻まれていました。",
      "breakthroughText": "0MB無依存DSP合成、Androidネイティブ音声ルーティング、スタジオ品質22.05kHz C++ Vulkan GPUニューラル加速までを4階層（4-Tier）で体系化。コマンド1発（termux-tts install）で即座に配備される完全復元型ライブラリを提供します。",
      "features.0.title": "4段階の耐障害性アーキテクチャ",
      "features.0.desc": "Tier 1無依存DSP、Tier 2 Androidネイティブ音声、Tier 3隔離型Sherpa CPU、Tier 4純粋Vulkan GPUハードウェア加速により、あらゆる状況で確実な発話を担保します。",
      "features.1.title": "1クリック自動プロビジョニング",
      "features.1.desc": "termux-tts install --tier highコマンド1つで、ARM64バイナリとモデル重みを自己診断テスト付きで自動セットアップします。",
      "features.2.title": "純粋Vulkan GPUハードウェア加速",
      "features.2.desc": "Vulkan 1.3パイプラインキャッシュにより、Adreno 830およびMali-G68の不具合を解消し、サイレントCPUフォールバックなしでGPU演算を完遂します。",
      "features.3.title": "サブプロセスIPCによるメモリ・音声分離",
      "features.3.desc": "音声合成と再生スレッドをサブプロセスIPCで分離し、Python GILの競合や再生ジッターを完全に防止します。",
      "features.4.title": "22.05kHzスタジオ品質FP16ニューラル音声",
      "features.4.desc": "22.05kHz 16ビットPCM高解像度モデルに対応し、ロボットのような不自然さのない極めて自然な人間のイントネーションを再現します。"
    }
  },
  "hi": {
    "common": {
      "brand": "AMEVA-Tts",
      "releaseTag": "v1.0.0",
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
      "subtitle": "उत्पादन-ग्रेड 4-स्तरीय ऑन-डिवाइस स्पीच सिंथेसिस फ्रेमवर्क (बहुभाषी न्यूरल टीटीएस)",
      "challengeText": "मोबाइल पर तंत्रिका भाषण संश्लेषण चलाने पर क्लाउड डेटा गोपनीयता जोखिम उत्पन्न करता है, जबकि स्थानीय निष्पादन भारी निर्भरताओं, मेमोरी स्पाइक्स और जटिल C++ संकलन बाधाओं से ग्रस्त रहता है।",
      "breakthroughText": "हल्के DSP संश्लेषण (0MB) से लेकर Android नेटिव वॉयस रूटिंग और स्टूडियो-ग्रेड 22.05kHz Vulkan GPU त्वरण तक 4-स्तरीय वाक् वास्तुकला प्रदान करता है, जिसे 1-क्लिक में स्थापित किया जा सकता है।",
      "features.0.title": "4-स्तरीय लचीली वास्तुकला",
      "features.0.desc": "स्तर 1: शून्य-निर्भरता DSP (0MB)। स्तर 2: Android नेटिव वॉयस। स्तर 3: पृथक Sherpa CPU। स्तर 4: शुद्ध Vulkan GPU तंत्रिका त्वरण।",
      "features.1.title": "1-क्लिक स्वचालित प्रावधान",
      "features.1.desc": "termux-tts install --tier high कमांड स्वचालित रूप से ARM64 बायनेरिज़ और मॉडल वज़न को स्व-सत्यापन के साथ डाउनलोड करता है।",
      "features.2.title": "शुद्ध Vulkan GPU हार्डवेयर त्वरण",
      "features.2.desc": "Vulkan 1.3 पाइपलाइन कैशिंग के माध्यम से डायरेक्ट GPU कंप्यूटिंग, जो बिना किसी गुप्त CPU फॉलबैक के Adreno और Mali ड्राइवर दोषों को हल करती है।",
      "features.3.title": "उपप्रक्रिया IPC मेमोरी अलगाव",
      "features.3.desc": "उपप्रक्रिया IPC के माध्यम से वाक् संश्लेषण और ऑडियो प्लेबैक थ्रेड्स का पृथक्करण Python GIL लॉकअप और जिटर को रोकता है।",
      "features.4.title": "स्टूडियो-ग्रेड FP16 निष्ठा (22.05kHz)",
      "features.4.desc": "उच्च-रिज़ॉल्यूशन 22.05kHz 16-बिट PCM स्टूडियो मॉडल का नेटिव समर्थन, जो मोबाइल पर प्राकृतिक मानवीय उच्चारण प्रदान करता है।"
    }
  },
  "zh": {
    "common": {
      "brand": "AMEVA-Tts",
      "releaseTag": "v1.0.0",
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
      "subtitle": "工业级四级梯队端侧语音合成框架（多语言神经网络 TTS）",
      "challengeText": "在移动设备上运行高保真语音合成时，商用云服务会导致隐私外泄与持续资费，而本地部署又面临庞大的运行时依赖、移动内存枯竭、GPU 着色器编译器缺陷（Adreno JIT 崩溃、Mali 子群截断）以及极其繁琐的 C++ 跨平台编译壁垒。",
      "breakthroughText": "构筑 4 级弹性端侧语音架构：涵盖零模型 0MB 轻量 DSP 参数合成、Android 系统原生语音路由，以及录音室级 22.05kHz C++ Vulkan GPU 神经网络加速，全链路封装为一键式开箱即用库 (termux-tts install)。",
      "features.0.title": "4 级自适应高可用弹性架构",
      "features.0.desc": "Tier 1 零依赖参数化 DSP (0MB) -> Tier 2 Android 系统原生语音 -> Tier 3 隔离型 Sherpa CPU -> Tier 4 纯 Vulkan GPU 硬件神经网络加速，确保任何极端场景下皆可稳定发声。",
      "features.1.title": "一键全自动依赖编排与部署",
      "features.1.desc": "只需执行 termux-tts install --tier high，即可自动拉取验证完毕的 ARM64 原生二进制文件与 HuggingFace 高清模型权重并完成自检。",
      "features.2.title": "纯 Vulkan GPU 零静默降级加速",
      "features.2.desc": "通过 Vulkan 1.3 管线预编译与缓存，规避 Adreno 830 和 Mali-G68 着色器驱动缺陷，坚持零静默 CPU 降级，保障真实端侧 GPU 计算。",
      "features.3.title": "子进程 IPC 架构与音频线程隔离",
      "features.3.desc": "通过子进程 IPC 架构将神经网络语音合成引擎与底层 OpenSL ES 播放线程彻底隔离，消除 Python GIL 锁死与播放抖动问题。",
      "features.4.title": "22.05kHz 录音室级 FP16 真实声学重构",
      "features.4.desc": "原生支持 22.05kHz 16 位 PCM 高采样率参考模型，在移动端芯片上呈现高度自然的人类抑扬顿挫与声学表现力。"
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
