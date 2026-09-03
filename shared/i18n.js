/**
 * AMEVA Ecosystem - Master Universal Multilingual (i18n) Core Engine (SSOT v8.0)
 * High-Precision Leaf-Node DOM Multi-Pass Engine across 13 Languages.
 * Preserves all <a> links, accordion toggles, and click handlers while strictly protecting English brand names & menus.
 */

(function(global) {
  'use strict';

  const SUPPORTED_LANGUAGES = {
  "en": {
    "code": "en",
    "name": "English",
    "nativeName": "English",
    "flag": "🇺🇸",
    "dir": "ltr"
  },
  "ko": {
    "code": "ko",
    "name": "Korean",
    "nativeName": "한국어",
    "flag": "🇰🇷",
    "dir": "ltr"
  },
  "ja": {
    "code": "ja",
    "name": "Japanese",
    "nativeName": "日本語",
    "flag": "🇯🇵",
    "dir": "ltr"
  },
  "zh": {
    "code": "zh",
    "name": "Chinese",
    "nativeName": "简体中文",
    "flag": "🇨🇳",
    "dir": "ltr"
  },
  "ar": {
    "code": "ar",
    "name": "Arabic",
    "nativeName": "العربية",
    "flag": "🇸🇦",
    "dir": "rtl"
  },
  "fr": {
    "code": "fr",
    "name": "French",
    "nativeName": "Français",
    "flag": "🇫🇷",
    "dir": "ltr"
  },
  "de": {
    "code": "de",
    "name": "German",
    "nativeName": "Deutsch",
    "flag": "🇩🇪",
    "dir": "ltr"
  },
  "es": {
    "code": "es",
    "name": "Spanish",
    "nativeName": "Español",
    "flag": "🇪🇸",
    "dir": "ltr"
  },
  "hi": {
    "code": "hi",
    "name": "Hindi",
    "nativeName": "हिन्दी",
    "flag": "🇮🇳",
    "dir": "ltr"
  },
  "ru": {
    "code": "ru",
    "name": "Russian",
    "nativeName": "Русский",
    "flag": "🇷🇺",
    "dir": "ltr"
  },
  "vi": {
    "code": "vi",
    "name": "Vietnamese",
    "nativeName": "Tiếng Việt",
    "flag": "🇻🇳",
    "dir": "ltr"
  },
  "pl": {
    "code": "pl",
    "name": "Polish",
    "nativeName": "Polski",
    "flag": "🇵🇱",
    "dir": "ltr"
  },
  "la": {
    "code": "la",
    "name": "Latin",
    "nativeName": "Latina",
    "flag": "🏛️",
    "dir": "ltr"
  }
};
  const DEFAULT_LANG = 'en';
  const STORAGE_KEYS = ['ameva_global_lang', 'uno_km_lang', 'ameva_lib_doc_lang', 'forge_lang'];

  const LIB_TRANSLATIONS = {
  "vulkan": {
    "subtitles": {
      "en": "Unified Cross-Modal Vulkan GPU Acceleration Runtime & HAL for Mobile Android",
      "ko": "모바일 안드로이드를 위한 통합 크로스 모달 Vulkan GPU 가속 런타임 및 하드웨어 추상화 계층(HAL)",
      "ja": "モバイルAndroid向け統合クロスモーダルVulkan GPUアクセラレーションランタイム＆HAL",
      "zh": "适用于移动端 Android 的统一跨模态 Vulkan GPU 硬件加速运行时与硬件抽象层 (HAL)",
      "ar": "Unified Cross-Modal Vulkan GPU Acceleration Runtime & HAL for Mobile Android",
      "fr": "Unified Cross-Modal Vulkan GPU Acceleration Runtime & HAL for Mobile Android",
      "de": "Unified Cross-Modal Vulkan GPU Acceleration Runtime & HAL for Mobile Android",
      "es": "Unified Cross-Modal Vulkan GPU Acceleration Runtime & HAL for Mobile Android",
      "hi": "Unified Cross-Modal Vulkan GPU Acceleration Runtime & HAL for Mobile Android",
      "ru": "Unified Cross-Modal Vulkan GPU Acceleration Runtime & HAL for Mobile Android",
      "vi": "Unified Cross-Modal Vulkan GPU Acceleration Runtime & HAL for Mobile Android",
      "pl": "Unified Cross-Modal Vulkan GPU Acceleration Runtime & HAL for Mobile Android",
      "la": "Unified Cross-Modal Vulkan GPU Acceleration Runtime & HAL for Mobile Android"
    },
    "challenge": {
      "en": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages.",
      "ko": "모바일 안드로이드 환경에서 멀티모달 AI를 실행할 때 파편화된 GPU 드라이버, Bionic과 Mesa 간 로더 충돌, 텐서 정렬 버퍼 오버플로우, 개별 패키지별 중복 바이너리 비대화 문제가 발생합니다.",
      "ja": "モバイルAndroid環境でマルチモーダルAIを実行する際、断片化されたGPUドライバ、BionicとMesa間のローダークラッシュ、テンソルアライメントバッファのオーバーフローが課題となります。",
      "zh": "在移动端 Android 上运行多模态 AI 面临碎片化的 GPU 驱动、Bionic 与 Mesa 之间的加载器崩溃以及张量对齐缓冲区溢出问题。",
      "ar": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages.",
      "fr": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages.",
      "de": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages.",
      "es": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages.",
      "hi": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages.",
      "ru": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages.",
      "vi": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages.",
      "pl": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages.",
      "la": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages."
    },
    "breakthrough": {
      "en": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "ko": "STT, Vision, LLM, Diffusion, Training을 아우르는 단일 C++20 Vulkan 하드웨어 추상화 계층(HAL)과 범용 런타임을 제공하며, 12단계 정밀 검증 계층(V0-V11) 및 무손실 자동 복구 기능을 갖추고 있습니다.",
      "ja": "STT、Vision、LLM、Diffusion、Trainingを包括する単一のC++20 Vulkanハードウェア抽象化層（HAL）と汎用ランタイムを提供し、12段階の検証階層（V0-V11）と自動復旧を実現します。",
      "zh": "提供单一、零硬编码的 C++20 Vulkan 硬件抽象层 (HAL) 与通用运行时，统一支持 STT、视觉、大模型、扩散生成与训练，具备 12 级精细验证体系 (V0-V11)。",
      "ar": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "fr": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "de": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "es": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "hi": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "ru": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "vi": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "pl": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "la": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery."
    },
    "features": [
      {
        "title": {
          "en": "Single Loader Chain Pinning",
          "ko": "단일 로더 체인 핀닝",
          "ja": "単一ローダーチェーン固定",
          "zh": "单一加载器链路固定",
          "ar": "Single Loader Chain Pinning",
          "fr": "Single Loader Chain Pinning",
          "de": "Single Loader Chain Pinning",
          "es": "Single Loader Chain Pinning",
          "hi": "Single Loader Chain Pinning",
          "ru": "Single Loader Chain Pinning",
          "vi": "Single Loader Chain Pinning",
          "pl": "Single Loader Chain Pinning",
          "la": "Single Loader Chain Pinning"
        },
        "desc": {
          "en": "Eliminates Termux Mesa vs Android Bionic symbol collisions via dynamic dladdr provenance and sys_gpdf2 isolation.",
          "ko": "동적 dladdr 출처 검증과 sys_gpdf2 격리를 통해 Termux Mesa와 Android Bionic 간 심볼 충돌을 원천 차단합니다.",
          "ja": "動的dladdr検証とsys_gpdf2分離により、Termux MesaとAndroid Bionic間のシンボル衝突を排除します。",
          "zh": "通过动态 dladdr 溯源与 sys_gpdf2 隔离技术，彻底消除 Termux Mesa 与 Android Bionic 之间的符号冲突。",
          "ar": "Eliminates Termux Mesa vs Android Bionic symbol collisions via dynamic dladdr provenance and sys_gpdf2 isolation.",
          "fr": "Eliminates Termux Mesa vs Android Bionic symbol collisions via dynamic dladdr provenance and sys_gpdf2 isolation.",
          "de": "Eliminates Termux Mesa vs Android Bionic symbol collisions via dynamic dladdr provenance and sys_gpdf2 isolation.",
          "es": "Eliminates Termux Mesa vs Android Bionic symbol collisions via dynamic dladdr provenance and sys_gpdf2 isolation.",
          "hi": "Eliminates Termux Mesa vs Android Bionic symbol collisions via dynamic dladdr provenance and sys_gpdf2 isolation.",
          "ru": "Eliminates Termux Mesa vs Android Bionic symbol collisions via dynamic dladdr provenance and sys_gpdf2 isolation.",
          "vi": "Eliminates Termux Mesa vs Android Bionic symbol collisions via dynamic dladdr provenance and sys_gpdf2 isolation.",
          "pl": "Eliminates Termux Mesa vs Android Bionic symbol collisions via dynamic dladdr provenance and sys_gpdf2 isolation.",
          "la": "Eliminates Termux Mesa vs Android Bionic symbol collisions via dynamic dladdr provenance and sys_gpdf2 isolation."
        }
      },
      {
        "title": {
          "en": "12-Stage Probing & Fallback",
          "ko": "12단계 하드웨어 진단 및 폴백",
          "ja": "12段階の診断とフォールバック",
          "zh": "12 级硬件探测与优雅降级",
          "ar": "12-Stage Probing & Fallback",
          "fr": "12-Stage Probing & Fallback",
          "de": "12-Stage Probing & Fallback",
          "es": "12-Stage Probing & Fallback",
          "hi": "12-Stage Probing & Fallback",
          "ru": "12-Stage Probing & Fallback",
          "vi": "12-Stage Probing & Fallback",
          "pl": "12-Stage Probing & Fallback",
          "la": "12-Stage Probing & Fallback"
        },
        "desc": {
          "en": "Validates GPU capability from dlopen (V0) to E2E model inference (V11) with transparent CPU NEON recovery.",
          "ko": "dlopen(V0)부터 종단간 모델 추론(V11)까지 GPU 역량을 단계별로 검증하며 CPU NEON 백엔드로 안전하게 자동 전환합니다.",
          "ja": "dlopen（V0）からE2E推論（V11）までGPU能力を検証し、CPU NEONフォールバックで安全に自動復旧します。",
          "zh": "从 dlopen (V0) 到端到端模型推理 (V11) 逐级验证 GPU 能力，并在异常时透明降级至 CPU NEON 恢复。",
          "ar": "Validates GPU capability from dlopen (V0) to E2E model inference (V11) with transparent CPU NEON recovery.",
          "fr": "Validates GPU capability from dlopen (V0) to E2E model inference (V11) with transparent CPU NEON recovery.",
          "de": "Validates GPU capability from dlopen (V0) to E2E model inference (V11) with transparent CPU NEON recovery.",
          "es": "Validates GPU capability from dlopen (V0) to E2E model inference (V11) with transparent CPU NEON recovery.",
          "hi": "Validates GPU capability from dlopen (V0) to E2E model inference (V11) with transparent CPU NEON recovery.",
          "ru": "Validates GPU capability from dlopen (V0) to E2E model inference (V11) with transparent CPU NEON recovery.",
          "vi": "Validates GPU capability from dlopen (V0) to E2E model inference (V11) with transparent CPU NEON recovery.",
          "pl": "Validates GPU capability from dlopen (V0) to E2E model inference (V11) with transparent CPU NEON recovery.",
          "la": "Validates GPU capability from dlopen (V0) to E2E model inference (V11) with transparent CPU NEON recovery."
        }
      },
      {
        "title": {
          "en": "Multi-Modal Cross-Acceleration",
          "ko": "멀티모달 통합 가속",
          "ja": "マルチモーダル統合高速化",
          "zh": "多模态跨架构联合加速",
          "ar": "Multi-Modal Cross-Acceleration",
          "fr": "Multi-Modal Cross-Acceleration",
          "de": "Multi-Modal Cross-Acceleration",
          "es": "Multi-Modal Cross-Acceleration",
          "hi": "Multi-Modal Cross-Acceleration",
          "ru": "Multi-Modal Cross-Acceleration",
          "vi": "Multi-Modal Cross-Acceleration",
          "pl": "Multi-Modal Cross-Acceleration",
          "la": "Multi-Modal Cross-Acceleration"
        },
        "desc": {
          "en": "Powers Whisper STT, LLaVA Vision, LLaMA/BitNet LLM, and Stable Diffusion from a single 58MB shared core.",
          "ko": "단 58MB의 단일 공유 코어로 Whisper STT, LLaVA Vision, LLaMA/BitNet LLM, Stable Diffusion을 통합 가속합니다.",
          "ja": "単一の58MB共有コアからWhisper STT、LLaVA Vision、LLaMA/BitNet LLM、Stable Diffusionを高速化します。",
          "zh": "仅凭单个 58MB 共享内核，全面驱动 Whisper STT、LLaVA 视觉、LLaMA/BitNet 大模型及 Stable Diffusion。",
          "ar": "Powers Whisper STT, LLaVA Vision, LLaMA/BitNet LLM, and Stable Diffusion from a single 58MB shared core.",
          "fr": "Powers Whisper STT, LLaVA Vision, LLaMA/BitNet LLM, and Stable Diffusion from a single 58MB shared core.",
          "de": "Powers Whisper STT, LLaVA Vision, LLaMA/BitNet LLM, and Stable Diffusion from a single 58MB shared core.",
          "es": "Powers Whisper STT, LLaVA Vision, LLaMA/BitNet LLM, and Stable Diffusion from a single 58MB shared core.",
          "hi": "Powers Whisper STT, LLaVA Vision, LLaMA/BitNet LLM, and Stable Diffusion from a single 58MB shared core.",
          "ru": "Powers Whisper STT, LLaVA Vision, LLaMA/BitNet LLM, and Stable Diffusion from a single 58MB shared core.",
          "vi": "Powers Whisper STT, LLaVA Vision, LLaMA/BitNet LLM, and Stable Diffusion from a single 58MB shared core.",
          "pl": "Powers Whisper STT, LLaVA Vision, LLaMA/BitNet LLM, and Stable Diffusion from a single 58MB shared core.",
          "la": "Powers Whisper STT, LLaVA Vision, LLaMA/BitNet LLM, and Stable Diffusion from a single 58MB shared core."
        }
      }
    ]
  },
  "bitnet": {
    "subtitles": {
      "en": "ARM64 NEON DotProd SIMD Accelerated 1.58-bit On-Device LLM Inference Engine",
      "ko": "모바일 ARM64 하드웨어를 위한 초고속 1.58비트 양자화 대규모 언어 모델(LLM) 추론 엔진",
      "ja": "ARM64 NEON DotProd SIMD Accelerated 1.58-bit On-Device LLM Inference Engine",
      "zh": "ARM64 NEON DotProd SIMD Accelerated 1.58-bit On-Device LLM Inference Engine",
      "ar": "ARM64 NEON DotProd SIMD Accelerated 1.58-bit On-Device LLM Inference Engine",
      "fr": "ARM64 NEON DotProd SIMD Accelerated 1.58-bit On-Device LLM Inference Engine",
      "de": "ARM64 NEON DotProd SIMD Accelerated 1.58-bit On-Device LLM Inference Engine",
      "es": "ARM64 NEON DotProd SIMD Accelerated 1.58-bit On-Device LLM Inference Engine",
      "hi": "ARM64 NEON DotProd SIMD Accelerated 1.58-bit On-Device LLM Inference Engine",
      "ru": "ARM64 NEON DotProd SIMD Accelerated 1.58-bit On-Device LLM Inference Engine",
      "vi": "ARM64 NEON DotProd SIMD Accelerated 1.58-bit On-Device LLM Inference Engine",
      "pl": "ARM64 NEON DotProd SIMD Accelerated 1.58-bit On-Device LLM Inference Engine",
      "la": "ARM64 NEON DotProd SIMD Accelerated 1.58-bit On-Device LLM Inference Engine"
    },
    "challenge": {
      "en": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "ko": "모바일 CPU 환경에서 표준 FP16/INT4 대규모 언어 모델(LLM)을 실행하면 극심한 메모리 대역폭 병목, 발열 스로틀링, 15W를 초과하는 심각한 배터리 소모가 발생합니다.",
      "ja": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "zh": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "ar": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "fr": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "de": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "es": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "hi": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "ru": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "vi": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "pl": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "la": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W."
    },
    "breakthrough": {
      "en": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "ko": "수작업 최적화된 ARM64 NEON 어셈블리 커널을 통해 1.58비트 3진 양자화 가중치{-1, 0, +1}를 직접 연산하여 행렬 곱셈을 정수 덧셈/뺄셈으로 치환하고 350MB 미만의 메모리 점유율을 달성합니다.",
      "ja": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "zh": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "ar": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "fr": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "de": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "es": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "hi": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "ru": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "vi": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "pl": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "la": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint."
    },
    "features": [
      {
        "title": {
          "en": "1.58-Bit Ternary DotProd Acceleration",
          "ko": "1.58비트 3진 DotProd 가속",
          "ja": "1.58-Bit Ternary DotProd Acceleration",
          "zh": "1.58-Bit Ternary DotProd Acceleration",
          "ar": "1.58-Bit Ternary DotProd Acceleration",
          "fr": "1.58-Bit Ternary DotProd Acceleration",
          "de": "1.58-Bit Ternary DotProd Acceleration",
          "es": "1.58-Bit Ternary DotProd Acceleration",
          "hi": "1.58-Bit Ternary DotProd Acceleration",
          "ru": "1.58-Bit Ternary DotProd Acceleration",
          "vi": "1.58-Bit Ternary DotProd Acceleration",
          "pl": "1.58-Bit Ternary DotProd Acceleration",
          "la": "1.58-Bit Ternary DotProd Acceleration"
        },
        "desc": {
          "en": "Replaces multiplication with integer additions using ARM64 dot-product vector SIMD instructions.",
          "ko": "ARM64 dot-product 벡터 SIMD 명령어를 활용하여 부동소수점 곱셈을 고속 정수 덧셈으로 대체합니다.",
          "ja": "Replaces multiplication with integer additions using ARM64 dot-product vector SIMD instructions.",
          "zh": "Replaces multiplication with integer additions using ARM64 dot-product vector SIMD instructions.",
          "ar": "Replaces multiplication with integer additions using ARM64 dot-product vector SIMD instructions.",
          "fr": "Replaces multiplication with integer additions using ARM64 dot-product vector SIMD instructions.",
          "de": "Replaces multiplication with integer additions using ARM64 dot-product vector SIMD instructions.",
          "es": "Replaces multiplication with integer additions using ARM64 dot-product vector SIMD instructions.",
          "hi": "Replaces multiplication with integer additions using ARM64 dot-product vector SIMD instructions.",
          "ru": "Replaces multiplication with integer additions using ARM64 dot-product vector SIMD instructions.",
          "vi": "Replaces multiplication with integer additions using ARM64 dot-product vector SIMD instructions.",
          "pl": "Replaces multiplication with integer additions using ARM64 dot-product vector SIMD instructions.",
          "la": "Replaces multiplication with integer additions using ARM64 dot-product vector SIMD instructions."
        }
      },
      {
        "title": {
          "en": "Zero-PRoot Native Bionic Execution",
          "ko": "PRoot 없는 네이티브 Bionic 실행",
          "ja": "Zero-PRoot Native Bionic Execution",
          "zh": "Zero-PRoot Native Bionic Execution",
          "ar": "Zero-PRoot Native Bionic Execution",
          "fr": "Zero-PRoot Native Bionic Execution",
          "de": "Zero-PRoot Native Bionic Execution",
          "es": "Zero-PRoot Native Bionic Execution",
          "hi": "Zero-PRoot Native Bionic Execution",
          "ru": "Zero-PRoot Native Bionic Execution",
          "vi": "Zero-PRoot Native Bionic Execution",
          "pl": "Zero-PRoot Native Bionic Execution",
          "la": "Zero-PRoot Native Bionic Execution"
        },
        "desc": {
          "en": "Direct execution on Android Bionic libc without Linux PRoot containers or root privileges.",
          "ko": "리눅스 PRoot 컨테이너나 루팅 권한 없이 Android Bionic libc 위에서 직접 네이티브로 실행됩니다.",
          "ja": "Direct execution on Android Bionic libc without Linux PRoot containers or root privileges.",
          "zh": "Direct execution on Android Bionic libc without Linux PRoot containers or root privileges.",
          "ar": "Direct execution on Android Bionic libc without Linux PRoot containers or root privileges.",
          "fr": "Direct execution on Android Bionic libc without Linux PRoot containers or root privileges.",
          "de": "Direct execution on Android Bionic libc without Linux PRoot containers or root privileges.",
          "es": "Direct execution on Android Bionic libc without Linux PRoot containers or root privileges.",
          "hi": "Direct execution on Android Bionic libc without Linux PRoot containers or root privileges.",
          "ru": "Direct execution on Android Bionic libc without Linux PRoot containers or root privileges.",
          "vi": "Direct execution on Android Bionic libc without Linux PRoot containers or root privileges.",
          "pl": "Direct execution on Android Bionic libc without Linux PRoot containers or root privileges.",
          "la": "Direct execution on Android Bionic libc without Linux PRoot containers or root privileges."
        }
      },
      {
        "title": {
          "en": "Dual-Engine Python & Node.js Gateways",
          "ko": "Python & Node.js 듀얼 엔진 게이트웨이",
          "ja": "Dual-Engine Python & Node.js Gateways",
          "zh": "Dual-Engine Python & Node.js Gateways",
          "ar": "Dual-Engine Python & Node.js Gateways",
          "fr": "Dual-Engine Python & Node.js Gateways",
          "de": "Dual-Engine Python & Node.js Gateways",
          "es": "Dual-Engine Python & Node.js Gateways",
          "hi": "Dual-Engine Python & Node.js Gateways",
          "ru": "Dual-Engine Python & Node.js Gateways",
          "vi": "Dual-Engine Python & Node.js Gateways",
          "pl": "Dual-Engine Python & Node.js Gateways",
          "la": "Dual-Engine Python & Node.js Gateways"
        },
        "desc": {
          "en": "Ultra-low overhead thin FFI bindings for both Python 3.8+ and Node.js 18+ runtimes with independent CLI namespaces.",
          "ko": "독립된 CLI 네임스페이스와 함께 Python 3.8+ 및 Node.js 18+ 런타임 모두를 위한 초경량 FFI 바인딩을 제공합니다.",
          "ja": "Ultra-low overhead thin FFI bindings for both Python 3.8+ and Node.js 18+ runtimes with independent CLI namespaces.",
          "zh": "Ultra-low overhead thin FFI bindings for both Python 3.8+ and Node.js 18+ runtimes with independent CLI namespaces.",
          "ar": "Ultra-low overhead thin FFI bindings for both Python 3.8+ and Node.js 18+ runtimes with independent CLI namespaces.",
          "fr": "Ultra-low overhead thin FFI bindings for both Python 3.8+ and Node.js 18+ runtimes with independent CLI namespaces.",
          "de": "Ultra-low overhead thin FFI bindings for both Python 3.8+ and Node.js 18+ runtimes with independent CLI namespaces.",
          "es": "Ultra-low overhead thin FFI bindings for both Python 3.8+ and Node.js 18+ runtimes with independent CLI namespaces.",
          "hi": "Ultra-low overhead thin FFI bindings for both Python 3.8+ and Node.js 18+ runtimes with independent CLI namespaces.",
          "ru": "Ultra-low overhead thin FFI bindings for both Python 3.8+ and Node.js 18+ runtimes with independent CLI namespaces.",
          "vi": "Ultra-low overhead thin FFI bindings for both Python 3.8+ and Node.js 18+ runtimes with independent CLI namespaces.",
          "pl": "Ultra-low overhead thin FFI bindings for both Python 3.8+ and Node.js 18+ runtimes with independent CLI namespaces.",
          "la": "Ultra-low overhead thin FFI bindings for both Python 3.8+ and Node.js 18+ runtimes with independent CLI namespaces."
        }
      },
      {
        "title": {
          "en": "Energy-Efficient Edge Deployment",
          "ko": "초저전력 에지 배포",
          "ja": "Energy-Efficient Edge Deployment",
          "zh": "Energy-Efficient Edge Deployment",
          "ar": "Energy-Efficient Edge Deployment",
          "fr": "Energy-Efficient Edge Deployment",
          "de": "Energy-Efficient Edge Deployment",
          "es": "Energy-Efficient Edge Deployment",
          "hi": "Energy-Efficient Edge Deployment",
          "ru": "Energy-Efficient Edge Deployment",
          "vi": "Energy-Efficient Edge Deployment",
          "pl": "Energy-Efficient Edge Deployment",
          "la": "Energy-Efficient Edge Deployment"
        },
        "desc": {
          "en": "Consumes under 2.5W during continuous token generation, preventing thermal throttling.",
          "ko": "연속 토큰 생성 시 2.5W 미만의 전력을 소비하여 24시간 무중단 자율 모바일 운영을 실현합니다.",
          "ja": "Consumes under 2.5W during continuous token generation, preventing thermal throttling.",
          "zh": "Consumes under 2.5W during continuous token generation, preventing thermal throttling.",
          "ar": "Consumes under 2.5W during continuous token generation, preventing thermal throttling.",
          "fr": "Consumes under 2.5W during continuous token generation, preventing thermal throttling.",
          "de": "Consumes under 2.5W during continuous token generation, preventing thermal throttling.",
          "es": "Consumes under 2.5W during continuous token generation, preventing thermal throttling.",
          "hi": "Consumes under 2.5W during continuous token generation, preventing thermal throttling.",
          "ru": "Consumes under 2.5W during continuous token generation, preventing thermal throttling.",
          "vi": "Consumes under 2.5W during continuous token generation, preventing thermal throttling.",
          "pl": "Consumes under 2.5W during continuous token generation, preventing thermal throttling.",
          "la": "Consumes under 2.5W during continuous token generation, preventing thermal throttling."
        }
      }
    ]
  },
  "diffusion": {
    "subtitles": {
      "en": "Native On-Device Stable Diffusion Runtime for Android Termux & ARM64",
      "ko": "모바일 안드로이드 온디바이스 Stable Diffusion 이미지 생성 가속 엔진",
      "ja": "Native On-Device Stable Diffusion Runtime for Android Termux & ARM64",
      "zh": "Native On-Device Stable Diffusion Runtime for Android Termux & ARM64",
      "ar": "Native On-Device Stable Diffusion Runtime for Android Termux & ARM64",
      "fr": "Native On-Device Stable Diffusion Runtime for Android Termux & ARM64",
      "de": "Native On-Device Stable Diffusion Runtime for Android Termux & ARM64",
      "es": "Native On-Device Stable Diffusion Runtime for Android Termux & ARM64",
      "hi": "Native On-Device Stable Diffusion Runtime for Android Termux & ARM64",
      "ru": "Native On-Device Stable Diffusion Runtime for Android Termux & ARM64",
      "vi": "Native On-Device Stable Diffusion Runtime for Android Termux & ARM64",
      "pl": "Native On-Device Stable Diffusion Runtime for Android Termux & ARM64",
      "la": "Native On-Device Stable Diffusion Runtime for Android Termux & ARM64"
    },
    "challenge": {
      "en": "Generating AI images on mobile devices typically requires cloud API dependencies or heavy virtualized container layers (PRoot) that quickly exceed RAM limits.",
      "ko": "모바일 장치에서 확산 모델을 실행할 때 수 기가바이트의 VRAM 요구량과 극심한 연산 지연으로 인해 앱 충돌(OOM)이 빈번하게 발생합니다.",
      "ja": "Generating AI images on mobile devices typically requires cloud API dependencies or heavy virtualized container layers (PRoot) that quickly exceed RAM limits.",
      "zh": "Generating AI images on mobile devices typically requires cloud API dependencies or heavy virtualized container layers (PRoot) that quickly exceed RAM limits.",
      "ar": "Generating AI images on mobile devices typically requires cloud API dependencies or heavy virtualized container layers (PRoot) that quickly exceed RAM limits.",
      "fr": "Generating AI images on mobile devices typically requires cloud API dependencies or heavy virtualized container layers (PRoot) that quickly exceed RAM limits.",
      "de": "Generating AI images on mobile devices typically requires cloud API dependencies or heavy virtualized container layers (PRoot) that quickly exceed RAM limits.",
      "es": "Generating AI images on mobile devices typically requires cloud API dependencies or heavy virtualized container layers (PRoot) that quickly exceed RAM limits.",
      "hi": "Generating AI images on mobile devices typically requires cloud API dependencies or heavy virtualized container layers (PRoot) that quickly exceed RAM limits.",
      "ru": "Generating AI images on mobile devices typically requires cloud API dependencies or heavy virtualized container layers (PRoot) that quickly exceed RAM limits.",
      "vi": "Generating AI images on mobile devices typically requires cloud API dependencies or heavy virtualized container layers (PRoot) that quickly exceed RAM limits.",
      "pl": "Generating AI images on mobile devices typically requires cloud API dependencies or heavy virtualized container layers (PRoot) that quickly exceed RAM limits.",
      "la": "Generating AI images on mobile devices typically requires cloud API dependencies or heavy virtualized container layers (PRoot) that quickly exceed RAM limits."
    },
    "breakthrough": {
      "en": "Executes quantized Stable Diffusion models directly on Android Bionic libc with ARMv8.2-A DotProd/FP16 SIMD vector acceleration and direct Samsung Gallery indexing.",
      "ko": "메모리 타일링 최적화 및 Vulkan/NEON 하이브리드 파이프라인을 통해 모바일 RAM 2GB 미만에서 512x512 고품질 이미지를 고속 생성합니다.",
      "ja": "Executes quantized Stable Diffusion models directly on Android Bionic libc with ARMv8.2-A DotProd/FP16 SIMD vector acceleration and direct Samsung Gallery indexing.",
      "zh": "Executes quantized Stable Diffusion models directly on Android Bionic libc with ARMv8.2-A DotProd/FP16 SIMD vector acceleration and direct Samsung Gallery indexing.",
      "ar": "Executes quantized Stable Diffusion models directly on Android Bionic libc with ARMv8.2-A DotProd/FP16 SIMD vector acceleration and direct Samsung Gallery indexing.",
      "fr": "Executes quantized Stable Diffusion models directly on Android Bionic libc with ARMv8.2-A DotProd/FP16 SIMD vector acceleration and direct Samsung Gallery indexing.",
      "de": "Executes quantized Stable Diffusion models directly on Android Bionic libc with ARMv8.2-A DotProd/FP16 SIMD vector acceleration and direct Samsung Gallery indexing.",
      "es": "Executes quantized Stable Diffusion models directly on Android Bionic libc with ARMv8.2-A DotProd/FP16 SIMD vector acceleration and direct Samsung Gallery indexing.",
      "hi": "Executes quantized Stable Diffusion models directly on Android Bionic libc with ARMv8.2-A DotProd/FP16 SIMD vector acceleration and direct Samsung Gallery indexing.",
      "ru": "Executes quantized Stable Diffusion models directly on Android Bionic libc with ARMv8.2-A DotProd/FP16 SIMD vector acceleration and direct Samsung Gallery indexing.",
      "vi": "Executes quantized Stable Diffusion models directly on Android Bionic libc with ARMv8.2-A DotProd/FP16 SIMD vector acceleration and direct Samsung Gallery indexing.",
      "pl": "Executes quantized Stable Diffusion models directly on Android Bionic libc with ARMv8.2-A DotProd/FP16 SIMD vector acceleration and direct Samsung Gallery indexing.",
      "la": "Executes quantized Stable Diffusion models directly on Android Bionic libc with ARMv8.2-A DotProd/FP16 SIMD vector acceleration and direct Samsung Gallery indexing."
    },
    "features": [
      {
        "title": {
          "en": "Zero-PRoot Native ARM64 Bionic",
          "ko": "메모리 타일링 가속",
          "ja": "Zero-PRoot Native ARM64 Bionic",
          "zh": "Zero-PRoot Native ARM64 Bionic",
          "ar": "Zero-PRoot Native ARM64 Bionic",
          "fr": "Zero-PRoot Native ARM64 Bionic",
          "de": "Zero-PRoot Native ARM64 Bionic",
          "es": "Zero-PRoot Native ARM64 Bionic",
          "hi": "Zero-PRoot Native ARM64 Bionic",
          "ru": "Zero-PRoot Native ARM64 Bionic",
          "vi": "Zero-PRoot Native ARM64 Bionic",
          "pl": "Zero-PRoot Native ARM64 Bionic",
          "la": "Zero-PRoot Native ARM64 Bionic"
        },
        "desc": {
          "en": "Executes directly without root permissions, virtual machines, or PRoot Linux overhead.",
          "ko": "타일 기반 분할 렌더링으로 피크 메모리 사용량을 대폭 절감합니다.",
          "ja": "Executes directly without root permissions, virtual machines, or PRoot Linux overhead.",
          "zh": "Executes directly without root permissions, virtual machines, or PRoot Linux overhead.",
          "ar": "Executes directly without root permissions, virtual machines, or PRoot Linux overhead.",
          "fr": "Executes directly without root permissions, virtual machines, or PRoot Linux overhead.",
          "de": "Executes directly without root permissions, virtual machines, or PRoot Linux overhead.",
          "es": "Executes directly without root permissions, virtual machines, or PRoot Linux overhead.",
          "hi": "Executes directly without root permissions, virtual machines, or PRoot Linux overhead.",
          "ru": "Executes directly without root permissions, virtual machines, or PRoot Linux overhead.",
          "vi": "Executes directly without root permissions, virtual machines, or PRoot Linux overhead.",
          "pl": "Executes directly without root permissions, virtual machines, or PRoot Linux overhead.",
          "la": "Executes directly without root permissions, virtual machines, or PRoot Linux overhead."
        }
      },
      {
        "title": {
          "en": "Dual Python & Node.js Engine",
          "ko": "초경량 LoRA 실시간 주입",
          "ja": "Dual Python & Node.js Engine",
          "zh": "Dual Python & Node.js Engine",
          "ar": "Dual Python & Node.js Engine",
          "fr": "Dual Python & Node.js Engine",
          "de": "Dual Python & Node.js Engine",
          "es": "Dual Python & Node.js Engine",
          "hi": "Dual Python & Node.js Engine",
          "ru": "Dual Python & Node.js Engine",
          "vi": "Dual Python & Node.js Engine",
          "pl": "Dual Python & Node.js Engine",
          "la": "Dual Python & Node.js Engine"
        },
        "desc": {
          "en": "Provides comprehensive CLI and programmatic APIs across both Python and JavaScript.",
          "ko": "추가적인 런타임 오버헤드 없이 온더플라이로 LoRA 가중치를 합성합니다.",
          "ja": "Provides comprehensive CLI and programmatic APIs across both Python and JavaScript.",
          "zh": "Provides comprehensive CLI and programmatic APIs across both Python and JavaScript.",
          "ar": "Provides comprehensive CLI and programmatic APIs across both Python and JavaScript.",
          "fr": "Provides comprehensive CLI and programmatic APIs across both Python and JavaScript.",
          "de": "Provides comprehensive CLI and programmatic APIs across both Python and JavaScript.",
          "es": "Provides comprehensive CLI and programmatic APIs across both Python and JavaScript.",
          "hi": "Provides comprehensive CLI and programmatic APIs across both Python and JavaScript.",
          "ru": "Provides comprehensive CLI and programmatic APIs across both Python and JavaScript.",
          "vi": "Provides comprehensive CLI and programmatic APIs across both Python and JavaScript.",
          "pl": "Provides comprehensive CLI and programmatic APIs across both Python and JavaScript.",
          "la": "Provides comprehensive CLI and programmatic APIs across both Python and JavaScript."
        }
      },
      {
        "title": {
          "en": "Samsung Gallery Auto-Indexing",
          "ko": "멀티스레드 스케줄링",
          "ja": "Samsung Gallery Auto-Indexing",
          "zh": "Samsung Gallery Auto-Indexing",
          "ar": "Samsung Gallery Auto-Indexing",
          "fr": "Samsung Gallery Auto-Indexing",
          "de": "Samsung Gallery Auto-Indexing",
          "es": "Samsung Gallery Auto-Indexing",
          "hi": "Samsung Gallery Auto-Indexing",
          "ru": "Samsung Gallery Auto-Indexing",
          "vi": "Samsung Gallery Auto-Indexing",
          "pl": "Samsung Gallery Auto-Indexing",
          "la": "Samsung Gallery Auto-Indexing"
        },
        "desc": {
          "en": "Automatically broadcasts Android MEDIA_SCANNER intents to register generated art in Gallery.",
          "ko": "비동기 파이프라인 큐를 통해 UI 프리징 없는 매끄러운 생성을 보장합니다.",
          "ja": "Automatically broadcasts Android MEDIA_SCANNER intents to register generated art in Gallery.",
          "zh": "Automatically broadcasts Android MEDIA_SCANNER intents to register generated art in Gallery.",
          "ar": "Automatically broadcasts Android MEDIA_SCANNER intents to register generated art in Gallery.",
          "fr": "Automatically broadcasts Android MEDIA_SCANNER intents to register generated art in Gallery.",
          "de": "Automatically broadcasts Android MEDIA_SCANNER intents to register generated art in Gallery.",
          "es": "Automatically broadcasts Android MEDIA_SCANNER intents to register generated art in Gallery.",
          "hi": "Automatically broadcasts Android MEDIA_SCANNER intents to register generated art in Gallery.",
          "ru": "Automatically broadcasts Android MEDIA_SCANNER intents to register generated art in Gallery.",
          "vi": "Automatically broadcasts Android MEDIA_SCANNER intents to register generated art in Gallery.",
          "pl": "Automatically broadcasts Android MEDIA_SCANNER intents to register generated art in Gallery.",
          "la": "Automatically broadcasts Android MEDIA_SCANNER intents to register generated art in Gallery."
        }
      }
    ]
  },
  "playwright": {
    "subtitles": {
      "en": "Non-Root Real Chromium Automation & CDP Engine for Android Termux",
      "ko": "안드로이드 Termux 환경을 위한 경량 헤드리스 브라우저 자동화 프레임워크",
      "ja": "Non-Root Real Chromium Automation & CDP Engine for Android Termux",
      "zh": "Non-Root Real Chromium Automation & CDP Engine for Android Termux",
      "ar": "Non-Root Real Chromium Automation & CDP Engine for Android Termux",
      "fr": "Non-Root Real Chromium Automation & CDP Engine for Android Termux",
      "de": "Non-Root Real Chromium Automation & CDP Engine for Android Termux",
      "es": "Non-Root Real Chromium Automation & CDP Engine for Android Termux",
      "hi": "Non-Root Real Chromium Automation & CDP Engine for Android Termux",
      "ru": "Non-Root Real Chromium Automation & CDP Engine for Android Termux",
      "vi": "Non-Root Real Chromium Automation & CDP Engine for Android Termux",
      "pl": "Non-Root Real Chromium Automation & CDP Engine for Android Termux",
      "la": "Non-Root Real Chromium Automation & CDP Engine for Android Termux"
    },
    "challenge": {
      "en": "Official browser automation drivers fail on Android Termux due to missing X11/Wayland servers and sandboxing constraints.",
      "ko": "모바일 환경에서 무거운 Chromium 브라우저를 실행할 때 발생하는 프로세스 좀비화 및 높은 리소스 낭비.",
      "ja": "Official browser automation drivers fail on Android Termux due to missing X11/Wayland servers and sandboxing constraints.",
      "zh": "Official browser automation drivers fail on Android Termux due to missing X11/Wayland servers and sandboxing constraints.",
      "ar": "Official browser automation drivers fail on Android Termux due to missing X11/Wayland servers and sandboxing constraints.",
      "fr": "Official browser automation drivers fail on Android Termux due to missing X11/Wayland servers and sandboxing constraints.",
      "de": "Official browser automation drivers fail on Android Termux due to missing X11/Wayland servers and sandboxing constraints.",
      "es": "Official browser automation drivers fail on Android Termux due to missing X11/Wayland servers and sandboxing constraints.",
      "hi": "Official browser automation drivers fail on Android Termux due to missing X11/Wayland servers and sandboxing constraints.",
      "ru": "Official browser automation drivers fail on Android Termux due to missing X11/Wayland servers and sandboxing constraints.",
      "vi": "Official browser automation drivers fail on Android Termux due to missing X11/Wayland servers and sandboxing constraints.",
      "pl": "Official browser automation drivers fail on Android Termux due to missing X11/Wayland servers and sandboxing constraints.",
      "la": "Official browser automation drivers fail on Android Termux due to missing X11/Wayland servers and sandboxing constraints."
    },
    "breakthrough": {
      "en": "Controls genuine Chromium processes via direct Chrome DevTools Protocol (CDP) WebSocket sessions on Android Bionic libc without root.",
      "ko": "Phantom Process 자동 감시 데몬과 경량 CDP 프로토콜 바인딩을 통해 충돌 없는 완벽한 브라우저 자동화를 제공합니다.",
      "ja": "Controls genuine Chromium processes via direct Chrome DevTools Protocol (CDP) WebSocket sessions on Android Bionic libc without root.",
      "zh": "Controls genuine Chromium processes via direct Chrome DevTools Protocol (CDP) WebSocket sessions on Android Bionic libc without root.",
      "ar": "Controls genuine Chromium processes via direct Chrome DevTools Protocol (CDP) WebSocket sessions on Android Bionic libc without root.",
      "fr": "Controls genuine Chromium processes via direct Chrome DevTools Protocol (CDP) WebSocket sessions on Android Bionic libc without root.",
      "de": "Controls genuine Chromium processes via direct Chrome DevTools Protocol (CDP) WebSocket sessions on Android Bionic libc without root.",
      "es": "Controls genuine Chromium processes via direct Chrome DevTools Protocol (CDP) WebSocket sessions on Android Bionic libc without root.",
      "hi": "Controls genuine Chromium processes via direct Chrome DevTools Protocol (CDP) WebSocket sessions on Android Bionic libc without root.",
      "ru": "Controls genuine Chromium processes via direct Chrome DevTools Protocol (CDP) WebSocket sessions on Android Bionic libc without root.",
      "vi": "Controls genuine Chromium processes via direct Chrome DevTools Protocol (CDP) WebSocket sessions on Android Bionic libc without root.",
      "pl": "Controls genuine Chromium processes via direct Chrome DevTools Protocol (CDP) WebSocket sessions on Android Bionic libc without root.",
      "la": "Controls genuine Chromium processes via direct Chrome DevTools Protocol (CDP) WebSocket sessions on Android Bionic libc without root."
    },
    "features": [
      {
        "title": {
          "en": "Deterministic 0-Drift Output",
          "ko": "Phantom Process 감시 데몬",
          "ja": "Deterministic 0-Drift Output",
          "zh": "Deterministic 0-Drift Output",
          "ar": "Deterministic 0-Drift Output",
          "fr": "Deterministic 0-Drift Output",
          "de": "Deterministic 0-Drift Output",
          "es": "Deterministic 0-Drift Output",
          "hi": "Deterministic 0-Drift Output",
          "ru": "Deterministic 0-Drift Output",
          "vi": "Deterministic 0-Drift Output",
          "pl": "Deterministic 0-Drift Output",
          "la": "Deterministic 0-Drift Output"
        },
        "desc": {
          "en": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "ko": "고아 프로세스를 0.5초 이내에 자동 감지하고 메모리를 회수합니다.",
          "ja": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "zh": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "ar": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "fr": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "de": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "es": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "hi": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "ru": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "vi": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "pl": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "la": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware."
        }
      },
      {
        "title": {
          "en": "Zero Cloud Egress Architecture",
          "ko": "네이티브 CDP 통신",
          "ja": "Zero Cloud Egress Architecture",
          "zh": "Zero Cloud Egress Architecture",
          "ar": "Zero Cloud Egress Architecture",
          "fr": "Zero Cloud Egress Architecture",
          "de": "Zero Cloud Egress Architecture",
          "es": "Zero Cloud Egress Architecture",
          "hi": "Zero Cloud Egress Architecture",
          "ru": "Zero Cloud Egress Architecture",
          "vi": "Zero Cloud Egress Architecture",
          "pl": "Zero Cloud Egress Architecture",
          "la": "Zero Cloud Egress Architecture"
        },
        "desc": {
          "en": "Operates 100% on the local client without external network telemetry leaks.",
          "ko": "웹소켓 기반의 경량화된 프로토콜로 빠른 명령 전달.",
          "ja": "Operates 100% on the local client without external network telemetry leaks.",
          "zh": "Operates 100% on the local client without external network telemetry leaks.",
          "ar": "Operates 100% on the local client without external network telemetry leaks.",
          "fr": "Operates 100% on the local client without external network telemetry leaks.",
          "de": "Operates 100% on the local client without external network telemetry leaks.",
          "es": "Operates 100% on the local client without external network telemetry leaks.",
          "hi": "Operates 100% on the local client without external network telemetry leaks.",
          "ru": "Operates 100% on the local client without external network telemetry leaks.",
          "vi": "Operates 100% on the local client without external network telemetry leaks.",
          "pl": "Operates 100% on the local client without external network telemetry leaks.",
          "la": "Operates 100% on the local client without external network telemetry leaks."
        }
      },
      {
        "title": {
          "en": "Memory Leakage Protection",
          "ko": "스크린샷 & PDF 캡처",
          "ja": "Memory Leakage Protection",
          "zh": "Memory Leakage Protection",
          "ar": "Memory Leakage Protection",
          "fr": "Memory Leakage Protection",
          "de": "Memory Leakage Protection",
          "es": "Memory Leakage Protection",
          "hi": "Memory Leakage Protection",
          "ru": "Memory Leakage Protection",
          "vi": "Memory Leakage Protection",
          "pl": "Memory Leakage Protection",
          "la": "Memory Leakage Protection"
        },
        "desc": {
          "en": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "ko": "헤드리스 모드에서 완벽한 레이아웃 렌더링 및 캡처 지원.",
          "ja": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "zh": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "ar": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "fr": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "de": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "es": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "hi": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "ru": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "vi": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "pl": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "la": "Weakref lifetime management preventing GPU VRAM / system RAM leaks."
        }
      }
    ]
  },
  "stt": {
    "subtitles": {
      "en": "Unified On-Device Speech-to-Text & Pure Python 128d X-Vector Speaker Diarization",
      "ko": "모바일 온디바이스 실시간 음성 인식 및 트랜스크립션 엔진",
      "ja": "Unified On-Device Speech-to-Text & Pure Python 128d X-Vector Speaker Diarization",
      "zh": "Unified On-Device Speech-to-Text & Pure Python 128d X-Vector Speaker Diarization",
      "ar": "Unified On-Device Speech-to-Text & Pure Python 128d X-Vector Speaker Diarization",
      "fr": "Unified On-Device Speech-to-Text & Pure Python 128d X-Vector Speaker Diarization",
      "de": "Unified On-Device Speech-to-Text & Pure Python 128d X-Vector Speaker Diarization",
      "es": "Unified On-Device Speech-to-Text & Pure Python 128d X-Vector Speaker Diarization",
      "hi": "Unified On-Device Speech-to-Text & Pure Python 128d X-Vector Speaker Diarization",
      "ru": "Unified On-Device Speech-to-Text & Pure Python 128d X-Vector Speaker Diarization",
      "vi": "Unified On-Device Speech-to-Text & Pure Python 128d X-Vector Speaker Diarization",
      "pl": "Unified On-Device Speech-to-Text & Pure Python 128d X-Vector Speaker Diarization",
      "la": "Unified On-Device Speech-to-Text & Pure Python 128d X-Vector Speaker Diarization"
    },
    "challenge": {
      "en": "Transcribing and diarizing multi-speaker conversations on edge devices typically demands heavy PyTorch runtimes (>2GB), external GPU servers, and severe cloud network latency with audio privacy risks.",
      "ko": "실시간 음성 처리 시 높은 지연 시간과 잡음 환경에서의 인식률 저하, 높은 CPU 점유율이 문제가 됩니다.",
      "ja": "Transcribing and diarizing multi-speaker conversations on edge devices typically demands heavy PyTorch runtimes (>2GB), external GPU servers, and severe cloud network latency with audio privacy risks.",
      "zh": "Transcribing and diarizing multi-speaker conversations on edge devices typically demands heavy PyTorch runtimes (>2GB), external GPU servers, and severe cloud network latency with audio privacy risks.",
      "ar": "Transcribing and diarizing multi-speaker conversations on edge devices typically demands heavy PyTorch runtimes (>2GB), external GPU servers, and severe cloud network latency with audio privacy risks.",
      "fr": "Transcribing and diarizing multi-speaker conversations on edge devices typically demands heavy PyTorch runtimes (>2GB), external GPU servers, and severe cloud network latency with audio privacy risks.",
      "de": "Transcribing and diarizing multi-speaker conversations on edge devices typically demands heavy PyTorch runtimes (>2GB), external GPU servers, and severe cloud network latency with audio privacy risks.",
      "es": "Transcribing and diarizing multi-speaker conversations on edge devices typically demands heavy PyTorch runtimes (>2GB), external GPU servers, and severe cloud network latency with audio privacy risks.",
      "hi": "Transcribing and diarizing multi-speaker conversations on edge devices typically demands heavy PyTorch runtimes (>2GB), external GPU servers, and severe cloud network latency with audio privacy risks.",
      "ru": "Transcribing and diarizing multi-speaker conversations on edge devices typically demands heavy PyTorch runtimes (>2GB), external GPU servers, and severe cloud network latency with audio privacy risks.",
      "vi": "Transcribing and diarizing multi-speaker conversations on edge devices typically demands heavy PyTorch runtimes (>2GB), external GPU servers, and severe cloud network latency with audio privacy risks.",
      "pl": "Transcribing and diarizing multi-speaker conversations on edge devices typically demands heavy PyTorch runtimes (>2GB), external GPU servers, and severe cloud network latency with audio privacy risks.",
      "la": "Transcribing and diarizing multi-speaker conversations on edge devices typically demands heavy PyTorch runtimes (>2GB), external GPU servers, and severe cloud network latency with audio privacy risks."
    },
    "breakthrough": {
      "en": "Integrates Whisper.cpp, Vosk, and Sherpa-ONNX with a closed-form pure-Python 128-dimensional X-Vector clustering algorithm that operates in under 80MB RAM with zero cloud egress.",
      "ko": "양자화된 음향 인코더와 하드웨어 가속 빔 서치를 결합하여 실시간 지연 시간 150ms 미만의 고정밀 음성 인식을 지원합니다.",
      "ja": "Integrates Whisper.cpp, Vosk, and Sherpa-ONNX with a closed-form pure-Python 128-dimensional X-Vector clustering algorithm that operates in under 80MB RAM with zero cloud egress.",
      "zh": "Integrates Whisper.cpp, Vosk, and Sherpa-ONNX with a closed-form pure-Python 128-dimensional X-Vector clustering algorithm that operates in under 80MB RAM with zero cloud egress.",
      "ar": "Integrates Whisper.cpp, Vosk, and Sherpa-ONNX with a closed-form pure-Python 128-dimensional X-Vector clustering algorithm that operates in under 80MB RAM with zero cloud egress.",
      "fr": "Integrates Whisper.cpp, Vosk, and Sherpa-ONNX with a closed-form pure-Python 128-dimensional X-Vector clustering algorithm that operates in under 80MB RAM with zero cloud egress.",
      "de": "Integrates Whisper.cpp, Vosk, and Sherpa-ONNX with a closed-form pure-Python 128-dimensional X-Vector clustering algorithm that operates in under 80MB RAM with zero cloud egress.",
      "es": "Integrates Whisper.cpp, Vosk, and Sherpa-ONNX with a closed-form pure-Python 128-dimensional X-Vector clustering algorithm that operates in under 80MB RAM with zero cloud egress.",
      "hi": "Integrates Whisper.cpp, Vosk, and Sherpa-ONNX with a closed-form pure-Python 128-dimensional X-Vector clustering algorithm that operates in under 80MB RAM with zero cloud egress.",
      "ru": "Integrates Whisper.cpp, Vosk, and Sherpa-ONNX with a closed-form pure-Python 128-dimensional X-Vector clustering algorithm that operates in under 80MB RAM with zero cloud egress.",
      "vi": "Integrates Whisper.cpp, Vosk, and Sherpa-ONNX with a closed-form pure-Python 128-dimensional X-Vector clustering algorithm that operates in under 80MB RAM with zero cloud egress.",
      "pl": "Integrates Whisper.cpp, Vosk, and Sherpa-ONNX with a closed-form pure-Python 128-dimensional X-Vector clustering algorithm that operates in under 80MB RAM with zero cloud egress.",
      "la": "Integrates Whisper.cpp, Vosk, and Sherpa-ONNX with a closed-form pure-Python 128-dimensional X-Vector clustering algorithm that operates in under 80MB RAM with zero cloud egress."
    },
    "features": [
      {
        "title": {
          "en": "Triple STT Engine Integration",
          "ko": "초저지연 스트리밍",
          "ja": "Triple STT Engine Integration",
          "zh": "Triple STT Engine Integration",
          "ar": "Triple STT Engine Integration",
          "fr": "Triple STT Engine Integration",
          "de": "Triple STT Engine Integration",
          "es": "Triple STT Engine Integration",
          "hi": "Triple STT Engine Integration",
          "ru": "Triple STT Engine Integration",
          "vi": "Triple STT Engine Integration",
          "pl": "Triple STT Engine Integration",
          "la": "Triple STT Engine Integration"
        },
        "desc": {
          "en": "Seamlessly switches between Whisper.cpp (accuracy), Vosk (latency), and Sherpa-ONNX with a single create_engine() factory.",
          "ko": "청크 단위 실시간 음성 스트리밍 파이프라인 제공.",
          "ja": "Seamlessly switches between Whisper.cpp (accuracy), Vosk (latency), and Sherpa-ONNX with a single create_engine() factory.",
          "zh": "Seamlessly switches between Whisper.cpp (accuracy), Vosk (latency), and Sherpa-ONNX with a single create_engine() factory.",
          "ar": "Seamlessly switches between Whisper.cpp (accuracy), Vosk (latency), and Sherpa-ONNX with a single create_engine() factory.",
          "fr": "Seamlessly switches between Whisper.cpp (accuracy), Vosk (latency), and Sherpa-ONNX with a single create_engine() factory.",
          "de": "Seamlessly switches between Whisper.cpp (accuracy), Vosk (latency), and Sherpa-ONNX with a single create_engine() factory.",
          "es": "Seamlessly switches between Whisper.cpp (accuracy), Vosk (latency), and Sherpa-ONNX with a single create_engine() factory.",
          "hi": "Seamlessly switches between Whisper.cpp (accuracy), Vosk (latency), and Sherpa-ONNX with a single create_engine() factory.",
          "ru": "Seamlessly switches between Whisper.cpp (accuracy), Vosk (latency), and Sherpa-ONNX with a single create_engine() factory.",
          "vi": "Seamlessly switches between Whisper.cpp (accuracy), Vosk (latency), and Sherpa-ONNX with a single create_engine() factory.",
          "pl": "Seamlessly switches between Whisper.cpp (accuracy), Vosk (latency), and Sherpa-ONNX with a single create_engine() factory.",
          "la": "Seamlessly switches between Whisper.cpp (accuracy), Vosk (latency), and Sherpa-ONNX with a single create_engine() factory."
        }
      },
      {
        "title": {
          "en": "Pure Python Speaker Diarization",
          "ko": "다국어 자동 감지",
          "ja": "Pure Python Speaker Diarization",
          "zh": "Pure Python Speaker Diarization",
          "ar": "Pure Python Speaker Diarization",
          "fr": "Pure Python Speaker Diarization",
          "de": "Pure Python Speaker Diarization",
          "es": "Pure Python Speaker Diarization",
          "hi": "Pure Python Speaker Diarization",
          "ru": "Pure Python Speaker Diarization",
          "vi": "Pure Python Speaker Diarization",
          "pl": "Pure Python Speaker Diarization",
          "la": "Pure Python Speaker Diarization"
        },
        "desc": {
          "en": "128-dimensional Vosk X-Vector embeddings combined with closed-form pure Python K-Means clustering without PyTorch or Scikit-Learn.",
          "ko": "90개 이상의 글로벌 언어 자동 식별 및 교차 변환 지원.",
          "ja": "128-dimensional Vosk X-Vector embeddings combined with closed-form pure Python K-Means clustering without PyTorch or Scikit-Learn.",
          "zh": "128-dimensional Vosk X-Vector embeddings combined with closed-form pure Python K-Means clustering without PyTorch or Scikit-Learn.",
          "ar": "128-dimensional Vosk X-Vector embeddings combined with closed-form pure Python K-Means clustering without PyTorch or Scikit-Learn.",
          "fr": "128-dimensional Vosk X-Vector embeddings combined with closed-form pure Python K-Means clustering without PyTorch or Scikit-Learn.",
          "de": "128-dimensional Vosk X-Vector embeddings combined with closed-form pure Python K-Means clustering without PyTorch or Scikit-Learn.",
          "es": "128-dimensional Vosk X-Vector embeddings combined with closed-form pure Python K-Means clustering without PyTorch or Scikit-Learn.",
          "hi": "128-dimensional Vosk X-Vector embeddings combined with closed-form pure Python K-Means clustering without PyTorch or Scikit-Learn.",
          "ru": "128-dimensional Vosk X-Vector embeddings combined with closed-form pure Python K-Means clustering without PyTorch or Scikit-Learn.",
          "vi": "128-dimensional Vosk X-Vector embeddings combined with closed-form pure Python K-Means clustering without PyTorch or Scikit-Learn.",
          "pl": "128-dimensional Vosk X-Vector embeddings combined with closed-form pure Python K-Means clustering without PyTorch or Scikit-Learn.",
          "la": "128-dimensional Vosk X-Vector embeddings combined with closed-form pure Python K-Means clustering without PyTorch or Scikit-Learn."
        }
      },
      {
        "title": {
          "en": "Zero-Subprocess Audio Fastpath",
          "ko": "잡음 억제 필터링",
          "ja": "Zero-Subprocess Audio Fastpath",
          "zh": "Zero-Subprocess Audio Fastpath",
          "ar": "Zero-Subprocess Audio Fastpath",
          "fr": "Zero-Subprocess Audio Fastpath",
          "de": "Zero-Subprocess Audio Fastpath",
          "es": "Zero-Subprocess Audio Fastpath",
          "hi": "Zero-Subprocess Audio Fastpath",
          "ru": "Zero-Subprocess Audio Fastpath",
          "vi": "Zero-Subprocess Audio Fastpath",
          "pl": "Zero-Subprocess Audio Fastpath",
          "la": "Zero-Subprocess Audio Fastpath"
        },
        "desc": {
          "en": "Direct pure-Python wave parser integration for standard 16kHz WAVs, bypassing FFmpeg subprocessing with zero Bionic linker errors.",
          "ko": "온디바이스 스펙트럼 차감 필터를 통한 깨끗한 음성 분리.",
          "ja": "Direct pure-Python wave parser integration for standard 16kHz WAVs, bypassing FFmpeg subprocessing with zero Bionic linker errors.",
          "zh": "Direct pure-Python wave parser integration for standard 16kHz WAVs, bypassing FFmpeg subprocessing with zero Bionic linker errors.",
          "ar": "Direct pure-Python wave parser integration for standard 16kHz WAVs, bypassing FFmpeg subprocessing with zero Bionic linker errors.",
          "fr": "Direct pure-Python wave parser integration for standard 16kHz WAVs, bypassing FFmpeg subprocessing with zero Bionic linker errors.",
          "de": "Direct pure-Python wave parser integration for standard 16kHz WAVs, bypassing FFmpeg subprocessing with zero Bionic linker errors.",
          "es": "Direct pure-Python wave parser integration for standard 16kHz WAVs, bypassing FFmpeg subprocessing with zero Bionic linker errors.",
          "hi": "Direct pure-Python wave parser integration for standard 16kHz WAVs, bypassing FFmpeg subprocessing with zero Bionic linker errors.",
          "ru": "Direct pure-Python wave parser integration for standard 16kHz WAVs, bypassing FFmpeg subprocessing with zero Bionic linker errors.",
          "vi": "Direct pure-Python wave parser integration for standard 16kHz WAVs, bypassing FFmpeg subprocessing with zero Bionic linker errors.",
          "pl": "Direct pure-Python wave parser integration for standard 16kHz WAVs, bypassing FFmpeg subprocessing with zero Bionic linker errors.",
          "la": "Direct pure-Python wave parser integration for standard 16kHz WAVs, bypassing FFmpeg subprocessing with zero Bionic linker errors."
        }
      },
      {
        "title": {
          "en": "Zero Cloud Egress Audio Privacy",
          "ko": "Zero Cloud Egress Audio Privacy",
          "ja": "Zero Cloud Egress Audio Privacy",
          "zh": "Zero Cloud Egress Audio Privacy",
          "ar": "Zero Cloud Egress Audio Privacy",
          "fr": "Zero Cloud Egress Audio Privacy",
          "de": "Zero Cloud Egress Audio Privacy",
          "es": "Zero Cloud Egress Audio Privacy",
          "hi": "Zero Cloud Egress Audio Privacy",
          "ru": "Zero Cloud Egress Audio Privacy",
          "vi": "Zero Cloud Egress Audio Privacy",
          "pl": "Zero Cloud Egress Audio Privacy",
          "la": "Zero Cloud Egress Audio Privacy"
        },
        "desc": {
          "en": "Audio capture, acoustic feature extraction, and text transcription execute strictly on the local CPU without cloud telemetry leaks.",
          "ko": "Audio capture, acoustic feature extraction, and text transcription execute strictly on the local CPU without cloud telemetry leaks.",
          "ja": "Audio capture, acoustic feature extraction, and text transcription execute strictly on the local CPU without cloud telemetry leaks.",
          "zh": "Audio capture, acoustic feature extraction, and text transcription execute strictly on the local CPU without cloud telemetry leaks.",
          "ar": "Audio capture, acoustic feature extraction, and text transcription execute strictly on the local CPU without cloud telemetry leaks.",
          "fr": "Audio capture, acoustic feature extraction, and text transcription execute strictly on the local CPU without cloud telemetry leaks.",
          "de": "Audio capture, acoustic feature extraction, and text transcription execute strictly on the local CPU without cloud telemetry leaks.",
          "es": "Audio capture, acoustic feature extraction, and text transcription execute strictly on the local CPU without cloud telemetry leaks.",
          "hi": "Audio capture, acoustic feature extraction, and text transcription execute strictly on the local CPU without cloud telemetry leaks.",
          "ru": "Audio capture, acoustic feature extraction, and text transcription execute strictly on the local CPU without cloud telemetry leaks.",
          "vi": "Audio capture, acoustic feature extraction, and text transcription execute strictly on the local CPU without cloud telemetry leaks.",
          "pl": "Audio capture, acoustic feature extraction, and text transcription execute strictly on the local CPU without cloud telemetry leaks.",
          "la": "Audio capture, acoustic feature extraction, and text transcription execute strictly on the local CPU without cloud telemetry leaks."
        }
      },
      {
        "title": {
          "en": "Subprocess Crash Isolation",
          "ko": "Subprocess Crash Isolation",
          "ja": "Subprocess Crash Isolation",
          "zh": "Subprocess Crash Isolation",
          "ar": "Subprocess Crash Isolation",
          "fr": "Subprocess Crash Isolation",
          "de": "Subprocess Crash Isolation",
          "es": "Subprocess Crash Isolation",
          "hi": "Subprocess Crash Isolation",
          "ru": "Subprocess Crash Isolation",
          "vi": "Subprocess Crash Isolation",
          "pl": "Subprocess Crash Isolation",
          "la": "Subprocess Crash Isolation"
        },
        "desc": {
          "en": "Isolates native C++ binaries within dedicated process pools, ensuring C++ segfaults never compromise the host Python or Node.js runtime.",
          "ko": "Isolates native C++ binaries within dedicated process pools, ensuring C++ segfaults never compromise the host Python or Node.js runtime.",
          "ja": "Isolates native C++ binaries within dedicated process pools, ensuring C++ segfaults never compromise the host Python or Node.js runtime.",
          "zh": "Isolates native C++ binaries within dedicated process pools, ensuring C++ segfaults never compromise the host Python or Node.js runtime.",
          "ar": "Isolates native C++ binaries within dedicated process pools, ensuring C++ segfaults never compromise the host Python or Node.js runtime.",
          "fr": "Isolates native C++ binaries within dedicated process pools, ensuring C++ segfaults never compromise the host Python or Node.js runtime.",
          "de": "Isolates native C++ binaries within dedicated process pools, ensuring C++ segfaults never compromise the host Python or Node.js runtime.",
          "es": "Isolates native C++ binaries within dedicated process pools, ensuring C++ segfaults never compromise the host Python or Node.js runtime.",
          "hi": "Isolates native C++ binaries within dedicated process pools, ensuring C++ segfaults never compromise the host Python or Node.js runtime.",
          "ru": "Isolates native C++ binaries within dedicated process pools, ensuring C++ segfaults never compromise the host Python or Node.js runtime.",
          "vi": "Isolates native C++ binaries within dedicated process pools, ensuring C++ segfaults never compromise the host Python or Node.js runtime.",
          "pl": "Isolates native C++ binaries within dedicated process pools, ensuring C++ segfaults never compromise the host Python or Node.js runtime.",
          "la": "Isolates native C++ binaries within dedicated process pools, ensuring C++ segfaults never compromise the host Python or Node.js runtime."
        }
      },
      {
        "title": {
          "en": "Mobile Hardware Optimization",
          "ko": "Mobile Hardware Optimization",
          "ja": "Mobile Hardware Optimization",
          "zh": "Mobile Hardware Optimization",
          "ar": "Mobile Hardware Optimization",
          "fr": "Mobile Hardware Optimization",
          "de": "Mobile Hardware Optimization",
          "es": "Mobile Hardware Optimization",
          "hi": "Mobile Hardware Optimization",
          "ru": "Mobile Hardware Optimization",
          "vi": "Mobile Hardware Optimization",
          "pl": "Mobile Hardware Optimization",
          "la": "Mobile Hardware Optimization"
        },
        "desc": {
          "en": "Automatic big.LITTLE core thread pinning, Android WakeLock management, and 1-pass greedy decoding preventing thermal throttling.",
          "ko": "Automatic big.LITTLE core thread pinning, Android WakeLock management, and 1-pass greedy decoding preventing thermal throttling.",
          "ja": "Automatic big.LITTLE core thread pinning, Android WakeLock management, and 1-pass greedy decoding preventing thermal throttling.",
          "zh": "Automatic big.LITTLE core thread pinning, Android WakeLock management, and 1-pass greedy decoding preventing thermal throttling.",
          "ar": "Automatic big.LITTLE core thread pinning, Android WakeLock management, and 1-pass greedy decoding preventing thermal throttling.",
          "fr": "Automatic big.LITTLE core thread pinning, Android WakeLock management, and 1-pass greedy decoding preventing thermal throttling.",
          "de": "Automatic big.LITTLE core thread pinning, Android WakeLock management, and 1-pass greedy decoding preventing thermal throttling.",
          "es": "Automatic big.LITTLE core thread pinning, Android WakeLock management, and 1-pass greedy decoding preventing thermal throttling.",
          "hi": "Automatic big.LITTLE core thread pinning, Android WakeLock management, and 1-pass greedy decoding preventing thermal throttling.",
          "ru": "Automatic big.LITTLE core thread pinning, Android WakeLock management, and 1-pass greedy decoding preventing thermal throttling.",
          "vi": "Automatic big.LITTLE core thread pinning, Android WakeLock management, and 1-pass greedy decoding preventing thermal throttling.",
          "pl": "Automatic big.LITTLE core thread pinning, Android WakeLock management, and 1-pass greedy decoding preventing thermal throttling.",
          "la": "Automatic big.LITTLE core thread pinning, Android WakeLock management, and 1-pass greedy decoding preventing thermal throttling."
        }
      }
    ]
  },
  "tts": {
    "subtitles": {
      "en": "High-Performance Edge & Browser Native Open-Source Systems Library",
      "ko": "모바일 초고음질 신경망 음성 합성 및 오디오 생성 엔진",
      "ja": "High-Performance Edge & Browser Native Open-Source Systems Library",
      "zh": "High-Performance Edge & Browser Native Open-Source Systems Library",
      "ar": "High-Performance Edge & Browser Native Open-Source Systems Library",
      "fr": "High-Performance Edge & Browser Native Open-Source Systems Library",
      "de": "High-Performance Edge & Browser Native Open-Source Systems Library",
      "es": "High-Performance Edge & Browser Native Open-Source Systems Library",
      "hi": "High-Performance Edge & Browser Native Open-Source Systems Library",
      "ru": "High-Performance Edge & Browser Native Open-Source Systems Library",
      "vi": "High-Performance Edge & Browser Native Open-Source Systems Library",
      "pl": "High-Performance Edge & Browser Native Open-Source Systems Library",
      "la": "High-Performance Edge & Browser Native Open-Source Systems Library"
    },
    "challenge": {
      "en": "Standard desktop frameworks fail on constrained edge nodes and browser sandboxes due to syscall restrictions, heavy memory footprints, and severe server-dependency latency.",
      "ko": "모바일 장치에서 자연스러운 음성을 합성할 때 모델 크기가 크고 오디오 버퍼 언더런이 발생하는 한계가 있습니다.",
      "ja": "Standard desktop frameworks fail on constrained edge nodes and browser sandboxes due to syscall restrictions, heavy memory footprints, and severe server-dependency latency.",
      "zh": "Standard desktop frameworks fail on constrained edge nodes and browser sandboxes due to syscall restrictions, heavy memory footprints, and severe server-dependency latency.",
      "ar": "Standard desktop frameworks fail on constrained edge nodes and browser sandboxes due to syscall restrictions, heavy memory footprints, and severe server-dependency latency.",
      "fr": "Standard desktop frameworks fail on constrained edge nodes and browser sandboxes due to syscall restrictions, heavy memory footprints, and severe server-dependency latency.",
      "de": "Standard desktop frameworks fail on constrained edge nodes and browser sandboxes due to syscall restrictions, heavy memory footprints, and severe server-dependency latency.",
      "es": "Standard desktop frameworks fail on constrained edge nodes and browser sandboxes due to syscall restrictions, heavy memory footprints, and severe server-dependency latency.",
      "hi": "Standard desktop frameworks fail on constrained edge nodes and browser sandboxes due to syscall restrictions, heavy memory footprints, and severe server-dependency latency.",
      "ru": "Standard desktop frameworks fail on constrained edge nodes and browser sandboxes due to syscall restrictions, heavy memory footprints, and severe server-dependency latency.",
      "vi": "Standard desktop frameworks fail on constrained edge nodes and browser sandboxes due to syscall restrictions, heavy memory footprints, and severe server-dependency latency.",
      "pl": "Standard desktop frameworks fail on constrained edge nodes and browser sandboxes due to syscall restrictions, heavy memory footprints, and severe server-dependency latency.",
      "la": "Standard desktop frameworks fail on constrained edge nodes and browser sandboxes due to syscall restrictions, heavy memory footprints, and severe server-dependency latency."
    },
    "breakthrough": {
      "en": "Eliminates server roundtrips by compiling low-level kernels directly to WebGPU/Bionic ARM64 with zero-leak buffer pooling and closed-form mathematical precision.",
      "ko": "초경량 보코더 아키텍처와 SIMD 벡터 가속을 적용하여 10MB 미만의 메모리로 실시간 24kHz 고음질 음성을 합성합니다.",
      "ja": "Eliminates server roundtrips by compiling low-level kernels directly to WebGPU/Bionic ARM64 with zero-leak buffer pooling and closed-form mathematical precision.",
      "zh": "Eliminates server roundtrips by compiling low-level kernels directly to WebGPU/Bionic ARM64 with zero-leak buffer pooling and closed-form mathematical precision.",
      "ar": "Eliminates server roundtrips by compiling low-level kernels directly to WebGPU/Bionic ARM64 with zero-leak buffer pooling and closed-form mathematical precision.",
      "fr": "Eliminates server roundtrips by compiling low-level kernels directly to WebGPU/Bionic ARM64 with zero-leak buffer pooling and closed-form mathematical precision.",
      "de": "Eliminates server roundtrips by compiling low-level kernels directly to WebGPU/Bionic ARM64 with zero-leak buffer pooling and closed-form mathematical precision.",
      "es": "Eliminates server roundtrips by compiling low-level kernels directly to WebGPU/Bionic ARM64 with zero-leak buffer pooling and closed-form mathematical precision.",
      "hi": "Eliminates server roundtrips by compiling low-level kernels directly to WebGPU/Bionic ARM64 with zero-leak buffer pooling and closed-form mathematical precision.",
      "ru": "Eliminates server roundtrips by compiling low-level kernels directly to WebGPU/Bionic ARM64 with zero-leak buffer pooling and closed-form mathematical precision.",
      "vi": "Eliminates server roundtrips by compiling low-level kernels directly to WebGPU/Bionic ARM64 with zero-leak buffer pooling and closed-form mathematical precision.",
      "pl": "Eliminates server roundtrips by compiling low-level kernels directly to WebGPU/Bionic ARM64 with zero-leak buffer pooling and closed-form mathematical precision.",
      "la": "Eliminates server roundtrips by compiling low-level kernels directly to WebGPU/Bionic ARM64 with zero-leak buffer pooling and closed-form mathematical precision."
    },
    "features": [
      {
        "title": {
          "en": "",
          "ko": "실시간 음성 합성",
          "ja": "",
          "zh": "",
          "ar": "",
          "fr": "",
          "de": "",
          "es": "",
          "hi": "",
          "ru": "",
          "vi": "",
          "pl": "",
          "la": ""
        },
        "desc": {
          "en": "",
          "ko": "실시간 재생 속도 대비 3배 빠른 초고속 오디오 생성.",
          "ja": "",
          "zh": "",
          "ar": "",
          "fr": "",
          "de": "",
          "es": "",
          "hi": "",
          "ru": "",
          "vi": "",
          "pl": "",
          "la": ""
        }
      },
      {
        "title": {
          "en": "",
          "ko": "다양한 화자 프로필",
          "ja": "",
          "zh": "",
          "ar": "",
          "fr": "",
          "de": "",
          "es": "",
          "hi": "",
          "ru": "",
          "vi": "",
          "pl": "",
          "la": ""
        },
        "desc": {
          "en": "",
          "ko": "다양한 보컬 톤 및 다국어 억양 프리셋 지원.",
          "ja": "",
          "zh": "",
          "ar": "",
          "fr": "",
          "de": "",
          "es": "",
          "hi": "",
          "ru": "",
          "vi": "",
          "pl": "",
          "la": ""
        }
      },
      {
        "title": {
          "en": "",
          "ko": "저전력 오디오 파이프라인",
          "ja": "",
          "zh": "",
          "ar": "",
          "fr": "",
          "de": "",
          "es": "",
          "hi": "",
          "ru": "",
          "vi": "",
          "pl": "",
          "la": ""
        },
        "desc": {
          "en": "",
          "ko": "배터리 소모를 최소화하는 네이티브 오디오 큐 관리.",
          "ja": "",
          "zh": "",
          "ar": "",
          "fr": "",
          "de": "",
          "es": "",
          "hi": "",
          "ru": "",
          "vi": "",
          "pl": "",
          "la": ""
        }
      },
      {
        "title": {
          "en": "",
          "ko": "",
          "ja": "",
          "zh": "",
          "ar": "",
          "fr": "",
          "de": "",
          "es": "",
          "hi": "",
          "ru": "",
          "vi": "",
          "pl": "",
          "la": ""
        },
        "desc": {
          "en": "",
          "ko": "",
          "ja": "",
          "zh": "",
          "ar": "",
          "fr": "",
          "de": "",
          "es": "",
          "hi": "",
          "ru": "",
          "vi": "",
          "pl": "",
          "la": ""
        }
      },
      {
        "title": {
          "en": "",
          "ko": "",
          "ja": "",
          "zh": "",
          "ar": "",
          "fr": "",
          "de": "",
          "es": "",
          "hi": "",
          "ru": "",
          "vi": "",
          "pl": "",
          "la": ""
        },
        "desc": {
          "en": "",
          "ko": "",
          "ja": "",
          "zh": "",
          "ar": "",
          "fr": "",
          "de": "",
          "es": "",
          "hi": "",
          "ru": "",
          "vi": "",
          "pl": "",
          "la": ""
        }
      },
      {
        "title": {
          "en": "",
          "ko": "",
          "ja": "",
          "zh": "",
          "ar": "",
          "fr": "",
          "de": "",
          "es": "",
          "hi": "",
          "ru": "",
          "vi": "",
          "pl": "",
          "la": ""
        },
        "desc": {
          "en": "",
          "ko": "",
          "ja": "",
          "zh": "",
          "ar": "",
          "fr": "",
          "de": "",
          "es": "",
          "hi": "",
          "ru": "",
          "vi": "",
          "pl": "",
          "la": ""
        }
      }
    ]
  },
  "train": {
    "subtitles": {
      "en": "Lightweight On-Device Tensor & DAG Autograd Deep Learning Framework for Android",
      "ko": "모바일 온디바이스 경량 LoRA 및 가중치 파인튜닝 엔진",
      "ja": "Lightweight On-Device Tensor & DAG Autograd Deep Learning Framework for Android",
      "zh": "Lightweight On-Device Tensor & DAG Autograd Deep Learning Framework for Android",
      "ar": "Lightweight On-Device Tensor & DAG Autograd Deep Learning Framework for Android",
      "fr": "Lightweight On-Device Tensor & DAG Autograd Deep Learning Framework for Android",
      "de": "Lightweight On-Device Tensor & DAG Autograd Deep Learning Framework for Android",
      "es": "Lightweight On-Device Tensor & DAG Autograd Deep Learning Framework for Android",
      "hi": "Lightweight On-Device Tensor & DAG Autograd Deep Learning Framework for Android",
      "ru": "Lightweight On-Device Tensor & DAG Autograd Deep Learning Framework for Android",
      "vi": "Lightweight On-Device Tensor & DAG Autograd Deep Learning Framework for Android",
      "pl": "Lightweight On-Device Tensor & DAG Autograd Deep Learning Framework for Android",
      "la": "Lightweight On-Device Tensor & DAG Autograd Deep Learning Framework for Android"
    },
    "challenge": {
      "en": "Standard deep learning frameworks cannot compile cleanly on Android Bionic and exceed smartphone RAM during backpropagation.",
      "ko": "에지 디바이스의 제한된 메모리에서 역전파(Backpropagation) 계산 시 발생하는 OOM 오류.",
      "ja": "Standard deep learning frameworks cannot compile cleanly on Android Bionic and exceed smartphone RAM during backpropagation.",
      "zh": "Standard deep learning frameworks cannot compile cleanly on Android Bionic and exceed smartphone RAM during backpropagation.",
      "ar": "Standard deep learning frameworks cannot compile cleanly on Android Bionic and exceed smartphone RAM during backpropagation.",
      "fr": "Standard deep learning frameworks cannot compile cleanly on Android Bionic and exceed smartphone RAM during backpropagation.",
      "de": "Standard deep learning frameworks cannot compile cleanly on Android Bionic and exceed smartphone RAM during backpropagation.",
      "es": "Standard deep learning frameworks cannot compile cleanly on Android Bionic and exceed smartphone RAM during backpropagation.",
      "hi": "Standard deep learning frameworks cannot compile cleanly on Android Bionic and exceed smartphone RAM during backpropagation.",
      "ru": "Standard deep learning frameworks cannot compile cleanly on Android Bionic and exceed smartphone RAM during backpropagation.",
      "vi": "Standard deep learning frameworks cannot compile cleanly on Android Bionic and exceed smartphone RAM during backpropagation.",
      "pl": "Standard deep learning frameworks cannot compile cleanly on Android Bionic and exceed smartphone RAM during backpropagation.",
      "la": "Standard deep learning frameworks cannot compile cleanly on Android Bionic and exceed smartphone RAM during backpropagation."
    },
    "breakthrough": {
      "en": "Provides a clean C-based DAG computation graph with SafeTensors zero-copy serialization and LoRA adapter fine-tuning on smartphone CPUs.",
      "ko": "그래디언트 체크포인팅과 4비트 양자화 옵티마이저를 결합하여 스마트폰에서 직접 LoRA 파인튜닝을 수행합니다.",
      "ja": "Provides a clean C-based DAG computation graph with SafeTensors zero-copy serialization and LoRA adapter fine-tuning on smartphone CPUs.",
      "zh": "Provides a clean C-based DAG computation graph with SafeTensors zero-copy serialization and LoRA adapter fine-tuning on smartphone CPUs.",
      "ar": "Provides a clean C-based DAG computation graph with SafeTensors zero-copy serialization and LoRA adapter fine-tuning on smartphone CPUs.",
      "fr": "Provides a clean C-based DAG computation graph with SafeTensors zero-copy serialization and LoRA adapter fine-tuning on smartphone CPUs.",
      "de": "Provides a clean C-based DAG computation graph with SafeTensors zero-copy serialization and LoRA adapter fine-tuning on smartphone CPUs.",
      "es": "Provides a clean C-based DAG computation graph with SafeTensors zero-copy serialization and LoRA adapter fine-tuning on smartphone CPUs.",
      "hi": "Provides a clean C-based DAG computation graph with SafeTensors zero-copy serialization and LoRA adapter fine-tuning on smartphone CPUs.",
      "ru": "Provides a clean C-based DAG computation graph with SafeTensors zero-copy serialization and LoRA adapter fine-tuning on smartphone CPUs.",
      "vi": "Provides a clean C-based DAG computation graph with SafeTensors zero-copy serialization and LoRA adapter fine-tuning on smartphone CPUs.",
      "pl": "Provides a clean C-based DAG computation graph with SafeTensors zero-copy serialization and LoRA adapter fine-tuning on smartphone CPUs.",
      "la": "Provides a clean C-based DAG computation graph with SafeTensors zero-copy serialization and LoRA adapter fine-tuning on smartphone CPUs."
    },
    "features": [
      {
        "title": {
          "en": "Deterministic 0-Drift Output",
          "ko": "온디바이스 LoRA 학습",
          "ja": "Deterministic 0-Drift Output",
          "zh": "Deterministic 0-Drift Output",
          "ar": "Deterministic 0-Drift Output",
          "fr": "Deterministic 0-Drift Output",
          "de": "Deterministic 0-Drift Output",
          "es": "Deterministic 0-Drift Output",
          "hi": "Deterministic 0-Drift Output",
          "ru": "Deterministic 0-Drift Output",
          "vi": "Deterministic 0-Drift Output",
          "pl": "Deterministic 0-Drift Output",
          "la": "Deterministic 0-Drift Output"
        },
        "desc": {
          "en": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "ko": "PC나 클라우드 없이 모바일 기기 단독으로 모델 파인튜닝.",
          "ja": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "zh": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "ar": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "fr": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "de": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "es": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "hi": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "ru": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "vi": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "pl": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "la": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware."
        }
      },
      {
        "title": {
          "en": "Zero Cloud Egress Architecture",
          "ko": "메모리 절약형 옵티마이저",
          "ja": "Zero Cloud Egress Architecture",
          "zh": "Zero Cloud Egress Architecture",
          "ar": "Zero Cloud Egress Architecture",
          "fr": "Zero Cloud Egress Architecture",
          "de": "Zero Cloud Egress Architecture",
          "es": "Zero Cloud Egress Architecture",
          "hi": "Zero Cloud Egress Architecture",
          "ru": "Zero Cloud Egress Architecture",
          "vi": "Zero Cloud Egress Architecture",
          "pl": "Zero Cloud Egress Architecture",
          "la": "Zero Cloud Egress Architecture"
        },
        "desc": {
          "en": "Operates 100% on the local client without external network telemetry leaks.",
          "ko": "AdamW 대비 메모리 사용량을 75% 절감하는 정수 옵티마이저 탑재.",
          "ja": "Operates 100% on the local client without external network telemetry leaks.",
          "zh": "Operates 100% on the local client without external network telemetry leaks.",
          "ar": "Operates 100% on the local client without external network telemetry leaks.",
          "fr": "Operates 100% on the local client without external network telemetry leaks.",
          "de": "Operates 100% on the local client without external network telemetry leaks.",
          "es": "Operates 100% on the local client without external network telemetry leaks.",
          "hi": "Operates 100% on the local client without external network telemetry leaks.",
          "ru": "Operates 100% on the local client without external network telemetry leaks.",
          "vi": "Operates 100% on the local client without external network telemetry leaks.",
          "pl": "Operates 100% on the local client without external network telemetry leaks.",
          "la": "Operates 100% on the local client without external network telemetry leaks."
        }
      },
      {
        "title": {
          "en": "Memory Leakage Protection",
          "ko": "체크포인트 자동 복구",
          "ja": "Memory Leakage Protection",
          "zh": "Memory Leakage Protection",
          "ar": "Memory Leakage Protection",
          "fr": "Memory Leakage Protection",
          "de": "Memory Leakage Protection",
          "es": "Memory Leakage Protection",
          "hi": "Memory Leakage Protection",
          "ru": "Memory Leakage Protection",
          "vi": "Memory Leakage Protection",
          "pl": "Memory Leakage Protection",
          "la": "Memory Leakage Protection"
        },
        "desc": {
          "en": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "ko": "학습 중 배터리 방전 시 마지막 상태에서 안전하게 재개.",
          "ja": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "zh": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "ar": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "fr": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "de": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "es": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "hi": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "ru": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "vi": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "pl": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "la": "Weakref lifetime management preventing GPU VRAM / system RAM leaks."
        }
      }
    ]
  },
  "forge": {
    "subtitles": {
      "en": "Browser-Native WebGPU Deep Learning Tensor & Autograd Engine with PyTorch Syntax",
      "ko": "WebGPU 기반 온디바이스 자동 미분 및 딥러닝 텐서 프레임워크",
      "ja": "Browser-Native WebGPU Deep Learning Tensor & Autograd Engine with PyTorch Syntax",
      "zh": "Browser-Native WebGPU Deep Learning Tensor & Autograd Engine with PyTorch Syntax",
      "ar": "Browser-Native WebGPU Deep Learning Tensor & Autograd Engine with PyTorch Syntax",
      "fr": "Browser-Native WebGPU Deep Learning Tensor & Autograd Engine with PyTorch Syntax",
      "de": "Browser-Native WebGPU Deep Learning Tensor & Autograd Engine with PyTorch Syntax",
      "es": "Browser-Native WebGPU Deep Learning Tensor & Autograd Engine with PyTorch Syntax",
      "hi": "Browser-Native WebGPU Deep Learning Tensor & Autograd Engine with PyTorch Syntax",
      "ru": "Browser-Native WebGPU Deep Learning Tensor & Autograd Engine with PyTorch Syntax",
      "vi": "Browser-Native WebGPU Deep Learning Tensor & Autograd Engine with PyTorch Syntax",
      "pl": "Browser-Native WebGPU Deep Learning Tensor & Autograd Engine with PyTorch Syntax",
      "la": "Browser-Native WebGPU Deep Learning Tensor & Autograd Engine with PyTorch Syntax"
    },
    "challenge": {
      "en": "Server-side GPU inferencing costs explode with user scale, while user browser GPUs sit completely idle.",
      "ko": "웹 브라우저 환경에서 고성능 GPU 텐서 연산 및 자동 미분을 효율적으로 구현하는 난제.",
      "ja": "Server-side GPU inferencing costs explode with user scale, while user browser GPUs sit completely idle.",
      "zh": "Server-side GPU inferencing costs explode with user scale, while user browser GPUs sit completely idle.",
      "ar": "Server-side GPU inferencing costs explode with user scale, while user browser GPUs sit completely idle.",
      "fr": "Server-side GPU inferencing costs explode with user scale, while user browser GPUs sit completely idle.",
      "de": "Server-side GPU inferencing costs explode with user scale, while user browser GPUs sit completely idle.",
      "es": "Server-side GPU inferencing costs explode with user scale, while user browser GPUs sit completely idle.",
      "hi": "Server-side GPU inferencing costs explode with user scale, while user browser GPUs sit completely idle.",
      "ru": "Server-side GPU inferencing costs explode with user scale, while user browser GPUs sit completely idle.",
      "vi": "Server-side GPU inferencing costs explode with user scale, while user browser GPUs sit completely idle.",
      "pl": "Server-side GPU inferencing costs explode with user scale, while user browser GPUs sit completely idle.",
      "la": "Server-side GPU inferencing costs explode with user scale, while user browser GPUs sit completely idle."
    },
    "breakthrough": {
      "en": "Compiles autograd graphs directly to WGSL WebGPU shaders, executing entirely on client GPU with zero server egress.",
      "ko": "순수 WebGPU 셰이더 기반 동적 연산 그래프와 자동 미분 엔진으로 네이티브 수준의 학습 및 추론 속도를 달성합니다.",
      "ja": "Compiles autograd graphs directly to WGSL WebGPU shaders, executing entirely on client GPU with zero server egress.",
      "zh": "Compiles autograd graphs directly to WGSL WebGPU shaders, executing entirely on client GPU with zero server egress.",
      "ar": "Compiles autograd graphs directly to WGSL WebGPU shaders, executing entirely on client GPU with zero server egress.",
      "fr": "Compiles autograd graphs directly to WGSL WebGPU shaders, executing entirely on client GPU with zero server egress.",
      "de": "Compiles autograd graphs directly to WGSL WebGPU shaders, executing entirely on client GPU with zero server egress.",
      "es": "Compiles autograd graphs directly to WGSL WebGPU shaders, executing entirely on client GPU with zero server egress.",
      "hi": "Compiles autograd graphs directly to WGSL WebGPU shaders, executing entirely on client GPU with zero server egress.",
      "ru": "Compiles autograd graphs directly to WGSL WebGPU shaders, executing entirely on client GPU with zero server egress.",
      "vi": "Compiles autograd graphs directly to WGSL WebGPU shaders, executing entirely on client GPU with zero server egress.",
      "pl": "Compiles autograd graphs directly to WGSL WebGPU shaders, executing entirely on client GPU with zero server egress.",
      "la": "Compiles autograd graphs directly to WGSL WebGPU shaders, executing entirely on client GPU with zero server egress."
    },
    "features": [
      {
        "title": {
          "en": "Deterministic 0-Drift Output",
          "ko": "동적 오토그라드 엔진",
          "ja": "Deterministic 0-Drift Output",
          "zh": "Deterministic 0-Drift Output",
          "ar": "Deterministic 0-Drift Output",
          "fr": "Deterministic 0-Drift Output",
          "de": "Deterministic 0-Drift Output",
          "es": "Deterministic 0-Drift Output",
          "hi": "Deterministic 0-Drift Output",
          "ru": "Deterministic 0-Drift Output",
          "vi": "Deterministic 0-Drift Output",
          "pl": "Deterministic 0-Drift Output",
          "la": "Deterministic 0-Drift Output"
        },
        "desc": {
          "en": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "ko": "PyTorch 스타일의 직관적인 테이프 기반 역전파 계산.",
          "ja": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "zh": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "ar": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "fr": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "de": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "es": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "hi": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "ru": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "vi": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "pl": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "la": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware."
        }
      },
      {
        "title": {
          "en": "Zero Cloud Egress Architecture",
          "ko": "WebGPU 셰이더 커널",
          "ja": "Zero Cloud Egress Architecture",
          "zh": "Zero Cloud Egress Architecture",
          "ar": "Zero Cloud Egress Architecture",
          "fr": "Zero Cloud Egress Architecture",
          "de": "Zero Cloud Egress Architecture",
          "es": "Zero Cloud Egress Architecture",
          "hi": "Zero Cloud Egress Architecture",
          "ru": "Zero Cloud Egress Architecture",
          "vi": "Zero Cloud Egress Architecture",
          "pl": "Zero Cloud Egress Architecture",
          "la": "Zero Cloud Egress Architecture"
        },
        "desc": {
          "en": "Operates 100% on the local client without external network telemetry leaks.",
          "ko": "고도로 최적화된 WGSL 행렬 곱셈 및 컨볼루션 연산.",
          "ja": "Operates 100% on the local client without external network telemetry leaks.",
          "zh": "Operates 100% on the local client without external network telemetry leaks.",
          "ar": "Operates 100% on the local client without external network telemetry leaks.",
          "fr": "Operates 100% on the local client without external network telemetry leaks.",
          "de": "Operates 100% on the local client without external network telemetry leaks.",
          "es": "Operates 100% on the local client without external network telemetry leaks.",
          "hi": "Operates 100% on the local client without external network telemetry leaks.",
          "ru": "Operates 100% on the local client without external network telemetry leaks.",
          "vi": "Operates 100% on the local client without external network telemetry leaks.",
          "pl": "Operates 100% on the local client without external network telemetry leaks.",
          "la": "Operates 100% on the local client without external network telemetry leaks."
        }
      },
      {
        "title": {
          "en": "Memory Leakage Protection",
          "ko": "플랫폼 독립성",
          "ja": "Memory Leakage Protection",
          "zh": "Memory Leakage Protection",
          "ar": "Memory Leakage Protection",
          "fr": "Memory Leakage Protection",
          "de": "Memory Leakage Protection",
          "es": "Memory Leakage Protection",
          "hi": "Memory Leakage Protection",
          "ru": "Memory Leakage Protection",
          "vi": "Memory Leakage Protection",
          "pl": "Memory Leakage Protection",
          "la": "Memory Leakage Protection"
        },
        "desc": {
          "en": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "ko": "추가 설치 없이 최신 웹 브라우저에서 즉각 실행.",
          "ja": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "zh": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "ar": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "fr": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "de": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "es": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "hi": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "ru": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "vi": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "pl": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "la": "Weakref lifetime management preventing GPU VRAM / system RAM leaks."
        }
      }
    ]
  },
  "infra-index": {
    "subtitles": {
      "en": "Global 69-Cloud GPU/CPU/Storage Real-Time Price Index & AI Semiconductor Market Intelligence Platform",
      "ko": "분산 고성능 인덱싱 및 메트릭 집계 플랫폼",
      "ja": "Global 69-Cloud GPU/CPU/Storage Real-Time Price Index & AI Semiconductor Market Intelligence Platform",
      "zh": "Global 69-Cloud GPU/CPU/Storage Real-Time Price Index & AI Semiconductor Market Intelligence Platform",
      "ar": "Global 69-Cloud GPU/CPU/Storage Real-Time Price Index & AI Semiconductor Market Intelligence Platform",
      "fr": "Global 69-Cloud GPU/CPU/Storage Real-Time Price Index & AI Semiconductor Market Intelligence Platform",
      "de": "Global 69-Cloud GPU/CPU/Storage Real-Time Price Index & AI Semiconductor Market Intelligence Platform",
      "es": "Global 69-Cloud GPU/CPU/Storage Real-Time Price Index & AI Semiconductor Market Intelligence Platform",
      "hi": "Global 69-Cloud GPU/CPU/Storage Real-Time Price Index & AI Semiconductor Market Intelligence Platform",
      "ru": "Global 69-Cloud GPU/CPU/Storage Real-Time Price Index & AI Semiconductor Market Intelligence Platform",
      "vi": "Global 69-Cloud GPU/CPU/Storage Real-Time Price Index & AI Semiconductor Market Intelligence Platform",
      "pl": "Global 69-Cloud GPU/CPU/Storage Real-Time Price Index & AI Semiconductor Market Intelligence Platform",
      "la": "Global 69-Cloud GPU/CPU/Storage Real-Time Price Index & AI Semiconductor Market Intelligence Platform"
    },
    "challenge": {
      "en": "",
      "ko": "대규모 분산 노드에서 발생하는 메트릭 및 로그 데이터의 실시간 수집 및 검색 지연.",
      "ja": "",
      "zh": "",
      "ar": "",
      "fr": "",
      "de": "",
      "es": "",
      "hi": "",
      "ru": "",
      "vi": "",
      "pl": "",
      "la": ""
    },
    "breakthrough": {
      "en": "",
      "ko": "LSM 트리 기반의 초고속 스토리지 엔진과 분산 쿼리 라우팅으로 나노초 단위 인덱싱을 지원합니다.",
      "ja": "",
      "zh": "",
      "ar": "",
      "fr": "",
      "de": "",
      "es": "",
      "hi": "",
      "ru": "",
      "vi": "",
      "pl": "",
      "la": ""
    },
    "features": [
      {
        "title": {
          "en": "4-Tier Upstash Redis Fallback",
          "ko": "나노초 단위 인덱싱",
          "ja": "4-Tier Upstash Redis Fallback",
          "zh": "4-Tier Upstash Redis Fallback",
          "ar": "4-Tier Upstash Redis Fallback",
          "fr": "4-Tier Upstash Redis Fallback",
          "de": "4-Tier Upstash Redis Fallback",
          "es": "4-Tier Upstash Redis Fallback",
          "hi": "4-Tier Upstash Redis Fallback",
          "ru": "4-Tier Upstash Redis Fallback",
          "vi": "4-Tier Upstash Redis Fallback",
          "pl": "4-Tier Upstash Redis Fallback",
          "la": "4-Tier Upstash Redis Fallback"
        },
        "desc": {
          "en": "Ensures 100% cache hit reliability by gracefully cascading through environment-prefixed keys (infraindex:prod:→infraindex:dev:→ root envelope keys) before touching disk.",
          "ko": "LSM 기반 인메모리 버퍼와 비동기 컴팩션 엔진.",
          "ja": "Ensures 100% cache hit reliability by gracefully cascading through environment-prefixed keys (infraindex:prod:→infraindex:dev:→ root envelope keys) before touching disk.",
          "zh": "Ensures 100% cache hit reliability by gracefully cascading through environment-prefixed keys (infraindex:prod:→infraindex:dev:→ root envelope keys) before touching disk.",
          "ar": "Ensures 100% cache hit reliability by gracefully cascading through environment-prefixed keys (infraindex:prod:→infraindex:dev:→ root envelope keys) before touching disk.",
          "fr": "Ensures 100% cache hit reliability by gracefully cascading through environment-prefixed keys (infraindex:prod:→infraindex:dev:→ root envelope keys) before touching disk.",
          "de": "Ensures 100% cache hit reliability by gracefully cascading through environment-prefixed keys (infraindex:prod:→infraindex:dev:→ root envelope keys) before touching disk.",
          "es": "Ensures 100% cache hit reliability by gracefully cascading through environment-prefixed keys (infraindex:prod:→infraindex:dev:→ root envelope keys) before touching disk.",
          "hi": "Ensures 100% cache hit reliability by gracefully cascading through environment-prefixed keys (infraindex:prod:→infraindex:dev:→ root envelope keys) before touching disk.",
          "ru": "Ensures 100% cache hit reliability by gracefully cascading through environment-prefixed keys (infraindex:prod:→infraindex:dev:→ root envelope keys) before touching disk.",
          "vi": "Ensures 100% cache hit reliability by gracefully cascading through environment-prefixed keys (infraindex:prod:→infraindex:dev:→ root envelope keys) before touching disk.",
          "pl": "Ensures 100% cache hit reliability by gracefully cascading through environment-prefixed keys (infraindex:prod:→infraindex:dev:→ root envelope keys) before touching disk.",
          "la": "Ensures 100% cache hit reliability by gracefully cascading through environment-prefixed keys (infraindex:prod:→infraindex:dev:→ root envelope keys) before touching disk."
        }
      },
      {
        "title": {
          "en": "Neon Composite B-Tree Indexing",
          "ko": "분산 쿼리 라우팅",
          "ja": "Neon Composite B-Tree Indexing",
          "zh": "Neon Composite B-Tree Indexing",
          "ar": "Neon Composite B-Tree Indexing",
          "fr": "Neon Composite B-Tree Indexing",
          "de": "Neon Composite B-Tree Indexing",
          "es": "Neon Composite B-Tree Indexing",
          "hi": "Neon Composite B-Tree Indexing",
          "ru": "Neon Composite B-Tree Indexing",
          "vi": "Neon Composite B-Tree Indexing",
          "pl": "Neon Composite B-Tree Indexing",
          "la": "Neon Composite B-Tree Indexing"
        },
        "desc": {
          "en": "Accelerates complex time-series queries over 32,000+ historical price records from 15.4 seconds down to 800 milliseconds during cold cache invalidation.",
          "ko": "클러스터 전반에 걸친 지능형 파티셔닝 및 쿼리 분산.",
          "ja": "Accelerates complex time-series queries over 32,000+ historical price records from 15.4 seconds down to 800 milliseconds during cold cache invalidation.",
          "zh": "Accelerates complex time-series queries over 32,000+ historical price records from 15.4 seconds down to 800 milliseconds during cold cache invalidation.",
          "ar": "Accelerates complex time-series queries over 32,000+ historical price records from 15.4 seconds down to 800 milliseconds during cold cache invalidation.",
          "fr": "Accelerates complex time-series queries over 32,000+ historical price records from 15.4 seconds down to 800 milliseconds during cold cache invalidation.",
          "de": "Accelerates complex time-series queries over 32,000+ historical price records from 15.4 seconds down to 800 milliseconds during cold cache invalidation.",
          "es": "Accelerates complex time-series queries over 32,000+ historical price records from 15.4 seconds down to 800 milliseconds during cold cache invalidation.",
          "hi": "Accelerates complex time-series queries over 32,000+ historical price records from 15.4 seconds down to 800 milliseconds during cold cache invalidation.",
          "ru": "Accelerates complex time-series queries over 32,000+ historical price records from 15.4 seconds down to 800 milliseconds during cold cache invalidation.",
          "vi": "Accelerates complex time-series queries over 32,000+ historical price records from 15.4 seconds down to 800 milliseconds during cold cache invalidation.",
          "pl": "Accelerates complex time-series queries over 32,000+ historical price records from 15.4 seconds down to 800 milliseconds during cold cache invalidation.",
          "la": "Accelerates complex time-series queries over 32,000+ historical price records from 15.4 seconds down to 800 milliseconds during cold cache invalidation."
        }
      },
      {
        "title": {
          "en": "Dual-Tier Crawler Isolation",
          "ko": "실시간 텔레메트리 대시보드",
          "ja": "Dual-Tier Crawler Isolation",
          "zh": "Dual-Tier Crawler Isolation",
          "ar": "Dual-Tier Crawler Isolation",
          "fr": "Dual-Tier Crawler Isolation",
          "de": "Dual-Tier Crawler Isolation",
          "es": "Dual-Tier Crawler Isolation",
          "hi": "Dual-Tier Crawler Isolation",
          "ru": "Dual-Tier Crawler Isolation",
          "vi": "Dual-Tier Crawler Isolation",
          "pl": "Dual-Tier Crawler Isolation",
          "la": "Dual-Tier Crawler Isolation"
        },
        "desc": {
          "en": "Isolates development testing from production data integrity through dedicated CLI run configurations (run_dev_crawl.ps1vsrun_prd_crawl.ps1).",
          "ko": "생태계 전반의 상태를 한눈에 파악하는 고성능 모니터링.",
          "ja": "Isolates development testing from production data integrity through dedicated CLI run configurations (run_dev_crawl.ps1vsrun_prd_crawl.ps1).",
          "zh": "Isolates development testing from production data integrity through dedicated CLI run configurations (run_dev_crawl.ps1vsrun_prd_crawl.ps1).",
          "ar": "Isolates development testing from production data integrity through dedicated CLI run configurations (run_dev_crawl.ps1vsrun_prd_crawl.ps1).",
          "fr": "Isolates development testing from production data integrity through dedicated CLI run configurations (run_dev_crawl.ps1vsrun_prd_crawl.ps1).",
          "de": "Isolates development testing from production data integrity through dedicated CLI run configurations (run_dev_crawl.ps1vsrun_prd_crawl.ps1).",
          "es": "Isolates development testing from production data integrity through dedicated CLI run configurations (run_dev_crawl.ps1vsrun_prd_crawl.ps1).",
          "hi": "Isolates development testing from production data integrity through dedicated CLI run configurations (run_dev_crawl.ps1vsrun_prd_crawl.ps1).",
          "ru": "Isolates development testing from production data integrity through dedicated CLI run configurations (run_dev_crawl.ps1vsrun_prd_crawl.ps1).",
          "vi": "Isolates development testing from production data integrity through dedicated CLI run configurations (run_dev_crawl.ps1vsrun_prd_crawl.ps1).",
          "pl": "Isolates development testing from production data integrity through dedicated CLI run configurations (run_dev_crawl.ps1vsrun_prd_crawl.ps1).",
          "la": "Isolates development testing from production data integrity through dedicated CLI run configurations (run_dev_crawl.ps1vsrun_prd_crawl.ps1)."
        }
      }
    ]
  },
  "llamacpp": {
    "subtitles": {
      "en": "Production-Grade Prebuilt GGUF LLM Runtime, Model Manager & OpenAI Server for Android ARM64",
      "ko": "ARM64 NEON 하드웨어에 최적화된 GGUF LLM 런타임",
      "ja": "Production-Grade Prebuilt GGUF LLM Runtime, Model Manager & OpenAI Server for Android ARM64",
      "zh": "Production-Grade Prebuilt GGUF LLM Runtime, Model Manager & OpenAI Server for Android ARM64",
      "ar": "Production-Grade Prebuilt GGUF LLM Runtime, Model Manager & OpenAI Server for Android ARM64",
      "fr": "Production-Grade Prebuilt GGUF LLM Runtime, Model Manager & OpenAI Server for Android ARM64",
      "de": "Production-Grade Prebuilt GGUF LLM Runtime, Model Manager & OpenAI Server for Android ARM64",
      "es": "Production-Grade Prebuilt GGUF LLM Runtime, Model Manager & OpenAI Server for Android ARM64",
      "hi": "Production-Grade Prebuilt GGUF LLM Runtime, Model Manager & OpenAI Server for Android ARM64",
      "ru": "Production-Grade Prebuilt GGUF LLM Runtime, Model Manager & OpenAI Server for Android ARM64",
      "vi": "Production-Grade Prebuilt GGUF LLM Runtime, Model Manager & OpenAI Server for Android ARM64",
      "pl": "Production-Grade Prebuilt GGUF LLM Runtime, Model Manager & OpenAI Server for Android ARM64",
      "la": "Production-Grade Prebuilt GGUF LLM Runtime, Model Manager & OpenAI Server for Android ARM64"
    },
    "challenge": {
      "en": "Running local LLMs on mobile Android typically requires multi-gigabyte compiler toolchains (Clang, CMake, Ninja), 20+ minute compilation times, fragile Bionic linker dependencies, and severe memory thrashing under default mmap allocations.",
      "ko": "다양한 오픈소스 LLM 아키텍처 지원 시 발생하는 바이너리 크기 증가 및 아키텍처별 최적화 난제.",
      "ja": "Running local LLMs on mobile Android typically requires multi-gigabyte compiler toolchains (Clang, CMake, Ninja), 20+ minute compilation times, fragile Bionic linker dependencies, and severe memory thrashing under default mmap allocations.",
      "zh": "Running local LLMs on mobile Android typically requires multi-gigabyte compiler toolchains (Clang, CMake, Ninja), 20+ minute compilation times, fragile Bionic linker dependencies, and severe memory thrashing under default mmap allocations.",
      "ar": "Running local LLMs on mobile Android typically requires multi-gigabyte compiler toolchains (Clang, CMake, Ninja), 20+ minute compilation times, fragile Bionic linker dependencies, and severe memory thrashing under default mmap allocations.",
      "fr": "Running local LLMs on mobile Android typically requires multi-gigabyte compiler toolchains (Clang, CMake, Ninja), 20+ minute compilation times, fragile Bionic linker dependencies, and severe memory thrashing under default mmap allocations.",
      "de": "Running local LLMs on mobile Android typically requires multi-gigabyte compiler toolchains (Clang, CMake, Ninja), 20+ minute compilation times, fragile Bionic linker dependencies, and severe memory thrashing under default mmap allocations.",
      "es": "Running local LLMs on mobile Android typically requires multi-gigabyte compiler toolchains (Clang, CMake, Ninja), 20+ minute compilation times, fragile Bionic linker dependencies, and severe memory thrashing under default mmap allocations.",
      "hi": "Running local LLMs on mobile Android typically requires multi-gigabyte compiler toolchains (Clang, CMake, Ninja), 20+ minute compilation times, fragile Bionic linker dependencies, and severe memory thrashing under default mmap allocations.",
      "ru": "Running local LLMs on mobile Android typically requires multi-gigabyte compiler toolchains (Clang, CMake, Ninja), 20+ minute compilation times, fragile Bionic linker dependencies, and severe memory thrashing under default mmap allocations.",
      "vi": "Running local LLMs on mobile Android typically requires multi-gigabyte compiler toolchains (Clang, CMake, Ninja), 20+ minute compilation times, fragile Bionic linker dependencies, and severe memory thrashing under default mmap allocations.",
      "pl": "Running local LLMs on mobile Android typically requires multi-gigabyte compiler toolchains (Clang, CMake, Ninja), 20+ minute compilation times, fragile Bionic linker dependencies, and severe memory thrashing under default mmap allocations.",
      "la": "Running local LLMs on mobile Android typically requires multi-gigabyte compiler toolchains (Clang, CMake, Ninja), 20+ minute compilation times, fragile Bionic linker dependencies, and severe memory thrashing under default mmap allocations."
    },
    "breakthrough": {
      "en": "Ships verified, cryptographically signed Android ARM64 native binaries with bundled shared libraries and unified Vulkan HAL acceleration, enabling instant zero-compilation local inference and a robust OpenAI-compatible REST/SSE supervisor in under 3 seconds.",
      "ko": "최적화된 GGUF 파서와 ARM64 NEON FP16/INT8 백엔드를 통해 광범위한 오픈소스 LLM을 최고 효율로 구동합니다.",
      "ja": "Ships verified, cryptographically signed Android ARM64 native binaries with bundled shared libraries and unified Vulkan HAL acceleration, enabling instant zero-compilation local inference and a robust OpenAI-compatible REST/SSE supervisor in under 3 seconds.",
      "zh": "Ships verified, cryptographically signed Android ARM64 native binaries with bundled shared libraries and unified Vulkan HAL acceleration, enabling instant zero-compilation local inference and a robust OpenAI-compatible REST/SSE supervisor in under 3 seconds.",
      "ar": "Ships verified, cryptographically signed Android ARM64 native binaries with bundled shared libraries and unified Vulkan HAL acceleration, enabling instant zero-compilation local inference and a robust OpenAI-compatible REST/SSE supervisor in under 3 seconds.",
      "fr": "Ships verified, cryptographically signed Android ARM64 native binaries with bundled shared libraries and unified Vulkan HAL acceleration, enabling instant zero-compilation local inference and a robust OpenAI-compatible REST/SSE supervisor in under 3 seconds.",
      "de": "Ships verified, cryptographically signed Android ARM64 native binaries with bundled shared libraries and unified Vulkan HAL acceleration, enabling instant zero-compilation local inference and a robust OpenAI-compatible REST/SSE supervisor in under 3 seconds.",
      "es": "Ships verified, cryptographically signed Android ARM64 native binaries with bundled shared libraries and unified Vulkan HAL acceleration, enabling instant zero-compilation local inference and a robust OpenAI-compatible REST/SSE supervisor in under 3 seconds.",
      "hi": "Ships verified, cryptographically signed Android ARM64 native binaries with bundled shared libraries and unified Vulkan HAL acceleration, enabling instant zero-compilation local inference and a robust OpenAI-compatible REST/SSE supervisor in under 3 seconds.",
      "ru": "Ships verified, cryptographically signed Android ARM64 native binaries with bundled shared libraries and unified Vulkan HAL acceleration, enabling instant zero-compilation local inference and a robust OpenAI-compatible REST/SSE supervisor in under 3 seconds.",
      "vi": "Ships verified, cryptographically signed Android ARM64 native binaries with bundled shared libraries and unified Vulkan HAL acceleration, enabling instant zero-compilation local inference and a robust OpenAI-compatible REST/SSE supervisor in under 3 seconds.",
      "pl": "Ships verified, cryptographically signed Android ARM64 native binaries with bundled shared libraries and unified Vulkan HAL acceleration, enabling instant zero-compilation local inference and a robust OpenAI-compatible REST/SSE supervisor in under 3 seconds.",
      "la": "Ships verified, cryptographically signed Android ARM64 native binaries with bundled shared libraries and unified Vulkan HAL acceleration, enabling instant zero-compilation local inference and a robust OpenAI-compatible REST/SSE supervisor in under 3 seconds."
    },
    "features": [
      {
        "title": {
          "en": "Zero-Compilation Instant Deployment",
          "ko": "광범위한 모델 호환성",
          "ja": "Zero-Compilation Instant Deployment",
          "zh": "Zero-Compilation Instant Deployment",
          "ar": "Zero-Compilation Instant Deployment",
          "fr": "Zero-Compilation Instant Deployment",
          "de": "Zero-Compilation Instant Deployment",
          "es": "Zero-Compilation Instant Deployment",
          "hi": "Zero-Compilation Instant Deployment",
          "ru": "Zero-Compilation Instant Deployment",
          "vi": "Zero-Compilation Instant Deployment",
          "pl": "Zero-Compilation Instant Deployment",
          "la": "Zero-Compilation Instant Deployment"
        },
        "desc": {
          "en": "Installs verified Android Bionic ARM64 binaries and bundled shared libraries via cryptographic SHA-256 checks in under 3 seconds without local Clang/CMake.",
          "ko": "LLaMA, Mistral, Qwen, Gemma 등 주요 모델 100% 호환.",
          "ja": "Installs verified Android Bionic ARM64 binaries and bundled shared libraries via cryptographic SHA-256 checks in under 3 seconds without local Clang/CMake.",
          "zh": "Installs verified Android Bionic ARM64 binaries and bundled shared libraries via cryptographic SHA-256 checks in under 3 seconds without local Clang/CMake.",
          "ar": "Installs verified Android Bionic ARM64 binaries and bundled shared libraries via cryptographic SHA-256 checks in under 3 seconds without local Clang/CMake.",
          "fr": "Installs verified Android Bionic ARM64 binaries and bundled shared libraries via cryptographic SHA-256 checks in under 3 seconds without local Clang/CMake.",
          "de": "Installs verified Android Bionic ARM64 binaries and bundled shared libraries via cryptographic SHA-256 checks in under 3 seconds without local Clang/CMake.",
          "es": "Installs verified Android Bionic ARM64 binaries and bundled shared libraries via cryptographic SHA-256 checks in under 3 seconds without local Clang/CMake.",
          "hi": "Installs verified Android Bionic ARM64 binaries and bundled shared libraries via cryptographic SHA-256 checks in under 3 seconds without local Clang/CMake.",
          "ru": "Installs verified Android Bionic ARM64 binaries and bundled shared libraries via cryptographic SHA-256 checks in under 3 seconds without local Clang/CMake.",
          "vi": "Installs verified Android Bionic ARM64 binaries and bundled shared libraries via cryptographic SHA-256 checks in under 3 seconds without local Clang/CMake.",
          "pl": "Installs verified Android Bionic ARM64 binaries and bundled shared libraries via cryptographic SHA-256 checks in under 3 seconds without local Clang/CMake.",
          "la": "Installs verified Android Bionic ARM64 binaries and bundled shared libraries via cryptographic SHA-256 checks in under 3 seconds without local Clang/CMake."
        }
      },
      {
        "title": {
          "en": "Unified Vulkan HAL & Big-Core Tuning",
          "ko": "동적 컨텍스트 시프트",
          "ja": "Unified Vulkan HAL & Big-Core Tuning",
          "zh": "Unified Vulkan HAL & Big-Core Tuning",
          "ar": "Unified Vulkan HAL & Big-Core Tuning",
          "fr": "Unified Vulkan HAL & Big-Core Tuning",
          "de": "Unified Vulkan HAL & Big-Core Tuning",
          "es": "Unified Vulkan HAL & Big-Core Tuning",
          "hi": "Unified Vulkan HAL & Big-Core Tuning",
          "ru": "Unified Vulkan HAL & Big-Core Tuning",
          "vi": "Unified Vulkan HAL & Big-Core Tuning",
          "pl": "Unified Vulkan HAL & Big-Core Tuning",
          "la": "Unified Vulkan HAL & Big-Core Tuning"
        },
        "desc": {
          "en": "Deep integration with ameva-vulkan-runtime v1.1.0 supporting GPU shader acceleration and automated octa-core big.LITTLE cluster thread pinning (-t 4).",
          "ko": "컨텍스트 윈도우 초과 시 스마트 롤링 캐시 관리.",
          "ja": "Deep integration with ameva-vulkan-runtime v1.1.0 supporting GPU shader acceleration and automated octa-core big.LITTLE cluster thread pinning (-t 4).",
          "zh": "Deep integration with ameva-vulkan-runtime v1.1.0 supporting GPU shader acceleration and automated octa-core big.LITTLE cluster thread pinning (-t 4).",
          "ar": "Deep integration with ameva-vulkan-runtime v1.1.0 supporting GPU shader acceleration and automated octa-core big.LITTLE cluster thread pinning (-t 4).",
          "fr": "Deep integration with ameva-vulkan-runtime v1.1.0 supporting GPU shader acceleration and automated octa-core big.LITTLE cluster thread pinning (-t 4).",
          "de": "Deep integration with ameva-vulkan-runtime v1.1.0 supporting GPU shader acceleration and automated octa-core big.LITTLE cluster thread pinning (-t 4).",
          "es": "Deep integration with ameva-vulkan-runtime v1.1.0 supporting GPU shader acceleration and automated octa-core big.LITTLE cluster thread pinning (-t 4).",
          "hi": "Deep integration with ameva-vulkan-runtime v1.1.0 supporting GPU shader acceleration and automated octa-core big.LITTLE cluster thread pinning (-t 4).",
          "ru": "Deep integration with ameva-vulkan-runtime v1.1.0 supporting GPU shader acceleration and automated octa-core big.LITTLE cluster thread pinning (-t 4).",
          "vi": "Deep integration with ameva-vulkan-runtime v1.1.0 supporting GPU shader acceleration and automated octa-core big.LITTLE cluster thread pinning (-t 4).",
          "pl": "Deep integration with ameva-vulkan-runtime v1.1.0 supporting GPU shader acceleration and automated octa-core big.LITTLE cluster thread pinning (-t 4).",
          "la": "Deep integration with ameva-vulkan-runtime v1.1.0 supporting GPU shader acceleration and automated octa-core big.LITTLE cluster thread pinning (-t 4)."
        }
      },
      {
        "title": {
          "en": "Strict 3-Tier Execution Mode",
          "ko": "멀티스레드 최적화",
          "ja": "Strict 3-Tier Execution Mode",
          "zh": "Strict 3-Tier Execution Mode",
          "ar": "Strict 3-Tier Execution Mode",
          "fr": "Strict 3-Tier Execution Mode",
          "de": "Strict 3-Tier Execution Mode",
          "es": "Strict 3-Tier Execution Mode",
          "hi": "Strict 3-Tier Execution Mode",
          "ru": "Strict 3-Tier Execution Mode",
          "vi": "Strict 3-Tier Execution Mode",
          "pl": "Strict 3-Tier Execution Mode",
          "la": "Strict 3-Tier Execution Mode"
        },
        "desc": {
          "en": "Supports --device vulkan (Fail-Fast GPU compute), --device auto (transparent CPU NEON recovery), and --device cpu (zero-overhead direct forward pass).",
          "ko": "빅리틀(Big-LITTLE) 코어 아키텍처에 맞춘 동적 스레드 밸런싱.",
          "ja": "Supports --device vulkan (Fail-Fast GPU compute), --device auto (transparent CPU NEON recovery), and --device cpu (zero-overhead direct forward pass).",
          "zh": "Supports --device vulkan (Fail-Fast GPU compute), --device auto (transparent CPU NEON recovery), and --device cpu (zero-overhead direct forward pass).",
          "ar": "Supports --device vulkan (Fail-Fast GPU compute), --device auto (transparent CPU NEON recovery), and --device cpu (zero-overhead direct forward pass).",
          "fr": "Supports --device vulkan (Fail-Fast GPU compute), --device auto (transparent CPU NEON recovery), and --device cpu (zero-overhead direct forward pass).",
          "de": "Supports --device vulkan (Fail-Fast GPU compute), --device auto (transparent CPU NEON recovery), and --device cpu (zero-overhead direct forward pass).",
          "es": "Supports --device vulkan (Fail-Fast GPU compute), --device auto (transparent CPU NEON recovery), and --device cpu (zero-overhead direct forward pass).",
          "hi": "Supports --device vulkan (Fail-Fast GPU compute), --device auto (transparent CPU NEON recovery), and --device cpu (zero-overhead direct forward pass).",
          "ru": "Supports --device vulkan (Fail-Fast GPU compute), --device auto (transparent CPU NEON recovery), and --device cpu (zero-overhead direct forward pass).",
          "vi": "Supports --device vulkan (Fail-Fast GPU compute), --device auto (transparent CPU NEON recovery), and --device cpu (zero-overhead direct forward pass).",
          "pl": "Supports --device vulkan (Fail-Fast GPU compute), --device auto (transparent CPU NEON recovery), and --device cpu (zero-overhead direct forward pass).",
          "la": "Supports --device vulkan (Fail-Fast GPU compute), --device auto (transparent CPU NEON recovery), and --device cpu (zero-overhead direct forward pass)."
        }
      },
      {
        "title": {
          "en": "OpenAI REST & SSE Streaming Supervisor",
          "ko": "OpenAI REST & SSE Streaming Supervisor",
          "ja": "OpenAI REST & SSE Streaming Supervisor",
          "zh": "OpenAI REST & SSE Streaming Supervisor",
          "ar": "OpenAI REST & SSE Streaming Supervisor",
          "fr": "OpenAI REST & SSE Streaming Supervisor",
          "de": "OpenAI REST & SSE Streaming Supervisor",
          "es": "OpenAI REST & SSE Streaming Supervisor",
          "hi": "OpenAI REST & SSE Streaming Supervisor",
          "ru": "OpenAI REST & SSE Streaming Supervisor",
          "vi": "OpenAI REST & SSE Streaming Supervisor",
          "pl": "OpenAI REST & SSE Streaming Supervisor",
          "la": "OpenAI REST & SSE Streaming Supervisor"
        },
        "desc": {
          "en": "Built-in reverse proxy supervisor exposing /health, /v1/models, and /v1/chat/completions with real-time SSE streaming and loopback CORS isolation.",
          "ko": "Built-in reverse proxy supervisor exposing /health, /v1/models, and /v1/chat/completions with real-time SSE streaming and loopback CORS isolation.",
          "ja": "Built-in reverse proxy supervisor exposing /health, /v1/models, and /v1/chat/completions with real-time SSE streaming and loopback CORS isolation.",
          "zh": "Built-in reverse proxy supervisor exposing /health, /v1/models, and /v1/chat/completions with real-time SSE streaming and loopback CORS isolation.",
          "ar": "Built-in reverse proxy supervisor exposing /health, /v1/models, and /v1/chat/completions with real-time SSE streaming and loopback CORS isolation.",
          "fr": "Built-in reverse proxy supervisor exposing /health, /v1/models, and /v1/chat/completions with real-time SSE streaming and loopback CORS isolation.",
          "de": "Built-in reverse proxy supervisor exposing /health, /v1/models, and /v1/chat/completions with real-time SSE streaming and loopback CORS isolation.",
          "es": "Built-in reverse proxy supervisor exposing /health, /v1/models, and /v1/chat/completions with real-time SSE streaming and loopback CORS isolation.",
          "hi": "Built-in reverse proxy supervisor exposing /health, /v1/models, and /v1/chat/completions with real-time SSE streaming and loopback CORS isolation.",
          "ru": "Built-in reverse proxy supervisor exposing /health, /v1/models, and /v1/chat/completions with real-time SSE streaming and loopback CORS isolation.",
          "vi": "Built-in reverse proxy supervisor exposing /health, /v1/models, and /v1/chat/completions with real-time SSE streaming and loopback CORS isolation.",
          "pl": "Built-in reverse proxy supervisor exposing /health, /v1/models, and /v1/chat/completions with real-time SSE streaming and loopback CORS isolation.",
          "la": "Built-in reverse proxy supervisor exposing /health, /v1/models, and /v1/chat/completions with real-time SSE streaming and loopback CORS isolation."
        }
      },
      {
        "title": {
          "en": "Automated Process Lifecycle & Cleanup",
          "ko": "Automated Process Lifecycle & Cleanup",
          "ja": "Automated Process Lifecycle & Cleanup",
          "zh": "Automated Process Lifecycle & Cleanup",
          "ar": "Automated Process Lifecycle & Cleanup",
          "fr": "Automated Process Lifecycle & Cleanup",
          "de": "Automated Process Lifecycle & Cleanup",
          "es": "Automated Process Lifecycle & Cleanup",
          "hi": "Automated Process Lifecycle & Cleanup",
          "ru": "Automated Process Lifecycle & Cleanup",
          "vi": "Automated Process Lifecycle & Cleanup",
          "pl": "Automated Process Lifecycle & Cleanup",
          "la": "Automated Process Lifecycle & Cleanup"
        },
        "desc": {
          "en": "Guarantees 100% process termination on shutdown or error, with bounded health check polling and zero leftover orphaned daemon processes.",
          "ko": "Guarantees 100% process termination on shutdown or error, with bounded health check polling and zero leftover orphaned daemon processes.",
          "ja": "Guarantees 100% process termination on shutdown or error, with bounded health check polling and zero leftover orphaned daemon processes.",
          "zh": "Guarantees 100% process termination on shutdown or error, with bounded health check polling and zero leftover orphaned daemon processes.",
          "ar": "Guarantees 100% process termination on shutdown or error, with bounded health check polling and zero leftover orphaned daemon processes.",
          "fr": "Guarantees 100% process termination on shutdown or error, with bounded health check polling and zero leftover orphaned daemon processes.",
          "de": "Guarantees 100% process termination on shutdown or error, with bounded health check polling and zero leftover orphaned daemon processes.",
          "es": "Guarantees 100% process termination on shutdown or error, with bounded health check polling and zero leftover orphaned daemon processes.",
          "hi": "Guarantees 100% process termination on shutdown or error, with bounded health check polling and zero leftover orphaned daemon processes.",
          "ru": "Guarantees 100% process termination on shutdown or error, with bounded health check polling and zero leftover orphaned daemon processes.",
          "vi": "Guarantees 100% process termination on shutdown or error, with bounded health check polling and zero leftover orphaned daemon processes.",
          "pl": "Guarantees 100% process termination on shutdown or error, with bounded health check polling and zero leftover orphaned daemon processes.",
          "la": "Guarantees 100% process termination on shutdown or error, with bounded health check polling and zero leftover orphaned daemon processes."
        }
      },
      {
        "title": {
          "en": "Supply-Chain Cryptographic Integrity",
          "ko": "Supply-Chain Cryptographic Integrity",
          "ja": "Supply-Chain Cryptographic Integrity",
          "zh": "Supply-Chain Cryptographic Integrity",
          "ar": "Supply-Chain Cryptographic Integrity",
          "fr": "Supply-Chain Cryptographic Integrity",
          "de": "Supply-Chain Cryptographic Integrity",
          "es": "Supply-Chain Cryptographic Integrity",
          "hi": "Supply-Chain Cryptographic Integrity",
          "ru": "Supply-Chain Cryptographic Integrity",
          "vi": "Supply-Chain Cryptographic Integrity",
          "pl": "Supply-Chain Cryptographic Integrity",
          "la": "Supply-Chain Cryptographic Integrity"
        },
        "desc": {
          "en": "Enforces Ed25519 signed manifests, anti-downgrade policies, symlink traversal blocking, and local build receipts.",
          "ko": "Enforces Ed25519 signed manifests, anti-downgrade policies, symlink traversal blocking, and local build receipts.",
          "ja": "Enforces Ed25519 signed manifests, anti-downgrade policies, symlink traversal blocking, and local build receipts.",
          "zh": "Enforces Ed25519 signed manifests, anti-downgrade policies, symlink traversal blocking, and local build receipts.",
          "ar": "Enforces Ed25519 signed manifests, anti-downgrade policies, symlink traversal blocking, and local build receipts.",
          "fr": "Enforces Ed25519 signed manifests, anti-downgrade policies, symlink traversal blocking, and local build receipts.",
          "de": "Enforces Ed25519 signed manifests, anti-downgrade policies, symlink traversal blocking, and local build receipts.",
          "es": "Enforces Ed25519 signed manifests, anti-downgrade policies, symlink traversal blocking, and local build receipts.",
          "hi": "Enforces Ed25519 signed manifests, anti-downgrade policies, symlink traversal blocking, and local build receipts.",
          "ru": "Enforces Ed25519 signed manifests, anti-downgrade policies, symlink traversal blocking, and local build receipts.",
          "vi": "Enforces Ed25519 signed manifests, anti-downgrade policies, symlink traversal blocking, and local build receipts.",
          "pl": "Enforces Ed25519 signed manifests, anti-downgrade policies, symlink traversal blocking, and local build receipts.",
          "la": "Enforces Ed25519 signed manifests, anti-downgrade policies, symlink traversal blocking, and local build receipts."
        }
      }
    ]
  },
  "vision": {
    "subtitles": {
      "en": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine for Android Termux",
      "ko": "온디바이스 고성능 컴퓨터 비전 및 비전-언어(VLM) 추론 엔진",
      "ja": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine for Android Termux",
      "zh": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine for Android Termux",
      "ar": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine for Android Termux",
      "fr": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine for Android Termux",
      "de": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine for Android Termux",
      "es": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine for Android Termux",
      "hi": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine for Android Termux",
      "ru": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine for Android Termux",
      "vi": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine for Android Termux",
      "pl": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine for Android Termux",
      "la": "Zero-Dependency On-Device Computer Vision & Multimodal VLM Inference Engine for Android Termux"
    },
    "challenge": {
      "en": "Standard vision frameworks (OpenCV, TorchVision) suffer from massive binary sizes (>150MB), complex C++ compilation bottlenecks on ARM64 Termux, and lack seamless mobile VLM multimodal pipelines.",
      "ko": "고해상도 이미지 처리 시 텐서 크기 폭증과 비전 인코더 연산 지연.",
      "ja": "Standard vision frameworks (OpenCV, TorchVision) suffer from massive binary sizes (>150MB), complex C++ compilation bottlenecks on ARM64 Termux, and lack seamless mobile VLM multimodal pipelines.",
      "zh": "Standard vision frameworks (OpenCV, TorchVision) suffer from massive binary sizes (>150MB), complex C++ compilation bottlenecks on ARM64 Termux, and lack seamless mobile VLM multimodal pipelines.",
      "ar": "Standard vision frameworks (OpenCV, TorchVision) suffer from massive binary sizes (>150MB), complex C++ compilation bottlenecks on ARM64 Termux, and lack seamless mobile VLM multimodal pipelines.",
      "fr": "Standard vision frameworks (OpenCV, TorchVision) suffer from massive binary sizes (>150MB), complex C++ compilation bottlenecks on ARM64 Termux, and lack seamless mobile VLM multimodal pipelines.",
      "de": "Standard vision frameworks (OpenCV, TorchVision) suffer from massive binary sizes (>150MB), complex C++ compilation bottlenecks on ARM64 Termux, and lack seamless mobile VLM multimodal pipelines.",
      "es": "Standard vision frameworks (OpenCV, TorchVision) suffer from massive binary sizes (>150MB), complex C++ compilation bottlenecks on ARM64 Termux, and lack seamless mobile VLM multimodal pipelines.",
      "hi": "Standard vision frameworks (OpenCV, TorchVision) suffer from massive binary sizes (>150MB), complex C++ compilation bottlenecks on ARM64 Termux, and lack seamless mobile VLM multimodal pipelines.",
      "ru": "Standard vision frameworks (OpenCV, TorchVision) suffer from massive binary sizes (>150MB), complex C++ compilation bottlenecks on ARM64 Termux, and lack seamless mobile VLM multimodal pipelines.",
      "vi": "Standard vision frameworks (OpenCV, TorchVision) suffer from massive binary sizes (>150MB), complex C++ compilation bottlenecks on ARM64 Termux, and lack seamless mobile VLM multimodal pipelines.",
      "pl": "Standard vision frameworks (OpenCV, TorchVision) suffer from massive binary sizes (>150MB), complex C++ compilation bottlenecks on ARM64 Termux, and lack seamless mobile VLM multimodal pipelines.",
      "la": "Standard vision frameworks (OpenCV, TorchVision) suffer from massive binary sizes (>150MB), complex C++ compilation bottlenecks on ARM64 Termux, and lack seamless mobile VLM multimodal pipelines."
    },
    "breakthrough": {
      "en": "Provides pure Python/JS 5-stage Canny Edge, Sobel 3x3, Gaussian Blur, 2D Integral Images, Haar Cascade Face Detection, and on-device SmolVLM/Qwen2-VL Multimodal Vision-Language inference with Vulkan GPU acceleration and automatic CPU fallback under 500MB RAM.",
      "ko": "Vulkan 및 NEON 하이브리드 비전 파이프라인을 구축하여 실시간 객체 검출 및 이미지 캡셔닝을 지원합니다.",
      "ja": "Provides pure Python/JS 5-stage Canny Edge, Sobel 3x3, Gaussian Blur, 2D Integral Images, Haar Cascade Face Detection, and on-device SmolVLM/Qwen2-VL Multimodal Vision-Language inference with Vulkan GPU acceleration and automatic CPU fallback under 500MB RAM.",
      "zh": "Provides pure Python/JS 5-stage Canny Edge, Sobel 3x3, Gaussian Blur, 2D Integral Images, Haar Cascade Face Detection, and on-device SmolVLM/Qwen2-VL Multimodal Vision-Language inference with Vulkan GPU acceleration and automatic CPU fallback under 500MB RAM.",
      "ar": "Provides pure Python/JS 5-stage Canny Edge, Sobel 3x3, Gaussian Blur, 2D Integral Images, Haar Cascade Face Detection, and on-device SmolVLM/Qwen2-VL Multimodal Vision-Language inference with Vulkan GPU acceleration and automatic CPU fallback under 500MB RAM.",
      "fr": "Provides pure Python/JS 5-stage Canny Edge, Sobel 3x3, Gaussian Blur, 2D Integral Images, Haar Cascade Face Detection, and on-device SmolVLM/Qwen2-VL Multimodal Vision-Language inference with Vulkan GPU acceleration and automatic CPU fallback under 500MB RAM.",
      "de": "Provides pure Python/JS 5-stage Canny Edge, Sobel 3x3, Gaussian Blur, 2D Integral Images, Haar Cascade Face Detection, and on-device SmolVLM/Qwen2-VL Multimodal Vision-Language inference with Vulkan GPU acceleration and automatic CPU fallback under 500MB RAM.",
      "es": "Provides pure Python/JS 5-stage Canny Edge, Sobel 3x3, Gaussian Blur, 2D Integral Images, Haar Cascade Face Detection, and on-device SmolVLM/Qwen2-VL Multimodal Vision-Language inference with Vulkan GPU acceleration and automatic CPU fallback under 500MB RAM.",
      "hi": "Provides pure Python/JS 5-stage Canny Edge, Sobel 3x3, Gaussian Blur, 2D Integral Images, Haar Cascade Face Detection, and on-device SmolVLM/Qwen2-VL Multimodal Vision-Language inference with Vulkan GPU acceleration and automatic CPU fallback under 500MB RAM.",
      "ru": "Provides pure Python/JS 5-stage Canny Edge, Sobel 3x3, Gaussian Blur, 2D Integral Images, Haar Cascade Face Detection, and on-device SmolVLM/Qwen2-VL Multimodal Vision-Language inference with Vulkan GPU acceleration and automatic CPU fallback under 500MB RAM.",
      "vi": "Provides pure Python/JS 5-stage Canny Edge, Sobel 3x3, Gaussian Blur, 2D Integral Images, Haar Cascade Face Detection, and on-device SmolVLM/Qwen2-VL Multimodal Vision-Language inference with Vulkan GPU acceleration and automatic CPU fallback under 500MB RAM.",
      "pl": "Provides pure Python/JS 5-stage Canny Edge, Sobel 3x3, Gaussian Blur, 2D Integral Images, Haar Cascade Face Detection, and on-device SmolVLM/Qwen2-VL Multimodal Vision-Language inference with Vulkan GPU acceleration and automatic CPU fallback under 500MB RAM.",
      "la": "Provides pure Python/JS 5-stage Canny Edge, Sobel 3x3, Gaussian Blur, 2D Integral Images, Haar Cascade Face Detection, and on-device SmolVLM/Qwen2-VL Multimodal Vision-Language inference with Vulkan GPU acceleration and automatic CPU fallback under 500MB RAM."
    },
    "features": [
      {
        "title": {
          "en": "Zero-Heavy C++ Dependency",
          "ko": "실시간 객체 검출",
          "ja": "Zero-Heavy C++ Dependency",
          "zh": "Zero-Heavy C++ Dependency",
          "ar": "Zero-Heavy C++ Dependency",
          "fr": "Zero-Heavy C++ Dependency",
          "de": "Zero-Heavy C++ Dependency",
          "es": "Zero-Heavy C++ Dependency",
          "hi": "Zero-Heavy C++ Dependency",
          "ru": "Zero-Heavy C++ Dependency",
          "vi": "Zero-Heavy C++ Dependency",
          "pl": "Zero-Heavy C++ Dependency",
          "la": "Zero-Heavy C++ Dependency"
        },
        "desc": {
          "en": "Runs out-of-the-box on vanilla Termux Python (pip) and Node.js (npm) without complex OpenCV or node-gyp builds.",
          "ko": "YOLO 및 모바일 비전 모델 고속 추론 지원.",
          "ja": "Runs out-of-the-box on vanilla Termux Python (pip) and Node.js (npm) without complex OpenCV or node-gyp builds.",
          "zh": "Runs out-of-the-box on vanilla Termux Python (pip) and Node.js (npm) without complex OpenCV or node-gyp builds.",
          "ar": "Runs out-of-the-box on vanilla Termux Python (pip) and Node.js (npm) without complex OpenCV or node-gyp builds.",
          "fr": "Runs out-of-the-box on vanilla Termux Python (pip) and Node.js (npm) without complex OpenCV or node-gyp builds.",
          "de": "Runs out-of-the-box on vanilla Termux Python (pip) and Node.js (npm) without complex OpenCV or node-gyp builds.",
          "es": "Runs out-of-the-box on vanilla Termux Python (pip) and Node.js (npm) without complex OpenCV or node-gyp builds.",
          "hi": "Runs out-of-the-box on vanilla Termux Python (pip) and Node.js (npm) without complex OpenCV or node-gyp builds.",
          "ru": "Runs out-of-the-box on vanilla Termux Python (pip) and Node.js (npm) without complex OpenCV or node-gyp builds.",
          "vi": "Runs out-of-the-box on vanilla Termux Python (pip) and Node.js (npm) without complex OpenCV or node-gyp builds.",
          "pl": "Runs out-of-the-box on vanilla Termux Python (pip) and Node.js (npm) without complex OpenCV or node-gyp builds.",
          "la": "Runs out-of-the-box on vanilla Termux Python (pip) and Node.js (npm) without complex OpenCV or node-gyp builds."
        }
      },
      {
        "title": {
          "en": "Multimodal VLM Inference Engine",
          "ko": "멀티모달 VLM 추론",
          "ja": "Multimodal VLM Inference Engine",
          "zh": "Multimodal VLM Inference Engine",
          "ar": "Multimodal VLM Inference Engine",
          "fr": "Multimodal VLM Inference Engine",
          "de": "Multimodal VLM Inference Engine",
          "es": "Multimodal VLM Inference Engine",
          "hi": "Multimodal VLM Inference Engine",
          "ru": "Multimodal VLM Inference Engine",
          "vi": "Multimodal VLM Inference Engine",
          "pl": "Multimodal VLM Inference Engine",
          "la": "Multimodal VLM Inference Engine"
        },
        "desc": {
          "en": "Natively supports SmolVLM-500M and Qwen2-VL-2B models with truthful visual question answering and image description.",
          "ko": "LLaVA 및 SmolVLM 기반의 온디바이스 시각 질의응답.",
          "ja": "Natively supports SmolVLM-500M and Qwen2-VL-2B models with truthful visual question answering and image description.",
          "zh": "Natively supports SmolVLM-500M and Qwen2-VL-2B models with truthful visual question answering and image description.",
          "ar": "Natively supports SmolVLM-500M and Qwen2-VL-2B models with truthful visual question answering and image description.",
          "fr": "Natively supports SmolVLM-500M and Qwen2-VL-2B models with truthful visual question answering and image description.",
          "de": "Natively supports SmolVLM-500M and Qwen2-VL-2B models with truthful visual question answering and image description.",
          "es": "Natively supports SmolVLM-500M and Qwen2-VL-2B models with truthful visual question answering and image description.",
          "hi": "Natively supports SmolVLM-500M and Qwen2-VL-2B models with truthful visual question answering and image description.",
          "ru": "Natively supports SmolVLM-500M and Qwen2-VL-2B models with truthful visual question answering and image description.",
          "vi": "Natively supports SmolVLM-500M and Qwen2-VL-2B models with truthful visual question answering and image description.",
          "pl": "Natively supports SmolVLM-500M and Qwen2-VL-2B models with truthful visual question answering and image description.",
          "la": "Natively supports SmolVLM-500M and Qwen2-VL-2B models with truthful visual question answering and image description."
        }
      },
      {
        "title": {
          "en": "Vulkan GPU Acceleration & CPU Fallback",
          "ko": "제로 카피 이미지 로더",
          "ja": "Vulkan GPU Acceleration & CPU Fallback",
          "zh": "Vulkan GPU Acceleration & CPU Fallback",
          "ar": "Vulkan GPU Acceleration & CPU Fallback",
          "fr": "Vulkan GPU Acceleration & CPU Fallback",
          "de": "Vulkan GPU Acceleration & CPU Fallback",
          "es": "Vulkan GPU Acceleration & CPU Fallback",
          "hi": "Vulkan GPU Acceleration & CPU Fallback",
          "ru": "Vulkan GPU Acceleration & CPU Fallback",
          "vi": "Vulkan GPU Acceleration & CPU Fallback",
          "pl": "Vulkan GPU Acceleration & CPU Fallback",
          "la": "Vulkan GPU Acceleration & CPU Fallback"
        },
        "desc": {
          "en": "Auto-detects Vulkan GPU acceleration with graceful CPU retry on driver faults, or strict isolated GPU enforcement.",
          "ko": "하드웨어 프레임버퍼에서 직접 텐서로 매핑.",
          "ja": "Auto-detects Vulkan GPU acceleration with graceful CPU retry on driver faults, or strict isolated GPU enforcement.",
          "zh": "Auto-detects Vulkan GPU acceleration with graceful CPU retry on driver faults, or strict isolated GPU enforcement.",
          "ar": "Auto-detects Vulkan GPU acceleration with graceful CPU retry on driver faults, or strict isolated GPU enforcement.",
          "fr": "Auto-detects Vulkan GPU acceleration with graceful CPU retry on driver faults, or strict isolated GPU enforcement.",
          "de": "Auto-detects Vulkan GPU acceleration with graceful CPU retry on driver faults, or strict isolated GPU enforcement.",
          "es": "Auto-detects Vulkan GPU acceleration with graceful CPU retry on driver faults, or strict isolated GPU enforcement.",
          "hi": "Auto-detects Vulkan GPU acceleration with graceful CPU retry on driver faults, or strict isolated GPU enforcement.",
          "ru": "Auto-detects Vulkan GPU acceleration with graceful CPU retry on driver faults, or strict isolated GPU enforcement.",
          "vi": "Auto-detects Vulkan GPU acceleration with graceful CPU retry on driver faults, or strict isolated GPU enforcement.",
          "pl": "Auto-detects Vulkan GPU acceleration with graceful CPU retry on driver faults, or strict isolated GPU enforcement.",
          "la": "Auto-detects Vulkan GPU acceleration with graceful CPU retry on driver faults, or strict isolated GPU enforcement."
        }
      },
      {
        "title": {
          "en": "1:1 Native Bridge with termux-train",
          "ko": "1:1 Native Bridge with termux-train",
          "ja": "1:1 Native Bridge with termux-train",
          "zh": "1:1 Native Bridge with termux-train",
          "ar": "1:1 Native Bridge with termux-train",
          "fr": "1:1 Native Bridge with termux-train",
          "de": "1:1 Native Bridge with termux-train",
          "es": "1:1 Native Bridge with termux-train",
          "hi": "1:1 Native Bridge with termux-train",
          "ru": "1:1 Native Bridge with termux-train",
          "vi": "1:1 Native Bridge with termux-train",
          "pl": "1:1 Native Bridge with termux-train",
          "la": "1:1 Native Bridge with termux-train"
        },
        "desc": {
          "en": "Seamlessly converts extracted vision feature maps and ViT patches directly into termux-train tensors for edge LoRA fine-tuning.",
          "ko": "Seamlessly converts extracted vision feature maps and ViT patches directly into termux-train tensors for edge LoRA fine-tuning.",
          "ja": "Seamlessly converts extracted vision feature maps and ViT patches directly into termux-train tensors for edge LoRA fine-tuning.",
          "zh": "Seamlessly converts extracted vision feature maps and ViT patches directly into termux-train tensors for edge LoRA fine-tuning.",
          "ar": "Seamlessly converts extracted vision feature maps and ViT patches directly into termux-train tensors for edge LoRA fine-tuning.",
          "fr": "Seamlessly converts extracted vision feature maps and ViT patches directly into termux-train tensors for edge LoRA fine-tuning.",
          "de": "Seamlessly converts extracted vision feature maps and ViT patches directly into termux-train tensors for edge LoRA fine-tuning.",
          "es": "Seamlessly converts extracted vision feature maps and ViT patches directly into termux-train tensors for edge LoRA fine-tuning.",
          "hi": "Seamlessly converts extracted vision feature maps and ViT patches directly into termux-train tensors for edge LoRA fine-tuning.",
          "ru": "Seamlessly converts extracted vision feature maps and ViT patches directly into termux-train tensors for edge LoRA fine-tuning.",
          "vi": "Seamlessly converts extracted vision feature maps and ViT patches directly into termux-train tensors for edge LoRA fine-tuning.",
          "pl": "Seamlessly converts extracted vision feature maps and ViT patches directly into termux-train tensors for edge LoRA fine-tuning.",
          "la": "Seamlessly converts extracted vision feature maps and ViT patches directly into termux-train tensors for edge LoRA fine-tuning."
        }
      }
    ]
  },
  "sentinel": {
    "subtitles": {
      "en": "Privacy-First 0-Data Browser Observability & Deterministic 0~100 Threat Scoring SDK",
      "ko": "AMEVA 생태계를 위한 암호학적 보안 감사 및 무결성 검증 SDK",
      "ja": "Privacy-First 0-Data Browser Observability & Deterministic 0~100 Threat Scoring SDK",
      "zh": "Privacy-First 0-Data Browser Observability & Deterministic 0~100 Threat Scoring SDK",
      "ar": "Privacy-First 0-Data Browser Observability & Deterministic 0~100 Threat Scoring SDK",
      "fr": "Privacy-First 0-Data Browser Observability & Deterministic 0~100 Threat Scoring SDK",
      "de": "Privacy-First 0-Data Browser Observability & Deterministic 0~100 Threat Scoring SDK",
      "es": "Privacy-First 0-Data Browser Observability & Deterministic 0~100 Threat Scoring SDK",
      "hi": "Privacy-First 0-Data Browser Observability & Deterministic 0~100 Threat Scoring SDK",
      "ru": "Privacy-First 0-Data Browser Observability & Deterministic 0~100 Threat Scoring SDK",
      "vi": "Privacy-First 0-Data Browser Observability & Deterministic 0~100 Threat Scoring SDK",
      "pl": "Privacy-First 0-Data Browser Observability & Deterministic 0~100 Threat Scoring SDK",
      "la": "Privacy-First 0-Data Browser Observability & Deterministic 0~100 Threat Scoring SDK"
    },
    "challenge": {
      "en": "Traditional bot detection SDKs compromise user privacy by capturing sensitive keystrokes and mouse trajectories.",
      "ko": "에지 디바이스 및 탈중앙화 환경에서의 위변조 공격 및 모델 가중치 오염 위험.",
      "ja": "Traditional bot detection SDKs compromise user privacy by capturing sensitive keystrokes and mouse trajectories.",
      "zh": "Traditional bot detection SDKs compromise user privacy by capturing sensitive keystrokes and mouse trajectories.",
      "ar": "Traditional bot detection SDKs compromise user privacy by capturing sensitive keystrokes and mouse trajectories.",
      "fr": "Traditional bot detection SDKs compromise user privacy by capturing sensitive keystrokes and mouse trajectories.",
      "de": "Traditional bot detection SDKs compromise user privacy by capturing sensitive keystrokes and mouse trajectories.",
      "es": "Traditional bot detection SDKs compromise user privacy by capturing sensitive keystrokes and mouse trajectories.",
      "hi": "Traditional bot detection SDKs compromise user privacy by capturing sensitive keystrokes and mouse trajectories.",
      "ru": "Traditional bot detection SDKs compromise user privacy by capturing sensitive keystrokes and mouse trajectories.",
      "vi": "Traditional bot detection SDKs compromise user privacy by capturing sensitive keystrokes and mouse trajectories.",
      "pl": "Traditional bot detection SDKs compromise user privacy by capturing sensitive keystrokes and mouse trajectories.",
      "la": "Traditional bot detection SDKs compromise user privacy by capturing sensitive keystrokes and mouse trajectories."
    },
    "breakthrough": {
      "en": "Evaluates client structural signals entirely locally without capturing user inputs, computing deterministic 0~100 risk score and HMAC-SHA256 tokens.",
      "ko": "SHA-256 머클 트리 기반의 가중치 검증과 런타임 메모리 서명을 통해 변조를 원천 차단합니다.",
      "ja": "Evaluates client structural signals entirely locally without capturing user inputs, computing deterministic 0~100 risk score and HMAC-SHA256 tokens.",
      "zh": "Evaluates client structural signals entirely locally without capturing user inputs, computing deterministic 0~100 risk score and HMAC-SHA256 tokens.",
      "ar": "Evaluates client structural signals entirely locally without capturing user inputs, computing deterministic 0~100 risk score and HMAC-SHA256 tokens.",
      "fr": "Evaluates client structural signals entirely locally without capturing user inputs, computing deterministic 0~100 risk score and HMAC-SHA256 tokens.",
      "de": "Evaluates client structural signals entirely locally without capturing user inputs, computing deterministic 0~100 risk score and HMAC-SHA256 tokens.",
      "es": "Evaluates client structural signals entirely locally without capturing user inputs, computing deterministic 0~100 risk score and HMAC-SHA256 tokens.",
      "hi": "Evaluates client structural signals entirely locally without capturing user inputs, computing deterministic 0~100 risk score and HMAC-SHA256 tokens.",
      "ru": "Evaluates client structural signals entirely locally without capturing user inputs, computing deterministic 0~100 risk score and HMAC-SHA256 tokens.",
      "vi": "Evaluates client structural signals entirely locally without capturing user inputs, computing deterministic 0~100 risk score and HMAC-SHA256 tokens.",
      "pl": "Evaluates client structural signals entirely locally without capturing user inputs, computing deterministic 0~100 risk score and HMAC-SHA256 tokens.",
      "la": "Evaluates client structural signals entirely locally without capturing user inputs, computing deterministic 0~100 risk score and HMAC-SHA256 tokens."
    },
    "features": [
      {
        "title": {
          "en": "Deterministic 0-Drift Output",
          "ko": "머클 트리 무결성 검증",
          "ja": "Deterministic 0-Drift Output",
          "zh": "Deterministic 0-Drift Output",
          "ar": "Deterministic 0-Drift Output",
          "fr": "Deterministic 0-Drift Output",
          "de": "Deterministic 0-Drift Output",
          "es": "Deterministic 0-Drift Output",
          "hi": "Deterministic 0-Drift Output",
          "ru": "Deterministic 0-Drift Output",
          "vi": "Deterministic 0-Drift Output",
          "pl": "Deterministic 0-Drift Output",
          "la": "Deterministic 0-Drift Output"
        },
        "desc": {
          "en": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "ko": "모델 레이어 단위의 세밀한 암호학적 해시 검증.",
          "ja": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "zh": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "ar": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "fr": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "de": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "es": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "hi": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "ru": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "vi": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "pl": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "la": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware."
        }
      },
      {
        "title": {
          "en": "Zero Cloud Egress Architecture",
          "ko": "런타임 탬퍼 방지",
          "ja": "Zero Cloud Egress Architecture",
          "zh": "Zero Cloud Egress Architecture",
          "ar": "Zero Cloud Egress Architecture",
          "fr": "Zero Cloud Egress Architecture",
          "de": "Zero Cloud Egress Architecture",
          "es": "Zero Cloud Egress Architecture",
          "hi": "Zero Cloud Egress Architecture",
          "ru": "Zero Cloud Egress Architecture",
          "vi": "Zero Cloud Egress Architecture",
          "pl": "Zero Cloud Egress Architecture",
          "la": "Zero Cloud Egress Architecture"
        },
        "desc": {
          "en": "Operates 100% on the local client without external network telemetry leaks.",
          "ko": "실행 중인 프로세스의 메모리 무결성 실시간 모니터링.",
          "ja": "Operates 100% on the local client without external network telemetry leaks.",
          "zh": "Operates 100% on the local client without external network telemetry leaks.",
          "ar": "Operates 100% on the local client without external network telemetry leaks.",
          "fr": "Operates 100% on the local client without external network telemetry leaks.",
          "de": "Operates 100% on the local client without external network telemetry leaks.",
          "es": "Operates 100% on the local client without external network telemetry leaks.",
          "hi": "Operates 100% on the local client without external network telemetry leaks.",
          "ru": "Operates 100% on the local client without external network telemetry leaks.",
          "vi": "Operates 100% on the local client without external network telemetry leaks.",
          "pl": "Operates 100% on the local client without external network telemetry leaks.",
          "la": "Operates 100% on the local client without external network telemetry leaks."
        }
      },
      {
        "title": {
          "en": "Memory Leakage Protection",
          "ko": "보안 텔레메트리",
          "ja": "Memory Leakage Protection",
          "zh": "Memory Leakage Protection",
          "ar": "Memory Leakage Protection",
          "fr": "Memory Leakage Protection",
          "de": "Memory Leakage Protection",
          "es": "Memory Leakage Protection",
          "hi": "Memory Leakage Protection",
          "ru": "Memory Leakage Protection",
          "vi": "Memory Leakage Protection",
          "pl": "Memory Leakage Protection",
          "la": "Memory Leakage Protection"
        },
        "desc": {
          "en": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "ko": "이상 징후 발생 시 즉각적인 안전 차단 및 보고.",
          "ja": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "zh": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "ar": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "fr": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "de": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "es": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "hi": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "ru": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "vi": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "pl": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "la": "Weakref lifetime management preventing GPU VRAM / system RAM leaks."
        }
      }
    ]
  },
  "mcp": {
    "subtitles": {
      "en": "Zero-Install Universal Polyglot WASM & Multi-Repo Model Context Protocol Hub",
      "ko": "다국어 WASM 플러그인 지원을 갖춘 모델 컨텍스트 프로토콜(MCP) 허브",
      "ja": "Zero-Install Universal Polyglot WASM & Multi-Repo Model Context Protocol Hub",
      "zh": "Zero-Install Universal Polyglot WASM & Multi-Repo Model Context Protocol Hub",
      "ar": "Zero-Install Universal Polyglot WASM & Multi-Repo Model Context Protocol Hub",
      "fr": "Zero-Install Universal Polyglot WASM & Multi-Repo Model Context Protocol Hub",
      "de": "Zero-Install Universal Polyglot WASM & Multi-Repo Model Context Protocol Hub",
      "es": "Zero-Install Universal Polyglot WASM & Multi-Repo Model Context Protocol Hub",
      "hi": "Zero-Install Universal Polyglot WASM & Multi-Repo Model Context Protocol Hub",
      "ru": "Zero-Install Universal Polyglot WASM & Multi-Repo Model Context Protocol Hub",
      "vi": "Zero-Install Universal Polyglot WASM & Multi-Repo Model Context Protocol Hub",
      "pl": "Zero-Install Universal Polyglot WASM & Multi-Repo Model Context Protocol Hub",
      "la": "Zero-Install Universal Polyglot WASM & Multi-Repo Model Context Protocol Hub"
    },
    "challenge": {
      "en": "Setting up traditional MCP servers requires installing gigabytes of language toolchains for each repository on the host machine.",
      "ko": "이종 언어로 작성된 도구 및 서비스 간의 표준화된 상호운용성 확보의 어려움.",
      "ja": "Setting up traditional MCP servers requires installing gigabytes of language toolchains for each repository on the host machine.",
      "zh": "Setting up traditional MCP servers requires installing gigabytes of language toolchains for each repository on the host machine.",
      "ar": "Setting up traditional MCP servers requires installing gigabytes of language toolchains for each repository on the host machine.",
      "fr": "Setting up traditional MCP servers requires installing gigabytes of language toolchains for each repository on the host machine.",
      "de": "Setting up traditional MCP servers requires installing gigabytes of language toolchains for each repository on the host machine.",
      "es": "Setting up traditional MCP servers requires installing gigabytes of language toolchains for each repository on the host machine.",
      "hi": "Setting up traditional MCP servers requires installing gigabytes of language toolchains for each repository on the host machine.",
      "ru": "Setting up traditional MCP servers requires installing gigabytes of language toolchains for each repository on the host machine.",
      "vi": "Setting up traditional MCP servers requires installing gigabytes of language toolchains for each repository on the host machine.",
      "pl": "Setting up traditional MCP servers requires installing gigabytes of language toolchains for each repository on the host machine.",
      "la": "Setting up traditional MCP servers requires installing gigabytes of language toolchains for each repository on the host machine."
    },
    "breakthrough": {
      "en": "Executes WASI WebAssembly bytecodes in-memory inside a single Node process (<1ms) with live GitHub multi-repo tool synchronization.",
      "ko": "WASM 샌드박스를 통해 Rust, C++, Go, Python 등으로 작성된 MCP 도구를 안전하게 호스팅합니다.",
      "ja": "Executes WASI WebAssembly bytecodes in-memory inside a single Node process (<1ms) with live GitHub multi-repo tool synchronization.",
      "zh": "Executes WASI WebAssembly bytecodes in-memory inside a single Node process (<1ms) with live GitHub multi-repo tool synchronization.",
      "ar": "Executes WASI WebAssembly bytecodes in-memory inside a single Node process (<1ms) with live GitHub multi-repo tool synchronization.",
      "fr": "Executes WASI WebAssembly bytecodes in-memory inside a single Node process (<1ms) with live GitHub multi-repo tool synchronization.",
      "de": "Executes WASI WebAssembly bytecodes in-memory inside a single Node process (<1ms) with live GitHub multi-repo tool synchronization.",
      "es": "Executes WASI WebAssembly bytecodes in-memory inside a single Node process (<1ms) with live GitHub multi-repo tool synchronization.",
      "hi": "Executes WASI WebAssembly bytecodes in-memory inside a single Node process (<1ms) with live GitHub multi-repo tool synchronization.",
      "ru": "Executes WASI WebAssembly bytecodes in-memory inside a single Node process (<1ms) with live GitHub multi-repo tool synchronization.",
      "vi": "Executes WASI WebAssembly bytecodes in-memory inside a single Node process (<1ms) with live GitHub multi-repo tool synchronization.",
      "pl": "Executes WASI WebAssembly bytecodes in-memory inside a single Node process (<1ms) with live GitHub multi-repo tool synchronization.",
      "la": "Executes WASI WebAssembly bytecodes in-memory inside a single Node process (<1ms) with live GitHub multi-repo tool synchronization."
    },
    "features": [
      {
        "title": {
          "en": "Deterministic 0-Drift Output",
          "ko": "WASM 샌드박스 격리",
          "ja": "Deterministic 0-Drift Output",
          "zh": "Deterministic 0-Drift Output",
          "ar": "Deterministic 0-Drift Output",
          "fr": "Deterministic 0-Drift Output",
          "de": "Deterministic 0-Drift Output",
          "es": "Deterministic 0-Drift Output",
          "hi": "Deterministic 0-Drift Output",
          "ru": "Deterministic 0-Drift Output",
          "vi": "Deterministic 0-Drift Output",
          "pl": "Deterministic 0-Drift Output",
          "la": "Deterministic 0-Drift Output"
        },
        "desc": {
          "en": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "ko": "안전하고 격리된 런타임 환경에서 타사 플러그인 실행.",
          "ja": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "zh": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "ar": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "fr": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "de": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "es": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "hi": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "ru": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "vi": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "pl": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware.",
          "la": "Bit-exact floating-point precision verified across heterogeneous ARM64 & WebGPU hardware."
        }
      },
      {
        "title": {
          "en": "Zero Cloud Egress Architecture",
          "ko": "표준 MCP 인터페이스",
          "ja": "Zero Cloud Egress Architecture",
          "zh": "Zero Cloud Egress Architecture",
          "ar": "Zero Cloud Egress Architecture",
          "fr": "Zero Cloud Egress Architecture",
          "de": "Zero Cloud Egress Architecture",
          "es": "Zero Cloud Egress Architecture",
          "hi": "Zero Cloud Egress Architecture",
          "ru": "Zero Cloud Egress Architecture",
          "vi": "Zero Cloud Egress Architecture",
          "pl": "Zero Cloud Egress Architecture",
          "la": "Zero Cloud Egress Architecture"
        },
        "desc": {
          "en": "Operates 100% on the local client without external network telemetry leaks.",
          "ko": "Claude 및 다양한 AI 클라이언트와 완벽 호환.",
          "ja": "Operates 100% on the local client without external network telemetry leaks.",
          "zh": "Operates 100% on the local client without external network telemetry leaks.",
          "ar": "Operates 100% on the local client without external network telemetry leaks.",
          "fr": "Operates 100% on the local client without external network telemetry leaks.",
          "de": "Operates 100% on the local client without external network telemetry leaks.",
          "es": "Operates 100% on the local client without external network telemetry leaks.",
          "hi": "Operates 100% on the local client without external network telemetry leaks.",
          "ru": "Operates 100% on the local client without external network telemetry leaks.",
          "vi": "Operates 100% on the local client without external network telemetry leaks.",
          "pl": "Operates 100% on the local client without external network telemetry leaks.",
          "la": "Operates 100% on the local client without external network telemetry leaks."
        }
      },
      {
        "title": {
          "en": "Memory Leakage Protection",
          "ko": "동적 플러그인 로딩",
          "ja": "Memory Leakage Protection",
          "zh": "Memory Leakage Protection",
          "ar": "Memory Leakage Protection",
          "fr": "Memory Leakage Protection",
          "de": "Memory Leakage Protection",
          "es": "Memory Leakage Protection",
          "hi": "Memory Leakage Protection",
          "ru": "Memory Leakage Protection",
          "vi": "Memory Leakage Protection",
          "pl": "Memory Leakage Protection",
          "la": "Memory Leakage Protection"
        },
        "desc": {
          "en": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "ko": "서버 재시작 없이 실시간으로 도구 등록 및 해제.",
          "ja": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "zh": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "ar": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "fr": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "de": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "es": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "hi": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "ru": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "vi": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "pl": "Weakref lifetime management preventing GPU VRAM / system RAM leaks.",
          "la": "Weakref lifetime management preventing GPU VRAM / system RAM leaks."
        }
      }
    ]
  },
  "aichain": {
    "subtitles": {
      "en": "Ultra-Lightweight Zero-Dependency AI Chaining & Autonomous Agent Framework for Android Termux",
      "ko": "외부 의존성 제로의 초경량 온디바이스 AI 에이전트 프레임워크",
      "ja": "Ultra-Lightweight Zero-Dependency AI Chaining & Autonomous Agent Framework for Android Termux",
      "zh": "Ultra-Lightweight Zero-Dependency AI Chaining & Autonomous Agent Framework for Android Termux",
      "ar": "Ultra-Lightweight Zero-Dependency AI Chaining & Autonomous Agent Framework for Android Termux",
      "fr": "Ultra-Lightweight Zero-Dependency AI Chaining & Autonomous Agent Framework for Android Termux",
      "de": "Ultra-Lightweight Zero-Dependency AI Chaining & Autonomous Agent Framework for Android Termux",
      "es": "Ultra-Lightweight Zero-Dependency AI Chaining & Autonomous Agent Framework for Android Termux",
      "hi": "Ultra-Lightweight Zero-Dependency AI Chaining & Autonomous Agent Framework for Android Termux",
      "ru": "Ultra-Lightweight Zero-Dependency AI Chaining & Autonomous Agent Framework for Android Termux",
      "vi": "Ultra-Lightweight Zero-Dependency AI Chaining & Autonomous Agent Framework for Android Termux",
      "pl": "Ultra-Lightweight Zero-Dependency AI Chaining & Autonomous Agent Framework for Android Termux",
      "la": "Ultra-Lightweight Zero-Dependency AI Chaining & Autonomous Agent Framework for Android Termux"
    },
    "challenge": {
      "en": "Heavy agent frameworks (LangChain, LlamaIndex) require hundreds of bloated dependencies, causing package conflicts and OOM crashes on mobile Termux.",
      "ko": "기존 에이전트 프레임워크들의 무거운 외부 패키지 의존성과 메모리 오버헤드.",
      "ja": "Heavy agent frameworks (LangChain, LlamaIndex) require hundreds of bloated dependencies, causing package conflicts and OOM crashes on mobile Termux.",
      "zh": "Heavy agent frameworks (LangChain, LlamaIndex) require hundreds of bloated dependencies, causing package conflicts and OOM crashes on mobile Termux.",
      "ar": "Heavy agent frameworks (LangChain, LlamaIndex) require hundreds of bloated dependencies, causing package conflicts and OOM crashes on mobile Termux.",
      "fr": "Heavy agent frameworks (LangChain, LlamaIndex) require hundreds of bloated dependencies, causing package conflicts and OOM crashes on mobile Termux.",
      "de": "Heavy agent frameworks (LangChain, LlamaIndex) require hundreds of bloated dependencies, causing package conflicts and OOM crashes on mobile Termux.",
      "es": "Heavy agent frameworks (LangChain, LlamaIndex) require hundreds of bloated dependencies, causing package conflicts and OOM crashes on mobile Termux.",
      "hi": "Heavy agent frameworks (LangChain, LlamaIndex) require hundreds of bloated dependencies, causing package conflicts and OOM crashes on mobile Termux.",
      "ru": "Heavy agent frameworks (LangChain, LlamaIndex) require hundreds of bloated dependencies, causing package conflicts and OOM crashes on mobile Termux.",
      "vi": "Heavy agent frameworks (LangChain, LlamaIndex) require hundreds of bloated dependencies, causing package conflicts and OOM crashes on mobile Termux.",
      "pl": "Heavy agent frameworks (LangChain, LlamaIndex) require hundreds of bloated dependencies, causing package conflicts and OOM crashes on mobile Termux.",
      "la": "Heavy agent frameworks (LangChain, LlamaIndex) require hundreds of bloated dependencies, causing package conflicts and OOM crashes on mobile Termux."
    },
    "breakthrough": {
      "en": "Provides pure zero-dependency DAG execution, structured prompt chains, and deterministic tool dispatching in <50KB footprint.",
      "ko": "표준 라이브러리만으로 구축된 제로 의존성 파이프라인으로 ReAct 에이전트 루프와 도구 호출을 수행합니다.",
      "ja": "Provides pure zero-dependency DAG execution, structured prompt chains, and deterministic tool dispatching in <50KB footprint.",
      "zh": "Provides pure zero-dependency DAG execution, structured prompt chains, and deterministic tool dispatching in <50KB footprint.",
      "ar": "Provides pure zero-dependency DAG execution, structured prompt chains, and deterministic tool dispatching in <50KB footprint.",
      "fr": "Provides pure zero-dependency DAG execution, structured prompt chains, and deterministic tool dispatching in <50KB footprint.",
      "de": "Provides pure zero-dependency DAG execution, structured prompt chains, and deterministic tool dispatching in <50KB footprint.",
      "es": "Provides pure zero-dependency DAG execution, structured prompt chains, and deterministic tool dispatching in <50KB footprint.",
      "hi": "Provides pure zero-dependency DAG execution, structured prompt chains, and deterministic tool dispatching in <50KB footprint.",
      "ru": "Provides pure zero-dependency DAG execution, structured prompt chains, and deterministic tool dispatching in <50KB footprint.",
      "vi": "Provides pure zero-dependency DAG execution, structured prompt chains, and deterministic tool dispatching in <50KB footprint.",
      "pl": "Provides pure zero-dependency DAG execution, structured prompt chains, and deterministic tool dispatching in <50KB footprint.",
      "la": "Provides pure zero-dependency DAG execution, structured prompt chains, and deterministic tool dispatching in <50KB footprint."
    },
    "features": [
      {
        "title": {
          "en": "Deterministic Zero-Drift Output",
          "ko": "제로 외부 의존성",
          "ja": "Deterministic Zero-Drift Output",
          "zh": "Deterministic Zero-Drift Output",
          "ar": "Deterministic Zero-Drift Output",
          "fr": "Deterministic Zero-Drift Output",
          "de": "Deterministic Zero-Drift Output",
          "es": "Deterministic Zero-Drift Output",
          "hi": "Deterministic Zero-Drift Output",
          "ru": "Deterministic Zero-Drift Output",
          "vi": "Deterministic Zero-Drift Output",
          "pl": "Deterministic Zero-Drift Output",
          "la": "Deterministic Zero-Drift Output"
        },
        "desc": {
          "en": "Strict fail-closed identity verification and parameter bounds validation across heterogeneous hardware.",
          "ko": "추가 패키지 설치 없이 즉시 실행 가능한 순수 파이썬 구현.",
          "ja": "Strict fail-closed identity verification and parameter bounds validation across heterogeneous hardware.",
          "zh": "Strict fail-closed identity verification and parameter bounds validation across heterogeneous hardware.",
          "ar": "Strict fail-closed identity verification and parameter bounds validation across heterogeneous hardware.",
          "fr": "Strict fail-closed identity verification and parameter bounds validation across heterogeneous hardware.",
          "de": "Strict fail-closed identity verification and parameter bounds validation across heterogeneous hardware.",
          "es": "Strict fail-closed identity verification and parameter bounds validation across heterogeneous hardware.",
          "hi": "Strict fail-closed identity verification and parameter bounds validation across heterogeneous hardware.",
          "ru": "Strict fail-closed identity verification and parameter bounds validation across heterogeneous hardware.",
          "vi": "Strict fail-closed identity verification and parameter bounds validation across heterogeneous hardware.",
          "pl": "Strict fail-closed identity verification and parameter bounds validation across heterogeneous hardware.",
          "la": "Strict fail-closed identity verification and parameter bounds validation across heterogeneous hardware."
        }
      },
      {
        "title": {
          "en": "Zero Cloud Egress Architecture",
          "ko": "ReAct 에이전트 루프",
          "ja": "Zero Cloud Egress Architecture",
          "zh": "Zero Cloud Egress Architecture",
          "ar": "Zero Cloud Egress Architecture",
          "fr": "Zero Cloud Egress Architecture",
          "de": "Zero Cloud Egress Architecture",
          "es": "Zero Cloud Egress Architecture",
          "hi": "Zero Cloud Egress Architecture",
          "ru": "Zero Cloud Egress Architecture",
          "vi": "Zero Cloud Egress Architecture",
          "pl": "Zero Cloud Egress Architecture",
          "la": "Zero Cloud Egress Architecture"
        },
        "desc": {
          "en": "Operates 100% on the local client without external network telemetry leaks.",
          "ko": "사고(Thought), 행동(Action), 관찰(Observation)의 자율 루프.",
          "ja": "Operates 100% on the local client without external network telemetry leaks.",
          "zh": "Operates 100% on the local client without external network telemetry leaks.",
          "ar": "Operates 100% on the local client without external network telemetry leaks.",
          "fr": "Operates 100% on the local client without external network telemetry leaks.",
          "de": "Operates 100% on the local client without external network telemetry leaks.",
          "es": "Operates 100% on the local client without external network telemetry leaks.",
          "hi": "Operates 100% on the local client without external network telemetry leaks.",
          "ru": "Operates 100% on the local client without external network telemetry leaks.",
          "vi": "Operates 100% on the local client without external network telemetry leaks.",
          "pl": "Operates 100% on the local client without external network telemetry leaks.",
          "la": "Operates 100% on the local client without external network telemetry leaks."
        }
      },
      {
        "title": {
          "en": "ToolPolicy Default Deny Security",
          "ko": "구조화된 도구 호출",
          "ja": "ToolPolicy Default Deny Security",
          "zh": "ToolPolicy Default Deny Security",
          "ar": "ToolPolicy Default Deny Security",
          "fr": "ToolPolicy Default Deny Security",
          "de": "ToolPolicy Default Deny Security",
          "es": "ToolPolicy Default Deny Security",
          "hi": "ToolPolicy Default Deny Security",
          "ru": "ToolPolicy Default Deny Security",
          "vi": "ToolPolicy Default Deny Security",
          "pl": "ToolPolicy Default Deny Security",
          "la": "ToolPolicy Default Deny Security"
        },
        "desc": {
          "en": "Enforces strict default-deny tool policy with schema bounds and user approval callbacks.",
          "ko": "JSON 스키마 기반의 안전하고 정확한 도구 실행.",
          "ja": "Enforces strict default-deny tool policy with schema bounds and user approval callbacks.",
          "zh": "Enforces strict default-deny tool policy with schema bounds and user approval callbacks.",
          "ar": "Enforces strict default-deny tool policy with schema bounds and user approval callbacks.",
          "fr": "Enforces strict default-deny tool policy with schema bounds and user approval callbacks.",
          "de": "Enforces strict default-deny tool policy with schema bounds and user approval callbacks.",
          "es": "Enforces strict default-deny tool policy with schema bounds and user approval callbacks.",
          "hi": "Enforces strict default-deny tool policy with schema bounds and user approval callbacks.",
          "ru": "Enforces strict default-deny tool policy with schema bounds and user approval callbacks.",
          "vi": "Enforces strict default-deny tool policy with schema bounds and user approval callbacks.",
          "pl": "Enforces strict default-deny tool policy with schema bounds and user approval callbacks.",
          "la": "Enforces strict default-deny tool policy with schema bounds and user approval callbacks."
        }
      }
    ]
  }
};
  const PHRASES_DB = {
  "Let's Create!": {
    "ko": "이미지 생성 스튜디오 (Let's Create!)",
    "ja": "画像生成スタジオ (Let's Create!)",
    "zh": "图像生成工坊 (Let's Create!)",
    "vi": "Xưởng tạo ảnh (Let's Create!)",
    "fr": "Studio de Création (Let's Create!)",
    "de": "Kreations-Studio (Let's Create!)",
    "es": "Estudio de Creación (Let's Create!)",
    "ru": "Студия создания (Let's Create!)",
    "ar": "استوديو الإنشاء (Let's Create!)",
    "hi": "क्रिएशन स्टूडियो (Let's Create!)",
    "pl": "Studio Tworzenia (Let's Create!)",
    "la": "Officina Creationis (Let's Create!)",
    "en": "Let's Create!"
  },
  "Document Navigation": {
    "ko": "문서 상세 목차",
    "ja": "ドキュメント目次",
    "zh": "文档导航目录",
    "vi": "Điều hướng tài liệu",
    "fr": "Navigation Documentaire",
    "de": "Dokument-Navigation",
    "es": "Navegación de Documentos",
    "ru": "Навигация по документам",
    "ar": "التنقل في المستندات",
    "hi": "दस्तावेज़ नेविगेशन",
    "pl": "Nawigacja po dokumentach",
    "la": "Navigatio Documentorum",
    "en": "Document Navigation"
  },
  "Foundation Info": {
    "ko": "재단 소개 (AOSF)",
    "ja": "財団情報",
    "zh": "基金会概览",
    "vi": "Thông tin quỹ",
    "fr": "Infos Fondation",
    "de": "Stiftungsinformationen",
    "es": "Información de la Fundación",
    "ru": "Информация о Фонде",
    "ar": "معلومات المؤسسة",
    "hi": "फाउंडेशन जानकारी",
    "pl": "Informacje o Fundacji",
    "la": "Notitia Fundationis",
    "en": "Foundation Info"
  },
  "Home / Architecture": {
    "ko": "홈 / 아키텍처",
    "ja": "ホーム / アーキテクチャ",
    "zh": "首页 / 架构设计",
    "vi": "Trang chủ / Kiến trúc",
    "fr": "Accueil / Architecture",
    "de": "Startseite / Architektur",
    "es": "Inicio / Arquitectura",
    "ru": "Главная / Архитектура",
    "ar": "الرئيسية / الهندسة المعمارية",
    "hi": "होम / वास्तुकला",
    "pl": "Strona główna / Architektura",
    "la": "Domus / Architectura",
    "en": "Home / Architecture"
  },
  "Installation Guide": {
    "ko": "설치 가이드",
    "ja": "インストールガイド",
    "zh": "安装部署指南",
    "vi": "Hướng dẫn cài đặt",
    "fr": "Guide d'Installation",
    "de": "Installationsanleitung",
    "es": "Guía de Instalación",
    "ru": "Руководство по установке",
    "ar": "دليل التثبيت",
    "hi": "स्थापना गाइड",
    "pl": "Instrukcja instalacji",
    "la": "Dux Institutionis",
    "en": "Installation Guide"
  },
  "Quickstart & Recipes": {
    "ko": "퀵스타트 & 실행 레시피",
    "ja": "クイックスタート＆レシピ",
    "zh": "快速上手与示例",
    "vi": "Bắt đầu nhanh & Công thức",
    "fr": "Démarrage Rapide & Recettes",
    "de": "Schnellstart & Rezepte",
    "es": "Inicio Rápido y Recetas",
    "ru": "Быстрый старт и примеры",
    "ar": "البدء السريع والأمثلة",
    "hi": "त्वरित शुरुआत और रेसिपी",
    "pl": "Szybki start i przepisy",
    "la": "Initium Celer & Exempla",
    "en": "Quickstart & Recipes"
  },
  "API Reference": {
    "ko": "전체 API 명세서",
    "ja": "APIリファレンス",
    "zh": "完整 API 规范",
    "vi": "Tài liệu tham khảo API",
    "fr": "Référence de l'API",
    "de": "API-Referenz",
    "es": "Referencia de la API",
    "ru": "Справочник по API",
    "ar": "مرجع API",
    "hi": "API संदर्भ",
    "pl": "Dokumentacja API",
    "la": "Index API",
    "en": "API Reference"
  },
  "Pretrained Checkpoints": {
    "ko": "사전학습 체크포인트",
    "ja": "事前学習済みチェックポイント",
    "zh": "预训练模型检查点",
    "vi": "Điểm kiểm tra được đào tạo trước",
    "fr": "Points de Contrôle Pré-entraînés",
    "de": "Vortrainierte Checkpoints",
    "es": "Puntos de Control Preentrenados",
    "ru": "Предобученные чекпоинты",
    "ar": "نقاط التفتيش المدربة مسبقًا",
    "hi": "पूर्व-प्रशिक्षित चेकपॉइंट्स",
    "pl": "Wstępnie wytrenowane punkty kontrolne",
    "la": "Puncta Prae-instituta",
    "en": "Pretrained Checkpoints"
  },
  "Model Checkpoints": {
    "ko": "모델 체크포인트",
    "ja": "モデルチェックポイント",
    "zh": "模型检查点",
    "vi": "Điểm kiểm tra mô hình",
    "fr": "Points de Contrôle de Modèles",
    "de": "Modell-Checkpoints",
    "es": "Puntos de Control de Modelos",
    "ru": "Чекпоинты моделей",
    "ar": "نقاط تفتيش النماذج",
    "hi": "मॉडल चेकपॉइंट्स",
    "pl": "Punkty kontrolne modeli",
    "la": "Puncta Modelli",
    "en": "Model Checkpoints"
  },
  "GGUF Quant Models": {
    "ko": "GGUF 양자화 모델 허브",
    "ja": "GGUF量子化モデルハブ",
    "zh": "GGUF 量化模型中心",
    "vi": "Mô hình lượng tử GGUF",
    "fr": "Modèles Quantifiés GGUF",
    "de": "GGUF-Quantisierungsmodelle",
    "es": "Modelos Cuantizados GGUF",
    "ru": "GGUF квантованные модели",
    "ar": "نماذج GGUF الكمية",
    "hi": "GGUF क्वांट मॉडल",
    "pl": "Modele kwantyzacji GGUF",
    "la": "Modelli GGUF",
    "en": "GGUF Quant Models"
  },
  "Models Directory": {
    "ko": "모델 디렉터리",
    "ja": "モデルディレクトリ",
    "zh": "模型索引目录",
    "vi": "Thư mục mô hình",
    "fr": "Répertoire des Modèles",
    "de": "Modellverzeichnis",
    "es": "Directorio de Modelos",
    "ru": "Каталог моделей",
    "ar": "دليل النماذج",
    "hi": "मॉडल निर्देशिका",
    "pl": "Katalog modeli",
    "la": "Directorium Modelli",
    "en": "Models Directory"
  },
  "Benchmarks & Profiling": {
    "ko": "벤치마크 & 하드웨어 프로파일링",
    "ja": "ベンチマーク＆プロファイリング",
    "zh": "基准测试与性能分析",
    "vi": "Đo điểm chuẩn & Phân tích",
    "fr": "Benchmarks & Profilage",
    "de": "Benchmarks & Profiling",
    "es": "Evaluaciones Comparativas y Perfilado",
    "ru": "Бенчмарки и профилирование",
    "ar": "المعايير وتحليل الأداء",
    "hi": "बेंचमार्क और प्रोफाइलिंग",
    "pl": "Testy wydajności i profilowanie",
    "la": "Mensurae et Profiling",
    "en": "Benchmarks & Profiling"
  },
  "Advanced Parameters": {
    "ko": "고급 파라미터 제어",
    "ja": "高度なパラメータ制御",
    "zh": "高级参数与内核调优",
    "vi": "Tham số nâng cao",
    "fr": "Paramètres Avancés",
    "de": "Erweiterte Parameter",
    "es": "Parámetros Avanzados",
    "ru": "Расширенные параметры",
    "ar": "المعلمات المتقدمة",
    "hi": "उन्नत पैरामीटर",
    "pl": "Zaawansowane parametry",
    "la": "Parametri Provecti",
    "en": "Advanced Parameters"
  },
  "Version Archive": {
    "ko": "버전 릴리즈 아카이브",
    "ja": "バージョンアーカイブ",
    "zh": "版本发布存档",
    "vi": "Kho lưu trữ phiên bản",
    "fr": "Archives des Versions",
    "de": "Versionsarchiv",
    "es": "Archivo de Versiones",
    "ru": "Архив версий",
    "ar": "أرشيف الإصدارات",
    "hi": "संस्करण पुरालेख",
    "pl": "Archiwum wersji",
    "la": "Archivum Versionum",
    "en": "Version Archive"
  },
  "Visual Gallery": {
    "ko": "시각 갤러리",
    "ja": "ビジュアルギャラリー",
    "zh": "视觉画廊",
    "vi": "Thư viện trực quan",
    "fr": "Galerie Visuelle",
    "de": "Visuelle Galerie",
    "es": "Galería Visual",
    "ru": "Визуальная галерея",
    "ar": "معرض الصور",
    "hi": "दृश्य गैलरी",
    "pl": "Galeria wizualna",
    "la": "Pinacotheca Visualis",
    "en": "Visual Gallery"
  },
  "Audio Showcase": {
    "ko": "오디오 쇼케이스",
    "ja": "オーディオショーケース",
    "zh": "音频演示",
    "vi": "Trưng bày âm thanh",
    "fr": "Vitrine Audio",
    "de": "Audio-Showcase",
    "es": "Muestra de Audio",
    "ru": "Аудио витрина",
    "ar": "عرض الصوت",
    "hi": "ऑडियो शोकेस",
    "pl": "Pokaz audio",
    "la": "Expositio Auditus",
    "en": "Audio Showcase"
  },
  "Live WebGPU Demo": {
    "ko": "실시간 WebGPU 데모",
    "ja": "ライブWebGPUデモ",
    "zh": "实时 WebGPU 演示",
    "vi": "Bản demo WebGPU trực tiếp",
    "fr": "Démo WebGPU en Direct",
    "de": "Live-WebGPU-Demo",
    "es": "Demostración WebGPU en Vivo",
    "ru": "Живое WebGPU демо",
    "ar": "عرض WebGPU المباشر",
    "hi": "लाइव WebGPU डेमो",
    "pl": "Prezentacja WebGPU na żywo",
    "la": "Exemplum WebGPU Vivum",
    "en": "Live WebGPU Demo"
  },
  "WASM Tools Catalog": {
    "ko": "WASM 도구 카탈로그",
    "ja": "WASMツールカタログ",
    "zh": "WASM 工具目录",
    "vi": "Danh mục công cụ WASM",
    "fr": "Catalogue d'Outils WASM",
    "de": "WASM-Werkzeugkatalog",
    "es": "Catálogo de Herramientas WASM",
    "ru": "Каталог инструментов WASM",
    "ar": "كتالوج أدوات WASM",
    "hi": "WASM उपकरण सूची",
    "pl": "Katalog narzędzi WASM",
    "la": "Catalogus Instrumentorum WASM",
    "en": "WASM Tools Catalog"
  },
  "Training Guide": {
    "ko": "온디바이스 학습 가이드",
    "ja": "学習ガイド",
    "zh": "模型训练指南",
    "vi": "Hướng dẫn đào tạo",
    "fr": "Guide d'Entraînement",
    "de": "Trainingsanleitung",
    "es": "Guía de Entrenamiento",
    "ru": "Руководство по обучению",
    "ar": "دليل التدريب",
    "hi": "प्रशिक्षण गाइड",
    "pl": "Przewodnik szkoleniowy",
    "la": "Dux Eruditionis",
    "en": "Training Guide"
  },
  "Quickstart & Execution Recipes": {
    "ko": "퀵스타트 & 실행 레시피",
    "ja": "クイックスタート＆実行レシピ",
    "zh": "快速上手与执行范式",
    "vi": "Bắt đầu nhanh & Công thức thực thi",
    "fr": "Démarrage Rapide & Recettes d'Exécution",
    "de": "Schnellstart & Ausführungsrezepte",
    "es": "Inicio Rápido y Recetas de Ejecución",
    "ru": "Быстрый старт и рецепты выполнения",
    "ar": "البدء السريع ووصفات التنفيذ",
    "hi": "त्वरित शुरुआत और निष्पादन व्यंजन",
    "pl": "Szybki start i przepisy wykonawcze",
    "la": "Initium Celer & Formulae Executionis",
    "en": "Quickstart & Execution Recipes"
  },
  "Standard usage patterns and rapid prototyping code": {
    "ko": "표준 사용 패턴 및 빠른 프로토타이핑 코드",
    "ja": "標準的な使用パターンと高速プロトタイピングコード",
    "zh": "标准用法模式与快速原型开发代码",
    "vi": "Các mẫu sử dụng chuẩn và mã tạo mẫu nhanh",
    "fr": "Modèles d'utilisation standard et code de prototypage rapide",
    "de": "Standard-Nutzungsmuster und Code für schnelles Prototyping",
    "es": "Patrones de uso estándar y código de creación rápida de prototipos",
    "ru": "Стандартные шаблоны использования и код для быстрого прототипирования",
    "ar": "أنماط الاستخدام القياسية وشفرة النماذج الأولية السريعة",
    "hi": "मानक उपयोग पैटर्न और त्वरित प्रोटोटाइप कोड",
    "pl": "Standardowe wzorce użycia i kod szybkiego prototypowania",
    "la": "Formae usus canonicae et codex prototyping celeris",
    "en": "Standard usage patterns and rapid prototyping code"
  },
  "Prerequisites & Environment Setup": {
    "ko": "사전 요구사항 및 환경 설정",
    "ja": "前提条件と環境設定",
    "zh": "前置要求与环境配置",
    "vi": "Điều kiện tiên quyết & Thiết lập môi trường",
    "fr": "Prérequis & Configuration de l'Environnement",
    "de": "Voraussetzungen & Umgebungseinrichtung",
    "es": "Requisitos Previos y Configuración del Entorno",
    "ru": "Предварительные требования и настройка среды",
    "ar": "المتطلبات الأساسية وإعداد البيئة",
    "hi": "पूर्वापेक्षाएँ और पर्यावरण सेटअप",
    "pl": "Wymagania wstępne i konfiguracja środowiska",
    "la": "Praerequisita et Configuratio Ambitus",
    "en": "Prerequisites & Environment Setup"
  },
  "Hardware Requirements & Toolchain Setup": {
    "ko": "하드웨어 요구 사양 및 툴체인 설정",
    "ja": "ハードウェア要件とツールチェーン設定",
    "zh": "硬件要求与工具链配置",
    "vi": "Yêu cầu phần cứng & Thiết lập chuỗi công cụ",
    "fr": "Exigences Matérielles & Configuration de la Chaîne d'Outils",
    "de": "Hardwareanforderungen & Toolchain-Setup",
    "es": "Requisitos de Hardware y Configuración de la Cadena de Herramientas",
    "ru": "Требования к оборудованию и настройка цепочки инструментов",
    "ar": "متطلبات الأجهزة وإعداد سلسلة الأدوات",
    "hi": "हार्डवेयर आवश्यकताएं और टूलचेन सेटअप",
    "pl": "Wymagania sprzętowe i konfiguracja łańcucha narzędzi",
    "la": "Postulata Hardware et Configuratio Toolchain",
    "en": "Hardware Requirements & Toolchain Setup"
  },
  "Step 1: Termux Environment Setup": {
    "ko": "1단계: Termux 환경 설정",
    "ja": "ステップ1：Termux環境設定",
    "zh": "步骤 1：Termux 环境配置",
    "vi": "Bước 1: Thiết lập môi trường Termux",
    "fr": "Étape 1 : Configuration de l'Environnement Termux",
    "de": "Schritt 1: Termux-Umgebungseinrichtung",
    "es": "Paso 1: Configuración del Entorno Termux",
    "ru": "Шаг 1: Настройка среды Termux",
    "ar": "الخطوة 1: إعداد بيئة Termux",
    "hi": "चरण 1: टर्मक्स पर्यावरण सेटअप",
    "pl": "Krok 1: Konfiguracja środowiska Termux",
    "la": "Gradus 1: Configuratio Ambitus Termux",
    "en": "Step 1: Termux Environment Setup"
  },
  "Step 2: Install Package": {
    "ko": "2단계: 패키지 설치",
    "ja": "ステップ2：パッケージのインストール",
    "zh": "步骤 2：安装软件包",
    "vi": "Bước 2: Cài đặt gói",
    "fr": "Étape 2 : Installer le Paquet",
    "de": "Schritt 2: Paket installieren",
    "es": "Paso 2: Instalar Paquete",
    "ru": "Шаг 2: Установка пакета",
    "ar": "الخطوة 2: تثبيت الحزمة",
    "hi": "चरण 2: पैकेज स्थापित करें",
    "pl": "Krok 2: Zainstaluj pakiet",
    "la": "Gradus 2: Sarcinam Installa",
    "en": "Step 2: Install Package"
  },
  "Step 3: Verify Hardware Capabilities": {
    "ko": "3단계: 하드웨어 가속 역량 검증",
    "ja": "ステップ3：ハードウェア機能の検証",
    "zh": "步骤 3：验证硬件加速能力",
    "vi": "Bước 3: Xác minh khả năng phần cứng",
    "fr": "Étape 3 : Vérifier les Capacités Matérielles",
    "de": "Schritt 3: Hardwarefunktionen überprüfen",
    "es": "Paso 3: Verificar Capacidades de Hardware",
    "ru": "Шаг 3: Проверка возможностей оборудования",
    "ar": "الخطوة 3: التحقق من قدرات الأجهزة",
    "hi": "चरण 3: हार्डवेयर क्षमताओं को सत्यापित करें",
    "pl": "Krok 3: Zweryfikuj możliwości sprzętowe",
    "la": "Gradus 3: Capacitates Hardware Comproba",
    "en": "Step 3: Verify Hardware Capabilities"
  },
  "Step 4: Execute Sanity Check": {
    "ko": "4단계: 정상 동작 검증 (Sanity Check)",
    "ja": "ステップ4：動作確認（サニティチェック）",
    "zh": "步骤 4：执行冒烟测试验证",
    "vi": "Bước 4: Thực thi kiểm tra tính toàn vẹn",
    "fr": "Étape 4 : Exécuter le Test de Validité",
    "de": "Schritt 4: Plausibilitätsprüfung durchführen",
    "es": "Paso 4: Ejecutar Prueba de Cordura",
    "ru": "Шаг 4: Выполнение базовой проверки работоспособности",
    "ar": "الخطوة 4: تنفيذ اختبار السلامة",
    "hi": "चरण 4: सैनिटी चेक निष्पादित करें",
    "pl": "Krok 4: Wykonaj test poprawności",
    "la": "Gradus 4: Examinationem Sanitas Exsequere",
    "en": "Step 4: Execute Sanity Check"
  },
  "Recipe 1: Model Hub Download & CLI Inference": {
    "ko": "레시피 1: 모델 허브 다운로드 및 CLI 추론",
    "ja": "レシピ1：モデルハブのダウンロードとCLI推論",
    "zh": "范式 1：模型中心下载与 CLI 推理",
    "vi": "Công thức 1: Tải xuống trung tâm mô hình & Suy luận CLI",
    "fr": "Recette 1 : Téléchargement du Hub de Modèles & Inférence CLI",
    "de": "Rezept 1: Model Hub Download & CLI-Inferenz",
    "es": "Receta 1: Descarga de Model Hub e Inferencia CLI",
    "ru": "Рецепт 1: Загрузка из Model Hub и CLI-инференс",
    "ar": "الوصفة 1: تنزيل مركز النماذج واستنتاج CLI",
    "hi": "रेसिपी 1: मॉडल हब डाउनलोड और सीएलआई अनुमान",
    "pl": "Przepis 1: Pobieranie z Model Hub i wnioskowanie CLI",
    "la": "Formula 1: Depromptio Modelli et Inferenz CLI",
    "en": "Recipe 1: Model Hub Download & CLI Inference"
  },
  "Query verified 1.58-bit GGUF models, download with HTTP Range resume support, and execute instant inference:": {
    "ko": "검증된 1.58비트 GGUF 모델을 조회하고, HTTP Range 이어받기를 통해 다운로드하여 즉각적인 추론을 실행합니다:",
    "ja": "検証済みの1.58ビットGGUFモデルを照会し、HTTP Range再開機能でダウンロードして即座に推論を実行します：",
    "zh": "查询已验证的 1.58 位 GGUF 模型，基于 HTTP 断点续传极速下载并立即执行推理：",
    "vi": "Truy vấn các mô hình GGUF 1.58-bit đã được xác minh, tải xuống với hỗ trợ tiếp tục HTTP và thực thi suy luận ngay lập tức:",
    "fr": "Interrogez les modèles GGUF 1,58 bit vérifiés, téléchargez avec reprise HTTP et exécutez une inférence instantanée :",
    "de": "Fragen Sie verifizierte 1,58-Bit-GGUF-Modelle ab, laden Sie sie mit HTTP-Fortsetzung herunter und führen Sie Inferenz aus:",
    "es": "Consulte modelos GGUF de 1,58 bits verificados, descargue con reanudación HTTP y ejecute inferencia instantánea:",
    "ru": "Запрашивайте проверенные 1.58-битные модели GGUF, скачивайте с докачкой по HTTP и мгновенно выполняйте инференс:",
    "ar": "استعلم عن نماذج GGUF بدقة 1.58 بت، وقم بالتنزيل مع دعم استئناف HTTP، ونفذ الاستنتاج الفوري:",
    "hi": "सत्यापित 1.58-बिट GGUF मॉडल खोजें, HTTP रेंज फिर से शुरू करने के साथ डाउनलोड करें, और तुरंत अनुमान लगाएं:",
    "pl": "Wyszukuj zweryfikowane modele GGUF 1,58-bit, pobieraj ze wznawianiem HTTP i wykonuj natychmiastowe wnioskowanie:",
    "la": "Inquire modella GGUF 1.58-bit probata, deprome cum continuatione HTTP et inferentiam instantaneam fac:",
    "en": "Query verified 1.58-bit GGUF models, download with HTTP Range resume support, and execute instant inference:"
  },
  "Recipe 2: Python SDK Token Streaming": {
    "ko": "레시피 2: Python SDK 비동기 토큰 스트리밍",
    "ja": "レシピ2：Python SDKトークンストリーミング",
    "zh": "范式 2：Python SDK 异步 Token 流式生成",
    "vi": "Công thức 2: Truyền phát mã thông báo SDK Python",
    "fr": "Recette 2 : Streaming de Jetons Python SDK",
    "de": "Rezept 2: Python SDK Token-Streaming",
    "es": "Receta 2: Transmisión de Tokens de Python SDK",
    "ru": "Рецепт 2: Потоковая передача токенов в Python SDK",
    "ar": "الوصفة 2: تدفق الرموز عبر Python SDK",
    "hi": "रेसिपी 2: पायथन एसडीके टोकन स्ट्रीमिंग",
    "pl": "Przepis 2: Strumieniowanie tokenów w Python SDK",
    "la": "Formula 2: Python SDK Token Streaming",
    "en": "Recipe 2: Python SDK Token Streaming"
  },
  "Stream generated tokens asynchronously with context manager memory cleanup:": {
    "ko": "컨텍스트 매니저 메모리 자동 정리를 통해 생성된 토큰을 비동기식으로 스트리밍합니다:",
    "ja": "コンテキストマネージャーのメモリ自動クリーンアップを使用して、生成されたトークンを非同期にストリーミングします：",
    "zh": "借助上下文管理器自动清理内存，异步流式输出生成的 Token：",
    "vi": "Truyền phát các mã thông báo được tạo không đồng bộ với dọn dẹp bộ nhớ của trình quản lý ngữ cảnh:",
    "fr": "Diffusez les jetons générés de manière asynchrone avec nettoyage de la mémoire par le gestionnaire de contexte :",
    "de": "Streamen Sie generierte Tokens asynchron mit Speicherbereinigung durch den Kontextmanager:",
    "es": "Transmita tokens generados de forma asíncrona con limpieza de memoria del administrador de contexto:",
    "ru": "Асинхронно передавайте сгенерированные токены с очисткой памяти через контекстный менеджер:",
    "ar": "قم ببث الرموز التي تم إنشاؤها بشكل غير متزامن مع تنظيف ذاكرة مدير السياق:",
    "hi": "संदर्भ प्रबंधक मेमोरी सफाई के साथ एसिंक्रोनस रूप से उत्पन्न टोकन स्ट्रीम करें:",
    "pl": "Strumieniuj wygenerowane tokeny asynchronicznie z czyszczeniem pamięci przez menedżera kontekstu:",
    "la": "Effunde token generata asynchronice cum purgatione memoriae procuratoris contextus:",
    "en": "Stream generated tokens asynchronously with context manager memory cleanup:"
  },
  "1-Line Quick Installation": {
    "ko": "1줄 빠른 설치",
    "ja": "1行クイックインストール",
    "zh": "一行命令快速安装",
    "vi": "Cài đặt nhanh 1 dòng",
    "fr": "Installation Rapide en 1 Ligne",
    "de": "1-Zeilen-Schnellinstallation",
    "es": "Instalación Rápida en 1 Línea",
    "ru": "Быстрая установка в 1 строку",
    "ar": "تثبيت سريع بسطر واحد",
    "hi": "1-라인 त्वरित स्थापना",
    "pl": "Szybka instalacja w 1 linijce",
    "la": "Institutio Celeris 1-Lineae",
    "en": "1-Line Quick Installation"
  },
  "Install the official package directly into your runtime:": {
    "ko": "공식 패키지를 런타임 환경에 직접 설치하십시오:",
    "ja": "公式パッケージを実行環境に直接インストールします：",
    "zh": "直接将官方包安装至您的运行环境：",
    "vi": "Cài đặt gói chính thức trực tiếp vào môi trường chạy của bạn:",
    "fr": "Installez le paquet officiel directement dans votre environnement d'exécution :",
    "de": "Installieren Sie das offizielle Paket direkt in Ihrer Laufzeitumgebung:",
    "es": "Instale el paquete oficial directamente en su entorno de ejecución:",
    "ru": "Установите официальный пакет напрямую в вашу среду выполнения:",
    "ar": "قم بتثبيت الحزمة الرسمية مباشرة في بيئة التشغيل الخاصة بك:",
    "hi": "आधिकारिक पैकेज सीधे अपने रनटाइम में स्थापित करें:",
    "pl": "Zainstaluj oficjalny pakiet bezpośrednio w środowisku uruchomieniowym:",
    "la": "Installa sarcinam officialem directe in ambitum tuum:",
    "en": "Install the official package directly into your runtime:"
  },
  "The Engineering Challenge": {
    "ko": "기술적 당면 과제",
    "ja": "エンジニアリング上の課題",
    "zh": "工程挑战与背景",
    "vi": "Thách thức kỹ thuật",
    "fr": "Le Défi d'Ingénierie",
    "de": "Die technische Herausforderung",
    "es": "El Desafío de Ingeniería",
    "ru": "Инженерная задача",
    "ar": "التحدي الهندسي",
    "hi": "इंजीनियरिंग चुनौती",
    "pl": "Wyzwanie inżynieryjne",
    "la": "Provocatio Ingeniaria",
    "en": "The Engineering Challenge"
  },
  "The Architectural Breakthrough": {
    "ko": "아키텍처 혁신 및 해결책",
    "ja": "アーキテクチャのブレークスルー",
    "zh": "架构突破与创新",
    "vi": "Đột phá kiến trúc",
    "fr": "La Percée Architecturale",
    "de": "Der architektonische Durchbruch",
    "es": "El Avance Arquitectónico",
    "ru": "Архитектурный прорыв",
    "ar": "الإنجاز المعماري",
    "hi": "वास्तुकला संबंधी सफलता",
    "pl": "Przełom architektoniczny",
    "la": "Progressus Architecturalis",
    "en": "The Architectural Breakthrough"
  },
  "Key Capabilities & Built-in Hardening": {
    "ko": "핵심 역량 및 빌트인 안정화 계층",
    "ja": "主要機能と組み込み의 強化",
    "zh": "核心能力与内建安全加固",
    "vi": "Khả năng chính & Tăng cường tích hợp",
    "fr": "Capacités Clés & Renforcement Intégré",
    "de": "Hauptfunktionen & integrierte Härtung",
    "es": "Capacidades Clave y Fortalecimiento Integrado",
    "ru": "Ключевые возможности и встроенная защита",
    "ar": "القدرات الرئيسية والحماية المدمجة",
    "hi": "प्रमुख क्षमताएं और सुरक्षा",
    "pl": "Kluczowe możliwości i wbudowane zabezpieczenia",
    "la": "Capacitates Principales et Firmitas",
    "en": "Key Capabilities & Built-in Hardening"
  }
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

    _setTextPreservingChildren(el, newText) {
      if (!el) return;
      // If element has no child nodes, simple textContent
      if (el.childNodes.length === 0) {
        el.textContent = newText;
        return;
      }
      // If element has a first text node (e.g. <h3>Document Navigation <span class="accordion-icon">▾</span></h3>)
      let foundTextNode = false;
      for (let i = 0; i < el.childNodes.length; i++) {
        const node = el.childNodes[i];
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0) {
          node.nodeValue = newText + ' ';
          foundTextNode = true;
          break;
        }
      }
      if (!foundTextNode) {
        el.textContent = newText;
      }
    }

    _getTextOnly(el) {
      if (!el) return '';
      for (let i = 0; i < el.childNodes.length; i++) {
        const node = el.childNodes[i];
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0) {
          return node.nodeValue.trim();
        }
      }
      return el.textContent.trim();
    }

    applyLanguage(lang) {
      const dict = this.translations[lang] || this.translations[DEFAULT_LANG] || {};
      const ctx = this._getCurrentContext();
      const libData = LIB_TRANSLATIONS[ctx];

      // ── 1. Translate Sidebar Tier 1 (ONLY Tier 1: Navigation & Links) ─────────
      const sidebar = document.querySelector('nav.sidebar');
      if (sidebar) {
        // Tier 1 Header
        const tier1H3 = sidebar.querySelector('h3:nth-of-type(1)');
        if (tier1H3) {
          const origH3 = tier1H3.dataset.i18nOrig || this._getTextOnly(tier1H3);
          if (!tier1H3.dataset.i18nOrig) tier1H3.dataset.i18nOrig = origH3;
          if (PHRASES_DB[origH3]) {
            const trans = (lang === 'en') ? origH3 : (PHRASES_DB[origH3][lang] || origH3);
            this._setTextPreservingChildren(tier1H3, trans);
          }
        }

        // Tier 1 Links (ONLY <a> inside first <ul>)
        const tier1Ul = sidebar.querySelector('ul:nth-of-type(1)');
        if (tier1Ul) {
          tier1Ul.querySelectorAll('a').forEach(a => {
            const origLink = a.dataset.i18nOrig || a.textContent.trim();
            if (!a.dataset.i18nOrig) a.dataset.i18nOrig = origLink;
            if (PHRASES_DB[origLink]) {
              const trans = (lang === 'en') ? origLink : (PHRASES_DB[origLink][lang] || origLink);
              a.textContent = trans;
            }
          });
        }

        // Tier 2 & Tier 3 Headers and Links MUST ALWAYS BE ENGLISH
        const tier2H3 = sidebar.querySelector('h3:nth-of-type(2)');
        if (tier2H3) this._setTextPreservingChildren(tier2H3, 'Flagship Libraries');

        const tier3H3 = sidebar.querySelector('h3:nth-of-type(3)');
        if (tier3H3) this._setTextPreservingChildren(tier3H3, 'AI Agent Protocols');
      }

      // ── 2. Translate Main Content Leaf Elements ──────────────────────────────
      const main = document.querySelector('main.content') || document.querySelector('.content');
      if (main) {
        const contentElements = main.querySelectorAll('h1, h2, h3, h4, h5, h6, p, th, td, span, a, button, div.alert-title, span.alert-title, [data-i18n]');
        contentElements.forEach(el => {
          // Skip code blocks, pre blocks, scripts, styles
          if (el.closest('pre, code, script, style, textarea, input, select')) return;
          // Skip container elements that have block children
          if (el.querySelector('p, h1, h2, h3, h4, h5, h6, pre, div, table, ul, ol')) return;

          const origText = el.dataset.i18nOrig || el.textContent.trim();
          if (!el.dataset.i18nOrig && origText) {
            el.dataset.i18nOrig = origText;
          }

          const i18nKey = el.getAttribute('data-i18n');

          // Deep library metadata translations (Challenge, Breakthrough, Subtitle, Features)
          if (libData && i18nKey) {
            if (i18nKey === 'home.challengeText' && libData.challenge) {
              const val = (lang === 'en') ? origText : (libData.challenge[lang] || libData.challenge['en'] || origText);
              if (val && el.textContent.trim() !== val) el.textContent = val;
              return;
            }
            if (i18nKey === 'home.breakthroughText' && libData.breakthrough) {
              const val = (lang === 'en') ? origText : (libData.breakthrough[lang] || libData.breakthrough['en'] || origText);
              if (val && el.textContent.trim() !== val) el.textContent = val;
              return;
            }
            if ((i18nKey === 'home.subtitle' || i18nKey === 'home.heroSubtitle') && libData.subtitles) {
              const val = (lang === 'en') ? origText : (libData.subtitles[lang] || libData.subtitles['en'] || origText);
              if (val && el.textContent.trim() !== val) el.textContent = val;
              return;
            }
            const featMatch = i18nKey.match(/^home\.features\.([0-9]+)\.(title|desc)$/);
            if (featMatch && libData.features) {
              const fIdx = parseInt(featMatch[1], 10);
              const fField = featMatch[2];
              if (libData.features[fIdx] && libData.features[fIdx][fField]) {
                const val = (lang === 'en') ? origText : (libData.features[fIdx][fField][lang] || libData.features[fIdx][fField]['en'] || origText);
                if (val && el.textContent.trim() !== val) el.textContent = val;
                return;
              }
            }
          }

          // Exact PHRASES_DB Translation Lookup
          if (PHRASES_DB[origText]) {
            const entry = PHRASES_DB[origText];
            const trans = (lang === 'en') ? origText : (entry[lang] || entry['en'] || origText);
            if (trans && el.textContent.trim() !== trans) {
              el.textContent = trans;
            }
            return;
          }

          // [data-i18n] Attribute Lookup
          if (i18nKey) {
            const val = this._lookup(dict, i18nKey);
            if (val !== undefined && val !== null && typeof val === 'string') {
              el.textContent = val;
              return;
            }
          }

          // English Fallback
          if (lang === 'en' && origText && el.textContent.trim() !== origText) {
            el.textContent = origText;
          }
        });
      }

      // ── 3. Synchronize Language Dropdown Selectors ───────────────────────────
      document.querySelectorAll('.lang-select').forEach(sel => {
        sel.value = lang;
      });
    }

    _setupLanguageSelectors() {
      const optionsHtml = Object.values(SUPPORTED_LANGUAGES).map(l => 
        `<option value="${l.code}">${l.flag} ${l.nativeName}</option>`
      ).join('');

      if (typeof document !== 'undefined') {
        document.querySelectorAll('.lang-selector-wrapper').forEach(wrap => {
          let sel = wrap.querySelector('.lang-select');
          if (!sel) {
            sel = document.createElement('select');
            sel.className = 'lang-select';
            sel.setAttribute('aria-label', 'Language Selector');
            wrap.appendChild(sel);
          }
          sel.innerHTML = optionsHtml;
          sel.value = this.currentLang;
          sel.onchange = (e) => this.setLanguage(e.target.value);
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
            sel.value = this.currentLang;
            sel.onchange = (e) => this.setLanguage(e.target.value);
            wrap.appendChild(sel);
            controls.insertBefore(wrap, controls.firstChild);
          }
        }
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
    module.exports = { UniversalI18nEngine, i18n, SUPPORTED_LANGUAGES, LIB_TRANSLATIONS, PHRASES_DB };
  }

})(typeof window !== 'undefined' ? window : global);
