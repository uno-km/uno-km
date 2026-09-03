# 엔지니어링 포트폴리오

- **작성자**: 김은호 (Eunho Kim)
- **직무**: 시스템 소프트웨어 엔지니어 / 풀스택 엔지니어
- **이메일**: [uno.kim@kakao.com](mailto:uno.kim@kakao.com)
- **공식 웹사이트**: [https://uno-km.vercel.app/](https://uno-km.vercel.app/)
- **재단 포털**: [https://uno-km.vercel.app/foundation/](https://uno-km.vercel.app/foundation/)
- **GitHub**: [https://github.com/uno-km](https://github.com/uno-km)

---

## 1. 프로젝트 상세 명세

### 1.1 AMEVA Workstation (Web)
클라이언트 브라우저 환경에서 서버 통신 없이 사용자 PC의 WebGPU 자원만으로 거대 언어 모델(LLM) 추론 및 멀티미디어 작업을 수행하는 로컬 워크스테이션 웹 애플리케이션입니다.

- **카테고리**: 브라우저 온디바이스 애플리케이션
- **기술 스택**: TypeScript, WebGPU, Web Audio, WebCodecs, HTML5 Canvas, OPFS (Origin Private File System)
- **기존 문제**: 대용량 문서 분석이나 AI 편집을 하려면 유료 클라우드 서비스를 써야 하고, 기밀 문서나 개인 데이터가 외부 서버로 전송되어 유출 위험이 있음.
- **해결 방식**: 서버와의 데이터 송수신을 100% 차단하고, 브라우저의 WebGPU와 웹 워커를 활용해 AI 모델(Qwen2.5)과 미디어 엔진을 사용자 컴퓨터 내부에서 직접 구동함.
- **실제 사용자가 쓰는 핵심 기능**:
  1. **대용량 문서 3초 요약**: 수백 페이지의 PDF/DOCX 파일을 화면에 끌어다 놓으면 웹 워커가 병렬로 읽어 3초 안에 챕터별 핵심 내용을 요약.
  2. **무손실 인앱 미디어 편집**: 무거운 인코딩 없이 브라우저에서 바로 영상 구간을 자르고, 음성 파일에서 말이 없는 무음 구간을 자동으로 잘라내며, 1초 만에 인물 배경을 분리.
  3. **완전한 로컬 보안**: 모든 작업 데이터가 브라우저 로컬 저장소(OPFS)에만 저장되므로 인터넷이 끊겨도 정상 작동하며 사내 기밀 유출 위험이 전혀 없음.
- **관련 링크**:
  - [웹 애플리케이션 실행](https://ameva-workstation-web-core.vercel.app/)
  - [GitHub 저장소](https://github.com/uno-km/AMEVA-Workstation-Web)

---

### 1.2 Infra-Index Platform
글로벌 69개 클라우드 공급사의 실시간 GPU/CPU/스토리지 단가 집계, AI 반도체 시황 및 최신 연구 논문/뉴스 인텔리전스를 제공하는 클라우드 인프라 모니터링 플랫폼입니다.

- **카테고리**: 클라우드 인프라 시황 & AI 반도체 인텔리전스 웹 플랫폼
- **기술 스택**: Next.js, TypeScript, Python, FastAPI, Serverless Edge, Real-Time Ingestion
- **기존 문제**: AWS, GCP, Azure, Lambda Labs, RunPod 등 수십 개 벤더의 GPU/인프라 가격이 파편화되어 있어 최적 견적 산출과 가격 변동 추적이 극도로 어려움.
- **해결 방식**: 글로벌 69개 클라우드 공급사의 실시간 단가를 자동 수집·정규화하고 AI 반도체 시황 및 최신 연구 논문 인텔리전스를 실시간 시각화하여 제공.
- **실제 사용자가 쓰는 핵심 기능**:
  1. **69개 클라우드 실시간 시세 비교**: GPU(H100, A100, L40S 등), CPU, 스토리지 시간당 단가를 한눈에 비교하고 최저가 인프라 탐색.
  2. **AI 반도체 시황 인텔리전스**: 최신 엔비디아, AMD 및 커스텀 ASIC 수급 동향과 연구 논문 트렌드 분석 리포트 제공.
- **관련 링크**:
  - [웹 애플리케이션 실행](https://infraindex-platform-front.vercel.app/)
  - [공식 문서](https://uno-km.vercel.app/lib/infra-index/)
  - [GitHub 저장소](https://github.com/uno-km/infraindex-platform)

---

### 1.3 AMEVA-MCP-Hub
Claude Desktop, Cursor 등 AI 에이전트에 필요한 다양한 언어(C++, Rust, Java, Python 등)의 도구들을 PC에 컴파일러나 런타임 설치 없이 명령어 한 줄로 즉시 구동해 주는 통합 MCP 허브 & SDK입니다.

- **카테고리**: 개발자 도구 / AI 에이전트 인프라
- **기술 스택**: Node.js, TypeScript, WebAssembly (WASI), In-Memory Execution
- **배포 버전**: `v3.0.0`
- **기존 문제**: AI 에이전트에 새 도구를 붙이려면 언어마다 Python 가상환경, Rust 컴파일러, Java JDK 등을 PC에 일일이 깔아야 하고, 도구마다 백그라운드 프로세스가 떠서 메모리를 수백 MB씩 낭비함.
- **해결 방식**: 이미 컴파일된 WebAssembly(WASM) 바이너리를 단일 Node.js 프로세스 메모리에 직접 띄워, 개발 환경 오염 없이 <1ms 속도로 도구를 실행함.
- **실제 사용자가 쓰는 핵심 기능**:
  1. **설치 없는 1초 연동**: `npx ameva-mcp-hub` 실행 후 Claude/Cursor 설정 파일에 포트만 적어주면 호스트 PC 환경 오염 없이 수십 가지 도구를 즉시 사용.
  2. **자연어 도구 자동 매칭**: 사용자가 "이 파일 해시값 계산해줘" 또는 "데이터 암호화해줘"라고 질문하면, 질문 의도에 딱 맞는 도구를 목록에서 스스로 찾아내 실행.
  3. **GitHub 저장소 실시간 도구 추가**: 원하는 도구가 담긴 GitHub 주소만 설정에 적어두면, 서버 재부팅 없이 실시간으로 새 도구를 내려받아 즉시 활성화.
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

### 1.4 AMEVA-Sentinel
사용자의 키 입력이나 마우스 궤적 같은 민감한 개인정보를 일절 수집하지 않고, 브라우저 구조 신호만으로 봇과 정상 사용자를 식별하여 위험도 점수를 산출하는 클라이언트 보안 SDK입니다.

- **카테고리**: 웹 보안 / 클라이언트 관측 SDK
- **기술 스택**: TypeScript, WebCrypto API, Browser Internals
- **배포 버전**: `v1.0.0`
- **기존 문제**: 기존 봇 탐지 솔루션(캡차 등)은 사용자 키 입력이나 마우스 움직임을 서버로 전송해 개인정보 침해(GDPR 위반) 논란이 크고 사이트 속도를 저하시킴.
- **해결 방식**: 사용자 입력값 수집은 0%로 배제하고, 브라우저의 구조적 이상 신호(자동화 툴 흔적, 확장 프로그램 변조 등)만 클라이언트 내부에서 즉시 계산해 0~100점 위험도를 산출함.
- **실제 사용자가 쓰는 핵심 기능**:
  1. **스크립트 1줄로 봇 차단**: 웹사이트에 SDK를 넣으면 매크로, 크롤러, 무단 스크래퍼를 0.001초 만에 감지.
  2. **개인정보 침해 0%**: 키로깅이나 화면 추적이 전혀 없어 국내외 개인정보보호법(GDPR/개인정보보호법) 규제 리스크를 원천 해결.
  3. **위변조 불가 암호화 토큰**: WebCrypto 기반 HMAC-SHA256으로 서명된 토큰을 발급하여 백엔드 서버에서 0.1ms 안에 안전하게 유효성 검증.
- **설치 및 사용**:
  ```bash
  # npm 설치
  npm install ameva-sentinel

  # 또는 브라우저 스크립트 주입
  <script src="https://cdn.jsdelivr.net/npm/ameva-sentinel/dist/sentinel.min.js"></script>
  ```
- **관련 링크**:
  - [npm 패키지](https://www.npmjs.com/package/ameva-sentinel)
  - [공식 문서](https://uno-km.vercel.app/lib/sentinel/)
  - [GitHub 저장소](https://github.com/uno-km/ameva-sentinel)

---

### 1.5 Termux-AIChain
안드로이드 Termux 환경에서 LangChain 같은 무거운 외부 라이브러리 없이, 외부 의존성 0개(Zero-Dependency)로 LLM 체이닝과 자율 에이전트 워크플로우를 구성하는 초경량 에이전트 프레임워크입니다.

- **카테고리**: 모바일 온디바이스 에이전트 프레임워크
- **기술 스택**: Python 3, TypeScript, Zero-Dependency, DAG Pipeline
- **배포 버전**: `v1.1.0`
- **기존 문제**: LangChain, LlamaIndex 같은 대형 프레임워크는 수백 개의 무거운 외부 패키지를 요구하여 안드로이드 Termux에서 패키지 충돌이 나고 메모리 부족으로 다운됨.
- **해결 방식**: 외부 의존성 패키지 설치를 0개로 설계하여, 50KB 미만의 순수 코어만으로 순차 체인, 조건부 분기, 도구 호출(Tool Calling)을 완벽히 지원함.
- **실제 사용자가 쓰는 핵심 기능**:
  1. **스마트폰 단독 AI 에이전트 워크플로우**: Termux-BitNet 등 온디바이스 로컬 모델과 묶어 인터넷 없이 복잡한 다단계 질문-답변 및 분석 파이프라인 자동 실행.
  2. **의존성 충돌 0%**: 무거운 pip 패키지 설치 없이 `pip install termux-aichain` 단 1초 만에 설치 완료 및 100% 정상 작동.
- **설치 명령어**:
  ```bash
  pip install termux-aichain
  # 또는
  npm install termux-aichain
  ```
- **관련 링크**:
  - [PyPI 패키지](https://pypi.org/project/termux-aichain/)
  - [npm 패키지](https://www.npmjs.com/package/termux-aichain)
  - [공식 문서](https://uno-km.vercel.app/lib/aichain/)
  - [GitHub 저장소](https://github.com/uno-km/termux-aichain)

---

### 1.6 Termux-BitNet
안드로이드 스마트폰(Termux) 환경에서 1.58비트(3진수 {-1, 0, +1}) LLM을 스마트폰 전용 SIMD 명령어로 가속하여 빠르게 구동하는 경량 온디바이스 AI 엔진입니다.

- **카테고리**: 모바일 온디바이스 LLM 추론
- **기술 스택**: C++17, ARM64 NEON Assembly, Python C-API, Node.js N-API
- **배포 버전**: `v1.0.7`
- **기존 문제**: 스마트폰에서 AI 모델을 돌리려면 메모리(RAM)를 8~16GB씩 차지하고, 배터리가 빠르게 닳으며 단말기가 심하게 뜨거워지는 문제가 있음.
- **해결 방식**: 가중치를 -1, 0, +1 3가지 숫자로만 압축하는 1.58비트 기술과 스마트폰 CPU(ARM64 NEON) 전용 명령어를 결합하여 연산량을 획기적으로 낮춤.
- **실제 사용자가 쓰는 핵심 기능**:
  1. **스마트폰 단독 AI 챗봇**: 인터넷 연결이나 외부 서버 없이 스마트폰 안에서 초당 수십 토큰 속도로 부드럽게 답변을 생성.
  2. **초저메모리 구동**: 메모리 점유율을 기존 대비 70% 이상 줄여 4GB RAM을 가진 보급형 스마트폰에서도 무리 없이 온디바이스 AI 실행.
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

### 1.7 Termux-Playwright
안드로이드 Termux 환경에서 루팅(Rooting) 권한 없이 정품 크로미움(Chromium) 브라우저를 직접 제어하는 모바일 브라우저 자동화 런타임입니다.

- **카테고리**: 모바일 웹 자동화 / 크롤링
- **기술 스택**: Android Bionic libc, Chrome DevTools Protocol (CDP), Node.js, Python
- **배포 버전**: `v1.0.0`
- **기존 문제**: 안드로이드 모바일 환경에서는 디스플레이 화면(GUI)이 없고 시스템 권한 제약 때문에 공식 Playwright 패키지가 전혀 실행되지 않음.
- **해결 방식**: 스마트폰에 설치된 정품 Chromium 브라우저를 내부 통신 소켓(CDP)으로 직접 연결하여 화면 없이도 완벽하게 제어하도록 구현함.
- **실제 사용자가 쓰는 핵심 기능**:
  1. **스마트폰 비루팅 무인 자동화**: 스마트폰에서 루팅 없이 `pip install` 한 줄로 웹사이트 스크린샷 캡처, 자동 로그인, 폼 입력을 백그라운드에서 자동 실행.
  2. **5W 초저전력 데이터 수집**: 24시간 켜두는 스마트폰을 활용해 전기세 걱정 없이 24시간 무중단 웹 크롤링 및 모니터링 봇 구축.
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
  - [GitHub 저장소](https://github.com/uno-km/termux-playwright)

---

### 1.8 Termux-Diffusion
안드로이드 스마트폰(Termux) 환경에서 고가의 클라우드 GPU 없이 로컬 2~4GB 메모리 안에서 C++ GGML 텐서 엔진으로 Stable Diffusion AI 이미지를 생성하는 모바일 네이티브 온디바이스 생성 프레임워크입니다.

- **카테고리**: 모바일 온디바이스 생성형 AI / 텍스트-투-이미지
- **기술 스택**: C++17 GGML, Qualcomm Adreno & ARM Mali Vulkan 1.3, ARM64 NEON & DotProd SIMD, Bionic libc, Python C-API, Node.js N-API
- **배포 버전**: `v1.3.1`
- **기존 문제**: AI 이미지 생성을 위해선 고가의 유료 클라우드 GPU 서버를 대여해야 하거나, 모바일에서는 루팅 및 복잡한 proot-distro 컴파일 과정에서 메모리 고갈(OOM)로 앱이 강제 종료됨.
- **해결 방식**: Multi-SoC Vulkan & CPU Auto-Backend를 적용하여 Snapdragon 8 Elite / Adreno 830 및 Exynos 2100 / Mali-G78 등에서 네이티브 GPU 가속을 자동 활성화하고, VAE Tiling으로 메모리를 52% 이상 절감.
- **실제 사용자가 쓰는 핵심 기능**:
  1. **1-Click 오프라인 이미지 생성**: 텍스트 프롬프트를 입력하면 인터넷 없이 스마트폰 안에서 512x512 고해상도 AI 이미지를 직접 렌더링.
  2. **서버 비용 0원 & 완전 로컬 프라이버시**: 클라우드 API 호출 비용이 전혀 발생하지 않으며, 프롬프트와 이미지가 단말기 밖으로 유출되지 않음.
- **실기기 실측 벤치마크 (Samsung Galaxy S25 vs S21 vs A35)**:
  | 단말기 모델 | 프로세서 (SoC) / GPU | 연산 백엔드 | 렌더링 설정 및 모델 | 실측 렌더링 시간 | VRAM / RAM 점유율 |
  |---|---|---|---|---|---|
  | **Samsung Galaxy S25** | Snapdragon 8 Elite / Adreno 830 | **Native Vulkan GPU** | FAST (SDXS 256×256 1-Step) | **4.39초** | **651 MB VRAM** (0 MB RAM) |
  | **Samsung Galaxy S25** | Snapdragon 8 Elite / Adreno 830 | **Native Vulkan GPU** | BALANCED (SDXS 512×512 2-Step) | **16.24초** | **651 MB VRAM** + VAE Tiling |
  | **Samsung Galaxy S21** | Exynos 2100 / Mali-G78 MP14 | **Native Vulkan GPU** | SDXS 512×512 1-Step (Node 1055 Fix) | **19.82초** | **710 MB VRAM** |
  | **Samsung Galaxy A35** | Exynos 1380 / Mali-G68 MP5 | **Signed CPU Optimized** | SDXS 512×512 1-Step (DotProd) | **4.08초** | **1.18 GB RAM** (1.98x 가속) |
- **설치 명령어**:
  ```bash
  pip install termux-diffusion && termux-diffusion-install --backend auto
  # 또는
  npm install termux-diffusion && npx termux-diffusion install
  ```
- **관련 링크**:
  - [PyPI 패키지](https://pypi.org/project/termux-diffusion/)
  - [npm 패키지](https://www.npmjs.com/package/termux-diffusion)
  - [공식 문서](https://uno-km.vercel.app/lib/diffusion/)
  - [GitHub 저장소](https://github.com/uno-km/termux-diffusion)

---

### 1.9 Termux-STT
Whisper.cpp, Vosk 등 고성능 음성인식 엔진을 통합하고, 순수 파이썬으로 누가 말했는지(화자 분리)를 스마트폰 안에서 100% 로컬로 판별해 주는 음성 처리 프레임워크입니다.

- **카테고리**: 모바일 온디바이스 음성인식 / 오디오 처리
- **기술 스택**: C++, Python, Whisper.cpp, Vosk, ONNX Runtime
- **배포 버전**: `v1.0.0`
- **기존 문제**: 녹음 파일을 텍스트로 바꾸려면 유료 클라우드 API로 음성을 전송해야 해서 대화 내용 유출 위험과 API 비용이 발생함.
- **해결 방식**: 단말기 내부에서 음성인식 엔진을 직접 구동하고, 128차원 벡터 분석 알고리즘으로 목소리 특징을 계산해 말하는 사람을 로컬에서 구분함.
- **실제 사용자가 쓰는 핵심 기능**:
  1. **회의록 자동 작성 & 화자 구분**: 회의 녹음 파일을 넣으면 외부 통신 없이 텍스트로 풀어내고 [화자 1], [화자 2]로 발화자를 정확하게 분리.
  2. **보안 무결성**: 음성 파일이 스마트폰 밖으로 1바이트도 유출되지 않아 사내 기밀 회의나 보안 녹취에 안전하게 사용.
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

### 1.10 Termux-Train
안드로이드 스마트폰 CPU 자원만으로 인공신경망의 미분 계산과 LoRA 파인튜닝(경량 미세조정)을 수행할 수 있는 C 언어 기반 딥러닝 학습 엔진입니다.

- **카테고리**: 온디바이스 딥러닝 학습 엔진
- **기술 스택**: C, SafeTensors, Python C-API
- **배포 버전**: `v1.0.0`
- **기존 문제**: PyTorch 같은 대형 딥러닝 프레임워크는 모바일 환경에서 빌드가 불가능하고 역전파 학습 시 메모리 부족(OOM)으로 앱이 강제 종료됨.
- **해결 방식**: 불필요한 의존성을 걷어내고 순수 C 언어로 역전파 연산 그래프(DAG)를 가볍게 구현하여 메모리 누수를 원천 차단함.
- **실제 사용자가 쓰는 핵심 기능**:
  1. **스마트폰 단독 AI 모델 학습**: PC나 서버 없이 스마트폰 안에서 텍스트 데이터셋을 읽어 AI 모델을 내 말투나 특정 데이터에 맞게 직접 미세조정(LoRA).
  2. **무중단 안정성**: 메모리 풀링 기법을 적용하여 장시간 학습을 돌려도 메모리가 넘치지 않고 안정적으로 완료.
- **설치 명령어**:
  ```bash
  pip install termux-train
  ```
- **관련 링크**:
  - [PyPI 패키지](https://pypi.org/project/termux-train/)
  - [공식 문서](https://uno-km.vercel.app/lib/train/)
  - [GitHub 저장소](https://github.com/uno-km/termux-train)

---

### 1.11 AMEVA-Forge
사용자 브라우저에서 PyTorch와 똑같은 문법으로 딥러닝 코드를 작성하면, 서버 GPU 대신 사용자 브라우저의 GPU(WebGPU)를 활용해 딥러닝 연산을 가속하는 텐서 엔진입니다.

- **카테고리**: 브라우저 딥러닝 텐서 엔진
- **기술 스택**: WebGPU (WGSL), JavaScript/TypeScript, Python (Pyodide), WASM
- **배포 버전**: `v1.0.0`
- **기존 문제**: 웹 서비스에서 AI 기능을 제공하려면 고가의 파이썬 GPU 서버를 유지해야 해서 사용자가 늘어날수록 서버 비용이 기하급수적으로 폭증함.
- **해결 방식**: 파이썬 문법(`torch.Tensor`, `backward()`) 그대로 브라우저 WebGPU 셰이더로 변환하여 사용자 컴퓨터 GPU에서 연산을 처리함.
- **실제 사용자가 쓰는 핵심 기능**:
  1. **서버 비용 0원 AI 서비스**: 무거운 딥러닝 연산을 방문자의 브라우저 GPU로 넘겨(오프로딩), 동시 접속자가 수만 명이 되어도 서버 비용이 늘어나지 않음.
  2. **PyTorch 친화성**: 기존 PyTorch 코드 스타일을 그대로 사용할 수 있어 러닝 커브 없이 웹 브라우저 AI 개발 가능.
- **설치 명령어**:
  ```bash
  pip install ameva
  ```
- **관련 링크**:
  - [PyPI 패키지](https://pypi.org/project/ameva/)
  - [공식 문서](https://uno-km.vercel.app/lib/forge/)
  - [GitHub 저장소](https://github.com/uno-km/AMEVA-Forge)

---

### 1.12 Termux-LlamaCpp
안드로이드 Termux ARM64 전용으로 사전 빌드된 제로 컴파일 GGUF LLM 런타임, 모델 매니저 및 OpenAI 규격 호환 REST/SSE 서버 프레임워크입니다.

- **카테고리**: 모바일 온디바이스 GGUF LLM 런타임 & OpenAI 서버
- **기술 스택**: C++17, ARM64 NEON & DotProd SIMD, GGUF Runtime, POSIX Sockets, Python / Node.js
- **배포 버전**: `v1.1.0`
- **기존 문제**: 안드로이드 Termux에서 llama.cpp를 직접 컴파일하려면 장시간 빌드 오류, OpenMP 락, 의존성 충돌이 빈번하게 발생함.
- **해결 방식**: Bionic 네이티브 사전 빌드 바이너리와 경량 REST/SSE 서버를 번들링하여 단 1줄 명령으로 OpenAI 호환 엔드포인트를 즉시 구동.
- **실제 사용자가 쓰는 핵심 기능**:
  1. **제로 컴파일 1-Touch 실행**: 컴파일 없이 `pip install termux-llamacpp` 후 즉시 로컬 GGUF 모델 로드 및 추론.
  2. **OpenAI 호환 REST/SSE 스트리밍 서버**: 모바일 로컬 `localhost:8080/v1/chat/completions` 엔드포인트를 열어 타 앱 및 프론트엔드와 완벽 연동.
- **설치 명령어**:
  ```bash
  pip install termux-llamacpp
  # 또는
  npm install termux-llamacpp
  ```
- **관련 링크**:
  - [PyPI 패키지](https://pypi.org/project/termux-llamacpp/)
  - [npm 패키지](https://www.npmjs.com/package/termux-llamacpp)
  - [공식 문서](https://uno-km.vercel.app/lib/llamacpp/)
  - [GitHub 저장소](https://github.com/uno-km/termux-llamacpp)

---

### 1.13 Termux-Vision
외부 무거운 의존성(OpenCV, TorchVision 등) 없이 순수 ARM64 NEON 비전 커널과 Vulkan GPU 가속을 통해 온디바이스 컴퓨터 비전 및 VLM 멀티모달 추론을 수행하는 초경량 엔진입니다.

- **카테고리**: 모바일 온디바이스 컴퓨터 비전 & VLM 멀티모달 추론 엔진
- **기술 스택**: Python 3, JavaScript/TypeScript, ARM64 NEON SIMD, Vulkan 1.3 GPU Engine, Zero-Dependency
- **배포 버전**: `v1.0.0`
- **기존 문제**: OpenCV 등 기존 비전 라이브러리는 수백 MB의 바이너리 크기와 Bionic libc 호환 문제, 빌드 실패율로 인해 모바일 Termux에서 활용이 제한적임.
- **해결 방식**: 순수 Python/JS 및 NEON 벡터화 커널로 5단계 Canny 엣지, Haar Cascade 얼굴 검출을 구현하고, SmolVLM/Qwen2-VL 모델을 Vulkan GPU로 150MB 메모리 안에서 가속.
- **실제 사용자가 쓰는 핵심 기능**:
  1. **제로 디펜던시 클래식 비전**: OpenCV 설치 없이 엣지 검출, 가우시안 블러, 적분 영상, 얼굴 인식을 즉시 실행.
  2. **온디바이스 VLM 멀티모달 질의응답**: 스마트폰에서 직접 이미지를 입력받아 VQA(시각 질의응답) 및 캡셔닝 수행.
  3. **termux-train 연동**: 추출된 비전 특징 맵을 `termux-train` 자동미분 텐서로 전달하여 온디바이스 LoRA 파인튜닝 지원.
- **설치 명령어**:
  ```bash
  pip install termux-vision
  # 또는
  npm install termux-vision
  ```
- **관련 링크**:
  - [PyPI 패키지](https://pypi.org/project/termux-vision/)
  - [npm 패키지](https://www.npmjs.com/package/termux-vision)
  - [공식 문서](https://uno-km.vercel.app/lib/vision/)
  - [GitHub 저장소](https://github.com/uno-km/termux-vision)

---

### 1.14 AMEVA-Vulkan-Runtime
안드로이드 Termux 환경에서 이기종 모바일 GPU(Qualcomm Adreno, ARM Mali, Samsung Xclipse)를 대상으로 STT, Vision, LLM, Diffusion 전 모달리티 AI를 가속하는 통합 C++20 하드웨어 가속 런타임 및 SDK입니다.

- **카테고리**: 모바일 통합 하드웨어 가속 런타임 & HAL SDK
- **기술 스택**: C++20, SPIR-V, Vulkan 1.3 HAL, Python CFFI, Node.js N-API, Zero-Hardcoding
- **배포 버전**: `v1.0.0`
- **기존 문제**: 모바일 GPU 드라이버 결함(Mali OOB, Adreno Subgroup 버그), Bionic-Mesa 로더 충돌(SIGABRT), 패키지별 50~90MB 중복 바이너리 비대화가 발생함.
- **해결 방식**: 단일 시스템 ICD 체인 고정, 12단계 검증(V0~V11) 프로버, Mali 128-byte 정렬 패치 및 Adreno 셰이더 버그 회피 코어를 단일 58MB 공유 라이브러리로 통합.
- **실제 사용자가 쓰는 핵심 기능**:
  1. **전 모달리티 단일 가속 HAL**: Whisper STT, LLaVA 비전, LLaMA/BitNet LLM, Stable Diffusion을 동일한 Vulkan 코어에서 고속 가속.
  2. **12단계 정밀 자체 진단 (V0~V11)**: `dlopen`부터 최종 텐서 연산까지 기기 결함을 사전 격리하고 무손실 CPU NEON 자동 복구.
  3. **79.3% 바이너리 절감**: 개별 패키지 중복 바이너리를 단일 공통 런타임으로 일원화.
- **설치 명령어**:
  ```bash
  pip install ameva-vulkan-runtime
  # 또는
  npm install ameva-vulkan-runtime
  ```
- **관련 링크**:
  - [PyPI 패키지](https://pypi.org/project/ameva-vulkan-runtime/)
  - [npm 패키지](https://www.npmjs.com/package/ameva-vulkan-runtime)
  - [공식 문서](https://uno-km.vercel.app/lib/vulkan/)
  - [GitHub 저장소](https://github.com/uno-km/ameva-vulkan-runtime)

---

### 1.15 Termux-TTS
안드로이드 스마트폰 온디바이스에서 클라우드 API 없이 고품질 한국어/영어 음성을 저지연으로 합성하는 온디바이스 음성 합성(TTS) 네이티브 런타임 및 라이브러리입니다.

- **카테고리**: 모바일 온디바이스 음성 합성 SDK
- **기술 스택**: C++17, Piper / VITS 온디바이스 엔진, ARM64 NEON, Python C-API, Node.js N-API
- **배포 버전**: `v1.0.0`
- **기존 문제**: 클라우드 TTS API 호출 시 네트워크 지연 및 비용이 발생하며, 오프라인 환경에서 음성 안내 및 대화형 에이전트 구동이 불가능함.
- **해결 방식**: 30MB 미만의 경량 음향 모델과 온디바이스 NEON SIMD 최적화를 적용하여 스마트폰 CPU만으로 실시간 음성 합성 제공.
- **실제 사용자가 쓰는 핵심 기능**:
  1. **초저지연 실시간 합성**: 안드로이드 Termux 로컬에서 RTF < 0.3의 고속 오프라인 음성 합성.
  2. **Python 및 Node.js 듀얼 인터페이스**: 단 3줄의 코드로 텍스트를 WAV/PCM 음성으로 즉시 변환.
- **설치 명령어**:
  ```bash
  pip install termux-tts
  # 또는
  npm install termux-tts
  ```
- **관련 링크**:
  - [PyPI 패키지](https://pypi.org/project/termux-tts/)
  - [npm 패키지](https://www.npmjs.com/package/termux-tts)
  - [공식 문서](https://uno-km.vercel.app/lib/tts/)
  - [GitHub 저장소](https://github.com/uno-km/termux-tts)

---

## 2. 공통 기술 스택 및 카테고리 요약

| 카테고리 | 프로젝트 | 핵심 기술 스택 | 공통 특징 |
| :--- | :--- | :--- | :--- |
| **브라우저 & WebGPU** | AMEVA Workstation, AMEVA-Forge, AMEVA-Sentinel | TypeScript, WebGPU (WGSL), WebAssembly, WebCrypto, OPFS | 서버 전송 없이 브라우저 로컬 하드웨어 가속 및 데이터 완벽 격리 |
| **클라우드 인텔리전스 & 도구** | Infra-Index Platform, AMEVA-MCP-Hub, Termux-AIChain | Next.js, Python FastAPI, Node.js, WASI WebAssembly | 실시간 시세 집계, 의존성 없는 인메모리 도구 실행 및 경량 에이전트 파이프라인 |
| **모바일 온디바이스 AI (Termux)** | Termux-BitNet, Termux-Diffusion, Termux-STT, Termux-TTS, Termux-Train, Termux-LlamaCpp, Termux-Vision, AMEVA-Vulkan-Runtime | C/C++20, ARM64 NEON & DotProd SIMD, Vulkan 1.3 HAL, Bionic libc, Python C-API | 안드로이드 비루팅 환경에서 네이티브 C/C++ 커널로 저전력·저메모리 온디바이스 구동 |
| **모바일 시스템 자동화 (Termux)** | Termux-Playwright | Android Bionic, Node.js, Python, Chrome DevTools Protocol | 5W 초저전력 모바일 단말기 기반 무인 브라우저 자동화 및 데이터 수집 |

---

## 3. 패키지 및 문서 링크 요약

| 프로젝트 | 패키지 레지스트리 (설치) | 공식 기술 문서 | 소스코드 저장소 |
| :--- | :--- | :--- | :--- |
| **AMEVA Workstation** | [Web Live App](https://ameva-workstation-web-core.vercel.app/) | - | [GitHub](https://github.com/uno-km/AMEVA-Workstation-Web) |
| **Infra-Index Platform** | [Web Live App](https://infraindex-platform-front.vercel.app/) | [Documentation](https://uno-km.vercel.app/lib/infra-index/) | [GitHub](https://github.com/uno-km/infraindex-platform) |
| **AMEVA-MCP-Hub** | [npm: ameva-mcp-hub](https://www.npmjs.com/package/ameva-mcp-hub) | [Documentation](https://uno-km.vercel.app/lib/mcp/) | [GitHub](https://github.com/uno-km/ameva-mcp-hub) |
| **AMEVA-Sentinel** | [npm: ameva-sentinel](https://www.npmjs.com/package/ameva-sentinel) | [Documentation](https://uno-km.vercel.app/lib/sentinel/) | [GitHub](https://github.com/uno-km/ameva-sentinel) |
| **AMEVA-Forge** | [PyPI: ameva](https://pypi.org/project/ameva/) | [Documentation](https://uno-km.vercel.app/lib/forge/) | [GitHub](https://github.com/uno-km/AMEVA-Forge) |
| **AMEVA-Vulkan-Runtime** | [PyPI](https://pypi.org/project/ameva-vulkan-runtime/) / [npm](https://www.npmjs.com/package/ameva-vulkan-runtime) | [Documentation](https://uno-km.vercel.app/lib/vulkan/) | [GitHub](https://github.com/uno-km/ameva-vulkan-runtime) |
| **Termux-AIChain** | [PyPI](https://pypi.org/project/termux-aichain/) / [npm](https://www.npmjs.com/package/termux-aichain) | [Documentation](https://uno-km.vercel.app/lib/aichain/) | [GitHub](https://github.com/uno-km/termux-aichain) |
| **Termux-BitNet** | [PyPI](https://pypi.org/project/termux-bitnet/) / [npm](https://www.npmjs.com/package/termux-bitnet) | [Documentation](https://uno-km.vercel.app/lib/bitnet/) | [GitHub](https://github.com/uno-km/termux-bitnet) |
| **Termux-Playwright** | [PyPI](https://pypi.org/project/termux-playwright/) / [npm](https://www.npmjs.com/package/termux-playwright) | [Documentation](https://uno-km.vercel.app/lib/playwright/) | [GitHub](https://github.com/uno-km/termux-playwright) |
| **Termux-Diffusion** | [PyPI](https://pypi.org/project/termux-diffusion/) / [npm](https://www.npmjs.com/package/termux-diffusion) | [Documentation](https://uno-km.vercel.app/lib/diffusion/) | [GitHub](https://github.com/uno-km/termux-diffusion) |
| **Termux-STT** | [PyPI](https://pypi.org/project/termux-stt/) / [npm](https://www.npmjs.com/package/termux-stt) | [Documentation](https://uno-km.vercel.app/lib/stt/) | [GitHub](https://github.com/uno-km/termux-stt) |
| **Termux-TTS** | [PyPI](https://pypi.org/project/termux-tts/) / [npm](https://www.npmjs.com/package/termux-tts) | [Documentation](https://uno-km.vercel.app/lib/tts/) | [GitHub](https://github.com/uno-km/termux-tts) |
| **Termux-Train** | [PyPI](https://pypi.org/project/termux-train/) | [Documentation](https://uno-km.vercel.app/lib/train/) | [GitHub](https://github.com/uno-km/termux-train) |
| **Termux-LlamaCpp** | [PyPI](https://pypi.org/project/termux-llamacpp/) / [npm](https://www.npmjs.com/package/termux-llamacpp) | [Documentation](https://uno-km.vercel.app/lib/llamacpp/) | [GitHub](https://github.com/uno-km/termux-llamacpp) |
| **Termux-Vision** | [PyPI](https://pypi.org/project/termux-vision/) / [npm](https://www.npmjs.com/package/termux-vision) | [Documentation](https://uno-km.vercel.app/lib/vision/) | [GitHub](https://github.com/uno-km/termux-vision) |
