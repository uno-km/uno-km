/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
// AMEVA Auto-Generated i18n Dictionary
(function(global) {
  const translations = {
  "en": {
    "common": {
      "brand": "Termux-BitNet",
      "releaseTag": "v2.0.0",
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
      "subtitle": "Sovereign 1.58-Bit On-Device LLM Inference Engine with ARM64 NEON DotProd SIMD & Native Vulkan GPU Acceleration",
      "challengeText": "Microsoft's 1.58-bit ternary quantized LLM (BitNet) offers optimal computational efficiency for edge devices. However, attempting to compile and execute upstream BitNet directly in Android Termux introduces severe Bionic libc incompatibilities, CMake cross-compilation errors, dynamic linker symbol collisions, and fragile manual ARM64 NEON assembly setup hurdles.",
      "breakthroughText": "Eliminates all compilation barriers by packaging pre-vectorized ARM64 NEON DotProd kernels and AMEVA-Runtime Vulkan compute pipelines into unified pip and npm packages, delivering instant 1-line installation and stable, production-grade library APIs for on-device inference.",
      "features.0.title": "1-Click Zero-Compilation Package",
      "features.0.desc": "Delivers pre-verified Android ARM64 native Bionic binaries and runtime bindings directly via pip and npm, completely eliminating Clang/CMake setup and toolchain headaches.",
      "features.1.title": "Native Vulkan Compute GPU Acceleration",
      "features.1.desc": "Fuses 30 transformer layers into dedicated SPIR-V compute shaders (i2_s GEMV, RoPE, Attention Decode) via AMEVA-Runtime, achieving up to 12.58x speedup on mobile GPUs.",
      "features.2.title": "ARM64 NEON DotProd SIMD Core",
      "features.2.desc": "Hand-vectorized vdotq_s32 assembly kernels substitute floating-point matrix multiplications with integer addition and subtraction, drastically reducing thermal throttling.",
      "features.3.title": "Permanent VRAM Residency & Zero-Bus Bottleneck",
      "features.3.desc": "Pre-allocates unified GPU storage buffers for transformer weights and LM Head at initialization, eliminating repeated host-to-device bus transfers during token generation.",
      "features.4.title": "Dynamic Parameter Updates & Weakref GC",
      "features.4.desc": "Updates temperature, top_p, and repeat penalties on-the-fly without model reload, backed by weakref lifetime management that prevents VRAM and system memory leaks."
    }
  },
  "ko": {
    "common": {
      "brand": "Termux-BitNet",
      "releaseTag": "v2.0.0",
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
      "subtitle": "ARM64 NEON DotProd SIMD 및 네이티브 Vulkan GPU 가속을 탑재한 소버린 1.58비트 온디바이스 LLM 추론 엔진",
      "challengeText": "Microsoft에서 공개한 1.58비트 양자화 특화 LLM(BitNet)은 모바일 환경에 최적의 효율을 제공하지만, Android Termux 환경에서 직접 빌드하고 구동하려 하면 Bionic C 라이브러리 비호환, CMake 크로스 컴파일 실패, 동적 링커 심볼 충돌, 그리고 난해한 수작업 ARM64 NEON 어셈블리 셋업의 번거로움에 직면하게 됩니다.",
      "breakthroughText": "복잡한 빌드 체인과 링커 오류를 전면 해소하고, 사전 벡터화된 ARM64 NEON DotProd 커널과 AMEVA-Runtime Vulkan GPU 파이프라인을 단일 pip/npm 패키지로 결합하여 단 한 줄의 명령어로 즉시 호출할 수 있는 완성형 온디바이스 라이브러리를 완성하였습니다.",
      "features.0.title": "원클릭 무빌드 패키징",
      "features.0.desc": "사전 검증된 안드로이드 ARM64 Bionic 네이티브 바이너리와 런타임을 pip 및 npm으로 직접 배포하여 Clang/CMake 툴체인 설정과 컴파일 오류를 원천 차단합니다.",
      "features.1.title": "순수 Vulkan GPU 가속 연산",
      "features.1.desc": "AMEVA-Runtime의 SPIR-V 컴퓨트 셰이더(i2_s GEMV, RoPE, Attention Decode)를 결합하여 모바일 GPU에서 최대 12.58배 추론 가속을 실현합니다.",
      "features.2.title": "ARM64 NEON DotProd SIMD 코어",
      "features.2.desc": "핸드 벡터화된 vdotq_s32 어셈블리 커널을 통해 부동소수점 행렬 곱셈을 정수 덧셈과 뺄셈으로 치환하여 모바일 발열과 전력 소모를 극적으로 줄입니다.",
      "features.3.title": "영구 VRAM 상주 및 버스 병목 제거",
      "features.3.desc": "초기화 단계에서 가중치와 LM Head를 GPU 통합 버퍼에 영구 상주시켜 토큰 생성 도중 발생하는 CPU-GPU 간 반복 전송 지연을 완전히 제거합니다.",
      "features.4.title": "동적 파라미터 갱신 및 메모리 누수 방지",
      "features.4.desc": "모델 재로드 없이 temperature, top_p 등을 실시간 동적 갱신하며, Weakref 수명 주기 관리로 VRAM 및 시스템 메모리 누수를 원천 차단합니다."
    }
  },
  "ja": {
    "common": {
      "brand": "Termux-BitNet",
      "releaseTag": "v2.0.0",
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
      "subtitle": "ARM64 NEON DotProd SIMDおよびネイティブVulkan GPU高速化を備えたソブリン1.58ビットオンデバイスLLM推論エンジン",
      "challengeText": "Microsoftの1.58ビット3値量子化LLM（BitNet）はエッジ環境に最適な効率を提供しますが、Android Termux上で直接ビルド・実行しようとすると、Bionic libcの非互換性、CMakeクロスコンパイルの失敗、リンカーシンボルの衝突、手動NEONアセンブリ設定の難解な障壁に直面します。",
      "breakthroughText": "複雑なビルド手順とリンカーエラーを完全解消し、事前ベクトル化されたARM64 NEON DotProdカーネルとAMEVA-Runtime Vulkan GPUパイプラインを統合pip/npmパッケージ化。1行のコマンドで即時利用可能な安定したライブラリAPIを実現しました。",
      "features.0.title": "1クリック・ビルド不要パッケージ",
      "features.0.desc": "検証済みのAndroid ARM64 Bionicネイティブバイナリをpipおよびnpmで直接配信し、Clang/CMakeの環境構築やコンパイルエラーを根本から排除します。",
      "features.1.title": "ネイティブVulkan GPUアクセラレーション",
      "features.1.desc": "AMEVA-RuntimeのSPIR-Vコンピュートシェーダーを統合し、モバイルGPU上で最大12.58倍の推論高速化を実現します。",
      "features.2.title": "ARM64 NEON DotProd SIMDコア",
      "features.2.desc": "最適化されたvdotq_s32アセンブリカーネルにより浮動小数点行列乗算を整数加減算に置換し、発熱と消費電力を劇的に抑制します。",
      "features.3.title": "永続VRAM常駐＆バスボトルネック解消",
      "features.3.desc": "初期化時にトランスフォーマー重みとLM HeadをGPUバッファに永続常駐させ、トークン生成中のホスト・デバイス間データ転送遅延を排除します。",
      "features.4.title": "動的パラメータ更新＆メモリリーク防止",
      "features.4.desc": "モデルの再読込なしでtemperatureやtop_pを動的更新し、Weakrefライフサイクル管理によりVRAMおよびメモリリークを防止します。"
    }
  },
  "hi": {
    "common": {
      "brand": "Termux-BitNet",
      "releaseTag": "v2.0.0",
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
      "subtitle": "ARM64 NEON DotProd SIMD और मूल Vulkan GPU त्वरण के साथ सॉवरेन 1.58-बिट ऑन-डिवाइस LLM इनफेरेंस इंजन",
      "challengeText": "माइक्रोसॉफ्ट का 1.58-बिट क्वांटाइज़्ड LLM (BitNet) एज डिवाइसों के लिए उत्कृष्ट दक्षता प्रदान करता है, लेकिन इसे Android Termux में सीधे कंपाइल और निष्पादित करने पर Bionic libc असंगति, CMake विफलताएं, लिंकर सिंबल टकराव और जटिल ARM64 NEON सेटअप की बाधाएं आती हैं।",
      "breakthroughText": "सभी कंपाइलेशन बाधाओं को समाप्त करते हुए, पूर्व-वेक्टराइज्ड ARM64 NEON DotProd कर्नेल और Vulkan पाइपलाइन को एकीकृत pip और npm पैकेजों में संकलित किया गया है, जो एकल-पंक्ति स्थापना और स्थिर लाइब्रेरी API प्रदान करता है।",
      "features.0.title": "1-क्लिक शून्य-कंपाइलेशन पैकेज",
      "features.0.desc": "सत्यापित Android ARM64 Bionic नेटिव बायनेरिज़ को सीधे pip और npm के माध्यम से वितरित करता है, जिससे Clang/CMake टूलचेन सेटअप पूरी तरह समाप्त हो जाता है।",
      "features.1.title": "नेटिव Vulkan GPU कंप्यूट त्वरण",
      "features.1.desc": "AMEVA-Runtime के माध्यम से 30 ट्रांसफॉर्मर परतों को SPIR-V शेडर्स में जोड़ता है, जिससे मोबाइल GPU पर 12.58x तक की गति प्राप्त होती है।",
      "features.2.title": "ARM64 NEON DotProd SIMD कोर",
      "features.2.desc": "हैंड-वेक्टराइज्ड vdotq_s32 असेंबली कर्नेल फ्लोटिंग-पॉइंट गुणन को पूर्णांक जोड़/घटाव से बदल देते हैं, जिससे थर्मल थ्रॉटलिंग में भारी कमी आती है।",
      "features.3.title": "स्थायी VRAM निवास और शून्य-बस बाधा",
      "features.3.desc": "प्रारंभ में ही GPU स्टोरेज बफ़र्स को प्री-एलोकेट करता है, जिससे टोकन निर्माण के दौरान बार-बार होने वाले डेटा ट्रांसफर समाप्त हो जाते हैं।",
      "features.4.title": "डायनामिक पैरामीटर अपडेट और मेमोरी रिसाव सुरक्षा",
      "features.4.desc": "मॉडल को फिर से लोड किए बिना तापमान और top_p को गतिशील रूप से अपडेट करता है, और weakref प्रबंधन द्वारा मेमोरी लीक को रोकता है।"
    }
  },
  "zh": {
    "common": {
      "brand": "Termux-BitNet",
      "releaseTag": "v2.0.0",
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
      "subtitle": "搭载 ARM64 NEON DotProd SIMD 与原生 Vulkan GPU 加速的端侧 1.58-Bit 大模型推理引擎",
      "challengeText": "微软 1.58 位三元量化专用大模型 (BitNet) 具备极致的端侧计算效率，但在 Android Termux 环境下直接编译运行时，开发者常遭遇 Bionic libc 兼容性缺失、CMake 交叉编译故障、动态链接器符号冲突以及手动配置 ARM64 NEON 汇编内核的繁琐壁垒。",
      "breakthroughText": "彻底消除所有端侧编译门槛，将预先向量化的 ARM64 NEON DotProd 汇编内核与 AMEVA-Runtime Vulkan 计算管线封装为统一的 pip 和 npm 软件包，实现一行命令即装即用且稳定可靠的生产级端侧推理库。",
      "features.0.title": "一键免编译原生分发",
      "features.0.desc": "通过 pip 和 npm 直接分发经严格验证的 Android ARM64 Bionic 原生二进制文件，彻底告别 Clang/CMake 工具链配置和编译失败问题。",
      "features.1.title": "原生 Vulkan GPU 硬件计算加速",
      "features.1.desc": "借助 AMEVA-Runtime 专属 SPIR-V 计算着色器，将 30 层 Transformer 融合执行，在移动端 GPU 上实现最高 12.58 倍推理加速。",
      "features.2.title": "ARM64 NEON DotProd 向量内核",
      "features.2.desc": "深度优化的 vdotq_s32 汇编内核将浮点矩阵乘法转化为纯整数加减运算，极大降低移动设备发热与能耗。",
      "features.3.title": "永久显存驻留与零总线瓶颈",
      "features.3.desc": "初始化阶段即在 GPU 显存中预分配权重与 LM Head 缓冲区，彻底消除逐 Token 自回归生成过程中的 CPU-GPU 总线数据搬运开销。",
      "features.4.title": "动态参数热更新与弱引用安全回收",
      "features.4.desc": "支持无需重载模型的运行时 temperature 和 top_p 热更新，配合弱引用生命周期管理，杜绝 GPU 显存与系统内存泄露。"
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
