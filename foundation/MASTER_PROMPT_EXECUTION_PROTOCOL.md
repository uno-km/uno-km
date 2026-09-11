# [AOSF-SPEC-2026-PROMPT] AMEVA 생태계 6대 문서·13개국어 동적 번역·릴리즈 아카이브 원샷 개발 규격 및 마스터 프롬프트 프로토콜
(AMEVA Master One-Shot Prompt & Strict Engineering Execution Protocol)

- **문서 식별자**: `AOSF-SPEC-2026-PROMPT-V1`
- **제정 주체**: AMEVA Open-Source Foundation (AOSF) Architecture Committee
- **최초 제정일**: 2026-09-08
- **적용 범위**: AMEVA 생태계 전체 14개 라이브러리, 6대 표준 웹 문서, 13개국어 다국어(i18n) 엔진, 버전 릴리즈 관리
- **준수 의무**: **RFC 2119 기준 절대 타협 불가 (Strict Enforcement / Zero-Drift)**

---

## 1. 개요 및 제정 배경

### 1.1 배경 및 문제 인식
과거 대규모 문서 개편 및 다국어 지원 작업 시, AI 에이전트의 자의적 판단, 불완전한 휴리스틱 정규식 폴백, DOM 구조 파괴, 라이브러리 간 릴리즈 노트 혼선으로 인해 다수의 시행착오(Trial and Error)와 심각한 시간 지연이 발생하였습니다:
1. **침묵 폴백(Silent Fallback) 및 텍스트 훼손**: 번역 사전을 생성할 때 미지원 토큰을 임의로 제거하여 `( )`, `1,000 Model` 등 빈 괄호나 문맥이 훼손된 문구가 힌디어, 폴란드어, 러시아어 등에 잔존함.
2. **DOM 파괴 및 서식 손실**: 단순 `el.textContent = trans` 치환으로 인해 내부의 `<code>`, `<strong>`, `<a>` 태그 및 온클릭 이벤트 리스너가 증발함.
3. **타겟 누락**: 메인 콘텐츠의 표 셀(`td`, `th`), 칩셋 정보, 파라미터 트레이드오프 상세 분석 문장이 번역 순회 대상에서 누락됨.
4. **버전 릴리즈 노사 혼입**: 특정 라이브러리(STT)의 아카이브에 타 패키지(Playwright 등)의 커밋 내역이 오염 혼합됨.

### 1.2 제정 목적
본 규정은 사용자가 **단 하나의 완결형 프롬프트(One-Shot Master Prompt)**만을 제시하더라도, AI 에이전트가 어떤 모호함이나 중간 시행착오 없이 100% 무결점(Zero-Defect)으로 6대 공통 문서, 13개국어 동적 번역, 릴리즈 아카이브를 완벽하게 빌드·검증·배포할 수 있도록 엔지니어링 표준을 물리적으로 명문화합니다.

---

## 2. 사용자 전용: 단일 원샷 마스터 프롬프트 (The Master One-Shot Prompt)

사용자는 새로운 라이브러리를 추가하거나 기존 라이브러리를 전면 개편할 때, 아래 템플릿의 변수 영역(`[...]`)만 기입하여 AI에게 지시합니다. AI는 본 프롬프트를 수신하는 즉시 추가 질문 없이 5단계 파이프라인을 원스톱으로 완수해야 합니다.

```markdown
[AMEVA MASTER ONE-SHOT EXECUTION DIRECTIVE]

대상 라이브러리: [예: bitnet, stt, tts, vision, diffusion, llamacpp 등 (전체일 경우 '전체')]
버전 정보: [예: 1.0.1 (ecosystem-versions.yaml 기준)]

다음 지침과 AOSF-SPEC-2026-PROMPT-V1 규격에 따라 6대 표준 문서 구축, 13개국어 무결점 동적 번역, 릴리즈 아카이브 동기화를 단 1회의 시행착오 없이 완결하십시오.

1. 6대 공통 서브페이지 전수 구축 및 보강
- 대상: index.html (소개), installation.html (설치가이드), quickstart.html (퀵스타트), api-reference.html (API명세), advanced-parameters.html (고급파라미터), benchmarks.html (벤치마크)
- 릴리즈 태그/배지: 하드코딩을 배제하고 PyPI/npm API 동적 질의 배지 체계 적용.
- 가치 제안 (Why It Matters): 엔지니어링 성능 관점(C++20, Vulkan, NEON, 0-Copy)과 문과적/비즈니스 직관적 비유 관점의 듀얼 가치제안 박스 필수 포함.
- 설치/퀵스타트: pip/npm 단독 설치 시 제약사항, install.sh 원클릭 자동 셋업 내용, 필수 시스템 패키지, 추천 실행 플래그 상세 명시.
- 벤치마크: 삼성 갤럭시 S25 (Snapdragon 8 Elite), S24 (Gen 3), A35 (Exynos 1380), S20 (865) 실기기 기반 레이턴시, 10분 연속 가동 발열 델타(ΔT), 스로틀링 여부 수치 완비.
- 고급 파라미터: 빅코어 스레드 친화도, 워크그룹 크기, 공유메모리 풀, 양자화 트레이드오프 상세 명시.

2. 13개국어(en, ko, ja, zh, ar, fr, de, es, hi, ru, vi, pl, la) 무결점 동적 번역
- 단말 텍스트 노드 전수 추출: <code>, <pre>를 제외한 표(th, td), 헤더, 본문, 가치제안의 모든 한국어 노드를 추출하여 13개국어 완벽 번역 사전에 등록.
- 절대 금지: [EN], [JA] 등 가짜 접두사, 한국어 글자만 삭제하여 빈 괄호 ( )를 남기는 조잡한 폴백 일절 금지.
- 고유명사 원형 보존: Samsung, Qualcomm, Snapdragon, Oryon, Adreno, Mali, Vulkan, Bionic, Termux 등 브랜드명 및 수치/단위(ms, MB, GB, kHz, %)는 영문/라틴 스크립트 불변 유지.
- 엔진 무결성: shared/i18n.js에 High-Precision DOM TreeWalker를 적용하여 <code>, <strong> 서식을 100% 보존하면서 텍스트 노드만 가역적으로 치환.

3. 버전 및 릴리즈 아카이브 (versions.html) 격리 보존
- 실제 Git 커밋 히스토리 및 ecosystem-versions.yaml 기반 SSOT 타임라인 단독 유지.
- 타 라이브러리의 릴리즈 내용이 혼입되지 않도록 엄격 격리하며, 국제 표준에 따라 영문 단일 언어로 유지.

4. 3단계 자동 무결성 검증 및 배포
- 1단계: 84개 페이지 전수 DOM 한국어 텍스트 노드 매칭률 100.00% 실측 검증.
- 2단계: tools/build_pages.py --verify 실행하여 Issues 0건(PASS) 확인.
- 3단계: git 커밋 및 origin main 푸시 완료 후 최종 보고.
```

---

## 3. 6대 공통 서브페이지 아키텍처 규격 (SSOT Architecture)

모든 라이브러리의 6대 문서는 아래 구조와 필수 섹션을 반드시 포함해야 하며, 임의로 섹션을 생략하거나 구조를 왜곡할 수 없습니다.

```
lib/<library-name>/
├── index.html                  # 1. 기술적 당면 과제 & 아키텍처 돌파구 (소개)
├── installation.html           # 2. 패키지 매니저 & 하드웨어 프로비저닝 (설치)
├── quickstart.html             # 3. 1줄 CLI & 즉시 실행 레시피 (퀵스타트)
├── api-reference.html          # 4. C++ ABI / Python / Node 규격 정의 (API)
├── advanced-parameters.html    # 5. 하드웨어 리소스 최적화 & 트레이드오프 (고급파라미터)
├── benchmarks.html             # 6. 삼성 갤럭시 실기기 계측 데이터 (벤치마크)
└── versions.html               # 7. Git Provenance 기반 릴리즈 아카이브
```

### 3.1 세부 페이지별 필수 구성 요소

| 서브페이지 | 필수 포함 섹션 및 데이터 | 엔지니어링 작성 기준 |
|---|---|---|
| **소개 (`index.html`)** | 1. 동적 릴리즈 태그 & pip/npm 배지<br/>2. 1줄 빠른 설치 안내 박스<br/>3. 핵심 가치 제안 (Why It Matters)<br/>4. 기술적 당면 과제 (Why We Built This)<br/>5. 아키텍처 혁신 및 기술 돌파구<br/>6. 연산 커널 & 하드웨어 가속 매트릭스<br/>7. Python/Node.js 표준 코드 예제<br/>8. 6대 서브페이지 바로가기 카드 | - Bionic/CMake/드라이버 결함 등 실제 온디바이스 장애 요인 기술.<br/>- NEON, Vulkan GPU 가속 원리 구체화.<br/>- 인라인 코드 및 터미널 명령어 완비. |
| **설치 가이드 (`installation.html`)** | 1. 표준 패키지 매니저 설치 (`pip`, `npm`)<br/>2. 필수 시스템 패키지 (`clang`, `libvulkan`, `ffmpeg` 등)<br/>3. `install.sh` 원클릭 자동 프로비저닝 메커니즘<br/>4. 단독 설치 vs 풀스택 패키징 비교<br/>5. 빌드 플래그 파라미터 제어표<br/>6. 장애 대응 및 자가 치유 프로토콜 | - 단순 `pip install` 시 누락되는 OS 라이브러리 명시.<br/>- 컴파일 없이 10초 만에 완결되는 문과적 비유 박스 배치.<br/>- 발생 가능한 5대 에러 코드 및 복구 명령어 제공. |
| **퀵스타트 (`quickstart.html`)** | 1. 1줄 CLI 즉시 실행 명령어<br/>2. 필수/기본 인자 및 파라미터 매트릭스<br/>3. 최소 실행 Python 코드<br/>4. 최소 실행 Node.js 코드<br/>5. 3대 핵심 실전 레시피 (경량/표준/최고성능) | - 복사-붙여넣기 즉시 터먹스에서 구동 가능한 실동작 코드.<br/>- 불필요한 인자 생략 시 기본값(Default) 동작 보장 설명. |
| **API 명세 (`api-reference.html`)** | 1. 코어 엔진 인터페이스 규격 (`Engine`, `Config`)<br/>2. Python SDK 메서드 시그니처, 파라미터, 반환형<br/>3. Node.js SDK 비동기 프로미스/스트림 명세<br/>4. 상태 코드, 예외 클래스, 에러 핸들링 | - C++20 네이티브 바인딩 및 타입 안전성 보장.<br/>- `try-catch` / `try-except` 복원 패턴 명시. |
| **고급 파라미터 (`advanced-parameters.html`)** | 1. 런타임 컴퓨팅 & 메모리 제어 파라미터 표<br/>2. 물리적 시스템 거동 및 하드웨어 트레이드오프 상세 분석<br/>3. 프로덕션 추천 설정 파일 (`config.yaml`) | - `thread_affinity`: Cortex-X/A 빅코어 고정 원리.<br/>- `shm_pool_mb`: 링 버퍼 vs DRAM 점유율 트레이드오프.<br/>- `vulkan_workgroup`: Mali/Adreno 최적 크기 명시. |
| **벤치마크 (`benchmarks.html`)** | 1. 단말기 칩셋별 추론 지연시간 & TPS 계측표<br/>2. 10분 연속 가동 발열 델타(ΔT) 및 스로틀링 표<br/>3. 메모리 점유율 및 배터리 전력 소모표<br/>4. 4대 실기기(S25, S24, A35, S20) 스펙 명세 | - 무과장(Zero-Hype) 엄격 실측 계측치만 기재.<br/>- 베이스라인(1.0x) 대비 Vulkan GPU 가속 배수 명시. |
| **릴리즈 아카이브 (`versions.html`)** | 1. 시맨틱 버저닝(SemVer) 마일스톤<br/>2. SHA-256 바이너리 무결성 Provenance<br/>3. 실제 Git 히스토리 기반 변경 내역 (Feature, Fix, Perf) | - 영문 단일 언어 유지 (다국어 번역 강제 배제).<br/>- 타 패키지 커밋 내용 혼입 절대 차단. |

---

## 4. 13개국어 무결점 동적 번역 엔진 표준 (i18n Core Engine Standards)

### 4.1 지원 언어 규격 (ISO 639-1)
모든 텍스트는 다음 13개 언어로 100% 매핑되어야 합니다:
- `en` (English)
- `ko` (한국어 - 마스터 코퍼스 원문)
- `ja` (日本語)
- `zh` (简体中文)
- `ar` (العربية - RTL 지원)
- `fr` (Français)
- `de` (Deutsch)
- `es` (Español)
- `hi` (हिन्दी)
- `ru` (Русский)
- `vi` (Tiếng Việt)
- `pl` (Polski)
- `la` (Latina)

### 4.2 불변의 번역 4대 원칙 (Immutable Translation Laws)

```
[원칙 1: Zero-Fallback Law]
- 어떠한 경우에도 한국어 음절을 단순히 삭제하여 "( )", "1,000 Model" 같은 결측치를 생성하거나,
  "[EN] Translated text"와 같은 가짜 접두어를 출력해서는 안 된다.
- 모든 단말 텍스트 노드는 해당 언어의 정밀 공학 표준 어휘로 100% 번역되어야 한다.

[원칙 2: Proper Noun & Identity Preservation Law]
- 글로벌 브랜드명 및 고유 하드웨어 명칭은 반드시 영문/라틴 원형을 유지한다:
  * Samsung, Galaxy, Qualcomm, Snapdragon, Oryon, Adreno, Mali, Valhall, Exynos, Cortex-X/A
  * Vulkan, SPIR-V, Bionic, Termux, Android, POSIX, NEON, SIMD, mTLS, TLS, CDP, SafeTensors, LoRA
- 수치(0.05, 12.5x, 100%), 단위(ms, MB, GB, kHz, t/s, °C), 인라인 코드(`thread_affinity`) 불변 보존.

[원칙 3: TreeWalker DOM Protection Law]
- 번역 시 innerHTML을 덮어쓰거나 부모 태그를 교체하여 <code>, <strong>, <a> 서식을 파괴하지 않는다.
- document.createTreeWalker(main, NodeFilter.SHOW_TEXT)를 사용하여 텍스트 노드만을 순회 치환한다.
- node._i18nOrig를 캐싱하여 13개 언어 간 무한 왕복 전환 시에도 0바이트의 서식 왜곡이 없어야 한다.

[원칙 4: Dual-Store Synchronization Law]
- 화면의 번역은 두 채널 모두에서 완벽히 일치해야 한다:
  1) shared/i18n.js 의 PHRASES_DB (텍스트 노드 정규화 룩업)
  2) shared/i18n-translations.js 의 translations[lang] ([data-i18n] 속성 룩업)
```

### 4.3 High-Precision TreeWalker 구현 표준 (`shared/i18n.js`)

AI는 `applyLanguage(lang)` 구현 시 반드시 아래 정밀 알고리즘을 사용해야 합니다:

```javascript
// A. [data-i18n] 속성 기반 헤딩/컨테이너 치환
main.querySelectorAll('[data-i18n]').forEach(el => {
  if (el.closest('pre, code, script, style, textarea, input, select')) return;
  const i18nKey = el.getAttribute('data-i18n');
  if (i18nKey && dict) {
    const val = this._lookup(dict, i18nKey);
    if (val && typeof val === 'string') {
      if (!el.dataset.i18nOrig) el.dataset.i18nOrig = el.textContent.trim();
      if (el.children.length === 0) el.textContent = val;
      else if (el.children.length === 1 && (el.children[0].tagName === 'STRONG' || el.children[0].tagName === 'B')) {
        el.children[0].textContent = val;
      }
    }
  }
});

// B. TreeWalker 기반 모든 텍스트 노드(Leaf Text Nodes) 100% 무손실 치환
const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
  acceptNode: function(node) {
    if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
    const parent = node.parentElement;
    if (!parent || parent.closest('pre, code, script, style, textarea, input, select')) {
      return NodeFilter.FILTER_REJECT;
    }
    return NodeFilter.FILTER_ACCEPT;
  }
});

const textNodes = [];
while (walker.nextNode()) textNodes.push(walker.currentNode);

for (let i = 0; i < textNodes.length; i++) {
  const node = textNodes[i];
  const raw = node.nodeValue;
  const trimmed = raw.trim();
  if (node._i18nOrig === undefined) node._i18nOrig = trimmed;
  const orig = node._i18nOrig;
  const norm = orig.replace(/\s+/g, ' ');
  const entry = PHRASES_DB[orig] || PHRASES_DB[norm];
  if (entry) {
    const trans = (lang === 'ko') ? orig : (entry[lang] || entry['en'] || orig);
    const lead = raw.match(/^\s*/)[0];
    const trail = raw.match(/\s*$/)[0];
    node.nodeValue = lead + trans + trail;
  }
}
```

---

## 5. 자동 검증 및 자가 치유 파이프라인 (Automated Verification Protocol)

작업 완료 선언 전, AI 에이전트는 다음 3단계 검증 스크립트를 독립 실행하고 그 결과를 수치로 제시해야 합니다. 단 1개의 결측치라도 발견될 경우 배포를 중단하고 즉시 자가 치유(Self-Healing)를 수행합니다.

### 5.1 제1단계: DOM 텍스트 노드 전수 매칭 검증
- **목적**: 84개 페이지의 모든 한국어 단말 텍스트 노드가 `PHRASES_DB`에 100% 존재하는지 확인.
- **합격 기준**: `Total DOM Korean text nodes` 대비 `Matched`가 **100.00% (Unmatched: 0건)**이어야 함.
- **검증 코드 스니펫**:
  ```python
  # 모든 84개 HTML 파싱 후 handle_data로 텍스트 노드 수집
  # master_complete_807_i18n.json 내 키 존재 여부 전수 대조
  assert unmatched_count == 0, f"Translation missing for {unmatched_count} nodes!"
  ```

### 5.2 제2단계: 결함 4개 화면 정밀 시뮬레이션 검증
- `bitnet/index.html` (힌디어 `hi`): 잔존 한국어 노드 **0개**.
- `bitnet/benchmarks.html` (힌디어 `hi`): 잔존 한국어 노드 **0개**.
- `bitnet/benchmarks.html` (폴란드어 `pl`): 잔존 한국어 노드 **0개**.
- `bitnet/advanced-parameters.html` (러시아어 `ru`): 잔존 한국어 노드 **0개**.

### 5.3 제3단계: 생태계 통합 빌드 감사
- **명령어**: `py -3 tools/build_pages.py --verify`
- **합격 기준**:
  - `Total HTML Documents Checked`: 130개 이상
  - `Total Links/Assets Resolved`: 980개 이상
  - `YAML Document Pages Verified`: 113개 이상
  - `Total Detected Issues`: **0 (PASS)**

---

## 6. 결론 및 표준 문서 효력

본 규격서(`AOSF-SPEC-2026-PROMPT-V1`)는 AMEVA 생태계의 모든 향후 문서 작업, 라이브러리 추가, 다국어 동기화의 **단일 진실 공급원(Single Source of Truth, SSOT)**으로 작동합니다. 모든 AI 에이전트와 엔지니어는 본 문서의 제2장에 수록된 **단일 원샷 마스터 프롬프트**를 기준으로 작업하며, 제4장과 제5장의 엔지니어링 표준을 위배한 코드는 즉시 거부(Reject)됩니다.
