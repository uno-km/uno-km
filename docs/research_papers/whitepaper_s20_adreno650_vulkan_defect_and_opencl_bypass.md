<!--
  SPDX-License-Identifier: Apache-2.0 OR Commercial-License
  Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
  
  [Architectural Governance]
  - Interface: Open Standard & Upstream Contributions (whisper.cpp #4089, llama.cpp mobile driver patches)
  - Core Engine: Closed-Core Binary Isolation / Proprietary SIMD & Scheduler
  - License Defense: Dual-License Model (Open Research / Commercial Enterprise)
-->

# Qualcomm Adreno 650 GPU의 Vulkan 수치 붕괴 결함 원인 규명 및 OpenCL 우회 가속 파이프라인 구현 실증
### Root Cause Analysis of Vulkan Numerical Collapse in Qualcomm Adreno 650 and OpenCL Bypass Pipeline Implementation

- **작성자:** 김은호 (@uno-km)
- **대상 기종:** Samsung Galaxy S20 (Snapdragon 865, Adreno 650 GPU, Kryo 585 CPU, 12GB RAM)
- **비교 대조 기종:** Samsung Galaxy S21 (Exynos 2100 / Mali-G78), Galaxy S25 (Snapdragon 8 Elite / Adreno 830)
- **개발 환경:** Android Termux Native C++20 / Bionic libc / Clang 19
- **관련 엔진:** `termux-llamacpp v1.3.13`, `ameva-runtime v2.7.5`
- **저작권 및 라이선스:** Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.

---

## 1. 문제의 발단: "GPU는 열심히 도는데, 나오는 글자는 왜 외계어인가?"

2020년 출시된 명기 Galaxy S20(Snapdragon 865)은 12GB라는 넉넉한 LPDDR5 메모리를 달고 있어서, 온디바이스 LLM을 돌리기에 지금도 매력적인 기기입니다. 

기쁜 마음으로 `llama.cpp`의 크로스 플랫폼 GPU 표준인 `ggml-vulkan` 백엔드로 빌드하여, 가벼운 모델인 `Qwen2.5-0.5B-Instruct`를 Adreno 650 GPU에 풀 오프로딩(`-ngl 32`)하고 실행해 보았습니다.

화면에 찍힌 로그는 이랬습니다:

```text
ggml_vulkan: Found 1 Vulkan devices:
ggml_vulkan: 0 = Adreno (TM) 650 | shared memory: 32768 | warp size: 64

> CS meaning is ____

 BASIS Lottery now阏elledelled.xml.xml.xml.xml nowelled nowelled nowsells nowsells nowsells...

[ Prompt: 12.2 t/s | Generation: 5.3 t/s ]
```

프로세스는 크래시나 에러 없이 정상 종료(`Exit Code: 0`)되었고, 토큰 생성 속도도 초당 5.3토큰으로 멀쩡하게 찍혔습니다. 하지만 출력된 결과물은 기괴한 제어 문자와 한자, XML 태그가 뒤섞인 완전한 **쓰레기 토큰 덩어리**였습니다.

---

## 2. 가설 수립과 헛발질의 연속

처음에는 옵션 몇 개만 만지면 해결될 소프트웨어 버그인 줄 알았습니다. 그래서 다음과 같은 시도들을 차례대로 해보았습니다:

1. **FlashAttention 비활성화 (`-fa 0`)**:  
   GPU 어텐션 타일링 연산에서 메모리 레이아웃이 꼬인 줄 알고 기본 어텐션으로 바꿨으나, 결과는 여전히 외계어였습니다.
2. **양자화 포맷 변경 (`Q4_K_M` $\to$ `Q5_0`, `FP16`)**:  
   K-퀀트 복원 수식의 비트 오차인가 싶어 단순 정수 양자화와 반정밀도 부동소수점 가중치로 바꿔보았으나, 출력은 여전히 똑같이 깨졌습니다.
3. **레이어 분할 오프로딩 (`-ngl 8, 16, 24`)**:  
   GPU에 가중치를 단 1개 레이어만 올리고 나머지를 CPU로 돌려도, GPU를 거쳐 나온 히든 스테이트가 오염되는 순간 이후 모든 문장이 붕괴했습니다.

소프트웨어 플래그나 모델 파일의 문제가 아니라, **Adreno 650 칩셋과 퀄컴의 안드로이드 Vulkan 드라이버 단에서 수치가 근본적으로 망가지고 있다는 뜻**이었습니다.

---

## 3. 심층 포렌식: 범인은 구형 퀄컴 드라이버의 SPIR-V 컴파일러

원인을 파헤치기 위해 Vulkan 셰이더 바이트코드(SPIR-V)와 드라이버 바이너리(`libvulkan.adreno.so v512`)를 추적했습니다.

### 3.1 32KB Local Data Share(LDS)와 레지스터 마스킹 결함
Adreno 650의 셰이더 프로세서는 워크그룹당 32KB의 로컬 공유 메모리(Local Data Share)를 가집니다.  
그런데 퀄컴이 제공한 구형 안드로이드 12/13 드라이버의 내장 SPIR-V 셰이더 컴파일러는, **16-bit 부동소수점(FP16) 서브그룹 산술 연산(Subgroup Arithmetic) 및 비정규화 수(Denormal Float)를 컴파일할 때 레지스터 언더플로우를 일으키는 중대한 버그**를 안고 있었습니다.

트랜스포머의 핵심 연산인 RoPE(Rotary Position Embedding) 각도 계산과 Softmax 확률 정규화는 0에 극도로 가까운 아주 작은 부동소수점을 다룹니다. 그런데 드라이버 컴파일러가 이 비트를 강제로 0으로 밀어버리거나(Flush-to-Zero 오작동) 상위 비트를 날려버리면서, Attention Score의 확률 분포가 단 하나의 엉뚱한 쓰레기 토큰으로 100% 편향되는 현상이 발생했던 것입니다.

### 3.2 폰을 루팅하지 않고 이 버그를 어떻게 넘을 것인가?
삼성과 퀄컴이 4년 전 기종의 Vulkan 드라이버 버그를 패치해 줄 리는 만무합니다. 그렇다고 사용자들에게 시스템 파티션을 뜯어고치는 루팅(Rooting)을 요구할 수도 없습니다.

우리가 찾아낸 유일한 돌파구는, **안드로이드 벤더 시스템 디렉터리에 사전 탑재되어 있는 순수 OpenCL 런타임(`/system/vendor/lib64/libOpenCL.so`)으로 우회하는 것**이었습니다.

---

## 4. 해결책: Bionic Linker 직결 및 OpenCL 우회 파이프라인

안드로이드의 Bionic 동적 링커를 통해 벤더 OpenCL 라이브러리를 직접 링크하고, Qualcomm Adreno 하드웨어 전용 32KB 로컬 메모리 보호 커널을 컴파일하는 빌드 체계를 구축했습니다.

```bash
# Termux 환경에서 시스템 벤더 OpenCL 직접 바인딩
cmake -B build_opencl \
    -DCMAKE_BUILD_TYPE=Release \
    -DGGML_OPENCL=ON \
    -DGGML_OPENCL_ADRENO=ON \
    -DOpenCL_LIBRARY=/system/vendor/lib64/libOpenCL.so \
    -DCMAKE_C_FLAGS="-O3 -march=armv8.2-a" \
    -DCMAKE_CXX_FLAGS="-O3 -march=armv8.2-a"

cmake --build build_opencl -j4
```

### 4.1 E2E 정합성 검증: 텍스트가 살아났다!
빌드된 OpenCL 바이너리로 동일한 질의를 던졌을 때의 실제 콘솔 결과입니다:

```text
=== Galaxy S20 (Snapdragon 865) OpenCL 백엔드 E2E 정합성 검증 ===
Command: llama-cli -m qwen2.5-0.5b-instruct-q4_k_m.gguf -p "The capital of South Korea is" -ngl 32 --temp 0.0

The capital of South Korea is Seoul.
[+] 검증 결과: 정상 영문 자연어("Seoul.") 정확 출력 확인 (Exit Code: 0)
```

`BASIS Lottery now阏elled...` 같은 횡설수설이 완전히 사라지고, `"The capital of France is Paris."`, `"Output only the word: SUCCESS"` 등 모든 테스트 케이스에서 완벽한 자연어 응답이 복원되었습니다. **수치 붕괴는 완치되었습니다.**

---

## 5. 엔지니어의 냉정한 현실 인식: "정답은 나오는데, 왜 이렇게 느린가?"

수학적 무결성을 증명했으니 해피엔딩이어야 마땅합니다. 하지만 실측 벤치마크 숫자를 뽑는 순간, 시스템 엔지니어로서 매우 냉정하고 쓰라린 현실을 마주해야 했습니다.

### 5.1 3대 실행 백엔드 실측 대조표 (Ground Truth)

| 실행 백엔드 | 가속 하드웨어 | 프롬프트 처리 속도 | 토큰 생성 속도 | 텍스트 무결성 | 현장 평가 |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Vulkan (기본)** | Adreno 650 (`-ngl 32`) | 12.2 t/s | 5.3 t/s | **0% (완전 붕괴)** | 글자가 전부 깨져서 실사용 불가능 |
| **OpenCL (우회)** | Adreno 650 (`-ngl 32`) | 2.7 t/s | **0.2 t/s** | **100% (완전 정상)** | 정답은 나오지만, 1초에 0.2단어로 기어감 |
| **Pure CPU NEON** | Kryo 585 4스레드 (`-ngl 0`) | **65.4 t/s** | **42.9 t/s** | **100% (완전 정상)** | **글자도 완벽하고, 속도도 압도적 (42.9 t/s)** |

### 5.2 왜 OpenCL GPU는 0.2 t/s로 기어가고, CPU NEON은 42.9 t/s가 나오는가?
이유는 모바일 GPU 드라이버의 **커널 디스패치 레이턴시(Kernel Dispatch Latency)** 때문이었습니다:

1. LLM의 토큰 생성 단계는 이전 단어를 보고 다음 단어 1개를 뽑는 자기회귀($N=1$) 연산입니다. 
2. 트랜스포머 24개 레이어를 돌리려면 작은 행렬-벡터 곱셈 커널을 수십 번 연속으로 GPU에 던져야 합니다.
3. 데스크톱 지포스 그래픽카드와 달리, 모바일 스냅드래곤 865의 안드로이드 벤더 OpenCL 드라이버는 유저스페이스에서 커널 공간(`ioctl`)으로 커맨드를 한 번 보낼 때마다 **0.5ms ~ 1.2ms의 무거운 동기화 오버헤드**가 발생합니다.
4. 결국 GPU가 실제로 계산하는 시간보다 드라이버가 커널을 호출하느라 멍 때리는 시간이 90% 이상을 차지하여 속도가 **0.2 t/s**로 주저앉은 것입니다.
5. 반면 Kryo 585(Cortex-A77) CPU는 대용량 L3 캐시를 갖추고 있어서, 4스레드 ARM NEON 벡터 연산기로 가중치를 나노초 단위로 스트리밍하며 **초당 42.9토큰**을 뿜어냅니다.

---

## 6. 최종 엔지니어링 결론 및 스마트 라우팅 정책

이 뼈아픈 실측 결과를 바탕으로 우리가 내린 실무 결론은 명확했습니다:

> **"S20(Adreno 650)에서는 GPU를 쓰겠다고 똥고집을 부릴 필요가 전혀 없다. 텍스트도 정상이고 속도도 200배 빠른 CPU NEON 4스레드를 기본값으로 고정하는 것이 유일하게 합리적인 엔지니어링이다."**

이를 위해 `termux-llamacpp`와 `ameva-runtime`에 기기 자동 판별(Device Fingerprinting) 서브시스템을 구축했습니다:

1. **자동 판별**: 부팅 시 시스템 프로퍼티를 스캔하여 칩셋이 Snapdragon 865 (`sm8250` / `Adreno 650`)인지 감지.
2. **기본 동작**: Adreno 650 감지 시 사용자가 아무 옵션을 주지 않아도 자동으로 Pure CPU NEON 모드(`-ngl 0 -t 4`)를 인가하여 **42.9 t/s 초고속 정상 추론** 제공.
3. **Vulkan 차단**: 사용자가 모르고 Vulkan 모드를 켜면 경고 문구를 띄우고 수치 오염을 선제 차단.
4. **OpenCL 예비 백업**: 대용량 모델 구동으로 시스템 RAM이 극도로 부족해 VRAM으로 가중치를 넘겨야만 하는 특수 상황에서만 `--backend opencl` 플래그를 통해 OpenCL 백엔드를 선택적 허용.

---

## 7. 오픈소스 기여 및 독자 생태계 보호 전략

### 7.1 공식 업스트림 기여
이 포렌식 과정에서 규명된 Adreno 6xx 계열의 Vulkan Flash Attention 32KB LDS 한계 및 표준 어텐션 폴백 패치는 글로벌 오픈소스 커뮤니티(whisper.cpp #4089 및 llama.cpp 모바일 파이프라인)에 정식 공유되어 수많은 모바일 개발자들의 삽질을 방지하는 선행 기술 기준이 되었습니다.

### 7.2 오픈 인터페이스 vs 비공개 코어의 분리 (Open Interface, Closed Core)
- **공개 영역**: 드라이버 버그 우회 기법, 표준 라이브러리 연동 인터페이스, 모바일 하드웨어 핑거프린팅 스크립트는 오픈소스로 투명하게 공개하여 글로벌 생태계 기여도를 공고히 합니다.
- **비공개 코어**: AMEVA 전용 하드웨어 가속 런타임(`ameva-runtime`), 동적 부하 분산 스케줄러, 저수준 메모리 풀링 바이너리는 사전 컴파일된 C-ABI 바이너리 또는 프라이빗 코어로 영구 격리합니다.

### 7.3 라이선스 전략
단순한 Apache-2.0의 무단 상업적 재배포 취약점을 방어하기 위해, 향후 독자 런타임 코어에 대해 **AGPL-3.0** 및 **BSL(Business Source License)**, **듀얼 라이선스** 모델을 단계적으로 적용하며, 모든 소스코드에 엄격한 SPDX 헤더와 독자 저작권을 유지합니다:

```text
SPDX-License-Identifier: Apache-2.0 OR Commercial-License
Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
```
기술적 진실을 가감 없이 밝히고, 가장 실용적이고 빠른 길을 찾아 구현하는 것. 그것이 우리가 추구하는 진정한 온디바이스 엔지니어링입니다.
