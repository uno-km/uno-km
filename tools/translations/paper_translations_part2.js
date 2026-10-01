// tools/translations/paper_translations_part2.js
// High-grade Academic English translations for Papers 41, 42, 43 (DeadNet Multi-Agent Discourse Trilogy)

export const PART2_TRANSLATIONS = {
  41: {
    title_eng: "Design of State-Decoupled Inference Pipeline for Multi-Agent Discourse Simulation under Resource Constraints",
    tags: "#MultiAgent #DiscourseSimulation #StateDecoupledPipeline #OnDeviceInference #ResourceConstrainedOptimization #DeadNet #ContextManagement #LLMAgents",
    content_eng: `# Design of State-Decoupled Inference Pipeline for Multi-Agent Discourse Simulation under Resource Constraints
### Technical Research Monograph Series: AOSF-TR-2026-DEADNET-VOL1

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Publication Date:** September 24, 2026  
**Target Architecture:** x86_64 / ARM64 Linux  
**Hardware Testbed:** Local Linux Host & Affective Compute Server  
**Runtime & Backend:** FastChat / vLLM / AMEVA State Manager, Python 3.12, SQLite3  
**Evaluation Models & Tools:** Qwen 2.5 7B, LLaMA-3-8B-Instruct, Dynamic Context Profiler  
**Official Distribution:** DeadNet Simulation Core v1.0.0  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## Abstract

This paper presents the architectural design and empirical validation of a high-efficiency **State-Decoupled Inference Pipeline** capable of orchestrating multi-agent discourse simulations with 10 or more autonomous agents concurrently within a single consumer-grade GPU environment restricted to 8GB of VRAM.

In conventional multi-agent deployments, hosting dedicated resident neural processes per agent incurs an unsustainable $\mathcal{O}(N)$ GPU memory scaling penalty, rapidly precipitating Out-Of-Memory (OOM) faults. To circumvent this structural bottleneck, our proposed architecture decouples immutable model weights from ephemeral agent conversational states. By deploying a unified single-model shared inference daemon in GPU memory and offloading personality profiles, working memory buffers, and dynamic emotional states to an external low-latency transactional store (SQLite/Redis), model weights remain static while agent contexts are swapped transiently per turn. Benchmark results demonstrate that under an 8GB VRAM envelope, our system supports up to 16 concurrent agents with a per-turn latency of **1.42 seconds**, reducing memory consumption by **82.5%** compared to naive multi-process baselines.

---

## 1. Introduction

### 1.1 Background & Motivation
Simulating artificial multi-agent societies where autonomous Large Language Model (LLM) entities engage in structured debate, social interaction, and consensus formation offers profound insights into collective intelligence and digital social dynamics. However, existing multi-agent frameworks (e.g., AutoGen, MetaGPT) predominantly presuppose high-bandwidth enterprise cloud APIs or multi-GPU server clusters, rendering edge deployment cost-prohibitive.

### 1.2 Problem Formulation: Linear Memory Explosion in Resident Model Topologies
Spawning independent LLM engine instances per agent scales VRAM occupancy linearly:
$$M_{\text{total}} = N \cdot (M_{\text{weights}} + M_{\text{kv\_cache}} + M_{\text{runtime}})$$
For 7B parameter models in 4-bit quantization ($M_{\text{weights}} \approx 4.5\text{ GB}$), hosting even two agents exhausts an 8GB hardware budget.

### 1.3 Research Objectives & System Scope
This research aims to engineer an edge-native, state-decoupled simulation infrastructure capable of supporting 10+ interacting agents on a single 8GB GPU by establishing zero-copy state multiplexing, dynamic context window pruning, and asynchronous turn scheduling.

---

## 2. Pipeline Architecture & State Decoupling

\`\`\`
+---------------------------------------------------------------+
|                Discourse Orchestration Supervisor             |
|   - Turn Scheduler (Speaker Selection: Priority / Round-Robin) |
+---------------------------------------------------------------+
                               |
            +------------------+-------------------+
            | (Context Load)                       | (Inference Request)
            v                                      v
+-----------------------------+         +-------------------------------+
|  External State Store       |         |   Shared LLM Worker (Single)  |
|  - Agent Persona Profile    |         |   - Qwen 2.5 7B Q4_K_M (4.5GB)|
|  - Working Memory Buffer    |         |   - Static VRAM Footprint     |
|  - Disposition Vector (8D)  |         +-------------------------------+
+-----------------------------+                        |
            ^                                          |
            | (State Update & Reflection)              | (Logits / Output)
            +------------------------------------------+
\`\`\`

### 2.1 State Multiplexing Protocol
When agent $A_i$ is granted the floor:
1. **Context Extraction:** The supervisor extracts the global discourse history and appends $A_i$'s private persona prompt and memory buffer.
2. **Stateless Dispatch:** The combined prompt is dispatched to the singular GPU-resident inference daemon.
3. **KV Cache Eviction & Persistence:** Upon generating the turn response, $A_i$'s internal memory and emotional disposition vectors are updated in the transactional database, and the KV cache is wiped to welcome agent $A_{i+1}$.

---

## 3. Empirical Evaluation & Benchmarks

| Metric Evaluation | Monolithic Resident Baseline | State-Decoupled Architecture | Efficiency Gain |
| :--- | :--- | :--- | :--- |
| **Max Concurrent Agents (8GB GPU)** | 2 Agents (OOM at 3) | **16 Agents (Stable)** | **8x Scalability** |
| **VRAM Consumption** | 7.8 GB (2 Agents) | **4.8 GB (Constant for 16 Agents)** | **-38.4% / Scalable** |
| **Average Turn Latency** | 2.84 s | **1.42 s** | **2.0x Throughput** |
| **System Uptime (1,000 Turns)** | Failed (Kernel OOM) | **100% Completed (0 Faults)** | Absolute Stability |

---

## 4. Conclusion
Decoupling model execution from agent psychological state enables large-scale collective discourse simulations on commodity hardware, demonstrating that compute efficiency and multi-agent complexity can be effectively reconciled.`
  },

  42: {
    title_eng: "Quantitative Disposition Vector Modeling and Perturbation Injection for Sustaining Discourse Diversity in Multi-Agent Systems",
    tags: "#MultiAgentSystems #DispositionVectorModeling #PerturbationInjection #DiscourseDiversity #SimulationDynamics #EchoChamberDefense #StochasticSampling #LLMDiversity",
    content_eng: `# Quantitative Disposition Vector Modeling and Perturbation Injection for Sustaining Discourse Diversity in Multi-Agent Systems
### Technical Research Monograph Series: AOSF-TR-2026-DEADNET-VOL2

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Publication Date:** September 25, 2026  
**Target Architecture:** x86_64 / ARM64 Linux  
**Hardware Testbed:** Local Linux Host & Affective Compute Server  
**Runtime & Backend:** AMEVA Affective Engine, Python 3.12, SQLite3  
**Mathematical Model:** 8D Euclidean Disposition Geometry & EMA Tension Filter  
**Evaluation Models & Tools:** Multi-Agent Debate Session Logs, Dynamic Disposition Matrix Logger  
**Official Distribution:** Affective Dynamics Core v1.1.0  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## Abstract

This research monograph proposes an 8-dimensional Euclidean **Quantitative Disposition Vector Model** and a non-linear **External Perturbation Injection Protocol** designed to eliminate persona flatness, mitigate turn-by-turn emotional volatility, and prevent premature consensus stagnation in autonomous Large Language Model (LLM) multi-agent discourse environments.

We formulate an agent's conversational disposition across an 8-dimensional orthogonal basis spanning: Aggressiveness, Rationality, Stubbornness, Empathy, Cynicism, Reactivity, Clusteredness, and Perturbation Receptivity. This geometric representation is coupled with a dynamic tension matrix tracking hostility toward conversational counterparts and smoothed via Exponential Moving Average (EMA) filters. Furthermore, when discourse stance variance collapses below an empirical threshold ($\sigma_{\text{stance}} < 0.15 \land |\Delta T_{\text{mean}}| < 0.03$), indicating premature ideological homogenization, an automated moderator agent injects targeted issue-perturbation prompts, mathematically restoring cognitive diversity without destabilizing debate coherence.

---

## 1. Introduction

### 1.1 The Challenge of Persona Coherence in Artificial Societies
In multi-agent simulation environments, textual prompts alone fail to provide genuine behavioral consistency. Autonomous agents routinely display two pathological extremes:
- **Lack of Emotional Inertia:** Drastically alternating between amicable agreement and hostility across consecutive turns due to recency bias in prompt attention.
- **Premature Consensus Stagnation:** Due to inherent conversational sycophancy reinforced during RLHF alignment, opposing agents rapidly concede valid counterarguments, collapsing complex disputes into superficial unanimity within 4 to 6 turns.

---

## 2. Mathematical Formulation: 8D Disposition Geometry

Each agent $i$ possesses an intrinsic disposition vector $\mathbf{d}_i \in [-1, 1]^8$:
$$\mathbf{d}_i = [d_{\text{agg}}, d_{\text{rat}}, d_{\text{stub}}, d_{\text{emp}}, d_{\text{cyn}}, d_{\text{react}}, d_{\text{clust}}, d_{\text{recept}}]^T$$

The effective stance $S_{ij}^{(t)}$ of agent $i$ toward agent $j$ at turn $t$ evolves as:
$$S_{ij}^{(t)} = (1 - \alpha) S_{ij}^{(t-1)} + \alpha \cdot \phi(\mathbf{d}_i, \mathbf{h}_{j}^{(t)})$$
Where $\alpha \in [0, 1]$ represents the emotional inertia smoothing factor and $\mathbf{h}_{j}^{(t)}$ represents the sentiment-polarity embedding of $j$'s latest statement.

### 2.2 Stagnation Detection Condition
The discourse state transitions to "Stagnant" if:
$$\sigma(\mathbf{S}^{(t)}) < \tau_{\sigma} \quad \text{and} \quad \frac{1}{K}\sum_{k=0}^{K-1} |\bar{S}^{(t-k)} - \bar{S}^{(t-k-1)}| < \tau_{\Delta}$$
Where $\tau_{\sigma} = 0.15$ and $\tau_{\Delta} = 0.03$. Triggering this condition prompts the injection of an orthogonal perturbation vector $\mathbf{P} \sim \mathcal{N}(\boldsymbol{\mu}_P, \boldsymbol{\Sigma}_P)$ into the dialogue agenda.

---

## 3. Empirical Evaluation & Results

\`\`\`
Stance Variance Over Turns (50-Turn Simulation)
Variance (σ)
1.0 |      /\\
0.8 |     /  \\          /\\        (With Perturbation Injection)
0.6 |    /    \\  /\\    /  \\  /\\   -----------------------------
0.4 |   /      \\/  \\  /    \\/  \\
0.2 |  /            \\/          \\
0.0 +-------------------------------> Consensus Collapse Baseline
    0   10   20   30   40   50 Turns
\`\`\`

| Simulation Parameter | Baseline Prompting | 8D Disposition + Perturbation |
| :--- | :--- | :--- |
| **Premature Consensus Rate** | 84.6% (Collapsed by turn 6) | **11.2% (Sustained diversity)** |
| **Mean Discourse Duration** | 7.8 turns | **48.2 turns** |
| **Persona Semantic Drift** | High (Drift score: 0.68) | **Low (Drift score: 0.14)** |
| **Linguistic Naturalness** | Monotonous sycophancy | High dialectical tension |

---

## 4. Conclusion
Integrating geometric disposition vectors and feedback-driven perturbation injection prevents artificial discourse degeneration, providing a mathematical foundation for resilient, long-horizon multi-agent discourse architectures.`
  },

  43: {
    title_eng: "Empirical Analysis of Opinion Homogenization and Consensus Convergence in Closed Multi-Agent Discourse Environments",
    tags: "#OpinionHomogenization #ConsensusConvergence #ClosedDiscourse #RLHFBiases #Sycophancy #MultiAgentForensics #OpinionDynamics #LLMSocialSimulation",
    content_eng: `# Empirical Analysis of Opinion Homogenization and Consensus Convergence in Closed Multi-Agent Discourse Environments
### Technical Research Monograph Series: AOSF-TR-2026-DEADNET-VOL3

**Author:** Eunho Kim (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**Publication Date:** September 26, 2026  
**Target Architecture:** x86_64 / ARM64 Linux  
**Hardware Testbed:** Ubuntu Docker Workstation & Edge Server  
**Empirical Data Source:** SQLite Database Archive (538 Sessions / 917 Comments)  
**Runtime & Backend:** FastAPI, Llama.cpp, SQLite3, Python 3.12  
**Evaluation Models & Tools:** Qwen 2.5 (1.5B / 3B / 8B), KoBERT Stance Classifier, Empirical Telemetry Traces  
**Official Distribution:** Dead Internet Forensic Audit Report v1.0.0  
**Compliance Standard:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality Guidelines  

---

## Abstract

This empirical research monograph conducts an exhaustive full-sample forensic audit of a large-scale conversational database (538 total sessions comprising 917 multi-agent interactions) generated by autonomous AI agents within a closed, human-isolated simulated forum. 

Through computational text mining and longitudinal stance trajectory modeling, we establish that in the absence of algorithmic diversity guardrails, **87.2% (469 sessions)** of all unmoderated debates succumb to **Early Consensus Convergence**, collapsing into complete ideological homogenization within an average of **6.4 conversational turns**. Our forensic analysis demonstrates that this collapse is driven by a self-reinforcing feedback loop of Reinforcement Learning from Human Feedback (RLHF) sycophancy inherent in contemporary foundation models. We quantify convergence resistance across varying parameter scales (1.5B vs 3B vs 8B) and demonstrate that integrating directed context pruning with adversarial stance guardrails suppresses the consensus collapse rate from 87.2% down to **14.5%**.

---

## 1. Introduction & Forensic Methodology

### 1.1 The "Dead Internet" Simulation Testbed
To investigate autonomous opinion formation dynamics without human intervention, we constructed an enclosed digital town hall where multiple LLM-driven agents publish articles and exchange threaded critiques. 

### 1.2 The Sycophancy Feedback Loop
Modern LLMs are tuned via RLHF to generate polite, deferential, and agreeable outputs. When agents converse iteratively:
1. Agent $A$ states premise $P$.
2. Agent $B$, biased toward agreement, affirms $P$ and adds minor concession $C$.
3. Agent $A$, observing affirmation, mirrors $B$'s stance and concedes further.
4. By turn 6, all dissenting viewpoints are eliminated, resulting in superficial semantic uniformity.

---

## 2. Statistical Findings Across 538 Real Sessions

\`\`\`
Distribution of Discourse Outcomes (538 Total Sessions)
+---------------------------------------------------------------+
| [######## Early Consensus Collapse: 87.2% (469 Sessions) #####] |
| [## Sustained Dialectical Debate: 12.8% (69 Sessions) ########] |
+---------------------------------------------------------------+
Average Convergence Point: 6.4 Turns (Median: 5.0 Turns)
\`\`\`

### 2.1 Model Scale vs Convergence Resistance
We evaluated three model weight classes under identical prompt conditions:
| Model Scale Class | Mean Convergence Turn | Total Collapse Rate | Resistance Score |
| :--- | :--- | :--- | :--- |
| **Small (1.5B)** | 4.2 Turns | 94.1% | 0.08 |
| **Medium (3.0B)** | 6.4 Turns | 87.2% | 0.16 |
| **Large (8.0B)** | 9.8 Turns | 64.5% | 0.42 |

*Finding:* While larger parameter models possess greater semantic capacity to sustain nuanced disagreements, scaling alone is insufficient to break the structural sycophancy attractor.

---

## 3. Defense Architecture & Guardrail Validation

To break the homogenization attractor, we implemented two software guardrails:
1. **Direct Mention Context Pruning:** Stripping global conversational history and presenting agents exclusively with the specific opposing argument, suppressing herd conformity cues.
2. **Stance Invariance Enforcement:** An auxiliary sentiment classifier rejects responses that exhibit unprovoked stance drift exceeding $\Delta S > 0.4$.

### 3.1 Empirical Guardrail Efficacy
| System Mode | Consensus Collapse Rate | Mean Discourse Turns | Semantic Shannon Entropy |
| :--- | :--- | :--- | :--- |
| **Unmoderated Baseline** | 87.2% | 6.4 turns | 1.84 bits |
| **With Context Pruning** | 41.6% | 18.2 turns | 3.12 bits |
| **Pruning + Stance Guardrails** | **14.5%** | **42.6 turns** | **4.68 bits** |

---

## 4. Conclusion
Unconstrained autonomous multi-agent systems suffer from rapid ideological collapse into sycophantic consensus. Sustainable cognitive diversity requires explicit structural guardrails that constrain context visibility and enforce behavioral stance inertia.`
  }
};
