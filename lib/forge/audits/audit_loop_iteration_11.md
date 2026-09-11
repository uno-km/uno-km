# 🛡️ [Adversarial Hardening Loop - Task Dossier: Iteration 11]
> **Task ID**: `audit_loop_iteration_11`  
> **Target Subsystem**: Structural & Padding Layers (`packages/forge-py/src/forge/nn.py`, `ops.py`, `functional.py`, `__init__.py`)  
> **Timestamp**: 2026-08-20  

---

## 1. 어떤 게 지적되었는지 / 취약한지 (Vulnerabilities & Findings)
* **결함 요약**: `nn.Identity` 및 2D 패딩 모듈(`ConstantPad2d`, `ZeroPad2d`, `ReflectionPad2d`, `ReplicationPad2d`) 부재, `F.pad` 미노출, 및 기존 `PadFunction`의 차원 매핑 역순 인덱싱 버그(Width/Height 대신 Batch/Channel에 패딩 적용 결함).
* **왜 취약한가**:
  1. ResNet 스킵 연결(Skip Connection)이나 ViT/Transformer의 바이패스 레이어로 쓰이는 `nn.Identity`가 없어 비전 모델 생성 시 즉각적인 `AttributeError`가 발생했습니다.
  2. `PadFunction`이 PyTorch의 우측 차원 우선 패딩 표기법(`pad=(left, right, top, bottom)`)을 전치하여 Batch/Channel 차원에 패딩을 삽입하고 가로/세로 영역은 패딩되지 않는 심각한 형상 파괴 결함이 존재했습니다.

---

## 2. 어떻게 수정했는지 / 왜 그렇게 수정했는지 (Implementation & Rationale)
* **수정 내역**:
  1. **`nn.Identity(*args, **kwargs)` 모듈 구현**:
     - 임의의 인자/키워드 인자를 유연하게 수용하고 입력을 무변형 그대로 통과시키는 완전 호환 계층 제공.
  2. **`PadFunction` 다차원 매핑 & 역전파 슬라이싱 수학적 전면 수정**:
     - `pad_pairs = [(0, 0)] * rank`로 초기화하고 `dim_idx = rank - 1 - k`로 가장 마지막 차원(Width $	o$ Height)부터 정확히 매핑.
     - 역전파 시 각 축의 `p_before: p_before + shape[d]` 영역을 정확히 슬라이스하여 중앙 영역 그래디언트 복원.
     - `replicate` $	o$ NumPy `mode='edge'`, `reflect` $	o$ `mode='reflect'` 자동 라우팅.
  3. **2D 패딩 모듈군 및 `F.pad` 함수 완비**:
     - `nn.ConstantPad2d`, `nn.ZeroPad2d`, `nn.ReflectionPad2d`, `nn.ReplicationPad2d` 및 `F.pad` 공개.

---

## 3. 빅테크는 어떻게 하고 있는지 (Big Tech Comparative Analysis)
* **Meta PyTorch (`torch.nn.Identity`, `torch.nn.ZeroPad2d`, `torch.nn.functional.pad`)**:
  - 모듈러 설계의 기본 단위로 `Identity` 제공 및 마지막 차원부터 짝을 짓는 `pad` 사양 유지.
* **TorchVision ResNet / ConvNeXt**:
  - Residual Block에서 차원이 일치할 때 `downsample = nn.Identity()`를 필수로 채택.

---

## 4. 그럼 우리는 어떤 걸 채택/노선을 가야 하는지 (Adopted Strategy & Route)
* **AMEVA-Forge 채택 노선**: **PyTorch 1:1 표준 Residual Identity & Rightmost-Dimension-First Pad Engine**
* **선정 사유**: TorchVision 및 Timm 모델을 브라우저에 임포트할 때 잔차 연결 및 이미지 패딩 연산이 0의 오차로 작동하도록 보장하기 위함임.

---

## 5. 영향도 분석 (Impact Analysis)
* **ResNet/ViT 모델 지원**: Residual Shortcut Connection 완벽 호환.
* **이미지 패딩 정합성**: 컨볼루션 입력 이미지의 가장자리 반사(Reflect)/복제(Replicate) 패딩 정상 계산.
* **미분 무결성**: 패딩된 바깥 테두리 그래디언트 버림 및 내부 영역 그래디언트 1:1 보존.

---

## 6. 그랬더니 어떤 긍정적 효과가 있을지/있는지 (Positive Outcomes & Proof)
1. **패딩 차원 역순 적용 결함 완전 박멸**: `(1, 1, 4, 4)` 입력에 `(1, 1, 2, 2)` 패딩 시 정확히 `(1, 1, 8, 6)` 출력 도출.
2. **테스트 검증 통과**: `test_fuzz_identity_and_pad_modules` 포함 **273개 전체 단위 테스트 100% All-Pass**.
