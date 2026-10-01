// tools/translations/paper_translations_part1.js
// High-grade Academic English translations for Papers 29, 30, 31, 32

export const PART1_TRANSLATIONS = {
  29: {
    title_eng: "Design of Vulkan Acceleration Pipeline for Transformer Speech Recognition and Runtime Fault Analysis in Android Mobile Environments",
    tags: "#OnDeviceAI #SpeechRecognition #VulkanCompute #TransformerSTT #AndroidSystem #GPUAcceleration #whispercpp #MobileRuntime #FaultAnalysis",
    content_eng: `# Design of Vulkan Acceleration Pipeline for Transformer Speech Recognition and Runtime Fault Analysis in Android Mobile Environments
### Technical Research Monograph Series: AOSF-TR-2026-STT01-KOR

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Publication Date:** September 1, 2026  
**Target Architecture:** ARM64 (aarch64-linux-android / Termux Bionic libc)  
**Hardware Testbed:** Samsung Galaxy S21 5G (Exynos 2100 / Mali-G78 MP14), Galaxy S20 (Snapdragon 865 / Adreno 650)  
**Runtime & Backend:** Android Native Vulkan 1.3 Driver, \`whisper.cpp\` Vulkan Compute Pipeline  
**Evaluation Models & Tools:** Whisper Small / Base GGML, Vulkan Compute Profiler, Android Systrace  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## Abstract

This research monograph details the architectural design and empirical validation of an end-to-end Vulkan compute acceleration pipeline tailored for Transformer automatic speech recognition (Whisper architecture) directly hosted on Android mobile operating environments. Furthermore, it delivers a systematic forensic analysis of critical runtime failure modes encountered during mobile GPU offloading. 

Deploying autoregressive transformer pipelines on commodity mobile System-on-Chips (SoCs) presents severe engineering constraints due to divergent computational dynamics between the encoder and decoder phases, restricted thermal dissipation envelopes, and platform-specific shader compiler anomalies across disparate GPU architectures (ARM Mali vs. Qualcomm Adreno). To overcome these limitations, we designed an asynchronous compute dispatch pipeline leveraging double-buffered uniform storage buffers, dynamic workgroup tiling, and explicit memory synchronization fences. Empirical benchmarks conducted across commercial smartphone testbeds demonstrate that our optimized Vulkan pipeline achieves a Real-Time Factor (RTF) of **0.18** on Whisper Base without triggering thermal throttling cascades or kernel Out-Of-Memory (LMKD) kills, establishing fully autonomous zero-cloud mobile speech inference.

---

## 1. Introduction

### 1.1 Background & Engineering Rationale
On-device automatic speech recognition (ASR) represents a foundational pillar for privacy-preserving, zero-latency human-machine interaction in ubiquitous mobile computing. While server-centric speech recognition infrastructures introduce transmission latency, network dependency, and potential confidentiality breaches, hosting large-scale Transformer-based acoustic models entirely on edge silicon guarantees absolute data sovereignty and air-gapped operability.

### 1.2 Problem Formulation: Mobile GPU Acceleration Hurdles
Transformer speech recognition models exhibit a pronounced two-stage structural duality:
1. **Compute-Intensive Acoustic Encoder:** High-throughput 2D convolutional subsampling followed by multi-head self-attention blocks processing contiguous mel-spectrogram frames.
2. **Memory-Bandwidth-Bound Autoregressive Decoder:** Sequential token-by-token generation with causal attention and cross-attention over encoder hidden representations ($N=1$ batch inference).

When naive Vulkan compute backends are applied to this workload on mobile SoCs, three catastrophic failure modes emerge:
- **Excessive Kernel Launch Overhead:** Sequential dispatch of single-token decoder layers incurs driver context-switch latencies that exceed actual mathematical compute times.
- **Shader Storage Buffer (SSBO) Misalignment:** Non-uniform memory alignment constraints across heterogeneous mobile drivers precipitate silent memory corruption or \`VK_ERROR_DEVICE_LOST\` faults.
- **Thermal Throttling Cascades:** Sustained monolithic GPU loading rapidly triggers the Android Thermal HAL, depressing core frequencies and destabilizing inference latency.

### 1.3 Research Contributions
This paper provides the following primary contributions:
1. Formal architectural design of a phase-aware Vulkan acceleration pipeline splitting encoder and decoder dispatch streams.
2. Forensic identification and resolution of mobile shader compiler barriers and memory access faults across Mali Valhall and Adreno architectures.
3. Comprehensive empirical profiling of execution throughput, energy dissipation, and memory resident set size (RSS) across real-world commercial hardware.

---

## 2. Theoretical Background & Mathematical Formulation

### 2.1 Computational Workload Characterization
Let the acoustic feature input be $\mathbf{X} \in \mathbb{R}^{T \times D_{\text{mel}}}$, where $T$ denotes mel-spectrogram time frames and $D_{\text{mel}}$ represents frequency bins. The encoder processes $\mathbf{X}$ into contextual hidden states:
$$\mathbf{H} = \text{Encoder}(\mathbf{X}) \in \mathbb{R}^{\frac{T}{2} \times D_{\text{model}}}$$
The computational complexity for the encoder attention across $L_{\text{enc}}$ layers scales quadratically with respect to frame length:
$$\mathcal{O}\left(L_{\text{enc}} \cdot \left( \frac{T}{2} \cdot D_{\text{model}}^2 + \left(\frac{T}{2}\right)^2 \cdot D_{\text{model}} \right)\right)$$
In contrast, during step $t$ of the autoregressive decoder, the cross-attention consumes single-token projections $\mathbf{q}_t \in \mathbb{R}^{1 \times D_{\text{model}}}$ against static key-value caches $\mathbf{K}, \mathbf{V} \in \mathbb{R}^{\frac{T}{2} \times D_{\text{model}}}$, scaling linearly:
$$\mathcal{O}\left(L_{\text{dec}} \cdot \left( D_{\text{model}}^2 + \frac{T}{2} \cdot D_{\text{model}} \right)\right)$$

This mathematical dichotomy necessitates distinct compute dispatch configurations: maximal parallelism tiling for encoder GEMMs, and low-latency register-resident caching for decoder projections.

---

## 3. System Architecture & Vulkan Pipeline Design

\`\`\`
+---------------------------------------------------------------+
|             Android Audio Input (OpenSL ES / AAudio)           |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
|         Log-Mel Spectrogram Extraction (ARM NEON SIMD)         |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
|              Vulkan Compute Pipeline Coordinator              |
|                                                               |
|   +--------------------------+   +------------------------+   |
|   |  Encoder Compute Stream  |   | Decoder Compute Stream |   |
|   |  - Cooperative Workgroup |   | - KV-Cache Direct Map  |   |
|   |  - 2D Tiled GEMM Kernels |   | - Subgroup Reduction   |   |
|   +--------------------------+   +------------------------+   |
|                                                               |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
|            Mobile Hardware Execution Silicon (Vulkan 1.3)     |
|         [Mali-G78 MP14 / Adreno 650 Unified Memory Bus]       |
+---------------------------------------------------------------+
\`\`\`

### 3.1 Memory Management & Zero-Copy Buffer Staging
Mobile SoCs share unified physical memory between CPU cores and GPU execution units. Utilizing \`VK_MEMORY_PROPERTY_HOST_VISIBLE_BIT\` combined with \`VK_MEMORY_PROPERTY_HOST_COHERENT_BIT\` allows direct host-to-device zero-copy pointer exchanges, eliminating duplicate CPU-to-GPU DMA transfers.

---

## 4. Empirical Evaluation & Benchmark Results

### 4.1 Real-Device Execution Metrics (Whisper Base, 30s Audio Sample)
| Metric Parameter | CPU Baseline (4 Threads) | Native Vulkan (Unoptimized) | Proposed Vulkan Pipeline |
| :--- | :--- | :--- | :--- |
| **Encoder Latency** | 2,140 ms | 680 ms | **385 ms** |
| **Decoder Latency (per token)** | 42.1 ms | 31.4 ms | **14.2 ms** |
| **Total Audio RTF** | 0.48 | 0.28 | **0.18** |
| **Peak Resident Memory (RSS)** | 240 MB | 410 MB | **285 MB** |
| **Thermal Delta ($\Delta T$)** | +9.4 °C | +11.2 °C | **+4.8 °C** |

---

## 5. Discussion & Failure Modes

1. **Adreno 6xx Local Data Share (LDS) Spill:** Allocating Flash Attention shared memory blocks exceeding 32KB on Adreno 650 hardware provoked silent register spills. Imposing a 16KB tile constraint completely eliminated pipeline aborts.
2. **Mali Valhall Subgroup Alignment:** Mali architectures executing at subgroup sizes of 16 required explicit barrier synchronization (\`subgroupBarrier()\`) to prevent warp race conditions during reduction passes.

---

## 6. Conclusion
By aligning Vulkan dispatch strategies with the intrinsic mathematical divergence of Transformer encoder-decoder dynamics, this work successfully achieved robust on-device speech transcription with an RTF of 0.18 on commercial mobile hardware. All source patches and diagnostic harnesses have been upstreamed into the AMEVA on-device ecosystem.`
  },

  30: {
    title_eng: "Forensic Analysis of Qualcomm Adreno Shader Compiler Dynamic Loop Unrolling Defects and Numerical Precision Restoration in Mobile LLM Inference",
    tags: "#QualcommAdreno #ShaderCompiler #VulkanCompute #LoopUnrolling #NumericalPrecision #OnDeviceLLM #GPUForensics #Snapdragon #SPIRV",
    content_eng: `# Forensic Analysis of Qualcomm Adreno Shader Compiler Dynamic Loop Unrolling Defects and Numerical Precision Restoration in Mobile LLM Inference
### Technical Research Monograph Series: AOSF-TR-2026-GPU-ADRENO-KOR

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Publication Date:** September 3, 2026  
**Target Architecture:** ARM64 (Qualcomm Snapdragon 865, 888, 8 Gen 1, 8 Gen 2 / Adreno 6xx/7xx series)  
**Runtime & Backend:** Qualcomm Proprietary Vulkan ICD (\`vulkan.adreno.so\`), \`llama.cpp\` GGML Vulkan Compute  
**Evaluation Models & Tools:** Qwen 2.5 0.5B / LLaMA-3.2-1B, SPIR-V Disassembler, LLVM Shader Inspector  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## Abstract

This paper presents an exhaustive empirical forensic investigation into numerical degradation, token collapse, and driver termination faults triggered by the Qualcomm Adreno proprietary shader compiler during dynamic loop unrolling in on-device Large Language Model (LLM) inference. 

When executing quantized matrix multiplication kernels (e.g., Q4_K_M, Q8_0) across Adreno 6xx and 7xx GPUs, language models frequently yield severe degeneration artifacts (such as perpetual repeating tokens or infinite whitespace generation) despite exiting with status code 0. Through low-level SPIR-V intermediate representation disassembling and hardware register allocation tracking, we discovered that the Adreno shader optimizer improperly applies aggressive loop unrolling on non-compile-time-constant loop bounds. This defect induces excessive vector register spilling into high-latency scratchpad memory and causes silent FP16 mantissa truncation. To rectify this flaw, we established a static unroll bound enforcement protocol and dynamic shader specialization pipeline. Empirical evaluation demonstrates complete numerical precision restoration and stable token generation without runtime failure.

---

## 1. Introduction

### 1.1 Context & Problem Statement
Qualcomm Adreno GPUs dominate the Android flagship and mid-range landscape. Leveraging their Vulkan compute interface offers substantial throughput advantages for edge neural networks. However, running autoregressive transformer decoders on Adreno silicon frequently encounters unexplained text degradation—popularly termed "Word Salad" or repetitive token loops—without raising any operating system exception or driver abort signal.

### 1.2 Observed Defect Symptoms
- **Exit Code 0 Illusion:** The process completes successfully from the POSIX perspective, yet generated logit distributions converge entirely towards NaN or zero values.
- **Mantissa Bit Inversion:** FP16 matrix dot-products diverge by up to 18.4% compared against gold-standard IEEE 754 CPU references.
- **Pipeline Freezes on Specific Context Lengths:** Inputs exceeding 512 tokens precipitate unrecoverable GPU command queue stalls.

---

## 2. Root Cause Forensic Analysis

\`\`\`
+---------------------------------------------------------------+
|       GLSL Source Kernel: mul_mat_vec_q4_k.comp              |
|       for (int i = 0; i < dynamic_k_bound; i++) { ... }       |
+---------------------------------------------------------------+
                               |
                               v (glslangValidator)
+---------------------------------------------------------------+
|       Standard SPIR-V Bytecode: OpLoopMerge / OpBranch        |
+---------------------------------------------------------------+
                               |
                               v (Adreno Proprietary JIT Compiler)
+---------------------------------------------------------------+
|  DEFECT: Unsafe Dynamic Loop Unroll Factor Expansion (x16)    |
|  - Physical Register Budget: 64 Vector Registers Exceeded     |
|  - Register Spilling to Global Memory Buffer Injected         |
|  - Mantissa Bitfield Truncation in Vector Accumulator         |
+---------------------------------------------------------------+
\`\`\`

The proprietary Adreno Vulkan compiler JIT translates SPIR-V bytecode into native GPU machine instructions. When encountering inner reduction loops within quantization kernels where iteration counts are bounded by dynamic parameters, the optimizer heuristically unrolls the loop by a factor of 16. Because modern quantized dequantization routines demand substantial temporary register space, this unrolling instantly exhausts the physical 64-register limit, causing register spilling and unaligned memory write hazards.

---

## 3. Remediation Architecture & Precision Restoration

We devised a two-tier remediation strategy:
1. **Explicit Loop Unroll Control via Pragmas:** Suppressing aggressive JIT unrolling using static compiler directives (\`#pragma optionNV(unroll, none)\` and explicit stride loop indexing).
2. **Specialization Constant Clamping:** Passing matrix dimension bounds as Vulkan Specialization Constants (\`VkSpecializationInfo\`), allowing the driver compiler to evaluate loop boundaries at pipeline compilation time rather than dispatch time.

---

## 4. Empirical Evaluation Results

| Configuration | Baseline (Corrupted) | Specialized Pipeline | Target CPU Reference |
| :--- | :--- | :--- | :--- |
| **Output Token Validity** | 0% (NaN / Repetition) | **100% (Normal Text)** | 100% |
| **Cosine Similarity vs CPU** | 0.312 | **0.9998** | 1.0000 |
| **Inference Speed (Adreno 650)**| 1.82 t/s (Stalled) | **9.42 t/s** | 3.10 t/s |
| **Shader Compilation Time** | 412 ms | **118 ms** | N/A |

---

## 5. Conclusion
This study pinpoints the long-standing on-device LLM degeneration anomaly on Qualcomm Adreno hardware to an internal register spilling bug within dynamic loop unrolling. Implementing specialization constants resolves both the accuracy loss and performance overhead, solidifying dependable edge AI operation.`
  },

  31: {
    title_eng: "Analysis of Integer Truncation Faults in Vulkan Matrix Multiplication on ARM Mali Valhall GPUs and Runtime Resolution Strategies",
    tags: "#ARMMali #ValhallGPU #MatrixMultiplication #Vulkan #IntegerTruncation #Exynos2100 #OnDeviceAI #GEMM #NumericalStability",
    content_eng: `# Analysis of Integer Truncation Faults in Vulkan Matrix Multiplication on ARM Mali Valhall GPUs and Runtime Resolution Strategies
### Technical Research Monograph Series: AOSF-TR-2026-GPU-MALI-KOR

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Publication Date:** September 5, 2026  
**Target Architecture:** ARM64 (aarch64-linux-android / Termux Bionic libc)  
**Hardware Testbed:** Samsung Galaxy A35 5G (Exynos 1380 / Mali-G68 MP5), Galaxy S21 (Exynos 2100 / Mali-G78 MP14)  
**Runtime & Backend:** Android Native Bionic Vulkan Driver (\`/system/lib64/libvulkan.so\`), \`llama.cpp\` GGML Vulkan  
**Evaluation Models & Tools:** Qwen 2.5 0.5B Instruct (Q4_K_M), Vulkan Fence Isolation Profiler  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## Abstract

This technical monograph delivers an in-depth forensic dissection of hard kernel freezes and unrecoverable driver crashes (\`vk::DeviceLostError: ErrorDeviceLost\`) encountered during large-scale language model inference on ARM Mali GPUs executing through the \`llama.cpp\` Vulkan compute backend. 

Historically, such catastrophic aborts were misattributed to thermal overheating or proprietary vendor driver defects. However, through rigorous fence-isolation instrumentation and low-level disassembly, we proved that the fundamental fault originates from an integer division truncation in the cooperative matrix multiplication shader (\`mul_mm.comp\`):

$$\\text{loadstride}_b = \\left\\lfloor \\frac{\\text{gl\\_WorkGroupSize.x} \\times \\text{LOAD\\_VEC\\_B}}{\\text{BK}} \\right\\rfloor = \\left\\lfloor \\frac{16 \\times 1}{32} \\right\\rfloor = 0$$

On ARM Mali architectures characterized by a hardware warp (subgroup) width of 16, this integer truncation calculates a load stride of exactly 0, entrapping the workgroup inside an infinite data loading loop. Consequently, the Android kernel GPU hardware watchdog (Timeout Detection and Recovery, TDR) terminates the execution context. By explicitly registering vendor identifier \`VK_VENDOR_ID_ARM (0x13b5)\` and dynamically routing devices with subgroup sizes below 32 to the Medium (\`_m\`) pipeline layout, we demonstrated uninterrupted 100% GPU offloading across all 25 model layers and established sustained token generation rates of **4.44 t/s**.

---

## 1. Introduction

ARM Mali Valhall GPUs (embedded in Exynos 1380, 2100 and Dimensity chipsets) power hundreds of millions of contemporary mobile devices. Enabling robust on-device language model inference across these platforms is vital for ubiquitous computing. However, standard GGML Vulkan configurations suffered reproducible crashes within 500ms of model invocation on Mali hardware, halting real-world deployment.

---

## 2. Mathematical Root Cause & Kernel Breakdown

In cooperative GEMM kernels, threads within a workgroup collectively load matrix chunks from global storage into shared memory:
$$\\text{loadstride}_b = \\left\\lfloor \\frac{\\text{gl\\_WorkGroupSize.x} \\times \\text{LOAD\\_VEC\\_B}}{\\text{BK}} \\right\\rfloor$$
Where:
- $\\text{gl\\_WorkGroupSize.x} = 16$ (native subgroup size on Mali-G68 / G78)
- $\\text{LOAD\\_VEC\\_B} = 1$
- $\\text{BK} = 32$ (block tile dimension)

Under integer division, $\\lfloor 16 / 32 \\rfloor = 0$. In the subsequent buffer copy loop:
\`\`\`c
for (int idx = thread_id; idx < target_elements; idx += loadstride_b) {
    // With loadstride_b == 0, idx never increments -> INFINITE LOOP
    shared_buf[idx] = global_buf[idx];
}
\`\`\`
The thread loop becomes permanently non-terminating, holding hardware fences and triggering kernel TDR resets.

---

## 3. Runtime Resolution & Architectural Routing

To resolve the defect across all devices without degrading performance on 32-thread subgroup hardware (such as Adreno or desktop GPUs):
1. **Vendor Detection:** Interrogate \`VkPhysicalDeviceProperties.vendorID\` for ARM (\`0x13b5\`).
2. **Subgroup Threshold Enforcement:** If \`subgroupSize < 32\`, force selection of the Medium tiling profile (\`_m\`) where $\\text{BK}$ is dimensioned to 16, ensuring $\\text{loadstride} \\ge 1$.

---

## 4. Empirical Benchmark Verification

| Testbed Device | Baseline Result | Patched Architecture Result | Token Velocity |
| :--- | :--- | :--- | :--- |
| **Galaxy A35 (Mali-G68)** | ErrorDeviceLost (Crash) | **25/25 Layers Offloaded** | **4.44 t/s** |
| **Galaxy S21 (Mali-G78)** | ErrorDeviceLost (Crash) | **25/25 Layers Offloaded** | **6.82 t/s** |
| **Crash Rate** | 100% (Instant Abort) | **0% (10,000 Tokens Tested)** | Stable |

---

## 5. Conclusion
This empirical study eradicated the root cause of GPU driver device losses on ARM Mali silicon by rectifying integer truncation within workgroup stride calculations, enabling full-scale on-device neural acceleration across all Valhall mobile platforms.`
  },

  32: {
    title_eng: "Empirical Verification of Large-Scale Diffusion Transformer Inference via Layer Streaming on Memory-Constrained Mobile Devices",
    tags: "#DiffusionTransformer #DiT #LayerStreaming #OnDeviceDiffusion #ZImageTurbo #GalaxyS21 #VRAMOptimization #TAESD #LMKDDefense",
    content_eng: `# Empirical Verification of Large-Scale Diffusion Transformer Inference via Layer Streaming on Memory-Constrained Mobile Devices
### Technical Research Monograph Series: AOSF-TR-2026-DIT-ZIMAGE-KOR

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Publication Date:** September 28, 2026  
**Target Architecture:** ARM64 (aarch64-linux-android / Termux Bionic libc)  
**Hardware Testbed:** Samsung Galaxy S21 5G (SM-G991N, Exynos 2100, ARM Mali-G78 MP14 GPU, 8GB LPDDR5 RAM)  
**Runtime & Backend:** Android Termux, Vulkan 1.3 Compute, \`termux-diffusion\`  
**Evaluation Models & Tools:** Z-Image Turbo 6.0B DiT, SDXS 0.65B, DreamShaper 8 1.0B, TAESD FLUX VAE, Android LMK Profiler  
**Official Distribution:** termux-diffusion v1.8.0  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## Abstract

This research monograph reports on the first empirical verification of complete 8-step on-device inference of a 6.0-billion parameter Diffusion Transformer (DiT) model (Z-Image Turbo) coupled with a 4.0-billion parameter text encoder (Qwen3) on a commercial consumer smartphone (Samsung Galaxy S21, Exynos 2100) constrained by 8GB of physical RAM, achieved entirely without cloud offloading (Zero-Cloud).

To navigate the aggressive Android Low Memory Killer Daemon (LMKD) reclamation policies and the practical 1GB GPU VRAM allocation boundary, this study engineered a tri-tier heterogeneous system architecture combining:
1. **Dynamic Layer Streaming (\`--stream-layers\`):** Dynamically swapping transformer block weights over the unified memory bus to cap VRAM residency below 820MB.
2. **Tri-Processor Resource Decoupling:** Isolating stages across silicon (\`clip=cpu, diffusion=vulkan0, vae=cpu\`) to circumvent simultaneous peak memory superposition.
3. **Lightweight Latent Space Decoding (TAESD FLUX, 10MB):** Compressing VAE reconstruction overhead from 15 minutes 24 seconds down to **1.2 seconds**.

Empirical results demonstrate that a 2.4GB model weight payload can be reliably executed within a strict 1GB GPU allocation ceiling with zero process termination events, validating mobile self-contained synthesis of photorealistic images.

---

## 1. Introduction

### 1.1 Shift from U-Nets to Diffusion Transformers
Image synthesis neural architectures have rapidly transitioned from convolutional U-Net backbones to massive Attention-centric Diffusion Transformers (DiTs). While DiT architectures deliver unprecedented prompt alignment and photorealism, their massive parameter sizes have largely confined deployment to enterprise server clusters equipped with multi-terabyte memory bandwidth.

### 1.2 The 8GB Mobile Ceiling & LMK Abort Risks
Concurrently loading a 6.0B DiT backbone and a 4.0B LLM-based text encoder demands upwards of 6GB of active memory. In Android mobile operating systems, processes claiming disproportionate memory are aggressively targeted by \`lmkd\`.

---

## 2. Empirical Benchmark Matrix Across 3 Diffusion Models

Under identical hardware conditions on the Samsung Galaxy S21 testbed, comparative evaluations across three distinct diffusion architectures yielded the following ground-truth metrics:

| Comparison Metric | SDXS (0.65B) | DreamShaper 8 (1.0B) | **Z-Image Turbo (6.0B DiT)** |
| :--- | :--- | :--- | :--- |
| **Model Architecture** | Distilled Ultra-Light SD (CNN) | SD 1.5 Fine-tuned (U-Net) | **Diffusion Transformer (DiT)** |
| **Total Parameter Count** | 650 Million (0.65B) | 1.0 Billion (1.0B) | **6.0 Billion (6.0B)** |
| **Loaded VRAM Footprint** | ~380 MB | ~850 MB | **~2,400 MB (2.4 GB, Streamed to 820MB)** |
| **Sampling Steps** | 1 Step (One-Step) | 20 Steps (Standard) | **8 Steps (Euler A)** |
| **Total Synthesis Time** | **54 sec (Fast Preview)** | **16 min 40 sec (Standard)** | **5 hr 15 min (Full Precision Completion)** |
| **Per-Step Latency** | 54.0 sec/step | 50.0 sec/step | 39.3 min/step |
| **VAE Decoding Latency** | 0.8 sec (TAESD) | 1.1 sec (TAESD) | **1.2 sec (TAESD FLUX)** |
| **Resolution & Fidelity** | 512x512 (Draft Quality) | 512x512 (Standard Art) | **512x512 (PBR Lighting & Detailed Textures)** |
| **Process Stability** | Normal Exit (0) | Normal Exit (0) | **Normal Exit (0 Kills, 100% Completed)** |

---

## 3. Memory & Latency Analysis

### 3.1 Layer Streaming Dynamics
Attempting monolithic allocation of the 2.4GB weight file immediately breached the 1GB VRAM allocation threshold, triggering immediate kernel termination. Activating \`--stream-layers\` successfully restricted VRAM allocation to a peak of **820 MB**, leaving over 400 MB of safety margin against LMK intervention.

### 3.2 TAESD Latency Compression
- Standard FLUX VAE (330 MB): Required **15 minutes 24 seconds** for the latent decoding stage alone.
- Lightweight TAESD FLUX (10 MB): Reconstructed the image in **1.2 seconds**, yielding an approximate **800x speedup** in the reconstruction phase.

---

## 4. Conclusion
This study provides the first conclusive empirical demonstration that 6.0B parameter Diffusion Transformers can be reliably executed to completion on consumer mobile hardware without cloud offloading by employing dynamic layer streaming and heterogeneous processor decoupling.`
  }
};
