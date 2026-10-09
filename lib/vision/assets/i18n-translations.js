/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
// AMEVA Auto-Generated i18n Dictionary
(function(global) {
  const translations = {
  "en": {
    "common": {
      "brand": "Termux-Vision",
      "releaseTag": "v1.4.0",
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
      "subtitle": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine with Hardware Offloading",
      "challengeText": "Conventional computer vision frameworks (OpenCV, TorchVision) demand immense binary sizes (>150MB) and trigger grueling C++ compilation failures on ARM64 Termux. Furthermore, running on-device multimodal Vision-Language Models (VLMs) historically suffered from fragmented camera pipelines, VRAM memory bloat, and device freeze-ups.",
      "breakthroughText": "Completely eliminates heavy C++ and PyTorch dependencies by implementing core vision kernels (5-stage Canny Edge, Sobel, Gaussian, 2D Integral, Haar Cascade) in pure zero-dependency code, while offloading on-device SmolVLM/Qwen2-VL multimodal inference directly to Vulkan GPU with zero-copy buffer sharing.",
      "features.0.title": "Zero-Heavy Dependency Architecture",
      "features.0.desc": "Runs out-of-the-box on standard Termux Python (pip) and Node.js (npm) runtimes without external C++ compilers or bloated OpenCV packages.",
      "features.1.title": "Pure Vulkan GPU Full-Layer Offloading",
      "features.1.desc": "Achieves 0.00 MiB CPU Mapped VRAM overhead on mobile Adreno and Mali chips by executing VLM vision projections directly in hardware shader memory.",
      "features.2.title": "Zero-Copy Camera & Image Pipeline",
      "features.2.desc": "Directly ingests device camera streams and raw pixel buffers without intermediate allocations, optimizing frame throughput for real-time edge analytics."
    }
  },
  "ko": {
    "common": {
      "brand": "Termux-Vision",
      "releaseTag": "v1.4.0",
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
      "subtitle": "하드웨어 오프로딩을 지원하는 제로 의존성 온디바이스 컴퓨터 비전 및 멀티모달 VLM 추론 엔진",
      "challengeText": "모바일 단말기에서 컴퓨터 비전 및 시각 언어 모델(VLM)을 구동하려면 150MB가 넘는 OpenCV, TorchVision 등 거대 라이브러리를 설치해야 하며, Android Termux 상에서 C++ 컴파일 에러, 카메라 프레임 파이프라인 단절, VRAM 메모리 누수로 인해 스마트폰이 멈추거나 튕기는 현상이 빈번했습니다.",
      "breakthroughText": "무거운 외부 C++ 의존성을 완전히 걷어내고 순수 Python/Node.js로 캐니 에지, 소벨 필터, 가우시안 블러, 적분 영상, Haar 캐스케이드 얼굴 인식을 구현하는 동시에, 온디바이스 SmolVLM/Qwen2-VL 멀티모달 추론을 Vulkan GPU 메모리 제로카피로 직결한 완성형 비전 패키지를 구축하였습니다.",
      "features.0.title": "무의존성 초경량 순수 비전",
      "features.0.desc": "외장 C++ 컴파일러나 150MB가 넘는 OpenCV 설치 없이 바닐라 Termux Python 및 Node.js 환경에서 즉시 구동되는 고성능 이미지 알고리즘을 탑재했습니다.",
      "features.1.title": "순수 Vulkan GPU 전체 계층 오프로딩",
      "features.1.desc": "모바일 Adreno 및 Mali GPU 하드웨어 셰이더 메모리에서 직접 VLM 비전 프로젝션을 실행하여 CPU 버퍼 복사 지연을 제거하고 0.00 MiB VRAM 맵핑 오프로딩을 실현합니다.",
      "features.2.title": "제로카피 카메라 및 이미지 파이프라인",
      "features.2.desc": "중간 버퍼 재할당 없이 기기 카메라 프레임과 raw 픽셀 버퍼를 즉시 직접 수신하여 실시간 엣지 비전 분석의 프레임 레이트를 극대화합니다."
    }
  },
  "ja": {
    "common": {
      "brand": "Termux-Vision",
      "releaseTag": "v1.4.0",
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
      "subtitle": "ハードウェアオフローディング対応ゼロ依存オンデバイスコンピュータビジョン＆マルチモーダルVLM推論エンジン",
      "challengeText": "端末上でコンピュータビジョンやVLMを実行するには150MB超の巨大ライブラリ（OpenCV、TorchVision）が必要で、Termux上でのC++ビルドエラー、カメラパイプラインの断絶、メモリ枯渇によるフリーズが頻発していました。",
      "breakthroughText": "重い外部C++依存関係を完全排除し、純粋Python/Node.jsでCannyエッジ、Sobel、Gaussian、Haar Cascade顔認識を実装。さらにSmolVLM/Qwen2-VLのマルチモーダル推論をゼロコピーVulkan GPUオフロードで直結した完成形パッケージを提供します。",
      "features.0.title": "外部依存ゼロの超軽量ビジョンコア",
      "features.0.desc": "外部C++コンパイラや巨大なOpenCVなしで、標準的なTermux PythonおよびNode.js環境で即座に動作します。",
      "features.1.title": "純粋Vulkan GPUによる全層オフロード",
      "features.1.desc": "モバイルGPUのシェーダーメモリ上でVLMビジョンプロジェクションを直接実行し、CPUメモリ複製遅延のない0.00 MiB VRAMオーバーヘッドを達成します。",
      "features.2.title": "ゼロコピーカメラ＆画像パイプライン",
      "features.2.desc": "中間バッファの再確保を行わずにカメラフレームとRawピクセルを直接取り込み、リアルタイム解析のスループットを最大化します。"
    }
  },
  "hi": {
    "common": {
      "brand": "Termux-Vision",
      "releaseTag": "v1.4.0",
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
      "subtitle": "हार्डवेयर ऑफलोडिंग के साथ शून्य-निर्भरता ऑन-डिवाइस कंप्यूटर विज़न और मल्टीमॉडल वीएलएम इनफेरेंस इंजन",
      "challengeText": "पारंपरिक विज़न फ्रेमवर्क (OpenCV, TorchVision) भारी बाइनरी आकार (>150MB) की मांग करते हैं और Termux पर C++ संकलन विफलताओं का कारण बनते हैं, जिससे डिवाइस बार-बार फ्रीज हो जाते हैं।",
      "breakthroughText": "शुद्ध शून्य-निर्भरता कोड में Canny Edge, Sobel, Gaussian और Haar Cascade को लागू करके भारी C++ निर्भरताओं को समाप्त करता है, और SmolVLM/Qwen2-VL को शून्य-कॉपी Vulkan GPU पर निष्पादित करता है।",
      "features.0.title": "शून्य-भारी निर्भरता वास्तुकला",
      "features.0.desc": "बिना किसी बाहरी C++ कंपाइलर या भारी OpenCV पैकेज के मानक Termux Python और Node.js पर तुरंत चलता है।",
      "features.1.title": "शुद्ध Vulkan GPU पूर्ण-परत ऑफलोडिंग",
      "features.1.desc": "हार्डवेयर शेडर मेमोरी में सीधे VLM विज़न प्रोजेक्शन निष्पादित करके Adreno और Mali चिप्स पर शून्य CPU ओवरहेड प्राप्त करता है।",
      "features.2.title": "शून्य-कॉपी कैमरा और छवि पाइपलाइन",
      "features.2.desc": "मध्यवर्ती आवंटन के बिना डिवाइस कैमरा स्ट्रीम और रॉ पिक्सेल बफ़र्स को सीधे ग्रहण करता है, जिससे वास्तविक समय विश्लेषण गति बढ़ती है।"
    }
  },
  "zh": {
    "common": {
      "brand": "Termux-Vision",
      "releaseTag": "v1.4.0",
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
      "subtitle": "具备硬件直接卸载能力的零依赖端侧计算机视觉与多模态 VLM 推理引擎",
      "challengeText": "在移动端部署计算机视觉和多模态视觉语言大模型 (VLM) 时，传统框架（OpenCV、TorchVision）体积臃肿（>150MB），在 ARM64 Termux 环境下编译极易报错，且常因相机流断裂和显存内存泄露导致设备卡死闪退。",
      "breakthroughText": "彻底剥离庞大的外部 C++ 与 PyTorch 依赖，以纯原生代码实现 Canny 边缘检测、Sobel 滤波、高斯模糊、积分图与 Haar 人脸检测算法，同时支持 SmolVLM 与 Qwen2-VL 多模态视觉大模型的零拷贝 Vulkan GPU 硬件直连推理。",
      "features.0.title": "零重型依赖超轻量视觉架构",
      "features.0.desc": "无需安装外部 C++ 编译器或超过 150MB 的臃肿 OpenCV 库，在纯净 Termux Python 与 Node.js 环境下即装即用。",
      "features.1.title": "纯 Vulkan GPU 全层硬件加速直推",
      "features.1.desc": "在移动端 Adreno 和 Mali 硬件着色器显存中直接执行 VLM 视觉投影计算，实现零 CPU 冗余拷贝的 0.00 MiB 映射开销。",
      "features.2.title": "零拷贝相机帧与图像处理管线",
      "features.2.desc": "无需中间内存重复分配，直接读取端侧摄像头数据流与原始像素缓冲区，大幅提升实时边缘视觉分析的帧率与吞吐量。"
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
