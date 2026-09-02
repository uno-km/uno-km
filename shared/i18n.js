/**
 * AMEVA Ecosystem - Master Universal Multilingual (i18n) Core Engine (SSOT v7.0)
 * 100% Deterministic Immutable DOM Multi-Pass Engine across 13 Languages with Protected Header Controls & Global Subpage Translations.
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

  const PROTECTED_PHRASES = new Set(["Termux-Playwright (Automation)", "llms.txt", "Termux-BitNet", "Founder CV", "Foundation", "llms-full.txt", "sitemap.xml (Sitemap)", "Termux-Train (LoRA Engine)", "Termux-AIChain (Zero-Dep Agent)", "Open Collective", "npm", "Termux-Vision (CV & VLM)", "Termux-STT (Voice STT)", "Termux-BitNet (1.58-bit LLM)", "Node.js (npm)", "AMEVA-Sentinel", "AMEVA Workstation (Web App)", "AMEVA-Forge", "Sponsor", "Termux-Vision", "Termux-Playwright", "Termux-LlamaCpp", "AMEVA-Vulkan-Runtime", "AMEVA-MCP-Hub (Polyglot WASM)", "llms-full.txt (Full Spec)", "GitHub", "Termux-Diffusion", "Termux-Train", "AMEVA-Vulkan-Runtime (Vulkan HAL)", "robots.txt (AI Crawlers)", "Termux-TTS (Voice Synthesis)", "Blog", "AMEVA-MCP-Hub", "Infra-Index", "pip / npm", "Termux-TTS", "AMEVA-Forge (WebGPU Autograd)", "Termux-STT", "Termux-Diffusion (Image AI)", "Termux-LlamaCpp (GGUF Runtime)", "Termux-AIChain", "llms.txt (AI Fast Context)", "AMEVA-Sentinel (Security SDK)", "robots.txt", "pip", "Python (pip)", "sitemap.xml"]);
  const LIB_TRANSLATIONS = {
  "vulkan": {
    "subtitles": {
      "en": "Unified Cross-Modal Vulkan GPU Acceleration Runtime & HAL for Mobile Android",
      "ko": "모바일 안드로이드를 위한 통합 크로스 모달 Vulkan GPU 가속 런타임 및 하드웨어 추상화 계층(HAL)",
      "ja": "モバイルAndroid向け統合クロスモーダルVulkan GPUアクセラレーションランタイム＆HAL",
      "zh": "适用于移动端 Android 的统一跨模态 Vulkan GPU 硬件加速运行时与硬件抽象层 (HAL)",
      "vi": "Thời gian chạy và HAL tăng tốc GPU Vulkan đa phương thức cho Android di động",
      "fr": "Runtime et HAL d'accélération GPU Vulkan cross-modal pour Android mobile",
      "de": "Cross-modale Vulkan GPU-Beschleunigungslaufzeit und HAL für mobiles Android",
      "es": "Entorno de ejecución y HAL de aceleración de GPU Vulkan para Android móvil",
      "ru": "Кросс-модальная среда ускорения на Vulkan GPU и HAL для мобильного Android",
      "ar": "بيئة تشغيل وتسريع Vulkan GPU متعددة الوسائط ونظام HAL لنظام Android",
      "hi": "मोबाइल एंड्रॉइड के लिए एकीकृत क्रॉस-मॉडल वल्कन जीपीयू त्वरण रनटाइम और एचएएल",
      "pl": "Wielomodułowe środowisko uruchomieniowe akceleracji GPU Vulkan i HAL dla Androida",
      "la": "Syntaxis accelerationis GPU Vulkan trans-suggestum pro Android mobili"
    },
    "challenge": {
      "en": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages.",
      "ko": "모바일 안드로이드 환경에서 멀티모달 AI를 실행할 때 파편화된 GPU 드라이버, Bionic과 Mesa 간 로더 충돌, 텐서 정렬 버퍼 오버플로우, 개별 패키지별 중복 바이너리 비대화 문제가 발생합니다.",
      "ja": "モバイルAndroid環境でマルチモーダルAIを実行する際、断片化されたGPUドライバ、BionicとMesa間のローダークラッシュ、テンソルアライメントバッファのオーバーフロー、重複バイナリの肥大化が課題となります。",
      "zh": "在移动端 Android 上运行多模态 AI 面临碎片化的 GPU 驱动、Bionic 与 Mesa 之间的加载器崩溃、张量对齐缓冲区溢出以及独立包之间的冗余二进制膨胀问题。",
      "vi": "Chạy AI đa phương thức trên Android di động gặp phải tình trạng phân mảnh trình điều khiển GPU, xung đột tải giữa Bionic và Mesa, tràn bộ đệm căn chỉnh tensor và phình to tệp nhị phân trùng lặp.",
      "fr": "L'exécution de l'IA multimodale sur Android mobile est entravée par des pilotes GPU fragmentés, des plantages de chargeur entre Bionic et Mesa et des dépassements de tampon.",
      "de": "Die Ausführung multimodaler KI auf mobilem Android leidet unter fragmentierten GPU-Treibern, Ladekonflikten zwischen Bionic und Mesa und Pufferüberläufen.",
      "es": "Ejecutar IA multimodal en Android móvil se ve afectado por controladores de GPU fragmentados, fallos del cargador entre Bionic y Mesa y desbordamientos de búfer.",
      "ru": "Запуск мультимодального ИИ на мобильном Android страдает от фрагментированных драйверов GPU, сбоев загрузчика между Bionic и Mesa и переполнения буфера.",
      "ar": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages.",
      "hi": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages.",
      "pl": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages.",
      "la": "Running multi-modal AI on mobile Android is plagued by fragmented GPU drivers, loader crashes between Bionic and Mesa, tensor alignment buffer overflows, and redundant binary bloat across individual packages."
    },
    "breakthrough": {
      "en": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "ko": "STT, Vision, LLM, Diffusion, Training을 아우르는 단일 C++20 Vulkan 하드웨어 추상화 계층(HAL)과 범용 런타임을 제공하며, 12단계 정밀 검증 계층(V0-V11) 및 무손실 자동 복구 기능을 갖추고 있습니다.",
      "ja": "STT、Vision、LLM、Diffusion、Trainingを包括する単一のC++20 Vulkanハードウェア抽象化層（HAL）と汎用ランタイムを提供し、12段階の検証階層（V0-V11）とデータ損失ゼロの自動復旧を実現します。",
      "zh": "提供单一、零硬编码的 C++20 Vulkan 硬件抽象层 (HAL) 与通用运行时，统一支持 STT、视觉、大模型、扩散生成与训练，具备 12 级精细验证体系 (V0-V11) 与零数据丢失自动恢复机制。",
      "vi": "Cung cấp một Lớp trừu tượng phần cứng (HAL) Vulkan C++20 duy nhất và thời gian chạy phổ quát cho STT, Vision, LLM, Diffusion và Training với phân cấp xác thực 12 giai đoạn (V0-V11).",
      "ar": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "fr": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "de": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "es": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "hi": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
      "ru": "Provides a single, zero-hardcoded C++20 Vulkan Hardware Abstraction Layer (HAL) and universal runtime for STT, Vision, LLM, Diffusion, and Training with a granular 12-stage validation hierarchy (V0-V11) and zero-data-loss auto-recovery.",
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
          "vi": "Ghim chuỗi tải đơn",
          "ar": "Single Loader Chain Pinning",
          "fr": "Single Loader Chain Pinning",
          "de": "Single Loader Chain Pinning",
          "es": "Single Loader Chain Pinning",
          "hi": "Single Loader Chain Pinning",
          "ru": "Single Loader Chain Pinning",
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
          "ja": "12段階のハードウェア診断とフォールバック",
          "zh": "12 级硬件探测与优雅降级",
          "vi": "Thử nghiệm & Dự phòng 12 giai đoạn",
          "ar": "12-Stage Probing & Fallback",
          "fr": "12-Stage Probing & Fallback",
          "de": "12-Stage Probing & Fallback",
          "es": "12-Stage Probing & Fallback",
          "hi": "12-Stage Probing & Fallback",
          "ru": "12-Stage Probing & Fallback",
          "pl": "12-Stage Probing & Fallback",
          "la": "12-Stage Probing & Fallback"
        },
        "desc": {
          "en": "Validates GPU capability from dlopen (V0) to E2E model inference (V11) with transparent CPU NEON recovery.",
          "ko": "dlopen(V0)부터 종단간 모델 추론(V11)까지 GPU 역량을 단계별로 검증하며 CPU NEON 백엔드로 안전하게 자동 전환합니다.",
          "ja": "dlopen（V0）からE2E推論（V11）までGPU能力を検証し、CPU NEONフォールバックで安全に自動復旧します。",
          "zh": "从 dlopen (V0) 到端到端模型推理 (V11) 逐级验证 GPU 能力，并在异常时透明无缝降级至 CPU NEON 恢复。",
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
          "ja": "マルチモーダル統合アクセラレーション",
          "zh": "多模态跨架构联合加速",
          "vi": "Tăng tốc chéo đa phương thức",
          "ar": "Multi-Modal Cross-Acceleration",
          "fr": "Multi-Modal Cross-Acceleration",
          "de": "Multi-Modal Cross-Acceleration",
          "es": "Multi-Modal Cross-Acceleration",
          "hi": "Multi-Modal Cross-Acceleration",
          "ru": "Multi-Modal Cross-Acceleration",
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
      "en": "Ultra-Fast 1.58-Bit Quantized Large Language Model Inference Engine for Mobile ARM64",
      "ko": "모바일 ARM64 하드웨어를 위한 초고속 1.58비트 양자화 대규모 언어 모델(LLM) 추론 엔진",
      "ja": "モバイルARM64向け超高速1.58ビット量子化大規模言語モデル（LLM）推論エンジン",
      "zh": "适用于移动端 ARM64 架构的超高速 1.58 位量化大语言模型 (LLM) 推理引擎",
      "vi": "Công cụ suy luận mô hình ngôn ngữ lớn (LLM) lượng tử hóa 1.58-bit siêu nhanh cho ARM64 di động",
      "fr": "Moteur d'inférence LLM quantifié 1,58 bit ultra-rapide pour ARM64 mobile",
      "de": "Ultraschnelle 1,58-Bit-quantisierte LLM-Inferenz-Engine für mobiles ARM64",
      "es": "Motor de inferencia LLM cuantizado de 1,58 bits ultrarrápido para ARM64 móvil",
      "ru": "Сверхбыстрый 1.58-битный квантованный движок вывода LLM для мобильного ARM64",
      "ar": "Ultra-Fast 1.58-Bit Quantized Large Language Model Inference Engine for Mobile ARM64",
      "hi": "Ultra-Fast 1.58-Bit Quantized Large Language Model Inference Engine for Mobile ARM64",
      "pl": "Ultra-Fast 1.58-Bit Quantized Large Language Model Inference Engine for Mobile ARM64",
      "la": "Ultra-Fast 1.58-Bit Quantized Large Language Model Inference Engine for Mobile ARM64"
    },
    "challenge": {
      "en": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "ko": "모바일 CPU 환경에서 표준 FP16/INT4 대규모 언어 모델(LLM)을 실행하면 극심한 메모리 대역폭 병목, 발열 스로틀링, 15W를 초과하는 심각한 배터리 소모가 발생합니다.",
      "ja": "モバイルCPU環境で標準のFP16/INT4大規模言語モデル（LLM）を実行すると、極端なメモリ帯域幅のボトルネック、サーマルスロットリング、15Wを超える激しいバッテリー消費が発生します。",
      "zh": "在移动 CPU 架构上运行标准 FP16/INT4 大语言模型推理时，面临极端的内存带宽瓶颈、发热降频以及超过 15W 的严重功耗消耗。",
      "vi": "Suy luận LLM FP16/INT4 tiêu chuẩn trên CPU di động gặp phải tắc nghẽn băng thông bộ nhớ nghiêm trọng, quá nhiệt và tiêu hao pin vượt quá 15W.",
      "ar": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "fr": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "de": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "es": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "hi": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "ru": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "pl": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W.",
      "la": "Standard FP16/INT4 LLM inference on mobile CPU architectures encounters extreme memory bandwidth bottlenecks, thermal throttling, and severe battery drain exceeding 15W."
    },
    "breakthrough": {
      "en": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "ko": "수작업 최적화된 ARM64 NEON 어셈블리 커널을 통해 1.58비트 3진 양자화 가중치{-1, 0, +1}를 직접 연산하여 행렬 곱셈을 정수 덧셈/뺄셈으로 치환하고 350MB 미만의 메모리 점유율을 달성합니다.",
      "ja": "手動最適化されたARM64 NEONアセンブリカーネルを介して1.58ビット3値量子化重み{-1, 0, +1}を直接計算し、行列乗算を整数の加減算に削減して350MB未満のRAM消費を実現します。",
      "zh": "通过手工优化的 ARM64 NEON 汇编内核直接执行 1.58 位三值量化权重 {-1, 0, +1}，将矩阵乘法完全简化为纯整数加减法，内存占用控制在 350MB 以内。",
      "vi": "Thực thi trực tiếp các trọng số lượng tử hóa bậc ba 1.58-bit {-1, 0, +1} thông qua các hạt nhân lắp ráp ARM64 NEON được vector hóa thủ công, giảm mức chiếm dụng RAM xuống dưới 350MB.",
      "ar": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "fr": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "de": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "es": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "hi": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "ru": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "pl": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint.",
      "la": "Executes 1.58-bit ternary quantized weights {-1, 0, +1} directly via hand-vectorized ARM64 NEON assembly kernels, reducing matrix multiplications to integer additions and subtractions with under 350MB RAM footprint."
    },
    "features": [
      {
        "title": {
          "en": "1.58-Bit Ternary DotProd Acceleration",
          "ko": "1.58비트 3진 DotProd 가속",
          "ja": "1.58ビット3値DotProd高速化",
          "zh": "1.58 位三值点积硬件加速",
          "vi": "Tăng tốc DotProd bậc ba 1.58-bit",
          "ar": "1.58-Bit Ternary DotProd Acceleration",
          "fr": "1.58-Bit Ternary DotProd Acceleration",
          "de": "1.58-Bit Ternary DotProd Acceleration",
          "es": "1.58-Bit Ternary DotProd Acceleration",
          "hi": "1.58-Bit Ternary DotProd Acceleration",
          "ru": "1.58-Bit Ternary DotProd Acceleration",
          "pl": "1.58-Bit Ternary DotProd Acceleration",
          "la": "1.58-Bit Ternary DotProd Acceleration"
        },
        "desc": {
          "en": "Replaces multiplication with integer additions using ARM64 dot-product vector SIMD instructions.",
          "ko": "ARM64 dot-product 벡터 SIMD 명령어를 활용하여 부동소수점 곱셈을 고속 정수 덧셈으로 대체합니다.",
          "ja": "ARM64 dot-productベクトルSIMD命令を使用して、乗算を高速な整数加算に置き換えます。",
          "zh": "利用 ARM64 点积向量 SIMD 指令集，将繁重的浮点乘法彻底替换为极致高效的整数累加。",
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
          "ja": "PRoot不要のネイティブBionic実行",
          "zh": "零 PRoot 原生 Bionic 执行",
          "vi": "Thực thi Bionic gốc không cần PRoot",
          "ar": "Zero-PRoot Native Bionic Execution",
          "fr": "Zero-PRoot Native Bionic Execution",
          "de": "Zero-PRoot Native Bionic Execution",
          "es": "Zero-PRoot Native Bionic Execution",
          "hi": "Zero-PRoot Native Bionic Execution",
          "ru": "Zero-PRoot Native Bionic Execution",
          "pl": "Zero-PRoot Native Bionic Execution",
          "la": "Zero-PRoot Native Bionic Execution"
        },
        "desc": {
          "en": "Direct execution on Android Bionic libc without Linux PRoot containers or root privileges.",
          "ko": "리눅스 PRoot 컨테이너나 루팅 권한 없이 Android Bionic libc 위에서 직접 네이티브로 실행됩니다.",
          "ja": "Linux PRootコンテナやroot権限なしで、Android Bionic libc上で直接実行されます。",
          "zh": "无需任何 Linux PRoot 容器或 Root 权限，直接在 Android Bionic libc 底层以原生速度执行。",
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
          "ja": "Python＆Node.jsデュアルエンジンゲートウェイ",
          "zh": "Python 与 Node.js 双引擎网关",
          "vi": "Cổng kết nối kép Python & Node.js",
          "ar": "Dual-Engine Python & Node.js Gateways",
          "fr": "Dual-Engine Python & Node.js Gateways",
          "de": "Dual-Engine Python & Node.js Gateways",
          "es": "Dual-Engine Python & Node.js Gateways",
          "hi": "Dual-Engine Python & Node.js Gateways",
          "ru": "Dual-Engine Python & Node.js Gateways",
          "pl": "Dual-Engine Python & Node.js Gateways",
          "la": "Dual-Engine Python & Node.js Gateways"
        },
        "desc": {
          "en": "Ultra-low overhead thin FFI bindings for both Python 3.8+ and Node.js 18+ runtimes with independent CLI namespaces.",
          "ko": "독립된 CLI 네임스페이스와 함께 Python 3.8+ 및 Node.js 18+ 런타임 모두를 위한 초경량 FFI 바인딩을 제공합니다.",
          "ja": "独立したCLI名前空間を備え、Python 3.8+およびNode.js 18+ランタイム向けの超低オーバーヘッドFFIバインディングを提供します。",
          "zh": "为 Python 3.8+ 和 Node.js 18+ 运行时提供极低开销的轻量级 FFI 绑定与独立的 CLI 命名空间。",
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
          "ja": "超低消費電力エッジ展開",
          "zh": "极低能耗端侧部署",
          "vi": "Triển khai biên tiết kiệm năng lượng",
          "ar": "Energy-Efficient Edge Deployment",
          "fr": "Energy-Efficient Edge Deployment",
          "de": "Energy-Efficient Edge Deployment",
          "es": "Energy-Efficient Edge Deployment",
          "hi": "Energy-Efficient Edge Deployment",
          "ru": "Energy-Efficient Edge Deployment",
          "pl": "Energy-Efficient Edge Deployment",
          "la": "Energy-Efficient Edge Deployment"
        },
        "desc": {
          "en": "Continuous token generation consumes under 2.5W, enabling continuous 24/7 autonomous mobile operation.",
          "ko": "연속 토큰 생성 시 2.5W 미만의 전력을 소비하여 24시간 무중단 자율 모바일 운영을 실현합니다.",
          "ja": "継続的なトークン生成時の消費電力を2.5W未満に抑え、24時間365日の連続自律稼働を可能にします。",
          "zh": "连续 Token 生成功耗控制在 2.5W 以下，确保移动端设备实现 7x24 小时全天候长效自主运行。",
          "ar": "Continuous token generation consumes under 2.5W, enabling continuous 24/7 autonomous mobile operation.",
          "fr": "Continuous token generation consumes under 2.5W, enabling continuous 24/7 autonomous mobile operation.",
          "de": "Continuous token generation consumes under 2.5W, enabling continuous 24/7 autonomous mobile operation.",
          "es": "Continuous token generation consumes under 2.5W, enabling continuous 24/7 autonomous mobile operation.",
          "hi": "Continuous token generation consumes under 2.5W, enabling continuous 24/7 autonomous mobile operation.",
          "ru": "Continuous token generation consumes under 2.5W, enabling continuous 24/7 autonomous mobile operation.",
          "vi": "Continuous token generation consumes under 2.5W, enabling continuous 24/7 autonomous mobile operation.",
          "pl": "Continuous token generation consumes under 2.5W, enabling continuous 24/7 autonomous mobile operation.",
          "la": "Continuous token generation consumes under 2.5W, enabling continuous 24/7 autonomous mobile operation."
        }
      }
    ]
  }
};
  const PHRASES_DB = {
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
  "Flagship Libraries": {
    "ko": "플래그십 라이브러리",
    "ja": "フラグシップライブラリ",
    "zh": "旗舰开源库",
    "vi": "Thư viện hàng đầu",
    "fr": "Bibliothèques Phares",
    "de": "Flaggschiff-Bibliotheken",
    "es": "Bibliotecas Insignia",
    "ru": "Флагманские библиотеки",
    "ar": "المكتبات الرائدة",
    "hi": "फ्लैगशिप लाइब्रेरीज़",
    "pl": "Główne biblioteki",
    "la": "Bibliothecae Praecipuae",
    "en": "Flagship Libraries"
  },
  "AI Agent Protocols": {
    "ko": "AI 에이전트 프로토콜",
    "ja": "AIエージェントプロトコル",
    "zh": "AI 智能体交互协议",
    "vi": "Giao thức tác tử AI",
    "fr": "Protocoles d'Agents IA",
    "de": "KI-Agenten-Protokolle",
    "es": "Protocolos de Agentes de IA",
    "ru": "Протоколы ИИ-агентов",
    "ar": "بروتوكولات وكلاء الذكاء الاصطناعي",
    "hi": "AI एजेंट प्रोटोकॉल",
    "pl": "Protokoły agentów AI",
    "la": "Protocolla Agentium AI",
    "en": "AI Agent Protocols"
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
  "1-LINE QUICK INSTALLATION": {
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
    "en": "1-LINE QUICK INSTALLATION"
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
    "ja": "主要機能と組み込みの強化",
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
  },
  "Supported Compute Kernels & Operations": {
    "ko": "지원 연산 커널 및 실행 백엔드",
    "ja": "サポートされている計算カーネルと操作",
    "zh": "支持的计算内核与算子矩阵",
    "vi": "Các hạt nhân tính toán & Hoạt động được hỗ trợ",
    "fr": "Noyaux de Calcul et Opérations Pris en Charge",
    "de": "Unterstützte Rechenkerne & Operationen",
    "es": "Núcleos de Cómputo y Operaciones Compatibles",
    "ru": "Поддерживаемые вычислительные ядра и операции",
    "ar": "نواة الحوسبة والعمليات المدعومة",
    "hi": "समर्थित कंप्यूट कर्नेल और संचालन",
    "pl": "Obsługiwane jądra obliczeniowe i operacje",
    "la": "Nuclei Computationis et Operationes Toleratae",
    "en": "Supported Compute Kernels & Operations"
  },
  "Subsystem Category": {
    "ko": "하위 시스템 분류",
    "ja": "サブシステムカテゴリ",
    "zh": "子系统分类",
    "vi": "Danh mục hệ thống phụ",
    "fr": "Catégorie de Sous-système",
    "de": "Subsystem-Kategorie",
    "es": "Categoría de Subsistema",
    "ru": "Категория подсистемы",
    "ar": "فئة النظام الفرعي",
    "hi": "सबसिस्टम श्रेणी",
    "pl": "Kategoria podsystemu",
    "la": "Classis Subsystematis",
    "en": "Subsystem Category"
  },
  "Operations & Kernels": {
    "ko": "연산 및 커널 명세",
    "ja": "操作およびカーネル仕様",
    "zh": "算子与计算内核",
    "vi": "Hoạt động & Hạt nhân",
    "fr": "Opérations & Noyaux",
    "de": "Operationen & Kernel",
    "es": "Operaciones y Núcleos",
    "ru": "Операции и ядра",
    "ar": "العمليات والنواة",
    "hi": "संचालन और कर्नेल",
    "pl": "Operacje i jądra",
    "la": "Operationes et Nuclei",
    "en": "Operations & Kernels"
  },
  "Status": {
    "ko": "상태",
    "ja": "ステータス",
    "zh": "状态",
    "vi": "Trạng thái",
    "fr": "Statut",
    "de": "Status",
    "es": "Estado",
    "ru": "Статус",
    "ar": "الحالة",
    "hi": "स्थिति",
    "pl": "Status",
    "la": "Status",
    "en": "Status"
  },
  "Production": {
    "ko": "프로덕션",
    "ja": "本番環境",
    "zh": "生产就绪",
    "vi": "Sản xuất",
    "fr": "Production",
    "de": "Produktion",
    "es": "Producción",
    "ru": "Продакшн",
    "ar": "إنتاج",
    "hi": "उत्पादन",
    "pl": "Produkcja",
    "la": "Productio",
    "en": "Production"
  },
  "Production Release (Latest)": {
    "ko": "프로덕션 최신 릴리즈",
    "ja": "最新の安定版リリース",
    "zh": "最新正式生产发布",
    "vi": "Bản phát hành sản xuất (Mới nhất)",
    "fr": "Version de Production (Dernière)",
    "de": "Produktionsversion (Neueste)",
    "es": "Lanzamiento de Producción (Último)",
    "ru": "Промышленный релиз (Последний)",
    "ar": "إصدار الإنتاج (الأحدث)",
    "hi": "उत्पादन रिलीज़ (नवीनतम)",
    "pl": "Wydanie produkcyjne (Najnowsze)",
    "la": "Emissio Productionis (Novissima)",
    "en": "Production Release (Latest)"
  },
  "Canonical Usage Example": {
    "ko": "표준 사용 예제",
    "ja": "標準的な使用例",
    "zh": "标准用法示例",
    "vi": "Ví dụ sử dụng chuẩn",
    "fr": "Exemple d'Utilisation Canonique",
    "de": "Kanonisches Verwendungsbeispiel",
    "es": "Ejemplo de Uso Canónico",
    "ru": "Канонический пример использования",
    "ar": "مثال الاستخدام القياسي",
    "hi": "मानक उपयोग उदाहरण",
    "pl": "Standardowy przykład użycia",
    "la": "Exemplum Usus Canonicum",
    "en": "Canonical Usage Example"
  },
  "Getting Started & Deep Guides": {
    "ko": "시작하기 및 심층 기술 가이드",
    "ja": "入門と詳細ガイド",
    "zh": "快速入门与深度技术指南",
    "vi": "Bắt đầu & Hướng dẫn chuyên sâu",
    "fr": "Pour Commencer & Guides Approfondis",
    "de": "Erste Schritte & Ausführliche Anleitungen",
    "es": "Primeros Pasos y Guías Detalladas",
    "ru": "Начало работы и подробные руководства",
    "ar": "البدء وأدلة متعمقة",
    "hi": "शुरुआत और गहन गाइड",
    "pl": "Pierwsze kroki i szczegółowe przewodniki",
    "la": "Initium et Duces Profundi",
    "en": "Getting Started & Deep Guides"
  },
  "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)": {
    "ko": "상세 설치 가이드 (하드웨어 의존성, Termux 설정, WebGPU 플래그)",
    "ja": "詳細インストールガイド（ハードウェア依存関係、Termux設定、WebGPUフラグ）",
    "zh": "详细安装指南（硬件依赖项、Termux 配置、WebGPU 标志）",
    "vi": "Hướng dẫn cài đặt chi tiết (phần phụ thuộc phần cứng, thiết lập Termux)",
    "fr": "Guide d'installation détaillé (dépendances matérielles, configuration Termux)",
    "de": "Detaillierte Installationsanleitung (Hardware-Abhängigkeiten, Termux-Setup)",
    "es": "Guía de instalación detallada (dependencias de hardware, configuración de Termux)",
    "ru": "Подробное руководство по установке (зависимости оборудования, настройка Termux)",
    "ar": "دليل التثبيت التفصيلي (تبعيات الأجهزة، إعداد Termux)",
    "hi": "विस्तृत स्थापना गाइड (हार्डवेयर निर्भरताएं, Termux सेटअप)",
    "pl": "Szczegółowa instrukcja instalacji (zależności sprzętowe, konfiguracja Termux)",
    "la": "Dux institutionis accuratus (dependentiae instrumentorum, Termux)",
    "en": "Detailed Installation Guide (Hardware dependencies, Termux setup, WebGPU flags)"
  },
  "Quickstart Recipes & Common Execution Patterns": {
    "ko": "퀵스타트 레시피 & 공통 실행 패턴",
    "ja": "クイックスタートレシピ＆一般的な実行パターン",
    "zh": "快速上手示例与常用执行范式",
    "vi": "Công thức bắt đầu nhanh & Các mẫu thực thi phổ biến",
    "fr": "Recettes de démarrage rapide & modèles d'exécution courants",
    "de": "Schnellstart-Rezepte & gängige Ausführungsmuster",
    "es": "Recetas de inicio rápido y patrones de ejecución comunes",
    "ru": "Рецепты быстрого старта и типовые шаблоны выполнения",
    "ar": "أمثلة البدء السريع وأنماط التنفيذ الشائعة",
    "hi": "त्वरित शुरुआत रेसिपी और सामान्य निष्पादन पैटर्न",
    "pl": "Przepisy szybkiego startu i typowe wzorce wykonawcze",
    "la": "Exempla initii celeris et formae communes",
    "en": "Quickstart Recipes & Common Execution Patterns"
  },
  "100% Full API Reference & Struct Definitions": {
    "ko": "100% 전체 API 명세 및 구조체 정의",
    "ja": "100%完全なAPIリファレンスと構造体定義",
    "zh": "100% 完整 API 接口与结构体规范",
    "vi": "Tài liệu tham khảo API đầy đủ 100% & Định nghĩa cấu trúc",
    "fr": "Référence API complète à 100% et définitions de structures",
    "de": "100% vollständige API-Referenz & Strukturdefinitionen",
    "es": "Referencia de API 100% completa y definiciones de estructuras",
    "ru": "100% полный справочник API и определения структур",
    "ar": "مرجع API كامل 100% وتعاريف الهياكل",
    "hi": "100% पूर्ण API संदर्भ और संरचना परिभाषाएं",
    "pl": "100% pełna dokumentacja API i definicje struktur",
    "la": "Index API 100% plenus et definitiones structurarum",
    "en": "100% Full API Reference & Struct Definitions"
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

      if (typeof document !== 'undefined') {
        this._freezeOriginalTemplates();
      }

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

    _freezeOriginalTemplates() {
      const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, th, td, span, li, a, button, div.alert, [data-i18n]');
      elements.forEach(el => {
        if (el.querySelector('pre, code, input, select, textarea') || el.closest('pre, code, script, style')) {
          return;
        }
        const txt = el.textContent.trim();
        if (!el.dataset.i18nOrig && txt) {
          el.dataset.i18nOrig = txt;
        }
      });
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

    applyLanguage(lang) {
      const dict = this.translations[lang] || this.translations[DEFAULT_LANG] || {};
      const ctx = this._getCurrentContext();
      const libData = LIB_TRANSLATIONS[ctx];

      const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, th, td, span, li, a, button, [data-i18n]');
      elements.forEach(el => {
        if (el.querySelector('pre, code, input, select, textarea') || el.closest('pre, code, script, style')) {
          return;
        }

        const origText = el.dataset.i18nOrig || el.textContent.trim();
        if (!el.dataset.i18nOrig && origText) {
          el.dataset.i18nOrig = origText;
        }

        // 1. Top Header Controls & Buttons Protection (MUST REMAIN CLEAN ENGLISH)
        if (el.closest('header .header-controls a') || (el.closest('header .header-brand') && el.tagName === 'H1')) {
          if (el.textContent.trim() !== origText) el.textContent = origText;
          return;
        }

        // 2. Sidebar Flagship Libraries & AI Protocols Protection (MUST REMAIN IN ENGLISH)
        const parentLi = el.closest('nav.sidebar ul li');
        if (parentLi) {
          const isFlagship = el.closest('nav.sidebar')?.querySelector('h3[data-i18n="common.nav.libraries"]')?.nextElementSibling?.contains(el);
          const isAi = el.closest('nav.sidebar')?.querySelector('h3[data-i18n="common.nav.aiSpecs"]')?.nextElementSibling?.contains(el);
          if (isFlagship || isAi) {
            if (el.textContent.trim() !== origText) el.textContent = origText;
            return;
          }
        }

        // 3. Protected Exact Phrases
        if (PROTECTED_PHRASES.has(origText)) {
          if (el.textContent.trim() !== origText) el.textContent = origText;
          return;
        }

        // 4. Library-specific deep body translations (Challenge, Breakthrough, Features)
        const i18nKey = el.getAttribute('data-i18n');
        if (libData && i18nKey) {
          if (i18nKey === 'home.challengeText' && libData.challenge) {
            el.textContent = (lang === 'en') ? origText : (libData.challenge[lang] || libData.challenge['en'] || origText);
            return;
          }
          if (i18nKey === 'home.breakthroughText' && libData.breakthrough) {
            el.textContent = (lang === 'en') ? origText : (libData.breakthrough[lang] || libData.breakthrough['en'] || origText);
            return;
          }
          if ((i18nKey === 'home.subtitle' || i18nKey === 'home.heroSubtitle') && libData.subtitles) {
            el.textContent = (lang === 'en') ? origText : (libData.subtitles[lang] || libData.subtitles['en'] || origText);
            return;
          }
          const featMatch = i18nKey.match(/^home\.features\.([0-9]+)\.(title|desc)$/);
          if (featMatch && libData.features) {
            const fIdx = parseInt(featMatch[1], 10);
            const fField = featMatch[2];
            if (libData.features[fIdx] && libData.features[fIdx][fField]) {
              el.textContent = (lang === 'en') ? origText : (libData.features[fIdx][fField][lang] || libData.features[fIdx][fField]['en'] || origText);
              return;
            }
          }
        }

        // 5. Exact PHRASES_DB Translation Lookup
        if (PHRASES_DB[origText]) {
          const entry = PHRASES_DB[origText];
          const trans = (lang === 'en') ? origText : (entry[lang] || entry['en'] || origText);
          if (trans && el.textContent.trim() !== trans) {
            el.textContent = trans;
          }
          return;
        }

        // 6. [data-i18n] Attribute Lookup
        if (i18nKey) {
          const val = this._lookup(dict, i18nKey);
          if (val !== undefined && val !== null && typeof val === 'string') {
            el.textContent = val;
            return;
          }
        }

        // 7. English Default Fallback
        if (lang === 'en' && origText && el.textContent.trim() !== origText) {
          el.textContent = origText;
        }
      });

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
