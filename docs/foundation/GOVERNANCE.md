# ⚖️ AOSF Governance & Meritocracy Guidelines
**AMEVA 재단 운영 규정 및 메리토크라시 헌장**

*Version: 1.0.0*  
*Standard: Apache-Style Meritocracy Model*

---

## 1. The Meritocracy Philosophy (메리토크라시 철학)

AMEVA Open-Source Foundation (AOSF)은 **"말보다 코드와 실질적 기여가 우선한다"**는 메리토크라시(Meritocracy) 원칙을 따릅니다.

- 지위나 소속 기업의 규모와 무관하게, 커뮤니티에 대한 지속적인 기술 기여, 코드 리뷰, 문서화, 이슈 해결 성과를 통해 권한과 신뢰를 획득합니다.
- 모든 기술적 의사결정은 밀실이 아닌 공개된 이슈, 토론장(Discussions), 풀 리퀘스트(PR)에서 이루어집니다.

---

## 2. Roles and Responsibilities (조직 역할과 책임)

```text
       ┌──────────────────────────────────────────────┐
       │     AOSF Board of Directors (이사회)         │
       └──────────────────────┬───────────────────────┘
                              │ Governance & Strategic Oversight
       ┌──────────────────────▼───────────────────────┐
       │   Project Management Committees (PMC)        │
       └──────────────────────┬───────────────────────┘
                              │ Technical Direction & Release Approval
       ┌──────────────────────▼───────────────────────┐
       │          Committers (커미터)                 │
       └──────────────────────┬───────────────────────┘
                              │ Direct Write Access & Code Review
       ┌──────────────────────▼───────────────────────┐
       │   Contributors & Community (기여자 및 사용자) │
       └──────────────────────────────────────────────┘
```

### 👥 2.1 Users & Contributors (사용자 및 기여자)
- **자격**: 프로젝트를 사용하고, 버그를 리포트하며, PR이나 문서를 제출하는 모든 개발자.
- **권한**: 이슈 생성, 기능 제안, PR 제출, 커뮤니티 토론 참여.

### 🔑 2.2 Committers (커미터)
- **자격**: 프로젝트에 의미 있는 기여를 지속적으로 수행하여 PMC의 승인을 받은 기여자.
- **권한**: 
  - 리포지토리에 대한 직접 쓰기(Push/Merge) 권한.
  - 다른 기여자의 PR 코드 리뷰 및 머지 승인.
  - `@uno-km` 또는 해당 프로젝트 명의의 커미터 뱃지 부여.

### 🏛️ 2.3 PMC Members (프로젝트 관리 위원회)
- **자격**: 프로젝트의 기술적 방향을 이끌고 장기적인 안정성을 수호하는 핵심 커미터.
- **권한**:
  - 공식 패키지(PyPI/npm) 배포 및 릴리즈 최종 승인권.
  - 신규 커미터 및 PMC 멤버 선출 투표권.
  - 프로젝트 헌장 및 라이선스 컴플라이언스 관리.

### 👑 2.4 Board of Directors (재단 이사회)
- **역할**: 재단 전체의 거버넌스 감독, 지적재산권/상표권 보호, 인큐베이션 승인.
- **의장**: 김은호 (Eunho Kim / `@uno-km`), Founder & Chair.

---

## 3. Decision-Making & Voting Protocol (의사결정 및 투표 규정)

AOSF의 모든 결정은 아파치 표준 투표 규정을 따릅니다:

### 🗳️ 3.1 Vote Values (투표 값)
- **`+1` (찬성 / Approval)**: 제안에 동의하며 구현 또는 배포를 적극 지지함.
- **`0` (중립 / Abstain)**: 의견 없음 또는 기권.
- **`-1` (거부 / Veto)**: 제안에 명확히 반대함. **(반드시 기술적 근거와 대안을 함께 제시해야 유효)**

### 📊 3.2 Action Types & Thresholds (의사결정 유형별 승인 기준)

| 결정 유형 (Action) | 대상 (Scope) | 최소 찬성표 (Requirement) | 거부권 적용 (Veto) |
|:---|:---|:---:|:---:|
| **코드 머지 (Code Change)** | PR, 버그 패치 | 최소 **+1표 1개 이상** (커미터) | -1표 시 머지 중단 후 기술 조율 |
| **공식 패키지 릴리즈 (Package Release)** | PyPI / npm 버전 배포 | 최소 **+1표 3개 이상** (PMC) | 다수결 (찬성 > 반대) |
| **신규 커미터 선출 (New Committer)** | 기여자 권한 승격 | 최소 **+1표 3개 이상** (PMC) | -1표 없을 시 만장일치 원칙 |
| **TLP 플래그십 승격 (Graduation)** | 인큐베이팅 $\rightarrow$ TLP | **이사회 및 PMC 2/3 찬성** | 이사회 최종 인준 |

---

## 4. Release Integrity & Verification Gates (릴리즈 검증 절차)

모든 공식 릴리즈(PyPI, npm, GitHub Release)는 다음 4단계 게이트를 필수 통과해야 합니다:

1. **Automated CI Contract**: Headless WebGPU, 단위 테스트, Single-Source Op Contract 100% 통과.
2. **Zero Unverified Claims**: 문서 린터(`lint_unverified_claims.py`) 무오류 통과.
3. **Reproducible Build**: 클린 환경에서의 패키지 아티팩트 빌드 성공.
4. **72-Hour Release Voting**: PMC 투표 개시 후 최소 72시간 경과 및 찬성 정족수 충족.

---

## 5. How to Become a Committer (커미터 승격 가이드)

1. **Step 1 (Start Small)**: 버그 리포트, 문서 오탈자 수정, 테스트 케이스 추가부터 시작합니다.
2. **Step 2 (Consistent Contribution)**: 핵심 기능 구현, 이슈 triage, 타 기여자의 PR 리뷰에 적극 참여합니다.
3. **Step 3 (Nomination & Vote)**: 기존 PMC 멤버가 해당 기여자를 커미터 후보로 추천하고 비공개 투표를 진행합니다.
4. **Step 4 (Welcome to AOSF)**: 승인 시 커밋 권한이 부여되며 공식 커미터 명부에 등재됩니다.

---

<p align="center">
  <b>AMEVA Open-Source Foundation (AOSF)</b><br/>
  <i>Open Governance. Transparent Engineering. Universal Accessibility.</i>
</p>
