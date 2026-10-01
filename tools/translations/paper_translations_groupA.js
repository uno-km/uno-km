// tools/translations/paper_translations_groupA.js
// Translations for Newsletters (0, 1) and Benchmark Reports (33, 34, 35, 36)

export const GROUP_A_TRANSLATIONS = {
  0: {
    title_eng: "AMEVA Labs Inaugural Monograph & Sovereign On-Device AI Research Ecosystem Master Whitepaper (Vol. 1)",
    tags: "#AMEVALabs #OnDeviceAI #SovereignComputing #MobileEcosystem #ZeroCloud #ARM64 #VulkanCompute",
    content_eng: `# AMEVA Labs Inaugural Monograph & Sovereign On-Device AI Research Ecosystem Master Whitepaper

**Publication Date:** September 28, 2026 | **Author:** Eunho Kim (@uno-km) | **Research Field:** On-Device Mobile AI & Systems Engineering

---

## 1. Founding Rationale: Why Sovereign Edge AI?

Centralized cloud artificial intelligence infrastructures impose severe architectural handicaps: structural API dependencies, exorbitant token pricing models, recurring user confidentiality violations, and total functional paralysis during wide-area network partition events.

The **AMEVA Open-Source Foundation (AOSF)** rejects external cloud reliance (Zero-Cloud). From ultra-compact micro-nodes to flagship mobile devices, our research initiative maximizes the silicon computation capabilities of commodity edge devices (ARM64 NEON SIMD, Vulkan Compute SPIR-V, dedicated NPUs), advancing **Sovereign On-Device Intelligence**.

---

## 2. The 3 Core Tenets of AMEVA Systems Architecture

1. **Hardware-Aligned Native ABI Integration (Zero-Abstraction):**
   Eliminating interpretive overhead by binding directly to platform ABI layers (C++20, Bionic libc, Vulkan 1.3, OpenCL 2.0).
2. **Deterministic Memory Governance (Zero-OOM Guarantee):**
   Engineering dynamic layer streaming and memory-mapped page caches to execute multi-billion parameter foundation models within stringent 1GB to 3GB RAM boundaries.
3. **Cross-Architecture Hardware Defense:**
   Forensically diagnosing and neutralizing mobile GPU hardware quirks across ARM Mali, Qualcomm Adreno, and Apple Silicon architectures.

---

## 3. Autonomous Ecosystem Topology

\`\`\`
+---------------------------------------------------------------+
|                    Application User-Space                     |
|           [Local Discourse, Autonomous Agents, ASR]           |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
|             AMEVA Unified Native Runtime Engine               |
|      - termux-diffusion (DiT Image Synthesis Core)            |
|      - termux-llamacpp (Quantized Autoregressive Engine)       |
|      - termux-bitnet (1.58-bit Ternary Neural Accelerator)    |
|      - whisper.cpp Split-Mode (Heterogeneous Acoustic Engine) |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
|             Silicon Hardware Abstraction Layer                |
|     [ARMv8.2-A NEON / Vulkan 1.3 / OpenCL / Unified Bus]      |
+---------------------------------------------------------------+
\`\`\`

---

## 4. Open-Source Commitment
All benchmarks, diagnostic harnesses, and mathematical monographs published by AMEVA Labs adhere strictly to Apache-2.0 and CNCF open governance standards, ensuring reproducible and verifiable research for global computer engineering communities.`
  },

  1: {
    title_eng: "[Vol. 2] AMEVA Weekly Engineering Dispatch: 6.0B DiT Mobile Inference Completion & Full Systems Handbook Release",
    tags: "#EngineeringDispatch #DiffusionTransformer #DiT6B #SystemsHandbook #GalaxyS21 #MobileAI #WeeklyBriefing",
    content_eng: `# AMEVA Labs Weekly Engineering Dispatch (Vol. 2)

**Publication Date:** September 28, 2026 | **Author:** Eunho Kim (@uno-km) | **Classification:** Weekly Engineering Dispatch

---

## 1. Core Research Milestone: 6.0B DiT On-Device Verification

### 🚀 Autonomous 8-Step Synthesis on Samsung Galaxy S21
Operating entirely without cloud offloading, our engineering group verified complete 8-step native Vulkan inference of the **Z-Image Turbo 6.0-billion parameter Diffusion Transformer (DiT)** paired with a **4.0-billion parameter LLM text encoder (Qwen3)** on a commercial Samsung Galaxy S21 (Exynos 2100 / Mali-G78 MP14) smartphone.

* **Key Breakthroughs:**
  1. **Dynamic Layer Streaming (\`--stream-layers\`):** Constrained peak VRAM residency to 820MB, avoiding Android Low Memory Killer (LMKD) termination.
  2. **Tri-Processor Resource Decoupling:** Staged workloads strategically (\`clip=cpu, diffusion=vulkan0, vae=cpu\`) to eliminate memory concurrency spikes.
  3. **TAESD FLUX Latency Collapse:** Slashed latent decoding duration from 15 minutes 24 seconds down to **1.2 seconds**.

---

## 2. Educational Ecosystem: Android Systems Handbook 26-Lecture Curriculum
We formally released the complete 26-lecture **Android Systems & Bionic Architecture Handbook**, spanning 8 specialized modules:
- Module 1: Embedded OS Philosophy & Bionic Divergence
- Module 2: Kernel IPC (Binder) & Memory Subsystems (Ashmem, DMA-BUF, LMK)
- Module 3: Hardware Abstraction Layer & Vulkan Compute Graphics Pipeline
- Module 4: Android Runtime (ART) Internals & Generational GC
- Module 5: Framework Services (AMS, WMS, ServiceManager)
- Module 6: Enterprise Security (SELinux MAC, TrustZone Keystore)
- Module 7: Rootless Userspace (Termux Bionic Linker, Rish, Dual-Master High Availability)
- Module 8: Edge Mesh Networking (WireGuard Overlay, L4 Socket Proxying, Distributed AI)

---

## 3. Upstream Open-Source Contributions
Our team published two major upstream pull requests:
- \`whisper.cpp #4089\`: Hybrid GPU-Encoder / CPU-Decoder Split-Mode Pipeline.
- \`microsoft/BitNet #551 & #624\`: ARM64 Tensor Corruption Resolution and Vectorized SDOT Kernel Implementation.`
  },

  33: {
    title_eng: "[AMEVA-Playwright] Galaxy S20 Real-Device E2E Validation & Audit Report: Dual-Engine Parity Analysis",
    tags: "#RealDeviceTesting #GalaxyS20 #Playwright #AndroidTermux #E2EValidation #AutomatedTesting #Telemetry",
    content_eng: `# [AMEVA-Playwright] Galaxy S20 Real-Device E2E Validation & Audit Report
## Technical Verification, Benchmark Telemetry & Dual-Engine (Python & Node.js) Parity Analysis

---

### Executive Summary

| Evaluation Field | Specification & Status |
| :--- | :--- |
| **Target Project** | \`termux-playwright\` (Dual-Engine Python & Node.js Architecture) |
| **Test Environment** | **Samsung Galaxy S20 5G (SM-G981N)** |
| **Platform / OS** | Android 13 (One UI 5.1 / Linux Kernel 4.19.87) / **aarch64** |
| **Runtime Software** | Python 3.11.9, Node.js 20.15.1, Chromium Headless 126.0 |
| **Scoring Protocol** | 0-Point Baseline Granular Scoring Protocol |
| **Final Score** | **100.0 / 100.0 (Grade: A+)** |
| **Total Test Duration**| 18,240 ms |

---

## 1. 4-Stage Core Verification Results

1. **Stage 1: Environment & Binary Integrity:** Zero linker symbol corruption; verified full glibc/musl compatibility under rootless Termux bionic libc.
2. **Stage 2: Headless Browser Spawning:** Verified child process isolation, DevTools protocol socket allocation, and memory safety margins.
3. **Stage 3: DOM Rendering & Evaluation:** Evaluated JavaScript execution, screenshot capture, and viewport emulation fidelity.
4. **Stage 4: Clean Teardown:** Verified zero lingering zombie browser instances and deterministic socket reclamation.`
  },

  34: {
    title_eng: "Exynos 1380 (Galaxy A35) vs Exynos 2100 (Galaxy S21) Mobile Vulkan Compute Benchmark Report",
    tags: "#Exynos1380 #Exynos2100 #MaliG68 #MaliG78 #VulkanBenchmark #MobileGPU #HardwareProfiling #SDXS",
    content_eng: `# Exynos 1380 (Galaxy A35) vs Exynos 2100 (Galaxy S21) Mobile Vulkan Compute Benchmark Report

> **Document Version:** \`v1.0.0\`  
> **Devices Under Test:** Samsung Galaxy A35 5G (\`SM-A356N\`) vs Samsung Galaxy S21 5G (\`SM-G991N\`)  
> **Engine:** \`termux-diffusion\` v1.3.0 Optimized NDK C++ Runtime (\`armv8.2-a+dotprod+fp16\`)  
> **Date:** August 25 – August 26, 2026  

---

## 1. Executive Summary

| Device | SoC | GPU Core | Precision | Resolution | Latency (s/it) | Total Time (20 steps) |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| **Galaxy A35** | Exynos 1380 | Mali-G68 MP5 | FP16 | 512x512 | 1.84 s/it | 36.8 s |
| **Galaxy S21** | Exynos 2100 | Mali-G78 MP14 | FP16 | 512x512 | **0.92 s/it** | **18.4 s** |

*Analysis:* The Exynos 2100's 14-core Mali-G78 configuration delivers an exact **2.0x computational throughput multiplier** compared to the 5-core Mali-G68, demonstrating linear scaling across unified memory bus architectures.`
  },

  35: {
    title_eng: "Galaxy S20 72-Hour Continuous AI Inference Stress Test: Thermal Throttling & Memory Leak Forensics",
    tags: "#GalaxyS20 #StressTest #ThermalThrottling #MemoryLeakAnalysis #Snapdragon865 #LongRunningStability #HardwareAudit",
    content_eng: `# Galaxy S20 72-Hour Continuous AI Inference Stress Test: Thermal Throttling & Memory Leak Forensics

- **Evaluation Timestamp:** August 23, 2026
- **Target Silicon:** Samsung Galaxy S20 (Qualcomm Snapdragon 865, Adreno 650, 12GB RAM)
- **Runtime Stack:** Termux Android Bionic Environment (Pure C++ / Python 3.12)
- **Testing Protocol:** 72-Hour Uninterrupted Continuous Neural Inference Stress Loop
- **Overall Grade:** **100.0 / 100.0 (Grade: A+)**
- **Cumulative Loop Cycles:** 14,400 Continuous Prompt-Evaluation Sequences

---

## 1. Thermal Dissipation & Frequency Scaling Profile

Throughout the 72-hour sustained workload, battery temperature maintained a ceiling of **41.2 °C** under active heat dissipation. The Qualcomm Kryo 585 CPU cores stabilized at 1.80 GHz without triggering critical thermal shutdown interrupts.

## 2. Memory Residency Stability (Zero Memory Leak)
- Initial Resident Set Size (RSS): 412 MB
- 24-Hour Checkpoint RSS: 414 MB
- 48-Hour Checkpoint RSS: 414 MB
- 72-Hour Termination RSS: 415 MB  
*Finding:* Memory drift remained within a negligible 3MB margin over 14,400 inference cycles, confirming strict RAII buffer discipline and absence of native heap leaks.`
  },

  36: {
    title_eng: "Architecture and Benchmark Analysis of Mobile On-Device AI in Termux Environments: Latency and Memory Profile",
    tags: "#TermuxAI #OnDeviceInference #LatencyProfiling #MemoryFootprint #MobileLLM #VLM #STT #TTS",
    content_eng: `# Architecture and Benchmark Analysis of Mobile On-Device AI in Termux Environments: Latency and Memory Profile

> **Project:** termux-diffusion (AMEVA Foundation AOSF Tier 1 TLP)  
> **Target Environment:** Samsung Galaxy / Android ARM64 (aarch64)  
> **Runtime Ecosystem:** Python 3.10+ / Node.js 18+ (Dual Engine Parity)

---

## 1. Core Architectural Tenets

\`\`\`
+-----------------------------------------------------------------------+
|                Application Layer (CLI / Python / Node.js)             |
+-----------------------------------+-----------------------------------+
                                    |
                                    v
+-----------------------------------------------------------------------+
|           Native C++ Acceleration Engine (Vulkan / NEON SIMD)         |
|   - Zero-Copy Direct Memory Mapping                                   |
|   - Dynamic Workgroup Tiling                                          |
|   - Subgroup Arithmetic Optimization                                  |
+-----------------------------------------------------------------------+
\`\`\`

## 2. Multi-Modal Execution Latency Profile (Galaxy Fleet)
| Modality Model | Target Device | Execution Backend | Latency | VRAM Residency |
| :--- | :--- | :--- | :--- | :--- |
| **Whisper Base (STT)** | Galaxy S21 | Vulkan Split-Mode | 0.18 RTF | 285 MB |
| **Qwen2.5 0.5B (LLM)** | Galaxy S25 | ARM NEON FP16 | 28.4 tok/s | 380 MB |
| **SDXS 0.65B (Diffusion)**| Galaxy S21 | Vulkan FP16 | 54.0 sec | 380 MB |
| **Z-Image Turbo 6.0B (DiT)**| Galaxy S21 | Streamed Vulkan | 39.3 min/step | 820 MB (Streamed) |`
  }
};
