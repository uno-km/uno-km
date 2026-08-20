# 🌱 AOSF Project Incubation & Graduation Policy
**AMEVA 재단 3-Tier 프로젝트 인큐베이션 및 승격 정책**

*Version: 1.0.0*  
*Standard: Apache-Style Incubation Lifecycle*

---

## 1. Overview (개요)

AMEVA Open-Source Foundation (AOSF)은 산하 모든 오픈소스 프로젝트의 **코드 품질, 커뮤니티 건강성, 릴리즈 신뢰성**을 보장하기 위해 체계적인 3단계 인큐베이션 라이프사이클(3-Tier Project Lifecycle)을 운영합니다.

```text
┌─────────────────────────┐
│ 🔬 Tier 3: Labs         │  아이디어 검증, 선행 아키텍처 연구, 프로토타입 개발
└───────────┬─────────────┘
            │ [인큐베이션 진입 심사]
            ▼
┌─────────────────────────┐
│ 🧪 Tier 2: Incubating   │  API 규격 표준화, CI/CD 자동화, 크로스 런타임 검증
└───────────┬─────────────┘
            │ [TLP 플래그십 승격 심사]
            ▼
┌─────────────────────────┐
│ 🏆 Tier 1: Flagship TLP │  PyPI/npm 공식 배포, 엔터프라이즈 프로덕션 안정성, 독립 PMC
└─────────────────────────┘
```

---

## 2. The 3-Tier Classification (3단계 분류 기준)

### 🔬 Tier 3: Labs & Research (연구소 및 프로토타입)
- **정의**: 혁신적인 아이디어를 탐색하고 기초 설계를 검증하는 실험적 단계.
- **특징**:
  - API 변경이 빈번할 수 있음.
  - 별도의 엄격한 릴리즈 패키지 배포 의무 없음.
  - 예시: `Dead Internet Theatre`, `AMEVA-Agent-Orchestra`, `BitNet`, `AMEVA-Multi-CLI`.

### 🧪 Tier 2: Incubating Projects (인큐베이팅 프로젝트)
- **정의**: 핵심 아키텍처가 확립되었으며, 안정화 및 재단 표준 준수 과정을 거치는 단계.
- **특징**:
  - 단일 연산 계약(Single-Source Op Contract) 및 엄격한 단위 테스트 커버리지 구축.
  - Apache 2.0 또는 MIT 라이선스 헤더 표준화.
  - 예시: `AMEVA-Forge`, `termux-torch`, `termux-whisper`.

### 🏆 Tier 1: Flagship Top-Level Projects (TLP / 대표 오픈소스)
- **정의**: 글로벌 레지스트리(PyPI, npm)에 공식 배포되고 수많은 사용자에 의해 프로덕션 검증된 성숙한 프로젝트.
- **특징**:
  - 다중 런타임(Python + Node.js) 듀얼 패키징 완비.
  - 전용 공식 문서 포털(GitHub Pages) 및 1-Click 설치 스크립트 제공.
  - 활성화된 커미터 풀 및 독립 PMC 운영.
  - 예시: `termux-playwright`, `termux-diffusion`.

---

## 3. Graduation Criteria & Checklist (승격 심사 기준표)

### 📋 Checkpoint A: Tier 3 $\rightarrow$ Tier 2 (인큐베이팅 진입 기준)
- [x] 명확한 기술 사명 및 엣지-퍼스트(Edge-First) 아키텍처 부합성
- [x] 기본 동작 검증 가능한 PoC 코드 및 최소 1개 이상의 동작 데모
- [x] 재단 표준 라이선스(Apache 2.0 / MIT) 채택
- [x] 멘토(기존 PMC 멤버) 1인 이상의 후원 및 추천

### 📋 Checkpoint B: Tier 2 $\rightarrow$ Tier 1 (플래그십 TLP 승격 기준)
- [x] **공식 패키지 배포**: PyPI 및 npm에 정식 네임스페이스로 배포 완료
- [x] **테스트 신뢰성**: CI/CD 파이프라인 상에서 단위/E2E 테스트 100% PASS
- [x] **문서화 표준**: 공식 웹사이트, API 레퍼런스, 벤치마크 리포트 구비
- [x] **커뮤니티 검증**: 실사용자 피드백 수렴 및 이슈 대응 체계 가동
- [x] **PMC 2/3 찬성 투표**: 72시간 릴리즈/승격 투표 통과

---

## 4. Project Retirement & Archival (프로젝트 은퇴 및 아카이빙)

기술 트렌드의 변화나 상위 프로젝트로의 통합으로 유지보수가 중단된 프로젝트는 재단 이사회 승인을 거쳐 **"Attic (은퇴/아카이브)"** 상태로 안전하게 보존되며, 소스 코드는 영구 공개 상태를 유지합니다.

---

<p align="center">
  <b>AMEVA Open-Source Foundation (AOSF)</b><br/>
  <i>Structured Incubation for Sustainable Open Source.</i>
</p>
