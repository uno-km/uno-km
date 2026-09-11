# 🛡️ [Adversarial Hardening Loop - Task Dossier: Iteration 14]
> **Task ID**: `audit_loop_iteration_14`  
> **Target Subsystem**: Selection, Sorting & Multi-Output Autograd Engine (`packages/forge-py/src/forge/ops.py`, `autograd.py`, `tensor.py`, `__init__.py`)  
> **Timestamp**: 2026-08-20  

---

## 1. 어떤 게 지적되었는지 / 취약한지 (Vulnerabilities & Findings)
* **결함 요약**: LLM 생성 디코딩(Top-K / Nucleus Sampling) 및 정확도 계산의 핵심인 `topk`, `sort`, `argsort` 부재, 그리고 `Function.apply`의 다중 출력(Tuple Output) 텐서 그래프 연결 시 `AttributeError: 'tuple' object has no attribute 'requires_grad'` 크래시 결함.
* **왜 취약한가**:
  1. 언어 모델(LLaMA, GPT)에서 생성 토큰을 샘플링하거나 분류 모델의 Top-1/Top-5 정확도를 구할 때 `torch.topk`가 필수적이나 엔진에 전혀 존재하지 않았습니다.
  2. `Function.apply`가 단일 텐서 출력만을 가정하고 설계되어 `(values, indices)`와 같은 복수 텐서를 반환하는 연산자를 통과할 때 Autograd 그래프 연결이 완전히 파괴되는 결함이 있었습니다.

---

## 2. 어떻게 수정했는지 / 왜 그렇게 수정했는지 (Implementation & Rationale)
* **수정 내역**:
  1. **`Function.apply` 다중 출력 튜플(Multi-Output Tuple) Autograd 지원**:
     - `isinstance(result, (tuple, list))` 분기를 신설하여 각 부동소수점 텐서에 대해 `requires_grad`, `_ctx`, `_op_cls`, `_grad_parents`를 독립적으로 바인딩하고 정수 인덱스 텐서는 불필요한 미분 추적에서 자동 제외.
  2. **`TopKFunction` 및 `TopKResult(values, indices)` 구현**:
     - `np.take_along_axis`를 활용하여 임의 축(`dim`)에 대한 $K$개 최댓값/최솟값 추출.
     - `np.put_along_axis` 기반의 정밀 산란(Scatter) 역전파를 통해 선택된 $K$개 위치로만 그래디언트 1:1 라우팅.
  3. **`SortFunction`, `sort`, `argsort` 구현**:
     - `descending`, `stable` 정렬 모드 완벽 지원 및 역전파 순위 복원.
  4. **`Tensor` 인스턴스 메서드 및 최상위 API 노출**:
     - `tensor.topk()`, `tensor.sort()`, `tensor.argsort()`, `forge.topk`, `forge.sort`, `forge.argsort` 등록.

---

## 3. 빅테크는 어떻게 하고 있는지 (Big Tech Comparative Analysis)
* **Meta PyTorch (`torch.topk`, `torch.sort`, `torch.argsort`)**:
  - `(values, indices)` NamedTuple을 반환하며 `values`에 대해 미분 추적을 유지하는 표준 사양.
* **HuggingFace Transformers Generation Loop**:
  - `top_k_top_p_filtering`에서 `torch.topk`를 필수 핵심 블록으로 호출.

---

## 4. 그럼 우리는 어떤 걸 채택/노선을 가야 하는지 (Adopted Strategy & Route)
* **AMEVA-Forge 채택 노선**: **PyTorch 1:1 표준 NamedTuple Top-K & Scatter-Based Autograd Routing**
* **선정 사유**: 브라우저 및 온디바이스 환경에서 LLaMA-3 및 GPT 모델의 텍스트 생성 파이프라인을 0의 의존성으로 완벽 구동하기 위함임.

---

## 5. 영향도 분석 (Impact Analysis)
* **LLM 텍스트 생성**: Top-K / Top-P 샘플링 및 Beam Search 파이프라인 완벽 지원.
* **모델 검증/지표 산출**: Top-1 / Top-5 분류 정확도 메트릭 계산 지원.
* **Autograd 엔진 확장성**: 다중 텐서를 반환하는 모든 커스텀 연산자(`qr`, `svd`, `topk`)의 미분 그래프 안정 연결.

---

## 6. 그랬더니 어떤 긍정적 효과가 있을지/있는지 (Positive Outcomes & Proof)
1. **다중 출력 Autograd 크래시 완전 박멸**: `Function.apply` 튜플 처리 무결성 확보.
2. **테스트 검증 통과**: `test_fuzz_topk_sort_argsort_and_autograd` 포함 **276개 전체 단위 테스트 100% All-Pass**.
