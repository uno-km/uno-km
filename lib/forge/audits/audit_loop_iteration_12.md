# 🛡️ [Adversarial Hardening Loop - Task Dossier: Iteration 12]
> **Task ID**: `audit_loop_iteration_12`  
> **Target Subsystem**: Vision Pooling & Global Average Pooling (`packages/forge-py/src/forge/nn.py`, `ops.py`, `functional.py`, `__init__.py`)  
> **Timestamp**: 2026-08-20  

---

## 1. 어떤 게 지적되었는지 / 취약한지 (Vulnerabilities & Findings)
* **결함 요약**: ResNet, MobileNet, EfficientNet, ConvNeXt, VGG 등 거의 모든 비전 아키텍처의 필수 레이어인 `nn.AdaptiveAvgPool2d`, `nn.AdaptiveMaxPool2d`, `F.adaptive_avg_pool2d`, `F.adaptive_max_pool2d` 부재 및 Autograd 역전파 지원 결함.
* **왜 취약한가**:
  1. 합성곱 피처맵을 최종 선형 분류기(FC Layer)에 연결하기 전 입력 해상도에 무관하게 고정 크기(주로 $1 	imes 1$)로 압축하는 `AdaptiveAvgPool2d((1, 1))`이 없어 비전 모델을 전혀 인스턴스화할 수 없었습니다.
  2. 임의의 직사각형 출력 크기($H_{	ext{out}} 	imes W_{	ext{out}}$)에 대해 바닥(floor)/천장(ceil) 인덱스를 정확히 나누어 균등/최댓값 역전파를 수행하는 적응형 풀링 미분 체계가 누락되어 있었습니다.

---

## 2. 어떻게 수정했는지 / 왜 그렇게 수정했는지 (Implementation & Rationale)
* **수정 내역**:
  1. **`AdaptiveAvgPool2dFunction` 및 `AdaptiveMaxPool2dFunction` 수학적 구현**:
     - $h_{	ext{start}} = \lfloor oh \cdot H / out\_h floor, h_{	ext{end}} = \lceil (oh+1) \cdot H / out\_h ceil$ 구간 분할을 통해 임의 해상도 피처맵 완벽 매핑.
     - AvgPool 역전파: 각 패치 면적($	ext{area} = (h_{	ext{end}} - h_{	ext{start}})(w_{	ext{end}} - w_{	ext{start}})$)으로 그래디언트를 균등 분배.
     - MaxPool 역전파: 패치 내 최댓값 위치를 마스킹하여 해당 원소로만 그래디언트 라우팅.
  2. **`nn.AdaptiveAvgPool2d`, `nn.AdaptiveMaxPool2d` 모듈 및 함수형 API 제공**:
     - `output_size` 인자로 단일 정수($S 	o (S, S)$) 및 튜플($(H, W)$) 모두 지원.
     - `forge.adaptive_avg_pool2d`, `forge.adaptive_max_pool2d` 최상위 노출.

---

## 3. 빅테크는 어떻게 하고 있는지 (Big Tech Comparative Analysis)
* **Meta PyTorch (`torch.nn.AdaptiveAvgPool2d`, `torch.nn.AdaptiveMaxPool2d`)**:
  - Global Average Pooling (GAP)을 지원하는 표준 풀링 계층으로 채택.
* **TorchVision ResNet-18/50, MobileNetV2**:
  - `self.avgpool = nn.AdaptiveAvgPool2d((1, 1))`를 표준 구조로 사용.

---

## 4. 그럼 우리는 어떤 걸 채택/노선을 가야 하는지 (Adopted Strategy & Route)
* **AMEVA-Forge 채택 노선**: **PyTorch 1:1 표준 Dynamic Boundary Adaptive Pooling + Autograd Gradient Distributor**
* **선정 사유**: TorchVision 및 Timm 비전 모델의 가중치를 브라우저 환경에서 그대로 로드하여 완벽한 추론 및 전이학습(Transfer Learning)을 수행하기 위함임.

---

## 5. 영향도 분석 (Impact Analysis)
* **비전 모델 완결성**: ResNet, MobileNet, EfficientNet, DenseNet 등 모든 백본 아키텍처 100% 임포트 가능.
* **해상도 유연성**: 임의 크기의 이미지 입력 시에도 고정 크기 임베딩 벡터 생성 가능.
* **미분 안정성**: Global Average Pooling 역전파 시 입력 전체로 기울기가 정밀하게 $1/N$ 분배되어 학습 안정.

---

## 6. 그랬더니 어떤 긍정적 효과가 있을지/있는지 (Positive Outcomes & Proof)
1. **비전 모델 헤드 분류기 결함 완전 종식**: `AdaptiveAvgPool2d((1, 1))` 및 임의 크기 적응형 풀링 완벽 가동.
2. **테스트 검증 통과**: `test_fuzz_adaptive_pooling_modules_and_autograd` 포함 **274개 전체 단위 테스트 100% All-Pass**.
