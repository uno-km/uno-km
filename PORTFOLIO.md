# 엔지니어링 포트폴리오

- **작성자**: 김은호 (Eunho Kim)
- **직무**: 시스템 소프트웨어 엔지니어 / 풀스택 엔지니어
- **이메일**: [uno.kim@kakao.com](mailto:uno.kim@kakao.com)
- **웹사이트**: [https://uno-km.vercel.app/](https://uno-km.vercel.app/)
- **재단 포털**: [https://uno-km.vercel.app/foundation/](https://uno-km.vercel.app/foundation/)
- **GitHub**: [https://github.com/uno-km](https://github.com/uno-km)

---

## 1. 프로젝트 목록

### 1.1 AMEVA Workstation (Web)
클라이언트 브라우저 환경에서 서버 통신 없이 로컬 WebGPU로 거대 언어 모델(LLM) 추론 및 멀티미디어 처리를 수행하는 웹 애플리케이션입니다.

- **카테고리**: 브라우저 온디바이스 애플리케이션
- **기술 스택**: TypeScript, WebGPU, Web Audio, WebCodecs, HTML5 Canvas, OPFS
- **주요 기능**:
  - WebGPU 기반 Qwen2.5(0.5B / 1.5B / 7B) 인메모리 로컬 추론 및 스트리밍
  - 웹 워커 기반 대용량 PDF / DOCX 텍스트 파싱 및 맵리듀스 청킹
  - 무인코딩 인앱 비디오 구간 컷편집 및 Web Audio 기반 무음 자동 분할
  - 캔버스 기반 계층형 노드 에디터 및 OPFS 로컬 데이터 저장
- **적용처**: 오프라인 기밀 문서 분석기, 로컬 멀티미디어 에디터
- **관련 링크**:
  - [웹 애플리케이션 실행](https://ameva-workstation-web-core.vercel.app/)
  - [GitHub 저장소](https://github.com/uno-km/AMEVA-Workstation-Web)

---

### 1.2 AMEVA-MCP-Hub
단일 Node.js 프로세스 내부에서 WASI WebAssembly 바이트코드를 인메모리로 실행하고, 깃허브 다중 리포지토리의 도구를 동기화하는 모델 컨텍스트 프로토콜(MCP) 허브 및 SDK입니다.

- **카테고리**: 개발자 도구 / AI 에이전트 인프라
- **기술 스택**: Node.js, TypeScript, WebAssembly (WASI), Vector Embeddings
- **배포 버전**: `v3.0.0`
- **주요 기능**:
  - 호스트 컴파일러(C++, Rust, Java, Go, Python) 없이 인메모리 WASM 도구 실행 (<1ms 콜드 스타트)
  - 코사인 유사도 기반 AI 벡터 도구 시맨틱 라우팅
  - GitHub 다중 리포지토리 도구 매니페스트 실시간 구독 및 핫리로드
- **설치 및 실행**:
  ```bash
  # 즉시 실행
  npx ameva-mcp-hub

  # 패키지 설치
  npm install ameva-mcp-hub
  ```
- **관련 링크**:
  - [npm 패키지](https://www.npmjs.com/package/ameva-mcp-hub)
  - [공식 문서](https://uno-km.vercel.app/lib/mcp/)
  - [GitHub 저장소](https://github.com/uno-km/ameva-mcp-hub)

---

### 1.3 AMEVA-Sentinel
개인 식별 정보(키 입력, 마우스 궤적)를 수집하지 않고, 브라우저 구조 신호만을 분석하여 0~100점 위험도를 연산하고 HMAC-SHA256 토큰을 발급하는 클라이언트 보안 SDK입니다.

- **카테고리**: 웹 보안 / 클라이언트 관측 SDK
- **기술 스택**: TypeScript, WebCrypto API, Browser Internals
- **배포 버전**: `v1.0.0`
- **주요 기능**:
  - 키로깅 없는 0-Data 브라우저 무결성 및 자동화(Webdriver, DevTools) 신호 탐지
  - 6대 가중치 기반 확정적 0~100 위험도 채점 규칙 엔진
  - WebCrypto HMAC-SHA256 서명 클라이언트 토큰(sv1) 생성 및 백엔드 검증 지원
- **설치 및 사용**:
  ```bash
  # npm 설치
  npm install ameva-sentinel

  # 브라우저 스크립트
  <script src="https://cdn.jsdelivr.net/npm/ameva-sentinel/dist/sentinel.min.js"></script>
  ```
- **관련 링크**:
  - [npm 패키지](https://www.npmjs.com/package/ameva-sentinel)
  - [공식 문서](https://uno-km.vercel.app/lib/sentinel/)
  - [GitHub 저장소](https://github.com/uno-km/ameva-sentinel)

---

### 1.4 Termux-BitNet
안드로이드 Termux 환경에서 1.58비트(3진수 {-1, 0, +1}) LLM을 ARM64 NEON SIMD 명령어로 가속하여 추론하는 경량 온디바이스 엔진입니다.

- **카테고리**: 모바일 온디바이스 LLM 추론
- **기술 스택**: C++17, ARM64 NEON Assembly, Python C-API, Node.js N-API
- **배포 버전**: `v1.0.0`
- **주요 기능**:
  - ARM64 NEON DotProd 명령어를 통한 3진수 가중치 인메모리 연산 가속
  - 스마트폰 환경에서 서브 15ms 토큰 생성 지연 달성
  - Python 및 Node.js 듀얼 바인딩 제공
- **설치 명령어**:
  ```bash
  pip install termux-bitnet
  # 또는
  npm install termux-bitnet
  ```
- **관련 링크**:
  - [PyPI 패키지](https://pypi.org/project/termux-bitnet/)
  - [npm 패키지](https://www.npmjs.com/package/termux-bitnet)
  - [공식 문서](https://uno-km.vercel.app/lib/bitnet/)
  - [GitHub 저장소](https://github.com/uno-km/termux-bitnet)

---

### 1.5 Termux-Playwright
안드로이드 Termux 환경에서 루팅 권한 없이 정품 Chromium 프로세스를 Chrome DevTools Protocol(CDP) 소켓으로 직접 제어하는 브라우저 자동화 런타임입니다.

- **카테고리**: 모바일 웹 자동화 / 크롤링
- **기술 스택**: Android Bionic libc, Chrome DevTools Protocol, Node.js, Python
- **배포 버전**: `v1.0.0`
- **주요 기능**:
  - X11/디스플레이 서버 없는 환경에서 CDP 웹소켓 기반 브라우저 제어
  - 비루팅 환경 헤드리스 페이지 스크린샷, DOM 조작, 네트워크 트래픽 캡처
  - 5W 내외 저전력 모바일 분산 웹 스크래핑 지원
- **설치 명령어**:
  ```bash
  pip install termux-playwright
  # 또는
  npm install termux-playwright
  ```
- **관련 링크**:
  - [PyPI 패키지](https://pypi.org/project/termux-playwright/)
  - [npm 패키지](https://www.npmjs.com/package/termux-playwright)
  - [공식 문서](https://uno-km.vercel.app/lib/playwright/)
  - [GitHub 저장소](https://github.com/uno-km/termux-playwright-demo)

---

### 1.6 Termux-Diffusion
안드로이드 단말기에서 외부 서버 없이 로컬 RAM 4GB 환경 내에서 C++ NEON 코어로 Stable Diffusion 이미지를 생성하는 온디바이스 프레임워크입니다.

- **카테고리**: 모바일 온디바이스 생성형 AI
- **기술 스택**: C++, ARM64 NEON, GGUF/Safetensors, Python
- **배포 버전**: `v1.0.0`
- **주요 기능**:
  - Android Bionic libc 네이티브 컴파일을 통한 C++ 추론 파이프라인
  - Stable Diffusion v1.5 / Turbo 512x512 해상도 로컬 렌더링
  - 메모리 매핑(mmap)을 활용한 VRAM/RAM 스왑 최적화
- **설치 명령어**:
  ```bash
  pip install termux-diffusion
  # 또는
  npm install termux-diffusion
  ```
- **관련 링크**:
  - [PyPI 패키지](https://pypi.org/project/termux-diffusion/)
  - [npm 패키지](https://www.npmjs.com/package/termux-diffusion)
  - [공식 문서](https://uno-km.vercel.app/lib/diffusion/)
  - [GitHub 저장소](https://github.com/uno-km/termux-diffusion)

---

### 1.7 Termux-STT
Whisper.cpp, Vosk, Sherpa-ONNX 음성인식 엔진을 단일 인터페이스로 통합하고, 순수 파이썬 기반 128차원 화자 분리를 지원하는 음성 처리 프레임워크입니다.

- **카테고리**: 모바일 온디바이스 음성인식 / 오디오 처리
- **기술 스택**: C++, Python, Whisper.cpp, Vosk, ONNX Runtime
- **배포 버전**: `v1.0.0`
- **주요 기능**:
  - 단일 인터페이스를 통한 다중 STT 백엔드 선택 구동
  - 순수 파이썬 128차원 코사인 유사도 클러스터링 화자 분리(Diarization)
  - 네트워크 통신 없는 100% 로컬 음성 전사
- **설치 명령어**:
  ```bash
  pip install termux-stt
  # 또는
  npm install termux-stt
  ```
- **관련 링크**:
  - [PyPI 패키지](https://pypi.org/project/termux-stt/)
  - [npm 패키지](https://www.npmjs.com/package/termux-stt)
  - [공식 문서](https://uno-km.vercel.app/lib/stt/)
  - [GitHub 저장소](https://github.com/uno-km/termux-stt)

---

### 1.8 Termux-Train
안드로이드 Bionic 환경에서 구동 가능한 C 언어 기반 경량 텐서 연산 및 SafeTensors 역전파 DAG 자동미분(Autograd) 학습 엔진입니다.

- **카테고리**: 온디바이스 딥러닝 학습 엔진
- **기술 스택**: C, SafeTensors, Python C-API
- **배포 버전**: `v1.0.0`
- **주요 기능**:
  - SafeTensors 제로카피 파일 직렬화 및 역전파 그래프 연산
  - 스마트폰 CPU 자원 기반 LoRA(Low-Rank Adaptation) 어댑터 파인튜닝
  - 메모리 버퍼 풀링을 통한 Out-Of-Memory(OOM) 방지
- **설치 명령어**:
  ```bash
  pip install termux-train
  ```
- **관련 링크**:
  - [PyPI 패키지](https://pypi.org/project/termux-train/)
  - [공식 문서](https://uno-km.vercel.app/lib/train/)
  - [GitHub 저장소](https://github.com/uno-km/termux-train)

---

### 1.9 AMEVA-Forge
브라우저 환경에서 PyTorch와 동일한 문법으로 텐서 연산 및 자동미분을 정의하고, WGSL WebGPU 셰이더로 실행하는 브라우저 네이티브 딥러닝 텐서 엔진입니다.

- **카테고리**: 브라우저 딥러닝 텐서 엔진
- **기술 스택**: WebGPU (WGSL), JavaScript/TypeScript, Python (Pyodide), WASM
- **배포 버전**: `v1.0.0`
- **주요 기능**:
  - PyTorch(`torch.Tensor`, `backward()`) 호환 API 지원
  - 자동미분 연산 그래프를 WebGPU WGSL 셰이더로 컴파일 및 GPU 실행
  - 서버 GPU 비용 없는 클라이언트 브라우저 인라인 학습 및 추론
- **설치 명령어**:
  ```bash
  pip install ameva
  ```
- **관련 링크**:
  - [PyPI 패키지](https://pypi.org/project/ameva/)
  - [공식 문서](https://uno-km.vercel.app/lib/forge/)
  - [GitHub 저장소](https://github.com/uno-km/AMEVA-Forge)

---

## 2. 공통 기술 스택 및 카테고리 요약

| 카테고리 | 프로젝트 | 핵심 기술 스택 | 공통 특징 |
| :--- | :--- | :--- | :--- |
| **브라우저 & WebGPU** | AMEVA Workstation, AMEVA-Forge, AMEVA-Sentinel | TypeScript, WebGPU (WGSL), WebAssembly, WebCrypto, OPFS | 서버 송수신 없이 브라우저 로컬 하드웨어 가속 및 데이터 격리 |
| **개발자 도구 & 인프라** | AMEVA-MCP-Hub | Node.js, TypeScript, WASI WebAssembly, Vector Math | 언어 중립적 인메모리 도구 실행 및 실시간 에이전트 연동 |
| **모바일 온디바이스 AI (Termux)** | Termux-BitNet, Termux-Diffusion, Termux-STT, Termux-Train | C/C++17, ARM64 NEON SIMD, Bionic libc, Python C-API | 안드로이드 비루팅 환경에서 네이티브 어셈블리/C 커널 직접 구동 |
| **모바일 시스템 자동화 (Termux)** | Termux-Playwright | Android Bionic, Node.js, Python, Chrome DevTools Protocol | 저전력 모바일 유저스페이스 기반 브라우저 프로세스 제어 |

---

## 3. 패키지 및 문서 링크 요약

| 프로젝트 | 패키지 레지스트리 (설치) | 공식 기술 문서 | 소스코드 저장소 |
| :--- | :--- | :--- | :--- |
| **AMEVA Workstation** | [Web Live App](https://ameva-workstation-web-core.vercel.app/) | - | [GitHub](https://github.com/uno-km/AMEVA-Workstation-Web) |
| **AMEVA-MCP-Hub** | [npm: ameva-mcp-hub](https://www.npmjs.com/package/ameva-mcp-hub) | [Documentation](https://uno-km.vercel.app/lib/mcp/) | [GitHub](https://github.com/uno-km/ameva-mcp-hub) |
| **AMEVA-Sentinel** | [npm: ameva-sentinel](https://www.npmjs.com/package/ameva-sentinel) | [Documentation](https://uno-km.vercel.app/lib/sentinel/) | [GitHub](https://github.com/uno-km/ameva-sentinel) |
| **Termux-BitNet** | [PyPI](https://pypi.org/project/termux-bitnet/) / [npm](https://www.npmjs.com/package/termux-bitnet) | [Documentation](https://uno-km.vercel.app/lib/bitnet/) | [GitHub](https://github.com/uno-km/termux-bitnet) |
| **Termux-Playwright** | [PyPI](https://pypi.org/project/termux-playwright/) / [npm](https://www.npmjs.com/package/termux-playwright) | [Documentation](https://uno-km.vercel.app/lib/playwright/) | [GitHub](https://github.com/uno-km/termux-playwright-demo) |
| **Termux-Diffusion** | [PyPI](https://pypi.org/project/termux-diffusion/) / [npm](https://www.npmjs.com/package/termux-diffusion) | [Documentation](https://uno-km.vercel.app/lib/diffusion/) | [GitHub](https://github.com/uno-km/termux-diffusion) |
| **Termux-STT** | [PyPI](https://pypi.org/project/termux-stt/) / [npm](https://www.npmjs.com/package/termux-stt) | [Documentation](https://uno-km.vercel.app/lib/stt/) | [GitHub](https://github.com/uno-km/termux-stt) |
| **Termux-Train** | [PyPI](https://pypi.org/project/termux-train/) | [Documentation](https://uno-km.vercel.app/lib/train/) | [GitHub](https://github.com/uno-km/termux-train) |
| **AMEVA-Forge** | [PyPI](https://pypi.org/project/ameva/) | [Documentation](https://uno-km.vercel.app/lib/forge/) | [GitHub](https://github.com/uno-km/AMEVA-Forge) |
