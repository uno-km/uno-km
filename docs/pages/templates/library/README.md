# 📦 AMEVA Library Documentation Template & 1-Click Generator

> **Official Foundry for AMEVA Open-Source Systems & Deep Learning Libraries**
> A production-grade, responsive, 6-language (i18n), AI-agent-ready (`llms.txt`) GitHub Pages documentation template.

---

## ⚡ Quick Start: 1초 만에 붕어빵 찍어내기

### 방법 1: 설정 파일(`config.json`)을 이용한 1-Click 자동 생성
1. `config.example.json`을 복사하여 `my_lib_config.json`을 생성하고 프로젝트 정보를 수정합니다.
2. 아래 명령어로 문서 사이트를 즉시 생성합니다:
   ```bash
   python generate_docs.py --config my_lib_config.json --output ./my-lib-docs
   ```

### 방법 2: 수동 복제
1. `template_src/` 디렉토리 전체를 타겟 프로젝트의 `docs/` 폴더로 복사합니다.
2. `index.html`, `installation.html` 등의 플레이스홀더(`{{name}}`, `{{package_name_pypi}}` 등)를 치환합니다.

---

## 📁 템플릿 포함 구성 요소

| 파일 / 폴더 | 용도 및 기능 |
| :--- | :--- |
| **`index.html`** | 아키텍처 개요, 엔지니어링 문제/해결, 6개 핵심 기능 카드, 1줄 빠른 설치 |
| **`installation.html`** | 멀티 탭 패키지 매니저 (`pip`, `npm`, `cargo`, `source`) & 사전 요구사항 매트릭스 |
| **`quickstart.html`** | 동기/비동기/메모리 최적화 레시피 및 프로덕션 패턴 |
| **`api-reference.html`** | 클래스, 메서드, 파라미터 타입, 예외 처리 공식 명세서 |
| **`benchmarks.html`** | TPS, 지연 시간, 전력 소모량(mW), VRAM 프로파일링 매트릭스 |
| **`versions.html`** | 릴리즈 노트 아카이브 및 마이그레이션 안내 |
| **`llms.txt` / `llms-full.txt`** | 최신 AI 에이전트 및 MCP 도구 전용 경량/전체 사양서 |
| **`assets/style.css`** | Apache/Tomcat 클래식 테크 감성 + AMEVA Cyan-Midnight 디자인 시스템 |
| **`assets/i18n.js`** | 6개 국어 자동 감지, 로컬스토리지 저장, 코드 1-Click 복사 툴팁 엔진 |
| **`assets/i18n-translations.js`** | 한국어, 영어, 일본어, 중국어, 스페인어, 힌디어 표준 번역 딕셔너리 |
| **`.github/workflows/gh-pages.yml`** | GitHub Pages 자동 배포 CI/CD 워크플로우 액션 |

---

## 🌐 다국어 지원 (i18n)
* **지원 언어**: 🇺🇸 English (`en`), 🇰🇷 한국어 (`ko`), 🇯🇵 日本語 (`ja`), 🇨🇳 简体中文 (`zh`), 🇪🇸 Español (`es`), 🇮🇳 हिन्दी (`hi`)
* `data-i18n="키이름"` 속성만 추가하면 자동으로 번역 매핑이 적용됩니다.

---

## 🚀 로컬 미리보기
```bash
python -m http.server 8000 -d ./template_src
# 브라우저에서 http://localhost:8000 접속
```
