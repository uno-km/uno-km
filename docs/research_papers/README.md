# AMEVA Open-Source Foundation Research Papers (기술 연구 백서)

본 디렉터리는 AMEVA Open-Source Foundation (AOSF) 및 @uno-km 엔지니어링 그룹이 주관하는 모바일 실리콘, Vulkan SPIR-V, Bionic libc, 극저비트 신경망 아키텍처에 관한 공식 학술 기술 백서(Technical Whitepapers) 및 연구 모노그래프(Research Monographs)를 보관하는 단일 진실 공급원(SSOT) 아카이브입니다.

---

## 공식 연구 백서 색인 (Official Research Whitepaper Index)

| 일련번호 (Series ID) | 발행 일자 | 백서 제목 (Title) | 연구 범주 | 핵심 대상 아키텍처 및 하드웨어 | 전문 링크 |
| :--- | :---: | :--- | :--- | :--- | :--- |
| **AOSF-TR-2026-BITNET-TERNARY-02** | 2026-10-01 | **ARM64 온디바이스 1.58비트 LLM의 삼진 수치 붕괴(Word Salad) 결함 원인 규명 및 다이나믹 활성화 함수 엔진 구현 실증** | 실증 연구 / 문제 해결형 연구 / 사례 연구 | ARM64 NEON (`asimddp`), Qualcomm Oryon (S25), Samsung Exynos 1380 (A35), Exynos 1280 (A53) | [전문 보기](whitepaper_arm64_bitnet_ternary_collapse_and_dynamic_activation.md) |
| **AOSF-TR-2026-LLAMACPP-ADRENO650-01** | 2026-09-29 | **Qualcomm Adreno 650 GPU의 Vulkan 수치 붕괴 결함 원인 규명 및 OpenCL 우회 가속 파이프라인 구현 실증** | 실증 연구 / 하드웨어 결함 포렌식 | Qualcomm Snapdragon 865, Adreno 650 GPU, Vulkan SPIR-V vs OpenCL | [전문 보기](whitepaper_s20_adreno650_vulkan_defect_and_opencl_bypass.md) |

---

## 3대 연구 방법론 원칙 (Methodology)

1. **실증 연구 (Empirical Research)**:
   - 가설이나 이론적 추정에 머무르지 않고, 실제 상용 물리 하드웨어(Galaxy S25, Galaxy A53, Galaxy A35, Galaxy S20 등)에서 직접 계측한 정밀 실측치(Latency, tok/s, 메모리 소비량, 소프트맥스 로짓 및 발화 로그)를 기반으로 입증합니다.
2. **사례 연구 (Case Study)**:
   - 현장에서 부딪힌 특수한 런타임 결함(수치 붕괴, SPIR-V 드라이버 크래시, 메모리 누수)에 대해 가설 수립 및 기각의 단계적 실패 궤적과 실무적 통찰을 투명하게 공개합니다.
3. **문제 해결형 연구 (Problem-Solving & Implementation)**:
   - 문제를 제기하는 데 그치지 않고 저수준 수학적 역양자화 수식, 텐서 정렬, C++ 네이티브 커널 및 다이나믹 디스패처 구현 코드를 통해 재현 가능한 완치 솔루션을 제공합니다.

---

## 인용 규격 (Citation)

```bibtex
@techreport{kim2026bitnet_ternary_collapse,
  title={Root Cause Analysis of Ternary Numerical Collapse (Word Salad) in ARM64 On-Device 1.58-bit LLMs and Implementation of Dynamic Activation Engine for Mobile Fleet Inference},
  author={Kim, Eunho},
  institution={AMEVA Open-Source Foundation},
  number={AOSF-TR-2026-BITNET-TERNARY-02},
  year={2026},
  month={October},
  url={https://uno-km.vercel.app/labs/?menu=research-papers}
}
```
