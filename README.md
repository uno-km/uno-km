# 🧠 AMEVA: The Autonomous Multi-Agent Edge-AI Ecosystem
**Orchestrating Intelligence Beyond the Cloud.**

Welcome to the AMEVA Ecosystem. 본 프로젝트는 Local-first, Hierarchical AI Orchestration 및 SRE-driven Inference Infrastructure에 대한 심도 있는 Research Portfolio입니다. Data Privacy와 Resilience, 그리고 Edge-native performance를 최우선 가치로 설계되었습니다.

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

## 🔬 In-depth Project Analysis: 핵심 기술 논의

### 1. AMEVA Agent Orchestra: 계층적 주권 (Hierarchical Sovereignty)

현대 LLM은 Long-context 내에서의 "망각" 현상을 겪습니다. Agent Orchestra는 User intent를 **Nobles (의사결정 레이어)**로 추상화하고, 이를 원자 단위의 서브 태스크로 쪼개어 전문화된 Workers에게 위임함으로써 이를 해결합니다.

- **Research Focus**: Multi-turn 오케스트레이션 과정에서의 "Semantic Drift" 최소화
- **Key Implementation**: 로컬 GGUF 모델에 최적화된 Graph-based state management 시스템

### 2. AMEVA Model Nexus: SRE 관점의 인프라

제한된 리소스 환경에서 어떻게 안정적으로 AI를 서빙할 것인가? Model Nexus는 모델을 가상화된 리소스로 취급합니다.

- **Dynamic Scoped-Throttling**: 현재 하드웨어의 온도 및 Power draw를 실시간으로 감지하여 Context window와 Sampling 파라미터를 동적으로 조절합니다
- **High-Availability Serving**: 복잡한 Agent 요청이 단순 질의보다 우선 처리될 수 있도록 스케줄링합니다

### 3. AMEVA Benchmark Suite (Singularity)

"측정할 수 없으면 개선할 수 없다." 본 Suite는 모든 AMEVA 최적화의 기술적 근거(Empirical foundation)를 제공합니다.

- **Synchronized Power Tracking**: TPS(Tokens Per Second)와 mW(Milliwatt) 소모량을 동기화하여 분석하는 "Greener AI"의 첫걸음입니다

### 4. AMEVA Data Harvester: Zero-Loss Resilience

데이터 손실 없는 극도의 복원력. 데이터베이스 없이 엣지에서 직접 하이브리드 전송 경로를 통해 데이터를 수집합니다.

- **Multi-Transport Backup**: SCP, HTTPS, Telegram Bot을 통한 자동 폴백
- **Payload Validation**: 제로 로스 검증 메커니즘으로 데이터 무결성 보장

### 5. AMEVA STT Ecosystem: 한국어 우선 음성 지능

Whisper 기반 LoRA 파인 튜닝으로 한국어 특화 음성 인식을 구현합니다.

- **STT Trainer**: 데이터 스크래핑부터 모델 병합까지 전체 파이프라인 제공
- **STT Agent**: Edge device에서 실시간 음성 처리 및 통합

### 6. AMEVA Window Assistant: OCR-First Perception

Windows 데스크톱 AI 어시스턴트로, 화면 이해를 OCR 기반으로 우선 처리합니다.

- **Multimodal Fallback**: OCR 실패 시 Vision 모델로 자동 전환
- **Offline Voice I/O**: 완전 오프라인 음성 입출력
- **llama.cpp Integration**: 로컬 추론 엔진 통합

---

## 🗺 Evaluation & Future Directions: 최종 청사진

### 🚀 Phase 1: Local Supremacy (현재)
복잡한 Agentic workflow를 100% 오프라인 환경에서 구현 완료. Local model fine-tuning을 통한 Data sovereignty 확보.

### ⛓ Phase 2: Distributed Neural Fabric (중기)
Federated Inference 도입. 로컬 네트워크 내의 여러 엣지 디바이스 가용 VRAM을 풀링(Pooling)하여, 단일 기기에서 불가능했던 대형 모델(30B+)을 분산 처리하는 기술 연구.

### 🌌 Phase 3: The Singular Conductor (비전)
단순한 수행을 넘어, Benchmark Suite의 과거 데이터를 학습하여 스스로 코드와 인프라를 최적화(Self-optimization)하는 자율형 Self-healing AI 에이전트 시스템 구축.

---

## 📚 Technical Glossary (용어 꾸러미)

| Term | Definition |
|------|-----------|
| **Orchestration** | 복잡한 시스템이나 여러 에이전트의 동작을 조화롭게 제어하고 관리하는 과정 |
| **Hierarchical** | 계층적인 시스템 구조. 상위 레이어가 전략을 짜고 하위 레이어가 실행하는 방식 |
| **Edge-AI** | 데이터 센터(클라우드)가 아닌 사용자와 가까운 기기(엣지)에서 직접 AI를 구동하는 기술 |
| **Inference** | 학습된 AI 모델을 통해 결과값을 도출해내는 추론(실행) 과정 |
| **SRE** | Site Reliability Engineering - 시스템의 안정성과 신뢰성을 높이기 위해 소프트웨어 공학 기법을 인프라 운영에 적용하는 방법론 |
| **Sovereignty** | 데이터나 시스템에 대한 완전한 통제권 및 주권 |
| **Throttling** | 자원 과부하를 막기 위해 의도적으로 처리 속도나 요청을 조절하는 기술 |
| **Semantic Drift** | 대화나 작업이 길어질수록 AI가 원래의 맥락이나 의도에서 벗어나는 현상 |
| **Empirical** | 실제 실험이나 관찰을 통해 얻은 데이터에 기반한 실증적인 접근 |
| **Federated** | 여러 곳에 분산되어 있지만 하나처럼 협력하는 연합 방식 |

---

## 🛠 Tech Stack & Infrastructure

- **Core Runtime**: Python 3.9+, GGUF (llama.cpp), Ollama
- **Agent Framework**: Custom hierarchical orchestration
- **Data Pipeline**: SQLite, pandas, Arrow
- **Communication**: Telegram Bot API, HTTPS, SCP
- **AI/ML**: Whisper, LoRA, BitNet, llama.cpp
- **Containerization**: Docker, Docker Compose
- **UI/UX**: Tkinter, Web-based dashboards
- **Monitoring**: Custom power/performance tracking

---

## 📬 Contact & Collaboration

저는 Multi-Agent Systems, Edge Computing, 그리고 AI SRE 분야에 대한 학술적 담론을 언제나 환영합니다.

- **GitHub**: [@uno-km](https://github.com/uno-km)
- **Email**: zhfldk014745@naver.com
- **Tstory** : [my-blog](https://uno-kim.tistory.com/)
- **Research Focus**: Hierarchical AI Orchestration, Edge-native Inference, Data Sovereignty

---

**Generated with ❤️ by AMEVA Researcher Portfolio Builder**

*Last Updated: June 2, 2026*
