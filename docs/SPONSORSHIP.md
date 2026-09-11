# 💖 Sponsor @uno-km & AMEVA On-Device Open-Source Project

<p align="center">
  <img src="https://img.shields.io/badge/Grassroots-On--Device_AI-004499.svg?style=for-the-badge" alt="Grassroots">
  <img src="https://img.shields.io/badge/Zero--Cloud--Tax-Free_From_APIs-16a34a.svg?style=for-the-badge" alt="Zero Cloud Tax">
  <img src="https://img.shields.io/badge/Real--Device--Tested-S25_·_S21_·_A35_·_Cracked_S20_·_Mom's_S7-ea4aaa.svg?style=for-the-badge" alt="Real Devices">
  <img src="https://img.shields.io/badge/Open_Source-Apache--2.0-orange.svg?style=for-the-badge" alt="Apache-2.0">
</p>

> **"빅테크의 수억 원짜리 H100 클러스터가 없어도, 내 주머니 속 폰과 서랍 속 굴러다니는 구형 기기로 온디바이스 AI를 해낼 수 있다는 것을 증명하고 싶었습니다."**
>
> 거대 클라우드 벤더에 매달 비싼 API 토큰 비용을 바치지 않고, 우리가 이미 소유한 기기에서 100% 자립 구동하는 세상을 만들기 위해 밑바닥부터 직접 코드를 깎아온 1인 인디 개발자의 생존과 연구를 응원해 주세요.

---

## 🌟 공식 후원 채널 (Official Sponsorship Channels)

- **🐙 GitHub Sponsors (개발자 직접 후원)**:  
  👉 **[https://github.com/sponsors/uno-km](https://github.com/sponsors/uno-km)**  
  *(국내/해외 카드, 페이팔 원클릭 정기 및 일시 후원 지원)*
- **💖 Open Collective (재단 연구 기금)**:  
  👉 **[https://opencollective.com/ameva-fund](https://opencollective.com/ameva-fund)**  
  *(100% 투명한 사용 내역 영수증 실시간 공개)*
- **🏛️ 공식 웹 포털**:  
  👉 **[https://uno-km.vercel.app/foundation/sponsorship.html](https://uno-km.vercel.app/foundation/sponsorship.html)**

---

## 😭 솔직하게 고백합니다: 당신이 저를 후원해 주셔야 하는 이유

허세나 과장 없이, 현재 저의 처절하고 짠내 나는 개발 현실을 있는 그대로 털어놓습니다.

1. **내 주머니와 서랍 속 폰들의 눈물겨운 총출동 (웃픈 현실)**:
   - 현재 제가 가진 개발 장비는 주머니 속 **갤럭시 A35**, **갤럭시 S21**, 그리고 최신 칩셋(스냅드래곤 8 Elite)을 만져보고 싶어서 24개월 할부 대출로 피눈물 흘리며 겨우 장만한 **갤럭시 S25**가 전부입니다.
   - 친구가 *"야, 내 갤럭시 S20 액정 산산조각 났는데 그냥 버릴까?"* 하길래 제가 바짓가랑이를 붙잡고 *"버리지 마! 제발 나 줘! 거기서 Whisper 음성인식 돌릴 수 있어!"* 하고 뺏어와서 깨진 액정 틈으로 손가락 찔려가며 터치 테스트하고 있습니다.
   - 어느 날 어머니가 *"거실 서랍에 넣어둔 내 옛날 갤럭시 S7 어디 갔냐?"* 하고 찾으시길래 가슴이 철렁했습니다... 어머니 죄송합니다. 그 폰 지금 제 방 구석에서 24시간 내내 안드로이드 Bionic libc 구형 커널 호환성 테스트용으로 혹사당하고 있습니다.
2. **커피 한 잔, 밥 한 끼 아끼며 공항 와이파이로 버티는 나날**:
   - 하루 한 끼 라면으로 때우고, 편의점 1,500원짜리 커피 한 잔 사 마실 돈조차 아껴가며 오직 검은 터미널 창만 쳐다보고 있습니다.
   - 작업실 와이파이는 10분마다 뚝뚝 끊겨서, 1GB가 넘는 GGUF 모델이나 빌드 바이너리를 깃허브에 올릴 때면 노트북과 깨진 폰들을 주섬주섬 챙겨 들고 인천공항이나 24시간 카페 구석에 앉아 벌벌 떨며 공용 와이파이로 `git push origin main`을 때려 넣고 있습니다. 공항에 있는 사람들은 제가 해외여행 가는 줄 알겠지만, 저는 그냥 깃허브 패키지 배포하러 온 겁니다.

**하지만, 저는 징징대고 멈춰 서 있지 않았습니다.**

---

## 🔥 우리가 무엇을 뜯어고쳤고 해냈는가? (미친 엔지니어링의 성과)

빅테크는 "모바일 단말기에서 로컬 AI는 불가능하다", "서버 API를 써야만 한다"고 말했습니다.  
**우리는 그 불가능을 깨부수기 위해 안드로이드 Bionic libc와 C++20 ABI, ARM64 NEON 어셈블리, 그리고 모바일 GPU Vulkan 컴퓨트 셰이더를 밑바닥부터 싹 다 뜯어고쳤습니다.**

루팅(Rooting) 0%! 클라우드 서버 비용 0원! 100% 오프라인!  
지금 즉시 주머니 속 단말기에서 돌아가는 **14개의 전투 검증 플래그십 라이브러리**를 완성했습니다:

### ⚡ 5대 핵심 차세대 브레이크스루
1. **`Termux-BitNet` (1.58비트 LLM 온디바이스 엔진)**:
   - 마이크로소프트 1.58비트 3진 양자화(-1, 0, 1) 모델을 모바일 Bionic libc에 최초 이식.
   - 20분 넘게 걸리는 CMake 지옥을 끝내고 단 10초 만에 끝나는 NEON DotProd + Vulkan GPU 1줄 패키징.
2. **`Termux-TTS` (22.05kHz 온디바이스 고음질 음성 합성)**:
   - DRAM 고갈과 GPU 드라이버 크래시를 원천 차단한 4-Tier 복원형 런타임.
   - 가벼운 무의존성 DSP부터 스튜디오급 Vulkan GPU 신경망까지 단말기 상태에 맞춰 무중단 가동.
3. **`Termux-Vision` (무의존성 순수 알고리즘 + SmolVLM 온디바이스 비전)**:
   - 150MB가 넘는 무거운 OpenCV와 PyTorch 의존성을 완전히 박살 냈습니다.
   - 순수 Canny/Sobel 알고리즘 + SmolVLM Vulkan GPU 제로카피 파이프라인으로 스마트폰 카메라 실시간 시각 지능 완성.
4. **`Termux-AIChain` (순수 위상 정렬 DAG 모바일 멀티 에이전트)**:
   - 거대하고 무거운 클라우드 전용 LangChain 따위는 버렸습니다.
   - 외부 의존성 제로(Zero-Dep)로 단말기 안에서 파일 읽기, 도구 호출, 추론 체이닝을 50KB 초경량으로 자율 실행.
5. **`Termux-LlamaCpp` (20분 컴파일 고통을 끝낸 10초 원클릭 GGUF)**:
   - 폰이 불타도록 20분간 Clang/Ninja 컴파일하던 삽질은 이제 끝났습니다.
   - Bionic 최적화 사전 빌드 바이너리로 `pip/npm install` 즉시 10초 만에 로컬 대형 모델 가동.

### 🛡️ 든든하게 받쳐주는 9대 기반 라이브러리
- **`Termux-STT`**: 클라우드 음성 유출 제로, Whisper.cpp + Vosk + 128차원 순수 파이썬 화자 분리.
- **`Termux-Diffusion`**: 무거운 PRoot 리눅스 없이 스마트폰 내부에서 로컬 이미지 생성 및 갤러리 자동 저장.
- **`Termux-Train`**: SafeTensors 제로카피 및 순수 C++ 기반 스마트폰 온더플라이 LoRA 파인튜닝.
- **`Termux-Playwright`**: 비루팅 ARM64 안드로이드에서 Chromium CDP를 직접 제어하는 브라우저 자동화.
- **`AMEVA-Forge`**: 브라우저 네이티브 WebGPU Autograd 딥러닝 텐서 가속 엔진.
- **`AMEVA-Sentinel`**: 마우스/키로깅 없는 프라이버시 100% 봇 탐지 및 트래픽 거버넌스 SDK.
- **`AMEVA-Runtime` (Vulkan HAL)**: SoC 자동 감지 및 STT/Vision/LLM/Diffusion 단일 로더 체인.
- **`AMEVA-MCP-Hub`**: 호스트 컴파일러 없이 C++, Rust, Python 도구를 인메모리 실행하는 유니버설 AI 허브.
- **`Infra-Index`**: 글로벌 69개 클라우드 하드웨어 시세 및 칩셋 인텔리전스 인덱스.

---

## 💰 모래주머니 벗고 솔직하게 말씀드립니다: 후원금은 이렇게 쓰입니다!

지키지도 못할 거창한 재정 독립성 선언이나 기기 명판 각인 같은 허세는 부리지 않겠습니다.  
**여러분이 보내주신 소중한 후원금은 오직 연구와 생존, 그리고 실제 기기 확보에 정직하게 쓰입니다:**

1. **당근마켓 & 이베이에서 중고 테스트 폰 구출 (최우선)**:
   - 개발자 혼자 폰 서너 개로 돌리는 데는 한계가 있습니다.
   - 보내주신 돈으로 당근마켓과 번개장터에서 **중고 스냅드래곤, 엑시노스, 미디어텍 디멘시티, 구글 텐서 기기**를 한 대씩 구해와서, 모든 폰에서 크래시 없이 돌아가도록 실기기 호환성 테스트를 확대하겠습니다.
2. **개발자의 생명수 (커피값, 식비, 인터넷 요금)**:
   - 끼니 거르지 않고, 커피 한 잔 마시며 맑은 정신으로 밤샘 버그를 잡고 패키지를 배포할 수 있는 최소한의 생존 비용입니다.
   - 공항 와이파이를 전전하지 않고 안정적으로 개발할 수 있는 인터넷 회선 비용을 감당하겠습니다.
3. **24시간 실기기 테스트 환경 유지**:
   - 방 한구석 멀티탭에 주렁주렁 매달아 놓은 테스트 폰들이 타버리지 않고 24시간 연속 추론 테스트를 견딜 수 있도록 배터리 쿨러와 충전 허브를 유지하겠습니다.

---

## 🤝 현실적이고 솔직한 후원 등급 (Sponsorship Tiers)

작은 커피 한 잔부터 기업 파트너십까지, 보내주신 마음을 진심으로 소중히 여기며 보답하겠습니다.

| 티어 | 등급 명칭 | 금액 | 현실적인 보답과 혜택 |
|:---:|:---|:---:|:---|
| ☕ | **생명수 커피 한 잔 (Coffee Backer)** | **$5** / 월 | - 지친 새벽 개발자를 버티게 해주는 소중한 커피 한 잔입니다.<br/>- 공식 리포지토리 `SPONSORS.md` 명예의 전당 영구 등재.<br/>- 신규 릴리즈 소식 우선 전달. |
| 🍜 | **따뜻한 국밥 & 케이블 지원 (Meal Backer)** | **$25** / 월 | - 든든한 한 끼 식사와 테스트 단말기용 고속 C타입 케이블/충전기 지원.<br/>- 공식 재단 웹사이트 후원자 명단 등재.<br/>- 깃허브 이슈 및 질문 시 최우선 확인 및 답변. |
| 📱 | **중고 실기기 입양 파트너 (Device Hero)** | **$100** / 월 | - **중고나라/당근마켓에서 테스트용 안드로이드 공기계 1대를 직접 입양하는 효과!**<br/>- 14대 플래그십 리포지토리 README 상단에 스폰서 명기.<br/>- 해당 기기에서 테스트한 벤치마크 및 튜닝 로그 공유. |
| 🚀 | **코어 인프라 수호자 (Core Patron)** | **$500** / 월 | - 개발자가 굶지 않고 온전히 오픈소스 개발에 몰입할 수 있는 강력한 버팀목.<br/>- 공식 웹 포털 및 14대 라이브러리 상단에 기업/개인 로고 및 백링크 게시.<br/>- 단말기 최적화 C++ Bionic / Vulkan GPU 기술 자문 지원. |
| 👑 | **온디바이스 엔터프라이즈 파트너 (Enterprise)** | **$2,000+** / 월 | - 기업의 전용 단말기 및 칩셋에 맞춘 맞춤형 커널 최적화 우선 지원.<br/>- 포털 최상단 엔터프라이즈 파트너십 배너 및 릴리즈 노트 공식 파트너 명기.<br/>- 기술 로드맵 논의 및 심층 엔지니어링 미팅. |

---

## 💬 "소스코드 피드백과 쓴소리는 언제나 달게 받습니다"

우리는 스스로를 완벽하다고 포장하지 않습니다.  
우리는 맨땅에서 스마트폰의 성능을 쥐어짜내는 야생의 엔지니어들이며, 메인스트림의 값비싼 클라우드에 대항하는 **"거지스트림(Grassroots Stream)"**의 연대입니다.

코드에 부족한 점이 있다면 언제든 깃허브 이슈와 PR로 회초리를 들어주십시오.  
달게 받고, 고치고, 더 가볍고 빠른 코드로 증명해 보이겠습니다.

<p align="center">
  <b>"여러분의 커피 한 잔이 깨진 액정의 스마트폰을 슈퍼컴퓨터로 바꿉니다."</b><br/><br/>
  <a href="https://github.com/sponsors/uno-km">
    <img src="https://img.shields.io/badge/Sponsor_on_GitHub_Sponsors-EA4AAA?style=for-the-badge&logo=githubsponsors&logoColor=white" alt="Sponsor on GitHub Sponsors" />
  </a>
  &nbsp;&nbsp;
  <a href="https://opencollective.com/ameva-fund">
    <img src="https://img.shields.io/badge/Donate_on_Open_Collective-004499?style=for-the-badge&logo=opencollective&logoColor=white" alt="Donate on Open Collective" />
  </a>
</p>
