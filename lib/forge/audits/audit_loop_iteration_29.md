# 🛡️ [Adversarial Hardening Loop - Task Dossier: Iteration 29]
> **Task ID**: `audit_loop_iteration_29`  
> **Target Subsystem**: Special Mathematical Functions & Probabilistic Distribution Suite (`packages/forge-py/src/forge/special.py`, `__init__.py`)  
> **Timestamp**: 2026-08-20  

---

## 1. 어떤 게 지적되었는지 / 취약한지 (Vulnerabilities & Findings)
* **결함 요약**: PyTorch 호환 특수 수학 함수 서브모듈 `forge.special` 부재 (`erf`, `erfc`, `erfinv`, `gammaln`, `loggamma`, `digamma`, `psi`, `expm1`, `log1p`, `expit`, `logit`, `sinc`, `i0`, `xlogy`).
* **왜 취약한가**:
  1. GELU 활성화 함수의 수학적 근간인 `erf`, 변분 오토인코더(VAE), 디퓨전 모델(DDPM, Flow Matching, Score-based models), 가우스 프로세스, 감마/디리클레 확률 분포, 베이지안 딥러닝에 필수적인 특수 함수가 누락되어 있었습니다.
  2. `erf`, `erfc`, `erfinv`, `expm1`, `log1p`, `xlogy`, `gammaln`에 대한 Autograd 역방향 수치 미분 경로가 없어 확률적 모델링 및 극소값 수치 안정성 계산이 불가능했습니다.

---

## 2. 어떻게 수정했는지 / 왜 그렇게 수정했는지 (Implementation & Rationale)
* **수정 내역**:
  1. **`ErfFunction`, `ErfcFunction`, `ErfinvFunction` 구현**:
     - 오차 함수, 여오차 함수, 역오차 함수 순전파 및 $d/dx \text{erf}(x) = \frac{2}{\sqrt{\pi}} e^{-x^2}$ 등 100% Autograd 역전파 지원.
  2. **`GammalnFunction` & `digamma`/`psi` 구현**:
     - 로그 감마 함수 및 Digamma 함수 계산, $d/dx \ln \Gamma(x) = \psi(x)$ 미분 지원.
  3. **`Expm1Function` & `Log1pFunction` 구현**:
     - 0 근처에서 수치 정밀도를 보장하는 $e^x - 1$ 및 $\ln(1 + x)$ 순전파 및 역전파 완비.
  4. **`expit` & `logit` 구현**:
     - 표준 시그모이드 및 역시그모이드(Logit) 변환 지원.
  5. **`sinc` & `i0` 구현**:
     - 정규화된 Sinc 함수 및 0차 변형 1종 베셀 함수($I_0$) 지원.
  6. **`XlogyFunction` 구현**:
     - $x = 0$ 특이점을 0으로 안전하게 우회하는 $x \ln(y)$ 크로스 엔트로피/KL 다이버전스 유틸리티 및 역전파 지원.
  7. **최상위 모듈 및 함수 노출**:
     - `forge.special` 서브패키지 및 `forge.erf`, `forge.erfc`, `forge.erfinv`, `forge.expm1`, `forge.log1p`, `forge.sinc` 등록.

---

## 3. 빅테크는 어떻게 하고 있는지 (Big Tech Comparative Analysis)
* **Meta PyTorch (`torch.special`, `torch.erf`, `torch.log1p`)**:
  - 확률 분포 샘플링, VAE 재매개변수화, GELU 및 베이즈 추론의 핵심 수학 표준.
* **Google JAX (`jax.scipy.special`) & SciPy (`scipy.special`)**:
  - 과학 계산 및 미분 가능한 확률적 머신러닝의 표준 수학 라이브러리.

---

## 4. 그럼 우리는 어떤 걸 채택/노선을 가야 하는지 (Adopted Strategy & Route)
* **AMEVA-Forge 채택 노선**: **PyTorch 1:1 표준 Differentiable Special Mathematical Functions Engine**
* **선정 사유**: 디퓨전 모델, VAE, 베이지안 딥러닝 및 과학 시뮬레이션을 브라우저 및 온디바이스에서 정밀하게 실행하기 위함임.

---

## 5. 영향도 분석 (Impact Analysis)
* **생성 모델 및 확률 분포**: Diffusion, VAE, Normalizing Flow, 가우스 프로세스 파이프라인 완벽 지원.
* **수치 안정성**: `expm1`, `log1p`, `xlogy`를 통한 언더플로우/오버플로우 방지.

---

## 6. 그랬더니 어떤 긍정적 효과가 있을지/있는지 (Positive Outcomes & Proof)
1. **특수 수학 함수 및 확률 분포 파이프라인 완비**: `forge.special` 서브패키지 100% 작동.
2. **테스트 검증 통과**: `test_fuzz_special_functions_suite` 포함 **291개 전체 단위 테스트 100% All-Pass**.
