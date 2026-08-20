# 📜 Official Charter of the AMEVA Open-Source Foundation (AOSF)
**재단 공식 헌장 및 사명 선언문**

*Adopted: August 2026*  
*Version: 1.0.0*

---

## Article I. Name and Purpose (명칭 및 목적)

### 1.1 Name
The name of this organization shall be the **AMEVA Open-Source Foundation** (hereinafter referred to as **"AOSF"** or the **"Foundation"**; 한국어 명칭: **AMEVA 오픈소스 재단**).

### 1.2 Mission Statement (사명 선언)
> **"Democratizing On-Device AI & Autonomous Systems Without Cloud Tax"**  
> *"거대 클라우드 벤더의 서버 과금과 종속 없이, 개인의 기기에서 100% 자율 구동되는 엣지 AI와 오토메이션 기술을 전 인류의 공공재로 민주화한다."*

### 1.3 Core Principles (핵심 원칙)
1. **Edge-First & Zero-Cloud-Tax**: 모든 AI 추론과 자동화 파이프라인은 중앙 집중형 유료 클라우드 없이 단말(스마트폰, 브라우저, 엣지 기기) 자체에서 완결되는 것을 최우선으로 설계한다.
2. **100% Data Sovereignty**: 사용자의 모든 데이터, 프롬프트, 생성 결과물은 외부 서버로 전송되지 않고 로컬 샌드박스 내부에서 완벽히 보호된다.
3. **Public Good & Open Standards**: 재단 산하의 모든 산출물은 영구적인 오픈소스 공공재(Public Good)로 제공되며, 특정 상업 기업이나 개인에게 종속되지 않는다.
4. **Strict Separation of Concerns (공사 분리)**: 재단 기관의 자산/운영과 설립자 개인([김은호 / Eunho Kim](https://github.com/uno-km))의 사적 영역은 엄격히 2원화하여 투명하게 운영한다.

---

## Article II. Technical Scope (기술 범위)

AOSF는 다음과 같은 핵심 기술 도메인에 대한 연구·개발·표준화를 지원합니다:

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                      AOSF Core Technical Scope                          │
├────────────────────────────┬────────────────────────────┬───────────────┤
│ 1. Mobile & Edge Runtimes  │ 2. Browser & WebGPU AI     │ 3. Autonomous │
│    - Android Bionic ARM64  │    - WebGPU Autograd Core  │    Systems    │
│    - Non-Root Playwright   │    - Pyodide WASM Sandbox  │    - SRE Mesh │
│    - On-Device Diffusion   │    - Real-Time Shaders     │    - Multi-CLI│
└────────────────────────────┴────────────────────────────┴───────────────┘
```

1. **Mobile Bionic & Native Automation**: 안드로이드(Termux) 환경에서 루팅(Root) 없이 네이티브 하드웨어 가속을 활용하는 브라우저 자동화(`termux-playwright`), 온디바이스 생성 AI(`termux-diffusion`), 텐서 엔진(`termux-torch`).
2. **Browser-Native WebGPU & WASM Computing**: 서버리스 브라우저 환경에서 동작하는 딥러닝 자동 미분 엔진(`AMEVA-Forge`) 및 100% 격리 런타임(`MCP-Wasm-Toolkit`).
3. **Autonomous Agent Orchestration & Resilient SRE**: 다중 에이전트 간 계층적 협업(`Agent Orchestra`), 자율 시뮬레이션(`Dead Internet Theatre`), 무손실 엣지 데이터 수집(`Data Harvester`).

---

## Article III. Intellectual Property & Licensing (지적재산권 및 라이선스)

1. **Standard Open Source Licenses**: 재단 산하 모든 프로젝트의 소스 코드는 **Apache License, Version 2.0** 또는 **MIT License**를 표준으로 채택하여 전 세계 누구나 자유롭게 이용, 수정, 재배포할 수 있도록 보장합니다.
2. **Trademark & Brand Protection**: "AMEVA", "AOSF", "AMEVA-Forge", "Termux-Playwright", "Termux-Diffusion" 및 관련 로고는 재단의 공식 자산으로 보호되며, 생태계의 신뢰성을 훼손하는 악의적 도용을 방지합니다.
3. **Patents & Contributor Agreements**: 기여자는 자신의 기여물이 제3자의 지적재산권을 침해하지 않음을 보증하며, 오픈소스 생태계 발전을 위해 영구적이고 비독점적인 라이선스를 부여합니다.

---

## Article IV. Governance Model (거버넌스 모델)

AOSF는 아파치 소프트웨어 재단(ASF)의 **메리토크라시(Meritocracy / 실력주의 및 기여 기반 자치)** 모델을 따릅니다.

1. **Board of Directors (이사회)**: 재단의 전략적 방향성과 법적/재정적 책임을 총괄하며, 설립자([김은호 / Eunho Kim](https://github.com/uno-km))가 초대 이사회 의장(Chair)을 역임합니다.
2. **Project Management Committees (PMC)**: 각 프로젝트(TLP)의 기술적 로드맵과 릴리즈는 해당 프로젝트의 커미터들로 구성된 독립된 PMC가 자율적으로 결정합니다.
3. **Consensus-Driven Decision Making**: 모든 주요 안건은 공개 토론과 `+1 / 0 / -1` 투표제를 통해 투명하게 결정됩니다. (상세 내용은 [GOVERNANCE.md](GOVERNANCE.md) 참조)

---

## Article V. Non-Discrimination & Code of Conduct (차별 금지 및 행동 강령)

AOSF는 인종, 성별, 국적, 종교, 장애, 성적 지향에 따른 일체의 차별을 배격하며, 모든 기여자에게 안전하고 포용적인 협업 환경을 제공합니다. 모든 참여자는 [Contributor Covenant](https://www.contributor-covenant.org/) 기반의 행동 강령을 준수해야 합니다.

---

## Article VI. Disclaimer of Liability (면책 조항)

AOSF의 모든 소프트웨어와 문서는 "있는 그대로(AS IS)" 제공되며, 상품성, 특정 목적에의 적합성 및 비침해에 대한 보증을 포함하여 명시적이거나 묵시적인 어떠한 보증도 제공하지 않습니다. 재단과 기여자는 소프트웨어 사용으로 인해 발생하는 어떠한 손해에 대해서도 책임을 지지 않습니다.

---

<p align="center">
  <b>AMEVA Open-Source Foundation (AOSF)</b><br/>
  <i>Orchestrating Intelligence Beyond the Cloud.</i>
</p>
