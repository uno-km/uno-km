// tools/translations/paper_translations_part3.js
// High-grade Academic English translations for Papers 44, 45, 46

export const PART3_TRANSLATIONS = {
  44: {
    title_eng: "Design and Empirical Evaluation of GPU-CPU Heterogeneous Split Pipeline Considering Phased Computational Characteristics in On-Device Transformer Speech Recognition",
    tags: "#HeterogeneousComputing #GPUCPUSplit #OnDeviceSTT #WhisperAcceleration #HybridPipeline #MobileSoCOptimization #ThermalThrottlingDefense #EmpiricalBenchmark",
    content_eng: `# Design and Empirical Evaluation of GPU-CPU Heterogeneous Split Pipeline Considering Phased Computational Characteristics in On-Device Transformer Speech Recognition
### Technical Research Monograph Series: AOSF-TR-2026-STT-HYBRID-KOR

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Publication Date:** September 29, 2026  
**Target Architecture:** ARM64 (aarch64-linux-android / Termux Bionic libc)  
**Hardware Testbed:** Samsung Galaxy S21 (Exynos 2100 / Mali-G78), Galaxy A35 (Exynos 1380 / Mali-G68), Galaxy S20 (Snapdragon 865 / Adreno 650)  
**Runtime & Backend:** \`whisper.cpp\` Split-Mode Engine, Vulkan 1.3 Compute, ARM NEON SIMD  
**Evaluation Models & Tools:** Whisper Small / Base GGML Models, Linux Thermal HAL Logger  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## Abstract

This research monograph proposes the design and empirical evaluation of a **GPU-CPU Heterogeneous Split Pipeline (\`--split-mode\`)** specifically optimized for on-device Transformer automatic speech recognition (Whisper architecture) across resource-constrained mobile Systems-on-Chips (SoCs).

Monolithic execution paradigms on mobile hardware inevitably encounter severe physical bottlenecks: pure CPU execution suffers from thermal throttling and battery drainage during sustained 2D mel-spectrogram attention processing, while pure GPU execution incurs disproportionate driver dispatch overhead during single-token autoregressive decoding ($N=1$). To reconcile these opposing constraints, our proposed architecture strategically allocates the heavy, compute-bound acoustic encoder ($L_{\\text{enc}}=12$) exclusively to the mobile GPU via parallel Vulkan compute pipelines, while pinning the memory-bandwidth-sensitive autoregressive decoder ($L_{\\text{dec}}=12$) to low-latency CPU cores executing vectorized ARM NEON instructions. 

Comprehensive real-device empirical evaluations across three commercial smartphone platforms demonstrate that this hybrid split architecture delivers a **1.62x to 1.84x total throughput speedup**, slashes thermal dissipation delta ($\Delta T$) by **44.8%**, and suppresses battery current draw from 1,240mA down to **680mA**, establishing a sustainable operational envelope for continuous edge speech transcription.

---

## 1. Introduction & Computational Dichotomy

### 1.1 The Phase-Divergent Workload of Transformer ASR
Acoustic Transformer architectures bifurcate into two fundamentally distinct computational regimes:
1. **Acoustic Encoder Phase:** Consumes multi-second mel-spectrogram arrays, processing dense, parallel matrix multiplications across deep attention blocks. This phase exhibits high arithmetic intensity ($\text{FLOPs/Byte} \gg 10$) and thrives on wide GPU SIMD pipelines.
2. **Text Decoder Phase:** Executes autoregressively, producing a single output token at a time. Each step issues sequential GEMV operations against persistent key-value caches with minimal arithmetic intensity ($\text{FLOPs/Byte} \approx 1$).

On mobile SoCs, dispatching hundreds of sequential GEMV invocations to the GPU saturates the command submission queue and triggers driver context-switch penalties that dwarf actual ALU calculation times.

---

## 2. Heterogeneous Split Architecture (\`--split-mode\`)

\`\`\`
+---------------------------------------------------------------+
|                      Audio Input Stream                       |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
|          Acoustic Encoder (Compute-Bound: 300+ GFLOPs)        |
|          -> Offloaded to Mobile GPU (Vulkan Compute)          |
|          - High-throughput parallel 2D convolution & GEMM     |
+---------------------------------------------------------------+
                               |
                               v (Zero-Copy Unified Memory Bus)
+---------------------------------------------------------------+
|          Autoregressive Decoder (Latency-Bound: N=1)          |
|          -> Pinned to Mobile CPU Big-Cores (ARM NEON FP16)    |
|          - Minimal dispatch overhead, cache-locality affinity |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
|                       Transcribed Text                        |
+---------------------------------------------------------------+
\`\`\`

By exploiting the unified physical memory architecture common to modern ARM SoCs, the hidden state tensor output from the GPU encoder is directly consumed by CPU decoder threads without redundant inter-device PCI-e DMA transfers.

---

## 3. Empirical Benchmark Verification Across Mobile Fleet

| Hardware Testbed | Pure CPU Baseline | Pure Vulkan GPU | Heterogeneous Split (\`--split-mode\`) | Efficiency Gain |
| :--- | :--- | :--- | :--- | :--- |
| **Galaxy S21 (Exynos 2100)** | 14.8s (RTF 0.49) | 11.2s (RTF 0.37) | **7.1s (RTF 0.24)** | **2.08x Speedup** |
| **Galaxy A35 (Exynos 1380)** | 22.4s (RTF 0.75) | 16.5s (RTF 0.55) | **10.8s (RTF 0.36)** | **2.07x Speedup** |
| **Galaxy S20 (Snapdragon 865)**| 18.2s (RTF 0.61) | Driver Hang | **9.4s (RTF 0.31)** | **1.94x Speedup** |
| **Thermal Delta ($\Delta T$)** | +12.8 °C | +14.2 °C | **+6.4 °C** | **-54.9% Heat** |
| **Power Draw (Current)** | 1,410 mA | 1,180 mA | **720 mA** | **-48.9% Power** |

---

## 4. Conclusion
Dynamic heterogeneous splitting resolves the fundamental impedance mismatch between mobile GPU driver overhead and single-token autoregressive decoding, halving thermal dissipation while doubling transcription throughput on production smartphones.`
  },

  45: {
    title_eng: "Architectural Resolution and Root Cause Analysis of Inference Degeneration (@ Token Repetition) in Snapdragon 8 Elite On-Device LLaMA",
    tags: "#Snapdragon8Elite #GalaxyS25 #LLaMA #TokenRepetitionDegeneration #OnDeviceInference #BionicABI #VulkanDriverConflict #LogitUnderflow #CriticalDefectForensics",
    content_eng: `# Architectural Resolution and Root Cause Analysis of Inference Degeneration (@ Token Repetition) in Snapdragon 8 Elite On-Device LLaMA
### Technical Research Monograph Series: AOSF-TR-2026-LLAMA-ABI-S25

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Publication Date:** September 29, 2026  
**Target Architecture:** ARM64 (ARMv8.3-A / Qualcomm Snapdragon 8 Elite, Oryon CPU, Adreno 830 GPU)  
**Hardware Testbed:** Samsung Galaxy S25 (SM-S931N, 12GB LPDDR5X RAM, Android 15 / Termux Bionic libc)  
**Runtime & Backend:** \`termux-llamacpp v1.3.11\`, \`llama.cpp\` b4000+, Bionic libc++ vs Termux libc++  
**Evaluation Models:** LLaMA-3.2-1B-Instruct, Qwen2.5-0.5B-Instruct  
**Tracking Ticket:** Jira Issue \`SCRUM-420\`  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## Abstract

This paper delivers an exhaustive forensic investigation and architectural resolution of a critical inference degeneration defect—manifesting as perpetual repetition of byte token \`@\` (ASCII \`0x40\`)—observed when running Large Language Models on the cutting-edge Qualcomm Snapdragon 8 Elite (Oryon CPU / Adreno 830 GPU) platform within Android user-space environments.

Despite the execution process terminating with standard success status (\`Exit Code: 0\`) and reporting misleadingly inflated velocities exceeding 58.9 tok/s, the output text was completely corrupted into endless sequences of \`@@@@@...\`. Through rigorous forensic tracing, we uncovered a multi-layer architectural failure:
1. **Gate 1 Dual C++ Runtime Collision:** The dynamic linker implicitly initialized the vendor Vulkan runtime during CPU execution, triggering symbol collision between Android Bionic system \`libc++\` and Termux user-space \`libc++\`.
2. **Adreno 830 Graphics Driver Register Hooking:** Background driver threads interfered with floating-point hardware registers during vector SIMD passes.
3. **Flash Attention SPIR-V Numerical Underflow:** Shader compiler logit underflow caused attention scores to diverge negatively, locking the softmax distribution onto the lowest ASCII byte token.
4. **ChatML Template Omission:** Absence of conversation boundary delimiters (\`<|im_start|>\`, \`<|im_end|>\`) provoked autoregressive sampler lockup.

We implemented four architectural remediations: (1) Total CPU environment isolation with GPU device masking (\`GGML_VK_VISIBLE_DEVICES=""\`), (2) Default compiler guard injection disabling unstable Flash Attention (\`-fa 0\`), (3) Automated Model-Aware Chat Template binding, and (4) Pure CPU NEON engine decoupling. Real-world validation on the Galaxy S25 confirmed full restoration of natural language outputs at **22 to 25 tok/s**.

---

## 1. Forensic Anatomy of the Exit Code 0 Illusion

\`\`\`
Inference Degeneration Flow:
[Input Prompt: "What is the capital of South Korea?"]
                         |
                         v
[Gate 1 Violation: Dual libc++ Symbol Collision in Dynamic Linker]
                         |
                         v
[Flash Attention Numerical Underflow in Adreno Driver Pass]
                         |
                         v
[Softmax Logit Collapse -> Logit Vector Dominated by NaN / Underflow]
                         |
                         v
[Greedy / Temperature Sampler Defaulting to Fallback Byte: 0x40 ('@')]
                         |
                         v
[Output: "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" (Exit Code: 0, 58.9 tok/s)]
\`\`\`

The defect represents a textbook "Silent Fallback" trap: runtime metrics appear exceptionally fast because the model instantly collapses into emitting the zero-index byte token without executing meaningful attention calculations.

---

## 2. Engineering Remediation & Gate 1 Enforcement

### 2.1 Environmental Isolation & Device Masking
\`\`\`bash
# Enforcing Gate 1 Protection in User-Space Runtime
export GGML_VK_VISIBLE_DEVICES=""
export LD_LIBRARY_PATH="/data/data/com.termux/files/usr/lib"
\`\`\`
Explicitly unsetting visible Vulkan devices prevents \`dlopen()\` from loading vendor graphics libraries into the process space, guaranteeing absolute purity of Bionic libc++ standard library symbols.

### 2.2 Chat Template Binding
Instruct fine-tuned architectures mandate strict EOS/BOS tokens. Injecting native ChatML tags prevents autoregressive samplers from spinning in unbounded token loops.

---

## 3. Empirical Verification on Samsung Galaxy S25

| Verification State | Pre-Patch Corrupted Baseline | Post-Patch Restored Engine |
| :--- | :--- | :--- |
| **Output Text Quality** | \`@@@@@@@@@@@@@@@@\` (Garbled) | **"The capital of South Korea is Seoul."** |
| **Cosine Semantic Accuracy** | 0.000 (Gibberish) | **1.000 (Perfect Reconstruction)** |
| **Inference Generation Rate** | 58.9 tok/s (Fake degenerate) | **24.6 tok/s (Genuine LLM Generation)** |
| **Process Integrity** | Silent Failure | **Deterministic Execution (Exit 0)** |

---

## 4. Conclusion
By identifying and eliminating dual-runtime symbol collisions and driver register interference, this work restored verifiable on-device language model generation on Snapdragon 8 Elite hardware, reinforcing the absolute necessity of strict Gate 1 isolation protocols.`
  },

  46: {
    title_eng: "Root Cause Analysis of Vulkan Numerical Collapse in Qualcomm Adreno 650 and Implementation of OpenCL Bypass Acceleration Pipeline for Mobile On-Device LLM Inference",
    tags: "#QualcommAdreno650 #GalaxyS20 #VulkanNumericalCollapse #OpenCLAcceleration #OnDeviceLLM #CLBlast #DriverForensics #LegacyFlagshipOptimization #PrecisionRestoration",
    content_eng: `# Root Cause Analysis of Vulkan Numerical Collapse in Qualcomm Adreno 650 and Implementation of OpenCL Bypass Acceleration Pipeline for Mobile On-Device LLM Inference
### Technical Research Monograph Series: AOSF-TR-2026-GPU-OPENCL-S20

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Publication Date:** September 29, 2026  
**Target Architecture:** ARM64 (Qualcomm Snapdragon 865, Kryo 585 CPU, Adreno 650 GPU)  
**Contrast Hardware:** Samsung Exynos 2100 (Mali-G78), Qualcomm Snapdragon 8 Elite (Adreno 830)  
**Hardware Testbed:** Samsung Galaxy S20 5G (12GB LPDDR5 RAM, Android 13 / Termux Bionic libc)  
**Runtime & Backend:** Android Bionic libc, \`termux-llamacpp v1.3.13\`, Vulkan 1.3 vs OpenCL 2.0 vs CPU NEON  
**Evaluation Models:** Qwen2.5-0.5B-Instruct (Q4_K_M & Q5_0)  
**Tracking Ticket:** Jira Issue \`SCRUM-421\`  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## Abstract

This empirical monograph reports on the root cause discovery of fatal numerical collapse (garbled control token emissions) occurring during on-device Large Language Model (LLM) inference on the Qualcomm Snapdragon 865 (Adreno 650 GPU) via the Vulkan backend, and validates an architectural **OpenCL Bypass Acceleration Pipeline** to reclaim full computational integrity.

Initial deployment of \`ggml-vulkan\` on the Galaxy S20 resulted in an \`Exit Code: 0\` illusion: prompt processing logged 12.2 t/s and generation logged 5.3 t/s, but output text devolved entirely into garbled noise tokens (\`BASIS Lottery now阏elledelled.xml...\`). Software interventions—including disabling Flash Attention (\`-fa 0\`), altering quantization levels (\`Q4_K_M\` to \`Q5_0\`), and staggering layer offloading (\`-ngl 8, 16, 32\`)—failed to resolve the collapse.

In-depth forensic disassembly revealed that the legacy vendor Vulkan driver (\`v512/v615\`) contains compiler-level defects in handling FP16 subgroup arithmetic and denormalized floating-point numbers, permanently corrupting Rotary Position Embedding (RoPE) coordinates and Softmax probabilities. Because non-rooted mobile devices cannot update vendor driver binaries, we constructed a native OpenCL bypass linking directly to \`/system/vendor/lib64/libOpenCL.so\` with tailored Adreno 32KB local memory kernels. Empirical evaluation confirmed 100% text semantic restoration. Furthermore, recognizing that CPU NEON FP16 execution yields **42.9 t/s**, we instituted a **Smart Hybrid Routing Policy** defaulting to CPU NEON while reserving OpenCL for high-memory offloading scenarios.

---

## 1. Introduction & The Legacy Flagship Opportunity

Flagship smartphones from the 2020 era (e.g., Samsung Galaxy S20) feature generous 12GB LPDDR5 memory pools and robust multi-core architectures, making them exceptional candidates for edge AI nodes. However, vendor software support freezes often leave legacy Vulkan drivers burdened with unpatched compiler flaws that break modern tensor mathematics.

---

## 2. Root Cause Forensic Analysis: The Vulkan Collapse Mechanism

\`\`\`
Vulkan vs. OpenCL Execution Comparison on Adreno 650:
[Input Embedding]
       |
       +---> [Vulkan Driver v512]: FP16 Subgroup Bitfield Masking Error
       |                                |
       |                                v
       |                  [Corrupted RoPE Position Vector]
       |                                |
       |                                v
       |               [Softmax Underflow -> Garbled Tokens]
       |
       +---> [OpenCL Driver 2.0]: Native IEEE 754 Compliance
                                        |
                                        v
                          [Accurate Attention Output]
                                        |
                                        v
                          ["The capital of France is Paris."]
\`\`\`

The legacy Adreno 650 Vulkan shader compiler improperly optimizes subgroup reductions in SPIR-V intermediate code by discarding denormalized mantissa bits. In multi-layer attention networks, this error compounds exponentially across layers, causing hidden states to overflow or collapse to zero.

---

## 3. Empirical Benchmark Verification Across Backends

| Backend Execution Mode | Output Text Validity | Prompt Speed (t/s) | Eval Speed (t/s) | Stability |
| :--- | :--- | :--- | :--- | :--- |
| **Vulkan (\`ggml-vulkan\`)** | 0% (Corrupted Garbage) | 12.2 t/s | 5.3 t/s | Numerical Collapse |
| **OpenCL (\`GGML_OPENCL\`)** | **100% (Perfect Text)** | 1.8 t/s | 0.2 t/s | Accurate / High Latency |
| **CPU NEON (4 Threads)** | **100% (Perfect Text)** | **65.4 t/s** | **42.9 t/s** | **Optimal Throughput** |

---

## 4. Smart Hybrid Routing Architecture
To optimize both accuracy and velocity on Snapdragon 865 devices:
1. **Device Fingerprinting:** The runtime detects \`Hardware: Qualcomm Snapdragon 865\` via \`/proc/cpuinfo\`.
2. **Dynamic Policy Selection:** Default inference routes to optimized 4-thread CPU NEON SIMD, achieving a phenomenal 42.9 t/s.
3. **OpenCL Memory Lifeboat:** If context lengths demand GPU VRAM offloading exceeding CPU heap safety margins, the pipeline transitions seamlessly to OpenCL, safeguarding precision.

---

## 5. Conclusion
Through forensic identification of vendor Vulkan compiler defects and implementation of OpenCL/NEON hybrid routing, this study restored production-grade on-device AI inference on legacy Snapdragon flagship silicon.`
  }
};
