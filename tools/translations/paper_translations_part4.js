// tools/translations/paper_translations_part4.js
// High-grade Academic English translations for Papers 47, 48, 49, 50, 51

export const PART4_TRANSLATIONS = {
  47: {
    title_eng: "[whisper.cpp #4089] Hybrid GPU-Encoder / CPU-Decoder Split-Mode Pipeline for Mobile Heterogeneous Computing",
    tags: "#whispercpp #UpstreamContribution #SplitMode #GPUEncoder #CPUDecoder #MobileSoCOptimization #OpenSourceResearch #TermuxAcceleration #EnergyEfficiency",
    content_eng: `# [whisper.cpp #4089] Hybrid GPU-Encoder / CPU-Decoder Split-Mode Pipeline for Mobile Heterogeneous Computing
### Technical Research Monograph Series: AOSF-TR-2026-UPSTREAM-WHISPER-4089

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**PR Status:** Open (Under Official Upstream Review)  
**PR Reference:** https://github.com/ggml-org/whisper.cpp/pull/4089  
**Target Repository:** ggml-org/whisper.cpp (Upstream Master)  
**Testbed Hardware:** Samsung Galaxy S21 5G (Exynos 2100, Mali-G78 GPU) & Galaxy S20 (Snapdragon 865, Adreno 650 GPU)  
**Compliance Standard:** MIT / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Problem Formulation
Monolithic execution paradigms in \`whisper.cpp\` present severe limitations on mobile System-on-Chips (SoCs):
1. **Pure CPU Execution:** High thermal dissipation and battery consumption during dense 2D spectrogram convolutions in the encoder.
2. **Pure GPU Execution (Vulkan):** Heavy kernel dispatch overhead and command submission latency during autoregressive token generation ($N=1$), degrading real-time performance.
3. **Thermal Throttling Cascades:** Sustained monolithic GPU loads trigger Android Thermal HAL throttling, cutting clock frequencies by up to 50%.

---

## 2. Proposed Architecture & Solution (\`--split-mode\`)

\`\`\`mermaid
flowchart TD
    Audio[Audio Input] --> Enc[Mel-Spectrogram 30s Window]
    Enc -->|Dense Parallelism| GPU[Mobile GPU: Vulkan Compute]
    GPU -->|Encoder Hidden States (Zero-Copy Bus)| CPU[Mobile CPU: ARM NEON FP16]
    CPU -->|Low-Latency Sequential GEMV| Dec[Autoregressive Decoder: N=1]
    Dec --> Text[Transcribed Tokens]
\`\`\`

We introduced a native \`--split-mode\` command-line parameter and runtime dispatcher:
- **Encoder Dispatch:** Fully offloaded to Vulkan compute units, maximizing matrix multiplication throughput.
- **Decoder Dispatch:** Evaluated on host CPU big-cores using optimized ARM NEON SIMD kernels, avoiding GPU submission latency.
- **Unified Memory Sharing:** Eliminates DMA overhead by operating directly over the SoC's unified physical memory address space.

---

## 3. Real-Device Empirical Verification & Benchmarks

| Device & Mode | Encoder Time | Decoder Time (per token) | Total Audio RTF | Peak Battery Draw |
| :--- | :--- | :--- | :--- | :--- |
| **Galaxy S21 (Pure CPU)** | 1,840 ms | 38.2 ms | 0.44 | 1,320 mA |
| **Galaxy S21 (Pure Vulkan)** | 620 ms | 46.8 ms | 0.38 | 1,180 mA |
| **Galaxy S21 (Split-Mode)** | **410 ms** | **18.4 ms** | **0.21** | **690 mA** |
| **Galaxy S20 (Split-Mode)** | **460 ms** | **21.2 ms** | **0.25** | **740 mA** |

---

## 4. Conclusion
The hybrid split-mode architecture achieves a 2.0x overall latency reduction while cutting power dissipation in half on production mobile SoCs. The pull request is actively maintained in upstream \`whisper.cpp\`.`
  },

  48: {
    title_eng: "[BitNet #551] Root-Cause Resolution of Tensor Corruption (Word Salad) on ARM Devices and Non-AVX2 Fallback Restoration in BitNet i2_s Quantization",
    tags: "#BitNet #UpstreamPR #ARMArchitecture #i2_sQuantization #TensorCorruptionFix #NonAVX2Fallback #1BitLLM #NumericalStability #OpenSourceContribution",
    content_eng: `# [BitNet #551] Root-Cause Resolution of Tensor Corruption (Word Salad) on ARM Devices and Non-AVX2 Fallback Restoration in BitNet i2_s Quantization
### Technical Research Monograph Series: AOSF-TR-2026-UPSTREAM-BITNET-551

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**PR Status:** Open (Validated by Global Community Benchmarks)  
**PR Reference:** https://github.com/microsoft/BitNet/pull/551  
**Target Repository:** microsoft/BitNet (Upstream Main)  
**Testbed Hardware:** Samsung Galaxy S25 (Snapdragon 8 Elite), Galaxy S21 (Exynos 2100), Oracle Cloud ARM Ampere A1  
**Compliance Standard:** MIT / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Problem Formulation
In Microsoft's official 1-bit LLM framework (\`microsoft/BitNet\`), deploying \`i2_s\` quantized models across non-AVX2 platforms (ARM64 mobile, Apple Silicon, legacy x86 CPUs) precipitated a fatal numerical defect:
1. **Deterministic "Word Salad" Generation:** Model executions yielded grammatically degraded sequences of non-sequiturs despite logging clean \`Exit Code: 0\` and normal velocity.
2. **Global Community Impact:** Multiple open issues (\`#468\`, \`#470\`) highlighted the issue on Oracle Cloud ARM servers without resolution.

---

## 2. Root Cause Forensic Analysis: Memory Layout Desynchronization
Disassembly revealed a critical disparity between the x86 packing routines and ARM unpacking macros:
- **QK Stride Discrepancy:** The x86 AVX2 packing stage compressed ternary weights assuming block dimensions of \`QK=128\` (32-byte stride). However, the \`__ARM_NEON\` unpacking logic was hardcoded to legacy \`QK=64\` (16-byte stride).
- **Out-of-Bounds Memory Corruption:** The ARM NEON kernel read beyond allocated block boundaries, polluting activation dot-products with arbitrary memory fragments.

\`\`\`c
// Fixed dynamic stride alignment:
#if defined(__ARM_NEON)
    // Synchronize block stride to QK=128 matching packing format
    const int stride = QK / 4; 
    for (int i = 0; i < nb; i += 4) {
        // Correct 128-element unrolled dot-product calculation
    }
#endif
\`\`\`

---

## 3. Empirical Verification Results

| Platform Architecture | Baseline Output | Post-Patch Output | Validation Status |
| :--- | :--- | :--- | :--- |
| **ARM64 (Galaxy S25)** | \`? 3. I, K, M1. If the...\` (Garbled) | **"The capital of South Korea is Seoul."** | **Pass (100% Text Restored)** |
| **ARM64 (Galaxy S21)** | Word Salad | **Coherent Natural Dialogue** | **Pass (100% Text Restored)** |
| **Non-AVX2 x86_64** | Crash / NaN | **Clean Scalar Fallback** | **Pass (Zero Aborts)** |

---

## 4. Conclusion
By synchronizing tensor packing memory layouts across heterogeneous architectures, this contribution restored cross-platform execution integrity for Microsoft BitNet on all ARM64 edge systems.`
  },

  49: {
    title_eng: "[BitNet #624] ARMv8.2-A NEON 1x4_32W sdot Hardware Acceleration Kernel Completion and Android Termux Toolchain for BitNet",
    tags: "#BitNet #ARMv82A #NEONAcceleration #sdotKernel #AndroidTermux #ToolchainOptimization #UpstreamPR #IntegerDotProduct #1_58BitInference",
    content_eng: `# [BitNet #624] ARMv8.2-A NEON 1x4_32W sdot Hardware Acceleration Kernel Completion and Android Termux Toolchain for BitNet
### Technical Research Monograph Series: AOSF-TR-2026-UPSTREAM-BITNET-624

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**PR Status:** Open (Under Official Upstream Review)  
**PR Reference:** https://github.com/microsoft/BitNet/pull/624  
**Target Repository:** microsoft/BitNet (Upstream Main)  
**Testbed Hardware:** Samsung Galaxy S25 (Snapdragon 8 Elite) & Samsung Galaxy A35 (Exynos 1380)  
**Compliance Standard:** MIT / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Problem Statement
The mobile ARM64 execution pipeline in \`microsoft/BitNet\` remained severely bottlenecked:
1. **Missing ARM Compute Kernel:** In \`src/ggml-bitnet-mad.cpp\`, the 4-row parallel GEMM routine (\`ggml_vec_dot_i2_i8_s_1x4_32W\`) existed solely for x86 AVX2; the \`__ARM_NEON\` implementation was entirely omitted, forcing expensive scalar fallback.
2. **Build Failures in Termux:** The configuration script (\`setup_env.py\`) lacked Android detection, failing compilation without manual CMake intervention.

---

## 2. Technical Implementation: Vectorized SDOT Kernel
We authored the native ARMv8.2-A NEON integer dot-product acceleration kernel using hardware \`sdot\` intrinsics:
\`\`\`cpp
#if defined(__ARM_FEATURE_DOTPROD)
// 1x4 parallel vector accumulation using 4-way int8 dot product
int32x4_t acc0 = vdupq_n_s32(0);
int32x4_t acc1 = vdupq_n_s32(0);
// Process 32 weights per unrolled iteration via vdotq_s32
acc0 = vdotq_s32(acc0, vec_w0, vec_a);
acc1 = vdotq_s32(acc1, vec_w1, vec_a);
#endif
\`\`\`
Additionally, automated Termux environment recognition was integrated into \`setup_env.py\` to inject \`-DGGML_NEON=ON -DGGML_ARM_DOTPROD=ON\` automatically.

---

## 3. Real-Device Empirical Performance

| Hardware Silicon | Baseline (Scalar Fallback) | Vectorized SDOT Kernel | Throughput Gain |
| :--- | :--- | :--- | :--- |
| **Snapdragon 8 Elite (S25)** | 6.8 tok/s | **28.4 tok/s** | **4.17x Speedup** |
| **Exynos 1380 (A35)** | 1.9 tok/s | **7.8 tok/s** | **4.10x Speedup** |
| **Compilation Status** | Manual CMake Hacking | **Zero-Config One-Shot Build**| Verified |

---

## 4. Conclusion
Implementing the missing ARMv8.2-A NEON 4-row kernel unlocked over 4x inference acceleration on modern ARM processors, establishing a turn-key build toolchain for edge deployment.`
  },

  50: {
    title_eng: "[whisper.cpp Research] Architectural Defense and Graceful Fallback for 32KB LDS Hardware Limitations on Qualcomm Adreno 6xx Vulkan",
    tags: "#whispercpp #QualcommAdreno #VulkanFlashAttention #32KBLDSHardwareCap #GracefulFallback #HardwareQuirkDefense #MobileGPUOptimization #Adreno650",
    content_eng: `# [whisper.cpp Research] Architectural Defense and Graceful Fallback for 32KB LDS Hardware Limitations on Qualcomm Adreno 6xx Vulkan
### Technical Research Monograph Series: AOSF-TR-2026-WHISPER-ADRENO6XX-FALLBACK

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Research Classification:** Upstream Technical Report & Hardware Quirk Defense  
**Patch Branch:** \`uno-km/whisper.cpp:fix/vulkan-flash-attn-adreno6xx-fallback\`  
**Target Repository:** ggml-org/whisper.cpp (Upstream Master)  
**Testbed Hardware:** Samsung Galaxy S20 (Snapdragon 865, Adreno 650) vs Galaxy S25 (Snapdragon 8 Elite, Adreno 830)  
**Compliance Standard:** MIT / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Problem Formulation: Catastrophic Crash on Adreno 6xx
When launching Vulkan acceleration in \`whisper.cpp\` on Snapdragon 865 devices (Adreno 650), execution aborts abruptly during pipeline creation:
\`\`\`text
libc++abi: terminating due to uncaught exception of type vk::SystemError: 
vk::Device::createComputePipeline: ErrorUnknown (-13)
\`\`\`

### Root Cause Identification
1. **Adreno 6xx Local Data Share (LDS) Boundary:** \`maxComputeSharedMemorySize\` on Adreno 650 is exactly **32,768 bytes (32 KB)**.
2. **Flash Attention Shared Memory Requirement:** The scalar Flash Attention shader (\`flash_attn_ext.comp\`) demands a minimum of **49,152 bytes (48 KB)** for tiling buffers.
3. **Driver Compiler Abort:** Rather than returning a clean error code, the Qualcomm compiler crashes internally when presented with shader bytecode exceeding physical LDS limits.

---

## 2. Architectural Solution: Capability Query & Graceful Fallback
We introduced an automated hardware capability validator prior to pipeline initialization:
\`\`\`cpp
VkPhysicalDeviceProperties props;
vkGetPhysicalDeviceProperties(device, &props);
const uint32_t maxLDS = props.limits.maxComputeSharedMemorySize;

if (maxLDS < 49152) {
    // Gracefully bypass Flash Attention on memory-restricted hardware
    params.use_flash_attn = false;
    LOG_INFO("Adreno 6xx LDS cap detected (32KB). Falling back to standard multi-head attention.");
}
\`\`\`

---

## 3. Empirical Verification Across Generations

| Device Platform | Flash Attention Status | Standard Attention Fallback | Stability |
| :--- | :--- | :--- | :--- |
| **Galaxy S20 (Adreno 650, 32KB LDS)** | Hard Crash (-13) | **Active (RTF 0.28)** | **100% Reliable** |
| **Galaxy S25 (Adreno 830, 64KB LDS)** | **Active (RTF 0.14)** | Bypassed | **Optimal Performance** |

---

## 4. Conclusion
Automated capability interrogation prevents unrecoverable driver crashes on legacy Qualcomm Adreno silicon, providing robust, fault-tolerant execution across all mobile hardware tiers.`
  },

  51: {
    title_eng: "Root Cause Analysis of Ternary Numerical Collapse (Word Salad) in ARM64 On-Device 1.58-bit LLMs and Implementation of Dynamic Activation Engine for Mobile Fleet Inference",
    tags: "#BitNet #1_58BitLLM #ARM64 #TernaryNeuralNetwork #WordSaladCollapse #DynamicActivationEngine #NEONAcceleration #OnDeviceFleet #QuantizedTensorRestoration",
    content_eng: `# Root Cause Analysis of Ternary Numerical Collapse (Word Salad) in ARM64 On-Device 1.58-bit LLMs and Implementation of Dynamic Activation Engine for Mobile Fleet Inference
### Technical Research Monograph Series: AOSF-TR-2026-BITNET-TERNARY-02

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Publication Date:** October 1, 2026  
**Target Architecture:** ARM64 (ARMv8.2-A / ARMv9.2-A with NEON Dot Product \`asimddp\`)  
**Testbed Fleet:**  
- Qualcomm Snapdragon 8 Elite (Samsung Galaxy S25, Oryon 8C, Adreno 830 GPU)  
- Samsung Exynos 1380 (Samsung Galaxy A35, Cortex-A78 4C + A55 4C, Mali-G68 GPU)  
- Samsung Exynos 1280 (Samsung Galaxy A53, Cortex-A78 2C + A55 6C, Mali-G68 GPU)  
**Runtime & Software Stack:** Android Bionic libc, \`termux-bitnet v1.4.7\` Pure C++ Native Engine, \`GGML_TYPE_I2_S\` (Type 36)  
**Evaluation Model Matrix:**  
1. \`microsoft/bitnet-b1.58-2B-4T-gguf\` (2.0B / 1.13 GB / Squared ReLU + Sub-Norm)  
2. \`tiiuae/Falcon-E-1B-Instruct-GGUF\` (1.0B / 635 MB / SwiGLU SiLU + ChatML)  
3. \`microsoft/bitnet-embedding-270m\` (268M / 367 MB / 1.58-bit Vector Search)  
4. \`tiiuae/Falcon3-7B-Instruct-1.58bit-GGUF\` (7.45B / 3.05 GB / 6GB RAM Edge Inference)  
**Tracking Ticket:** Jira Issue \`SCRUM-425\`  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## Abstract

This monograph reports on the forensic discovery and architectural resolution of **Ternary Numerical Collapse (Word Salad / Garbled Text Generation)** occurring when executing ultra-low-bit ternary ($\\left\\{-1, 0, +1\\right\\}$) Large Language Models (BitNet b1.58) on commercial mobile ARM64 hardware using a pure native C++ engine (\`termux-bitnet\`).

During initial runs, execution completed with standard success status (\`Exit Code: 0\`) and logged nominal speeds (5.21 tok/s), but generated output collapsed into incoherent verbal soup (\`? 3. I, K, M1. If the same with an answer...\`). Through empirical debugging across a multi-device smartphone fleet, we proved that the collapse stemmed from two profound low-level discrepancies:
1. **Activation Function Mismatch:** The native engine universally evaluated SwiGLU (SiLU) gating across all models, whereas modern BitNet architectures (such as \`bitnet-b1.58-2B-4T\`) mandate **Squared ReLU** ($\text{ReLU}^2(x) = \max(0, x)^2$) coupled with Sub-Layer Normalization.
2. **ARM NEON i2_s Quantization Alignment:** Vector registers miscalculated block scale pointers when unrolling ternary dot-products under ARMv8.2-A dot-product SIMD instructions.

By developing a **Dynamic Activation Engine** that inspects GGUF metadata (\`general.architecture\` and \`bitnet.activation_type\`) at load time and binding specialized NEON \`sdot\` kernels, we achieved 100% semantic coherence across our testing fleet, delivering velocities of **28.4 tok/s on Galaxy S25** and **7.8 tok/s on Galaxy A35**.

---

## 1. Introduction & Theoretical Background

### 1.1 The Promise of 1.58-Bit Ternary Architectures
Ternary weights replace expensive floating-point multiplications with simple additions and subtractions:
$$W \in \left\{-1, 0, +1\right\}^{M \times N}$$
This dramatic reduction allows billions of parameters to fit within 1GB to 3GB of RAM, enabling full-scale LLM execution on mid-range and legacy mobile smartphones.

---

## 2. Root Cause Analysis: Activation & Normalization Divergence

\`\`\`
Activation Trajectory Divergence:
[Hidden State Tensor X]
          |
          +---> Standard Engine (Erroneous): SwiGLU / SiLU Path
          |     -> Attention weights overflow, output degrades to Word Salad
          |
          +---> Dynamic Engine (Proposed): Model-Aware Architecture Check
                |
                +---> If bitnet-2B: Apply Squared ReLU + Sub-Norm -> Coherent
                +---> If falcon-1B: Apply SwiGLU + LayerNorm      -> Coherent
\`\`\`

Applying SiLU to models trained with $\text{ReLU}^2$ alters intermediate feature magnitudes by orders of magnitude, corrupting downstream layer normalizations and producing gibberish.

---

## 3. Fleet Benchmark Matrix Across Smartphone Generations

| Testbed Platform | Parameter Scale | Pre-Patch Output | Dynamic Engine Velocity | Stability |
| :--- | :--- | :--- | :--- | :--- |
| **Galaxy S25 (Snapdragon 8 Elite)**| 2.0B Ternary | Word Salad | **28.4 tok/s** | **100% Coherent** |
| **Galaxy A35 (Exynos 1380)** | 2.0B Ternary | Word Salad | **7.8 tok/s** | **100% Coherent** |
| **Galaxy A53 (Exynos 1280)** | 2.0B Ternary | Word Salad | **4.9 tok/s** | **100% Coherent** |
| **Galaxy S25 (Falcon 7.45B 1.58b)** | 7.45B Ternary | Word Salad | **8.2 tok/s (Fits in 3GB RAM)**| **Production Ready**|

---

## 4. Conclusion
Dynamic activation dispatch and strict NEON stride alignment eradicate ternary numerical collapse, validating that 1.58-bit models can deliver production-grade generative intelligence across heterogeneous mobile hardware fleets.`
  }
};
