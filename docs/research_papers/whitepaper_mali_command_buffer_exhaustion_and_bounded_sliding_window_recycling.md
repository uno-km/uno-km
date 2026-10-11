<!--
  SPDX-License-Identifier: Apache-2.0 OR Commercial-License
  Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.

  [Architectural Governance]
  - Interface: Open Standard (Vulkan 1.1 command buffer / fence semantics, ggml backend API)
  - Core Engine: ac_runtime (AMUDA native mobile GPU runtime), commit 084d513
  - License Defense: Dual-License Model (Open Research / Commercial Enterprise)
-->

# Mali GPU 드라이버의 명령 버퍼 메모리 누적 결함 규명 및 유계 슬라이딩 윈도 재활용 구조 구현 실증
### Command Buffer Memory Exhaustion on ARM Mali Drivers and a Bounded Sliding-Window Recycling Scheme in ac_runtime

- **보고서 식별자:** AOSF-TR-2026-MALI-DRIVER-04
- **작성자:** 김은호 (@uno-km)
- **작성일:** 2026-10-11
- **대상 기종:** Samsung Galaxy A35 (Exynos 1380 / Mali-G68), Galaxy A53 (Exynos 1280 / Mali-G68), Galaxy S21 (Exynos 2100 / Mali-G78)
- **비교 대조 기종:** Galaxy S25 (Snapdragon 8 Elite / Adreno 830), Galaxy S20 (Snapdragon 865 / Adreno 650, Mesa Turnip)
- **관련 엔진:** `ameva-compute` 커밋 `084d513` (`src/backend/vulkan/ac_vk_dispatch.cpp`), ggml-ameva 백엔드, Kokoro-82M TTS 어댑터
- **저작권 및 라이선스:** Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.

---

## 0. 요약

Kokoro-82M 음성 합성에서 26초 길이의 발화(t3, 446 음소, GPU 디스패치 29,973회)를 AMEVA GPU 경로로 실행하면 RAM 6~8 GB의 Mali 기기 세 대(A35, A53, S21)에서 프로세스가 강제 종료되었습니다. 같은 입력을 CPU로 실행하면 끝까지 완료되었고, Adreno 기기(S25)는 최대 RSS 1.41 GB로 완료되었습니다.

원인을 분리하기 위해 `ac_runtime` 공개 API만 사용하는 절제(ablation) 실험 프로그램을 작성했습니다. 그 결과 Mali 드라이버는 `vkCmdDispatch` 한 번마다 약 100 KB의 드라이버 메모리를 명령 버퍼에 할당하며, 이 메모리는 장벽(barrier) 유무, 중간 제출(flush) 횟수, 디스크립터 셋 재사용 여부와 무관하게 명령 버퍼가 재설정되거나 해제될 때까지 유지된다는 것을 확인했습니다. 기존 `ac_runtime`은 중간 제출된 명령 버퍼를 그래프의 마지막 펜스가 신호될 때까지 보관했기 때문에, 디스패치 수에 비례해 메모리가 증가했습니다.

`ac_vk_batch_flush`에 제출 단위별 펜스, 완료된 명령 버퍼의 재기록(recycling), 최대 4개의 미완료 제출만 허용하는 유계 윈도를 도입했습니다. 동일 실험 프로그램의 최대 RSS는 3,159 MiB에서 121 MiB로 줄었고(-96.2 %), t3는 세 Mali 기기 모두에서 완료되며 CPU f32 기준 대비 품질 게이트를 통과했습니다. AMEVA 모델 하나만 올린 t3 실행의 최대 RSS는 862~920 MiB입니다. S25에서 교대 측정한 처리 시간에는 측정 오차를 넘는 차이가 없었습니다.

---

## 1. Mali 명령 스트림 누적에 대한 포렌식

### 1.1 증상

| 기기 | t3 AMEVA 실행 결과 (수정 전) | 관측 |
| :--- | :--- | :--- |
| Galaxy A35 | 첫 AMEVA 실행에서 SIGKILL (rc 137), `--gpu-only --reps 1`에서도 동일 | 4초 안에 MemAvailable 2.35 GB -> 0.92 GB |
| Galaxy A53 | 같은 시점에 sshd 연결 소실 | 이후 접속 거부 |
| Galaxy S21 (8 GB) | Termux 세션 재시작 | 여유 메모리 약 3 GB 상태에서 시작 |
| Galaxy S25 (Adreno) | 완료 | `--gpu-only` 최대 VmRSS 1.41 GB |

CPU f32·f16 경로는 A35에서 t3를 완료했습니다. 따라서 모델 자체의 크기가 아니라, GPU 경로가 길이에 비례해 메모리를 더 쓰는 것이 문제였습니다. ggml 그래프 할당기(gallocr)의 버퍼 크기는 CPU와 AMEVA가 같았으므로, 증가분은 ggml-ameva, `ac_runtime`, 또는 Mali 드라이버 안에 있다고 판단했습니다. 강제 종료의 주체가 Android lmkd인지 커널 OOM killer인지는 기록으로 구분하지 못했습니다.

### 1.2 측정 방법

Mali 커널 드라이버(kbase)는 GPU 메모리를 프로세스 VmRSS에 포함하지만, `/proc/self/smaps`의 `/dev/mali0` 매핑은 Rss 0으로 표시합니다. 그래서 `/proc/self/maps`에서 `/dev/mali0` 매핑의 개수와 크기 합을 세고, `/proc/self/status`의 VmRSS를 함께 기록했습니다.

실험 프로그램은 `ac_runtime` 공개 API만 사용합니다. 커널은 ggml-ameva의 `ameva_qmm` f32 변형(64 x 64 행렬, 열 1개)이고, 디스패치 사이에 명시적 장벽을 넣으며, ggml-ameva와 같이 128 디스패치마다 `ac_runtime_batch_flush`로 중간 제출합니다. 변수는 다음 세 가지입니다.

- 바인딩: 모든 디스패치가 같은 범위를 바인딩(`same`, 디스크립터 셋 1개를 캐시에서 재사용) 또는 디스패치마다 다른 오프셋을 바인딩(`unique`, 디스패치마다 새 디스크립터 셋)
- 장벽: 디스패치마다 삽입 또는 생략
- 중간 제출: 128 디스패치마다 또는 없음

### 1.3 결과 (Galaxy A35, 수정 전 런타임)

| 조건 | 디스패치 수 | `/dev/mali0` 매핑 | 매핑 합계 | VmRSS |
| :--- | ---: | ---: | ---: | ---: |
| 시작 시점 | 0 | 34 | 0.3 MiB | 35.5 MiB |
| same, 장벽 있음, 128마다 제출 | 30,000 | 30,504 | 2,988.7 MiB | 3,159.0 MiB |
| unique, 장벽 있음, 128마다 제출 | 30,000 | 30,622 | 3,010.7 MiB | 3,143.0 MiB |
| same, 장벽 없음, 128마다 제출 | 5,000 | 5,114 | 498.5 MiB | 565.7 MiB |
| same, 장벽 있음, 128마다 제출 | 5,000 | 5,114 | 498.5 MiB | 566.2 MiB |
| same, 장벽 있음, 중간 제출 없음 | 5,000 | 5,107 | 497.7 MiB | 560.8 MiB |
| same 30,000회 실행 후 배치 해제 | - | 24,947 | 2,444.3 MiB | 2,580.4 MiB |

### 1.4 해석

1. **디스패치당 약 100 KB:** 매핑 수가 디스패치 수와 1:1로 증가하고, 매핑 하나의 크기는 약 100 KB입니다(2,988.7 MiB / 30,504). 장벽 유무와 중간 제출 여부는 결과를 바꾸지 않았습니다.
2. **디스크립터 셋은 원인이 아님:** 디스패치마다 새 디스크립터 셋을 만든 경우의 증가분은 22 MiB, 셋 하나당 약 0.75 KB입니다. 처음에 의심했던 디스크립터 풀 누적은 측정으로 기각되었습니다.
3. **해제는 명령 버퍼 단위:** 배치를 해제(`vkFreeCommandBuffers`)한 뒤에도 매핑의 약 82 %가 남았습니다. 해제된 메모리는 시스템이 아니라 명령 풀(`VK_COMMAND_POOL_CREATE_RESET_COMMAND_BUFFER_BIT`)로 돌아가며, 같은 풀에서 다음 명령 버퍼를 기록할 때 재사용됩니다.
4. **기존 구조와의 결합:** 수정 전 `ac_vk_batch_flush`는 중간 제출을 펜스 없이(`VK_NULL_HANDLE`) 큐에 넣고, 그 명령 버퍼를 그래프의 마지막 펜스가 신호될 때까지 보관했습니다. 그래서 그래프 하나가 보유하는 드라이버 메모리는 그래프의 디스패치 수에 비례했습니다.

100 KB 안에 무엇이 들어 있는지는 비공개 드라이버이므로 사용자 공간에서 관측할 수 없습니다. 커널마다 크기가 다르다는 점만 확인됩니다. Kokoro의 커널 구성에서는 이전 측정(512 KB 매핑 수 기준)에서 디스패치당 평균 약 38 KB로 추정되었고, 이 경우 t3 한 번에 약 1.1 GB가 그래프 종료까지 유지됩니다. 위 표의 약 3.0 GB는 `ameva_qmm` f32 커널 30,000회에 대한 실험값이며, Kokoro t3의 값이 아닙니다.

---

## 2. 유계 슬라이딩 윈도 재활용 구조

### 2.1 변경 내용 (`ac_vk_batch_flush`, 커밋 `084d513`)

1. **제출 단위별 펜스:** 중간 제출된 명령 버퍼마다 펜스를 하나씩 붙입니다. 펜스는 재사용 목록에서 꺼내고, 비어 있으면 새로 만듭니다.
2. **완료된 명령 버퍼의 재기록:** 중간 제출 시점마다 가장 오래된 제출부터 `vkGetFenceStatus`로 완료 여부를 확인하고, 완료된 명령 버퍼는 예비 목록으로 옮깁니다. 다음 중간 제출은 새 명령 버퍼를 할당하는 대신 예비 명령 버퍼를 다시 기록합니다(`vkBeginCommandBuffer`의 암묵적 재설정, 메모리는 버퍼 안에 유지되어 재사용됨). 펜스는 `vkResetFences`로 재설정해 재사용합니다.
3. **최대 4개의 미완료 제출:** 미완료 중간 제출이 4개를 넘으면, 기록 스레드는 가장 오래된 제출의 펜스를 기다립니다. 기다리는 동안에도 GPU 큐에는 나머지 제출이 남아 있으므로 GPU는 계속 일합니다.
4. **실패는 명시적으로:** 대기가 60초를 넘으면 `AC_ERR_LAUNCH_TIMEOUT`, 장치 손실이면 `AC_ERR_DRIVER_CRASH_OR_LOST`를 반환하고 배치를 중단(aborted) 상태로 둡니다. 이미 큐에 들어간 작업은 기존 배출(drain) 절차로 완료를 기다린 뒤 자원을 반환합니다. 대체 경로로 넘어가지 않습니다.

순서 보장은 바뀌지 않습니다. 나중에 기록된 장벽의 첫 번째 동기화 범위에는 큐의 모든 이전 명령이 포함되고, 마지막 펜스는 이전의 모든 제출 이후에 신호됩니다.

### 2.2 메모리 상한

그래프 하나가 보유하는 명령 버퍼는 최대 5개(미완료 4개와 기록 중 1개)이며, ggml-ameva는 128 디스패치마다 제출하므로 동시에 유지되는 디스패치는 최대 약 640개입니다. 위 실험 커널(디스패치당 약 100 KB)에서는 약 64 MB입니다. 그래프 길이와는 무관합니다.

### 2.3 검토 후 채택하지 않은 대안

| 대안 | 판단 근거 |
| :--- | :--- |
| 디스크립터 풀 상한 | 측정상 셋 하나당 약 0.75 KB로, t3 전체에서도 약 22 MB입니다. 원인이 아닙니다. |
| 중간 제출을 더 자주 수행 | 이전 실험(`AMEVA_FLUSH_MAC=1e6`)에서 메모리가 오히려 0.10 GB 늘었습니다. 제출만으로는 해제되지 않습니다. |
| 그래프마다 `vkTrimCommandPool` | 재활용 후 풀의 최대 사용량이 이미 5개 버퍼로 묶이므로 필요하지 않고, 다음 그래프에서 재할당 비용이 생깁니다. |

---

## 3. 실측 검증

### 3.1 실험 프로그램 (Galaxy A35, 30,000 디스패치, 128마다 제출)

| 조건 | 수정 전 최대 VmRSS | 수정 후 최대 VmRSS | 감소율 | 수정 후 `/dev/mali0` 매핑 |
| :--- | ---: | ---: | ---: | ---: |
| same | 3,159 MiB | 121 MiB | -96.2 % | 815 (일정) |
| unique | 3,143 MiB | 162 MiB | -94.8 % | 933 |

### 3.2 회귀 시험 `test_batch_graph_kat` MEMORY 항목

30,000 디스패치를 128마다 제출하고, 결과 벡터가 정확한지와 2,000번째에서 30,000번째 디스패치 사이의 RSS 증가가 48 MiB 미만인지 확인합니다.

| 기기 | 드라이버 | RSS 증가 | 판정 |
| :--- | :--- | ---: | :--- |
| Galaxy S25 | Adreno 830 | 0.8 MiB | PASS |
| Galaxy S20 | Mesa Turnip (Adreno 650) | 1.3 MiB | PASS |
| Galaxy S21 | Mali-G78 | -1.3 MiB | PASS |
| Galaxy A53 | Mali-G68 | 0.9 MiB | PASS |
| Galaxy A35 | Mali-G68 | -1.5 MiB | PASS |
| Galaxy A35, 수정 전 런타임 | Mali-G68 | +2,932.5 MiB | FAIL |

마지막 행은 같은 시험이 수정 전 런타임에서 실패함을 보여 줍니다. 이 항목은 공식 백엔드 빌드 스크립트(`build_runtime_backend.sh`)의 통과 조건에 포함됩니다.

### 3.3 Kokoro-82M t3 (26.05 s, 29,973 GPU 디스패치)

**메모리 (`--gpu-only`, 예열 1회 + 측정 1회):**

| 기기 | 수정 전 | 수정 후, 모델 2개 상주 (CPU 사본 포함) | 수정 후, AMEVA 모델 1개 (공식 빌드 산출물) |
| :--- | :--- | ---: | ---: |
| Galaxy A35 | 강제 종료 (rc 137) | 1,048 MiB | 883 MiB |
| Galaxy A53 | 세션 소실 | 1,016 MiB | 862 MiB |
| Galaxy S21 | 세션 재시작 | 1,079 MiB | 920 MiB |

AMEVA 모델 1개 열은 패리티 도구가 `--gpu-only`에서 CPU 사본을 올리지 않도록 고친 뒤(`ameva-compute` 커밋 `f56b917`) 공식 빌드 산출물로 측정했습니다. 같은 실행의 RTF는 A35 1.073(코어 0-2), A53 1.383(코어 0-7), S21 0.418입니다.

**품질 (모델 4개 상주, CPU f32를 기준으로 비교, 게이트는 CPU f16 자체 편차의 1.5배):**

| 기기 | AMEVA f16 RTF | AMEVA f16 LSD | AMEVA f16 F0 상대오차 | 길이 불일치 | AMEVA f32 SNR | 최대 RSS | 판정 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | :--- |
| Galaxy A35 | 1.075 | 3.134 dB | 1.4e-4 | 0 | 28.54 dB | 1,765 MiB | PASS |
| Galaxy A53 | 1.405 | 3.135 dB | 1.4e-4 | 0 | 28.57 dB | 1,709 MiB | PASS |
| Galaxy S21 | 0.420 | 3.135 dB | 1.4e-4 | 0 | 28.57 dB | 1,799 MiB | PASS |
| 기준: CPU f16 vs CPU f32 | - | 3.521 dB | 1.8e-3 | 1 | - | - | 게이트 LSD <= 5.28 dB, F0 <= 2.66e-3 |

AMEVA f16은 음소 길이 예측이 CPU f32와 모두 일치했고(길이 불일치 0), CPU f16은 한 음소에서 길이가 달라졌습니다. A35의 RTF는 ssh 세션의 CPU 묶음(A55 코어 0-2) 조건에서 측정한 값입니다.

### 3.4 처리 시간 (Galaxy S25, Kokoro t2, `--gpu-only`, 3회 중 최소값, 같은 분 안에 교대 측정)

| 회차 | 수정 전 런타임 | 수정 후 런타임 | 차이 |
| :--- | ---: | ---: | ---: |
| 1 | 653.0 ms | 655.6 ms | +0.4 % |
| 2 | 656.4 ms | 651.9 ms | -0.7 % |

차이는 측정 오차 범위 안에 있습니다. 이보다 앞선 교대 측정에서는 수정 후가 3.5~4.4 % 느리게 나왔으나, 같은 바이너리로 다시 측정한 위 표에서 수정 전 런타임도 같은 값을 보였으므로 기기 상태의 변화로 판단했습니다. 미완료 제출 상한을 16, 1,000으로 바꾼 실험 빌드와 재활용을 끈 실험 빌드도 같은 범위(648~656 ms)에 있었습니다.

### 3.5 공식 백엔드 빌드 (`scripts/termux/build_runtime_backend.sh`)

| 항목 | 값 |
| :--- | :--- |
| 소스 커밋 | `084d513` |
| 빌드 기기 | Galaxy S21 (Android 15), clang 21.1.8 |
| 대상 번들 | ameva-runtime llama 번들 v2.8.1 (`1d086faf6227`) |
| `libggml-ameva.so` sha256 | `6b953c49197894657255c9a0a45b78063841ac3f053b74b05861d6cc6f203bb3` |
| `libac_runtime.so.2` sha256 | `84d973f2e348ea0d45ec7ae098b354f5191102a8b1556878820ee6b80b4dd478` |
| 내장 시험 | `AMEVA_QMM_CHECK` 516/516, `test_batch_api_kat` 통과, `test_batch_graph_kat` 통과(MEMORY 포함), llama.cpp의 AMEVA0 등록 확인 |

### 3.6 부록: 같은 날의 BitNet 무작위 샘플링 기록 (`ac_bitnet_sample`)

이 기록은 커밋 `526ef78`의 도구로 같은 날 앞서 실행한 것이며, 본 수정의 시험이 아닙니다. 모델은 BitNet b1.58 2B (i2_s), 프롬프트는 "The capital of France is", 온도 1.0과 1.5, top-k 40, top-p 0.95이며 각 기기의 AMUDA GPU 경로(30/30 레이어)로 실행했습니다.

| 기기 | GPU | 첫 토큰 " Paris" 확률 (T=1) | T=1.5에서의 확률 | 생성 속도 (T=1.0) |
| :--- | :--- | ---: | ---: | ---: |
| Galaxy S25 | Adreno 830 | 0.945 | 0.455 | 15.6~17.7 t/s (코어 0-1,4-5) |
| Galaxy S21 | Mali-G78 | 0.944 | 0.453 | 13.2~13.3 t/s |
| Galaxy S20 | Turnip Adreno 650 | 0.939 | 0.436 | 8.3~8.4 t/s |
| Galaxy A53 | Mali-G68 | 0.944 | 0.453 | 5.4 t/s |
| Galaxy A35 | Mali-G68 | 0.944 | 0.453 | 6.9~7.2 t/s (코어 0-2) |

각 기기의 세 표본은 서로 다른 시드에서 서로 다른 문장을 생성했습니다. 같은 Mali 계열 세 기기의 첫 토큰 로짓은 18.56097로 같았고, Adreno 830은 18.36451, Turnip Adreno 650은 18.26815였습니다.

---

## 4. 한계와 남은 과제

1. 디스패치당 드라이버 메모리의 내용과 커널별 크기 차이는 비공개 드라이버 내부이므로 규명하지 못했습니다.
2. 미완료 제출 상한 4는 기기별로 조정하지 않은 고정값입니다. S25 측정에서는 상한 4, 16, 1,000 사이에 차이가 없었습니다.
3. 패리티 도구의 4-모델 실행은 최대 RSS 1.7~1.8 GB를 사용하므로, 여유 메모리가 2.4 GB 미만인 기기에서는 위험합니다. 이 수치는 도구의 비교용 모델 사본 때문이며 제품 경로의 메모리가 아닙니다.
4. 강제 종료의 주체(lmkd 또는 커널 OOM killer)는 확인하지 않았습니다.

---

## 5. 재현 방법

```bash
# 런타임 빌드 + 배치 회귀 시험 (MEMORY 항목 포함)
bash scripts/termux/build_runtime_backend.sh --ggml-dir <b8471 ggml> \
    --bundle-lib ~/.local/share/ameva/current/llamacpp/lib --commit 084d513 --out rb-084d513

# Kokoro t3 메모리 (AMEVA 모델 1개)
ameva_tts_parity --model kokoro-f16.gguf --plugin rb-084d513/libggml-ameva.so \
    --tokens-file t3.tokens --gpu-only --reps 1 --threads 4

# Kokoro t3 품질 (CPU f32 기준)
ameva_tts_parity --model kokoro-f16.gguf --ref-model kokoro-f32.gguf --plugin rb-084d513/libggml-ameva.so \
    --tokens-file t3.tokens --reps 1 --threads 4
```

장시간 실행 전에는 Termux 웨이크락을 잡아야 합니다(`am startservice --user 0 -a com.termux.service_wake_lock com.termux/com.termux.app.TermuxService`). Galaxy S25, A35, A53은 ssh 접속 사이에 백그라운드 작업을 일시 정지시킵니다.
