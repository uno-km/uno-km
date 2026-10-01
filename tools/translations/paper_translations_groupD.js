// tools/translations/paper_translations_groupD.js
// High-grade Academic Translations for Systems Handbook Modules 4 to 6 (Indices 12 to 21)

export const GROUP_D_TRANSLATIONS = {
  12: {
    title_eng: "4.1 Dalvik VM vs ART: Architectural Paradigm Shift",
    tags: "#Dalvik #ART #AndroidRuntime #JITCompilation #AOTCompilation #BytecodeExecution #VirtualMachineArchitecture #DEX",
    content_eng: `# 4.1 Dalvik VM vs ART: Architectural Paradigm Shift
### Android Systems & Bionic Architecture Handbook — Module 4: Lecture 1

**Course Series:** AOSF-HB-2026-SYS-MOD4-01  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** Android Runtime (ART) Virtual Machine Architecture  
**Curriculum Scope:** Stack vs Register Machines, Dalvik JIT Limitations, Ahead-of-Time Compilation, Native Execution  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Register-Based Architecture vs Stack-Based Machines
Standard Java Virtual Machines (JVM) are stack-based. In contrast, Google designed **Dalvik and ART** as **Register-Based Virtual Machines**:
- **Instruction Density:** Register machines require ~30% fewer bytecode instructions to express identical algorithms.
- **Memory Bandwidth:** Reduces stack push/pop memory traffic, vital for resource-constrained mobile CPUs.

---

## 2. From Dalvik JIT to ART Ahead-Of-Time (AOT) Compilation

\`\`\`
Dalvik (Legacy):
[DEX Bytecode] ---> [Runtime JIT Compiler] ---> [Machine Code (Discarded on Exit)]
- Repeated compilation overhead every app launch; heavy CPU battery drain.

ART (Modern):
[DEX Bytecode] ---> [Ahead-of-Time dex2oat Compiler] ---> [Native ELF Shared Object (.oat)]
- Pre-compiled directly into native ARM64 machine instructions during app installation.
\`\`\`

---

## 3. Hands-on Laboratory
\`\`\`bash
# Inspecting runtime VM properties
getprop | grep -E "vm|art"

# Checking compiled OAT and VDEX files in the ART cache
ls -lh /data/dalvik-cache/arm64/
\`\`\`

---

## 4. Conclusion
The shift from Dalvik to ART transformed Android from an interpreted scripting platform into an optimized native execution environment.`
  },

  13: {
    title_eng: "4.2 Hybrid Compilation Pipeline: JIT, AOT dex2oat, and Profile-Guided PGO",
    tags: "#HybridCompilation #dex2oat #JIT #AOT #ProfileGuidedOptimization #PGO #ARTInternals #PerformanceOptimization",
    content_eng: `# 4.2 Hybrid Compilation Pipeline: JIT, AOT dex2oat, and Profile-Guided PGO
### Android Systems & Bionic Architecture Handbook — Module 4: Lecture 2

**Course Series:** AOSF-HB-2026-SYS-MOD4-02  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** ART Compilation Subsystem (\`dex2oat\`, ProfileSaver)  
**Curriculum Scope:** The Tri-Tier Compilation Pipeline: JIT, Cloud Profiles, Baseline AOT, Maintenance PGO  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. The Pure AOT Dilemma & The Tri-Tier Hybrid Solution
While early ART (Android 5.0) compiled entire APKs ahead of time using \`dex2oat\`, this caused two major drawbacks:
1. **Prolonged App Installation Times:** Huge APKs took several minutes to compile.
2. **Storage Footprint Inflation:** Native code files consumed double or triple the original storage space.

Android 7.0+ solved this by introducing the **Tri-Tier Hybrid Compilation Pipeline**:

\`\`\`
Application Execution Flow:
1. First Launch: Fast interpreted DEX + Lightweight JIT (Zero install delay)
        |
        v
2. Profile Generation: ART ProfileSaver logs hot methods & classes into .prof files
        |
        v
3. Idle Maintenance: When phone is idle and charging, dex2oat compiles ONLY hot code
        |
        v
4. Subsequent Launches: Blazing native AOT execution for critical paths, compact DEX for cold paths
\`\`\`

---

## 2. Hands-on Laboratory
\`\`\`bash
# Forcing compilation of a specific package using speed-profile filter
cmd package compile -m speed-profile -f com.android.settings

# Dumping current compilation status across installed packages
dumpsys package dexopt
\`\`\`

---

## 3. Conclusion
Profile-guided hybrid compilation achieves optimal equilibrium between instant app install speeds and maximum steady-state execution throughput.`
  },

  14: {
    title_eng: "4.3 ART Garbage Collection: Concurrent Copying GC & Generational Regions",
    tags: "#GarbageCollection #ARTGC #ConcurrentCopying #GenerationalRegions #Compaction #MemoryDefragmentation #MobileRuntime",
    content_eng: `# 4.3 ART Garbage Collection: Concurrent Copying GC & Generational Regions
### Android Systems & Bionic Architecture Handbook — Module 4: Lecture 3

**Course Series:** AOSF-HB-2026-SYS-MOD4-03  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** ART Heap Management & Garbage Collection Engine  
**Curriculum Scope:** Concurrent Copying (CC) Collector, Generational Regions, Read Barriers, Pauseless GC  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Eliminating Stop-The-World (STW) UI Jank
In legacy Dalvik, GC cycles paused all mutator (UI) threads for 10ms to 50ms, causing noticeable frame drops and UI stutter. Modern ART employs the **Concurrent Copying (CC) Garbage Collector**:
- **Concurrent Heap Compaction:** Mutator threads continue executing while objects are actively copied and compacted.
- **Hardware Read Barriers:** Uses Baker read barriers to ensure mutator threads always read updated object addresses without synchronization locks.
- **Sub-Millisecond Pauses:** Reduces Stop-The-World pause durations to under **0.5 milliseconds**.

---

## 2. Generational Region Heap Topology

\`\`\`
ART Managed Heap (Region-Based Memory Layout):
+------------+------------+------------+------------+------------+
| Region 0   | Region 1   | Region 2   | Region 3   | Region 4   |
| (Young Gen)| (Young Gen)| (Survivor) | (Promoted) | (Old Gen)  |
+------------+------------+------------+------------+------------+
* Young allocations occur in fresh regions; surviving objects age and consolidate.
\`\`\`

---

## 3. Hands-on Laboratory
\`\`\`bash
# Dumping detailed ART heap statistics for a target application
dumpsys meminfo com.android.systemui

# Forcing a GC cycle and monitoring allocation pauses via logcat
logcat -s "art:I"
\`\`\`

---

## 4. Conclusion
Concurrent Copying GC delivers defragmented memory heaps and predictable frame delivery, critical for real-time mobile multi-modal AI runtimes.`
  },

  15: {
    title_eng: "5.1 SystemServer Topology & ServiceManager Governance",
    tags: "#SystemServer #ServiceManager #AndroidFramework #BootstrapArchitecture #ProcessTopology #AIDLServiceRegistry",
    content_eng: `# 5.1 SystemServer Topology & ServiceManager Governance
### Android Systems & Bionic Architecture Handbook — Module 5: Lecture 1

**Course Series:** AOSF-HB-2026-SYS-MOD5-01  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** Android SystemServer (PID ~1000) & Native ServiceManager (\`/system/bin/servicemanager\`)  
**Curriculum Scope:** SystemServer Lifecycle, Service Registry, Watchdog Architecture, Deadlock Mitigation  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. The Monolithic Kernel of User Space: SystemServer
SystemServer hosts over 100 core framework services within a single privileged Java process. If SystemServer crashes (or suffers an internal watchdog timeout exceeding 60 seconds), the \`init\` daemon interprets it as a critical system failure and restarts the entire Android framework (\`zygote\` and \`SystemServer\`).

---

## 2. ServiceManager: The Root Binder DNS
Before an application can communicate with a framework service (e.g., \`activity\`, \`window\`, \`package\`), it queries **ServiceManager** (located at special Binder handle 0):
1. ServiceManager validates that the publishing service holds permission to register its name.
2. Clients request an \`IBinder\` proxy token by service name string.
3. ServiceManager returns the Binder reference, allowing direct peer-to-peer IPC thereafter.

---

## 3. Hands-on Laboratory
\`\`\`bash
# Querying all registered Binder services from ServiceManager
service list | head -n 20

# Checking SystemServer thread count and file descriptor usage
ls /proc/$(pidof system_server)/fd | wc -l
\`\`\`

---

## 4. Conclusion
SystemServer centralizes system orchestration while ServiceManager provides secure name resolution, maintaining cohesive operational governance across the platform.`
  },

  16: {
    title_eng: "5.2 AMS / ATMS: Process Hierarchy & Task Tree Governance",
    tags: "#ActivityManager #ATMS #TaskTree #ProcessHierarchy #AppLifecycle #BackStack #ProcessGovernance",
    content_eng: `# 5.2 AMS / ATMS: Process Hierarchy & Task Tree Governance
### Android Systems & Bionic Architecture Handbook — Module 5: Lecture 2

**Course Series:** AOSF-HB-2026-SYS-MOD5-02  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** \`ActivityTaskManagerService\` (ATMS) & \`ActivityManagerService\` (AMS)  
**Curriculum Scope:** Activity Lifecycle State Machine, Task Display Areas, Process Adj Management  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Separation of Responsibilities: AMS vs ATMS
In modern Android, process and activity governance is split:
- **ATMS (ActivityTaskManagerService):** Governs user-facing UI entities: Activities, Task stacks, BackStack transitions, and multi-window split display areas.
- **AMS (ActivityManagerService):** Governs underlying OS processes: process fork requests via Zygote, Broadcast Receivers, Service bindings, and \`oom_score_adj\` calculation.

---

## 2. The Task Hierarchy Model
\`\`\`
DisplayContent (Physical Display)
  └── TaskDisplayArea (Default Display Area)
        └── RootTask (e.g., Split Screen Top / Fullscreen)
              └── Task (Application BackStack)
                    ├── ActivityRecord (Top Visible Activity)
                    └── ActivityRecord (Previous Activity)
\`\`\`

---

## 3. Hands-on Laboratory
\`\`\`bash
# Dumping current active Task hierarchy and focus
dumpsys activity activities | grep -E "Stack #|Task id"

# Checking real-time process importance rankings
dumpsys activity processes
\`\`\`

---

## 4. Conclusion
ATMS and AMS coordinate application process lifecycles with user interaction state, translating visual focus into deterministic memory protection priorities.`
  },

  17: {
    title_eng: "5.3 Window Management Subsystem (WMS) & Input Event Routing",
    tags: "#WMS #WindowManager #InputSubsystem #InputFlinger #EventHub #TouchDispatch #ANRForensics",
    content_eng: `# 5.3 Window Management Subsystem (WMS) & Input Event Routing
### Android Systems & Bionic Architecture Handbook — Module 5: Lecture 3

**Course Series:** AOSF-HB-2026-SYS-MOD5-03  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** WindowManagerService (WMS) & Native InputFlinger (\`EventHub\`, \`InputDispatcher\`)  
**Curriculum Scope:** Window Layering, Surface Allocation, Input Event Pipeline, ANR Timeout Detection  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Input Event Pipeline Architecture

\`\`\`mermaid
flowchart TD
    Driver["Touchscreen /dev/input/event*"] --> EventHub["InputFlinger EventHub"]
    EventHub --> Reader["InputReader (Coordinate Transformation)"]
    Reader --> Dispatcher["InputDispatcher (Focus Resolution)"]
    Dispatcher -->|InputChannel (Unix Socket)| App["App ViewRootImpl (UI Thread)"]
    App --> Dispatch["TouchEvent Dispatch / OnClickListener"]
\`\`\`

---

## 2. Window Layering & ANR Watchdog
- **Z-Order Ordering:** WMS determines the exact Z-order layering of all windows (Status bar, Navigation bar, Application windows, Dialogs, Tooltips) and configures SurfaceFlinger layers accordingly.
- **ANR (Application Not Responding) Detection:** If an application UI thread fails to consume and acknowledge an input event within **5.0 seconds**, \`InputDispatcher\` triggers an ANR interrupt, generating a stack trace dump in \`/data/anr/\`.

---

## 3. Hands-on Laboratory
\`\`\`bash
# Inspecting current window focus and input channel socket pairings
dumpsys window | grep -E "mCurrentFocus|mFocusedApp"

# Checking real-time input event queue statistics
dumpsys input
\`\`\`

---

## 4. Conclusion
WMS and InputFlinger route physical touch events with microsecond latency, establishing strict accountability through ANR monitoring.`
  },

  18: {
    title_eng: "5.4 Power Governance: Doze Mode, App Standby, and Phantom Process Killer",
    tags: "#DozeMode #AppStandby #PhantomProcessKiller #BatteryGovernance #BackgroundThrottling #AndroidEnergy",
    content_eng: `# 5.4 Power Governance: Doze Mode, App Standby, and Phantom Process Killer
### Android Systems & Bionic Architecture Handbook — Module 5: Lecture 4

**Course Series:** AOSF-HB-2026-SYS-MOD5-04  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** Android Power Governance & Phantom Process Killer  
**Curriculum Scope:** Deep Doze vs Light Doze, App Standby Buckets, Maintenance Windows, Phantom Process Limit  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. The Multi-Layer Power Restriction Stack

\`\`\`
+---------------------------------------------------------------+
| App Standby Buckets: Active -> Working Set -> Frequent -> Rare |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
| Light Doze: Screen Off -> Network Access Paused               |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
| Deep Doze: Stationary -> WakeLocks Disabled, Alarms Deferred  |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
| Phantom Process Killer: Maximum 32 Child Processes Allowed   |
+---------------------------------------------------------------+
\`\`\`

---

## 2. The Phantom Process Killer (Android 12+)
To prevent malicious background applications from spawning hidden native fork daemons (e.g., cryptocurrency miners or rogue servers), Android limits all background processes spawned by an app to a maximum of **32 total child processes**. Breaching this limit triggers instant SIGKILL.

---

## 3. Hands-on Laboratory
\`\`\`bash
# Forcing system into Deep Doze mode immediately
dumpsys deviceidle force-idle

# Inspecting current App Standby Bucket assignments
dumpsys usagestats get-app-standby-bucket com.termux
\`\`\`

---

## 4. Conclusion
Navigating Doze mode and Phantom Process constraints is crucial for long-running edge computing and continuous background AI workers on mobile devices.`
  },

  19: {
    title_eng: "6.1 UID/GID Multitenancy Application Sandboxing",
    tags: "#Sandboxing #Multitenancy #UIDGID #DiscretionaryAccessControl #AppIsolation #SecurityArchitecture #LinuxSecurity",
    content_eng: `# 6.1 UID/GID Multitenancy Application Sandboxing
### Android Systems & Bionic Architecture Handbook — Module 6: Lecture 1

**Course Series:** AOSF-HB-2026-SYS-MOD6-01  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** Linux Discretionary Access Control (DAC) & Android UID Sandboxing  
**Curriculum Scope:** Per-Application Linux UIDs, Filesystem Permissions, Private App Sandboxes  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Rethinking the Unix User: From Humans to Applications
In standard Unix systems, UIDs represent human users sharing a workstation. Android inverted this design paradigm:
- **Every Installed App Receives a Unique Linux UID:** (e.g., \`u0_a142\`, numeric UID \`10142\`).
- **Filesystem Isolation:** Application private data (\`/data/data/<package>\`) is created with \`drwx------\` mode owned exclusively by that UID.
- **Inter-App Isolation:** Process memory and files cannot be inspected by peer applications without explicit shared UID declarations.

---

## 2. Hands-on Laboratory
\`\`\`bash
# Auditing application UIDs and private directory permissions
ls -ld /data/data/com.termux

# Inspecting running process UID and GID groups
id
\`\`\`

---

## 3. Conclusion
Repurposing Unix UIDs as application boundaries forms Android's primary layer of defense-in-depth, preventing cross-application privilege elevation.`
  },

  20: {
    title_eng: "6.2 SELinux Type Enforcement and Domain Transition Governance",
    tags: "#SELinux #TypeEnforcement #DomainTransition #MandatoryAccessControl #AndroidSecurity #Neverallow #SecurityPolicy",
    content_eng: `# 6.2 SELinux Type Enforcement and Domain Transition Governance
### Android Systems & Bionic Architecture Handbook — Module 6: Lecture 2

**Course Series:** AOSF-HB-2026-SYS-MOD6-02  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** Security-Enhanced Linux (SELinux) in Android Kernel  
**Curriculum Scope:** Mandatory Access Control (MAC), Type Enforcement, Context Labeling, Domain Transitions  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. Why DAC is Insufficient: Mandatory Access Control (MAC)
Even if an attacker gains root privileges (UID 0), Discretionary Access Control (DAC) would permit unrestricted filesystem writes. SELinux enforces **Mandatory Access Control (MAC)**:
- Every process runs inside a confined **Security Domain** (e.g., \`u:r:untrusted_app:s0\`).
- Every resource possesses a fixed **Type Context** (e.g., \`u:object_r:system_file:s0\`).
- Explicit allow rules must exist; everything else is denied by default.

---

## 2. Domain Transitions & Neverallow Rules
When an application launches an executable, SELinux enforces strict domain transitions:
\`\`\`text
allow untrusted_app app_data_file:file { execute open read };
neverallow untrusted_app system_data_file:file write;
\`\`\`
The Android Open Source Project enforces thousands of compile-time \`neverallow\` assertions that prevent OEMs from weakening core system security policies.

---

## 3. Hands-on Laboratory
\`\`\`bash
# Checking current SELinux enforcement mode
getenforce

# Inspecting SELinux context of active processes
ps -AZ | head -n 15
\`\`\`

---

## 4. Conclusion
SELinux confines root exploits to isolated security domains, establishing an unbreachable barrier around modern Android kernels.`
  },

  21: {
    title_eng: "6.3 Hardware-Backed Keystore, TrustZone TEE, and Samsung Knox Architecture",
    tags: "#HardwareKeystore #TrustZone #TEE #SamsungKnox #Keymaster #KeyMint #HardwareSecurity #Biometrics",
    content_eng: `# 6.3 Hardware-Backed Keystore, TrustZone TEE, and Samsung Knox Architecture
### Android Systems & Bionic Architecture Handbook — Module 6: Lecture 3

**Course Series:** AOSF-HB-2026-SYS-MOD6-03  
**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Target Architecture:** ARM TrustZone Hardware, KeyMint TEE, Samsung Knox  
**Curriculum Scope:** Hardware Root of Trust, Secure World vs Normal World, Keymaster/KeyMint, Knox Containers  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## 1. ARM TrustZone: Silicon-Level World Separation
Modern ARM processors implement two physical security states:
- **Normal World (Rich Execution Environment - REE):** Hosts the Linux kernel, Android framework, and user applications.
- **Secure World (Trusted Execution Environment - TEE):** Runs a tiny trusted microkernel (e.g., Qualcomm QSEE, Trusty OS) with isolated memory and peripherals.

\`\`\`
+-----------------------------+      +-----------------------------+
| Normal World (REE: Android) |      | Secure World (TEE: Trusty)  |
| - Linux Kernel              |      | - KeyMint Hardware Cryptography|
| - Android Framework         |      | - Fingerprint / Biometrics  |
+-----------------------------+      +-----------------------------+
               \\                            /
                \\-- [SMC: Secure Monitor Call] --/
\`\`\`

---

## 2. KeyMint & Hardware-Backed Keystore
Cryptographic keys marked as hardware-backed never enter Android Linux memory. All cryptographic operations (RSA signing, AES decryption) occur entirely within the TEE, impervious to kernel-level root compromises.

---

## 3. Hands-on Laboratory
\`\`\`bash
# Inspecting hardware-backed KeyMint HAL service
service list | grep -i "keystore"

# Auditing Knox container status on Samsung hardware
dumpsys knox
\`\`\`

---

## 4. Conclusion
Hardware-backed TEEs protect cryptographic identities from hostile execution environments, safeguarding sovereign data privacy on commodity mobile hardware.`
  }
};
