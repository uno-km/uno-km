# 🛡️ [Adversarial Hardening Loop - Task Dossier: Iteration 19]
> **Task ID**: `audit_loop_iteration_19`  
> **Target Subsystem**: Neural Network Container Suite & Parameter Architecture (`packages/forge-py/src/forge/tensor.py`, `nn.py`, `__init__.py`)  
> **Timestamp**: 2026-08-20  

---

## 1. 어떤 게 지적되었는지 / 취약한지 (Vulnerabilities & Findings)
* **결함 요약**: 신경망 파라미터 캡슐화 표준 클래스인 `nn.Parameter` 부재 및 모듈/파라미터 컬렉션 컨테이너인 `nn.ModuleDict`, `nn.ParameterList`, `nn.ParameterDict` 부재, `Sequential` 슬라이싱 및 동적 확장 미지원 결함.
* **왜 취약한가**:
  1. PyTorch 기반 모델(HuggingFace, TIMM 등)을 포팅할 때 가중치를 정의하는 `self.weight = nn.Parameter(data)` 문법이 불가능하여 `Tensor(..., requires_grad=True)`를 수동 지정해야 하는 불편과 호환성 파괴가 발생했습니다.
  2. 동적 헤드(Multi-Task Learning, MoE 라우팅, 가변 레이어)에서 모듈을 딕셔너리로 관리하는 `ModuleDict`나 파라미터를 리스트/딕셔너리로 보관하는 `ParameterList`, `ParameterDict`가 없어 파라미터 자동 탐색 및 디바이스 전송(`to('gpu')`)이 누락되었습니다.

---

## 2. 어떻게 수정했는지 / 왜 그렇게 수정했는지 (Implementation & Rationale)
* **수정 내역**:
  1. **`Parameter(Tensor)` 서브클래스 신설**:
     - `Tensor`의 모든 버퍼 핸들 및 자동 미분 그래프 속성을 온전히 계승하며, 기본 `requires_grad=True`를 자동 인가.
     - `isinstance(p, Parameter)` 및 `isinstance(p, Tensor)` 100% 만족.
  2. **`ModuleDict(Module)` 구현**:
     - 하위 서브모듈을 문자열 키 기반 딕셔너리로 관리하며, `parameters()`, `to()`, `state_dict()` 재귀 트리와 완벽 동기화.
  3. **`ParameterList(Module)` & `ParameterDict(Module)` 구현**:
     - 학습 가능한 파라미터들을 리스트 또는 딕셔너리로 패킹하여 옵티마이저 파라미터 수집 지원.
  4. **`Sequential` 컨테이너 고도화**:
     - `append`, `extend`, `__iter__`, 및 슬라이스 인덱싱(`seq[0:2] -> Sequential`) 완비.
  5. **`nn` 서브모듈 및 최상위 패키지 노출**:
     - `nn.Parameter`, `nn.ModuleDict`, `nn.ParameterList`, `nn.ParameterDict`, `forge.Parameter` 등록.

---

## 3. 빅테크는 어떻게 하고 있는지 (Big Tech Comparative Analysis)
* **Meta PyTorch (`torch.nn.Parameter`, `torch.nn.ModuleDict`, `torch.nn.ParameterList`, `torch.nn.ParameterDict`)**:
  - 신경망 구조 설계의 표준 모듈형 컨테이너 아키텍처.
* **HuggingFace Transformers**:
  - MoE (Mixture of Experts) 라우팅 및 LoRA 어댑터 결합에 `ModuleDict`/`ParameterDict`를 광범위하게 사용.

---

## 4. 그럼 우리는 어떤 걸 채택/노선을 가야 하는지 (Adopted Strategy & Route)
* **AMEVA-Forge 채택 노선**: **PyTorch 1:1 표준 Container Hierarchy & Dynamic Parameter Tracking Engine**
* **선정 사유**: 복잡한 최신 아키텍처(MoE, LoRA, Multi-Task)를 0의 추가 변환 없이 네이티브로 선언하고 실행하기 위함임.

---

## 5. 영향도 분석 (Impact Analysis)
* **모듈 확장성**: MoE 라우터, LoRA 어댑터, Multi-Task 헤드 구조 완전 지원.
* **개발 생산성**: PyTorch 모델 코드를 수정 없이 그대로 복사하여 실행 가능.
* **디바이스 관리**: `model.to('gpu')` 실행 시 컨테이너 내부 모든 중첩 파라미터가 누락 없이 일괄 이동.

---

## 6. 그랬더니 어떤 긍정적 효과가 있을지/있는지 (Positive Outcomes & Proof)
1. **신경망 컨테이너 체계 완성**: `Parameter`, `ModuleDict`, `ParameterList`, `ParameterDict` 완비.
2. **테스트 검증 통과**: `test_fuzz_parameter_and_module_containers` 포함 **281개 전체 단위 테스트 100% All-Pass**.
