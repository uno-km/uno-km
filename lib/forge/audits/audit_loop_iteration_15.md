# 🛡️ [Adversarial Hardening Loop - Task Dossier: Iteration 15]
> **Task ID**: `audit_loop_iteration_15`  
> **Target Subsystem**: Numerical Testing & Predicate Inspection Suite (`packages/forge-py/src/forge/ops.py`, `tensor.py`, `__init__.py`)  
> **Timestamp**: 2026-08-20  

---

## 1. 어떤 게 지적되었는지 / 취약한지 (Vulnerabilities & Findings)
* **결함 요약**: 부동소수점 오차 검증 및 무한/결측치 진단 필수 연산자인 `isnan`, `isinf`, `isfinite`, `isclose`, `allclose`, `any`, `all` 부재.
* **왜 취약한가**:
  1. 모델 학습 및 디버깅 시 그래디언트 폭주나 NaN/Inf 발산을 실시간 탐지하는 `torch.isnan(t)` 및 `torch.isfinite(t)`가 없어 결측치 진단이 불가능했습니다.
  2. 회귀 테스트 및 가중치 전이 검증 시 허용 오차($	ext{atol}, 	ext{rtol}$) 기반의 동치 비교를 수행하는 `torch.allclose`와 `torch.isclose`가 누락되어 있었습니다.

---

## 2. 어떻게 수정했는지 / 왜 그렇게 수정했는지 (Implementation & Rationale)
* **수정 내역**:
  1. **부동소수점 진단 연산자 구현**:
     - `isnan(input)`, `isinf(input)`, `isfinite(input)` 불리언 마스크 연산자 신설.
  2. **수치 오차 검증 연산자 구현**:
     - `isclose(input, other, rtol, atol, equal_nan)`: $|input - other| \le atol + rtol \cdot |other|$ 원소별 불리언 텐서 반환.
     - `allclose(input, other, rtol, atol, equal_nan)`: 전체 원소 일치 여부를 파이썬 `bool`로 반환.
  3. **다차원 불리언 축소 연산자 구현**:
     - `any_op(input, dim, keepdim)`, `all_op(input, dim, keepdim)` 및 `forge.any`, `forge.all` 별칭 제공.
  4. **`Tensor` 인스턴스 메서드 및 최상위 API 노출**:
     - `t.isnan()`, `t.isinf()`, `t.isfinite()`, `t.isclose()`, `t.allclose()`, `t.any()`, `t.all()` 완비.

---

## 3. 빅테크는 어떻게 하고 있는지 (Big Tech Comparative Analysis)
* **Meta PyTorch (`torch.isnan`, `torch.isclose`, `torch.allclose`, `torch.all`, `torch.any`)**:
  - 단위 테스트, 학습 중 수치 안정성 검사, 및 불리언 마스크 필터링의 핵심 표준으로 채택.
* **NumPy (`np.isclose`, `np.allclose`, `np.isnan`)**:
  - IEEE-754 부동소수점 규격 준수.

---

## 4. 그럼 우리는 어떤 걸 채택/노선을 가야 하는지 (Adopted Strategy & Route)
* **AMEVA-Forge 채택 노선**: **PyTorch 1:1 표준 Predicate & Floating-Point Inspection Engine**
* **선정 사유**: 브라우저 기반 WebGPU 훈련 시 가중치 폭주 및 수치 안정성 검증을 0의 외부 라이브러리 의존성으로 완벽 수행하기 위함임.

---

## 5. 영향도 분석 (Impact Analysis)
* **모델 신뢰성 검증**: PyTorch $\leftrightarrow$ AMEVA-Forge 가중치 1:1 일치 여부 정합성 검증 가능.
* **불리언 필터링**: `where` 연산자와 결합하여 조건부 텐서 마스킹 완벽 지원.
* **안전 진단**: 실시간 학습 파이프라인에서 NaN 발생 즉시 조기 경보 가능.

---

## 6. 그랬더니 어떤 긍정적 효과가 있을지/있는지 (Positive Outcomes & Proof)
1. **수치 진단 및 검증 도구 완비**: PyTorch 호환 `allclose`/`isclose`/`isnan` 100% 작동.
2. **테스트 검증 통과**: `test_fuzz_predicate_inspection_isnan_isclose_allclose` 포함 **277개 전체 단위 테스트 100% All-Pass**.
