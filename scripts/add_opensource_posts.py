# -*- coding: utf-8 -*-
"""
scripts/add_opensource_posts.py
Appends 4 rigorous, factual upstream open-source research posts to api/seed_posts.js
under menu 'research-opensource' following the strict 8-section template.
"""

import json
import re
import os

POSTS = [
    {
        "id": 48,
        "menu_id": "research-opensource",
        "title": "[whisper.cpp #4089] 모바일 SoC를 위한 하이브리드 GPU-인코더 / CPU-디코더 스플릿 모드 아키텍처 (--split-mode)",
        "author": "uno-km",
        "created_at": "2026-09-28T16:23:03+09:00",
        "content": """# [whisper.cpp #4089] 모바일 SoC를 위한 하이브리드 GPU-인코더 / CPU-디코더 스플릿 모드 아키텍처 (--split-mode)
### Hybrid GPU-Encoder / CPU-Decoder Split-Mode Pipeline for Mobile Heterogeneous Computing in whisper.cpp

**기술 연구 모노그래프 시리즈: AOSF-TR-2026-UPSTREAM-WHISPER-4089**  
**저자:** 김은호 (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**PR 상태:** Open (공식 업스트림 검토 중)  
**PR 링크:** https://github.com/ggml-org/whisper.cpp/pull/4089  
**대상 리포지토리:** ggml-org/whisper.cpp (Upstream Master)  
**테스트베드:** Samsung Galaxy S25 (Qualcomm Snapdragon 8 Elite, Adreno 830 GPU, Oryon 8C CPU)  
**컴플라이언스:** Apache-2.0 / OpenSSF Best Practices / CNCF Neutrality 규격 준수  

---

## 1. 문제 (Problem)
모바일 및 통합 메모리(UMA) SoC 환경에서 온디바이스 음성인식(STT) 모델을 단일 백엔드로 구동할 때 다음과 같은 상반된 병목과 자원 낭비가 발생합니다:

1. **순수 CPU 구동 시의 극심한 발열과 서멀 스로틀링**:
   - 오디오 인코더는 30초 음향 멜 스펙트로그램에 대해 밀집 대형 행렬곱($\\text{FLOPs} \\approx 1.63\\text{ TFLOPs}$)을 수행합니다.
   - 이를 CPU(ARM NEON)로만 처리할 경우 CPU 점유율이 350%~410%로 치솟으며, 스마트폰 특유의 수동 냉각 한계로 인해 수십 초 만에 AP 온도가 45°C를 초과하여 서멀 거버너에 의해 CPU 클럭이 3GHz 대역에서 1GHz 대역으로 강제 강등(Thermal Throttling)됩니다.
2. **순수 GPU 구동 시의 N=1 시퀀스 커널 런치 오버헤드**:
   - 자기회귀(Autoregressive) 텍스트 디코더는 이전 생성 토큰에 의존하여 1번에 단 1개의 토큰($N=1$)만을 순차적으로 생성합니다.
   - 모바일 GPU(Vulkan)는 수천 개의 스레드가 병렬 실행될 때 최대 효율을 발휘하지만, 단일 토큰 생성에서는 연산량보다 커맨드 버퍼 기록, 큐 제출, 배리어 동기화 오버헤드가 더 커지는 역전 현상이 발생합니다.
   - 이로 인해 GPU 디코딩 지연시간이 CPU ARM NEON보다 오히려 2배 이상 길어집니다 (Single-Token Latency: GPU 21~26ms vs CPU 10~14ms).
3. **단일 백엔드 강제 한계**:
   - 기존 GGML 백엔드(Vulkan, OpenCL, CUDA)는 인코더와 디코더를 단일 장치에 일괄 배정하도록 고정되어 있어 최적의 이기종 분할을 활용할 수 없었습니다.

---

## 2. 해결방법 (Solution)
트랜스포머의 연산 단계별 특성에 맞추어 물리 프로세서를 분할하는 **'하이브리드 GPU-인코더 / CPU-디코더 스플릿 모드(--split-mode)'**를 제안하고 C++ 네이티브 레벨에서 구현하였습니다:

```mermaid
flowchart LR
    Audio["입력 오디오 (jfk_1min.wav)"] --> Mel["멜 스펙트로그램 변환 (CPU)"]
    Mel -->|GPU 텐서 전송| Enc["오디오 인코더 가속: GPU (Vulkan Compute)<br/>대규모 병렬 행렬곱 집중 처리"]
    Enc -->|1회성 KV 텐서 복사 UMA 제로카피 2ms 미만| KV["호스트 KV 캐시<br/>(state->kv_cross_cpu)"]
    KV --> Dec["자기회귀 토큰 디코더: CPU (ARM NEON FP16)<br/>초저지연 순차 생성 (N=1)"]
    Dec --> Text["최종 전사 텍스트 출력"]
```

1. **가중치 버퍼 분할 (`whisper_model_load`)**:
   - 오디오 인코더 가중치 및 크로스 어텐션 투영 가중치는 GPU 버퍼(`Vulkan0`)에 배치.
   - 텍스트 디코더 가중치 및 피드포워드 신경망(MLP) 레이어는 CPU 호스트 버퍼에 배치.
2. **1회성 크로스 어텐션 KV 텐서 전송 (`whisper_encode_internal`)**:
   - GPU 상에서 `sched_cross` 연산이 완료되는 즉시 계산된 $K_{cross}$ 및 $V_{cross}$ 텐서를 `ggml_backend_tensor_copy`를 통해 호스트 메모리로 복사 (UMA 버스 기준 9MB~56MB 용량, 전송 지연시간 < 2ms).
3. **전용 디코더 스케줄러 (`whisper_init_state`)**:
   - 디코더 스케줄러(`sched_decode`)에 CPU 단독 백엔드 리스트(`[backend_cpu]`)를 배정하여 GPU 컨텍스트 스위칭 오버헤드를 원천 제거.
4. **CLI 제어 플래그**:
   - `-sm`, `--split-mode`, `--hybrid`, `--optimize-gpu-cpu`: 하이브리드 파이프라인 활성화 (기본 4스레드).
   - `--optimize-1`, `--hybrid-1`: 초저전력 1스레드 하이브리드 파이프라인 활성화.

---

## 3. 트레이드오프 (Trade-offs)
- **오버헤드 (Cost)**:
  - 인코딩 완료 후 호스트 메모리로의 1회성 KV 텐서 복사 오버헤드 발생 (실측 1.8ms 소요).
  - 호스트 RAM에 크로스 어텐션 캐시 저장 공간(Tiny 9.4MB, Large 56.6MB) 추가 점유.
- **이득 (Benefit)**:
  - **단일 백엔드 한계 돌파**: Small 모델 기준 순수 CPU(15.48s) 대비 16.5% 단축, 순수 GPU(16.36s) 대비 21.0% 단축된 **12.93초** 달성.
  - **열역학적 냉각 실증**: Large-v3-Turbo 기준 순수 CPU 408% 과열을 **16%로 냉각**, 총 소요 시간 **28.5초(24.8%) 단축**.
  - **단일 토큰 응답 속도**: GPU 디스패치 버블을 제거하여 토큰당 생성 지연시간 10~14ms 유지.

---

## 4. 수정사항과 이유 (Changes & Rationale)
기존 GGML 스케줄러 아키텍처의 불변성을 유지하면서 최소 침습적(Minimally Invasive)으로 단 3개 파일, 90줄의 코드로 구현:

1. `src/whisper.cpp`:
   - `whisper_model_load`: 모델 레이어 로드 루프에서 디코더 텐서에 CPU 버퍼 타입을 강제 지정.
   - `whisper_init_state`: `state->sched_decode`를 `backend_cpu` 전용으로 독립 초기화.
   - `whisper_encode_internal`: GPU 인코딩 직후 `ggml_backend_tensor_copy(state->kv_cross, state->kv_cross_cpu)` 호출.
2. `include/whisper.h`:
   - `whisper_context_params` 구조체에 `split_mode` 불리언 필드 추가.
3. `examples/cli/cli.cpp`:
   - `--split-mode` 및 `--optimize-gpu-cpu` CLI 파라미터 파싱 로직 추가.

---

## 5. 실기기 실측치 (Real Device Benchmarks & Ground Truth)

### 테스트베드 제원
- **단말기**: Samsung Galaxy S25 (Qualcomm Snapdragon 8 Elite, Oryon 8-Core CPU, Adreno 830 GPU, 12GB LPDDR5X)
- **운영체제**: Android 15 (Termux Bionic libc aarch64)
- **평가 음원**: JFK 취임 연설 오디오 (`samples/jfk_1min.wav`, 길이 60.59초 / 16kHz 모노)

### 3대 모델 전수 실측 대조표
| 모델 | 실행 모드 | 총 소요 시간 (Wall Time) | 인코더 시간 (ms) | 디코더 시간 (ms/run) | CPU 부하 | WER |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **Tiny (77MB)** | Pure CPU (`-dev -1 -t 4`) | 4.59 s | 3,192 ms | 3.19 ms | 341% | 0.00% |
| | Pure GPU (`-dev 0 -t 4`) Warm | 9.56 s | 4,016 ms | 18.95 ms | 0% | 0.00% |
| | **Hybrid 4T (`--split-mode`)** | **4.38 s** | **3,048 ms** | **3.41 ms** | **12%** | **0.00%** |
| | **Hybrid 1T (`--optimize-1`)** | 5.48 s | 3,001 ms | 5.83 ms | 14% | 0.00% |
| **Small (487MB)** | Pure CPU (`-dev -1 -t 4`) | 15.48 s | 12,328 ms | 12.89 ms | 361% | 0.00% |
| | Pure GPU (`-dev 0 -t 4`) Warm | 16.36 s | 10,006 ms | 26.64 ms | 0% | 0.00% |
| | **Hybrid 4T (`--split-mode`)** | **12.93 s** | **9,739 ms** | **14.94 ms** | **15%** | **0.00%** |
| | **Hybrid 1T (`--optimize-1`)** | 23.02 s | 14,418 ms | 33.73 ms | 13% | 0.00% |
| **Large-v3-Turbo (1.62GB)** | Pure CPU (`-dev -1 -t 4`) | 115.05 s | 110,722 ms | 10.33 ms | 408% | 0.00% |
| | Pure GPU (`-dev 0 -t 4`) Warm | 87.87 s | 79,730 ms | 21.87 ms | 0% | 0.00% |
| | **Hybrid 4T (`--split-mode`)** | **86.52 s** | **80,111 ms** | **14.31 ms** | **16%** | **0.00%** |
| | **Hybrid 1T (`--optimize-1`)** | 90.39 s | 79,451 ms | 28.80 ms | 12% | 0.00% |

---

## 6. 오픈소스 PR 원문 (Original PR Submission & Specification)

```text
Title: whisper : add hybrid GPU-encoder / CPU-decoder split mode (--split-mode / --optimize-gpu-cpu)
URL: https://github.com/ggml-org/whisper.cpp/pull/4089
Date: 2026-09-28T16:23:03Z
Author: uno-km

## Summary
This PR introduces an optional hybrid GPU-encoder / CPU-decoder split mode (--split-mode, --hybrid, --optimize-gpu-cpu, --optimize-1) for whisper.cpp.

On mobile and integrated SoC platforms (e.g. Qualcomm Snapdragon Adreno via Vulkan, Apple Silicon, ARM Mali, etc.), executing the autoregressive text decoder on the GPU suffers from significant kernel launch latency and driver synchronization overhead for sequential single-token generation (N=1). Conversely, running the dense audio encoder on the CPU results in heavy sustained CPU load (350%~410%), device overheating, and thermal throttling.

While platform-specific external offloads (CoreML #566, VitisAI #3608, ANEForge #3905) established that running the encoder on an accelerator while keeping the decoder on the CPU is the ideal architectural division, standard GGML backends (Vulkan, OpenCL, CUDA) were previously restricted to running both encoder and decoder on the same backend.

This PR enables generic encoder GPU offloading with host CPU decoding for standard GGML backends in a clean, minimally invasive manner (90 lines added across 3 files).
```

---

## 7. 피드백 및 커뮤니티 의견 (Maintainer & Community Feedback)
- **현재 상태**: Open (메인테이너 코드 리뷰 및 검토 대기).
- **자동 빌드 검증**: GitHub Actions 자동 CI 빌드(Ubuntu Linux, macOS Metal, Windows MSVC, Android NDK aarch64) 전수 통과 완료.

---

## 8. 연관 이슈 및 파생 PR (Related Issues & Derivative Work)
- **선행 외부 오프로드 연구**:
  - Apple CoreML Encoder 오프로드: `ggml-org/whisper.cpp#566`
  - AMD/Xilinx VitisAI NPU 오프로드: `ggml-org/whisper.cpp#3608`
  - Apple ANEForge 오프로드: `ggml-org/whisper.cpp#3905`
- **본 연구의 차별성**: 특정 제조사 전용 NPU 드라이버에 종속되지 않고, 표준 Vulkan/OpenCL 백엔드를 통해 전 세계 모든 안드로이드 및 모바일 SoC에서 크로스 벤더로 동작하는 범용 하이브리드 파이프라인 최초 수립.
"""
    },
    {
        "id": 49,
        "menu_id": "research-opensource",
        "title": "[BitNet #551] ARM 아키텍처 i2_s 양자화 텐서 오염(Word Salad) 결함 규명 및 비-AVX2 폴백 동시 완치",
        "author": "uno-km",
        "created_at": "2026-04-26T13:56:52+09:00",
        "content": """# [BitNet #551] ARM 아키텍처 i2_s 양자화 텐서 오염(Word Salad) 결함 규명 및 비-AVX2 폴백 동시 완치
### Root-Cause Resolution of Tensor Corruption (Word Salad) on ARM Devices and Non-AVX2 Fallback Restoration in BitNet i2_s Quantization

**기술 연구 모노그래프 시리즈: AOSF-TR-2026-UPSTREAM-BITNET-551**  
**저자:** 김은호 (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**PR 상태:** Open (글로벌 커뮤니티 실측 검증 완료)  
**PR 링크:** https://github.com/microsoft/BitNet/pull/551  
**대상 리포지토리:** microsoft/BitNet (Upstream Main)  
**테스트베드:** Samsung Galaxy A35 (Samsung Exynos 1380, ARMv8.2-A + DotProd) & Oracle Cloud ARM Ampere A1 & Intel Ivy Bridge i5-3335S  
**컴플라이언스:** MIT / OpenSSF Best Practices / CNCF Neutrality 규격 준수  

---

## 1. 문제 (Problem)
Microsoft BitNet 1-bit LLM 추론 프레임워크(`BitNet-b1.58-2B-4T`)를 ARM 아키텍처(Android 모바일 및 클라우드 ARM 서버)에서 `i2_s` 양자화 모델로 구동할 때 치명적인 텍스트 생성 붕괴 결함이 발생하였습니다:

1. **Word Salad 및 GGGG 문자 도배 현상**:
   - 모델 가중치는 정상 로드되지만, 토큰 생성 시 정상적인 문장이 출력되지 않고 문맥과 무관한 쓰레기 단어열(Word Salad) 또는 `GGGGGGGG...` 문자가 수백 회 연속 출력됨.
2. **글로벌 재현 사례**:
   - Oracle Cloud의 ARM Ampere A1 서버 사용자 및 다양한 모바일 환경에서 동일한 붕괴가 공식 이슈(`microsoft/BitNet#468`, `#470`)로 보고되었으나 원인 불명으로 장기 방치됨.

---

## 2. 해결방법 (Solution)
역공학 및 메모리 덤프 분석을 통해 x86 AVX2 패킹 로직과 ARM NEON 언패킹 매크로 간의 **'메모리 레이아웃 불일치(Memory Layout Desynchronization)'**가 근본 원인임을 세계 최초로 규명하고 완치하였습니다:

1. **QK 스트라이드(Stride) 정합**:
   - x86 AVX2 패킹 단계는 블록 크기 `QK=128` (32-stride)을 전제로 텐서를 압축하고 있었으나, `__ARM_NEON` 매크로와 커널 언롤링 루프는 구형 `QK=64` (16-stride)로 하드코딩되어 있었습니다.
   - 이로 인해 ARM NEON 커널이 메모리 경계를 완전히 벗어난 주소 공간을 읽어들여 텐서가 완전히 파괴되었던 것입니다.
2. **동적 128-Block 루프 재작성**:
   - 하드코딩된 64-block 루프를 제거하고 코어 패킹 로직과 정확히 일치하는 32-stride 128-block 순회 구조로 전면 교체.
3. **수평 덧셈 누적기 오버플로우 방지**:
   - 수평 덧셈 연산을 `vaddlvq_s32`로 대체하여 32비트 누적기 오버플로우를 원천 차단.

---

## 3. 트레이드오프 (Trade-offs)
- **오버헤드 (Cost)**:
  - 동적 루프 경계 검사 추가에 따른 미세한 인스트럭션 증가 (측정 오차 범위 내).
- **이득 (Benefit)**:
  - **ARM 생태계 100% 정상 작동 복원**: Exynos, Snapdragon, Oracle Ampere A1 등 모든 ARM 환경에서 결함 없는 텍스트 생성 완주.
  - **예기치 않은 x86 구형 CPU 복원 효과**: AVX2가 없는 12년 된 구형 Intel CPU(Ivy Bridge 등)의 비-AVX2 폴백 경로 역시 동일한 64 vs 128 메모리 보폭 버그를 안고 있었기에, 본 PR 하나로 x86 구형 PC까지 `GGGG` 버그가 완벽히 동시 치료됨.

---

## 4. 수정사항과 이유 (Changes & Rationale)
`src/ggml-bitnet-mad.cpp`:
- `QK=64` 기반의 고정 보폭 포인터 오프셋 계산을 제거하고 `QK=128` (32-stride) 구조로 재정렬.
- NEON 벡터 언패킹 시 `vld1q_s8` 및 `vdotq_s32` 누적 파이프라인의 오프셋을 정규화.
- 16비트/32비트 포화 방지를 위해 `vaddlvq_s32` 적용.

---

## 5. 실기기 실측치 (Real Device Benchmarks & Ground Truth)

### 테스트베드 제원
- **기기**: Samsung Galaxy A35 5G (Samsung Exynos 1380, 4x Cortex-A78 @ 2.4GHz + 4x A55 @ 2.0GHz)
- **운영체제**: Android Termux (Ubuntu PRoot ARM64)
- **평가 모델**: `microsoft/bitnet-b1.58-2B-4T-gguf` (Quant: `i2_s`)

### 실측 결과
- **기존 main 브랜치**:
  ```text
  Prompt: Explain Microsoft's BitNet b1.58...
  Output: GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG... (완전 붕괴)
  ```
- **PR #551 적용 후**:
  ```text
  Prompt: Explain Microsoft's BitNet b1.58 in one short paragraph.
  Output: Microsoft's BitNet b1.58 is a 1-bit large language model that uses a novel approach to generate text. It employs a unique method of generating text by using a single bit as a random seed for each output token. This approach allows the model to produce a diverse range of outputs, making it suitable for various applications... (100% 정상 텍스트 완주)
  ```

---

## 6. 오픈소스 PR 원문 (Original PR Submission & Specification)

```text
Title: Fix Word Salad (Tensor Corruption) on ARM Devices for i2_s Quantization
URL: https://github.com/microsoft/BitNet/pull/551
Date: 2026-04-26T13:56:52Z
Author: uno-km

## Description
This PR resolves the critical word salad and GGGG tensor corruption bug on ARM architectures (ARMv8-A / ARMv8.2-A) when running the i2_s quantization model.

Root Cause:
The non-AVX2 and ARM NEON fallback kernels suffered from a severe memory stride mismatch. The x86 packing phase enforces QK=128 (32-stride), but the __ARM_NEON macros and kernel loop unrolling were strictly hardcoded to QK=64 (16-stride). Because of this mismatch, the ARM NEON kernels were unpacking out-of-bounds memory and reading complete garbage.

By synchronizing the NEON packing logic to a 32-stride and replacing the hardcoded 64-block loop with a dynamic 128-block logic, both the GGGG issue and the Word Salad are completely resolved.
```

---

## 7. 피드백 및 커뮤니티 의견 (Maintainer & Community Feedback)

### 1) Oracle Cloud ARM 서버 엔지니어 (@betovildoza) 리뷰
> *"Hey, We'll keep an eye on this PR. We experienced very similar 'word salad' / tensor corruption issues on Oracle Cloud ARM Ampere A1 with the official i2_s model (see #468 and #470). Looking forward once it's ready."*

### 2) Intel Ivy Bridge 구형 CPU 사용자 (@Jozeh) 실측 검증 리포트
> *"Tested PR #551 on old x86_64 Ivy Bridge CPU (Intel Core i5-3335S @ 2.70GHz, AVX=1, AVX2=0)... Result on current main: GGGGGGGGG... Result on PR #551: Generated coherent answer without corruption. The repeated GGGG corruption is gone on PR #551. Official benchmark completes successfully: 5.45 tok/s (tg64). Thumbs-up & Hooray!"*

---

## 8. 연관 이슈 및 파생 PR (Related Issues & Derivative Work)
- **공식 버그 이슈**:
  - `microsoft/BitNet#468`: Official i2_s model outputs garbage on ARM
  - `microsoft/BitNet#470`: Tensor corruption on non-AVX2 systems
- **후속 기여 PR**:
  - `microsoft/BitNet#624`: 1x4_32W sdot NEON 커널 완주 및 Android 빌드 자동화
"""
    },
    {
        "id": 50,
        "menu_id": "research-opensource",
        "title": "[BitNet #624] ARMv8.2-A NEON 1x4_32W sdot 하드웨어 가속 커널 완주 및 Android Termux 툴체인",
        "author": "uno-km",
        "created_at": "2026-09-07T06:26:58+09:00",
        "content": """# [BitNet #624] ARMv8.2-A NEON 1x4_32W sdot 하드웨어 가속 커널 완주 및 Android Termux 툴체인
### ARMv8.2-A NEON 1x4_32W sdot Hardware Acceleration Kernel Completion and Android Termux Toolchain for BitNet

**기술 연구 모노그래프 시리즈: AOSF-TR-2026-UPSTREAM-BITNET-624**  
**저자:** 김은호 (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**PR 상태:** Open (공식 업스트림 심사 중)  
**PR 링크:** https://github.com/microsoft/BitNet/pull/624  
**대상 리포지토리:** microsoft/BitNet (Upstream Main)  
**테스트베드:** Samsung Galaxy S25 (Snapdragon 8 Elite) & Samsung Galaxy A35 (Exynos 1380)  
**컴플라이언스:** MIT / OpenSSF Best Practices / CNCF Neutrality 규격 준수  

---

## 1. 문제 (Problem)
Microsoft BitNet 공식 저장소에서 모바일 ARM 추론 생태계는 다음과 같은 세 가지 심각한 기술적 장벽을 안고 있었습니다:

1. **핵심 연산 커널 미구현 상태 방치**:
   - `src/ggml-bitnet-mad.cpp`의 1x4_32W 4행 병렬 행렬곱 커널인 `ggml_vec_dot_i2_i8_s_1x4_32W`에서 x86 AVX2 경로만 존재하고 `__ARM_NEON` 구현이 누락되어 있어 모바일에서 CPU 하드웨어 가속을 전혀 활용하지 못함.
2. **모바일 Termux 환경 빌드 미지원**:
   - 빌드 스크립트(`setup_env.py`)가 Android Termux를 인식하지 못하여 수동으로 CMake 플래그를 수정하지 않으면 컴파일이 실패함.
3. **Bionic 링커 충돌**:
   - 추론 런너(`run_inference.py`)가 모바일 동적 링커의 `$ORIGIN` 경로를 처리하지 못해 시스템 라이브러리와 심볼 충돌을 일으킴.

---

## 2. 해결방법 (Solution)

```mermaid
flowchart TD
    Build["Termux 환경 자동 감지 (setup_env.py)"] --> Flags["-DGGML_NEON=ON -DGGML_ARM_DOTPROD=ON 자동 주입"]
    Flags --> Kernel["1x4_32W NEON sdot 커널 컴파일 (ggml-bitnet-mad.cpp)"]
    Kernel --> Linker["LD_LIBRARY_PATH 동적 격리 (run_inference.py)"]
    Linker --> Infer["Galaxy S25 / A35 네이티브 초고속 토큰 추론"]
```

1. **ARMv8.2-A sdot 하드웨어 가속 커널 완성**:
   - `ggml_vec_dot_i2_i8_s_1x4_32W` 함수에 `__ARM_NEON` 분기를 신설하고, 공유 액티베이션 벡터에 대해 4개 행을 병렬로 처리하는 QK=128 레이아웃 기반 `vdotq_s32` 및 `vmlal_s8` 어셈블리 파이프라인 구현.
2. **플랫폼 감지 자동화 (`setup_env.py`)**:
   - `com.termux` 환경 변수 및 파일시스템 프리픽스를 탐지하여 Android 환경일 경우 CMake 옵션 `-DGGML_NEON=ON -DGGML_ARM_DOTPROD=ON`을 원클릭으로 자동 주입.
3. **런타임 링커 격리 (`run_inference.py`)**:
   - 로컬 빌드 디렉터리를 `LD_LIBRARY_PATH` 최우선 순위로 격리 주입하여 안드로이드 시스템 라이브러리와의 심볼 충돌 원천 차단.
4. **실기기 온디바이스 벤치마크 및 5단계 스크린샷 증거 제공**:
   - Snapdragon 8 Elite 및 Exynos 1380에서 네이티브 터미널 빌드 및 실시간 추론 과정을 5단계 스크린샷으로 기록하여 PR 본문에 첨부.

---

## 3. 트레이드오프 (Trade-offs)
- **오버헤드 (Cost)**:
  - 4행 병렬 처리를 위해 추가적인 레지스터 할당(ARM64 v0~v15 레지스터 풀 점유).
- **이득 (Benefit)**:
  - ARMv8.2-A DotProd 지원 모바일 단말기에서 비약적인 연산 처리량 달성.
  - 전 세계 Termux 사용자가 명령어 한 줄(`python setup_env.py`)로 BitNet 1-bit LLM을 즉시 빌드 및 구동 가능.

---

## 4. 수정사항과 이유 (Changes & Rationale)
- `src/ggml-bitnet-mad.cpp`:
  - `ggml_vec_dot_i2_i8_s_1x4_32W` 내 `__ARM_NEON` 매크로 블록 추가.
  - 4개 행의 가중치와 1개 행의 활성화를 벡터 로드(`vld1q_s8`) 후 `vdotq_s32` 4회 병렬 누적.
- `setup_env.py`:
  - Termux 탐지 함수 `is_termux()` 추가 및 CMake 캐시 파라미터 자동 설정.
- `run_inference.py`:
  - Android 환경용 `os.environ["LD_LIBRARY_PATH"]` 보호 로직 추가.
- `README.md`:
  - 모바일 Termux 설치 가이드 및 실기기 성능 지표 표 추가.

---

## 5. 실기기 실측치 (Real Device Benchmarks & Ground Truth)

### 테스트베드 실측 제원
- **평가 모델**: `models/BitNet-b1.58-2B-4T` (Quant: `i2_s`)
- **실행 조건**: 4 워커 스레드 (`-t 4`), Termux Native ARM64

| 디바이스 | 탑재 SoC / 프로세서 | CPU 아키텍처 및 하드웨어 가속 | 토큰 생성 속도 (Generation) | 첫 토큰 지연 (TTFT) | 실기기 검증 상태 |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **Samsung Galaxy S25** | Qualcomm Snapdragon 8 Elite | Oryon 8C (ARMv8.2-A + sdot) | **1.15 tokens/sec** | ~2,814 ms | ✅ 100% 정상 완주 |
| **Samsung Galaxy A35 5G** | Samsung Exynos 1380 | 4x A78 + 4x A55 (sdot 지원) | **0.58 tokens/sec** | ~8,501 ms | ✅ 100% 정상 완주 |

---

## 6. 오픈소스 PR 원문 (Original PR Submission & Specification)

```text
Title: feat(arm): complete 1x4_32W NEON kernel, auto-detect Android Termux, and add Galaxy benchmarks
URL: https://github.com/microsoft/BitNet/pull/624
Date: 2026-09-07T06:26:58Z
Author: uno-km

## Description
This PR provides four key enhancements for the ARM / Mobile inference ecosystem in BitNet:
1. Kernel Completion: Implemented the missing __ARM_NEON path for ggml_vec_dot_i2_i8_s_1x4_32W in src/ggml-bitnet-mad.cpp. Processes 4 parallel rows against shared activation vectors using QK=128 layout and ARMv8.2-A sdot hardware dot-product acceleration.
2. Platform Tooling (setup_env.py): Added auto-detection for Android / Termux environments to automatically inject -DGGML_NEON=ON -DGGML_ARM_DOTPROD=ON CMake flags.
3. Runtime Hardening (run_inference.py): Prepended local build directories to LD_LIBRARY_PATH during inference invocation to prevent dynamic linker collision.
4. Documentation & Verified Mobile Benchmarks: Added Termux installation steps and real-device on-device inference benchmarks for Samsung Galaxy devices.
```

---

## 7. 피드백 및 커뮤니티 의견 (Maintainer & Community Feedback)
- **현재 상태**: Open (메인테이너 심사 중).
- **실기기 사진 증거**: Galaxy A35 단말기 로그인부터 빌드 성공, 실시간 추론 토큰 출력까지의 5단계 실기기 터미널 캡처본이 첨부되어 재현성 인정.

---

## 8. 연관 이슈 및 파생 PR (Related Issues & Derivative Work)
- 선행 PR: `microsoft/BitNet#551` (Word Salad 텐서 오염 수정)
- 후속 확장: 모바일 온디바이스 전용 1-bit 경량화 신경망 배포 표준 수립.
"""
    },
    {
        "id": 51,
        "menu_id": "research-opensource",
        "title": "[whisper.cpp 연구] Qualcomm Adreno 6xx Vulkan Flash Attention 32KB LDS 결함 방어 및 표준 어텐션 자동 폴백",
        "author": "uno-km",
        "created_at": "2026-09-29T21:10:00+09:00",
        "content": """# [whisper.cpp 연구] Qualcomm Adreno 6xx Vulkan Flash Attention 32KB LDS 결함 방어 및 표준 어텐션 자동 폴백
### Architectural Defense and Graceful Fallback for 32KB LDS Hardware Limitations on Qualcomm Adreno 6xx Vulkan

**기술 연구 모노그래프 시리즈: AOSF-TR-2026-WHISPER-ADRENO6XX-FALLBACK**  
**저자:** 김은호 (@uno-km), AMEVA Systems Architecture & Research Engineering Group  
**연구 분류:** Upstream Technical Report & Hardware Quirk Defense  
**패치 브랜치:** `uno-km/whisper.cpp:fix/vulkan-flash-attn-adreno6xx-fallback`  
**대상 리포지토리:** ggml-org/whisper.cpp (Upstream Master)  
**하드웨어 테스트베드:** Samsung Galaxy S20 (Qualcomm Snapdragon 865, Adreno 650 GPU) vs Galaxy S25 (Snapdragon 8 Elite, Adreno 830 GPU)  
**컴플라이언스:** MIT / OpenSSF Best Practices / CNCF Neutrality 규격 준수  

---

## 1. 문제 (Problem)
Qualcomm Snapdragon 865(Adreno 650 GPU)를 탑재한 Samsung Galaxy S20 단말기에서 `whisper.cpp`의 Vulkan 가속 백엔드를 구동할 때, 컴퓨트 파이프라인 생성 단계에서 다음과 같은 치명적 드라이버 크래시가 발생합니다:

```text
libc++abi: terminating due to uncaught exception of type vk::SystemError: 
vk::Device::createComputePipeline: ErrorUnknown (-13)
```

### 결함 원인 정밀 규명 (Root Cause)
1. **Adreno 6xx 로컬 공유 메모리(LDS) 하드웨어 제약**:
   - `vkGetPhysicalDeviceProperties`로 조회한 Adreno 650의 `maxComputeSharedMemorySize`는 정확히 **32,768 바이트 (32 KB)**입니다.
2. **Flash Attention SPIR-V 셰이더의 타일링 요구량 초과**:
   - `whisper.cpp` 및 `ggml-vulkan`의 Flash Attention scalar SPIR-V 셰이더(`flash_attn_ext.comp`)는 고성능 타일링을 위해 최소 **49,152 바이트 (48 KB)** 이상의 LDS 공유 메모리를 요구합니다.
3. **퀄컴 드라이버 컴파일러 결함**:
   - 하드웨어 LDS 한계(32KB)를 초과하는 셰이더 바이트코드가 입력되면 퀄컴 Vulkan 컴파일러가 유효한 에러 코드를 반환하지 못하고 내부 크래시를 일으키며 `ErrorUnknown (-13)`을 방출하고 프로세스를 즉각 강제 종료시킵니다.

---

## 2. 해결방법 (Solution)
사용자가 `-nfa`(No Flash Attention) 플래그를 수동으로 입력하지 않더라도, 런타임이 하드웨어를 스스로 감지하여 안전하게 표준 어텐션으로 우아하게 전환(Graceful Fallback)하는 3단계 방어 아키텍처를 수립하였습니다:

```mermaid
flowchart TD
    Device["Vulkan 디바이스 감지 (ggml-vulkan)"] --> Check{"LDS 공유 메모리 확인<br/>maxComputeSharedMemorySize < 48KB?"}
    Check -->|Yes: Adreno 650 32KB| Reject["1. GGML_OP_FLASH_ATTN_EXT 지원 거부<br/>2. FA SPIR-V 셰이더 컴파일 루프 스킵"]
    Check -->|No: S25 Adreno 830 64KB| Allow["Flash Attention 하드웨어 가속 허용"]
    Reject --> Whisper["3. whisper.cpp: Adreno 6xx 감지 시<br/>params.flash_attn = false 자동 폴백 (-nfa)"]
    Whisper --> Stable["크래시 없는 안전한 전사 연산 완주"]
```

1. **`ggml-vulkan.cpp` 지원 연산 거부**:
   - `ggml_backend_vk_device_supports_op`에서 `device->properties.limits.maxComputeSharedMemorySize < 49152`인 경우 `GGML_OP_FLASH_ATTN_EXT` 지원을 명시적으로 거부(`return false`).
2. **셰이더 로딩 단계 스킵**:
   - `ggml_vk_load_shaders`에서 48KB 미만 LDS 장치일 경우 Flash Attention 셰이더 파이프라인 컴파일 루프를 원천 스킵하여 드라이버 컴파일러 크래시를 사전 방어.
3. **`whisper.cpp` 모델 초기화 자동 폴백**:
   - `whisper_init_with_params_no_state`에서 활성 디바이스 이름이 `Adreno (TM) 6` 계열로 감지되면 경고 로그를 남기고 `params.flash_attn = false`로 자동 강제 전환.

---

## 3. 트레이드오프 (Trade-offs)
- **오버헤드 (Cost)**:
  - 표준 어텐션 구동 시 Flash Attention 대비 메모리 대역폭 점유율이 소폭 증가.
- **이득 (Benefit)**:
  - 전 세계 수백만 대의 Snapdragon 865/855 구형 단말기에서 사용자의 설정 개입 없이 드라이버 크래시를 완벽히 방어.
- **모바일 엔지니어링 한계 및 최종 권고**:
  - 퀄컴은 Android 13 이후 Snapdragon 865의 Vulkan 드라이버 버그 패치를 EOL 처리하였습니다.
  - `-nfa`로 파이프라인 컴파일을 통과하더라도, 대규모 인코더 큐를 밀어넣을 때 드라이버 스케줄러 타임아웃으로 `ErrorDeviceLost`가 추가 발생할 수 있습니다.
  - 따라서 **Adreno 600 계열 기기에서는 Vulkan 대신 ARM NEON CPU 4스레드(`-ng`) 또는 OpenCL 백엔드를 사용하는 것이 가장 안정적이고 6배 이상 빠름**을 실측 확인하였습니다.

---

## 4. 수정사항과 이유 (Changes & Rationale)
- `ggml/src/ggml-vulkan/ggml-vulkan.cpp`:
  - `ggml_backend_vk_device_supports_op`: 48KB 미만 LDS 장치에 대한 Flash Attention 거부 로직 추가.
  - `ggml_vk_load_shaders`: LDS 용량 부족 시 FA 셰이더 파이프라인 생성 스킵.
- `src/whisper.cpp`:
  - `whisper_init_with_params_no_state`: Adreno 6xx 감지 시 `params.flash_attn = false` 자동 전환 및 경고 로그 출력.
- `ggml/src/ggml-vulkan/CMakeLists.txt` & `vulkan-shaders-gen.cpp`:
  - 모바일 Termux `glslc`에서 OCP FP4(4229) 및 NVIDIA coopmat2(5447) spirv-opt 최적화 충돌 방어를 위해 `-O` 최적화 예외 처리.

---

## 5. 실기기 실측치 (Real Device Benchmarks & Ground Truth)

### 디바이스별 GPU 제원 및 실측 대조
| 디바이스 | 탑재 SoC / GPU | LDS 공유 메모리 크기 | Flash Attention 실행 여부 | Whisper Tiny 전사 결과 |
| :--- | :--- | :---: | :---: | :--- |
| **Galaxy S25** | Snapdragon 8 Elite / Adreno 830 | **65,536 B (64 KB)** | ✅ 완전 지원 (정상 동작) | **GPU Vulkan: 7.324초 완주** |
| **Galaxy S20** | Snapdragon 865 / Adreno 650 | **32,768 B (32 KB)** | ❌ **하드웨어 용량 부족 (크래시)** | **기본 Vulkan: 즉각 크래시 (-13)** |
| **Galaxy S20 (패치)** | Snapdragon 865 / Adreno 650 | 32,768 B (32 KB) | 🛡️ **자동 폴백 (-nfa 전환)** | 파이프라인 생성 성공 (로그 정상 방출) |
| **Galaxy S20 (CPU)** | Snapdragon 865 / Kryo 585 | N/A (L1/L2/L3 캐시) | N/A (ARM NEON FP16) | **CPU NEON 4T: 1.217초 완주 (최고속)** |

*결론*: Galaxy S20의 경우 GPU Vulkan보다 **ARM NEON CPU 4스레드가 1.217초로 6배 이상 빠르고 100% 안정적**임을 확인.

---

## 6. 오픈소스 기술 제보 원문 (Upstream Bug Report & PR Specification)

```text
### Summary: Vulkan Backend Crash on Qualcomm Adreno 6xx (Snapdragon 865)

#### 1. Observed Defects
On Qualcomm Snapdragon 865 (Adreno 650 GPU, Android 13 Termux):
- Flash Attention Crash: vk::Device::createComputePipeline: ErrorUnknown (-13)
  - Root Cause: Adreno 650 limits maxComputeSharedMemorySize to 32,768 bytes (32 KB). Flash Attention scalar tile shaders require >= 48 KB LDS, leading to Qualcomm driver compiler failure.
- Queue Submit DeviceLost: Passing -nfa allows pipeline compilation, but ggml_vk_submit subsequently fails with vk::DeviceLostError (ErrorDeviceLost) during encoder workload submission.

#### 2. Cross-Device Ground Truth (Real Hardware Verification)
- Galaxy S25 (Snapdragon 8 Elite / Adreno 830, Shared Memory: 64 KB):
  - Whisper Tiny (GPU Vulkan): 7.324s (Clean execution, Flash Attention fully operational)
- Galaxy S20 (Snapdragon 865 / Adreno 650, Shared Memory: 32 KB):
  - Whisper Tiny (GPU Vulkan): CRASH (Pipeline -13 without -nfa, DeviceLost with -nfa)
  - Whisper Tiny (CPU NEON 4-threads): 1.217s (100% Reliable, 6x faster than S25 GPU)

#### 3. Recommended Upstream Actions
1. In ggml-vulkan.cpp: Reject GGML_OP_FLASH_ATTN_EXT if properties.limits.maxComputeSharedMemorySize < 49152.
2. In whisper.cpp: Automatically fall back to standard attention (params.flash_attn = false) when Adreno 6xx devices are detected.
3. For Adreno 6xx users: Strongly recommend using CPU NEON (-ng) or OpenCL backend.

Patch Branch: uno-km/whisper.cpp:fix/vulkan-flash-attn-adreno6xx-fallback
```

---

## 7. 피드백 및 커뮤니티 의견 (Maintainer & Community Feedback)
- upstream 유사 이슈(`#1583`, `#1822`, `llama.cpp#6541`)에서 Snapdragon 865/855 기기를 사용하는 모바일 개발자들이 동일한 `ErrorUnknown (-13)` 및 `DeviceLost` 에러를 겪고 있음을 확인.
- 실측치 데이터와 원인 분석을 통해 구형 Adreno GPU 사용자를 위한 명확한 하드웨어 가이드라인 제시.

---

## 8. 연관 이슈 및 파생 PR (Related Issues & Derivative Work)
- `ggml-org/whisper.cpp#1583`: Adreno Vulkan pipeline creation crash
- `ggml-org/whisper.cpp#1822`: ErrorUnknown -13 on mobile GPUs
- `ggml-org/llama.cpp#6541`: Qualcomm Adreno shared memory tiling limits
- `ggml-org/llama.cpp#7192`: DeviceLost during Vulkan queue submission on legacy drivers
"""
    }
]

# Read existing seed_posts.js
target_file = 'c:/Users/GAME/Desktop/uno-km/dev/uno-km/api/seed_posts.js'
with open(target_file, 'r', encoding='utf-8') as f:
    code = f.read()

# Parse existing posts by stripping JS wrapper
prefix_match = re.search(r'export\s+const\s+SEED_POSTS\s*=\s*\[', code)
if not prefix_match:
    raise ValueError('Could not find SEED_POSTS array start')

# Find closing bracket
suffix_idx = code.rfind('];')
if suffix_idx == -1:
    raise ValueError('Could not find SEED_POSTS array end')

json_text = code[prefix_match.end() - 1 : suffix_idx + 1]
existing_posts = json.loads(json_text)

# Filter out existing posts if IDs overlap
existing_ids = {p.get('id') for p in existing_posts}
filtered_existing = [p for p in existing_posts if p.get('id') not in {48, 49, 50, 51}]

# Combine
all_posts = filtered_existing + POSTS

# Format nicely
output_code = '// dev/uno-km/api/seed_posts.js - Official SSOT Seed Posts for AMEVA Labs\n'
output_code += '// Auto-generated by AMEVA Toolchain. Governed by Meritocracy.\n\n'
output_code += 'export const SEED_POSTS = ' + json.dumps(all_posts, ensure_ascii=False, indent=2) + ';\n'

with open(target_file, 'w', encoding='utf-8') as f:
    f.write(output_code)

print(f'Successfully updated seed_posts.js! Total posts: {len(all_posts)}')
print('Added posts: 48, 49, 50, 51 under research-opensource')
