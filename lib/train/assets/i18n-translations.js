/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
// AMEVA Auto-Generated i18n Dictionary
(function(global) {
  const translations = {
  "en": {
    "common": {
      "brand": "Termux-Train",
      "releaseTag": "v2.0.1",
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
      "subtitle": "Lightweight On-Device Tensor & DAG Autograd Deep Learning Framework for Android",
      "challengeText": "Standard deep learning frameworks cannot compile cleanly on Android Bionic and exceed smartphone RAM during backpropagation.",
      "breakthroughText": "Provides a clean C-based DAG computation graph with SafeTensors zero-copy serialization and LoRA adapter fine-tuning on smartphone CPUs.",
      "features.0.title": "Deterministic 0-Drift Output",
      "features.0.desc": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
      "features.1.title": "Zero Cloud Egress Architecture",
      "features.1.desc": "Operates 100% on the local client without external network telemetry leaks.",
      "features.2.title": "Memory Leakage Protection",
      "features.2.desc": "Weakref lifetime management preventing GPU VRAM / system RAM leaks."
    }
  },
  "ko": {
    "common": {
      "brand": "Termux-Train",
      "releaseTag": "v2.0.1",
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
      "subtitle": "모바일 온디바이스 경량 LoRA 및 가중치 파인튜닝 엔진",
      "challengeText": "에지 디바이스의 제한된 메모리에서 역전파(Backpropagation) 계산 시 발생하는 OOM 오류.",
      "breakthroughText": "그래디언트 체크포인팅과 4비트 양자화 옵티마이저를 결합하여 스마트폰에서 직접 LoRA 파인튜닝을 수행합니다.",
      "features.0.title": "온디바이스 LoRA 학습",
      "features.0.desc": "PC나 클라우드 없이 모바일 기기 단독으로 모델 파인튜닝.",
      "features.1.title": "메모리 절약형 옵티마이저",
      "features.1.desc": "AdamW 대비 메모리 사용량을 75% 절감하는 정수 옵티마이저 탑재.",
      "features.2.title": "체크포인트 자동 복구",
      "features.2.desc": "학습 중 배터리 방전 시 마지막 상태에서 안전하게 재개."
    }
  },
  "ja": {
    "common": {
      "brand": "Termux-Train",
      "releaseTag": "v2.0.1",
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
      "subtitle": "Android向け軽量オンデバイステンソル＆DAGオートグラード深層学習フレームワーク",
      "challengeText": "標準的な深層学習フレームワークはAndroid Bionic上で正常にコンパイルできず、逆伝播時にスマートフォンのRAM容量を超過します。",
      "breakthroughText": "SafeTensorsゼロコピーシリアライゼーションとスマートフォンCPU上でのLoRAアダプタ微調整を備えた、クリーンなCベースDAG計算グラフを提供します。",
      "features.0.title": "オンデバイスLoRA学習",
      "features.0.desc": "PCやクラウドに頼ることなく、モバイル端末単独でモデルのファインチューニングを完結実行します。",
      "features.1.title": "メモリ節約型オプティマイザ",
      "features.1.desc": "標準的なAdamWと比較してメモリ使用量を75%削減する省メモリ型整数オプティマイザを搭載。",
      "features.2.title": "チェックポイント自動復旧",
      "features.2.desc": "学習中のバッテリー低下や中断時でも、最後の保存状態から安全かつ確実に再開します。"
    }
  },
  "hi": {
    "common": {
      "brand": "Termux-Train",
      "releaseTag": "v2.0.1",
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
      "subtitle": "एंड्रॉइड के लिए लाइटवेट ऑन-डिवाइस टेंसर और डीएजी (DAG) ऑटोगाड डीप लर्निंग फ्रेमवर्क",
      "challengeText": "मानक डीप लर्निंग फ्रेमवर्क एंड्रॉइड बायोनिक पर ठीक से संकलित नहीं होते और बैकप्रॉपैगैशन के दौरान स्मार्टफोन रैम की सीमा को पार कर जाते हैं।",
      "breakthroughText": "स्मार्टफोन सीपीयू पर सेफटेंसर्स (SafeTensors) ज़ीरो-कॉपी सीरियलाइज़ेशन और लोरा (LoRA) एडॉप्टर फाइन-ट्यूनिंग के साथ शुद्ध C-आधारित डीएजी गणना ग्राफ प्रदान करता है।",
      "features.0.title": "ऑन-डिवाइस लोरा प्रशिक्षण",
      "features.0.desc": "पीसी या क्लाउड पर निर्भर हुए बिना मोबाइल डिवाइस पर स्वतंत्र रूप से मॉडल फाइन-ट्यूनिंग निष्पादित करता है।",
      "features.1.title": "मेमोरी-कुशल ऑप्टिमाइज़र",
      "features.1.desc": "मानक AdamW की तुलना में मेमोरी खपत को 75% कम करने वाले कुशल पूर्णांक ऑप्टिमाइज़र से सुसज्जित।",
      "features.2.title": "चेकपॉइंट स्वचालित पुनर्प्राप्ति",
      "features.2.desc": "प्रशिक्षण के दौरान बैटरी खत्म होने या रुकावट पर अंतिम सहेजी गई स्थिति से सुरक्षित रूप से पुनः आरंभ होता है।"
    }
  },
  "zh": {
    "common": {
      "brand": "Termux-Train",
      "releaseTag": "v2.0.1",
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
      "subtitle": "适用于 Android 的轻量级端侧张量与 DAG 自动微分深度学习框架",
      "challengeText": "传统的深度学习框架无法在 Android Bionic 上顺利编译，且在反向传播计算时容易超出手机内存限制。",
      "breakthroughText": "提供纯 C 构建的轻量 DAG 计算图，支持 SafeTensors 零拷贝序列化以及在手机 CPU 上直接微调 LoRA 适配器。",
      "features.0.title": "端侧 LoRA 模型训练",
      "features.0.desc": "无需依赖 PC 或云端集群，在移动终端上独立完成轻量级模型微调。",
      "features.1.title": "省内存低开销优化器",
      "features.1.desc": "搭载低开销整数优化器，相比标准 AdamW 可降低高达 75% 的内存占用。",
      "features.2.title": "检查点状态自动恢复",
      "features.2.desc": "训练过程中如遇断电或中断，可从最近的检查点安全无缝恢复训练。"
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
