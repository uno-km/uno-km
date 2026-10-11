<!--
  SPDX-License-Identifier: Apache-2.0 OR Commercial-License
  Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
  
  [Architectural Governance]
  - Interface: Open Standard & Upstream Contributions (Microsoft BitNet PR #551, #624, #633)
  - Core Engine: Closed-Core Binary Isolation / Proprietary SIMD & Scheduler
  - License Defense: Dual-License Model (Open Research / Commercial Enterprise)
-->

# ARM64 온디바이스 1.58비트 LLM의 삼진 수치 붕괴(Word Salad) 결함 원인 규명 및 다이나믹 활성화 함수 엔진 구현 실증
### Root Cause Analysis of Ternary Numerical Collapse (Word Salad) in ARM64 On-Device 1.58-bit LLMs and Dynamic Activation Dispatcher Implementation

> **정정 공지 (2026-10-11)**
> 1. 원문 "PR #551, #624, #633 (공식 머지 완료)"와 각 PR의 "(공식 머지)" → 세 PR 모두 2026-10-11 현재 **OPEN(미병합)**입니다.
> 2. 원문 "공식 머지시킴으로써, 온디바이스 1.58비트 LLM의 수치 붕괴를 세계 최초로 해결한 엔지니어라는 선행 기술적 지위를 공고히 했습니다" → 사실이 아닌 "공식 머지"와 검증할 수 없는 "세계 최초" 표현을 삭제했습니다.

- **작성자:** 김은호 (@uno-km)
- **대상 기종:** Samsung Galaxy S25 (Snapdragon 8 Elite), Galaxy A53 (Exynos 1280), Galaxy A35 (Exynos 1380), Galaxy S20 (Snapdragon 865)
- **개발 환경:** Android Termux Native C++20 / Bionic libc / Clang 19
- **관련 업스트림 PR:** Microsoft `BitNet` 공식 레포지토리 PR #551, #624, #633 (2026-10-11 현재 모두 미병합)
- **저작권 및 라이선스:** Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.

---

## 1. 문제의 발단: "속도는 초당 5토큰인데, 왜 나오는 글자가 전부 외계어인가?"

처음 갤럭시 스마트폰(Snapdragon 8 Elite 및 Exynos 1380)에 1.58비트 LLM인 Microsoft BitNet b1.58 2B 모델을 올렸을 때, 터미널은 아무런 에러 없이 평온하게 돌아갔습니다. 세그멘테이션 폴트(SIGSEGV)도 없었고 프로세스 종료 코드도 깨끗한 `0`이었습니다. 초당 5.21토큰이라는 제법 그럴싸한 속도까지 찍혔습니다.

그런데 실제 출력된 텍스트 화면을 보는 순간 턱이 빠지는 줄 알았습니다.

```text
=========================================================
  termux-bitnet CLI (v1.4.6)
  Model:  bitnet-2b-ggml-model-i2_s.gguf (1.13 GB)
  Prompt: Where is Korea?
=========================================================
[Response]: ? 3. I, K, M1.
If the same with an answer for my answer to be a real meaning of the whole 
in this that would have some and you need more than one who are they will 
or not so it is as i do we see me at he's there a phe yam
---------------------------------------------------------
  Inference Speed: 5.21 tokens/sec | Duration: 16421.6 ms
---------------------------------------------------------
```

영문법이고 맥락이고 완전히 박살 난 **전형적인 워드 샐러드(Word Salad)**였습니다. 숫자는 돌고 있는데 알맹이는 시궁창이었던 겁니다.

"1.58비트 양자화가 너무 심해서 원래 모델 지능이 바보가 된 것인가?"라는 의심부터 들었습니다. 하지만 허깅페이스에서 파이썬 FP16 원본 코드로 돌리면 `"Korea is located in East Asia..."`라며 멀쩡하게 대답하는 모델이었습니다. 즉 모델 자체의 문제가 아니라, **우리가 C++로 포팅한 모바일 네이티브 런타임 어딘가에서 수치가 완전히 썩어 들어가고 있다는 명백한 증거**였습니다.

---

## 2. 삽질과 디버깅의 기록: 무엇이 범인이었나?

처음부터 수식 버그를 의심한 것은 아니었습니다. 수많은 헛발질과 검증을 거쳤습니다.

### 가설 1: 토크나이저 BPE 변환 오류인가? (기각)
가장 흔한 원인은 토크나이저입니다. GPT-2나 Llama 계열 토크나이저는 공백(`Ġ`)이나 줄바꿈(`Ċ`)을 바이트 레벨로 복잡하게 인코딩합니다. 혹시 C++ 토크나이저가 단어를 쪼개는 과정에서 인덱스가 한 칸씩 밀린 게 아닌가 의심했습니다.  
- **검증:** `Where is Korea?` 프롬프트를 넣었을 때 생성되는 정수 토큰 ID 시퀀스를 파일로 덤프해서 파이썬 `transformers` 라이브러리의 출력과 1:1로 대조했습니다.
- **결과:** 토큰 ID가 단 1비트의 오차도 없이 완벽하게 일치했습니다. 토크나이저는 결백했습니다.

### 가설 2: RoPE(회전 위치 임베딩) 삼각함수 오차인가? (기각)
모바일 CPU에서 `sin`/`cos` 연산을 돌릴 때 고속 근사 함수(`fast_cos`)를 쓰다가 각도가 틀어져 어텐션 스코어가 붕괴하는 경우가 종종 있습니다.  
- **검증:** 각 레이어별 쿼리($Q$)와 키($K$)의 회전 전후 벡터의 직교성 및 유클리드 노름을 로깅했습니다.
- **결과:** 회전 각도 계산도 수학적으로 정상이었습니다.

### 가설 3: 레이어가 올라갈수록 활성화 노름(Norm)이 미쳐 날뛴다 (채택)
결국 30개 트랜스포머 레이어마다 출력 벡터의 크기(L2-Norm)를 한 줄씩 콘솔에 찍어보기 시작했습니다.

- Layer 0: `norm = 12.4` (정상 범위)
- Layer 5: `norm = 84.2`
- Layer 15: `norm = 2,410.8`
- Layer 29: `norm = 4,189,200.0` (수치 폭주!)

앞단에서는 멀쩡하던 숫자가 레이어를 거듭할수록 눈덩이처럼 불어나더니, 마지막 레이어에 도달하면 소프트맥스 로짓이 특정 무의미한 토큰 몇 개로 강제 수렴해 버리는 현상이었습니다. **행렬 곱셈(GEMM) 루프 내부에서 양의 오차가 지속적으로 누적되고 있었습니다.**

---

## 3. 원인 분석: 비트 마스킹 한 줄이 초래한 대재앙

GGUF 파일 포맷 규격서와 Microsoft의 공식 변환 스크립트(`convert-hf-to-gguf-bitnet.py`), 그리고 우리 C++ 커널 소스코드([`src/ggml_bitnet_mad.cpp`](file:///c:/Users/GAME/Desktop/uno-km/dev/termux/termux-bitnet/src/ggml_bitnet_mad.cpp))를 켜두고 비트 단위로 대조했습니다. 그리고 마침내 기가 막힌 범인을 찾아냈습니다.

### 3.1 기존 커널의 치명적인 공식 오역
기존 커널에 작성되어 있던 2비트 컨테이너(`GGML_TYPE_I2_S`) 언패킹 수식은 이랬습니다:

```cpp
// 기존 레거시 코드의 치명적 오류
int8_t weight = (b & 1) - (b >> 1);
```

이 수식으로 2비트 패턴을 복원해 보면:
- `0b00` (0) $\implies (0) - (0) = \mathbf{0}$
- `0b01` (1) $\implies (1) - (0) = \mathbf{+1}$
- `0b10` (2) $\implies (0) - (1) = \mathbf{-1}$

얼핏 보면 0, +1, -1이 다 나오니 맞아 보입니다. **하지만 Microsoft BitNet의 공식 저장 명세는 완전히 딴판이었습니다.**

### 3.2 Microsoft 공식 저장 명세
Microsoft는 가중치를 음수 없이 2비트 부호 없는 정수로 깔끔하게 패킹하기 위해 **$+1$ 바이어스**를 걸어 저장합니다:
$$w_{\text{stored}} = w_{\text{ternary}} + 1$$

따라서 읽을 때는 단순히 1을 빼주기만 하면 됩니다:
$$w_{\text{ternary}} = w_{\text{stored}} - 1 = (b \& 3) - 1$$

이 공식 수식에 따른 복원 결과는 다음과 같습니다:
- `0b00` (0) $\implies 0 - 1 = \mathbf{-1}$
- `0b01` (1) $\implies 1 - 1 = \mathbf{0}$
- `0b10` (2) $\implies 2 - 1 = \mathbf{+1}$

### 3.3 통계적으로 드러난 참사
실제 2B 모델의 가중치 바이너리를 파싱하여 비트 패턴 분포를 조사해 보았습니다:

| 비트 패턴 | 실제 의미 | 텐서 내 비율 | 기존 잘못된 커널의 해석 | 결과 |
| :---: | :---: | :---: | :---: | :--- |
| `0b00` | **$-1$** | 25.2% | $0$ (비활성화) | 음수 억제 신호가 사라짐 |
| `0b01` | **$0$** | **49.6%** | **$+1$ (활성 뉴런)** | **뉴런의 절반(49.6%)이 가짜 양수로 폭주!** |
| `0b10` | **$+1$** | 25.2% | $-1$ (음수) | 원래 양수 신호가 음수로 뒤집힘 |

모델 전체 뉴런의 절반에 달하는 **'아무 일도 하지 말아야 할 0번 뉴런' 49.6%가 모조리 +1 신호로 둔갑**해 있었습니다. 30개 레이어 동안 수십억 개의 가짜 +1 신호가 쏟아져 들어오니 노름이 수백만 단위로 터지고 워드 샐러드가 나오는 것은 당연한 결과였습니다.

수식을 공식 명세인 `(b & 3) - 1`로 고치자마자 거짓말처럼 첫 문장이 온전한 영어로 출력되기 시작했습니다.

---

## 4. 2차 복병: 텐서 트레일러 스케일 누락과 활성화 함수 불일치

가중치 수식을 고치고 끝난 줄 알았으나, 두 가지 문제가 추가로 발목을 잡았습니다.

### 4.1 텐서 끝 32바이트 트레일러 스케일(`weight_scale`)
1.58비트 연산은 정수 내적($X_{\text{int8}} \cdot W_{\text{ternary}}$) 후 활성화 스케일($S_X$)과 가중치 스케일($S_W = \text{mean}(|W|)$)을 곱해 부동소수점으로 복원해야 합니다.  
그런데 GGUF 파일에서 가중치 스케일은 텐서 메타데이터가 아니라 **각 텐서 로우 데이터의 맨 끝 32바이트 트레일러**에 숨겨져 있었습니다. 기존 코드는 이걸 무시하고 $S_W = 1.0$으로 하드코딩해 두었기에, 레이어마다 실제 스케일값($0.96 \sim 2.16$)과의 오차가 누적되어 문장의 꼬리가 흐려졌습니다.

끝단 32바이트에서 `float32` 스케일을 올바르게 파싱해 GEMV 루프에 반영함으로써 수치 정밀도를 완벽히 잡았습니다.

### 4.2 Squared ReLU vs SwiGLU: 다이나믹 활성화 디스패처
Microsoft BitNet 2B를 완치한 뒤, TII의 `Falcon-E-1B` 모델을 돌리자 또다시 글자가 깨졌습니다.  
코드를 뜯어보니 모델 아키텍처마다 FFN(Feed-Forward Network)의 활성화 함수가 완전히 달랐습니다:

- **Microsoft BitNet b1.58 (2B):** Squared ReLU ($\text{relu}(x)^2$) + Sub-LayerNorm 필수.
- **LLaMA 기반 글로벌 1.58-bit (Falcon-E-1B, Falcon3-7B):** SwiGLU (SiLU) 사용, Sub-LayerNorm 없음.

이를 해결하기 위해 모델을 로드할 때 텐서 테이블에서 `ffn_sub_norm` 존재 여부를 검사하여, 런타임 분기 오버헤드 없이 제로-코스트로 활성화 함수를 갈아 끼우는 **다이나믹 디스패처**를 구현했습니다:

```cpp
// 런타임 제로-오버헤드 다이나믹 디스패처
if (lay.ffn_sub_norm) {
    // Microsoft BitNet b1.58 규격: Squared ReLU + Sub-LayerNorm
    for (uint32_t i = 0; i < cfg.n_ffn; ++i) {
        float g = gate[i];
        float r = g > 0.0f ? g : 0.0f;
        gate[i] = (r * r) * up[i];
    }
    rms_norm(gate, gate, lay.ffn_sub_norm, lay.ffn_sub_norm_type, cfg.n_ffn, cfg.norm_eps);
} else {
    // Falcon / LLaMA-1.58bit 규격: 표준 SwiGLU (SiLU)
    for (uint32_t i = 0; i < cfg.n_ffn; ++i) {
        float g = gate[i];
        float silu = g / (1.0f + std::exp(-g));
        gate[i] = silu * up[i];
    }
}
```

---

## 5. 실기기 플릿 실측 벤치마크 결과

이렇게 수정한 엔진(`termux-bitnet`)을 손에 쥐고 있는 실제 안드로이드 단말기들에 직접 올려 테스트했습니다.

### 5.1 실측 성능 매트릭스 (Ground Truth)

| 모델명 | 파라미터 / 용량 | 측정 기기 (SoC) | 프롬프트 평가 | 텍스트 생성 속도 | 실제 발화 결과 (요약) | 판정 |
| :--- | :---: | :--- | :---: | :---: | :--- | :---: |
| **BitNet-2B** | 2.0B (1.13 GB) | **Galaxy S25** (8 Elite) | 1,269 ms | **3.95 tok/s** | *"South Korea belongs to East Asia..."* | **정상 합격** |
| **BitNet-2B** | 2.0B (1.13 GB) | **Galaxy A53** (Exynos 1280) | 1,382 ms | **5.91 tok/s** | 지리 및 역사 질문 완벽 답변 | **정상 합격** |
| **BitNet-2B** | 2.0B (1.13 GB) | **Galaxy A35** (Exynos 1380) | 5,386 ms | **1.57 tok/s** | 정상 자연어 문장 발화 | **정상 합격** |
| **Falcon-E-1B** | 1.0B (635 MB) | **Galaxy A53** (Exynos 1280) | 1,986 ms | **9.69 tok/s** | 파이썬 코드 및 퀴즈 실시간 응답 | **정상 합격** |
| **Falcon-E-1B** | 1.0B (635 MB) | **Galaxy A35** (Exynos 1380) | 8,170 ms | **2.29 tok/s** | 실시간 챗봇 수준 발화 | **정상 합격** |
| **Falcon3-7B** | 7.45B (3.05 GB) | **Galaxy A53** (RAM 6GB) | 7,170 ms | **2.00 tok/s** | OOM 크래시 없이 장문 추론 완주 | **정상 합격** |
| **Falcon3-7B** | 7.45B (3.05 GB) | **Galaxy A35** (RAM 6GB) | 16,386 ms | **0.57 tok/s** | mmap 기반 안정 완주 | **정상 합격** |

### 5.2 현장 엔지니어의 눈으로 본 관측 소감
1. **보급형 A53에서 터진 초당 9.69토큰의 쾌감**:
   출시된 지 수년이 지난 보급형 폰(Exynos 1280)에서 `Falcon-E-1B`가 초당 거의 10토큰에 육박하는 속도로 글자를 쏟아냈습니다. 사람이 눈으로 읽는 속도보다 빠릅니다. 클라우드 API 호출 비용 0원으로 주머니 속 폰에서 완벽한 독립 AI가 성립하는 순간이었습니다.
2. **RAM 6GB 폰에서 7.45B 모델 구동**:
   안드로이드 OS가 백그라운드에서 절반을 먹고 있는 상황에서 가용 RAM은 3GB 남짓이었습니다. 여기서 3.05GB짜리 `Falcon3-7B`를 돌리면 무조건 LMKD(Low Memory Killer)에 의해 프로세스가 총살당해야 정상입니다. 하지만 Linux의 `mmap` 페이징을 정밀하게 제어해 필요한 레이어만 물리 메모리에 올리고 버리는 방식으로, 6GB 폰에서 7B 모델 추론을 크래시 없이 끝까지 완주해 냈습니다.

---

## 6. 오픈소스 기여 및 독자 생태계 보호 전략

이 연구 성과는 방구석 테스트로 끝나지 않고 글로벌 오픈소스 생태계로 직결되었습니다.

### 6.1 공식 업스트림 기여 (선행 기술 및 글로벌 명성 확보)
- **PR #551 (Microsoft BitNet)**: ARM 아키텍처 `i2_s` 삼진 가중치 역양자화 수식 오역 버그 최초 규명 및 수정 (2026-10-11 현재 미병합).
- **PR #624 (Microsoft BitNet)**: ARMv8.2-A NEON signed dot product(`sdot`) 1x4_32W 어셈블리 가속 커널 기고 (2026-10-11 현재 미병합).
- **PR #633 (Microsoft BitNet)**: 모델 아키텍처별 Squared ReLU / SwiGLU 다이나믹 디스패처 기고 (2026-10-11 현재 미병합).

우리는 버그의 존재를 숨기지 않고 규명한 결함과 수정을 업스트림에 PR로 제출했습니다(2026-10-11 현재 미병합). *(2026-10-11 정정: 문서 첫머리 정정 공지 참조)*

### 6.2 오픈 인터페이스 vs 비공개 코어의 분리 (Open Interface, Closed Core)
글로벌 표준과의 호환 규격 및 버그 패치는 투명하게 오픈소스로 공개합니다.  
하지만 **AMEVA 플랫폼의 핵심 경쟁력인 독자 메모리 페이징 스케줄러, 극한의 튜닝이 들어간 C-ABI 어셈블리 바이너리, 컴파일러 자동 최적화 파이프라인은 오픈소스 저장소에 날것으로 올리지 않고 사전 컴파일된 바이너리 형태 또는 프라이빗 코어로 영구 격리**합니다.

### 6.3 라이선스 전략 및 무단 도용 방지
단순한 Apache-2.0 라이선스는 빅테크가 코드를 통째로 가져가 자사 클라우드 서비스에 상업적으로 흡수할 때 아무런 방어막이 되어주지 못합니다.  
따라서 향후 자체 개발 고도화 엔진에 대해서는 파생 코드의 강제 공개를 요구하는 **AGPL-3.0**, 혹은 기업의 상업적 무단 도용을 법적으로 차단하는 **BSL(Business Source License)** 및 **듀얼 라이선스(비영리 연구용 무료 / 기업 상용 유료)** 체계를 도입합니다.

아울러 모든 소스코드 파일 상단에 다음과 같은 국제 저작권 식별자를 엄격히 유지합니다:
```text
Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
```
기술의 개방으로 생태계를 주도하되, 핵심 자산의 주권은 철저히 사수하는 것이 우리가 취하는 현실적인 엔지니어링 생존 전략입니다.
