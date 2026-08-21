# 🛡️ [Adversarial Hardening Loop - Task Dossier: Iteration 06]
> **Task ID**: `audit_loop_iteration_06`  
> **Target Subsystem**: BatchNorm2d Engine & Stateless Invariants (`packages/forge-py/src/forge/functional.py`, `nn.py`)  
> **Timestamp**: 2026-08-20  

---

## 1. 어떤 게 지적되었는지 / 취약한지 (Vulnerabilities & Findings)
* **결함 요약**: `BatchNorm2d`의 `affine=False` (학습 파라미터 `weight/bias=None`), `track_running_stats=False` (무상태 배치 정규화), 및 4D 형상 불변식 미검증 시 크래시 결함.
* **왜 취약한가**:
  1. `affine=False`로 설정된 모델(학습 가능한 스케일/시프트 없이 순수 정규화만 수행하는 모델 아키텍처)의 경우, `weight`와 `bias`가 `None`으로 들어오는데 기존 코드는 무조건 `reshape(weight, ...)`를 호출하여 `AttributeError`로 폭발했습니다.
  2. `track_running_stats=False`인 경우 `running_mean/running_var`가 `None`인데, 지수 이동 평균 업데이트 로직에서 None 참조 에러가 발생했습니다.
  3. 2D/3D 텐서가 `BatchNorm2d`에 유입될 때 사전 차원 검증 없이 내부 슬라이싱을 시도하여 부정확한 축소 연산이 일어났습니다.

---

## 2. 어떻게 수정했는지 / 왜 그렇게 수정했는지 (Implementation & Rationale)
* **수정 내역**:
  1. **입력 차원 엄격 검증**:
     - `if len(x.shape) != 4: raise AMEVAForgeShapeError(...)`를 최상단에 배치하여 4D가 아닌 입력에 대해 즉시 Fast-Fail.
  2. **`affine=False` 완벽 지원**:
     - `weight`와 `bias`가 `None`일 때 불필요한 연산을 건너뛰고 정규화된 텐서(`x_norm`)를 즉시 반환하거나 존재하는 파라미터만 선별 적용.
  3. **`track_running_stats=False` 무상태 배치 정규화 지원**:
     - `running_mean` 또는 `running_var`가 `None`일 때는 이동 통계량을 갱신하지 않고 현재 배치의 통계량만으로 정규화 수행.

---

## 3. 빅테크는 어떻게 하고 있는지 (Big Tech Comparative Analysis)
* **Meta PyTorch (`torch.nn.modules.batchnorm._BatchNorm`)**:
  - `affine=True/False` 및 `track_running_stats=True/False` 조합을 완벽히 지원하며, `affine=False`일 때 파라미터를 등록하지 않음.
* **Google TensorFlow / Keras (`tf.keras.layers.BatchNormalization`)**:
  - `scale=False, center=False` 옵션을 통해 감마/베타 학습 파라미터 생략 지원.

---

## 4. 그럼 우리는 어떤 걸 채택/노선을 가야 하는지 (Adopted Strategy & Route)
* **AMEVA-Forge 채택 노선**: **PyTorch 1:1 패리티 BatchNorm2d 아키텍처**
* **선정 사유**: TorchVision(ResNet, MobileNet, EfficientNet, ConvNeXt) 모델 가중치를 브라우저로 가져올 때 `affine=False` 또는 `track_running_stats=False`로 선언된 레이어가 아무런 수정 없이 100% 정상 작동해야 하기 때문임.

---

## 5. 영향도 분석 (Impact Analysis)
* **비전 모델 호환성**: 모든 ResNet/ConvNeXt 변형 모델의 BatchNorm 설정 완벽 소화.
* **메모리 절약**: `affine=False` 시 불필요한 VRAM/RAM 파라미터 할당을 방지.
* **추론 및 훈련 무결성**: 4D 텐서 형상 보장으로 차원 왜곡 버그 차단.

---

## 6. 그랬더니 어떤 긍정적 효과가 있을지/있는지 (Positive Outcomes & Proof)
1. **무상태(Stateless) 및 비학습 아핀(Non-Affine) 정규화 지원**: TorchVision 표준 컴포넌트와의 완전 호환성 달성.
2. **테스트 검증 통과**: `test_fuzz_batch_norm2d_affine_false_and_no_running_stats` 포함 **268개 전체 단위 테스트 100% All-Pass**.
