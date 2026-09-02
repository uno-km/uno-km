/**
 * AMEVA Ecosystem - Master Universal Multilingual (i18n) Core Engine (SSOT v2.5)
 * 100% Full-Page Body, Table, Heading, and Alert Dynamic Translation across 13 Languages.
 */

(function(global) {
  'use strict';

  const SUPPORTED_LANGUAGES = {
    'en': { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', dir: 'ltr' },
    'ko': { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', dir: 'ltr' },
    'ja': { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', dir: 'ltr' },
    'zh': { code: 'zh', name: 'Chinese', nativeName: '简体中文', flag: '🇨🇳', dir: 'ltr' },
    'ar': { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl' },
    'fr': { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr' },
    'de': { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
    'es': { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', dir: 'ltr' },
    'hi': { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
    'ru': { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', dir: 'ltr' },
    'vi': { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳', dir: 'ltr' },
    'pl': { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱', dir: 'ltr' },
    'la': { code: 'la', name: 'Latin', nativeName: 'Latina', flag: '🏛️', dir: 'ltr' }
  };

  const DEFAULT_LANG = 'en';
  const STORAGE_KEYS = ['ameva_global_lang', 'uno_km_lang', 'ameva_lib_doc_lang', 'forge_lang'];
  const origTextMap = new WeakMap();

  const LIB_TRANSLATIONS = {
  "vulkan": {
    "subtitles": {
      "en": "Unified Cross-Modal Vulkan GPU Acceleration Runtime & HAL for Mobile Android",
      "ko": "모바일 안드로이드를 위한 통합 크로스 모달 Vulkan GPU 가속 런타임 및 하드웨어 추상화 계층(HAL)",
      "ja": "モバイルAndroid向け統合クロスクロスマルチモーダルVulkan GPUアクセラレーションランタイム＆HAL",
      "zh": "适用于移动端 Android 的统一跨模态 Vulkan GPU 硬件加速运行时与硬件抽象层 (HAL)"
    },
    "challenge": {
      "en": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages.",
      "ko": "모바일 안드로이드 환경에서 멀티모달 AI를 실행할 때 파편화된 GPU 드라이버, Bionic과 Mesa 간 로더 충돌, 텐서 정렬 버퍼 오버플로우, 개별 패키지별 중복 바이너리 비대화 문제가 발생합니다.",
      "ja": "モバイルAndroid環境でマルチモーダルAIを実行する際、断片化されたGPUドライバ、BionicとMesa間のローダークラッシュ、テンソルアライメントバッファのオーバーフロー、重複バイナリの肥大化が課題となります。",
      "zh": "在移动端 Android 上运行多模态 AI 面临碎片化的 GPU 驱动、Bionic 与 Mesa 之间的加载器崩溃、张量对齐缓冲区溢出以及独立包之间的冗余二进制膨胀问题。"
    },
    "breakthrough": {
      "en": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "ko": "STT, Vision, LLM, Diffusion, Training을 아우르는 단일 C++20 Vulkan 하드웨어 추상화 계층(HAL)과 범용 런타임을 제공하며, 12단계 정밀 검증 계층(V0-V11) 및 무손실 자동 복구 기능을 갖추고 있습니다.",
      "ja": "STT、Vision、LLM、Diffusion、Trainingを包括する単一のC++20 Vulkanハードウェア抽象化層（HAL）と汎用ランタイムを提供し、12段階の検証階層（V0-V11）とデータ損失ゼロの自動復旧を実現します。",
      "zh": "提供单一、零硬编码的 C++20 Vulkan 硬件抽象层 (HAL) 与通用运行时，统一支持 STT、视觉、大模型、扩散生成与训练，具备 12 级精细验证体系 (V0-V11) 与零数据丢失自动恢复机制。"
    },
    "features": [
      {
        "title": {
          "en": "Single Loader Chain Pinning",
          "ko": "단일 로더 체인 핀닝",
          "ja": "単一ローダーチェーン固定",
          "zh": "单一加载器链路固定"
        },
        "desc": {
          "en": "Eliminates Termux Mesa vs Android Bionic symbol collisions via dynamic dladdr provenance and sys_gpdf2 isolation.",
          "ko": "동적 dladdr 출처 검증과 sys_gpdf2 격리를 통해 Termux Mesa와 Android Bionic 간 심볼 충돌을 원천 차단합니다.",
          "ja": "動的dladdr検証とsys_gpdf2分離により、Termux MesaとAndroid Bionic間のシンボル衝突を排除します。",
          "zh": "通过动态 dladdr 溯源与 sys_gpdf2 隔离技术，彻底消除 Termux Mesa 与 Android Bionic 之间的符号冲突。"
        }
      },
      {
        "title": {
          "en": "12-Stage Probing & Fallback",
          "ko": "12단계 하드웨어 진단 및 폴백",
          "ja": "12段階のハードウェア診断とフォールバック",
          "zh": "12 级硬件探测与优雅降级"
        },
        "desc": {
          "en": "Validates GPU capability from dlopen (V0) to E2E model inference (V11) with transparent CPU NEON recovery.",
          "ko": "dlopen(V0)부터 종단간 모델 추론(V11)까지 GPU 역량을 단계별로 검증하며 CPU NEON 백엔드로 안전하게 자동 전환합니다.",
          "ja": "dlopen（V0）からE2E推論（V11）までGPU能力を検証し、CPU NEONフォールバックで安全に自動復旧します。",
          "zh": "从 dlopen (V0) 到端到端模型推理 (V11) 逐级验证 GPU 能力，并在异常时透明无缝降级至 CPU NEON 恢复。"
        }
      },
      {
        "title": {
          "en": "Multi-Modal Cross-Acceleration",
          "ko": "멀티모달 통합 가속",
          "ja": "マルチモーダル統合アクセラレーション",
          "zh": "多模态跨架构联合加速"
        },
        "desc": {
          "en": "Powers Whisper STT, LLaVA Vision, LLaMA/BitNet LLM, and Stable Diffusion from a single 58MB shared core.",
          "ko": "단 58MB의 단일 공유 코어로 Whisper STT, LLaVA Vision, LLaMA/BitNet LLM, Stable Diffusion을 통합 가속합니다.",
          "ja": "単一の58MB共有コアからWhisper STT、LLaVA Vision、LLaMA/BitNet LLM、Stable Diffusionを高速化します。",
          "zh": "仅凭单个 58MB 共享内核，全面驱动 Whisper STT、LLaVA 视觉、LLaMA/BitNet 大模型及 Stable Diffusion。"
        }
      }
    ]
  },
  "bitnet": {
    "subtitles": {
      "en": "Ultra-Fast 1.58-Bit Quantized Large Language Model Inference Engine for Mobile ARM64",
      "ko": "모바일 ARM64 하드웨어를 위한 초고속 1.58비트 양자화 대규모 언어 모델(LLM) 추론 엔진",
      "ja": "モバイルARM64向け超高速1.58ビット量子化大規模言語モデル（LLM）推論エンジン",
      "zh": "适用于移动端 ARM64 架构的超高速 1.58 位量化大语言模型 (LLM) 推理引擎"
    },
    "challenge": {
      "en": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "ko": "모바일 CPU 환경에서 표준 FP16/INT4 대규모 언어 모델(LLM)을 실행하면 극심한 메모리 대역폭 병목, 발열 스로틀링, 15W를 초과하는 심각한 배터리 소모가 발생합니다.",
      "ja": "モバイルCPU環境で標準のFP16/INT4大規模言語モデル（LLM）を実行すると、極端なメモリ帯域幅のボトルネック、サーマルスロットリング、15Wを超える激しいバッテリー消費が発生します。",
      "zh": "在移动 CPU 架构上运行标准 FP16/INT4 大语言模型推理时，面临极端的内存带宽瓶颈、发热降频以及超过 15W 的严重功耗消耗。"
    },
    "breakthrough": {
      "en": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "ko": "수작업 최적화된 ARM64 NEON 어셈블리 커널을 통해 1.58비트 3진 양자화 가중치{-1, 0, +1}를 직접 연산하여 행렬 곱셈을 정수 덧셈/뺄셈으로 치환하고 350MB 미만의 메모리 점유율을 달성합니다.",
      "ja": "手動最適化されたARM64 NEONアセンブリカーネルを介して1.58ビット3値量子化重み{-1, 0, +1}を直接計算し、行列乗算を整数の加減算に削減して350MB未満のRAM消費を実現します。",
      "zh": "通过手工优化的 ARM64 NEON 汇编内核直接执行 1.58 位三值量化权重 {-1, 0, +1}，将矩阵乘法完全简化为纯整数加减法，内存占用控制在 350MB 以内。"
    },
    "features": [
      {
        "title": {
          "en": "1.58-Bit Ternary DotProd Acceleration",
          "ko": "1.58비트 3진 DotProd 가속",
          "ja": "1.58ビット3値DotProd高速化",
          "zh": "1.58 位三值点积硬件加速"
        },
        "desc": {
          "en": "Replaces multiplication with integer additions using ARM64 dot-product vector SIMD instructions.",
          "ko": "ARM64 dot-product 벡터 SIMD 명령어를 활용하여 부동소수점 곱셈을 고속 정수 덧셈으로 대체합니다.",
          "ja": "ARM64 dot-productベクトルSIMD命令を使用して、乗算を高速な整数加算に置き換えます。",
          "zh": "利用 ARM64 点积向量 SIMD 指令集，将繁重的浮点乘法彻底替换为极致高效的整数累加。"
        }
      },
      {
        "title": {
          "en": "Zero-PRoot Native Bionic Execution",
          "ko": "PRoot 없는 네이티브 Bionic 실행",
          "ja": "PRoot不要のネイティブBionic実行",
          "zh": "零 PRoot 原生 Bionic 执行"
        },
        "desc": {
          "en": "Direct execution on Android Bionic libc without Linux PRoot containers or root privileges.",
          "ko": "리눅스 PRoot 컨테이너나 루팅 권한 없이 Android Bionic libc 위에서 직접 네이티브로 실행됩니다.",
          "ja": "Linux PRootコンテナやroot権限なしで、Android Bionic libc上で直接実行されます。",
          "zh": "无需任何 Linux PRoot 容器或 Root 权限，直接在 Android Bionic libc 底层以原生速度执行。"
        }
      },
      {
        "title": {
          "en": "Dual-Engine Python & Node.js Gateways",
          "ko": "Python & Node.js 듀얼 엔진 게이트웨이",
          "ja": "Python＆Node.jsデュアルエンジンゲートウェイ",
          "zh": "Python 与 Node.js 双引擎网关"
        },
        "desc": {
          "en": "Ultra-low overhead thin FFI bindings for both Python 3.8+ and Node.js 18+ runtimes with independent CLI namespaces.",
          "ko": "독립된 CLI 네임스페이스와 함께 Python 3.8+ 및 Node.js 18+ 런타임 모두를 위한 초경량 FFI 바인딩을 제공합니다.",
          "ja": "独立したCLI名前空間を備え、Python 3.8+およびNode.js 18+ランタイム向けの超低オーバーヘッドFFIバインディングを提供します。",
          "zh": "为 Python 3.8+ 和 Node.js 18+ 运行时提供极低开销的轻量级 FFI 绑定与独立的 CLI 命名空间。"
        }
      },
      {
        "title": {
          "en": "Energy-Efficient Edge Deployment",
          "ko": "초저전력 에지 배포",
          "ja": "超低消費電力エッジ展開",
          "zh": "极低能耗端侧部署"
        },
        "desc": {
          "en": "Continuous token generation consumes under 2.5W, enabling continuous 24/7 autonomous mobile operation.",
          "ko": "연속 토큰 생성 시 2.5W 미만의 전력을 소비하여 24시간 무중단 자율 모바일 운영을 실현합니다.",
          "ja": "継続的なトークン生成時の消費電力を2.5W未満に抑え、24時間365日の連続自律稼働を可能にします。",
          "zh": "连续 Token 生成功耗控制在 2.5W 以下，确保移动端设备实现 7x24 小时全天候长效自主运行。"
        }
      }
    ]
  },
  "stt": {
    "subtitles": {
      "en": "Production On-Device Speech-to-Text & 128d X-Vector Speaker Diarization for Android Termux",
      "ko": "안드로이드 Termux 전용 프로덕션급 온디바이스 음성인식 & 128차원 X-Vector 화자 분리 프레임워크",
      "ja": "Android Termux専用オンデバイス音声認識および128次元X-Vector話者分離フレームワーク",
      "zh": "适用于 Android Termux 的生产级端侧语音识别与 128 维 X-Vector 说话人日志分离框架"
    },
    "challenge": {
      "en": "Transcribing and diarizing multi-speaker conversations on edge devices typically demands heavy PyTorch runtimes (>2GB), external GPU servers, and severe cloud network latency with audio privacy risks.",
      "ko": "에지 디바이스에서 다중 화자 음성을 인식하고 분리할 때 무거운 PyTorch 런타임(>2GB), 외부 GPU 서버 종속, 네트워크 지연 및 음성 프라이버시 침해 위험이 따릅니다.",
      "ja": "エッジデバイスで複数話者の音声を認識・分離する際、巨大なPyTorchランタイム（>2GB）、外部GPUサーバー依存、ネットワーク遅延、音声プライバシーリスクが課題となります。",
      "zh": "在边缘端设备上进行多说话人语音转写与日志分离时，通常需要庞大的 PyTorch 运行时 (>2GB)、外部 GPU 服务器支持，面临严重的网络延迟与隐私泄露风险。"
    },
    "breakthrough": {
      "en": "Integrates Whisper.cpp, Vosk, and Sherpa-ONNX with a closed-form pure-Python 128-dimensional X-Vector clustering algorithm that operates in under 80MB RAM with zero cloud egress.",
      "ko": "Whisper.cpp, Vosk, Sherpa-ONNX를 통합하고 순수 Python 128차원 X-Vector 클러스터링 알고리즘을 결합하여 클라우드 전송 없이 80MB RAM 미만에서 동작합니다.",
      "ja": "Whisper.cpp、Vosk、Sherpa-ONNXを統合し、純粋なPythonによる128次元X-Vectorクラスタリングを組み合わせてクラウド転送なし・80MB未満のRAMで動作します。",
      "zh": "深度整合 Whisper.cpp、Vosk 和 Sherpa-ONNX，结合纯 Python 闭式 128 维 X-Vector 聚类算法，在低于 80MB RAM 的超低内存下实现零云端外流本地运行。"
    },
    "features": [
      {
        "title": {
          "en": "Triple STT Engine Integration",
          "ko": "트리플 STT 엔진 통합",
          "ja": "トリプルSTTエンジン統合",
          "zh": "三重 STT 引擎深度整合"
        },
        "desc": {
          "en": "Seamlessly switches between Whisper.cpp (accuracy), Vosk (latency), and Sherpa-ONNX with a single create_engine() factory.",
          "ko": "단일 create_engine() 팩토리를 통해 Whisper.cpp(정확도), Vosk(초저지연), Sherpa-ONNX를 유연하게 전환합니다.",
          "ja": "単一のcreate_engine()ファクトリでWhisper.cpp、Vosk、Sherpa-ONNXをシームレスに切り替えます。",
          "zh": "通过单一 create_engine() 工厂方法，在 Whisper.cpp（高精度）、Vosk（极低延迟）和 Sherpa-ONNX 之间无缝切换。"
        }
      },
      {
        "title": {
          "en": "Pure Python Speaker Diarization",
          "ko": "순수 Python 화자 분리(Diarization)",
          "ja": "純粋Pythonによる話者分離",
          "zh": "纯 Python 说话人日志分离"
        },
        "desc": {
          "en": "128-dimensional Vosk X-Vector embeddings combined with closed-form pure Python K-Means clustering without PyTorch or Scikit-Learn.",
          "ko": "PyTorch나 Scikit-Learn 없이 128차원 X-Vector 임베딩과 순수 Python K-Means 클러스터링으로 화자를 분리합니다.",
          "ja": "PyTorchやScikit-Learnを使わず、128次元X-Vector埋め込みと純粋なPython K-Meansで話者を分離します。",
          "zh": "无需 PyTorch 或 Scikit-Learn，基于 128 维 X-Vector 向量嵌入与纯 Python 闭式 K-Means 聚类实现高效多话者分离。"
        }
      },
      {
        "title": {
          "en": "Zero-Subprocess Audio Fastpath",
          "ko": "무프로세스 오디오 고속 처리",
          "ja": "サブプロセス不要のオーディオ高速処理",
          "zh": "零子进程音频极速通路"
        },
        "desc": {
          "en": "Direct pure-Python wave parser integration for standard 16kHz WAVs, bypassing FFmpeg subprocessing with zero Bionic linker errors.",
          "ko": "표준 16kHz WAV용 순수 Python wave 파서를 내장하여 FFmpeg 서브프로세스와 Bionic 링커 오류를 완전히 우회합니다.",
          "ja": "標準16kHz WAV用の純粋Pythonパーサーを内蔵し、FFmpegプロセスとBionicリンクエラーを回避します。",
          "zh": "内置纯 Python 16kHz WAV 音频解析器，彻底绕过 FFmpeg 外部子进程调用，杜绝任何 Bionic 链接器错误。"
        }
      }
    ]
  },
  "tts": {
    "subtitles": {
      "en": "Ultra-lightweight Zero-Dependency DSP Formant & Neural ONNX Speech Synthesis for Android Termux",
      "ko": "안드로이드 Termux를 위한 초경량 0MB 무의존성 DSP 포먼트 & 신경망 ONNX 음성 합성 프레임워크",
      "ja": "Android Termux向け超軽量0MB無依存DSPフォルマント＆ニューラルONNX音声合成フレームワーク",
      "zh": "适用于 Android Termux 的超轻量零依赖 DSP 共振峰与神经网络 ONNX 语音合成框架"
    },
    "challenge": {
      "en": "Standard desktop frameworks fail on constrained edge nodes and browser sandboxes due to syscall restrictions, heavy memory footprints, and severe server-dependency latency.",
      "ko": "기존 음성 합성 프레임워크는 시스템 콜 제약, 무거운 메모리 사용량, 서버 의존 지연 시간으로 인해 모바일 에지 노드에서 안정적으로 구동되지 못했습니다.",
      "ja": "従来の音声合成フレームワークは、システムコール制限、重いメモリフットプリント、サーバー依存の遅延により、エッジノードで安定して動作しませんでした。",
      "zh": "传统桌面端语音合成框架由于系统调用限制、庞大的内存开销和严重的云端依赖延迟，无法在受限的移动边缘节点上稳定运行。"
    },
    "breakthrough": {
      "en": "Eliminates server roundtrips by compiling low-level kernels directly to WebGPU/Bionic ARM64 with zero-leak buffer pooling and closed-form mathematical precision.",
      "ko": "WebGPU 및 Bionic ARM64용 저수준 연산 커널을 직접 컴파일하고 제로 누수 버퍼 풀링을 적용하여 서버 통신 없는 초경량 음성 합성을 실현합니다.",
      "ja": "WebGPUおよびBionic ARM64用の低レベルカーネルを直接コンパイルし、ゼロリークバッファプールによりサーバー不要の超軽量音声合成を実現します。",
      "zh": "通过将底层算子直接编译为 WebGPU/Bionic ARM64 原生指令，配合零泄漏缓冲区内存池，彻底消除服务器往返依赖。"
    },
    "features": [
      {
        "title": {
          "en": "Zero-Dependency DSP Engine",
          "ko": "0MB 무의존성 DSP 포먼트 엔진",
          "ja": "依存性ゼロのDSPフォルマントエンジン",
          "zh": "零依赖 DSP 共振峰合成引擎"
        },
        "desc": {
          "en": "Pure Python and Node.js mathematical sound synthesis without external binaries or C extensions.",
          "ko": "외부 바이너리나 C 확장 없이 순수 파이썬 및 Node.js 수학 연산만으로 음성을 생성합니다.",
          "ja": "外部バイナリやC拡張機能なしで、純粋なPythonとNode.jsの数学的計算のみで音声を生成します。",
          "zh": "完全基于纯 Python 和 Node.js 数学计算生成音频波形，无需任何外部二进制文件或 C 语言扩展。"
        }
      },
      {
        "title": {
          "en": "Neural ONNX High-Fidelity Mode",
          "ko": "신경망 ONNX 고음질 모드",
          "ja": "ニューラルONNX高音質モード",
          "zh": "神经网络 ONNX 高保真模式"
        },
        "desc": {
          "en": "Seamless integration with Piper and Kokoro neural models via Sherpa-ONNX for human-level voice naturalness.",
          "ko": "Sherpa-ONNX 기반 Piper 및 Kokoro 신경망 모델과 연동하여 사람 수준의 자연스러운 음성을 합성합니다.",
          "ja": "Sherpa-ONNXを介してPiperおよびKokoroニューラルモデルと連携し、極めて自然な音声を合成します。",
          "zh": "通过 Sherpa-ONNX 无缝集成 Piper 与 Kokoro 神经网络模型，提供媲美真人的自然语音质感。"
        }
      },
      {
        "title": {
          "en": "Ultra-Low Latency Streaming",
          "ko": "초저지연 스트리밍 재생",
          "ja": "超低遅延ストリーミング再生",
          "zh": "超低延迟流式即时播放"
        },
        "desc": {
          "en": "Time-to-first-audio under 15ms on mobile ARM64 CPUs for instant conversational AI responses.",
          "ko": "모바일 ARM64 CPU에서 첫 오디오 출력까지 15ms 미만의 지연 시간으로 즉각적인 대화형 AI 응답을 제공합니다.",
          "ja": "モバイルARM64 CPUで最初の音声出力まで15ms未満の低遅延を実現し、即座に対話応答します。",
          "zh": "在移动端 ARM64 CPU 上实现首音输出低于 15ms，满足即时会话式 AI 的高响应度要求。"
        }
      }
    ]
  },
  "diffusion": {
    "subtitles": {
      "en": "Production On-Device AI Image Generation Framework for Android Termux & Samsung Galaxy",
      "ko": "안드로이드 Termux 및 삼성 갤럭시를 위한 온디바이스 AI 이미지 생성 프레임워크",
      "ja": "Android TermuxおよびSamsung Galaxy向けオンデバイスAI画像生成フレームワーク",
      "zh": "适用于 Android Termux 和三星 Galaxy 的生产级端侧 AI 图像生成框架"
    },
    "challenge": {
      "en": "Generating AI images on mobile devices typically requires cloud API latency, recurring subscription costs, and risk of private visual data leakage.",
      "ko": "모바일 기기에서 AI 이미지를 생성할 때 클라우드 API 호출 지연, 지속적인 구독 비용, 민감한 개인 시각 데이터 유출 위험이 발생합니다.",
      "ja": "モバイルデバイスでAI画像を生成する際、クラウドAPIの遅延、定期的なサブスクリプション費用、個人視覚データの漏洩リスクが伴います。",
      "zh": "在移动设备上生成 AI 图像通常面临云端 API 延迟、持续的订阅费用以及敏感个人视觉数据泄露的隐私隐患。"
    },
    "breakthrough": {
      "en": "Executes quantized Stable Diffusion models directly on Android Vulkan GPU and NEON CPU backends with zero data egress under 1.2GB VRAM.",
      "ko": "안드로이드 Vulkan GPU 및 NEON CPU 백엔드 위에서 양자화된 Stable Diffusion 모델을 직접 실행하여 1.2GB VRAM 미만으로 무유출 이미지 생성을 구현합니다.",
      "ja": "Android Vulkan GPUおよびNEON CPUバックエンド上で量子化Stable Diffusionモデルを直接実行し、1.2GB未満のVRAMでローカル画像生成を実現します。",
      "zh": "直接在 Android Vulkan GPU 与 NEON CPU 后端上运行量化版 Stable Diffusion 模型，显存占用低于 1.2GB，数据零外流。"
    },
    "features": [
      {
        "title": {
          "en": "Vulkan GPU Acceleration",
          "ko": "Vulkan GPU 하드웨어 가속",
          "ja": "Vulkan GPUハードウェアアクセラレーション",
          "zh": "Vulkan GPU 硬件原生加速"
        },
        "desc": {
          "en": "Direct dispatch to Snapdragon Adreno and ARM Mali GPUs yielding rapid 512x512 image synthesis.",
          "ko": "스냅드래곤 Adreno 및 ARM Mali GPU에 직접 연산을 디스패치하여 빠른 512x512 이미지 생성을 지원합니다.",
          "ja": "Snapdragon AdrenoおよびARM Mali GPUに直接ディスパッチし、高速な512x512画像生成を実現します。",
          "zh": "直接调度高通骁龙 Adreno 与 ARM Mali GPU 计算管线，实现高速 512x512 分辨率图像渲染。"
        }
      },
      {
        "title": {
          "en": "FP16 Half-Precision UNet",
          "ko": "FP16 반정밀도 UNet 파이프라인",
          "ja": "FP16半精度UNetパイプライン",
          "zh": "FP16 半精度 UNet 紧凑管线"
        },
        "desc": {
          "en": "Halves memory bandwidth requirements allowing Stable Diffusion 1.5 to run smoothly on 8GB RAM phones.",
          "ko": "메모리 대역폭 요구량을 절반으로 줄여 8GB RAM 스마트폰에서도 Stable Diffusion 1.5를 부드럽게 구동합니다.",
          "ja": "メモリ帯域幅を半減させ、8GB RAMのスマートフォンでもStable Diffusion 1.5をスムーズに実行できます。",
          "zh": "将内存带宽需求减半，使 Stable Diffusion 1.5 能够在 8GB 内存的标准智能手机上流畅运行。"
        }
      },
      {
        "title": {
          "en": "Samsung Galaxy A35 & S21 Certified",
          "ko": "삼성 갤럭시 A35 & S21 실기기 인증",
          "ja": "Samsung Galaxy A35＆S21実機認定",
          "zh": "三星 Galaxy A35 与 S21 真机认证"
        },
        "desc": {
          "en": "Validated on real physical hardware with zero thermal runaway and automatic battery power management.",
          "ko": "실제 물리 기기에서 발열 폭주 0건과 자동 배터리 전력 관리 무결성을 완벽하게 검증했습니다.",
          "ja": "実機ハードウェアで検証済みであり、過熱暴走ゼロと自動バッテリー電力管理を実現しています。",
          "zh": "在真实物理手机上经过完整测试，杜绝任何发热失控，具备自适应电池功耗智能管理。"
        }
      }
    ]
  },
  "forge": {
    "subtitles": {
      "en": "Client-Compute Offloaded Architecture Browser-Native WebGPU Autograd Deep Learning Engine",
      "ko": "서버 비용 없는 브라우저 네이티브 WebGPU 딥러닝 & 자동미분(Autograd) 엔진",
      "ja": "サーバー費用ゼロのブラウザネイティブWebGPU深層学習＆自動微分エンジン",
      "zh": "零服务器成本的浏览器原生 WebGPU 自动求导与深度学习引擎"
    },
    "challenge": {
      "en": "Server-side GPU inferencing costs explode with user scale, while traditional web frameworks lack deterministic autograd and backpropagation support.",
      "ko": "사용자 증가에 따라 서버 측 GPU 추론 비용이 기하급수적으로 증가하며, 기존 웹 프레임워크는 결정론적 자동미분(Autograd) 및 역전파 기능을 지원하지 못했습니다.",
      "ja": "ユーザー増加に伴いサーバー側のGPU推論コストが急増する一方、従来のWebフレームワークには自動微分（Autograd）機能が不足していました。",
      "zh": "随着用户规模扩大，服务器端 GPU 推理成本呈指数级暴涨，而传统前端 Web 框架严重缺乏确定性的自动求导 (Autograd) 与反向传播支持。"
    },
    "breakthrough": {
      "en": "Compiles autograd graphs directly to WGSL WebGPU shaders, executing deep learning training and inference 100% on the client's GPU with $0 cloud server cost.",
      "ko": "자동미분 그래프를 WGSL WebGPU 셰이더로 직접 컴파일하여 딥러닝 학습과 추론을 클라이언트 GPU에서 100% 실행함으로써 서버 비용을 $0으로 만듭니다.",
      "ja": "自動微分グラフをWGSL WebGPUシェーダーに直接コンパイルし、深層学習の学習と推論をクライアントGPUで100%実行してサーバー費用を$0にします。",
      "zh": "将自动求导计算图直接编译为 WGSL WebGPU 着色器，在客户端浏览器 GPU 上 100% 完成深度学习训练与推理，实现 $0 云端服务器成本。"
    },
    "features": [
      {
        "title": {
          "en": "Browser-Native WebGPU Autograd",
          "ko": "브라우저 네이티브 WebGPU 자동미분",
          "ja": "ブラウザネイティブWebGPU自動微分",
          "zh": "浏览器原生 WebGPU 自动求导"
        },
        "desc": {
          "en": "Full DAG computation graph supporting forward, backward, Adam optimizer, and Loss functions in pure WebGPU.",
          "ko": "순수 WebGPU 상에서 Forward, Backward, Adam 옵티마이저, Loss 함수를 완벽히 지원하는 전체 DAG 연산 그래프를 제공합니다.",
          "ja": "純粋なWebGPU上でForward、Backward、Adamオプティマイザ、Loss関数をサポートする完全なDAG計算グラフを提供します。",
          "zh": "在纯 WebGPU 环境下提供完整的 DAG 计算图，原生支持前向传播、反向求导、Adam 优化器与各类损失函数。"
        }
      },
      {
        "title": {
          "en": "Zero Cloud Server Cost ($0)",
          "ko": "클라우드 서버 비용 $0 실현",
          "ja": "クラウドサーバー費用$0の実現",
          "zh": "零云端服务器运营成本 ($0)"
        },
        "desc": {
          "en": "Shifts 100% of tensor compute workloads to the end-user's device with deterministic privacy protection.",
          "ko": "모든 텐서 연산 부하를 최종 사용자 디바이스로 분산하여 결정론적 데이터 프라이버시를 보장합니다.",
          "ja": "すべてのテンソル計算負荷をエンドユーザーのデバイスに分散し、確実なデータプライバシーを保護します。",
          "zh": "将 100% 的张量计算工作负载完全卸载至终端用户设备，从架构层面捍卫数据主权与隐私。"
        }
      },
      {
        "title": {
          "en": "Pure PyTorch-Like Pythonic API",
          "ko": "PyTorch 스타일의 직관적인 JS/TS API",
          "ja": "PyTorch風の直感的なJS/TS API",
          "zh": "高度类 PyTorch 的现代 JS/TS API"
        },
        "desc": {
          "en": "Tensor operations mirror standard PyTorch syntax: x.backward(), optimizer.step(), nn.Linear().",
          "ko": "x.backward(), optimizer.step(), nn.Linear() 등 표준 PyTorch 문법을 그대로 재현하여 러닝 커브가 없습니다.",
          "ja": "x.backward()、optimizer.step()、nn.Linear()など、標準のPyTorch構文をそのまま再現しています。",
          "zh": "完美复刻 x.backward()、optimizer.step()、nn.Linear() 等标准 PyTorch 语法，零学习成本上手。"
        }
      }
    ]
  },
  "aichain": {
    "subtitles": {
      "en": "Zero-Dependency Deterministic AI Agent Workflow Orchestrator & State Machine for Android Termux",
      "ko": "안드로이드 Termux를 위한 제로 디펜던시 결정론적 AI 에이전트 워크플로우 오케스트레이터",
      "ja": "Android Termux向けゼロ依存・決定論的AIエージェントワークフローオーケストレーター",
      "zh": "适用于 Android Termux 的零依赖确定性 AI 智能体工作流编排与状态机"
    },
    "challenge": {
      "en": "Heavy agent frameworks (LangChain, LlamaIndex) require hundreds of dependencies, bloat disk space (>1GB), and introduce unpredictable async deadlocks.",
      "ko": "기존 에이전트 프레임워크(LangChain, LlamaIndex)는 수백 개의 외부 의존성, 1GB 이상의 용량 낭비, 예측 불가능한 비동기 데드락을 유발합니다.",
      "ja": "従来の重いエージェントフレームワークは、数百もの依存関係、1GB以上の容量肥大化、予測不可能なデッドロックを引き起こします。",
      "zh": "传统重量级智能体框架（如 LangChain、LlamaIndex）依赖成百上千个外部包，膨胀超过 1GB 磁盘空间，并带来不可控的异步死锁问题。"
    },
    "breakthrough": {
      "en": "Provides pure zero-dependency DAG execution, structured prompt templating, and finite state machine transitions in a single ultra-lightweight module.",
      "ko": "단일 초경량 모듈로 무의존성 DAG 실행, 구조화된 프롬프트 템플릿, 유한 상태 기계(FSM) 전이를 완벽하게 제공합니다.",
      "ja": "単一の超軽量モジュールで、ゼロ依存のDAG実行、構造化プロンプトテンプレート、有限状態機械（FSM）を提供します。",
      "zh": "在单个超轻量模块中提供纯粹零依赖的 DAG 编排执行、结构化提示词模板与有限状态机 (FSM) 状态流转。"
    },
    "features": [
      {
        "title": {
          "en": "Zero External Dependencies",
          "ko": "외부 의존성 제로(0)",
          "ja": "外部依存関係ゼロ",
          "zh": "纯粹零外部第三方依赖"
        },
        "desc": {
          "en": "Implemented in 100% pure standard library code without requiring external pip or npm packages.",
          "ko": "외부 pip 또는 npm 패키지 없이 100% 표준 라이브러리 순수 코드로만 구현되었습니다.",
          "ja": "外部パッケージを一切必要とせず、100%標準ライブラリコードのみで実装されています。",
          "zh": "完全基于语言标准库纯代码实现，无需安装任何外部 pip 或 npm 依赖包。"
        }
      },
      {
        "title": {
          "en": "Deterministic FSM State Machine",
          "ko": "결정론적 FSM 상태 머신",
          "ja": "決定論的FSMステートマシン",
          "zh": "确定性有限状态机 (FSM)"
        },
        "desc": {
          "en": "Guarantees predictable agent workflow transitions with rollback and error recovery contracts.",
          "ko": "롤백 및 오류 복구 계약을 바탕으로 예측 가능한 에이전트 워크플로우 전이를 보장합니다.",
          "ja": "ロールバックとエラー復旧の保証により、予測可能なエージェントワークフローを維持します。",
          "zh": "具备严密的事务回滚与故障自愈契约，确保智能体工作流的每一步状态流转均严格确定。"
        }
      },
      {
        "title": {
          "en": "On-Device Memory Capping",
          "ko": "온디바이스 메모리 상한 제어",
          "ja": "オンデバイスメモリ上限制御",
          "zh": "端侧内存动态上限管控"
        },
        "desc": {
          "en": "Maintains strict memory boundaries preventing Android Low Memory Killer (LMK) process termination.",
          "ko": "엄격한 메모리 상한을 유지하여 안드로이드 LMK(Low Memory Killer)에 의한 프로세스 강제 종료를 방지합니다.",
          "ja": "厳格なメモリ上限を維持し、Android LMKによるプロセスの強制終了を防止します。",
          "zh": "实施严格的动态内存配额管理，杜绝触发 Android LMK (Low Memory Killer) 内存不足强杀机制。"
        }
      }
    ]
  },
  "llamacpp": {
    "subtitles": {
      "en": "Optimized GGUF LLM Execution Engine & OpenAI-Compatible Local Inference Server for Termux",
      "ko": "Termux 환경에 최적화된 GGUF LLM 실행 엔진 및 OpenAI 호환 온디바이스 로컬 추론 서버",
      "ja": "Termux環境に最適化されたGGUF LLM実行エンジン＆OpenAI互換オンデバイスローカル推論サーバー",
      "zh": "针对 Termux 优化的 GGUF LLM 执行引擎与兼容 OpenAI 的端侧本地推理服务器"
    },
    "challenge": {
      "en": "Running local LLMs on mobile Android typically requires multi-gigabyte build tools, fragile C++ dependencies, and complex manual quantization steps that fail on edge devices.",
      "ko": "모바일 안드로이드에서 로컬 LLM을 실행할 때 수 기가바이트의 빌드 도구, 불안정한 C++ 의존성, 모바일 환경에서 실패하기 쉬운 복잡한 양자화 과정이 필요했습니다.",
      "ja": "モバイルAndroidでローカルLLMを実行する際、数ギガバイトのビルドツール、不安定なC++依存関係、複雑な量子化プロセスが必要でした。",
      "zh": "在移动端 Android 上运行本地大语言模型通常需要数吉字节的庞大构建工具、脆弱易崩的 C++ 依赖项以及复杂的量化步骤。"
    },
    "breakthrough": {
      "en": "Ships verified, cryptographically signed Android ARM64 native binaries with GGUF v3 quantization support, executing LLaMA, Mistral, and Qwen models with zero compilation.",
      "ko": "암호학적으로 서명된 Android ARM64 네이티브 바이너리와 GGUF v3 양자화를 탑재하여 컴파일 없이 LLaMA, Mistral, Qwen 모델을 즉시 실행합니다.",
      "ja": "暗号署名されたAndroid ARM64ネイティブバイナリとGGUF v3量子化を搭載し、コンパイル不要でLLaMA、Mistral、Qwenモデルを即座に実行します。",
      "zh": "提供经过完整密码学签名的 Android ARM64 原生可执行二进制与 GGUF v3 量化支持，免编译直接即刻运行 LLaMA、Mistral 与通义千问 Qwen。"
    },
    "features": [
      {
        "title": {
          "en": "Native Android ARM64 Binaries",
          "ko": "네이티브 Android ARM64 바이너리",
          "ja": "ネイティブAndroid ARM64バイナリ",
          "zh": "原生 Android ARM64 预编译二进制"
        },
        "desc": {
          "en": "Precompiled high-performance llama-cli and llama-server binaries optimized with OpenMP and NEON acceleration.",
          "ko": "OpenMP 및 NEON 가속으로 최적화된 사전 컴파일된 고성능 llama-cli 및 llama-server를 제공합니다.",
          "ja": "OpenMPおよびNEONで最適化された高パフォーマンスなllama-cliとllama-serverを提供します。",
          "zh": "提供基于 OpenMP 多线程与 NEON 向量指令集深度优化的预编译高性能 llama-cli 及 llama-server。"
        }
      },
      {
        "title": {
          "en": "OpenAI-Compatible Local API",
          "ko": "OpenAI 호환 로컬 REST API",
          "ja": "OpenAI互換ローカルREST API",
          "zh": "完全兼容 OpenAI 的本地 REST API"
        },
        "desc": {
          "en": "Built-in REST HTTP / SSE streaming server supporting standard /v1/chat/completions endpoints.",
          "ko": "표준 /v1/chat/completions 엔드포인트를 완벽히 지원하는 내장 REST HTTP / SSE 스트리밍 서버를 갖추고 있습니다.",
          "ja": "標準の/v1/chat/completionsエンドポイントをサポートする内蔵REST HTTP / SSEストリーミングサーバーを備えています。",
          "zh": "内置生产就绪级 REST HTTP 与 SSE 流式输出服务器，原生支持标准 /v1/chat/completions 接口。"
        }
      },
      {
        "title": {
          "en": "Multi-GGUF Quantization Hub",
          "ko": "다양한 GGUF 양자화 포맷 지원",
          "ja": "多彩なGGUF量子化フォーマット対応",
          "zh": "多元 GGUF 量化模型生态枢纽"
        },
        "desc": {
          "en": "Seamless execution of Q4_K_M, Q5_K_M, and IQ4_XS quantized weights with memory mapping (mmap).",
          "ko": "메모리 매핑(mmap)을 통해 Q4_K_M, Q5_K_M, IQ4_XS 등 다양한 양자화 가중치를 초고속으로 로드하여 실행합니다.",
          "ja": "メモリマッピング（mmap）により、Q4_K_M、Q5_K_M、IQ4_XSなどの量子化重みを高速実行します。",
          "zh": "支持基于内存映射 (mmap) 极速加载执行 Q4_K_M、Q5_K_M 以及 IQ4_XS 等多种先进量化权重。"
        }
      },
      {
        "title": {
          "en": "Cluster Thread Pinning",
          "ko": "클러스터 코어 스레드 핀닝",
          "ja": "クラスタスレッド固定",
          "zh": "CPU 核心拓扑自适应调度"
        },
        "desc": {
          "en": "Automatically schedules inference threads to high-performance ARM Cortex-X and big cores.",
          "ko": "추론 스레드를 고성능 ARM Cortex-X 및 Big 코어 클러스터에 자동으로 고정하여 지연시간을 단축합니다.",
          "ja": "推論スレッドを高パフォーマンスなARM Cortex-XおよびBigコアに自動固定し、遅延を短縮します。",
          "zh": "根据芯片拓扑自动将推理计算线程绑定至 ARM Cortex-X 超大核与性能大核集群，显著降低推理延迟。"
        }
      }
    ]
  },
  "vision": {
    "subtitles": {
      "en": "On-Device Computer Vision, OCR & Visual Language Model (VLM) Framework for Mobile Edge",
      "ko": "모바일 에지 환경을 위한 온디바이스 컴퓨터 비전, OCR 및 시각 언어 모델(VLM) 프레임워크",
      "ja": "モバイルエッジ環境向けオンデバイスコンピュータビジョン、OCRおよび視覚言語モデル（VLM）フレームワーク",
      "zh": "适用于移动边缘端的端侧计算机视觉、OCR 与视觉语言模型 (VLM) 框架"
    },
    "challenge": {
      "en": "Standard vision frameworks (OpenCV, TorchVision) suffer from massive binary sizes (>150MB), complex C++ compilation bottlenecks on ARM64 Termux, and lack seamless mobile VLM multimodal pipelines.",
      "ko": "기존 비전 프레임워크(OpenCV, TorchVision)는 150MB 이상의 거대한 크기, ARM64 Termux에서의 복잡한 C++ 컴파일 병목, 모바일 VLM 멀티모달 파이프라인 부재 문제를 겪고 있었습니다.",
      "ja": "従来のビジョンフレームワーク（OpenCV、TorchVision）は、150MBを超える巨大なサイズ、ARM64 TermuxでのC++ビルド難、モバイルVLMの不足が課題でした。",
      "zh": "传统计算机视觉库（OpenCV、TorchVision）体积庞大 (>150MB)，在 ARM64 Termux 上存在复杂的 C++ 编译瓶颈，且严重缺乏无缝集成的移动端 VLM 多模态推理管线。"
    },
    "breakthrough": {
      "en": "Provides pure Python/JS 5-stage Canny Edge, Sobel 3x3, Gaussian Blur, 2D Integral Images, Haar Cascade Face Detection, and on-device SmolVLM/Qwen2-VL Multimodal Vision-Language inference with Vulkan GPU acceleration and automatic CPU fallback under 500MB RAM.",
      "ko": "순수 Python/JS 5단계 Canny Edge, Sobel 3x3, 가우시안 블러, 적분 영상, Haar Cascade 얼굴 검출과 함께 Vulkan GPU 가속 및 CPU 폴백을 지원하는 SmolVLM/Qwen2-VL 멀티모달 VLM 추론을 500MB RAM 미만으로 제공합니다.",
      "ja": "純粋なPython/JSによるCanny Edge、Sobel 3x3、ガウシアンブラー、Haar顔検出と、Vulkan GPU加速対応のSmolVLM/Qwen2-VLマルチモーダルVLM推論を500MB未満のRAMで提供します。",
      "zh": "提供纯 Python/JS 实现的 5 级 Canny 边缘检测、Sobel 3x3、高斯模糊、Haar 人脸检测，以及支持 Vulkan GPU 硬件加速的 SmolVLM/Qwen2-VL 端侧多模态 VLM 推理，内存占用控制在 500MB 以内。"
    },
    "features": [
      {
        "title": {
          "en": "Zero-Heavy C++ Dependency",
          "ko": "무거운 C++ 의존성 제로(0)",
          "ja": "重いC++依存関係ゼロ",
          "zh": "零庞大 C++ 外部依赖"
        },
        "desc": {
          "en": "Runs out-of-the-box on vanilla Termux Python (pip) and Node.js (npm) without complex OpenCV or node-gyp builds.",
          "ko": "복잡한 OpenCV나 node-gyp 빌드 없이 순수 Termux Python(pip) 및 Node.js(npm)에서 즉시 설치되어 실행됩니다.",
          "ja": "OpenCVやnode-gypビルド不要で、Termux Python(pip)およびNode.js(npm)で即座に動作します。",
          "zh": "无需繁重的 OpenCV 编译或 node-gyp 原生构建，直接在 Termux Python (pip) 与 Node.js (npm) 上开箱即用。"
        }
      },
      {
        "title": {
          "en": "Multimodal VLM Inference Engine",
          "ko": "멀티모달 VLM 추론 엔진",
          "ja": "マルチモーダルVLM推論エンジン",
          "zh": "多模态视觉语言 (VLM) 推理引擎"
        },
        "desc": {
          "en": "Natively supports SmolVLM-500M and Qwen2-VL-2B models with truthful visual question answering and image description.",
          "ko": "SmolVLM-500M 및 Qwen2-VL-2B 모델을 기본 지원하여 신뢰도 높은 시각 질문 응답(VQA) 및 이미지 설명을 수행합니다.",
          "ja": "SmolVLM-500MおよびQwen2-VL-2Bモデルをネイティブサポートし、高精度な視覚的質疑応答を実現します。",
          "zh": "原生支持 SmolVLM-500M 与 Qwen2-VL-2B 模型，提供高准确度的端侧视觉问答 (VQA) 与图像语义描述。"
        }
      },
      {
        "title": {
          "en": "Vulkan GPU Acceleration & CPU Fallback",
          "ko": "Vulkan GPU 가속 및 자동 CPU 폴백",
          "ja": "Vulkan GPU加速＆自動CPUフォールバック",
          "zh": "Vulkan GPU 硬件加速与优雅 CPU 降级"
        },
        "desc": {
          "en": "Auto-detects Vulkan GPU acceleration with graceful CPU retry on driver faults, or strict isolated GPU enforcement.",
          "ko": "Vulkan GPU 가속을 자동 감지하며 드라이버 결함 발생 시 CPU로 안전하게 재시도하는 고신뢰성 구조를 갖추고 있습니다.",
          "ja": "Vulkan GPU加速を自動検出し、ドライバ障害発生時はCPUへ安全にフォールバックします。",
          "zh": "智能探测 Vulkan GPU 硬件加速，在驱动出现故障时自动平滑降级至 CPU 运算，保障业务永不中断。"
        }
      },
      {
        "title": {
          "en": "1:1 Native Bridge with termux-train",
          "ko": "termux-train과의 1:1 네이티브 연동",
          "ja": "termux-trainとの1:1ネイティブ連携",
          "zh": "与 termux-train 无缝 1:1 原生桥接"
        },
        "desc": {
          "en": "Seamlessly converts extracted vision feature maps and ViT patches directly into termux-train tensors for edge LoRA fine-tuning.",
          "ko": "추출된 비전 피처 맵과 ViT 패치를 termux-train 텐서로 즉각 변환하여 모바일 에지 LoRA 미세조정을 지원합니다.",
          "ja": "抽出されたビジョン特徴マップをtermux-trainテンソルに直接変換し、エッジLoRA微調整を可能にします。",
          "zh": "将提取的图像特征图与 ViT Patch 直接无损转换为 termux-train 统一张量，支持端侧微调与 LoRA 训练。"
        }
      }
    ]
  },
  "playwright": {
    "subtitles": {
      "en": "Production On-Device Browser Automation and Scraper Engine for Android Termux",
      "ko": "안드로이드 Termux를 위한 프로덕션급 온디바이스 브라우저 자동화 & 스크래핑 엔진",
      "ja": "Android Termux向けオンデバイスブラウザ自動化およびスクレイピングエンジン",
      "zh": "适用于 Android Termux 的端侧浏览器自动化与网页采集引擎"
    },
    "challenge": {
      "en": "Official browser automation drivers fail on Android Termux due to missing X11/Wayland servers and sandboxing constraints.",
      "ko": "공식 브라우저 자동화 드라이버는 X11/Wayland 디스플레이 서버 부재 및 샌드박스 제약으로 인해 안드로이드 Termux에서 구동되지 못했습니다.",
      "ja": "公式のブラウザ自動化ドライバは、X11/Waylandサーバーの欠如とサンドボックス制約によりAndroid Termuxで動作しませんでした。",
      "zh": "官方浏览器自动化驱动由于缺失 X11/Wayland 图形显示服务器及沙箱安全限制，无法在 Android Termux 环境中直接运行。"
    },
    "breakthrough": {
      "en": "Controls genuine Chromium processes via direct Chrome DevTools Protocol (CDP) WebSocket sessions on Android Bionic libc without root.",
      "ko": "루팅 없이 Android Bionic libc 위에서 Chrome DevTools Protocol(CDP) WebSocket 세션을 통해 순수 Chromium 프로세스를 직접 제어합니다.",
      "ja": "root権限なしで、Android Bionic libc上でChrome DevTools Protocol（CDP）を通じて純正Chromiumプロセスを直接制御します。",
      "zh": "无需 Root 权限，直接在 Android Bionic libc 底层通过 Chrome DevTools Protocol (CDP) WebSocket 会话精准控制原生 Chromium 进程。"
    },
    "features": [
      {
        "title": {
          "en": "Bionic Chromium Native Driver",
          "ko": "Bionic Chromium 네이티브 드라이버",
          "ja": "Bionic Chromiumネイティブドライバ",
          "zh": "Bionic Chromium 原生驱动"
        },
        "desc": {
          "en": "Direct DevTools Protocol (CDP) communication over Unix domain sockets without desktop display servers.",
          "ko": "데스크톱 디스플레이 서버 없이 유닉스 도메인 소켓 기반의 직접 CDP 통신을 수행합니다.",
          "ja": "デスクトップ表示サーバーなしで、Unixドメインソケットを介して直接CDP通信を実行します。",
          "zh": "通过 Unix 域套接字进行直接 CDP 协议交互，完全脱离任何桌面显示服务器依赖。"
        }
      },
      {
        "title": {
          "en": "Phantom Process Reaper",
          "ko": "좀비 프로세스 원천 소멸(Reaper)",
          "ja": "ファントムプロセス自動回収",
          "zh": "幽灵进程自动回收 (Reaper)"
        },
        "desc": {
          "en": "Zero-zombie guarantee with automatic PID cleanup on SIGINT and unhandled rejection.",
          "ko": "SIGINT 수신 및 비정상 종료 시 자동 PID 정리로 좀비 프로세스를 0개로 완벽 관리합니다.",
          "ja": "SIGINTおよび異常終了時に自動でPIDをクリーンアップし、ゾンビプロセスを完全にゼロにします。",
          "zh": "在接收到 SIGINT 或发生未捕获异常时自动执行 PID 清理回收，彻底杜绝任何僵尸进程残留。"
        }
      },
      {
        "title": {
          "en": "Production Scraper Recipes",
          "ko": "프로덕션 웹 스크래핑 레시피",
          "ja": "本番用Webスクレイピングレシピ",
          "zh": "生产级高可用网页采集范式"
        },
        "desc": {
          "en": "Headless stealth mode bypass and dynamic cookie session persistence.",
          "ko": "헤드리스 스텔스 탐지 우회 및 동적 쿠키 세션 영속화를 지원합니다.",
          "ja": "ヘッドレス検出の回避と動的クッキーセッションの永続化をサポートします。",
          "zh": "内置高度隐蔽的无头反爬绕过策略与动态 Cookie 会话持久化机制。"
        }
      }
    ]
  },
  "sentinel": {
    "subtitles": {
      "en": "Privacy-first Security Observability and Deterministic Threat Scoring Layer for Web Applications",
      "ko": "웹 애플리케이션을 위한 프라이버시 우선 보안 관측성 및 결정론적 0~100 위협 스코어링 엔진",
      "ja": "Webアプリケーション向けプライバシー優先セキュリティ観測および決定論的脅威スコアリング層",
      "zh": "适用于 Web 应用的隐私优先安全可观测性与确定性威胁评分层"
    },
    "challenge": {
      "en": "Traditional bot detection SDKs compromise user privacy by capturing sensitive keystrokes and mouse trajectories.",
      "ko": "기존 봇 탐지 SDK는 민감한 키보드 입력과 마우스 궤적을 서버로 전송하여 사용자 프라이버시를 심각하게 침해합니다.",
      "ja": "従来のボット検出SDKは、機密性の高いキー入力やマウス軌跡をサーバーに送信してプライバシーを侵害します。",
      "zh": "传统机器人与恶意爬虫防御 SDK 通过抓取用户敏感的按键序列与鼠标轨迹来分析行为，严重侵犯用户数据隐私。"
    },
    "breakthrough": {
      "en": "Evaluates client structural signals entirely locally without capturing user inputs, computing deterministic 0~100 risk score and HMAC-SHA256 tokens.",
      "ko": "사용자 입력을 일절 수집하지 않고 클라이언트 구조 신호만을 로컬에서 평가하여 결정론적 0~100 위험도 점수와 HMAC-SHA256 토큰을 산출합니다.",
      "ja": "ユーザー入力を一切収集せず、クライアントの構造信号のみをローカルで評価して決定論的リスクスコア（0〜100）とHMAC-SHA256トークンを算出します。",
      "zh": "完全不在客户端捕获任何用户输入，仅在本地评估浏览器环境结构性信号，确定性输出 0~100 安全风险评分与 HMAC-SHA256 签名凭证。"
    },
    "features": [
      {
        "title": {
          "en": "Privacy-Preserving Threat Scoring",
          "ko": "프라이버시 보호 위협 스코어링",
          "ja": "プライバシー保護型脅威スコアリング",
          "zh": "注重隐私保护的威胁评分引擎"
        },
        "desc": {
          "en": "Computes behavioral and structural integrity scores 100% on the client without transmitting telemetry.",
          "ko": "외부 텔레메트리 전송 없이 클라이언트 내에서 100% 로컬로 무결성 점수를 계산합니다.",
          "ja": "外部へのテレメトリ送信なしで、クライアント内で100%ローカルに整合性スコアを計算します。",
          "zh": "100% 在终端本地完成环境结构完整性评估，零云端遥测数据外泄。"
        }
      },
      {
        "title": {
          "en": "HMAC-SHA256 Cryptographic Tokens",
          "ko": "HMAC-SHA256 암호학적 검증 토큰",
          "ja": "HMAC-SHA256暗号化トークン",
          "zh": "HMAC-SHA256 密码学签名防篡改"
        },
        "desc": {
          "en": "Generates tamper-proof validation payloads preventing MITM replay attacks.",
          "ko": "중간자 재전송(Replay) 공격을 방지하는 위변조 방지 페이로드를 생성합니다.",
          "ja": "中間者リプレイ攻撃を防止する改ざん耐性ペイロードを生成します。",
          "zh": "生成防篡改的本地验证负载，彻底杜绝中间人重放攻击 (Replay Attack)。"
        }
      },
      {
        "title": {
          "en": "Zero Dependency SDK (<15KB)",
          "ko": "15KB 미만 무의존성 초경량 SDK",
          "ja": "15KB未満の依存性ゼロ超軽量SDK",
          "zh": "低于 15KB 的极致轻量零依赖 SDK"
        },
        "desc": {
          "en": "Ultra-lightweight drop-in script with zero external npm dependencies and sub-1ms evaluation overhead.",
          "ko": "외부 npm 의존성이 전혀 없으며 1ms 미만의 평가 지연을 가진 초경량 스크립트입니다.",
          "ja": "外部npm依存関係が一切なく、評価オーバーヘッドが1ms未満の超軽量スクリプトです。",
          "zh": "完全不依赖任何外部 npm 第三方包，单次评估开销低于 1ms，极易集成。"
        }
      }
    ]
  },
  "train": {
    "subtitles": {
      "en": "Ultra-lightweight On-Device Tensor & DAG Autograd Deep Learning Framework for Android ARM64 Termux",
      "ko": "안드로이드 ARM64 Termux를 위한 초경량 온디바이스 텐서 연산 & DAG 자동미분(Autograd) 딥러닝 프레임워크",
      "ja": "Android ARM64 Termux向け超軽量オンバイステンソル演算＆DAG自動微分深層学習フレームワーク",
      "zh": "适用于 Android ARM64 Termux 的超轻量端侧张量运算与有向无环图自动求导深度学习框架"
    },
    "challenge": {
      "en": "Standard deep learning frameworks cannot compile cleanly on Android Bionic and exceed smartphone RAM during backpropagation.",
      "ko": "표준 딥러닝 프레임워크는 Android Bionic에서 깔끔하게 컴파일되지 않으며 역전파 시 스마트폰 메모리를 초과합니다.",
      "ja": "標準の深層学習フレームワークはAndroid Bionicでビルドが困難であり、逆伝播時にスマートフォンRAMを超過します。",
      "zh": "标准深度学习框架无法在 Android Bionic libc 上顺畅编译，且在反向传播求导过程中极易超出智能手机 RAM 上限。"
    },
    "breakthrough": {
      "en": "Provides a clean C-based DAG computation graph with SafeTensors zero-copy serialization and LoRA adapter fine-tuning on smartphone CPUs.",
      "ko": "스마트폰 CPU에서 SafeTensors 제로 카피 직렬화 및 LoRA 어댑터 미세 조정을 지원하는 순수 C 기반 DAG 연산 그래프를 제공합니다.",
      "ja": "スマートフォンCPU上でSafeTensorsゼロコピーシリアライズおよびLoRA微調整をサポートする、純粋なCベースのDAG計算グラフを提供します。",
      "zh": "提供纯 C 构建的高效有向无环图 (DAG) 计算体系，支持 SafeTensors 零拷贝序列化与智能手机 CPU 端侧 LoRA 微调。"
    },
    "features": [
      {
        "title": {
          "en": "DAG Autograd Engine",
          "ko": "DAG 자동미분(Autograd) 엔진",
          "ja": "DAG自動微分エンジン",
          "zh": "DAG 动态自动求导引擎"
        },
        "desc": {
          "en": "Lightweight dynamic computational graph executing forward and backward passes on ARM64 NEON.",
          "ko": "ARM64 NEON 최적화 기반으로 순전파 및 역전파를 고속 실행하는 경량 동적 연산 그래프를 탑재했습니다.",
          "ja": "ARM64 NEONに最適化され、順伝播および逆伝播を高速実行する軽量動的計算グラフを搭載しています。",
          "zh": "基于 ARM64 NEON 向量指令集优化，高效执行正向传播与反向梯度反传。"
        }
      },
      {
        "title": {
          "en": "SafeTensors Zero-Copy I/O",
          "ko": "SafeTensors 제로 카피 I/O",
          "ja": "SafeTensorsゼロコピーI/O",
          "zh": "SafeTensors 零拷贝高速 I/O"
        },
        "desc": {
          "en": "Direct memory-mapped weights loading eliminating deserialization overhead.",
          "ko": "메모리 맵(mmap) 기반 가중치 로딩으로 역직렬화 오버헤드를 완전히 제거했습니다.",
          "ja": "メモリマップ（mmap）による重み読み込みで、デシリアライズのオーバーヘッドを完全に排除しました。",
          "zh": "基于内存映射 (mmap) 直接加载张量权重，彻底消除反序列化开销。"
        }
      },
      {
        "title": {
          "en": "LoRA Edge Fine-Tuning",
          "ko": "온디바이스 LoRA 미세조정",
          "ja": "エッジLoRA微調整",
          "zh": "端侧 LoRA 参数高效微调"
        },
        "desc": {
          "en": "Low-Rank Adaptation targeting LLMs and vision transformers within constrained mobile RAM.",
          "ko": "제한된 모바일 RAM 환경에서도 LLM 및 비전 트랜스포머의 저순위 적응(LoRA) 학습을 지원합니다.",
          "ja": "限られたモバイルRAM環境でも、LLMやビジョントランスフォーマーのLoRA学習をサポートします。",
          "zh": "在有限的移动端 RAM 环境下支持针对大模型及视觉 Transformer 的低秩适应 (LoRA) 训练。"
        }
      }
    ]
  },
  "mcp": {
    "subtitles": {
      "en": "Polyglot Model Context Protocol Hub with In-Memory WASI WebAssembly Execution Engine",
      "ko": "인메모리 WASI WebAssembly 실행 엔진 기반 폴리글랏 모델 컨텍스트 프로토콜(MCP) 허브",
      "ja": "インメモリWASI WebAssembly実行エンジン搭載ポリグロットMCPハブ",
      "zh": "基于内存 WASI WebAssembly 执行引擎的多语言模型上下文协议 (MCP) 枢纽"
    },
    "challenge": {
      "en": "Setting up traditional MCP servers requires installing gigabytes of Node.js/Python toolchains and complex environment configurations.",
      "ko": "기존 MCP 서버 구축은 수 기가바이트의 Node.js/Python 툴체인 설치와 복잡한 환경 구성을 필요로 합니다.",
      "ja": "従来のMCPサーバー構築には、数ギガバイトのNode.js/Pythonツールチェーンと複雑な設定が必要でした。",
      "zh": "搭建传统 MCP 服务端通常需要安装数吉字节的 Node.js/Python 工具链及繁琐的运行时环境配置。"
    },
    "breakthrough": {
      "en": "Executes WASI WebAssembly bytecodes in-memory inside a single standalone runtime, orchestrating polyglot tool servers without containers.",
      "ko": "단일 독립 런타임 내에서 WASI WebAssembly 바이트코드를 인메모리로 직접 실행하여 컨테이너 없이 다국어 도구 서버를 오케스트레이션합니다.",
      "ja": "単一のスタンドアロンランタイム内でWASI WebAssemblyバイトコードをインメモリ実行し、コンテナなしで多言語ツールサーバーを統合します。",
      "zh": "在单个独立运行时内基于内存直接执行 WASI WebAssembly 字节码，无需容器即可跨语言编排调用各类智能体工具。"
    },
    "features": [
      {
        "title": {
          "en": "In-Memory WASI Execution",
          "ko": "인메모리 WASI 실행",
          "ja": "インメモリWASI実行",
          "zh": "内存级 WASI 极速执行"
        },
        "desc": {
          "en": "Executes C/Rust/Go compiled WASM tools instantly without OS process spawning overhead.",
          "ko": "OS 프로세스 생성 오버헤드 없이 C/Rust/Go로 컴파일된 WASM 툴을 즉각 실행합니다.",
          "ja": "OSプロセスの生成オーバーヘッドなしで、C/Rust/GoでコンパイルされたWASMツールを即座に実行します。",
          "zh": "零 OS 进程创建开销，纳秒级直接在内存中执行由 C/Rust/Go 编译的 WASM 工具模块。"
        }
      },
      {
        "title": {
          "en": "Polyglot Tool Orchestration",
          "ko": "폴리글랏 도구 오케스트레이션",
          "ja": "ポリグロットツールオーケストレーション",
          "zh": "多语言工具统一编排调度"
        },
        "desc": {
          "en": "Unifies JSON-RPC 2.0 tool discovery and execution across diverse LLM client agents.",
          "ko": "다양한 LLM 클라이언트 에이전트 간 JSON-RPC 2.0 도구 탐색 및 실행 인터페이스를 단일화합니다.",
          "ja": "多様なLLMクライアント間でJSON-RPC 2.0ツール検出および実行を統合します。",
          "zh": "统一基于 JSON-RPC 2.0 协议的工具发现与调用执行，无缝对接各类主流大模型客户端。"
        }
      },
      {
        "title": {
          "en": "Zero-Container Sandboxing",
          "ko": "무컨테이너 샌드박스 격리",
          "ja": "コンテナ不要のサンドボックス隔離",
          "zh": "免容器 WebAssembly 安全沙箱"
        },
        "desc": {
          "en": "WebAssembly memory isolation guaranteeing 100% host system security.",
          "ko": "WebAssembly 메모리 격리를 통해 호스트 시스템 보안을 철저히 보장합니다.",
          "ja": "WebAssemblyメモリ分離により、ホストシステムのセキュリティを確実に保護します。",
          "zh": "依托 WebAssembly 严密的线性内存隔离机制，从根源上保障宿主系统环境绝对安全。"
        }
      }
    ]
  },
  "infra-index": {
    "subtitles": {
      "en": "High-Availability Distributed Infrastructure Telemetry & Global Node Health Monitoring Index",
      "ko": "고가용성 분산 인프라 텔레메트리 및 글로벌 노드 헬스 모니터링 인덱스 플랫폼",
      "ja": "高可用性分散インフラテレメトリ＆グローバルノードヘルスモニタリングインデックスプラットフォーム",
      "zh": "高可用分布式基础设施遥测与全球节点健康监控索引平台"
    },
    "challenge": {
      "en": "Multi-cloud infrastructure pricing fluctuates continuously with opaque egress and compute fees across 69+ global cloud providers.",
      "ko": "전 세계 69개 이상의 클라우드 공급자 간에 컴퓨팅 및 네트워크 송신 수수료가 불투명하고 지속적으로 변동하는 문제가 존재합니다.",
      "ja": "世界69社以上のクラウドプロバイダー間で、コンピュートおよび外部送信料金が不透明で常に変動しています。",
      "zh": "全球 69 家以上主流云厂商之间的计算实例与网络出网带宽定价持续波动且极不透明。"
    },
    "breakthrough": {
      "en": "Aggregates real-time price telemetry and health metrics into an open-source OHLC composite index with sub-second caching.",
      "ko": "실시간 가격 텔레메트리와 상태 지표를 수집하여 초저지연 캐시가 적용된 오픈소스 OHLC 종합 인덱스로 집계합니다.",
      "ja": "リアルタイムの価格テレメトリとヘルス指標を集約し、低遅延キャッシュを備えたオープンソースOHLCインデックスを提供します。",
      "zh": "全量采集实时价格遥测与健康状态指标，通过毫秒级边缘缓存构建开源的 OHLC 综合基准价格指数。"
    },
    "features": [
      {
        "title": {
          "en": "69-Cloud Global Price Index",
          "ko": "69개 클라우드 글로벌 가격 지수",
          "ja": "69社クラウドグローバル価格指数",
          "zh": "覆盖 69 家全球云厂商价格指数"
        },
        "desc": {
          "en": "Continuous tracking of compute, storage, and egress rates across AWS, GCP, Azure, Oracle, and bare-metal providers.",
          "ko": "AWS, GCP, Azure, Oracle 및 베어메탈 공급자의 연산, 스토리지, 송신 비용을 지속적으로 추적합니다.",
          "ja": "AWS、GCP、Azure、Oracleおよびベアメタル事業者の費用を継続的に追跡します。",
          "zh": "持续追踪 AWS、GCP、Azure、Oracle 及各类裸金属服务器的计算、存储与出网费率。"
        }
      },
      {
        "title": {
          "en": "Multi-Tier Cache Architecture",
          "ko": "다계층 캐시 아키텍처",
          "ja": "多層キャッシュアーキテクチャ",
          "zh": "多级分布式缓存加速架构"
        },
        "desc": {
          "en": "Edge Redis caching guaranteeing sub-50ms API responses worldwide.",
          "ko": "에지 Redis 캐싱을 통해 전 세계 어디서나 50ms 미만의 초고속 API 응답을 보장합니다.",
          "ja": "エッジRedisキャッシュにより、世界中どこからでも50ms未満のAPI応答を保証します。",
          "zh": "依托边缘 Redis 分布式缓存体系，保障全球各节点 API 查询响应低于 50ms。"
        }
      },
      {
        "title": {
          "en": "Transparent Cost Telemetry",
          "ko": "투명한 비용 텔레메트리",
          "ja": "透明なコストテレメトリ",
          "zh": "全公开透明成本遥测数据流"
        },
        "desc": {
          "en": "Open-source data feeds empowering automated multi-cloud workload migration.",
          "ko": "오픈소스 데이터 피드를 제공하여 지능형 멀티클라우드 워크로드 분산 및 비용 최적화를 지원합니다.",
          "ja": "オープンソースデータフィードを提供し、自動マルチクラウド移行を支援します。",
          "zh": "输出完全开源的数据流，赋能自动化跨云多活调度与智能成本优化决策。"
        }
      }
    ]
  }
};

  const COMMON_SECTION_PHRASES = {
    "1-Line Quick Installation": {"ko": "1줄 빠른 설치", "ja": "1行クイックインストール", "zh": "一行命令快速安装", "hi": "1-लाइन त्वरित स्थापना", "ar": "تثبيت سريع بسطر واحد", "fr": "Installation Rapide en 1 Ligne", "de": "1-Zeilen-Schnellinstallation", "es": "Instalación Rápida en 1 Línea", "ru": "Быстрая установка в 1 строку", "vi": "Cài đặt nhanh 1 dòng", "pl": "Szybka instalacja w 1 linijce", "la": "Institutio Celeris 1-Lineae"},
    "1-LINE QUICK INSTALLATION": {"ko": "1줄 빠른 설치", "ja": "1行クイックインストール", "zh": "一行命令快速安装", "hi": "1-लाइन त्वरित स्थापना", "ar": "تثبيت سريع بسطر واحد", "fr": "Installation Rapide en 1 Ligne", "de": "1-Zeilen-Schnellinstallation", "es": "Instalación Rápida en 1 Línea", "ru": "Быстрая установка в 1 строку", "vi": "Cài đặt nhanh 1 dòng", "pl": "Szybka instalacja w 1 linijce", "la": "Institutio Celeris 1-Lineae"},
    "Install the official package directly into your runtime:": {"ko": "공식 패키지를 런타임 환경에 직접 설치하십시오:", "ja": "公式パッケージを実行環境に直接インストールします：", "zh": "直接将官方包安装至您的运行环境：", "hi": "आधिकारिक पैकेज सीधे अपने रनटाइम में स्थापित करें:", "ar": "قم بتثبيت الحزمة الرسمية مباشرة في بيئة التشغيل الخاصة بك:", "fr": "Installez le paquet officiel directement dans votre environnement d'exécution :", "de": "Installieren Sie das offizielle Paket direkt in Ihrer Laufzeitumgebung:", "es": "Instale el paquete oficial directamente en su entorno de ejecución:", "ru": "Установите официальный пакет напрямую в вашу среду выполнения:", "vi": "Cài đặt gói chính thức trực tiếp vào môi trường chạy của bạn:", "pl": "Zainstaluj oficjalny pakiet bezpośrednio w środowisku uruchomieniowym:", "la": "Installa sarcinam officialem directe in ambitum tuum:"},
    "The Engineering Challenge": {"ko": "기술적 당면 과제", "ja": "エンジニアリング上の課題", "zh": "工程挑战与背景", "hi": "इंजीनियरिंग चुनौती", "ar": "التحدي الهندسي", "fr": "Le Défi d'Ingénierie", "de": "Die technische Herausforderung", "es": "El Desafío de Ingeniería", "ru": "Инженерная задача", "vi": "Thách thức kỹ thuật", "pl": "Wyzwanie inżynieryjne", "la": "Provocatio Ingeniaria"},
    "The Architectural Breakthrough": {"ko": "아키텍처 혁신 및 해결책", "ja": "アーキテクチャのブレークスルー", "zh": "架构突破与创新", "hi": "वास्तुकला संबंधी सफलता", "ar": "الإنجاز المعماري", "fr": "La Percée Architecturale", "de": "Der architektonische Durchbruch", "es": "El Avance Arquitectónico", "ru": "Архитектурный прорыв", "vi": "Đột phá kiến trúc", "pl": "Przełom architektoniczny", "la": "Progressus Architecturalis"},
    "Key Capabilities & Built-in Hardening": {"ko": "핵심 역량 및 빌트인 안정화 계층", "ja": "主要機能と組み込みの強化", "zh": "核心能力与内建安全加固", "hi": "प्रमुख क्षमताएं और सुरक्षा", "ar": "القدرات الرئيسية والحماية المدمجة", "fr": "Capacités Clés & Renforcement Intégré", "de": "Hauptfunktionen & integrierte Härtung", "es": "Capacidades Clave y Fortalecimiento Integrado", "ru": "Ключевые возможности и встроенная защита", "vi": "Khả năng chính & Tăng cường tích hợp", "pl": "Kluczowe możliwości i wbudowane zabezpieczenia", "la": "Capacitates Principales et Firmitas"},
    "Supported Compute Kernels & Operations": {"ko": "지원 연산 커널 및 실행 백엔드", "ja": "サポートされている計算カーネルと操作", "zh": "支持的计算内核与算子矩阵", "hi": "समर्थित कंप्यूट कर्नेल और संचालन", "ar": "نواة الحوسبة والعمليات المدعومة", "fr": "Noyaux de Calcul et Opérations Pris en Charge", "de": "Unterstützte Rechenkerne & Operationen", "es": "Núcleos de Cómputo y Operaciones Compatibles", "ru": "Поддерживаемые вычислительные ядра и операции", "vi": "Các hạt nhân tính toán & Hoạt động được hỗ trợ", "pl": "Obsługiwane jądra obliczeniowe i operacje", "la": "Nuclei Computationis et Operationes Toleratae"},
    "Canonical Usage Example": {"ko": "표준 사용 예제", "ja": "標準的な使用例", "zh": "标准用法示例", "hi": "मानक उपयोग उदाहरण", "ar": "مثال الاستخدام القياسي", "fr": "Exemple d'Utilisation Canonique", "de": "Kanonisches Verwendungsbeispiel", "es": "Ejemplo de Uso Canónico", "ru": "Канонический пример использования", "vi": "Ví dụ sử dụng chuẩn", "pl": "Standardowy przykład użycia", "la": "Exemplum Usus Canonicum"},
    "Getting Started & Deep Guides": {"ko": "시작하기 및 심층 기술 가이드", "ja": "入門と詳細ガイド", "zh": "快速入门与深度技术指南", "hi": "शुरुआत और गहन गाइड", "ar": "البدء وأدلة متعمقة", "fr": "Pour Commencer & Guides Approfondis", "de": "Erste Schritte & Ausführliche Anleitungen", "es": "Primeros Pasos y Guías Detalladas", "ru": "Начало работы и подробные руководства", "vi": "Bắt đầu & Hướng dẫn chuyên sâu", "pl": "Pierwsze kroki i szczegółowe przewodniki", "la": "Initium et Duces Profundi"},
    "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)": {"ko": "상세 설치 가이드 (하드웨어 의존성, Termux 설정, WebGPU 플래그)", "ja": "詳細インストールガイド（ハードウェア依存関係、Termux設定、WebGPUフラグ）", "zh": "详细安装指南（硬件依赖项、Termux 配置、WebGPU 标志）", "hi": "विस्तृत स्थापना गाइड", "ar": "دليل التثبيت التفصيلي", "fr": "Guide d'installation détaillé", "de": "Detaillierte Installationsanleitung", "es": "Guía de instalación detallada", "ru": "Подробное руководство по установке", "vi": "Hướng dẫn cài đặt chi tiết", "pl": "Szczegółowa instrukcja instalacji", "la": "Dux institutionis accuratus"},
    "Quickstart Recipes & Common Execution Patterns": {"ko": "퀵스타트 레시피 & 공통 실행 패턴", "ja": "クイックスタートレシピ＆一般的な実行パターン", "zh": "快速上手示例与常用执行范式", "hi": "त्वरित शुरुआत रेसिपी", "ar": "أمثلة البدء السريع", "fr": "Recettes de démarrage rapide", "de": "Schnellstart-Rezepte", "es": "Recetas de inicio rápido", "ru": "Рецепты быстрого старта", "vi": "Công thức bắt đầu nhanh", "pl": "Przepisy szybkiego startu", "la": "Exempla initii celeris"},
    "100% Full API Reference & Struct Definitions": {"ko": "100% 전체 API 명세 및 구조체 정의", "ja": "100%完全なAPIリファレンスと構造体定義", "zh": "100% 完整 API 接口与结构体规范", "hi": "100% पूर्ण API संदर्भ", "ar": "مرجع API كامل 100%", "fr": "Référence API complète à 100%", "de": "100% vollständige API-Referenz", "es": "Referencia de API 100% completa", "ru": "100% полный справочник API", "vi": "Tài liệu tham khảo API đầy đủ 100%", "pl": "100% pełna dokumentacja API", "la": "Index API 100% plenus"},
    "Document Navigation": {"ko": "문서 상세 목차", "ja": "ドキュメント目次", "zh": "文档导航目录", "hi": "दस्तावेज़ नेविगेशन", "ar": "التنقل في المستندات", "fr": "Navigation Documentaire", "de": "Dokument-Navigation", "es": "Navegación de Documentos", "ru": "Навигация по документам", "vi": "Điều hướng tài liệu", "pl": "Nawigacja po dokumentach", "la": "Navigatio Documentorum"},
    "Home / Architecture": {"ko": "홈 / 아키텍처", "ja": "ホーム / アーキテクチャ", "zh": "首页 / 架构设计", "hi": "होम / वास्तुकला", "ar": "الرئيسية / الهندسة المعمارية", "fr": "Accueil / Architecture", "de": "Startseite / Architektur", "es": "Inicio / Arquitectura", "ru": "Главная / Архитектура", "vi": "Trang chủ / Kiến trúc", "pl": "Strona główna / Architektura", "la": "Domus / Architectura"},
    "Installation Guide": {"ko": "설치 가이드", "ja": "インストールガイド", "zh": "安装部署指南", "hi": "स्थापना गाइड", "ar": "دليل التثبيت", "fr": "Guide d'Installation", "de": "Installationsanleitung", "es": "Guía de Instalación", "ru": "Руководство по установке", "vi": "Hướng dẫn cài đặt", "pl": "Instrukcja instalacji", "la": "Dux Institutionis"},
    "Quickstart & Recipes": {"ko": "퀵스타트 & 실행 레시피", "ja": "クイックスタート＆レシピ", "zh": "快速上手与示例", "hi": "त्वरित शुरुआत और रेसिपी", "ar": "البدء السريع والأمثلة", "fr": "Démarrage Rapide & Recettes", "de": "Schnellstart & Rezepte", "es": "Inicio Rápido y Recetas", "ru": "Быстрый старт и примеры", "vi": "Bắt đầu nhanh & Công thức", "pl": "Szybki start i przepisy", "la": "Initium Celer & Exempla"},
    "API Reference": {"ko": "전체 API 명세서", "ja": "APIリファレンス", "zh": "完整 API 规范", "hi": "API संदर्भ", "ar": "مرجع API", "fr": "Référence de l'API", "de": "API-Referenz", "es": "Referencia de la API", "ru": "Справочник по API", "vi": "Tài liệu tham khảo API", "pl": "Dokumentacja API", "la": "Index API"},
    "Benchmarks & Profiling": {"ko": "벤치마크 & 하드웨어 프로파일링", "ja": "ベンチマーク＆プロファイリング", "zh": "基准测试与性能分析", "hi": "बेंचमार्क और प्रोफाइलिंग", "ar": "المعايير وتحليل الأداء", "fr": "Benchmarks & Profilage", "de": "Benchmarks & Profiling", "es": "Evaluaciones Comparativas y Perfilado", "ru": "Бенчмарки и профилирование", "vi": "Đo điểm chuẩn & Phân tích", "pl": "Testy wydajności i profilowanie", "la": "Mensurae et Profiling"},
    "Advanced Parameters": {"ko": "고급 파라미터 제어", "ja": "高度なパラメータ制御", "zh": "高级参数与内核调优", "hi": "उन्नत पैरामीटर", "ar": "المعلمات المتقدمة", "fr": "Paramètres Avancés", "de": "Erweiterte Parameter", "es": "Parámetros Avanzados", "ru": "Расширенные параметры", "vi": "Tham số nâng cao", "pl": "Zaawansowane parametry", "la": "Parametri Provecti"},
    "Version Archive": {"ko": "버전 릴리즈 아카이브", "ja": "バージョンアーカイブ", "zh": "版本发布存档", "hi": "संस्करण पुरालेख", "ar": "أرشيف الإصدارات", "fr": "Archives des Versions", "de": "Versionsarchiv", "es": "Archivo de Versiones", "ru": "Архив версий", "vi": "Kho lưu trữ phiên bản", "pl": "Archiwum wersji", "la": "Archivum Versionum"},
    "Flagship Libraries": {"ko": "플래그십 라이브러리", "ja": "フラグシップライブラリ", "zh": "旗舰开源库", "hi": "फ्लैगशिप लाइब्रेरीज़", "ar": "المكتبات الرائدة", "fr": "Bibliothèques Phares", "de": "Flaggschiff-Bibliotheken", "es": "Bibliotecas Insignia", "ru": "Флагманские библиотеки", "vi": "Thư viện hàng đầu", "pl": "Główne biblioteki", "la": "Bibliothecae Praecipuae"},
    "AI Agent Protocols": {"ko": "AI 에이전트 프로토콜", "ja": "AIエージェントプロトコル", "zh": "AI 智能体交互协议", "hi": "AI एजेंट प्रोटोकॉल", "ar": "بروتوكولات وكلاء الذكاء الاصطناعي", "fr": "Protocoles d'Agents IA", "de": "KI-Agenten-Protokolle", "es": "Protocolos de Agentes de IA", "ru": "Протоколы ИИ-агентов", "vi": "Giao thức tác tử AI", "pl": "Protokoły agentów AI", "la": "Protocolla Agentium AI"},
    "Subsystem Category": {"ko": "하위 시스템 분류", "ja": "サブシステムカテゴリ", "zh": "子系统分类", "hi": "सबसिस्टम श्रेणी", "ar": "فئة النظام الفرعي", "fr": "Catégorie de Sous-système", "de": "Subsystem-Kategorie", "es": "Categoría de Subsistema", "ru": "Категория подсистемы", "vi": "Danh mục hệ thống phụ", "pl": "Kategoria podsystemu", "la": "Classis Subsystematis"},
    "Operations & Kernels": {"ko": "연산 및 커널 명세", "ja": "操作およびカーネル仕様", "zh": "算子与计算内核", "hi": "संचालन और कर्नेल", "ar": "العمليات والنواة", "fr": "Opérations & Noyaux", "de": "Operationen & Kernel", "es": "Operaciones y Núcleos", "ru": "Операции и ядра", "vi": "Hoạt động & Hạt nhân", "pl": "Operacje i jądra", "la": "Operationes et Nuclei"},
    "Status": {"ko": "상태", "ja": "ステータス", "zh": "状态", "hi": "स्थिति", "ar": "الحالة", "fr": "Statut", "de": "Status", "es": "Estado", "ru": "Статус", "vi": "Trạng thái", "pl": "Status", "la": "Status"},
    "Production": {"ko": "프로덕션", "ja": "本番環境", "zh": "生产就绪", "hi": "उत्पादन", "ar": "إنتاج", "fr": "Production", "de": "Produktion", "es": "Producción", "ru": "Продакшн", "vi": "Sản xuất", "pl": "Produkcja", "la": "Productio"},
    "Production Release (Latest)": {"ko": "프로덕션 최신 릴리즈", "ja": "最新の安定版リリース", "zh": "最新正式生产发布", "hi": "उत्पादन रिलीज़ (नवीनतम)", "ar": "إصدار الإنتاج (الأحدث)", "fr": "Version de Production (Dernière)", "de": "Produktionsversion (Neueste)", "es": "Lanzamiento de Producción (Último)", "ru": "Промышленный релиз (Последний)", "vi": "Bản phát hành sản xuất (Mới nhất)", "pl": "Wydanie produkcyjne (Najnowsze)", "la": "Emissio Productionis (Novissima)"}
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

    _getCurrentContext() {
      const path = (window.location.pathname || '').toLowerCase();
      const match = path.match(/\/lib\/([a-z0-9_-]+)/);
      if (match && match[1]) {
        return match[1];
      }
      if (path.includes('/foundation/')) return 'foundation';
      if (path.includes('/docs/')) return 'docs';
      return 'root';
    }

    applyLanguage(lang) {
      const dict = this.translations[lang] || this.translations[DEFAULT_LANG] || this.translations['ko'] || {};
      const ctx = this._getCurrentContext();
      const libData = LIB_TRANSLATIONS[ctx];

      // 1. Explicit [data-i18n] translation
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');

        // Context-aware Header Brand & Page Title overrides for libraries
        if (ctx !== 'foundation' && ctx !== 'root' && ctx !== 'docs') {
          if (key === 'common.brand' || key === 'common.headerTitle') {
            // Libraries retain their English brand name
            return;
          }
          if (key === 'home.title' || key === 'home.heroTitle') {
            return;
          }
          if (key === 'home.subtitle' || key === 'home.heroSubtitle') {
            if (libData && libData.subtitles) {
              el.textContent = libData.subtitles[lang] || libData.subtitles['ko'] || libData.subtitles['en'] || el.textContent;
            }
            return;
          }
        }

        // Library-specific deep body translations
        if (libData) {
          if (key === 'home.challengeText' && libData.challenge) {
            el.textContent = libData.challenge[lang] || libData.challenge['ko'] || libData.challenge['en'] || el.textContent;
            return;
          }
          if (key === 'home.breakthroughText' && libData.breakthrough) {
            el.textContent = libData.breakthrough[lang] || libData.breakthrough['ko'] || libData.breakthrough['en'] || el.textContent;
            return;
          }
          const featMatch = key.match(/^home\.features\.([0-9]+)\.(title|desc)$/);
          if (featMatch && libData.features) {
            const fIdx = parseInt(featMatch[1], 10);
            const fField = featMatch[2];
            if (libData.features[fIdx] && libData.features[fIdx][fField]) {
              el.textContent = libData.features[fIdx][fField][lang] || libData.features[fIdx][fField]['ko'] || libData.features[fIdx][fField]['en'] || el.textContent;
              return;
            }
          }
        }

        // Common section phrases check
        const textKey = el.textContent.trim();
        if (COMMON_SECTION_PHRASES[textKey]) {
          el.textContent = (lang === 'en') ? textKey : (COMMON_SECTION_PHRASES[textKey][lang] || COMMON_SECTION_PHRASES[textKey]['ko'] || textKey);
          return;
        }

        const val = this._lookup(dict, key);
        if (val !== undefined && val !== null && typeof val === 'string') {
          el.textContent = val;
        }
      });

      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const val = this._lookup(dict, key);
        if (val !== undefined && val !== null && typeof val === 'string') {
          el.innerHTML = val;
        }
      });

      // 2. Intelligent Body, Table Header, Alert & Subtitle Universal Translator
      const targetTags = ['h1', 'h2', 'h3', 'h4', 'th', 'span.alert-title', 'p.subtitle', 'td', 'div.alert > p', 'nav.sidebar a', 'nav.sidebar h3', 'span.status-badge', 'div.feature-card > h4', 'div.feature-card > p'];
      document.querySelectorAll(targetTags.join(',')).forEach(el => {
        if (el.querySelector('pre, code, input, select, textarea')) return;
        
        let original = origTextMap.get(el);
        if (!original) {
          original = el.innerText.trim();
          origTextMap.set(el, original);
        }

        if (original && COMMON_SECTION_PHRASES[original]) {
          const transObj = COMMON_SECTION_PHRASES[original];
          const targetTrans = (lang === 'en') ? original : (transObj[lang] || transObj['ko'] || transObj['en'] || original);
          if (targetTrans && el.innerText.trim() !== targetTrans) {
            el.innerText = targetTrans;
          }
        }
      });

      // Update lang dropdowns
      document.querySelectorAll('.lang-select').forEach(sel => {
        sel.value = lang;
      });
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

    _setupLanguageSelectors() {
      const optionsHtml = Object.values(SUPPORTED_LANGUAGES).map(l => 
        `<option value="${l.code}">${l.flag} ${l.nativeName}</option>`
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
    module.exports = { UniversalI18nEngine, i18n, SUPPORTED_LANGUAGES, LIB_TRANSLATIONS };
  }

})(typeof window !== 'undefined' ? window : global);
