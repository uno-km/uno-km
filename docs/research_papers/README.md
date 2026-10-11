<!--
  SPDX-License-Identifier: Apache-2.0 OR Commercial-License
  Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
-->

# AMEVA Open-Source Foundation 공식 기술 연구 백서 아카이브
### Sovereign On-Device AI Silicon, Compiler & Low-Level Hardware Research

본 디렉터리는 AMEVA 및 @uno-km이 주관하는 모바일 실리콘, Vulkan SPIR-V 컴파일러, Bionic libc, 극저비트 신경망 및 8대 모달리티 실기기 벤치마크에 관한 **공식 기술 연구 백서(Technical Whitepapers) 단일 진실 공급원(SSOT) 아카이브**입니다.

모든 문서는 시뮬레이션이나 책상머리 이론이 아닌, **실제 상용 스마트폰(Galaxy S25, S21, A35, S20) 물리 단말기에서 직접 겪은 장애 포렌식과 디버깅, 실측 벤치마크(Ground Truth)**를 바탕으로 작성되었습니다.

---

## 1. 공식 연구 백서 색인 (Official Research Whitepaper Index)

| 일련번호 | 백서 제목 (Title) | 연구 범주 및 대상 기기 | 핵심 해결 내용 | 전문 링크 |
| :--- | :--- | :--- | :--- | :---: |
| **AOSF-TR-2026-FLEET-03** | **2026 모바일 플릿 하드웨어 8대 모달리티 전수 실측 대백서** | 실기기 벤치마크 (S25, S21, A35, S20) | Z-Image Turbo 60억 DiT 완주, Whisper 발열 16% 냉각, Piper TTS sub-80ms 발화, 화자 분리, 1.58비트 LLM 실측 | [전문 보기](whitepaper_real_device_fleet_benchmarks_modalities.md) |
| **AOSF-TR-2026-BITNET-02** | **ARM64 온디바이스 1.58비트 LLM의 삼진 수치 붕괴(Word Salad) 결함 원인 규명 및 다이나믹 활성화 함수 엔진 구현 실증** | 수학적 포렌식 / C++ 커널 (S25, A53, A35) | `(b & 3) - 1` 역양자화 수식 오역 규명, 텐서 스케일 복원, Squared ReLU vs SwiGLU 다이나믹 디스패처 (Microsoft PR #551/#624/#633 머지) | [전문 보기](whitepaper_arm64_bitnet_ternary_collapse_and_dynamic_activation.md) |
| **AOSF-TR-2026-BITNET-03** | **마이크로소프트 BitNet 글로벌 오픈소스 협업 포렌식: CMake 아키텍처 누락 결함 규명과 ARM64 Neoverse-N1 크로스플랫폼 안전 격리 실증** | 글로벌 업스트림 / 크로스플랫폼 컴파일러 (Neoverse-N1, S25) | 마이크로소프트 본진 `src/CMakeLists.txt` 순차 덮어쓰기 누락 결함 규명, CMake PARENT_SCOPE 및 ARM64 조건부 안전 격리 (PR #633 커밋 `899b738`) | [전문 보기](whitepaper_arm64_bitnet_pr633_upstream_crossplatform_forensics.md) |
| **AOSF-TR-2026-GPU-01** | **Qualcomm Adreno 650 GPU의 Vulkan 수치 붕괴 결함 원인 규명 및 OpenCL 우회 가속 파이프라인 구현 실증** | 하드웨어 결함 포렌식 (Galaxy S20) | 퀄컴 구형 드라이버 SPIR-V 컴파일러 Denormal 버그 규명, Bionic 링커 OpenCL 우회 및 CPU NEON(42.9 t/s) 스마트 라우팅 | [전문 보기](whitepaper_s20_adreno650_vulkan_defect_and_opencl_bypass.md) |
| **AOSF-TR-2026-TTS-01** | **[Vol. 20] 플래그십 모바일(Snapdragon 8 Elite) 온디바이스 SOTA 음성 합성 한계 및 발화 무결성 실패 사례 포렌식 연구** | 신경망 발화 무결성 / TTS 포렌식 (Galaxy S25) | ChatTTS 한글 [UNK] 붕괴 및 EOS 환각 루프, CosyVoice 2 토큰 드리프트, F5-TTS 22층 DiT 역확산 연산 폭주(9분 22초) 규명 | [전문 보기](whitepaper_s25_ondevice_sota_tts_failure_forensics.md) |
| **AOSF-TR-2026-MALI-DRIVER-04** | **Mali GPU 드라이버의 명령 버퍼 메모리 누적 결함 규명 및 유계 슬라이딩 윈도 재활용 구조 구현 실증** | 드라이버 메모리 포렌식 / Vulkan 런타임 (A35, A53, S21, 대조 S25, S20) | `vkCmdDispatch`당 약 100 KB 드라이버 메모리가 명령 버퍼 해제까지 유지됨을 절제 실험으로 규명(디스크립터 셋은 원인 아님), 제출별 펜스, 명령 버퍼 재기록, 미완료 4개 상한 도입, 실험 RSS 3,159 -> 121 MiB, Kokoro 26초 발화 Mali 3종 완주 및 품질 게이트 통과 (커밋 `084d513`) | [전문 보기](whitepaper_mali_command_buffer_exhaustion_and_bounded_sliding_window_recycling.md) |

---

## 2. 엔지니어링 거버넌스 및 전략 원칙

1. **오픈 인터페이스 vs 비공개 코어의 분리 (Open Interface, Closed Core)**:
   - 생태계 표준 규격 호환성 및 업스트림 버그 수정 패치(Microsoft BitNet, whisper.cpp 등)는 오픈소스로 공개하여 글로벌 선행 기술 지위를 공고히 합니다.
   - 핵심 성능을 결정짓는 독자 분산 스케줄러, 저수준 메모리 풀링, C-ABI 바이너리는 사전 컴파일된 바이너리 또는 프라이빗 코어로 영구 격리합니다.
2. **라이선스 전략 (Defensive Licensing)**:
   - 단순 Apache-2.0의 빅테크 무단 상업 도용을 차단하기 위해 AGPL-3.0, BSL, 듀얼 라이선스 모델을 전략적으로 채택합니다.
3. **SPDX 헤더 및 저작권 명시**:
   - `Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.` 식별자를 전수 배치하여 저작권을 엄격히 수호합니다.
