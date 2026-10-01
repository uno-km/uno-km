// tools/translations/paper_translations_groupB.js
// Translations for Edge Cluster Research (37, 38, 39, 40)

export const GROUP_B_TRANSLATIONS = {
  37: {
    title_eng: "Dual-Master High-Availability Failover Architecture for Edge Computing Using Workstation and Mobile Nodes",
    tags: "#DualMaster #HighAvailability #Failover #MobileCluster #SelfHealingWatchdog #EdgeComputing #TermuxOrchestration",
    content_eng: `# Dual-Master High-Availability Failover Architecture for Edge Computing Using Workstation and Mobile Nodes
### Technical Research Monograph Series: AOSF-TR-2026-CLUSTER-FAILOVER-01

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Publication Date:** September 20, 2026  
**Target Environment:** Heterogeneous PC Workstation (Master A) & Samsung Galaxy Smartphone (Master B)  
**Software Stack:** Android Termux, Python 3.12, Raft-Lite Consensus, Systemd / Init Daemon Watchdog  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## Abstract

This paper presents the architectural design and empirical validation of a **Dual-Master High-Availability (HA) Failover Architecture** engineered to sustain edge computing services across hybrid workstation-mobile topologies.

Edge computing topologies frequently suffer single-point-of-failure (SPOF) vulnerabilities when host workstations undergo sudden power interruptions, kernel panics, or scheduled maintenance. To ensure high availability, we implemented a dual-master consensus cluster wherein a flagship Android mobile node (Samsung Galaxy) acts as a warm standby supervisor. By employing heartbeat telemetry over low-latency socket tunnels, distributed state synchronization via SQLite WAL journaling, and an automated virtual IP takeover protocol, the mobile node detects primary workstation failure within **1.8 seconds** and transitions into active orchestrator mode. Empirical stress testing confirms uninterrupted service continuity across simulated power losses with zero data loss.

---

## 1. Architectural Topology & Consensus

\`\`\`
+---------------------------------------------------------------+
|         Host Workstation Node (Master A: Primary)             |
|         - High-Compute Workload Dispatcher                    |
|         - Periodic Heartbeat Broadcaster (200ms Interval)     |
+---------------------------------------------------------------+
                               |
                   Heartbeat & WAL Sync (P2P Mesh)
                               v
+---------------------------------------------------------------+
|         Mobile Galaxy Node (Master B: Warm Standby)           |
|         - Quorum Monitor & Heartbeat Watchdog Daemon          |
|         - Fast Failover Activation Trigger (Threshold: 1.8s)  |
+---------------------------------------------------------------+
                               |
                               v
+---------------------------------------------------------------+
|               Worker Fleet Nodes (S20, A35, A53)              |
|               - Receive Inference Tasks from Active Master    |
+---------------------------------------------------------------+
\`\`\`

---

## 2. Empirical Benchmark Verification

| Failure Simulation Event | Heartbeat Timeout | Failover Latency | Data Consistency |
| :--- | :--- | :--- | :--- |
| **Workstation Power Cut** | 1,500 ms | **1,820 ms** | **100% (Zero Record Loss)** |
| **Ethernet Cable Disconnect** | 1,500 ms | **1,790 ms** | **100% (Zero Record Loss)** |
| **Kernel Freeze (SIGSTOP)** | 1,500 ms | **1,840 ms** | **100% (Zero Record Loss)** |

---

## 3. Conclusion
The dual-master architecture eliminates single points of failure in edge computing by leveraging resilient mobile devices as self-healing supervisors, ensuring carrier-grade reliability across distributed nodes.`
  },

  38: {
    title_eng: "Heterogeneous Multi-Device Distributed AI Inference Pipeline and Autonomous Process Self-Healing Architecture",
    tags: "#DistributedAI #HeterogeneousInference #ProcessSelfHealing #MobileFleet #DynamicLoadBalancing #AutoRecovery #Watchdog",
    content_eng: `# Heterogeneous Multi-Device Distributed AI Inference Pipeline and Autonomous Process Self-Healing Architecture
### Technical Research Monograph Series: AOSF-TR-2026-CLUSTER-DISTRIB-02

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Publication Date:** September 21, 2026  
**Target Architecture:** Distributed Mobile Cluster (Samsung Galaxy S25, S21, S20, A35)  
**Runtime:** AMEVA Cluster Orchestrator v2.0, ZeroMQ, Bionic Process Monitor  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## Abstract

This technical monograph details a distributed inference scheduling and self-healing framework designed for heterogeneous edge devices. In real-world edge deployments, nodes possess vastly disparate computational capabilities (e.g., Oryon vs. Cortex-A78) and are subject to abrupt process termination by mobile operating system daemons (\`lmkd\`).

Our architecture establishes:
1. **Dynamic Capability-Weighted Load Balancing:** Dispatching tensor tasks proportional to benchmarked FLOPs and available RAM safety margins.
2. **Process Liveness Watchdogs:** Monitoring PID resident set sizes and restarting crashed workers within **340ms**.
3. **Pipeline Task Checkpointing:** Preserving partial prompt-evaluation states to resume inference seamlessly upon worker recovery.

---

## 1. Capability-Weighted Scheduling Formulation
Let $C_i$ denote the normalized compute throughput of node $i$ and $M_i^{\\text{free}}$ denote available RAM:
$$W_i = \\gamma \\cdot \\frac{C_i}{\\sum_k C_k} + (1 - \\gamma) \\cdot \\frac{M_i^{\\text{free}}}{\\sum_k M_k^{\\text{free}}}$$
Task batches $\\mathcal{B}$ are apportioned such that $|\mathcal{B}_i| \\propto W_i$, minimizing idle synchronization barriers across heterogeneous clusters.

---

## 2. Empirical Fleet Performance
| Fleet Node | Hardware Silicon | Assigned Workload | Mean Latency | Auto-Recovery Time |
| :--- | :--- | :--- | :--- | :--- |
| **Galaxy S25** | Snapdragon 8 Elite | 45% (High Batch) | 28.4 tok/s | 310 ms |
| **Galaxy S21** | Exynos 2100 | 25% (Medium Batch) | 16.8 tok/s | 340 ms |
| **Galaxy A35** | Exynos 1380 | 15% (Light Batch) | 8.2 tok/s | 360 ms |
| **Galaxy S20** | Snapdragon 865 | 15% (Light Batch) | 8.4 tok/s | 350 ms |

---

## 3. Conclusion
Dynamic weighted scheduling paired with sub-second process self-healing enables reliable, high-throughput distributed neural computation across consumer mobile fleets.`
  },

  39: {
    title_eng: "Construction of Low-Latency P2P Mesh Overlay Networks Across Mobile Devices via WireGuard and Tailscale",
    tags: "#WireGuard #Tailscale #P2PMesh #OverlayNetwork #MobileVPN #NATTraversal #ZeroTrust #EdgeNetworking",
    content_eng: `# Construction of Low-Latency P2P Mesh Overlay Networks Across Mobile Devices via WireGuard and Tailscale
### Technical Research Monograph Series: AOSF-TR-2026-CLUSTER-MESH-03

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Publication Date:** September 22, 2026  
**Target Architecture:** Android Linux / WireGuard Kernel Module & User-Space Go / Tailscale  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## Abstract

This paper presents the design and empirical evaluation of a zero-trust, peer-to-peer (P2P) mesh overlay network interconnecting mobile smartphones and edge servers across diverse carrier NAT boundaries without public static IP addresses.

Utilizing WireGuard's Noise protocol framework coupled with Tailscale's DERP (Designated Encrypted Relay for Packets) relay fallbacks and STUN/UPnP NAT hole-punching, our mobile overlay achieves direct point-to-point UDP tunnels between LTE/5G mobile devices. Real-world telemetry reveals direct P2P tunnel establishment in **94.2%** of carrier combinations, reducing round-trip time (RTT) from 182ms (via public relays) down to **34.8ms** (direct P2P) with cryptographic overhead capped below 1.2% CPU utilization.

---

## 1. NAT Traversal & Tunnel Telemetry

\`\`\`
+---------------------+                      +---------------------+
| Mobile Node A (LTE) | <====== Direct =====>| Mobile Node B (5G)  |
| WireGuard 100.x.x.1 |     P2P WireGuard    | WireGuard 100.x.x.2 |
+---------------------+     (RTT: 34.8 ms)   +---------------------+
           \\                                            /
            \\-- [Fallback DERP Relay (RTT: 182 ms)] ---/
\`\`\`

---

## 2. Empirical Benchmark Evaluation

| Connection Path | NAT Boundary Combination | Handshake Time | Direct P2P Success | Round-Trip Latency |
| :--- | :--- | :--- | :--- | :--- |
| **Carrier A to Carrier B** | Symmetric to Port-Restricted | 480 ms | **Success (Direct UDP)**| **32.4 ms** |
| **Wi-Fi to Cellular 5G** | Full Cone to Restricted | 310 ms | **Success (Direct UDP)**| **28.6 ms** |
| **Hard CGNAT to CGNAT** | Symmetric to Symmetric | 920 ms | Relayed (DERP Fallback) | 168.2 ms |

---

## 3. Conclusion
Mobile P2P mesh overlays provide low-latency, encrypted interconnectivity essential for distributed edge intelligence, bypassing the need for expensive public cloud routing infrastructure.`
  },

  40: {
    title_eng: "Bypassing Mobile Carrier Tethering QoS Bandwidth Throttling: Android L4 Socket Proxy Architecture",
    tags: "#CarrierQoS #TetheringBypass #SocketProxy #TTLManipulation #TrafficMasking #MobileNetworking #AndroidKernel",
    content_eng: `# Bypassing Mobile Carrier Tethering QoS Bandwidth Throttling: Android L4 Socket Proxy Architecture
### Technical Research Monograph Series: AOSF-TR-2026-CLUSTER-PROXY-04

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Publication Date:** September 23, 2026  
**Target Architecture:** Android Linux Kernel (iptables / nftables / eBPF) & Termux Userspace  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## Abstract

This monograph analyzes the packet inspection mechanisms employed by mobile network operators to detect tethering/hotspot data usage and introduces a user-space **Layer 4 Socket Proxy Architecture** capable of preserving unrestricted line-rate data throughput.

Telecommunication carriers identify tethered traffic through two primary heuristics: (1) Time-To-Live (TTL / Hop Limit) decrements in IP packet headers, and (2) Deep Packet Inspection (DPI) of HTTP/TLS Client Hello signatures. By deploying a local SOCKS5/HTTP socket proxy on the host smartphone and rewriting outgoing packet headers through rootless Bionic socket binding, traffic originating from connected workstations appears indistinguishable from on-device smartphone traffic. Empirical throughput testing demonstrates bandwidth recovery from throttled limits of **400 kbps** back to full 5G carrier capacity of **184 Mbps**.

---

## 1. Carrier Throttling Mechanisms & Evasion Topology

\`\`\`
Inspection Vector Breakdown:
[Workstation Client] ---> [Standard Tethering Hotspot]
                              |
                              +---> TTL=127 (Windows Default) -> THROTTLED (400 kbps)
                              +---> Carrier APN Tagging       -> THROTTLED (400 kbps)

[Workstation Client] ---> [Local L4 Socket Proxy on Phone]
                              |
                              +---> Socket Originates from Phone (UID: Termux)
                              +---> Native TTL=64 (Android Linux Default)
                              +---> Result: UNRESTRICTED 5G SPEED (184 Mbps)
\`\`\`

---

## 2. Empirical Bandwidth & Latency Metrics

| Traffic Routing Mode | Downlink Throughput | Uplink Throughput | RTT Latency | Carrier Status |
| :--- | :--- | :--- | :--- | :--- |
| **Raw Hotspot (Baseline)** | 0.42 Mbps (Throttled) | 0.38 Mbps | 142 ms | QoS Throttled |
| **Static TTL 65 Rewrite** | 24.8 Mbps (Partial) | 18.2 Mbps | 68 ms | Partial DPI Flagging |
| **L4 Socket Proxy Architecture** | **184.2 Mbps (Line Rate)** | **62.4 Mbps** | **31 ms** | **Fully Unrestricted** |

---

## 3. Conclusion
Encapsulating secondary workstation traffic through native Android userspace socket proxies circumvents carrier heuristic throttling, restoring full network performance for mobile cluster nodes.`
  }
};
