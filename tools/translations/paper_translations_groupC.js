// tools/translations/paper_translations_groupC.js
// High-grade Academic Translations for Systems Handbook Modules 1 to 3 (Indices 2 to 11)

export const GROUP_C_TRANSLATIONS = {
  2: {
    title_eng: "1.1 Mobile Embedded OS Design Philosophy & Engineering Trade-offs",
    tags: "#EmbeddedOS #AndroidArchitecture #MobileOperatingSystems #KernelEngineering #ResourceConstraints #BatteryOptimization #BionicLibc #SystemsEngineering",
    content_eng: `# 1.1 Mobile Embedded OS Design Philosophy & Engineering Trade-offs
### Android Systems & Bionic Architecture Handbook — Module 1: Lecture 1

**Course Series:** AOSF-HB-2026-SYS-MOD1-01  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** ARM64 (aarch64-linux-android / Android Bionic)  
**Curriculum Scope:** Embedded Operating Systems Design, Architectural Trade-offs, Mobile Silicon Constraints  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Architectural Motivation & Historical Context

Developing an operating system tailored for mobile smartphones involves navigating constraints fundamentally distinct from those governing general-purpose desktop computing or enterprise servers. Mobile platforms are constrained by:
1. **Strict Thermal Dissipation Ceilings:** Absence of active cooling fans caps sustained power draw at 3W to 5W.
2. **Limited Battery Chemistries:** Lithium-ion batteries mandate aggressive idle suspend states to achieve all-day standby.
3. **Severe Flash Storage Endurance Caps:** Flash memory endurance requires minimizing disk write amplification and swap operations.
4. **Instant User-Interactive Latency Guarantees:** Touch UI frame generation must strictly adhere to 16.6ms (60Hz) or 8.3ms (120Hz) deadlines.

---

## 2. Desktop OS vs Mobile OS: The 4 Structural Trade-offs

\`\`\`
+-----------------------+-----------------------------+-------------------------------+
| Design Axis           | General-Purpose Desktop OS  | Mobile Embedded OS (Android)  |
+-----------------------+-----------------------------+-------------------------------+
| Process Lifecycle     | Managed by user explicitly  | Destroyed proactively by OS   |
| Memory Management     | Swap file paging on NVMe    | ZRAM in-memory swap & LMKD    |
| Power Governance      | Run until AC disconnect     | Default suspend via WakeLocks |
| Security Model        | Multi-user POSIX DAC        | Per-App UID Sandboxing & MAC  |
+-----------------------+-----------------------------+-------------------------------+
\`\`\`

### 2.1 The Process Lifecycle Inversion
In POSIX desktop environments, a process continues execution indefinitely until explicitly terminated by user request or SIGTERM. In Android, background application processes are treated as disposable memory caches. When memory pressure mounts, the kernel Low Memory Killer Daemon (\`lmkd\`) deterministically kills background processes based on an evaluated \`oom_score_adj\` ranking.

---

## 3. Core Architectural Subsystems

1. **Bionic C Library (libc):** Stripped-down POSIX implementation discarding glibc bloat, optimizing for fast thread spawning and tiny memory footprints.
2. **Binder Inter-Process Communication:** Shared-memory kernel IPC mechanism enabling fast, capability-checked Remote Procedure Calls (RPC).
3. **Android Runtime (ART):** Profile-guided ahead-of-time (AOT) and just-in-time (JIT) managed runtime executing optimized DEX bytecode.

---

## 4. Hands-on Engineering Laboratory & Diagnostic CLI

\`\`\`bash
# Inspecting real-time kernel memory watermarks
cat /proc/zoneinfo | grep -E "min|low|high"

# Auditing active CPU frequency scaling governors
cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
\`\`\`

---

## 5. Summary & Key Architectural Principles
Mobile operating system design is the science of graceful degradation under strict energy and memory ceilings. Understanding these foundational trade-offs is essential for architecting high-performance edge AI systems.`
  },

  3: {
    title_eng: "1.2 POSIX GNU/Linux vs Android Bionic Linux: Architectural Divergence",
    tags: "#POSIX #GNULinux #BionicLibc #glibc #LinuxKernel #SystemCalls #DynamicLinker #EmbeddedLinux",
    content_eng: `# 1.2 POSIX GNU/Linux vs Android Bionic Linux: Architectural Divergence
### Android Systems & Bionic Architecture Handbook — Module 1: Lecture 2

**Course Series:** AOSF-HB-2026-SYS-MOD1-02  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** ARM64 (aarch64-linux-android)  
**Curriculum Scope:** glibc vs Bionic libc, Dynamic Linker Internals, System Call Disparities  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. The Bionic Divergence: Why Android Dropped GNU glibc

While Android runs atop the standard Linux kernel, its user-space completely eliminates the GNU C Library (glibc), GNU Coreutils, and Systemd. Google engineered **Bionic libc** to satisfy four mobile-specific objectives:
1. **Lightweight Dynamic Memory Footprint:** Bionic consumes less than one-third the RAM of glibc.
2. **BSD License Compliance:** Eliminating GPL/LGPL licensing constraints from system shared libraries.
3. **Custom Thread Model:** Optimizing \`pthread\` primitives directly for lightweight mobile process trees.
4. **Embedded Security Primitives:** Hardware-backed buffer overflow detection and safe FORTIFY_SOURCE integration.

---

## 2. Comparative Matrix: glibc vs Bionic

| Feature Dimension | GNU glibc | Android Bionic libc |
| :--- | :--- | :--- |
| **Memory Allocator** | ptmalloc3 | jemalloc / Scudo (Hardened) |
| **Dynamic Linker** | \`/lib/ld-linux.so.2\` | \`/system/bin/linker64\` |
| **System Init Daemon**| Systemd / SysVinit | Android \`init\` |
| **NSS / DNS Resolution**| \`/etc/resolv.conf\`, NSS plugins | \`netd\` via Unix Domain Sockets |
| **POSIX Compatibility**| Exhaustive POSIX / GNU extensions| Selective POSIX (No System V IPC)|

---

## 3. The Dynamic Linker (\`/system/bin/linker64\`) Internals
Unlike the GNU dynamic linker which relies heavily on \`/etc/ld.so.cache\`, Bionic's linker implements namespace-isolated dynamic linking. Each application process operates inside a private linker namespace, preventing untrusted code from hijacking vendor hardware libraries.

---

## 4. Laboratory Verification
\`\`\`bash
# Inspecting Bionic dynamic library dependencies
readelf -d $(which ls) | grep NEEDED

# Verifying non-existent System V IPC (Expected: Function not implemented)
ipcs
\`\`\`

---

## 5. Conclusion
Bionic is not merely an alternative C library; it is a specialized execution sandbox tailored for memory density and multi-tenant security on mobile hardware.`
  },

  4: {
    title_eng: "1.3 Android System Bootstrap Pipeline: BootROM to SystemServer",
    tags: "#BootstrapPipeline #BootROM #ABL #LinuxKernelInit #Zygote #SystemServer #InitRC #AndroidBoot",
    content_eng: `# 1.3 Android System Bootstrap Pipeline: BootROM to SystemServer
### Android Systems & Bionic Architecture Handbook — Module 1: Lecture 3

**Course Series:** AOSF-HB-2026-SYS-MOD1-03  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** ARM64 Qualcomm / Samsung Exynos SoCs  
**Curriculum Scope:** Hardware BootROM, Primary Boot Loader (XBL/PBL), Kernel Init, Zygote, SystemServer  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. End-to-End Boot Pipeline Chronology

\`\`\`mermaid
flowchart TD
    ROM["BootROM (Hardware Silicon)"] --> PBL["Primary Bootloader (PBL / XBL)"]
    PBL --> SBL["Secondary Bootloader (ABL / U-Boot)"]
    SBL --> Kernel["Linux Kernel Initialization (swapper/0)"]
    Kernel --> Init["Android init Process (PID 1)"]
    Init --> Zygote["Zygote Daemon (Fork Template)"]
    Zygote --> SS["SystemServer (Core Framework Services)"]
    SS --> Launcher["System UI & Launcher Application"]
\`\`\`

---

## 2. Key Execution Stages

### 2.1 BootROM & Primary Bootloader (Root of Trust)
Hardcoded directly into SoC read-only memory, the BootROM verifies the digital signature of the Primary Bootloader (XBL) against vendor public keys burned into electronic fuses (eFuses), establishing the hardware Root of Trust.

### 2.2 Kernel Initialization to \`init\` (PID 1)
Upon mounting the rootfs image (\`init_boot.img\`), the kernel executes \`/system/bin/init\`. Android's \`init\` parses \`*.rc\` scripts (\`/system/etc/init/hw/init.rc\`), initializes SELinux enforcing mode, creates root mount namespaces, and launches core system daemons.

### 2.3 Zygote & SystemServer Spawning
Zygote is launched to preload standard Java framework classes and Android theme resources into memory. When Zygote initializes, it forks \`SystemServer\` (PID ~1000), which sequentially bootstraps:
- Bootstrap Services: \`ActivityTaskManager\`, \`PackageManagerService\`
- Core Services: \`BatteryService\`, \`UsageStatsService\`
- Other Services: \`WindowManagerService\`, \`NetworkManagementService\`

---

## 3. Hands-on Laboratory
\`\`\`bash
# Tracing Zygote PID and its child process hierarchy
pstree -p $(pidof zygote64)

# Inspecting SystemServer boot duration milestones
dmesg | grep -i "boot_progress"
\`\`\`

---

## 4. Conclusion
The bootstrap pipeline guarantees cryptographically verified hardware integrity while amortizing framework class loading overhead across all subsequently forked applications.`
  },

  5: {
    title_eng: "2.1 Binder IPC Architecture Deep-Dive: Drivers, RPC, and Binder Driver Nodes",
    tags: "#BinderIPC #KernelDriver #Ashmem #RemoteProcedureCall #ServiceManager #AIDL #AndroidIPC",
    content_eng: `# 2.1 Binder IPC Architecture Deep-Dive: Drivers, RPC, and Binder Driver Nodes
### Android Systems & Bionic Architecture Handbook — Module 2: Lecture 1

**Course Series:** AOSF-HB-2026-SYS-MOD2-01  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** Android Linux Kernel Binder Subsystem (\`/dev/binder\`, \`/dev/vndbinder\`)  
**Curriculum Scope:** Binder Driver Architecture, Parcel Serialization, Reference Counting, ServiceManager  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Why Binder? The Failure of Traditional Unix IPC
Standard Linux IPC mechanisms (Unix domain sockets, named pipes, System V shared memory) fail to satisfy mobile requirements:
- **Sockets & Pipes:** Incur two memory copies (User Space $\to$ Kernel $\to$ User Space).
- **Shared Memory:** Lacks built-in caller UID/PID authentication and death notification facilities.
- **Binder Solution:** Implements **Single-Copy Data Transfer** via memory mapping (\`mmap\`) and cryptographically authenticates caller UID/PID at the kernel driver layer.

---

## 2. Single-Copy Memory Transfer Mechanism

\`\`\`
Process A (Client)                     Process B (Server)
[User Space Buffer]                    [User Space Address Space]
        |                                          ^
        | (copy_from_user: 1st & Only Copy)        | (Direct Read via mmap)
        v                                          |
[Kernel Binder Driver] ============================>
             [Server Process Memory Mapped Buffer (mmap: 1MB)]
\`\`\`

During process initialization, the server invokes \`mmap()\` on \`/dev/binder\` with a size limit (typically 1MB - 8KB). When a client transmits data via \`ioctl(BINDER_WRITE_READ)\`, the kernel driver copies data directly from the client's address space into the server's pre-mapped receive buffer, eliminating the intermediate kernel-space copy.

---

## 3. The 3 Specialized Binder Nodes
Android partitions IPC traffic across three dedicated driver nodes:
1. \`/dev/binder\`: Dedicated to high-level framework IPC (Apps $\leftrightarrow$ SystemServer).
2. \`/dev/vndbinder\`: Vendor domain IPC (Vendor HALs $\leftrightarrow$ Vendor Daemons).
3. \`/dev/hwbinder\`: Hardware services domain IPC (HIDL HAL services).

---

## 4. Hands-on Laboratory
\`\`\`bash
# Inspecting active Binder transaction buffers and thread counts
cat /proc/binder/stats

# Auditing registered services in ServiceManager
service list
\`\`\`

---

## 5. Conclusion
Binder is the central nervous system of Android. Its single-copy architecture and hardware-enforced identity guarantees form the foundation of secure mobile application execution.`
  },

  6: {
    title_eng: "2.2 Low Memory Killer (LMK / lmkd) and oom_score_adj Dynamic Evaluation Mechanism",
    tags: "#LowMemoryKiller #lmkd #oom_score_adj #MemoryManagement #KernelOOM #ProcessLifecycle #AndroidMemory",
    content_eng: `# 2.2 Low Memory Killer (LMK / lmkd) and oom_score_adj Dynamic Evaluation Mechanism
### Android Systems & Bionic Architecture Handbook — Module 2: Lecture 2

**Course Series:** AOSF-HB-2026-SYS-MOD2-02  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** Android Kernel Memory Management & User-Space \`lmkd\`  
**Curriculum Scope:** In-kernel LMK vs User-space lmkd, PSI Metrics, oom_score_adj Buckets  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Evolution from In-Kernel LMK to User-Space \`lmkd\`
Originally implemented as an in-tree kernel driver (\`drivers/staging/android/lowmemorykiller.c\`), modern Android has transitioned memory reclamation entirely to the user-space daemon **\`lmkd\`** leveraging Linux kernel **Pressure Stall Information (PSI)**.

---

## 2. The \`oom_score_adj\` Priority Hierarchy

Processes are grouped into priority buckets from -1000 (Protected) to 1000 (Most Killable):

\`\`\`
Process Priority Buckets:
[-1000] NATIVE / SYSTEM     -> init, vold, surfaceflinger (Never Killed)
[-900]  PERSISTENT_SERVICE -> SystemServer, telephony, Bluetooth
[0]     FOREGROUND_APP     -> Currently visible Activity (User focused)
[100]   VISIBLE_APP        -> Non-focused but visible (Split screen, PIP)
[200]   PERCEPTIBLE_APP    -> Background audio player, ongoing notifications
[700]   PREVIOUS_APP       -> Last visited application
[900-999] CACHED_APP       -> Pure background applications (First to be killed)
\`\`\`

---

## 3. Pressure Stall Information (PSI) Trigger Levels
Rather than inspecting static free RAM pages, \`lmkd\` polls \`/proc/pressure/memory\`:
- **Low Pressure:** Minor page cache reclamation.
- **Medium Pressure:** Killing cached processes (\`oom_score_adj \ge 900\`).
- **Critical Pressure:** Aggressive eviction extending into perceptible background services.

---

## 4. Hands-on Laboratory
\`\`\`bash
# Inspecting oom_score_adj of currently running processes
cat /proc/$(pidof com.android.systemui)/oom_score_adj

# Auditing live memory pressure stalls
cat /proc/pressure/memory
\`\`\`

---

## 5. Conclusion
Understanding \`lmkd\` dynamics is paramount for edge AI engineering; designing layer-streamed models prevents processes from ever triggering critical PSI thresholds.`
  },

  7: {
    title_eng: "2.3 Android Memory Subsystem Architecture: Ashmem, ION, DMA-BUF, and ZRAM",
    tags: "#MemorySubsystem #Ashmem #ION #DMABUF #ZRAM #ZeroCopy #SharedMemory #LinuxKernelMemory",
    content_eng: `# 2.3 Android Memory Subsystem Architecture: Ashmem, ION, DMA-BUF, and ZRAM
### Android Systems & Bionic Architecture Handbook — Module 2: Lecture 3

**Course Series:** AOSF-HB-2026-SYS-MOD2-03  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** Linux Kernel Memory Subsystems & Android Allocators  
**Curriculum Scope:** Anonymous Shared Memory (Ashmem), ION Memory Allocator, DMA-BUF Heaps, ZRAM Compression  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Architectural Evolution of Mobile Shared Memory
Mobile graphic rendering and camera capture require transferring multi-megabyte image buffers between heterogeneous silicon accelerators (CPU, GPU, DSP, NPU) without memory copies.
1. **Ashmem (Legacy):** Anonymous shared memory with kernel-level memory pinning/unpinning.
2. **ION (Intermediate):** Vendor-specific contiguous memory allocator.
3. **DMA-BUF Heaps (Modern Standard):** Upstream Linux kernel zero-copy buffer sharing framework using file descriptors.

---

## 2. ZRAM: In-Memory Compressed Swap
Because mobile devices discard physical disk swap partitions to protect flash storage longevity, Android implements **ZRAM**:
- A virtual block device residing in volatile RAM.
- Cold, inactive pages are compressed using LZ4 or ZSTD algorithms and written into ZRAM.
- Achieves typical compression ratios of 2:1 to 3:1, virtually expanding an 8GB physical memory pool into 12GB of addressable capacity.

---

## 3. Hands-on Laboratory
\`\`\`bash
# Inspecting active ZRAM compression ratio and disk utilization
zramctl

# Checking system-wide DMA-BUF allocations
cat /sys/kernel/debug/dma_buf/bufinfo
\`\`\`

---

## 4. Conclusion
Mastering DMA-BUF zero-copy primitives and ZRAM compression dynamics allows edge AI workloads to process massive tensors while bypassing host-to-device copy overhead.`
  },

  8: {
    title_eng: "2.4 Power Governance Subsystems: WakeLocks, Runtime PM, and Energy-Aware Scheduling",
    tags: "#PowerGovernance #WakeLocks #RuntimePM #EAS #EnergyAwareScheduling #ThermalThrottling #BatteryEfficiency",
    content_eng: `# 2.4 Power Governance Subsystems: WakeLocks, Runtime PM, and Energy-Aware Scheduling
### Android Systems & Bionic Architecture Handbook — Module 2: Lecture 4

**Course Series:** AOSF-HB-2026-SYS-MOD2-04  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** Linux Kernel Energy Model & Android Power HAL  
**Curriculum Scope:** Kernel WakeLocks, Energy-Aware Scheduling (EAS), Runtime PM, Big.LITTLE Core Placement  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. The Mobile Power Imperative: Deep Sleep vs WakeLocks
Unlike server hardware, a mobile device must transition into Deep Suspend (Sleep) the instant the display panel powers down.
- **WakeLocks:** Mechanism allowing privileged software to prevent the kernel from entering deep suspend while executing background tasks (e.g., audio playback, sensor polling).
- **Runtime PM:** Device-driver level dynamic power management powering down idle silicon blocks (e.g., turning off GPU shader cores between VSYNC pulses).

---

## 2. Energy-Aware Scheduling (EAS) on Heterogeneous Arm SoCs
Modern mobile SoCs feature heterogeneous Arm Big.LITTLE or DynamIQ architectures (e.g., 1 Prime + 3 Big + 4 Little cores).
- **Energy Model:** The kernel maintains a mathematical model of energy consumption per frequency state.
- **Task Placement:** EAS places high-throughput, latency-critical threads on Prime cores while packing light background daemons onto energy-efficient Little cores.

---

## 3. Hands-on Laboratory
\`\`\`bash
# Inspecting active kernel WakeLocks preventing system sleep
cat /sys/power/wake_lock

# Checking CPU frequency scaling across big and little clusters
cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_cur_freq
\`\`\`

---

## 4. Conclusion
Aligning thread priorities with Energy-Aware Scheduling profiles ensures that sustained on-device neural workloads maintain high throughput without triggering severe battery drainage.`
  },

  9: {
    title_eng: "3.1 Evolution of Hardware Abstraction Layers: Monolithic to Stable AIDL",
    tags: "#HAL #HardwareAbstraction #ProjectTreble #HIDL #StableAIDL #BinderizedHAL #AndroidBSP",
    content_eng: `# 3.1 Evolution of Hardware Abstraction Layers: Monolithic to Stable AIDL
### Android Systems & Bionic Architecture Handbook — Module 3: Lecture 1

**Course Series:** AOSF-HB-2026-SYS-MOD3-01  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** Android HAL Architecture (Android 8.0 Treble to Android 14+ Stable AIDL)  
**Curriculum Scope:** Legacy Monolithic HALs, HIDL Binderization, Stable AIDL, GSI Compatibility  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Project Treble: Decoupling Framework from Silicon BSP
Prior to Android 8.0, Hardware Abstraction Layers were compiled directly as shared libraries (\`libhardware.so\`) linked directly into the framework process space. This monolithic coupling meant Android OS updates required silicon vendors (Qualcomm, MediaTek, Samsung) to recompile device Board Support Packages (BSPs).

---

## 2. The Architectural Shift: Monolithic $\to$ HIDL $\to$ Stable AIDL

\`\`\`
Monolithic (Legacy):
[SystemServer] <=== dlopen() ===> [Vendor HAL Shared Object (libcamera.so)]

Binderized Stable AIDL (Modern):
[SystemServer (system.img)]
       |
       v (RPC via /dev/binder or /dev/vndbinder)
[Vendor Camera HAL Process (vendor.img)]
\`\`\`

- **HIDL (Android 8-10):** Introduced typed IPC interfaces for hardware access, separating \`system.img\` from \`vendor.img\`.
- **Stable AIDL (Android 11+):** Deprecated HIDL, unifying framework IPC and hardware HAL interfaces under a single, version-stable AIDL compiler.

---

## 3. Hands-on Laboratory
\`\`\`bash
# Auditing all registered hardware HAL services
lshal

# Inspecting running vendor HAL processes
ps -A | grep -E "android.hardware|vendor"
\`\`\`

---

## 4. Conclusion
Stable AIDL decouples the operating system lifecycle from underlying silicon drivers, establishing clean architectural boundaries essential for deploying portable edge runtimes.`
  },

  10: {
    title_eng: "3.2 Android Graphics Pipeline: Gralloc, HWComposer, SurfaceFlinger, and VSYNC Lockstep",
    tags: "#GraphicsPipeline #SurfaceFlinger #HardwareComposer #Gralloc #VSYNC #TripleBuffering #VulkanRendering",
    content_eng: `# 3.2 Android Graphics Pipeline: Gralloc, HWComposer, SurfaceFlinger, and VSYNC Lockstep
### Android Systems & Bionic Architecture Handbook — Module 3: Lecture 2

**Course Series:** AOSF-HB-2026-SYS-MOD3-02  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** Android Graphics Architecture & Display Subsystem  
**Curriculum Scope:** Graphic Buffer Allocator (Gralloc), SurfaceFlinger, Hardware Composer (HWC), VSYNC Lockstep  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. The Path of a Pixel: From View Hierarchy to Display Glass

\`\`\`mermaid
flowchart TD
    App["Application UI Thread (RenderThread)"] -->|Draw Commands| Canvas["Skia / Vulkan Canvas"]
    Canvas -->|Dequeue / Enqueue Buffer| Gralloc["Gralloc GraphicBuffer"]
    Gralloc -->|Binder Queue| SF["SurfaceFlinger (Compositor)"]
    SF -->|Layer Composition| HWC["Hardware Composer (HWC)"]
    HWC -->|Direct Scanout| Display["Display Hardware Panel (VSYNC 120Hz)"]
\`\`\`

---

## 2. Key Graphics Engine Components

### 2.1 Gralloc (Graphic Memory Allocator)
Gralloc allocates contiguous graphic buffers directly accessible by both CPU (virtual address) and GPU/display hardware (physical/DMA address).

### 2.2 SurfaceFlinger & Hardware Composer (HWC)
SurfaceFlinger accepts buffer queues from all active windows. Rather than using the GPU to blend all layers (which wastes power), SurfaceFlinger delegates window blending to the **Hardware Composer (HWC)** display hardware overlay planes, achieving zero-GPU composition.

### 2.3 VSYNC Lockstep & Triple Buffering
To eliminate visual tearing and UI jank, the Choreographer synchronizes input sampling, animation evaluation, and rendering passes with periodic hardware VSYNC signals.

---

## 3. Hands-on Laboratory
\`\`\`bash
# Dumping real-time SurfaceFlinger composition layers and frame latency
dumpsys SurfaceFlinger --latency

# Checking Hardware Composer overlay allocation status
dumpsys SurfaceFlinger
\`\`\`

---

## 4. Conclusion
Understanding the Gralloc-SurfaceFlinger pipeline ensures that edge computer vision and AI rendering pipelines exchange frames without redundant memory copies.`
  },

  11: {
    title_eng: "3.3 ARM Mali GPU DDK Architecture, r32p1 Lineage, and Vulkan Queue Internals",
    tags: "#ARMMali #MaliDDK #VulkanQueue #JobManager #ValhallArchitecture #GPUInternals #DriverDeadlock",
    content_eng: `# 3.3 ARM Mali GPU DDK Architecture, r32p1 Lineage, and Vulkan Queue Internals
### Android Systems & Bionic Architecture Handbook — Module 3: Lecture 3

**Course Series:** AOSF-HB-2026-SYS-MOD3-03  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** ARM Mali Bifrost & Valhall GPUs (Mali-G68, Mali-G78, Mali-G710)  
**Curriculum Scope:** Mali DDK Architecture, Kernel Job Manager, Vulkan Compute Command Queues, Driver Deadlock Forensics  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Architectural Lineage: Utgard $\to$ Midgard $\to$ Bifrost $\to$ Valhall
ARM Mali GPU microarchitectures have evolved from early Utgard fixed-function pipelines to modern superscalar, warp-based execution engines:
- **Bifrost:** Quad-based execution engine with clause-based instruction scheduling.
- **Valhall:** 16-thread wide superscalar execution engine (Warp/Subgroup size 16), dynamic register allocation, and unified memory hierarchy.

---

## 2. The Mali Device Driver Kit (DDK) Stack

\`\`\`
User Space:
[Application: Vulkan 1.3 / OpenCL 2.0]
                 |
                 v
[Mali User-Space DDK: /vendor/lib64/egl/libGLES_mali.so]
- SPIR-V Compiler, Workgroup Dispatcher, Descriptor Manager
-----------------------------------------------------------------
Kernel Space:
                 | (ioctl /dev/mali0)
                 v
[Mali Kernel Driver: /drivers/gpu/arm/midgard/mali_kbase.ko]
- Job Slot Scheduler, MMU Page Table Manager, Power/DVFS Manager
-----------------------------------------------------------------
Hardware Silicon:
[Mali GPU Execution Cores (Job Manager & Hardware Ring Buffers)]
\`\`\`

---

## 3. Subgroup Size 16 vs 32 & Command Queue Deadlocks
Because desktop GPUs and Qualcomm Adreno predominantly feature 32- or 64-thread wavefronts, many cross-platform compute shaders implicitly assume 32-thread subgroup reduction reductions. On ARM Mali hardware, executing shaders without explicit \`subgroupSize == 16\` tailoring provokes infinite wait loops and kernel GPU watchdog timeouts (\`ErrorDeviceLost\`).

---

## 4. Hands-on Laboratory
\`\`\`bash
# Inspecting active Mali GPU driver parameters and hardware clocks
cat /sys/kernel/gpu/gpu_busy
cat /sys/class/misc/mali0/device/gpuinfo
\`\`\`

---

## 5. Conclusion
Mastering Mali DDK job management and subgroup semantics is essential for stable, sustained on-device neural acceleration on Exynos and Dimensity mobile platforms.`
  }
};
