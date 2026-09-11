# 📘 AMEVA Universal Ecosystem Toolchain (AET) & AI Agent Manual
**Official Standard for uno-km & AMEVA Open-Source Foundation (AOSF)**  
**Version:** `v1.0.0`  
**Tool:** `tools/ecosystem.py`

---

## 🎯 1. 아키텍처 개요 (Single Source of Truth)

`uno-km` 생태계의 모든 라이브러리는 **단 1개의 선언 파일(`doc.config.yaml`)**을 원천으로 삼으며, `tools/ecosystem.py` 툴체인이 다음 산출물을 100% 자동 생성(Zero-Drift)합니다.

```
       [단 하나의 설정 파일 (doc.config.yaml)]
                         │
                         ▼ [py -3 tools/ecosystem.py]
    ┌────────────────────┼────────────────────┬────────────────────┐
    ▼                    ▼                    ▼                    ▼
[3대 전용 README]    [웹 공식 문서 사이트]  [개인 포트폴리오]    [에코시스템 지표]
1. README.md (GitHub) lib/{id}/ 표준 8종    - index.html         - metrics.html
2. README.pypi.md    + 커스텀 특화 메뉴     - PORTFOLIO.md       - llms.txt
3. npm/README.md       2~3개 자동 결합      - FOUNDATION.md      - sitemap.xml
```

---

## 🤖 2. AI 에이전트에게 시켜먹는 표준 명령어 (AI Agent Prompt Recipes)

AI 에이전트에게 복잡한 코딩을 시키지 않고, 아래 **한 줄 명령어**만 던지면 AI가 툴체인을 통해 무결점으로 작업합니다.

### 📌 Case 1: 신규 라이브러리 최초 생성
> **User Prompt:**  
> `"termux-vision 라이브러리 새로 만들고 공식 문서랑 PyPI/NPM 3대 README 빌드해줘"`
>
> **AI Agent Action:**
> 1. `py -3 tools/ecosystem.py init termux-vision` 실행
> 2. 생성된 `termux-vision/doc.config.yaml`에 사명, 패키지명, 예제 코드 작성
> 3. `py -3 tools/ecosystem.py build termux-vision` 실행

---

### 📌 Case 2: 라이브러리 버전업 및 릴리스 배포
> **User Prompt:**  
> `"termux-bitnet v1.2.0으로 릴리스하고 PyPI랑 NPM 리드미, 포털 문서 일괄 동기화해줘"`
>
> **AI Agent Action:**
> 1. `py -3 tools/ecosystem.py release bitnet 1.2.0` 실행
> *(실제 레지스트리 배포까지 자동 실행 시: `py -3 tools/ecosystem.py release bitnet 1.2.0 --publish`)*

---

### 📌 Case 3: 나만의 특화 커스텀 메뉴/페이지 추가
> **User Prompt:**  
> `"termux-train 라이브러리에 'LoRA 훈련 실전 가이드' 메뉴 추가해줘"`
>
> **AI Agent Action:**
> 1. `termux-train/doc.config.yaml`의 `custom_pages`에 슬롯 추가:
>    ```yaml
>    custom_pages:
>      - slug: "training-guide"
>        title_ko: "LoRA 훈련 실전 가이드"
>        title_en: "LoRA Training Guide"
>        file: "docs/training_guide.md"
>    ```
> 2. `termux-train/docs/training_guide.md` 마크다운 작성
> 3. `py -3 tools/ecosystem.py build train` 실행 (사이드바 및 웹페이지 자동 결합)

---

### 📌 Case 4: 전체 포털 및 지표/카탈로그/마크다운 일괄 동기화
> **User Prompt:**  
> `"uno-km 포털 카탈로그랑 지표 페이지, PORTFOLIO 및 FOUNDATION 마크다운 전체 동기화해줘"`
>
> **AI Agent Action:**
> 1. `py -3 tools/build_catalog.py` 실행 (index.html 및 foundation/index.html 카드 주입)
> 2. `py -3 tools/build_pages.py` 실행 (12대 라이브러리 전체 웹문서, 사이드바, llms.txt 동기화)
> 3. `py -3 tools/ecosystem.py sync` 실행

---

## 🏗️ 3. 12대 플래그십 라이브러리 지원 목록 (Supported Ecosystem)

| ID | 프로젝트 명 | 구분 | 지원 플랫폼 | SSOT 파일 경로 |
| :--- | :--- | :--- | :--- | :--- |
| `sentinel` | AMEVA-Sentinel | Security SDK | Node / Python / Browser | `lib/sentinel/doc.config.yaml` |
| `mcp` | AMEVA-MCP-Hub | WASM MCP Hub | Node.js / WASI | `lib/mcp/doc.config.yaml` |
| `aichain` | Termux-AIChain | Agent Framework | Android Termux / Python / Node | `lib/aichain/doc.config.yaml` |
| `bitnet` | Termux-BitNet | 1.58-bit LLM | ARM64 NEON / Python / Node | `lib/bitnet/doc.config.yaml` |
| `diffusion` | Termux-Diffusion | Stable Diffusion | ARM64 Vulkan / Python / Node | `lib/diffusion/doc.config.yaml` |
| `playwright` | Termux-Playwright | Automation CDP | Android Bionic / Python / Node | `lib/playwright/doc.config.yaml` |
| `stt` | Termux-STT | Voice STT & Diarization | ARM64 / Python / Node | `lib/stt/doc.config.yaml` |
| `train` | Termux-Train | LoRA Autograd Engine | Android Bionic C / Python | `lib/train/doc.config.yaml` |
| `forge` | AMEVA-Forge | WebGPU Autograd | Browser WebGPU / WASM | `lib/forge/doc.config.yaml` |
| `infra-index`| Infra-Index Platform | Cloud Intelligence | Next.js / FastAPI | `lib/infra-index/doc.config.yaml` |
| `llamacpp` | Termux-LlamaCpp | GGUF LLM Server | Android ARM64 / Python / Node | `lib/llamacpp/doc.config.yaml` |
| `vision` | Termux-Vision | Computer Vision & VLM | ARM64 NEON & Vulkan / Py & JS | `lib/vision/doc.config.yaml` |

---

## 🏗️ 4. 신규 라이브러리 최초 생성 표준 가이드 (SOP)

새로운 라이브러리를 만들 때는 아래의 **표준 3계층 디렉터리 레이아웃**을 준수합니다.

```
termux-newlib/
├── doc.config.yaml         # ★ 단 하나의 메타데이터 (SSOT)
├── docs/                   # ★ 커스텀 특화 메뉴 마크다운들
│   └── guide.md
├── src/                    # C++ / Rust 코어 소스코드
├── python/                 # Python 패키지 소스 (또는 pyproject.toml)
├── npm/                    # Node.js 패키지 소스 (package.json)
├── README.md               # [자동생성] GitHub Master Dual View
├── README.pypi.md          # [자동생성] PyPI Python 전용 View
└── LICENSE                 # Apache-2.0
```

### `doc.config.yaml` 작성 규칙
1. **NPM/PyPI 미출시 항목**: 패키지가 없는 경우 `package_name_npm: null`로 두어 404 뱃지 생성을 원천 차단합니다.
2. **이모지 전면 금지**: 톰캣/아파치 엔지니어링 표준에 따라 모든 텍스트에서 이모지를 배제합니다.
3. **듀얼 코드 예제**: `code_example_py`와 `code_example_js`를 각각 작성하여 각 플랫폼에 최적화된 뷰가 생성되도록 합니다.
4. **뱃지 URL 표준**: shields.io 라이선스 뱃지는 `License-Apache_2.0-004499.svg` 포맷을 준수하여 404 오류를 방지합니다.
