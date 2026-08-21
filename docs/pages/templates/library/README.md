# 📦 AMEVA 표준 라이브러리 문서화 템플릿 & 디자인 시스템 규격서 (Master Specification)

> **Official Standard for AMEVA Open-Source Foundation (AOSF) & uno-km Ecosystem**  
> 본 문서는 AMEVA 산하의 모든 딥러닝, 시스템, 엣지 AI 오픈소스 라이브러리 공식 웹사이트(GitHub Pages)를 **1픽셀의 오차도 없이 완벽하고 통일된 톰캣/아파치 클래식 엔지니어링 감성**으로 구축하기 위한 마스터 가이드라인 및 AI 에이전트 전용 프롬프트 규격서입니다.

---

## 🏛️ 1. 핵심 설계 철학 (Design Philosophy)

1. **Apache / Tomcat Classic Tech 감성 + AMEVA Corporate Blue**:
   - 화려하기만 하고 가독성이 떨어지는 디자인을 배제하고, 엔지니어가 가장 신뢰하는 **아파치/톰캣 클래식 고가독성 기술 문서 스타일**을 고정 적용합니다.
   - 상단 고정 헤더(하단 2px `#004499` 블루 언더라인) + 좌측 고정 네비게이션 사이드바(270px) + 우측 메인 기술 본문(최대 980px).
2. **이모지 최소화 및 담백한 엔지니어링 톤**:
   - 이모지 벽(Emoji Wall)을 금지하고, 텍스트와 담백한 기호(`-`, `·`, `[ ]`, `→`) 중심으로 기술적 신뢰도를 극대화합니다.
3. **100% 본문 전수 다국어 번역 (Zero Missing Translation)**:
   - 상단 메뉴뿐 아니라 본문의 모든 문단, 표(Table), 알림 박스(Alert), 리스트 항목까지 `data-i18n` 속성을 바인딩하여 6개 국어(한국어, 영어, 일본어, 중국어, 스페인어, 독일어)로 즉시 전환됩니다.
4. **개인 영역과 재단/라이브러리 영역의 철저한 공사 분리**:
   - 설립자 개인 이력/연락처는 `uno-km` 개인 포털에만 두고, 각 라이브러리 문서는 독립된 기술 공공재로 유지합니다.

---

## 🖼️ 2. 파비콘 및 브랜드 에셋 표준 규격 (Favicon & Brand Asset Spec)

1. **표준 파비콘 파일 위치**:
   - 각 프로젝트의 `docs/favicon.svg` (루트 `uno-km/docs/pages/templates/library/template_src/favicon.svg`를 복사하여 사용).
2. **파비콘 디자인 규격**:
   - 32x32 / 512x512 벡터 SVG 포맷.
   - 색상 팔레트: Cosmic Midnight (`#0B132B`), Aqua-Cyan (`#00F5D4`), Sky Blue (`#38BDF8`), Corporate Blue (`#004499`).
3. **HTML `<head>` 표준 링크 태그**:
   ```html
   <link rel="icon" type="image/svg+xml" href="favicon.svg">
   ```

---

## 📄 3. 첫 페이지 (`index.html`) 필수 섹션 전개 공식 (Exact Page Section Breakdown)

어떤 라이브러리든 `index.html`은 다음 **8대 표준 섹션** 순서대로 엄격히 전개되어야 합니다:

1. **대제목 및 1줄 서브타이틀**:
   - `h2`: `[라이브러리명] 공식 문서 (릴리즈 [버전])` (`font-size: 1.85em`, color: `#002b66`)
   - `p.subtitle`: 1줄 핵심 아키텍처 사명 (`color: #475569`, font-size: `1.05em`)
2. **배지 바 (`.badges-bar`)**:
   - PyPI 버전 배지 (`https://img.shields.io/pypi/v/[package_name]`)
   - npm 버전 배지 (`https://img.shields.io/npm/v/[package_name]`)
   - 라이선스 배지 (`Apache 2.0` / `MIT`)
   - 테스트 통과 배지 (`tests: 100% PASS`)
   - 런타임 환경 태그 (`Android Bionic ARM64` / `WebGPU` / `WASM`)
3. **1줄 원터치 빠른 설치 알림 박스 (`.alert.alert-tip`)**:
   - `span.alert-title`: `1-Line Quick Installation`
   - `pre > code`: `pip install [패키지명]` (또는 멀티 탭 패키지 매니저)
4. **엔지니어링 도전 과제와 아키텍처 혁신 (`h3`)**:
   - `The Engineering Challenge`: 왜 기존 데스크톱/서버 프레임워크가 엣지/브라우저 환경에서 실패하는지 서술.
   - `The Architectural Breakthrough`: 당사 라이브러리가 메모리, 시스템 콜, 셰이더 차원에서 이를 어떻게 해결했는지 서술.
5. **핵심 역량 및 기능 카드 그리드 (`.features-grid` + `.feature-card`)**:
   - 3개~6개의 고성능 핵심 역량 카드 (무설치 네이티브 실행, 수학적 무결성, 하드웨어 메모리 보호 등).
6. **지원 연산 및 모듈 매트릭스 표 (`table.data-table`)**:
   - `분류 (Category)` | `지원 연산 및 세부 모듈 (Operations & Modules)` | `상태 (Status)`
7. **대표 정석 코드 예제 블록 (`Canonical Usage Example`)**:
   - 10줄 이내의 가장 직관적인 표준 실행 코드 + 1-Click 복사 툴팁.
8. **시작하기 네비게이션 가이드**:
   - 설치 가이드(`installation.html`), 퀵스타트(`quickstart.html`), API 명세(`api-reference.html`) 링크.

---

## 🧭 4. 좌측 사이드바 표준 메뉴 계층 트리 (Sidebar Menu Tree Hierarchy)

사이드바는 항상 아래 3대 그룹 트리 구조를 고정 준수합니다:

```text
OVERVIEW (개요)
├── Home / Architecture (index.html)
├── Installation Guide (installation.html)
└── Quickstart & Recipes (quickstart.html)

OFFICIAL REFERENCE (공식 레퍼런스)
├── API Reference (api-reference.html)
├── Benchmarks & Profiling (benchmarks.html)
├── Models Hub / Domain Presets (models.html 또는 advanced-parameters.html)
└── Version Archive & Changelog (versions.html)

AI & AGENT PROTOCOLS (AI 에이전트 전용 피드 & 떡밥즈)
├── llms.txt (AI Matrix & Quick Reference)
├── llms-full.txt (Full Architecture & API Spec)
├── robots.txt (AI Bot Allowlist)
├── sitemap.xml (Search Engine XML Sitemap)
└── rss.xml (Release Feed)
```

---

## 🤖 5. AI / LLM 에이전트 최적화 규격 (AI & LLM Feeds / 떡밥즈 표준 규격)

모든 사이트는 전 세계 AI 코딩 에이전트(Cursor, Copilot, Antigravity, ChatGPT, Claude)와 검색엔진 크롤러가 1초 만에 색인하고 정확한 코드를 작성할 수 있도록 다음 4대 파일을 루트에 필수 탑재합니다:

1. **`llms.txt` (경량 AI 요약)**:
   - 30줄 내외, AI 코딩 도구가 한 번에 읽고 바로 정확한 코드를 생성할 수 있는 메타데이터, 설치법, 5줄 복붙 코드.
2. **`llms-full.txt` (전체 심층 명세)**:
   - 100% 전체 API 함수 시그니처, 인자 타입, 반환형, 예외 클래스, 메모리 라이프사이클.
3. **`robots.txt` (전 세계 AI 크롤러 100% 허용)**:
   - `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Bingbot`, `Applebot`, `AntigravityBot`에 `Crawl-delay: 0` 허용.
4. **Schema.org JSON-LD (구조화 메타데이터)**:
   - `<script type="application/ld+json">`에 `SoftwareApplication`, `TechArticle`, `FAQPage` 구조화 데이터 내장.

---

## 🎨 6. 표준 디자인 토큰 & 색상 규격 (Design Tokens)

모든 사이트의 `assets/style.css`는 아래 CSS 변수 토큰을 표준으로 사용합니다:

```css
:root {
  /* Brand Tokens */
  --primary-color: #004499;       /* Corporate Blue (헤더 라인, 버튼, 강조색) */
  --primary-dark: #002b66;        /* Dark Blue (호버 및 메인 제목 h2) */
  --primary-light: #e8f0fe;       /* Soft Blue (사이드바 active 배경, 태그) */
  --accent-cyan: #00f5d4;         /* Neon Cyan (WASM/WebGPU 포인트) */
  --accent-blue: #2563eb;         /* Link Blue */

  /* Surfaces & Backgrounds */
  --bg-main: #ffffff;             /* 메인 본문 배경 (순백색) */
  --bg-surface: #f8f9fa;          /* 헤더, 사이드바, 테이블 헤더 배경 */
  --bg-alt: #f1f5f9;              /* 호버 및 코드 탭 배경 */

  /* Borders & Dividers */
  --border-color: #cbd5e1;        /* 컴포넌트 외곽선 */
  --border-subtle: #e2e8f0;       /* 구분선 및 섹션 하단선 */

  /* Typography Colors */
  --text-main: #0f172a;           /* 본문 텍스트 (Deep Slate) */
  --text-muted: #475569;          /* 부제목 및 메타데이터 */
  --text-subtle: #64748b;         /* 날짜 및 버전 */

  /* Code & Terminals */
  --code-bg: #0b132b;             /* 딥 미드나잇 터미널 코드 블록 배경 */
  --code-text: #f8fafc;           /* 터미널 코드 텍스트 */

  /* Layout Metrics */
  --sidebar-width: 270px;         /* 좌측 고정 사이드바 너비 */
  --header-height: 58px;          /* 상단 헤더 높이 */
  --content-max-width: 980px;     /* 본문 최대 폭 */
}
```

---

## 📐 7. 타이포그래피 및 글머리 계층 (Typography Scale)

| 요소 | CSS 선택자 | 크기 / 두께 | 색상 | 스타일 규칙 |
| :--- | :--- | :--- | :--- | :--- |
| **본문 기본** | `body, p` | `15px` / `400` (line-height: `1.65`) | `#334155` | Sans-serif 시스템 폰트 |
| **상단 브랜드** | `.header-brand h1`| `1.25em` / `700` | `#004499` | 좌측 상단 로고 옆 브랜드명 |
| **메인 타이틀** | `main h2` | `1.85em` / `800` | `#002b66` | 페이지 최상단 대제목 |
| **서브 타이틀** | `main p.subtitle`| `1.05em` / `400` | `#475569` | 대제목 하단 1줄 요약 |
| **섹션 제목** | `main h3` | `1.3em` / `700` | `#1e293b` | 하단 `1px solid #e2e8f0` 구분선 필수 |
| **카드/소제목** | `main h4` | `1.08em` / `700` | `#334155` | 기능 카드 및 상세 항목 |
| **사이드바 범주**| `.sidebar h3` | `0.82em` / `700` | `#004499` | 대문자(UPPERCASE), 자간 `0.6px` |
| **인라인 코드** | `code` | `0.88em` / monospace | `#0f172a` | 배경 `#f1f5f9`, padding `2px 5px` |
| **코드 블록** | `pre` | `0.9em` / `1.5` | `#f8fafc` | 배경 `#0b132b`, padding `16px`, 복사 버튼 |

---

## 🌐 8. 6개 국어 다국어 (i18n) 번역 딕셔너리 필수 키 매트릭스

- **지원 언어**: `en` (English), `ko` (한국어), `ja` (日本語), `zh` (简体中文), `es` (Español), `de` (Deutsch)
- **필수 딕셔너리 키 분류**:
  * `common.*` (brand, releaseTag, pypiBtn, githubBtn, founderBtn, footer)
  * `nav.*` (overview, home, installation, quickstart, reference, apiRef, benchmarks, models, versions, aiSpecs)
  * `home.*` (title, subtitle, quickInstallTitle, quickInstallDesc, whyTitle, whyText, solTitle, solText, capTitle, codeExampleTitle)
  * `install.*`, `quick.*`, `api.*`, `bench.*`, `models.*`, `versions.*`
- **100% 번역 원칙**: 본문의 단 1개 텍스트 노드도 누락 없이 `data-i18n="key"` 속성을 바인딩해야 합니다.

---

## 🤖 9. [AI Agent Prompt Template] 후배 에이전트를 위한 마스터 프롬프트

새로운 라이브러리나 서브 프로젝트의 GitHub Pages 사이트를 만들 때 다음 프롬프트를 복사하여 실행합니다:

```text
[TASK] AMEVA 표준 톰캣/아파치 클래식 엔지니어링 웹사이트 생성

당신은 AMEVA Open-Source Foundation의 프론트엔드 시스템 아키텍트입니다.
다음 라이브러리에 대해 uno-km 표준 템플릿(docs/pages/templates/library)을 100% 준수하여 완벽한 GitHub Pages 문서 사이트를 생성하세요.

■ 프로젝트 정보:
- 라이브러리명: [예: termux-torch]
- 패키지명 (PyPI / npm): [예: termux-torch / @termux/torch]
- 핵심 사명: [예: 안드로이드 Bionic 네이티브 경량 텐서 & Autograd 엔진]
- 깃허브 저장소: [예: https://github.com/uno-km/termux-torch]
- 파비콘: docs/favicon.svg (uno-km 표준 벡터 파비콘 복사)

■ 필수 준수 규칙:
1. 디자인 시스템:
   - uno-km/docs/pages/templates/library/template_src/assets/style.css 표준 적용.
   - 상단 헤더(2px #004499 라인) + 좌측 고정 사이드바(270px) + 우측 본문(최대 980px).
   - 이모지 남발 금지 (담백한 특수문자 및 기호 사용).
2. 첫 페이지 (index.html) 8대 필수 섹션:
   - 1) 대제목/서브타이틀, 2) 배지바, 3) 1줄 설치 알림박스, 4) 기술과제 & 아키텍처 혁신,
   - 5) 3~6개 기능카드 그리드, 6) 연산/모듈 데이터 테이블, 7) 정석 코드예제, 8) 시작하기 링크.
3. 필수 7대 페이지 구성 (docs/):
   - index.html, installation.html, quickstart.html, api-reference.html, benchmarks.html, versions.html, llms.txt, llms-full.txt, robots.txt, sitemap.xml
4. 다국어(i18n) 100% 구현:
   - assets/i18n.js 및 assets/i18n-translations.js 포함.
   - 모든 제목, 문단, 알림, 표(Table), 리스트에 data-i18n 속성 바인딩.
   - 6개 국어(ko, en, ja, zh, es, de) 딕셔너리 100% 전수 작성.
```

---

## 🚀 10. 1-Click 자동 생성 스크립트 사용법

```bash
# 1. 설정 파일 생성
cp config.example.json my_lib_config.json

# 2. 1초 만에 사이트 생성
python generate_docs.py --config my_lib_config.json --output ./docs

# 3. 로컬 미리보기 검증
python -m http.server 8000 -d ./docs
```
