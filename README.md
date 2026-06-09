# 🧠 AMEVA: The Autonomous Multi-Agent Edge-AI Ecosystem
**Orchestrating Intelligence Beyond the Cloud.**

Welcome to the AMEVA Ecosystem. 본 프로젝트는 Local-first, Hierarchical AI Orchestration 및 SRE-driven Inference Infrastructure에 대한 심도 있는 Research Portfolio입니다. Data Priv[...] (truncated for brevity)

---

## 🏛 Ecosystem Architecture Overview

AMEVA 에코시스템은 다음 세 가지 핵심 Paradigm 위에 구축되었습니다:

- **Hierarchical Control**: 단순한 Prompt-response 패턴을 넘어, 구조화된 "Nobles & Workers" 계층형 제어를 지향합니다.
- **Hardware-Software Co-Design**: 각 Edge device의 Power/Compute profile을 고려하여 Inference 과정을 최적화합니다.
- **Reliability by Design**: AI 추론 과정을 하나의 Mission-critical utility로 간주하고, Site Reliability Engineering (SRE) 원칙을 적용합니다.

---

## 🌐 The AMEVA Universe

| Project | Role in Ecosystem | Core Innovation |
|---------|-------------------|-----------------|
| **[Agent Orchestra](https://github.com/uno-km/AMEVA-Agent-Orchestra)** | Orchestrator | Hierarchical task decomposition & Agent management |
| **[Model Nexus](https://github.com/uno-km/AMEVA-Model-Nexus)** | Infrastructure | Unified API gateway with SRE-based dynamic throttling |
| **[Benchmark Suite](https://github.com/uno-km/AMEVA-Benchmark-Suite)** | Validation | Empirical power/performance profiling for edge hardware |
| **[Doc AI](https://github.com/uno-km/AMEVA-Doc-AI)** | Interface | Privacy-first offline document intelligence pipeline |
| **[Conductor](https://github.com/uno-km/AMEVA-Conductor)** | Control | Remote cross-platform UI for human-agent interaction |
| **[Data Harvester](https://github.com/uno-km/AMEVA-Data-Harvester)** | Data Layer | Hyper-resilient, zero-loss edge forwarder with multi-transport backup |
| **[Database](https://github.com/uno-km/AMEVA-Database)** | Analytics | Lightweight SQLite & log inspector for distributed AMEVA ecosystem |
| **[STT Trainer](https://github.com/uno-km/AMEVA-STT-Trainer)** | Perception | Whisper-based Korean STT with LoRA fine-tuning |
| **[STT Agent](https://github.com/uno-km/AMEVA-STT-Agent)** | Perception | Speech recognition agent integration |
| **[Window Assistant](https://github.com/uno-km/AMEVA-Window-Assistant)** | Interface | Windows-native local AI desktop assistant with OCR-first screen understanding |
| **[Dead Internet Theatre](https://github.com/uno-km/AMEVA-Dead-Internet-Threatre)** | Simulation | Fully autonomous Docker-based multi-agent simulation |
| **[BitNet](https://github.com/uno-km/BitNet)** | Optimization | BitNet inference framework with ARM/Exynos scalar fallback |

---

## 🔧 Setup Universe — One-click installer & Guide (NEW)

This repository now includes the "AMEVA Setup Universe" — a single installer and UX layer to bootstrap the full AMEVA ecosystem on macOS, Linux, and Windows.

Quick links (one-liners):

- macOS / Linux (Bash):

  bash <(curl -fsSL https://raw.githubusercontent.com/uno-km/uno-km/setup-universe-feature/setup.sh)

- Windows (PowerShell):

  Run PowerShell as Administrator and execute:

  irm https://raw.githubusercontent.com/uno-km/uno-km/setup-universe-feature/setup.ps1 | iex

- Python: (cross-platform)

  python setup.py

What the installer does (high level):
- Creates a unified AMEVA home: ~/ameva or C:\ameva
- Creates canonical model folders: ameva/models/llm, ameva/models/stt, ameva/models/tts
- Offers interactive selection of components (LLM / STT / TTS / All)
- Detects system GPU/CPU and adapts installs
- Installs common dependencies (fastapi, uvicorn, requests, psutil, pandas, etc.)
- Provides animated, user-friendly installation progress and a checklist
- Generates a config.json at AMEVA home

Notes:
- Installer files live on branch `setup-universe-feature` (raw links above). You can inspect or copy them to run locally.
- All installer prompts and printed progress are in English; inline comments in the scripts are written in Korean.

---

## 📚 Technical Glossary (용어 꾸러미)

(unchanged)

---

## 🛠 Tech Stack & Infrastructure

(unchanged)

---

## 📬 Contact & Collaboration

(unchanged)

---

**Generated with ❤️ by AMEVA Researcher Portfolio Builder**

*Last Updated: June 9, 2026*
