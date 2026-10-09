/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
// AMEVA Auto-Generated i18n Dictionary
(function(global) {
  const translations = {
  "en": {
    "common": {
      "brand": "Termux-STT",
      "releaseTag": "v1.2.13",
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
      "subtitle": "Unified On-Device Speech-to-Text & Neural Multi-Speaker Diarization Engine",
      "challengeText": "Relying on commercial cloud apps for speech transcription exposes private audio streams and confidential conversations to external surveillance and corporate servers. Conversely, attempting to compile and configure Whisper.cpp, Vosk, or Sherpa directly on Android Termux introduces severe C++ build failures, FFmpeg Bionic linker collisions, and heavy PyTorch dependency bloat (>2GB).",
      "breakthroughText": "Guarantees absolute on-device audio privacy with zero cloud egress by packaging Whisper.cpp, Vosk, and Sherpa-ONNX engines alongside pure-Python 128-dimensional X-Vector speaker diarization into an instantly installable pip/npm package operating under 80MB RAM with zero native build overhead.",
      "features.0.title": "Zero Cloud Egress Audio Privacy",
      "features.0.desc": "Audio capture, acoustic feature extraction, and text transcription execute 100% locally on user silicon with zero remote network telemetry.",
      "features.1.title": "Triple STT Engine Unified Factory",
      "features.1.desc": "Seamlessly switches between Whisper.cpp (precision), Vosk (latency), and Sherpa-ONNX with a single create_engine() factory interface.",
      "features.2.title": "Pure-Python 128d Speaker Diarization",
      "features.2.desc": "Implements closed-form pure-Python K-Means clustering over Vosk X-Vector embeddings without requiring PyTorch or Scikit-Learn.",
      "features.3.title": "Zero-Subprocess Audio Fastpath",
      "features.3.desc": "Features a built-in pure-Python WAV parser that bypasses external FFmpeg processes, eradicating Android Bionic linker errors.",
      "features.4.title": "Subprocess Pool Crash Isolation",
      "features.4.desc": "Isolates native C++ binaries within dedicated worker process pools, protecting main applications from sudden native segment faults."
    }
  },
  "ko": {
    "common": {
      "brand": "Termux-STT",
      "releaseTag": "v1.2.13",
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
      "subtitle": "통합 온디바이스 음성 인식(STT) 및 신경망 다중 화자 분리(Diarization) 엔진",
      "challengeText": "스마트폰에서 음성 인식(STT)을 상용 앱이나 클라우드 서비스로 처리하면 음성 데이터와 개인 대화가 외부 서버로 유출될 위험이 있으며, 순수 로컬로 돌리기 위해 Whisper.cpp나 Vosk를 Termux에서 직접 빌드하려 하면 C++ 컴파일 에러, FFmpeg 서브프로세스 링커 충돌, 파이토치 의존성(2GB+)으로 인해 일반 개발자가 구축하기 극도로 어렵습니다.",
      "breakthroughText": "데이터 유출이 전혀 없는 100% 로컬 디바이스 연산을 보장하며, 복잡한 빌드 과정 없이 Whisper.cpp, Vosk, Sherpa-ONNX 3대 엔진과 순수 파이썬 128차원 X-Vector 화자 분리(Diarization)를 80MB 초경량 풋프린트의 1줄 설치형 pip/npm 라이브러리로 완전 패키징하였습니다.",
      "features.0.title": "클라우드 유출 제로 절대 보안",
      "features.0.desc": "마이크 입력부터 음향 특징 추출, 텍스트 변환까지 모든 연산이 사용자 기기 내부에서 완결되며 외부 네트워크 통신이 전혀 발생하지 않습니다.",
      "features.1.title": "3대 STT 엔진 단일 팩토리 통합",
      "features.1.desc": "Whisper.cpp(고정밀), Vosk(초저지연 스트리밍), Sherpa-ONNX 엔진을 단일 create_engine() 팩토리 인터페이스로 유연하게 전환합니다.",
      "features.2.title": "순수 파이썬 128차원 화자 분리",
      "features.2.desc": "PyTorch나 Scikit-Learn 의존성 없이 Vosk X-Vector 임베딩과 순수 파이썬 K-Means 클러스터링을 직접 구현하여 다자간 화자를 정확히 구분합니다.",
      "features.3.title": "FFmpeg 없는 무의존성 오디오 파서",
      "features.3.desc": "외부 FFmpeg 서브프로세스를 완전히 우회하는 순수 파이썬 WAV 바이너리 파서를 내장하여 Bionic libc 링커 크래시를 원천 차단합니다.",
      "features.4.title": "프로세스 풀 격리형 크래시 방지",
      "features.4.desc": "네이티브 C++ 바이너리를 전용 워커 프로세스 풀에 격리 구동하여 단말기 오디오 인터럽트 시에도 메인 애플리케이션 충돌을 완벽히 방어합니다."
    }
  },
  "ja": {
    "common": {
      "brand": "Termux-STT",
      "releaseTag": "v1.2.13",
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
      "subtitle": "統合オンデバイス音声認識（STT）＆ニューラルマルチ話者ダイアライゼーションエンジン",
      "challengeText": "音声認識（STT）を商用アプリやクラウドに依存するとプライベートな会話データが外部流出する危険があります。一方、Termux上でWhisper.cppやVoskを直接ビルドしようとすると、C++ビルドエラー、FFmpegリンカーの競合、PyTorch（2GB超）の巨大な依存関係に直面します。",
      "breakthroughText": "外部へのデータ送信が一切ない完全ローカル動作を保証し、Whisper.cpp、Vosk、Sherpa-ONNXの3大エンジンと純粋Python 128次元X-Vector話者分離を80MB未満の超軽量pip/npmパッケージとして統合。ビルドの手間なく即座に利用可能です。",
      "features.0.title": "クラウド送信ゼロの完全プライバシー",
      "features.0.desc": "音声キャプチャから音響特徴抽出、テキスト変換までの全工程が端末内で完結し、外部ネットワークへの通信は一切発生しません。",
      "features.1.title": "3大STTエンジンの統合ファクトリ",
      "features.1.desc": "Whisper.cpp（高精度）、Vosk（超低遅延）、Sherpa-ONNXを単一のcreate_engine()インターフェースで柔軟に切り替えます。",
      "features.2.title": "純粋Python 128次元話者分離",
      "features.2.desc": "PyTorchやScikit-Learnに依存せず、Vosk X-Vectorと純粋PythonによるK-Meansクラスタリングで話者を正確に分離します。",
      "features.3.title": "FFmpeg不要の高速オーディオパーサー",
      "features.3.desc": "外部FFmpegプロセスをバイパスする純粋Python WAVパーサーを内蔵し、Android Bionicリンカーエラーを根絶します。",
      "features.4.title": "プロセスプール隔離によるクラッシュ保護",
      "features.4.desc": "ネイティブC++バイナリを専用プロセスプールに隔離実行し、予期せぬセグメンテーションフォルトからメインアプリを守ります。"
    }
  },
  "hi": {
    "common": {
      "brand": "Termux-STT",
      "releaseTag": "v1.2.13",
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
      "subtitle": "एकीकृत ऑन-डिवाइस स्पीच-टू-टेक्स्ट और न्यूरल मल्टी-स्पीकर डायराइजेशन इंजन",
      "challengeText": "भाषण प्रतिलेखन के लिए क्लाउड ऐप्स पर निर्भर रहने से ऑडियो डेटा बाहरी सर्वरों पर लीक होने का जोखिम होता है। दूसरी ओर, Termux पर सीधे Whisper.cpp या Vosk को कंपाइल करने पर गंभीर C++ त्रुटियां, FFmpeg लिंकर टकराव और भारी PyTorch निर्भरताएं सामने आती हैं।",
      "breakthroughText": "Whisper.cpp, Vosk और Sherpa-ONNX को शुद्ध पायथन 128d X-Vector स्पीकर डायराइजेशन के साथ एक सहज pip/npm पैकेज में शामिल करके शून्य क्लाउड लीकेज के साथ पूर्ण ऑडियो गोपनीयता सुनिश्चित करता है, जो 80MB RAM से कम में चलता है।",
      "features.0.title": "शून्य क्लाउड रिसाव ऑडियो गोपनीयता",
      "features.0.desc": "ऑडियो कैप्चर, ध्वनिक निष्कर्षण और प्रतिलेखन पूरी तरह से स्थानीय रूप से बिना किसी बाहरी नेटवर्क संचार के निष्पादित होते हैं।",
      "features.1.title": "ट्रिपल STT इंजन एकीकृत फ़ैक्टरी",
      "features.1.desc": "एकल create_engine() इंटरफ़ेस के साथ Whisper.cpp, Vosk और Sherpa-ONNX के बीच सहजता से स्विच करें।",
      "features.2.title": "शुद्ध पायथन 128d वक्ता डायराइजेशन",
      "features.2.desc": "PyTorch या Scikit-Learn की आवश्यकता के बिना शुद्ध पायथन K-Means क्लस्टरिंग लागू करता है।",
      "features.3.title": "शून्य-उपप्रक्रिया ऑडियो फ़ास्टपाथ",
      "features.3.desc": "एक अंतर्निहित शुद्ध-पायथन WAV पार्सर जो बाहरी FFmpeg प्रक्रियाओं को बायपास करता है, जिससे Bionic लिंकर त्रुटियां समाप्त होती हैं।",
      "features.4.title": "उपप्रक्रिया पूल क्रैश अलगाव",
      "features.4.desc": "नेटिव C++ बायनेरिज़ को समर्पित प्रक्रिया पूलों में अलग करता है, जिससे मुख्य ऐप क्रैश होने से बचता है।"
    }
  },
  "zh": {
    "common": {
      "brand": "Termux-STT",
      "releaseTag": "v1.2.13",
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
      "subtitle": "统一端侧离线语音识别 (STT) 与神经网络多说话人分离引擎",
      "challengeText": "依赖商用云端语音识别应用会导致用户的私密对话和录音数据面临被外部公司捕获与泄露的风险。若试图在 Android Termux 中直接源码编译 Whisper.cpp 或 Vosk，又会遭遇严峻的 C++ 编译故障、FFmpeg 子进程链接器冲突以及超过 2GB 的庞大 PyTorch 依赖困境。",
      "breakthroughText": "彻底保障 100% 纯本地离线运行与零云端数据外泄，将 Whisper.cpp、Vosk、Sherpa-ONNX 三大语音引擎与纯 Python 128 维 X-Vector 声纹说话人分离技术深度封装，构建为运行内存低于 80MB 且无需手动编译的统一 pip/npm 库。",
      "features.0.title": "零云端回传绝对隐私保障",
      "features.0.desc": "音频录入、声学特征提取到最终文本识别全部在本地芯片上独立完成，杜绝任何形式的远程遥测与数据回传。",
      "features.1.title": "三大语音引擎统一工厂接口",
      "features.1.desc": "通过统一的 create_engine() 工厂方法，在 Whisper.cpp（高精度）、Vosk（低延迟流式）和 Sherpa-ONNX 之间无缝切换。",
      "features.2.title": "纯 Python 128 维声纹说话人分离",
      "features.2.desc": "无需依赖 PyTorch 或 Scikit-Learn，直接通过纯 Python 实现基于 Vosk X-Vector 向量的 K-Means 聚类，精准区分多说话人。",
      "features.3.title": "零子进程免 FFmpeg 音频极速通道",
      "features.3.desc": "内置纯 Python WAV 二进制解析器，完全绕过外部 FFmpeg 子进程调用，彻底消除 Android Bionic 动态链接器崩溃风险。",
      "features.4.title": "进程池沙箱化崩溃隔离保护",
      "features.4.desc": "将原生 C++ 二进制模块隔离在专用工作进程池中运行，确保底层异常或段错误不会导致主应用程序意外闪退。"
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
