# UNO_KM_AGENT_MANUAL.md
# AMEVA Ecosystem Unified Portal — 에이전트 운영 완전 매뉴얼

> 문서 번호: AMV-MAN-20260826  
> 버전: 1.0.0  
> 최종 수정: 2026-08-26  
> 적용 대상: 홈페이지 관리 에이전트 전원, 신규 라이브러리 온보딩 에이전트  
> **이 문서를 읽지 않고 uno-km 저장소를 수정하는 행위를 엄격히 금지한다.**

---

## 목차

1. [전체 디렉터리 구조 명세](#1-전체-디렉터리-구조-명세)
2. [SSOT 파일 목록 및 정본 경로](#2-ssot-파일-목록-및-정본-경로)
3. [HTML 표준 템플릿 (붕어빵 원형)](#3-html-표준-템플릿-붕어빵-원형)
4. [신규 라이브러리 온보딩 절차 (붕어빵 찍기)](#4-신규-라이브러리-온보딩-절차)
5. [기존 라이브러리 수정 절차](#5-기존-라이브러리-수정-절차)
6. [공통 자산 업데이트 절차](#6-공통-자산-업데이트-절차)
7. [버전 관리 절차](#7-버전-관리-절차)
8. [빌더 실행 절차 (tools/build_pages.py)](#8-빌더-실행-절차)
9. [vercel.json 라우팅 규칙 관리](#9-vercelJSON-라우팅-규칙-관리)
10. [검증 체크리스트](#10-검증-체크리스트)
11. [절대 금지 사항 (Anti-Patterns)](#11-절대-금지-사항-anti-patterns)
12. [에이전트별 책임 분리](#12-에이전트별-책임-분리)

---

## 1. 전체 디렉터리 구조 명세

```
uno-km/                                   ← Git 저장소 루트 (Vercel 배포 루트)
│
├── index.html                            ← 글로벌 랜딩 (Founder CV, 3D 그래프)
│   └── 참조: /shared/style.css           ← (주의: 루트 전용 CSS = 19,504B Unified)
├── 404.html                              ← 글로벌 404 폴백
├── style.css                             ← 루트 랜딩 전용 CSS (19,504B Unified) [수정 금지]
├── vercel.json                           ← Vercel 라우팅/리다이렉트/헤더 설정 [반드시 매뉴얼 참조]
├── middleware.js                         ← Edge 미들웨어 [수정 시 보안 검토 필수]
├── schema.sql                            ← Neon PostgreSQL DDL [DB 팀 전담]
├── RELEASE_NOTES.md                      ← 생태계 통합 릴리스 노트
├── sitemap.xml                           ← 전체 포털 사이트맵 [빌더가 자동 생성]
├── robots.txt                            ← 크롤러 정책
├── llms.txt                              ← AI 에이전트 컨텍스트 (루트)
├── llms-full.txt                         ← AI 에이전트 상세 스펙 (루트)
│
├── shared/                               ★ 공통 자산 SSOT (절대 경로로만 참조)
│   ├── style.css                         ← 루트 랜딩용 CSS (19,504B Unified) [lib 페이지 사용 금지]
│   ├── lib-style.css                     ← lib 문서 페이지용 CSS (14,425B Library Doc) [정본]
│   ├── common.js                         ← DOM 라이프사이클 공유 유틸리티 (7,614B) [정본]
│   ├── i18n.js                           ← 13개 국어 i18n 마스터 엔진 (54,251B v2.1) [정본]
│   ├── i18n-translations.js              ← 13개 국어 완전 번역 딕셔너리 (213,694B+) [정본]
│   ├── telemetry.js                      ← 클라이언트 텔레메트리 엔진 (21,136B) [정본]
│   ├── favicon.svg                       ← AMEVA 공식 파비콘 (2,601B) [정본]
│   ├── ecosystem-versions.yaml           ← 전체 라이브러리 버전 SSOT [유일한 버전 수정 지점]
│   ├── ecosystem-catalog.yaml            ← 전체 프로젝트 카탈로그 SSOT [프로젝트 카드 및 링크 정본]
│   ├── sentinel-browser.global.js        ← Sentinel 브라우저 SDK
│   └── brand/                            ← 브랜드 자산 (로고 이미지 등)
│
├── lib/                                  ★ 12대 플래그십 라이브러리 공식 문서 포털
│   ├── sentinel/                         ← AMEVA-Sentinel 문서 (Security SDK)
│   ├── mcp/                              ← AMEVA-MCP-Hub 문서 (Polyglot WASM)
│   ├── aichain/                          ← Termux-AIChain 문서 (Zero-Dep Agent)
│   ├── bitnet/                           ← Termux-BitNet 문서 (1.58-bit LLM)
│   ├── diffusion/                        ← Termux-Diffusion 문서 (Stable Diffusion)
│   ├── playwright/                       ← Termux-Playwright 문서 (Automation)
│   ├── stt/                              ← Termux-STT 문서 (Voice STT)
│   ├── train/                            ← Termux-Train 문서 (LoRA Engine)
│   ├── forge/                            ← AMEVA-Forge 문서 (WebGPU Autograd)
│   ├── infra-index/                      ← Infra-Index Platform 문서 (Cloud Intelligence)
│   ├── llamacpp/                         ← Termux-LlamaCpp 문서 (GGUF Runtime)
│   └── vision/                           ← Termux-Vision 문서 (Computer Vision & VLM)
│
├── api/                                  ← Vercel Serverless Functions
│   ├── sentinel.js                       ← Sentinel 평가 API
│   ├── telemetry.js                      ← 텔레메트리 수집 API (백엔드 전용)
│   ├── public-stats.js                   ← 공개 통계 API
│   ├── graph.js                          ← 3D 지식 그래프 데이터 API
│   ├── stats.js                          ← 실시간 상태 API
│   └── guestbook.js                      ← 방명록 CRUD API
│
├── foundation/                           ← AMEVA Open-Source Foundation 문서 및 지표 (metrics.html)
├── tools/                                ← 자동화 도구 체인
│   ├── build_catalog.py                  ← 카탈로그 빌더 (index.html, foundation 카드 주입)
│   ├── build_pages.py                    ← 단일 통합 페이지/사이드바/메타 빌더
│   ├── ecosystem.py                      ← 통합 생태계 CLI 툴체인 (init, build, release, sync)
│   └── doc_builder/                      ← 문서 컴파일러 모듈
│
├── sdk/                                  ← 브라우저 SDK 번들 (특수 목적)
│   └── sentinel/                         ← Sentinel 브라우저 SDK 전용
│
└── [레거시 루트 미러 폴더들]              ← vercel.json redirect로만 처리
    ← 직접 수정 금지. lib/ 에서만 수정 후 리다이렉트
```

---

## 2. SSOT 파일 목록 및 정본 경로

> **핵심 원칙:** 아래 SSOT 파일은 해당 경로에서만 수정. 다른 위치의 복사본은 존재해서는 안 됨.

| 파일 | 정본 경로 | 크기 | 수정 시 영향 범위 |
|:---|:---|:---:|:---|
| `lib-style.css` | `/shared/lib-style.css` | 14,425 B | 모든 lib/* 페이지 |
| `style.css` (Unified) | `/shared/style.css` | 19,504 B | 루트 index.html 전용 |
| `common.js` | `/shared/common.js` | 7,614 B | 모든 lib/* 페이지 |
| `i18n.js` | `/shared/i18n.js` | 54,251 B | 모든 lib/* 페이지 |
| `i18n-translations.js` | `/shared/i18n-translations.js` | 213,694 B+ | 모든 lib/* 번역 |
| `telemetry.js` | `/shared/telemetry.js` | 21,136 B | 모든 lib/* 페이지 |
| `favicon.svg` | `/shared/favicon.svg` | 2,601 B | 모든 페이지 |
| `ecosystem-versions.yaml` | `/shared/ecosystem-versions.yaml` | - | 버전 전체 (versions.html, llms.txt) |
| `ecosystem-catalog.yaml` | `/shared/ecosystem-catalog.yaml` | - | 전체 프로젝트 카드 및 링크 (index, foundation) |

---

## 3. HTML 표준 템플릿 (붕어빵 원형)

> **모든 lib/[name]/*.html 파일의 <head>와 <header>는 이 형식만 허용.**

### 3-A. 표준 <head> 섹션

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[라이브러리명] | [페이지명] | Official Documentation</title>
  <meta name="description" content="[페이지 설명]">
  <link rel="icon" type="image/svg+xml" href="/shared/favicon.svg">
  <link rel="stylesheet" href="/shared/lib-style.css">
  <script src="/shared/i18n.js" defer></script>
  <script src="/shared/i18n-translations.js" defer></script>
  <script src="/shared/common.js" defer></script>
</head>
```

**절대 금지:**
- `href="assets/style.css"` (로컬 복사본 참조)
- `<link rel="icon">` 태그 2개 이상 선언
- `<script src="assets/i18n.js">` (구버전 로컬 참조)
- `<script src="assets/i18n-translations.js">` (2KB stub 참조)

### 3-B. 표준 <header> 섹션

```html
<header>
  <a href="index.html" class="header-brand">
    <img src="/shared/favicon.svg" alt="[라이브러리명] Logo">
    <h1 data-i18n="common.brand">[라이브러리명]</h1>
  </a>
  <div class="header-controls">
    <span class="release-tag" data-i18n="common.releaseTag">v[버전]</span>
    <div class="lang-selector-wrapper"></div>
    <a href="/foundation/index.html" class="header-btn" style="border-color:#2563eb;color:#2563eb;font-weight:600;" data-i18n="common.foundationBtn">Foundation</a>
    <!-- npm 패키지가 있는 경우만 -->
    <a href="https://www.npmjs.com/package/[npm-package]" target="_blank" class="header-btn npm-btn" data-i18n="common.npmBtn">npm</a>
    <!-- PyPI 패키지가 있는 경우만 -->
    <a href="https://pypi.org/project/[pypi-package]/" target="_blank" class="header-btn" data-i18n="common.pypiBtn">PyPI (pip)</a>
    <a href="https://github.com/sponsors/uno-km" target="_blank" class="header-btn" style="border-color:#ea4aaa;color:#ea4aaa;font-weight:700;">Sponsor</a>
    <a href="https://github.com/uno-km/[github-repo]" target="_blank" class="header-btn primary" data-i18n="common.githubBtn">GitHub</a>
    <a href="/" class="header-btn" style="border-color:#004499;color:#004499;font-weight:600;" data-i18n="common.founderBtn">Founder CV</a>
  </div>
</header>
```

### 3-C. 표준 사이드바 <nav> 섹션

```html
<nav class="sidebar">
  <!-- Tier 1: 이 라이브러리의 문서 페이지 -->
  <h3 data-i18n="common.nav.docNav">Document Navigation</h3>
  <ul>
    <li><a href="index.html" class="[active 여부]">Home / Architecture</a></li>
    <li><a href="installation.html">Installation Guide</a></li>
    <li><a href="quickstart.html">Quickstart &amp; Recipes</a></li>
    <li><a href="api-reference.html">API Reference</a></li>
    <li><a href="benchmarks.html">Benchmarks &amp; Profiling</a></li>
    <li><a href="advanced-parameters.html">Advanced Parameters</a></li>
    <li><a href="versions.html">Version Archive</a></li>
    <!-- 라이브러리 전용 추가 페이지 (있는 경우) -->
  </ul>
  <!-- Tier 2: 전체 플래그십 라이브러리 목록 -->
  <h3 data-i18n="common.nav.libraries">Flagship Libraries</h3>
  <ul>
    <li><a href="/lib/sentinel/" [현재 라이브러리면 class="active"]>AMEVA-Sentinel (Security SDK)</a></li>
    <li><a href="/lib/mcp/">AMEVA-MCP-Hub (Polyglot WASM)</a></li>
    <li><a href="/lib/aichain/">Termux-AIChain (Zero-Dep Agent)</a></li>
    <li><a href="/lib/bitnet/">Termux-BitNet (1.58-bit LLM)</a></li>
    <li><a href="/lib/diffusion/">Termux-Diffusion (Image AI)</a></li>
    <li><a href="/lib/playwright/">Termux-Playwright (Automation)</a></li>
    <li><a href="/lib/stt/">Termux-STT (Voice STT)</a></li>
    <li><a href="/lib/train/">Termux-Train (LoRA Engine)</a></li>
    <li><a href="/lib/forge/">AMEVA-Forge (WebGPU Autograd)</a></li>
    <li><a href="https://ameva-workstation-web-core.vercel.app/" target="_blank">AMEVA Workstation (Web App)</a></li>
  </ul>
  <!-- Tier 3: AI 프로토콜 -->
  <h3 data-i18n="common.nav.aiSpecs">AI Agent Protocols</h3>
  <ul>
    <li><a href="llms.txt" target="_blank">llms.txt (AI Fast Context)</a></li>
    <li><a href="llms-full.txt" target="_blank">llms-full.txt (Full Spec)</a></li>
    <li><a href="robots.txt" target="_blank">robots.txt (AI Crawlers)</a></li>
    <li><a href="sitemap.xml" target="_blank">sitemap.xml (Sitemap)</a></li>
  </ul>
</nav>
```

---

## 4. 신규 라이브러리 온보딩 절차 (붕어빵 찍기)

신규 라이브러리 `termux-newlib` 를 추가하는 전체 절차:

### Step 1: ecosystem-versions.yaml 등록

`shared/ecosystem-versions.yaml` 에 신규 항목 추가:

```yaml
  newlib:
    name: "Termux-NewLib"
    version: "1.0.0"
    release_date: "YYYY-MM-DD"
    npm_package: null               # 또는 "termux-newlib"
    pypi_package: "termux-newlib"   # 또는 null
    github_repo: "uno-km/termux-newlib"
    lib_path: "lib/newlib"
    doc_pages:
      - index.html
      - installation.html
      - quickstart.html
      - api-reference.html
      - benchmarks.html
      - advanced-parameters.html
      - versions.html
    status: "stable"
```

### Step 2: lib/newlib/ 폴더 생성

```
lib/newlib/
├── index.html              ← 표준 템플릿 기반 (§3 참조)
├── installation.html       ← 표준 템플릿 기반
├── quickstart.html         ← 표준 템플릿 기반
├── api-reference.html      ← 표준 템플릿 기반
├── benchmarks.html         ← 표준 템플릿 기반
├── advanced-parameters.html ← 표준 템플릿 기반
├── versions.html           ← 표준 템플릿 기반
├── doc.config.yaml         ← 라이브러리 설정 (아래 양식 참조)
├── llms.txt                ← 빌더 자동 생성 or 수동 작성
├── llms-full.txt           ← 빌더 자동 생성 or 수동 작성
├── robots.txt              ← 기존 라이브러리에서 복사
├── sitemap.xml             ← 빌더 자동 생성
└── assets/                 ← 라이브러리 고유 자산만 (공통 파일 절대 복사 금지)
```

**doc.config.yaml 표준 양식:**

```yaml
# doc.config.yaml - Termux-NewLib
library:
  name: "Termux-NewLib"
  id: "newlib"
  tagline: "한 줄 설명"
  version: "1.0.0"
  npm_package: null
  pypi_package: "termux-newlib"
  github_repo: "uno-km/termux-newlib"
  sponsor_url: "https://github.com/sponsors/uno-km"

pages:
  - id: index
    title: "Home / Architecture"
    file: index.html
  - id: installation
    title: "Installation Guide"
    file: installation.html
  - id: quickstart
    title: "Quickstart & Recipes"
    file: quickstart.html
  - id: api-reference
    title: "API Reference"
    file: api-reference.html
  - id: benchmarks
    title: "Benchmarks & Profiling"
    file: benchmarks.html
  - id: advanced-parameters
    title: "Advanced Parameters"
    file: advanced-parameters.html
  - id: versions
    title: "Version Archive"
    file: versions.html
```

### Step 3: 전체 사이드바에 새 라이브러리 추가

**모든 기존 lib/*/[*.html]** 의 Tier 2 사이드바에 신규 항목 추가:

```html
<li><a href="/lib/newlib/">Termux-NewLib ([설명])</a></li>
```

**방법:** `tools/build_pages.py --fix-sidebars` 실행 (빌더가 ecosystem-versions.yaml 기준으로 자동 처리)

### Step 4: vercel.json 라우팅 추가

`vercel.json` 의 redirects 에 추가:
```json
{ "source": "/lib/newlib",  "destination": "/lib/newlib/", "permanent": false },
{ "source": "/newlib",      "destination": "/lib/newlib/", "permanent": false }
```

rewrites 에 추가:
```json
{ "source": "/lib/newlib/:match*", "destination": "/lib/newlib/:match*" }
```

### Step 5: 빌더 실행 및 검증

```bash
python tools/build_pages.py --lib newlib   # 신규 라이브러리만 빌드
python tools/build_pages.py --verify        # 전체 검증
```

### Step 6: llms.txt / sitemap.xml 업데이트

```bash
python tools/build_pages.py --update-meta   # llms.txt, sitemap.xml 재생성
```

---

## 5. 기존 라이브러리 수정 절차

### 5-A. 문서 내용 수정 (콘텐츠 변경)

1. `lib/[name]/[page].html` 의 `<main class="content">` 블록 내용만 수정
2. `<head>`, `<header>`, `<nav class="sidebar">` 절대 수동 수정 금지
3. 수정 후 `python tools/build_pages.py --verify` 실행

### 5-B. 버전 번호 변경

1. `shared/ecosystem-versions.yaml` 의 해당 라이브러리 `version` 값 수정
2. `python tools/build_pages.py --lib [name]` 실행
3. 빌더가 `versions.html`, `llms.txt`, `sitemap.xml` 자동 업데이트

### 5-C. 새 페이지 추가

1. `lib/[name]/[newpage].html` 생성 (표준 템플릿 §3 기준)
2. `lib/[name]/doc.config.yaml` 의 pages 섹션에 추가
3. `shared/ecosystem-versions.yaml` 의 `doc_pages` 목록에 추가
4. `python tools/build_pages.py --lib [name]` 실행 (사이드바 자동 업데이트)

---

## 6. 공통 자산 업데이트 절차

> **경고:** 공통 자산 수정은 모든 lib 페이지에 즉시 영향. 반드시 검증 후 커밋.

### 6-A. style.css (lib-style.css) 수정

1. `shared/lib-style.css` 직접 수정
2. 다른 위치의 style.css 절대 수정 금지 (복사본이 있어서는 안 됨)
3. 수정 후 브라우저에서 lib/sentinel/index.html 시각 확인

### 6-B. i18n-translations.js 번역 추가/수정

1. `shared/i18n-translations.js` 직접 수정
2. 새 언어 키 추가 시 모든 13개 국어 섹션에 해당 키 추가
3. `python tools/build_pages.py --verify` 실행

### 6-C. common.js 기능 추가

1. `shared/common.js` 직접 수정
2. 기존 함수명/API 시그니처 변경 금지 (하위 호환성 유지)
3. 수정 후 lib/sentinel 등 주요 페이지에서 기능 동작 확인

### 6-D. favicon.svg 변경

1. `shared/favicon.svg` 교체
2. Vercel 배포 후 CDN 캐시 purge 필요할 수 있음

---

## 7. 버전 관리 절차

### 7-A. 단일 라이브러리 버전 업

```yaml
# shared/ecosystem-versions.yaml 수정
libraries:
  sentinel:
    version: "1.0.1"              # 이 줄만 수정
    release_date: "2026-09-01"    # 이 줄도 수정
```

이후:
```bash
python tools/build_pages.py --lib sentinel
git add shared/ecosystem-versions.yaml lib/sentinel/
git commit -m "chore: bump sentinel to v1.0.1"
git tag sentinel-v1.0.1
git push origin main --tags
```

### 7-B. 생태계 통합 버전 업

```yaml
# shared/ecosystem-versions.yaml 수정
ecosystem:
  version: "2.2.0"
  release_date: "2026-09-01"
```

이후:
```bash
python tools/build_pages.py          # 전체 재빌드
# RELEASE_NOTES.md 수동 업데이트
git add .
git commit -m "release: AMEVA Ecosystem v2.2.0"
git tag v2.2.0
git push origin main --tags
```

### 7-C. README/pip/npm과의 연동

각 라이브러리 GitHub 저장소의 README는 해당 저장소에서 별도 관리.  
uno-km 의 `lib/[name]/installation.html`, `versions.html` 이 uno-km의 관심사.  
npm/pip 배포는 각 라이브러리 저장소의 CI/CD 파이프라인이 담당.

---

## 8. 빌더 실행 절차 (tools/)

```bash
# [A. 카탈로그 빌더] shared/ecosystem-catalog.yaml -> index.html & foundation/index.html 주입
py -3 tools/build_catalog.py

# [B. 단일 통합 빌더] lib/* 페이지, 사이드바 트리, llms.txt, sitemap.xml 일괄 빌드
py -3 tools/build_pages.py

# 특정 라이브러리만 빌드
py -3 tools/build_pages.py --lib sentinel
py -3 tools/build_pages.py --lib vision
py -3 tools/build_pages.py --lib forge

# [C. 생태계 통합 마스터 툴체인] 전체 일괄 동기화 (Zero-Drift)
py -3 tools/ecosystem.py sync

# 검증만 실행 (수정 없이 무결성 점검)
py -3 tools/build_pages.py --verify
py -3 tools/build_catalog.py --verify
```

**빌더 실행 전 필수 확인:**
- `shared/ecosystem-versions.yaml` 이 최신 버전인지 확인
- `shared/ecosystem-catalog.yaml` 에 신규 라이브러리가 등록되어 있는지 확인
- `lib/[name]/doc.config.yaml` 이 올바른지 확인

---

## 9. vercel.json 라우팅 규칙 관리

### 9-A. 신규 라이브러리 추가 시 필수 항목

`vercel.json` 의 **redirects** 배열에 추가 (순서: lib/name → name):

```json
{ "source": "/lib/newlib",  "destination": "/lib/newlib/", "permanent": false },
{ "source": "/newlib",      "destination": "/lib/newlib/", "permanent": false }
```

`vercel.json` 의 **rewrites** 배열에 추가:

```json
{ "source": "/lib/newlib/:match*", "destination": "/lib/newlib/:match*" }
```

### 9-B. 라우팅 원칙

1. `/lib/[name]/` 이 항상 정식 경로 (canonical URL)
2. `/[name]/` 은 `/lib/[name]/` 으로 redirect (302)
3. 루트 미러 폴더(`/sentinel/`, `/mcp/` 등) 는 물리적으로 유지하되 vercel.json redirect 로만 접근
4. `/shared/` 는 정적 자산 직접 서빙 경로 (rewrite 처리)

### 9-C. 현재 12대 라이브러리 라우팅 현황

| URL 패턴 | 목적지 | 방식 |
|:---|:---|:---|
| `/sentinel` | `/lib/sentinel/` | redirect |
| `/lib/sentinel/` | 직접 서빙 | rewrite |
| `/mcp` | `/lib/mcp/` | redirect |
| `/aichain` | `/lib/aichain/` | redirect |
| `/bitnet` | `/lib/bitnet/` | redirect |
| `/diffusion` | `/lib/diffusion/` | redirect |
| `/playwright` | `/lib/playwright/` | redirect |
| `/stt` | `/lib/stt/` | redirect |
| `/train` | `/lib/train/` | redirect |
| `/forge` | `/lib/forge/` | redirect |
| `/infra-index` | `/lib/infra-index/` | redirect |
| `/llamacpp` | `/lib/llamacpp/` | redirect |
| `/vision` | `/lib/vision/` | redirect |
| `/shared/:match*` | `/shared/:match*` | rewrite (정적 자산) |

---

## 10. 검증 체크리스트

### 파일 추가/수정 후 매번 실행

```bash
py -3 tools/build_catalog.py --verify
py -3 tools/build_pages.py --verify
```

### 체크리스트 (자동/수동)

#### A. <head> 무결성
- [ ] 모든 lib/*.html 에 `href="/shared/lib-style.css"` 존재
- [ ] 모든 lib/*.html 에 `src="/shared/i18n.js"` 존재
- [ ] 모든 lib/*.html 에 `src="/shared/i18n-translations.js"` 존재
- [ ] 모든 lib/*.html 에 `src="/shared/common.js"` 존재
- [ ] 모든 lib/*.html 의 `<link rel="icon">` 이 정확히 1개

#### B. 뱃지 무결성 (Zero-404 Badges)
- [ ] shields.io 뱃지 URL에 `Apache_2.0` 등 표준 언더스코어 적용 여부 (대시 연속 `--` 파싱 실패 방지)
- [ ] 미배포 패키지는 `package_name_npm: null` 선언으로 404 뱃지 원천 차단

#### C. 공통 파일 복사본 부재 확인
- [ ] `lib/*/assets/style.css` 없음
- [ ] `lib/*/assets/i18n.js` 없음
- [ ] `lib/*/assets/i18n-translations.js` 없음
- [ ] `lib/*/assets/common.js` 없음
- [ ] `lib/*/assets/favicon.svg` 없음

#### D. 버전 및 카탈로그 일관성
- [ ] `ecosystem-versions.yaml` 의 버전 = `lib/[name]/versions.html` = `llms.txt`
- [ ] `ecosystem-catalog.yaml` 의 12대 라이브러리 목록 = `index.html` = `foundation/index.html`

#### E. 라우팅
- [ ] vercel.json 에 12대 모든 lib 라이브러리의 redirect/rewrite 존재
- [ ] `/[name]` 접근 시 `/lib/[name]/` 로 리다이렉트

---

## 11. 절대 금지 사항 (Anti-Patterns)

> 이 섹션의 금지 사항을 위반하면 시스템이 이전의 기형적 구조로 퇴행한다.

### ❌ FORBIDDEN-001: 공통 파일 로컬 복사
```html
<!-- 절대 금지 -->
<link rel="stylesheet" href="assets/style.css">
<script src="assets/i18n.js"></script>
```

### ❌ FORBIDDEN-002: index.html 및 foundation/index.html 수동 하드코딩
- 프로젝트 카드 섹션은 반드시 `shared/ecosystem-catalog.yaml` 수정 후 `py -3 tools/build_catalog.py`로 주입할 것.

### ❌ FORBIDDEN-003: 비표준 이모지 남발
- 모든 공식 기술 문서 및 UI는 톰캣/아파치 엔지니어링 표준(Strict No-Emoji)을 준수할 것.
<link rel="stylesheet" href="assets/style.css">
<script src="assets/i18n.js" defer></script>
<script src="assets/i18n-translations.js" defer></script>
<script src="assets/common.js" defer></script>
```
```bash
# 절대 금지
cp shared/lib-style.css lib/newlib/assets/style.css
cp shared/i18n.js lib/newlib/assets/i18n.js
```

### ❌ FORBIDDEN-002: favicon 중복 선언
```html
<!-- 절대 금지 -->
<link rel="icon" type="image/svg+xml" href="favicon.svg">
<link rel="icon" type="image/svg+xml" href="favicon.svg">  <!-- 2번째 금지 -->
```

### ❌ FORBIDDEN-003: 루트 미러 폴더 직접 수정
```bash
# 절대 금지
vim sentinel/index.html     # 루트 미러 직접 수정
vim mcp/installation.html   # 루트 미러 직접 수정
# → 반드시 lib/sentinel/, lib/mcp/ 에서만 수정
```

### ❌ FORBIDDEN-004: shared/ 외부에서 버전 수정
```html
<!-- 절대 금지: HTML 파일 직접 버전 수정 -->
<span class="release-tag">v1.0.1</span>
<!-- → 반드시 shared/ecosystem-versions.yaml 수정 후 빌더 실행 -->
```

### ❌ FORBIDDEN-005: lib/*/doc.config.yaml 외 빌더 스크립트 별도 생성
```bash
# 절대 금지
vim lib/newlib/build_pages.py    # 라이브러리별 빌더 생성
# → 반드시 tools/build_pages.py 단일 빌더만 사용
```

### ❌ FORBIDDEN-006: shared/i18n-translations.js 의 부분 번역 stub 생성
```bash
# 절대 금지
echo 'const TRANSLATIONS = {ko:{},en:{}}' > lib/newlib/assets/i18n-translations.js
# → 번역 파일은 shared/에 단 하나만 존재
```

### ❌ FORBIDDEN-007: 루트 style.css (19,504B Unified) 를 lib 페이지에 사용
```html
<!-- 금지: 루트 Unified CSS를 lib 페이지에 적용 -->
<link rel="stylesheet" href="/shared/style.css">
<!-- → lib 페이지는 반드시 /shared/lib-style.css -->
```

---

## 12. 에이전트별 책임 분리

| 에이전트 역할 | 관리 영역 | 수정 가능 파일 |
|:---|:---|:---|
| **공통 자산 에이전트** | `/shared/` 전체 | lib-style.css, i18n.js, i18n-translations.js, common.js, telemetry.js, favicon.svg, ecosystem-versions.yaml |
| **빌더 에이전트** | `/tools/` | build_pages.py |
| **인프라 에이전트** | 루트 설정 | vercel.json, middleware.js, robots.txt, sitemap.xml (루트) |
| **Sentinel 에이전트** | `/lib/sentinel/` | sentinel 고유 HTML 콘텐츠, doc.config.yaml, admin.html |
| **MCP 에이전트** | `/lib/mcp/` | mcp 고유 HTML 콘텐츠, tools.html, doc.config.yaml |
| **AIChain 에이전트** | `/lib/aichain/` | aichain 고유 HTML 콘텐츠, doc.config.yaml |
| **BitNet 에이전트** | `/lib/bitnet/` | bitnet 고유 HTML 콘텐츠, models.html, doc.config.yaml |
| **Forge 에이전트** | `/lib/forge/` | forge 고유 HTML 콘텐츠, demo.html, experimental/, doc.config.yaml |
| **Diffusion 에이전트** | `/lib/diffusion/` | diffusion 고유 HTML 콘텐츠, gallery.html, models.html, doc.config.yaml |
| **Playwright 에이전트** | `/lib/playwright/` | playwright 고유 HTML 콘텐츠, doc.config.yaml |
| **STT 에이전트** | `/lib/stt/` | stt 고유 HTML 콘텐츠, models.html, showcase.html, doc.config.yaml |
| **Train 에이전트** | `/lib/train/` | train 고유 HTML 콘텐츠, models.html, training-guide.html, doc.config.yaml |
| **Foundation 에이전트** | `/foundation/` | 거버넌스 문서 HTML |

### 에이전트 간 협업 규칙

1. **공통 자산 에이전트가 shared/ 파일을 수정할 때:** 모든 라이브러리 에이전트에게 변경 통보 (변경 로그 작성)
2. **라이브러리 에이전트가 새 페이지를 추가할 때:** ecosystem-versions.yaml 수정을 공통 자산 에이전트에게 위임
3. **사이드바 변경 필요 시:** 빌더 에이전트에게 `--fix-sidebars` 실행 요청
4. **라이브러리 추가 시:** 인프라 에이전트에게 vercel.json 업데이트 요청

---

## 13. 엔지니어링 개발 표준 및 절대 규칙 (AOSF-ENG-STD-2026-V1)

> **상세 정본**: [`docs/DEVELOPMENT_STANDARDS.md`](docs/DEVELOPMENT_STANDARDS.md)

1. **에러 처리 절대 원칙 (No-Fallback & Strict Resource Deallocation)**:
   - 폴백(Fallback), 하드코딩, 빈 `except/catch`, 거짓 `return True` 전면 금지.
   - 에러는 가감 없이 호출자에게 명확히 표출하되, 메모리/캐시/파일핸들러 등 자원은 `try-finally`로 100% 안전하게 해제.
2. **페이즈 분할 개발 및 사전 승인 원칙**:
   - 임의 일괄 개발 금지. 반드시 Phase 분할 후 기술 트레이드오프, 빅테크 레퍼런스, 성능 비교표, 대안을 포함하여 사용자(주인장)에게 100% 한국어로 사전 보고 및 승인 득할 것.
3. **독단적 문제 규정 금지 (Zero-Assumption)**:
   - "저가형 모델이니까 이게 좋겠군" 등 지레짐작으로 모델/설계를 결정하지 말고 반드시 사전에 질문하고 확인할 것.
4. **실시간 동적 로깅 및 정밀 테스트**:
   - 단순 "PASS" 보고 금지. 실시간 ms 단위 소요시간, 모델명, 메모리 점유량 등이 동적으로 출력되는 계측 가능한 테스트 작성.
5. **객체지향 설계, 촘촘한 주석 및 100% 원터치 설치**:
   - 변수/임포트 단위 촘촘한 주석 작성 및 `pip install`, `npm install` 단일 명령 원터치 설치 보장.

---

*이 매뉴얼은 `shared/ecosystem-versions.yaml` 에 새 라이브러리가 추가될 때마다 Section 9-C를 업데이트해야 한다.*