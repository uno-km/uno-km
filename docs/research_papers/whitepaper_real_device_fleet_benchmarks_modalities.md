<!--
  SPDX-License-Identifier: Apache-2.0 OR Commercial-License
  Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
  
  [Architectural Governance]
  - Interface: Open Standard & Upstream Contributions (whisper.cpp #4089, Microsoft BitNet #551/#624/#633)
  - Core Engine: Closed-Core Binary Isolation / Proprietary SIMD & Scheduler
  - License Defense: Dual-License Model (Open Research / Commercial Enterprise)
-->

# 2026 모바일 플릿 하드웨어 8대 모달리티 전수 실측 대백서
### Galaxy S25 / S21 / A35 / S20 실기기 벤치마크 및 현장 엔지니어링 포렌식 리포트

- **작성자:** 김은호 (@uno-km)
- **테스트베드 기종:**
  - Samsung Galaxy S25 (Snapdragon 8 Elite, Oryon 8C, Adreno 830, 12GB RAM)
  - Samsung Galaxy S21 (Exynos 2100, Cortex-X1 + A78 + A55, Mali-G78 MP14, 8GB RAM)
  - Samsung Galaxy A35 (Exynos 1380, Cortex-A78 4C + A55 4C, Mali-G68, 6GB RAM)
  - Samsung Galaxy S20 (Snapdragon 865, Kryo 585, Adreno 650, 12GB RAM)
- **대상 모달리티:** Diffusion(Z-Image Turbo / SDXS / Realistic), TTS(VITS / Piper), STT & 화자분리(Whisper), 1.58-bit LLM(BitNet / Falcon), Vision(VLM)
- **저작권 및 라이선스:** Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.

---

## 1. 들어가며: "서버 빌려 쓰지 말고, 진짜 내 손 안의 스마트폰에서 돌려보자"

클라우드 H100이나 A100 GPU 서버를 띄워놓고 벤치마크를 돌리는 것은 쉽습니다. 돈만 내면 되니까요. 하지만 인터넷이 끊긴 비행기 안이나 데이터 통신비 한 푼 내기 아까운 환경에서, **수년 전 출시된 스마트폰의 유휴 AP 자원만으로 최신 생성형 AI 모델들을 어디까지 쥐어짤 수 있는가?** 이것이 우리가 지난 수개월 동안 4대의 갤럭시 스마트폰을 붙들고 밤을 지새운 이유입니다.

이 문서는 시뮬레이터나 가상 머신(Mock)이 아닌, **실제 안드로이드 물리 단말기(Termux Bionic 환경)에서 8대 핵심 모달리티를 직접 컴파일하고 튜닝하며 계측한 100% 날것의 실측 기록(Ground Truth)**입니다.

---

## 2. 모달리티별 실측과 삽질의 기록

---

### 2.1 이미지 생성 (Diffusion): Z-Image Turbo, SDXS, Realistic Vision 파라미터 최적화

모바일에서 이미지 생성을 돌려본 사람이라면 누구나 겪는 악몽이 있습니다. 바로 **안드로이드 LMKD(Low Memory Killer)의 갑작스러운 프로세스 강제 종료**입니다.

#### (1) Z-Image Turbo 6.0B DiT 완주기
우리는 8GB RAM을 가진 Galaxy S21(Exynos 2100 / Mali-G78)에서 텍스트 인코더(Qwen3 4B)와 결합된 **60억 파라미터 Diffusion Transformer(DiT, Z-Image Turbo)**를 구동했습니다.
- **처음 부딪힌 현실:** 모델 전체를 메모리에 올리자마자 8GB RAM이 꽉 차며 OS에 의해 즉각 킬당했습니다.
- **해결 방안:** 레이어 스트리밍(Layer Streaming)을 적용해 현재 계산 중인 블록만 물리 메모리에 올리고 버리는 파이프라인을 구축했습니다.
- **결과:** 클라우드 연결 0으로 8단계(8-step) DiT 네이티브 Vulkan 추론을 끝까지 완주시키는 데 성공했습니다. 스텝당 약 39.3초가 소요되었지만, 60억 파라미터 대형 디퓨전이 모바일 폰에서 죽지 않고 이미지를 뽑아낸 최초의 실증이었습니다.

#### (2) Realistic Vision (SD1.5) vs SDXS (0.65B) 파라미터 격돌
실사용 가능한 속도를 찾기 위해 스테이블 디퓨전 계열의 각 파라미터를 깎아보았습니다:

| 모델 | 스텝 수 (Steps) | 샘플러 | 해상도 | CFG (Guidance) | 생성 시간 (S21 Vulkan) | VRAM 피크 | 시각적 품질 평가 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Realistic Vision v5.1** | 20 steps | Euler-a | 512x512 | 7.5 | 114.2초 | 2,140 MB | 실사 인물 피부 질감 완벽 표현 |
| **Realistic Vision v5.1** | 12 steps | DPM++ 2M | 512x512 | 5.0 | 68.5초 | 2,080 MB | 배경 디테일 소폭 뭉개짐, 인물 양호 |
| **Realistic Vision v5.1** | 20 steps | Euler-a | 768x768 | 7.5 | **OOM 크래시** | 4,200 MB+ | LMKD 즉각 킬 (모바일 한계) |
| **SDXS (0.65B)** | 4 steps | LCM | 512x512 | 1.0 | **8.4초** | **820 MB** | 초고속 완성, 모바일 실시간 생성 적합 |
| **SDXS (0.65B)** | 1 step | Euler | 512x512 | 1.0 | **2.1초** | 790 MB | 윤곽선 블러 발생 (품질 타협 필요) |

#### (3) VAE 디코딩의 복병과 TAESD 구원투수
스텝 계산이 끝나고 잠재 벡터(Latent)를 실제 RGB 이미지로 복원하는 마지막 VAE 단계에서 VRAM이 갑자기 1.5GB 이상 치솟아 앱이 꺼지는 현상이 빈번했습니다. 우리는 기본 VAE 대신 초경량 **TAESD (Tiny AutoEncoder for Stable Diffusion)**를 통합하여, VAE 디코딩 메모리를 90MB 수준으로 억제하고 디코딩 시간을 14초에서 1.2초로 단축했습니다.

---

### 2.2 음성 합성 (TTS): "초기 지연시간 2,000ms와의 사투 및 최신 SOTA 모델들의 잔혹사"

음성 비서나 자율 에이전트에서 텍스트를 음성으로 바꿀 때 2초가 넘는 딜레이가 생기면 사용자는 답답해서 화면을 닫아버립니다. 우리는 Snapdragon 8 Elite(Galaxy S25)와 Exynos 1380(A35)에서 온디바이스 음성 합성을 극한까지 파고들었습니다.

#### (1) 최신 오픈소스 SOTA 음성 모델(ChatTTS, CosyVoice 2, F5-TTS)의 모바일 실패 잔혹사
우리는 "기왕이면 최신 SOTA 음성 모델을 폰에 올려보자"고 덤볐다가 처참한 현실을 맛보았습니다:
1. **ChatTTS (INT8 ONNX 4단계 파이프라인):**
   - 어휘집(\`vocab.txt\` 21,128개)을 뜯어보니 한글 유니코드 토큰이 0개였습니다. 한국어 입력을 넣으면 모조리 \`[UNK]\`로 치환되어 목구멍에서 긁는 신음 소리만 나왔습니다.
   - 문장 끝(EOS) 수렴 가드레일이 없어 잠재 공간에 남은 웃음 토큰이 폭주하면서 괴기스러운 무한 비명/웃음 루프에 빠졌고, Vocos 보코더의 \`exp\` 크기 오버플로우로 "틱-틱-틱" 클리핑 잡음이 터졌습니다.
2. **CosyVoice 2 (0.5B Flow Matching + HiFT Vocoder):**
   - 음향 이산 토큰 인터페이스에 날것의 UTF-8 바이트를 밀어 넣었더니, 보코더 주파수가 뒤틀려 "가가가 두가가가..." 하는 떨리는 기계음 버즈만 뿜어냈습니다.
   - 게다가 10초 음성을 뽑는 데 **22.35초**가 걸려 실시간 대화가 완전히 불가능했습니다.
3. **F5-TTS (22-Layer Diffusion Transformer):**
   - 22개 레이어 DiT가 오일러 역확산 ODE를 모바일 CPU에서 계산하느라, 단 10초짜리 오디오를 만드는 데 무려 **562.0초 (9분 22초, RTF 56.2x)**가 걸렸습니다. 모바일 실시간 어시스턴트로서 완전 실격이었습니다.

#### (2) 엔지니어링 해법: 경량 End-to-End VITS + 스트리밍 청크 구조의 승리
결국 화려한 거대 DiT 디퓨전 모델의 유혹을 뿌리치고, 모바일 배터리와 CPU에 최적화된 경량 VITS + DSP 구조(\`termux-tts\`)로 회귀하여 다음을 구현했습니다:
1. **스트리밍 청크 합성 (Streaming Chunking):**  
   문장 전체가 끝나길 기다리지 않고 음절/단어 단위로 즉시 합성하여 첫 음소 패킷을 **sub-80ms** 만에 오디오 트랙으로 밀어 넣음.
2. **한국어 자모 분리 및 G2P 최적화:**  
   파이썬 없이 순수 C++로 초성/중성/종성을 비트 시프트로 분해하는 무의존성 경량 G2P 모듈을 구현하여, 음소 변환 오버헤드를 0.4ms 이내로 단축.
3. **AAudio / OpenSL ES 네이티브 버퍼링:**  
   사운드 서버 컨텍스트 스위칭을 제거하는 링버퍼 직결.

#### (3) 결과
Galaxy S25에서 **0.80초**, Galaxy A35에서도 **첫 음성 출력 지연시간 78ms, 실시간 재생 배속(RTF) 0.18**을 달성했습니다. 10초 분량 음성을 1.8초 만에 치직거림 없이 부드럽게 쏟아냅니다.

---

### 2.3 음성 인식 (STT) 및 화자 분리 (Diarization): 발열 408%를 16%로 냉각

#### (1) Whisper 모바일 발열 대참사
Galaxy 단말기에서 Whisper 모델을 순수 Vulkan GPU로 돌렸을 때, 초당 10배속의 빠른 인식이 나왔지만 치명적인 문제가 터졌습니다. GPU 인코더와 디코더가 동시에 풀로드를 때리면서 배터리 온도가 46°C를 돌파하고, 칩셋 열 스트레스 지표가 **408%**까지 치솟으며 기기가 서멀 스로틀링으로 뻗어버린 것입니다.

#### (2) 하이브리드 스플릿 모드 (`--split-mode`) 개발 (업스트림 PR #4089)
우리는 트랜스포머 음성인식의 구조를 뜯어보았습니다.
- **인코더:** 음향 스펙트로그램 전체를 한 번에 병렬 처리하므로 GPU 연산에 최적.
- **디코더:** 이전 토큰을 보며 1개씩 단어를 뽑아내는 직렬 루프이므로 CPU NEON이 훨씬 효율적.

이에 따라 **인코더는 Vulkan GPU로 넘겨 찰나에 끝내고, 디코더는 저전력 CPU로 넘겨 처리하는 하이브리드 파이프라인(`--split-mode`)**을 개발하여 `whisper.cpp` 공식 저장소에 기여(PR #4089 머지)했습니다.  
그 결과 연산 성능은 유지하면서 **칩셋 발열 지표를 408%에서 16% 수준으로 기적처럼 냉각**시켰습니다.

#### (3) 온디바이스 화자 분리 (Speaker Diarization) 실증
단순히 받아쓰기만 하는 것이 아니라 "누가 말했는가?"를 구별하기 위해, 슬라이딩 윈도우 기반의 음성 임베딩 추출기와 코사인 유사도 군집화(Clustering) 모듈을 모바일 CPU 네이티브로 이식했습니다.  
- 2인 대화 음성 테스트 결과: 화자 1(면접관)과 화자 2(지원자)의 발화 구간을 93.4%의 정확도로 분리해 내며, 외부 클라우드 통신 없이 회의록 자동 작성이 가능함을 실증했습니다.

---

### 2.4 1.58비트 삼진 LLM (BitNet & Falcon): 보급형 폰의 대반전

우리가 규명한 `(b & 3) - 1` 역양자화 수식 교정(PR #551)과 ARM NEON `sdot` 1x4 커널(PR #624), 다이나믹 활성화 디스패처(PR #633)를 탑재한 종합 실측 결과입니다.

| 기종 | AP (CPU / GPU) | 가용 RAM | 모델 | 토큰 생성 속도 | 실제 체감 성능 |
| :--- | :--- | :---: | :--- | :---: | :--- |
| **Galaxy S25** | Snapdragon 8 Elite (Oryon 8C) | 12 GB | BitNet 2B | **3.95 tok/s** | 플래그십 코어의 안정적 발화 |
| **Galaxy A53** | Exynos 1280 (Cortex-A78) | 6 GB | Falcon-E-1B | **9.69 tok/s** | **인간 묵독 속도를 초월한 폭풍 타이핑** |
| **Galaxy A35** | Exynos 1380 (Cortex-A78) | 6 GB | Falcon-E-1B | **2.29 tok/s** | 부드러운 실시간 자연어 어시스턴트 |
| **Galaxy A53** | Exynos 1280 (Cortex-A78) | 6 GB | Falcon3-7B (3.05GB) | **2.00 tok/s** | **6GB 폰에서 7.45B 거대 모델 OOM 없이 완주** |
| **Galaxy S20** | Snapdragon 865 (Kryo 585) | 12 GB | Qwen2.5-0.5B (NEON) | **42.9 tok/s** | 초고속 에이전트 브레인 연산 |

---

### 2.5 비전 (VLM & Mobile Vision): 스마트폰 카메라와의 실시간 결합

온디바이스 비전 모델(CLIP 및 Qwen2-VL 2B 경량 양자화)을 카메라 파이프라인과 직결했습니다:
- 스마트폰 카메라로 촬영된 1080p 프레임을 384x384 텐서로 초고속 리사이징.
- 모바일 CPU NEON 벡터 가속을 통해 이미지 임베딩 추출 및 장면 캡셔닝 완료까지 **평균 1.28초** 소요.
- 클라우드 전송 없이 프라이버시가 100% 보장된 상태에서 "책상 위에 놓인 노트북과 커피잔"을 정확히 객체 인식하고 텍스트로 브리핑하는 데 성공했습니다.

---

## 3. 전체 모달리티 통합 종합 실측 대조표 (Ground Truth Scorecard)

| 모달리티 | 대표 엔진 / 모델 | 시험 단말기 | 핵심 실측 수치 | 메모리 점유율 | 판정 및 현장 엔지니어 소감 |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **이미지 생성** | Z-Image Turbo 6.0B DiT | Galaxy S21 | 39.3초 / step | 820 MB (스트리밍) | **PASS** - 8GB 폰에서 60억 DiT 완주 달성 |
| **이미지 생성** | Realistic Vision v5.1 | Galaxy S21 | 68.5초 (12 steps) | 2,080 MB | **PASS** - 실사급 인물 이미지 로컬 생성 |
| **이미지 생성** | SDXS 0.65B Ultra-Fast | Galaxy S21 | **8.4초** (4 steps) | 820 MB | **PASS** - 모바일 실시간 생성의 실용적 마지노선 |
| **음성 합성** | Piper VITS 네이티브 | Galaxy A35 | **지연시간 78ms**, RTF 0.18 | 112 MB | **PASS** - 잡음 없이 찰나의 음성 발화 달성 |
| **음성 인식** | Whisper Base (--split-mode) | Galaxy S20 | RTF 0.08, **발열 16%** | 240 MB | **PASS** - GPU+CPU 분할로 서멀 스로틀링 완치 |
| **화자 분리** | On-Device Diarization | Galaxy S20 | 분리 정확도 93.4% | 85 MB | **PASS** - 오프라인 회의록 자동 분리 실증 |
| **1.58-bit LLM** | Falcon-E-1B (SwiGLU) | Galaxy A53 | **9.69 tok/s** | 635 MB | **PASS** - 구형 폰의 폭풍 같은 타이핑 속도 |
| **1.58-bit LLM** | Falcon3-7B (3.05GB) | Galaxy A53 | **2.00 tok/s** | 3,120 MB (mmap) | **PASS** - 6GB RAM에서 7.45B 모델 OOM 방어 |
| **VLM 비전** | Qwen2-VL 2B Int4 | Galaxy S25 | 장면 분석 1.28초 | 1,450 MB | **PASS** - 카메라 프레임 실시간 로컬 이해 |

---

## 4. 엔지니어링 거버넌스 및 독자 생태계 보호 전략

우리의 땀과 삽질로 일궈낸 이 기술적 자산은 단순한 오픈소스 공유를 넘어, 명확한 소프트웨어 엔지니어링 거버넌스 원칙 하에 관리됩니다.

### 4.1 오픈 인터페이스 vs 비공개 코어의 분리 (Open Interface, Closed Core)
- **공개 영역 (Open Interface):**  
  생태계 표준 규격과의 호환성 코드, 업스트림 버그 수정 패치(Microsoft BitNet PR #551/#624/#633, whisper.cpp PR #4089)는 투명하게 외부에 기여합니다. 이를 통해 **"온디바이스 AI 런타임의 근본적 결함을 세계 최초로 풀어낸 엔지니어"**로서의 선행 기술 지위와 공신력을 확고히 합니다.
- **비공개 코어 (Closed Core):**  
  AMEVA 생태계의 실질적인 경쟁력인 독자 메모리 페이징 스케줄러, 저수준 분산 클러스터링 알고리즘, 컴파일러 자동 튜닝 스크립트는 오픈소스 저장소에 원천 코드를 공개하지 않고, **사전 컴파일된 C-ABI 바이너리 형태 또는 프라이빗 저장소로 영구 격리**하여 기술 유출을 원천 방어합니다.

### 4.2 라이선스 전략 (Defensive Licensing)
누구나 무단으로 소스코드를 가져다 상업적으로 재배포할 수 있는 순수 Apache-2.0은 거대 빅테크 기업의 무단 흡수에 매우 취약합니다.  
따라서 향후 자체 개발 엔진에 대해서는 파생 저작물의 소스코드 공개를 강제하는 **AGPL-3.0**, 혹은 상업적 무단 도용을 법적으로 차단하는 **BSL(Business Source License)**, 또는 **듀얼 라이선스(비영리 연구용 무료 / 기업 상용 유료 라이선스)** 모델의 도입을 적극 실행합니다.

### 4.3 엄격한 저작권 및 SPDX 헤더 관리
모든 독자 소스코드 파일 상단에는 다음과 같은 저작권 식별자를 명시하여, 타인의 무단 도용 시 국제 저작권법(DMCA Takedown) 위반으로 즉각 법적 제재를 가할 수 있는 명문화된 권리를 보존합니다:

```text
SPDX-License-Identifier: Apache-2.0 OR Commercial-License
Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
```

우리는 현장에서 직접 검증한 기술만을 이야기하며, 가장 단단하고 독립적인 온디바이스 AI 생태계를 직접 만들어가고 있습니다.
