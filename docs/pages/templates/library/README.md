# 📦 AMEVA 표준 라이브러리 문서화 템플릿 & 디자인 시스템 규격서 (Master Specification)

> **Official Standard for AMEVA Open-Source Foundation (AOSF) & uno-km Ecosystem**  
> 본 문서는 AMEVA 산하의 모든 딥러닝, 시스템, 엣지 AI 오픈소스 라이브러리 공식 웹사이트(GitHub Pages)를 **1픽셀의 오차도 없이 완벽하고 통일된 톰캣/아파치 클래식 엔지니어링 감성**으로 구축하기 위한 마스터 가이드라인 및 AI 에이전트 전용 프롬프트 규격서입니다.

---

## 🏛️ 1. 핵심 설계 철학 (Design Philosophy)

1. **Apache / Tomcat Classic Tech 감성 + AMEVA Corporate Blue**:
   - 화려하기만 하고 가독성이 떨어지는 디자인을 배제하고, 엔지니어가 가장 신뢰하는 **아파치/톰캣 클래식 고가독성 기술 문서 스타일**을 고정 적용합니다.
   - 상단 고정 헤더(하단 2px 블루 언더라인) + 좌측 고정 네비게이션 사이드바(270px) + 우측 메인 기술 본문(최대 980px).
2. **이모지 최소화 및 담백한 엔지니어링 톤**:
   - 이모지 벽(Emoji Wall)을 금지하고, 텍스트와 담백한 기호(`-`, `·`, `[ ]`, `→`) 중심으로 기술적 신뢰도를 극대화합니다.
3. **100% 본문 전수 다국어 번역 (Zero Missing Translation)**:
   - 상단 메뉴뿐 아니라 본문의 모든 문단, 표(Table), 알림 박스(Alert), 리스트 항목까지 `data-i18n` 속성을 바인딩하여 6개 국어(한국어, 영어, 일본어, 중국어, 스페인어, 독일어)로 즉시 전환됩니다.
4. **개인 영역과 재단/라이브러리 영역의 철저한 공사 분리**:
   - 설립자 개인 이력/연락처는 `uno-km` 개인 포털에만 두고, 각 라이브러리 문서는 독립된 기술 공공재로 유지합니다.

---

## 🎨 2. 표준 디자인 토큰 & 색상 규격 (Design Tokens)

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

## 📐 3. 타이포그래피 및 글머리 계층 (Typography Scale)

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

## 🏛️ 4. 표준 2단 레이아웃 및 HTML 구조

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Library Name | Official Documentation</title>
  <meta name="description" content="Production-ready library documentation.">
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="stylesheet" href="assets/style.css">
  <script src="assets/i18n.js"></script>
  <script src="assets/i18n-translations.js"></script>
</head>
<body>
  <!-- 1. Top Header -->
  <header>
    <a href="index.html" class="header-brand">
      <img src="favicon.svg" alt="Logo">
      <h1 data-i18n="common.brand">Library Name</h1>
    </a>
    <div class="header-controls">
      <span class="release-tag" data-i18n="common.releaseTag">v1.0.0 (Genesis)</span>
      <div class="lang-selector-wrapper"></div>
      <a href="https://pypi.org/project/package-name/" target="_blank" class="header-btn" data-i18n="common.pypiBtn">PyPI Package</a>
      <a href="https://github.com/uno-km/repo" target="_blank" class="header-btn primary" data-i18n="common.githubBtn">GitHub Repo</a>
    </div>
  </header>

  <!-- 2. Container (Sidebar + Content) -->
  <div class="container">
    <!-- Left Sticky Sidebar -->
    <nav class="sidebar">
      <h3 data-i18n="nav.overview">Overview</h3>
      <ul>
        <li><a href="index.html" class="active" data-i18n="nav.home">Home / Architecture</a></li>
        <li><a href="installation.html" data-i18n="nav.installation">Installation Guide</a></li>
        <li><a href="quickstart.html" data-i18n="nav.quickstart">Quickstart &amp; Recipes</a></li>
      </ul>

      <h3 data-i18n="nav.reference">Reference</h3>
      <ul>
        <li><a href="api-reference.html" data-i18n="nav.apiRef">API Reference</a></li>
        <li><a href="benchmarks.html" data-i18n="nav.benchmarks">Benchmarks &amp; Profiling</a></li>
        <li><a href="versions.html" data-i18n="nav.versions">Version Archive</a></li>
      </ul>

      <h3 data-i18n="nav.aiSpecs">AI Agent Protocol</h3>
      <ul>
        <li><a href="llms.txt" target="_blank">llms.txt (AI Matrix)</a></li>
        <li><a href="llms-full.txt" target="_blank">llms-full.txt (Full Spec)</a></li>
        <li><a href="sitemap.xml" target="_blank">sitemap.xml</a></li>
      </ul>
    </nav>

    <!-- Right Main Content -->
    <main class="content">
      <h2 data-i18n="page.title">Main Title</h2>
      <p class="subtitle" data-i18n="page.subtitle">Short descriptive subtitle</p>

      <!-- Badges Bar -->
      <div class="badges-bar">
        <img src="https://img.shields.io/pypi/v/package-name.svg?color=blue" alt="PyPI">
        <img src="https://img.shields.io/npm/v/package-name.svg?color=red" alt="npm">
        <img src="https://img.shields.io/badge/license-Apache_2.0-success.svg" alt="License">
        <img src="https://img.shields.io/badge/tests-100%25_PASS-success" alt="Tests">
      </div>

      <!-- Alert Box -->
      <div class="alert alert-tip">
        <span class="alert-title" data-i18n="page.alertTitle">1-Line Quick Installation</span>
        <p data-i18n="page.alertDesc">Run the command directly in your environment:</p>
        <pre><code>pip install package-name</code></pre>
      </div>

      <!-- Feature Grid -->
      <h3 data-i18n="page.secTitle">Key Capabilities</h3>
      <div class="features-grid">
        <div class="feature-card">
          <h4 data-i18n="feat.title1">Capability One</h4>
          <p data-i18n="feat.desc1">Description of capability one.</p>
        </div>
      </div>
    </main>
  </div>

  <!-- 3. Footer -->
  <footer>
    <p data-i18n="common.footer">&copy; 2026 AMEVA Open-Source Foundation (AOSF). All Rights Reserved.</p>
  </footer>
</body>
</html>
```

---

## 🌐 5. 6개 국어 다국어 (i18n) 아키텍처 규칙

1. **지원 언어 매트릭스**:
   - `en`: 🇺🇸 English (Default)
   - `ko`: 🇰🇷 한국어
   - `ja`: 🇯🇵 日本語
   - `zh`: 🇨🇳 简体中文
   - `es`: 🇪🇸 Español
   - `de`: 🇩🇪 Deutsch
2. **동작 메커니즘**:
   - 브라우저 접속 시 `localStorage('aosf_lang')` &rarr; `navigator.language` &rarr; `'en'` 순으로 자동 감지.
   - `data-i18n="key"`가 부여된 모든 태그의 `innerHTML`을 실시간 치환.
3. **완전성 원칙 (100% Rule)**:
   - **본문에 일반 텍스트만 단독으로 하드코딩하는 것을 엄격히 금지**하며, 반드시 `data-i18n` 키를 부여하고 `i18n-translations.js`의 6개 언어 딕셔너리에 모두 등록해야 합니다.

---

## 🤖 6. [AI Agent Prompt Template] 후배 에이전트를 위한 마스터 프롬프트

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

■ 필수 준수 규칙:
1. 디자인 시스템:
   - uno-km/docs/pages/templates/library/template_src/assets/style.css를 그대로 사용할 것.
   - 상단 헤더(2px #004499 라인) + 좌측 고정 사이드바(270px) + 우측 본문(최대 980px).
   - 이모지 남발 금지 (담백한 특수문자 및 기호 사용).
2. 필수 페이지 구성 (docs/):
   - index.html (아키텍처 및 개요)
   - installation.html (패키지 매니저별 설치)
   - quickstart.html (실전 사용법 및 코드 예제)
   - api-reference.html (100% API 상세 명세)
   - benchmarks.html (하드웨어 성능 및 메모리 지표)
   - versions.html (릴리즈 이력)
   - llms.txt, llms-full.txt, robots.txt, sitemap.xml
3. 다국어(i18n) 필수 구현:
   - assets/i18n.js 및 assets/i18n-translations.js를 포함할 것.
   - 모든 제목, 문단, 알림, 표(Table), 리스트에 data-i18n 속성을 부여하고 6개 국어(ko, en, ja, zh, es, de) 딕셔너리를 100% 완벽히 작성할 것.
```

---

## 🚀 7. 1-Click 자동 생성 스크립트 사용법

```bash
# 1. 설정 파일 생성
cp config.example.json my_lib_config.json

# 2. 1초 만에 사이트 생성
python generate_docs.py --config my_lib_config.json --output ./docs

# 3. 로컬 미리보기 검증
python -m http.server 8000 -d ./docs
```
