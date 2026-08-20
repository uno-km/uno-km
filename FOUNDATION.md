# AMEVA Open-Source Foundation (AOSF)

Democratizing On-Device AI & Autonomous Systems Without Cloud Tax  
클라우드 종속과 서버 비용 없는 순수 클라이언트 엣지 AI & 자율 시스템

[Foundation Charter](https://uno-km.github.io/uno-km/docs/foundation/charter.html) | [Governance](https://uno-km.github.io/uno-km/docs/foundation/governance.html) | [Incubation Policy](https://uno-km.github.io/uno-km/docs/foundation/incubation.html) | [Sponsorship](https://uno-km.github.io/uno-km/docs/foundation/sponsorship.html) | [Foundation Portal](https://uno-km.github.io/uno-km/docs/foundation/)

---

## About AMEVA Open-Source Foundation (AOSF)

AMEVA Open-Source Foundation (AOSF / AMEVA 오픈소스 재단)은 개방형 거버넌스와 실력주의(Meritocracy) 모델을 기반으로 운영되는 독립 오픈소스 기술 협의체입니다.

거대 클라우드 벤더의 인프라 과금과 프라이버시 침해 없이, 개인의 스마트폰(Android Termux), 브라우저(WebGPU/WASM), 엣지 임베디드 기기에서 100% 데이터 주권을 보장하는 자율 AI 및 자동화 생태계를 연구, 개발, 보급합니다.

> 2원화 분리 원칙 (Separation of Concerns):  
> AOSF 재단 기관과 설립자 개인(김은호 / Eunho Kim, @uno-km)의 엔지니어링 프로필은 공과 사를 명확히 분리하여 운영됩니다. 재단 산하의 모든 프로젝트는 특정 개인이나 기업에 종속되지 않고 영구적인 공공재(Public Good)로 관리됩니다.

---

## 3-Tier Project Portfolio Status (산하 프로젝트 현황)

AOSF는 프로젝트의 성숙도, 안정성 및 커뮤니티 배포 상태에 따라 3단계 라이프사이클로 분류하여 육성합니다.

### Tier 1: Flagship Projects (TLP / 대표 오픈소스)
엄격한 릴리즈 게이트를 통과하여 정식 배포되고, 프로덕션 레벨의 완성도와 안정성을 입증한 핵심 완제품 및 라이브러리입니다.

| 프로젝트 | 런타임 & 기술 스택 | 핵심 역할 및 설명 | 패키지 및 문서 |
|:---|:---:|:---|:---:|
| [AMEVA Workstation (Web/Desktop)](https://ameva-workstation-web-core.vercel.app/) | WebGPU, Next.js, WASM | 세계 최초 100% 온디바이스 WebGPU 로컬 AI (Qwen2.5 0.5B/1.5B/7B), 대용량 PDF/DOCX 3초 맵리듀스 요약 문서 리더 & 편집기, 인앱 비디오 컷팅, 1초 AI 이미지 누끼, 오디오 무음 자동삭제. | [라이브 앱](https://ameva-workstation-web-core.vercel.app/) · [GitHub](https://github.com/uno-km/AMEVA-Workstation-Web) |
| [Termux-Playwright](https://github.com/uno-km/termux-playwright-demo)<br/>termux-playwright | Android Bionic<br/>Python, Node.js | 안드로이드 Termux 비루트(Non-root) 브라우저 자동화. ARM64 Chromium CDP 직접 제어 및 헤드리스 테스팅. | [문서](https://uno-km.github.io/termux-playwright-demo/) · [PyPI](https://pypi.org/project/termux-playwright/) · [npm](https://www.npmjs.com/package/termux-playwright) |
| [Termux-Diffusion](https://github.com/uno-km/termux-diffusion)<br/>termux-diffusion | On-Device AI<br/>Python, Node.js | 안드로이드 ARM64 네이티브 온디바이스 Stable Diffusion. 모바일 엣지 기기에서 로컬 이미지 생성. | [문서](https://uno-km.github.io/termux-diffusion/) · [PyPI](https://pypi.org/project/termux-diffusion/) · [npm](https://www.npmjs.com/package/termux-diffusion) |

---

### Tier 2: Incubating Projects (인큐베이팅 프로젝트)
활발히 개발 및 표준화가 진행 중이며, 테스트 커버리지 및 런타임 확장을 거치고 있는 프로젝트입니다.

| 프로젝트 | 분류 | 핵심 목표 및 현황 | 바로가기 |
|:---|:---:|:---|:---:|
| [AMEVA-Forge](https://github.com/uno-km/ameva-forge) | WebGPU DL | 서버 비용 제로의 Browser-Native WebGPU Autograd Engine. PyTorch 호환 및 WGSL 셰이더. | [문서](https://uno-km.github.io/ameva-forge/) · [데모](https://uno-km.github.io/ameva-forge/demo.html) |
| [Termux-Torch](https://github.com/uno-km/termux-torch) | Tensor Engine | 안드로이드 Bionic 네이티브 경량 텐서 & 엄격한 Autograd backward 정책 엔진. | [GitHub](https://github.com/uno-km/termux-torch) |
| [Termux-Whisper](https://github.com/uno-km/AMEVA-STT-Trainer) | On-Device STT | 엣지 디바이스 전용 Whisper 한국어 음성인식 & LoRA 파인튜닝 파이프라인. | [GitHub](https://github.com/uno-km/AMEVA-STT-Trainer) |

---

### Tier 3: Labs & Research (연구소 및 선행 프로토타입)
새로운 패러다임, 실험적 아키텍처, 커뮤니티 협업 및 미래 비전을 탐색하는 선행 연구 프로젝트입니다.

| 프로젝트 | 연구 영역 | 연구 목표 및 내용 |
|:---|:---:|:---|
| [Dead Internet Theatre](https://github.com/uno-km/AMEVA-Dead-Internet-Threatre) | Simulation | Docker 기반 100% 자율 멀티에이전트 가상 사회 시뮬레이터. |
| [AMEVA Agent Orchestra](https://github.com/uno-km/AMEVA-Agent-Orchestra) | Multi-Agent | Nobles(전략 의사결정)와 Workers(실행) 계층 분해 기반 다중 에이전트 오케스트레이션. |
| [AMEVA-Multi-CLI](https://github.com/uno-km/AMEVA-Multi-CLI) | Terminal UI | 트리 기반 무한 분할 레이아웃, 80 FPS 저지연 스마트 PTY & DevSecOps 가드레일. |
| [AMEVA Window Assistant](https://github.com/uno-km/AMEVA-Window-Assistant) | Desktop AI | OCR-First 화면 인식 & 로컬 llama.cpp 추론 기반의 프라이버시 보호형 Windows AI. |
| [MCP-Wasm-Toolkit](https://github.com/uno-km/MCP-Wasm-Toolkit) | WASM Sandbox | 위험 연산을 100% 브라우저 Pyodide WASM 샌드박스로 격리 실행하는 MCP 툴킷. |
| [BitNet](https://github.com/uno-km/BitNet) | 1-bit LLM | 1-bit 양자화(1.58-bit) LLM ARM NEON 커널 및 빌드 최적화 오픈소스 PR 참여. |

---

## Foundation Governance & Guidelines

재단의 모든 규정과 운영 방침은 다음 공식 웹 문서 및 리포지토리에서 확인할 수 있습니다:

- [Foundation Charter (재단 헌장)](https://uno-km.github.io/uno-km/docs/foundation/charter.html) ([Markdown](docs/foundation/CHARTER.md)) - 설립 사명, 기술 범위, 지적재산권 및 라이선스 정책
- [Governance & Meritocracy (운영 규정)](https://uno-km.github.io/uno-km/docs/foundation/governance.html) ([Markdown](docs/foundation/GOVERNANCE.md)) - 메리토크라시, PMC 및 커미터 권한, 의사결정 투표제
- [Incubation Policy (인큐베이션 정책)](https://uno-km.github.io/uno-km/docs/foundation/incubation.html) ([Markdown](docs/foundation/INCUBATION_POLICY.md)) - 신규 프로젝트 제안부터 플래그십 승격까지의 3단계 가이드라인
- [Sponsorship & Support (후원 안내)](https://uno-km.github.io/uno-km/docs/foundation/sponsorship.html) ([Markdown](docs/foundation/SPONSORSHIP.md)) - 오픈소스 공공재 유지를 위한 재정 투명성 및 후원 안내

---

## Contact & Portals

- 공식 웹 포털: https://uno-km.github.io/uno-km/docs/foundation/
- 중앙 저장소: https://github.com/uno-km/uno-km
- 설립자 & 이사회 의장: [김은호 (Eunho Kim / @uno-km)](README.md)

---

Copyright 2026 AMEVA Open-Source Foundation (AOSF). All Rights Reserved.  
Licensed under the Apache License, Version 2.0.
