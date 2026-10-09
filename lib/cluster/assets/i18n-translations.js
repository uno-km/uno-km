/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
// AMEVA Auto-Generated i18n Dictionary
(function(global) {
  const translations = {
  "en": {
    "common": {
      "brand": "AMEVA-Cluster",
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
      "subtitle": "Symmetric Disaggregated Mobile RAM Pooling & On-Device AI Acceleration Runtime with Compute-Memory Decoupling",
      "challengeText": "Executing frontier 70B scale models on standalone mobile devices inevitably triggers Android Low Memory Killer (LMK) termination and thermal throttling. Conventional distributed inference forces compute on all nodes, overheating lower-tier battery-powered devices.",
      "breakthroughText": "AMEVA-Cluster unifies idle LPDDR memory across multiple heterogeneous mobile smartphones into a single disaggregated memory pool using a symmetric master/worker binary. Compute is fully isolated on a single flagship GPU, while edge phones serve strictly as passive RAM caches, completely preventing thermal throttling and Android Low Memory Killer (LMK) SIGKILL terminations. Features built-in storage-assisted hybrid failover to local UFS 3.1 flash mmap streaming and fast-path HMAC mutual authentication Guard proxies.",
      "features.0.title": "Symmetric Single Binary CLI",
      "features.0.desc": "All-in-one architecture supporting both master and worker roles via single CLI flag.",
      "features.1.title": "Compute-Memory Decoupling",
      "features.1.desc": "Worker nodes execute zero GPU passes, acting solely as RAM caches to prevent heat and failure.",
      "features.2.title": "300MB Safety Guard-Band",
      "features.2.desc": "Automatically deducts buffer memory from usable pool to protect against Android LMK kills.",
      "features.3.title": "Mutual Authentication Guard Proxy",
      "features.3.desc": "0.001s Fail-Fast HMAC-SHA256 verification rejecting unauthorized RPC traffic and DoS attempts.",
      "features.4.title": "Storage-Assisted Hybrid Failover",
      "features.4.desc": "Gracefully degrades to local UFS 3.1 flash streaming upon worker disconnects without crashing.",
      "features.5.title": "6-Modality Pluggable Engine",
      "features.5.desc": "Standardized distributed tensor sharding across LLM, Diffusion, Vision, STT, TTS, and Training."
    }
  },
  "ko": {
    "common": {
      "brand": "AMEVA-Cluster",
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
      "subtitle": "연산, 메모리 디커플링 기반 대칭형 분산 모바일 RAM 풀링 및 온디바이스 AI 가속 런타임",
      "challengeText": "단일 모바일 기기에서 70B급 프론티어 거대 모델을 구동하면 안드로이드 LMK(Low Memory Killer) 강제 종료 및 스로틀링이 불가피합니다. 기존 분산 추론은 모든 노드에서 연산을 수행하여 배터리 기반 단말기의 과열을 초래합니다.",
      "breakthroughText": "AMEVA-Cluster는 대칭 마스터/워커 바이너리를 통해 이종 모바일 스마트폰의 유휴 LPDDR 메모리를 단일 분산 메모리 풀로 통합합니다. 연산은 단일 플래그십 GPU에 완전 격리되고 에지 단말기는 순수 수동 RAM 캐시로만 동작하여 과열과 LMK SIGKILL 종료를 차단합니다. 로컬 UFS 3.1 플래시 mmap 스트리밍 기반 하이브리드 장애 조치 및 HMAC 상호 인증 Guard 프록시를 탑재했습니다.",
      "features.0.title": "대칭형 단일 바이너리 CLI",
      "features.0.desc": "단일 CLI 플래그로 마스터와 워커 역할을 모두 지원하는 올인원 아키텍처.",
      "features.1.title": "연산, 메모리 완전 분리",
      "features.1.desc": "워커 노드는 GPU 연산을 전혀 수행하지 않고 순수 RAM 캐시로만 동작하여 과열과 장애를 방지합니다.",
      "features.2.title": "300MB 안전 보호 버퍼",
      "features.2.desc": "안드로이드 LMK 강제 종료를 방지하기 위해 가용 메모리 풀에서 안전 버퍼를 자동 공제합니다.",
      "features.3.title": "HMAC 상호 인증 가드 프록시",
      "features.3.desc": "0.001초 미만 HMAC-SHA256 고속 검증으로 미인가 RPC 트래픽과 DoS 시도를 즉각 차단합니다.",
      "features.4.title": "스토리지 기반 하이브리드 장애 복구",
      "features.4.desc": "워커 연결이 끊어지더라도 크래시 없이 로컬 UFS 3.1 플래시 스트리밍으로 유연하게 복구됩니다.",
      "features.5.title": "6대 모달리티 플러그형 분산 엔진",
      "features.5.desc": "LLM, Diffusion, Vision, STT, TTS, Training 전반에 걸친 표준화된 분산 텐서 샤딩 지원."
    }
  },
  "ja": {
    "common": {
      "brand": "AMEVA-Cluster",
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
      "subtitle": "演算・メモリ分離に基づく対称型分散モバイルRAMプーリング＆オンデバイスAIアクセラレーションランタイム",
      "challengeText": "単一のモバイル端末で70Bクラスの超巨大モデルを実行すると、Android LMK（Low Memory Killer）による強制終了やサーマルスロットリングが不可避となります。従来の分散推論は全ノードで計算を強制し、低スペック端末の過熱を引き起こします。",
      "breakthroughText": "AMEVA-Clusterは対称型マスター／ワーカーバイナリにより、異種スマートフォンの遊休LPDDRメモリを単一の分散メモリプールに統合します。計算は単一のフラッグシップGPUに完全隔離され、エッジ端末は受動的なRAMキャッシュとしてのみ動作し、過熱とLMK SIGKILL終了を防止します。ローカルUFS 3.1フラッシュmmapストリーミングによるハイブリッドフェイルオーバーおよびHMAC相互認証Guardプロキシを備えています。",
      "features.0.title": "対称型単一バイナリCLI",
      "features.0.desc": "単一のCLIフラグでマスターとワーカーの両方の役割をサポートするオールインワン設計。",
      "features.1.title": "計算・メモリ完全分離",
      "features.1.desc": "ワーカーノードはGPU計算を一切実行せず、RAMキャッシュとしてのみ動作し過熱を防止。",
      "features.2.title": "300MB安全保護バッファ",
      "features.2.desc": "Android LMKキルを防ぐため、使用可能プールから安全マージンを自動控除。",
      "features.3.title": "HMAC相互認証Guardプロキシ",
      "features.3.desc": "0.001秒未満のHMAC-SHA256検証により、不正なRPCトラフィックとDoS攻撃を即時遮断。",
      "features.4.title": "ストレージ連携ハイブリッドフェイルオーバー",
      "features.4.desc": "ワーカー切断時もクラッシュすることなくローカルUFS 3.1フラッシュストリーミングへ正常に縮退。",
      "features.5.title": "6モダリティ対応プラグインエンジン",
      "features.5.desc": "LLM、Diffusion、Vision、STT、TTS、Trainingにわたる標準化された分散テンソルシャーディング。"
    }
  },
  "hi": {
    "common": {
      "brand": "AMEVA-Cluster",
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
      "subtitle": "कंप्यूट-मेमोरी डिकूपलिंग के साथ सममित वियोजित मोबाइल रैम पूलिंग और ऑन-डिवाइस एआई त्वरण रनटाइम",
      "challengeText": "स्टैंडअलोन मोबाइल उपकरणों पर 70B पैमाने के मॉडल निष्पादित करने से अनिवार्य रूप से एंड्रॉइड एलएमके टर्मिनेशन और थर्मल थ्रॉटलिंग सक्रिय हो जाती है। पारंपरिक वितरित इनफेरेंस सभी नोड्स पर कंप्यूटिंग को बाध्य करता है, जिससे निचले स्तर के बैटरी चालित उपकरण अत्यधिक गर्म हो जाते हैं।",
      "breakthroughText": "AMEVA-Cluster सममित मास्टर/वर्कर बाइनरी का उपयोग करके कई विषम स्मार्टफोन की निष्क्रिय LPDDR मेमोरी को एकल वियोजित मेमोरी पूल में एकीकृत करता है। कंप्यूट को एकल फ्लैगशिप जीपीयू पर पूरी तरह से अलग किया जाता है, जबकि किनारे के फोन केवल निष्क्रिय रैम कैश के रूप में काम करते हैं, जिससे ओवरहीटिंग और एंड्रॉइड एलएमके SIGKILL समाप्त हो जाते हैं।",
      "features.0.title": "सममित एकल बाइनरी सीएलआई",
      "features.0.desc": "एकल सीएलआई फ़्लैग के माध्यम से मास्टर और वर्कर दोनों भूमिकाओं का समर्थन करने वाला आर्किटेक्चर।",
      "features.1.title": "कंप्यूट-मेमोरी डिकूपलिंग",
      "features.1.desc": "वर्कर नोड्स कोई जीपीयू पास निष्पादित नहीं करते हैं, केवल गर्मी और विफलता को रोकने के लिए रैम कैश के रूप में कार्य करते हैं।",
      "features.2.title": "300MB सुरक्षा गार्ड-बैंड",
      "features.2.desc": "एंड्रॉइड एलएमके किल्स से बचाने के लिए उपयोग करने योग्य पूल से स्वचालित रूप से बफर मेमोरी काटता है।",
      "features.3.title": "म्युचुअल प्रमाणीकरण गार्ड प्रॉक्सी",
      "features.3.desc": "अनधिकृत आरपीसी ट्रैफ़िक और DoS हमलों को अस्वीकार करने वाला 0.001s फ़ेल-फ़ास्ट HMAC-SHA256 सत्यापन।",
      "features.4.title": "स्टोरेज-सहायता प्राप्त हाइब्रिड फ़ेलओवर",
      "features.4.desc": "बिना क्रैश हुए वर्कर डिस्कनेक्ट होने पर स्थानीय यूएफएस 3.1 फ्लैश स्ट्रीमिंग में सुरक्षित रूप से गिरावट।",
      "features.5.title": "6-मॉडल प्लगेबल इंजन",
      "features.5.desc": "एलएलएम, डिफ्यूज़न, विज़न, एसटीटी, टीटीएस और प्रशिक्षण में मानकीकृत वितरित टेंसर शार्डिंग।"
    }
  },
  "zh": {
    "common": {
      "brand": "AMEVA-Cluster",
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
      "subtitle": "基于算力-内存解耦的对称式分布式移动端 RAM 池化与端侧 AI 加速运行时",
      "challengeText": "在单台手机上运行 70B 级前沿大模型必然会触发 Android LMK 强杀进程与发热降频。传统分布式推断强迫所有节点共同参与计算，导致低配电池供电设备严重过热。",
      "breakthroughText": "AMEVA-Cluster 通过单一对称的主从二进制架构，将多台异构闲置手机的 LPDDR 内存聚合为统一的分布式内存池。所有计算完全隔离在单台旗舰 GPU 上执行，其余终端严格充当被动 RAM 缓存，从根本上杜绝发热降频与 LMK SIGKILL 进程终止。内置基于本地 UFS 3.1 闪存 mmap 流式回退机制与高速 HMAC 双向认证安全代理。",
      "features.0.title": "对称单二进制 CLI",
      "features.0.desc": "通过单一命令行参数即可无缝切换 Master 与 Worker 角色的二合一轻量架构。",
      "features.1.title": "算力与内存彻底解耦",
      "features.1.desc": "从节点绝不执行繁重 GPU 算子，严格作为只读 RAM 缓存运行以彻底防止设备发热。",
      "features.2.title": "300MB 系统安全保护预留",
      "features.2.desc": "自动从可用内存池中扣除安全冗余量，防止触发 Android 操作系统底层 LMK 强杀。",
      "features.3.title": "HMAC 双向认证防护代理",
      "features.3.desc": "0.001 秒级极速 HMAC-SHA256 鉴权，毫秒级主动拦截未授权 RPC 流量与 DoS 攻击。",
      "features.4.title": "闪存流式混合故障转移",
      "features.4.desc": "从节点发生异常断连时，平滑降级至本地 UFS 3.1 闪存 mmap 流式加载，杜绝崩溃。",
      "features.5.title": "六模态可插拔分布式引擎",
      "features.5.desc": "在 LLM、扩散模型、视觉、STT、TTS 及微调训练全模态间提供标准化的张量切分支持。"
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
