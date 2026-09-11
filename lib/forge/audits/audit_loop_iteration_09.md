# 🛡️ [Adversarial Hardening Loop - Task Dossier: Iteration 09]
> **Task ID**: `audit_loop_iteration_09`  
> **Target Subsystem**: Matrix Generation & Triangular Operators (`packages/forge-py/src/forge/ops.py`, `tensor.py`, `__init__.py`)  
> **Timestamp**: 2026-08-20  

---

## 1. 어떤 게 지적되었는지 / 취약한지 (Vulnerabilities & Findings)
* **결함 요약**: `arange`, `eye`, `linspace` 등 핵심 텐서 생성자 부재 및 `triu`, `tril` 삼각 행렬 마스킹/연산자의 Autograd 역전파 지원 누락 결함.
* **왜 취약한가**:
  1. 트랜스포머 인과적 어텐션 마스크(Causal Masking), RoPE/ALiBi 위치 인코딩 인덱스 생성(`arange`), 항등 행렬 초기화(`eye`), 디퓨전 모델 타임스텝 스케줄링(`linspace`) 시 표준 팩토리 함수가 없어 불필요하게 넘파이 변환을 우회 호출했습니다.
  2. `triu` 및 `tril` 연산자가 없어 상삼각/하삼각 가중치 마스킹 시 그래디언트 역전파를 추적할 수 없었습니다.

---

## 2. 어떻게 수정했는지 / 왜 그렇게 수정했는지 (Implementation & Rationale)
* **수정 내역**:
  1. **표준 텐서 생성 팩토리 3종 구현**:
     - `arange(start, end=None, step=1, dtype, device, requires_grad)`: 단일 인자(`end=None`) 유입 시 `0`부터 시작하는 PyTorch 시맨틱 완벽 지원.
     - `eye(n, m=None, dtype, device, requires_grad)`: $N 	imes M$ 단위 행렬 생성기.
     - `linspace(start, end, steps, dtype, device, requires_grad)`: 등간격 1D 텐서 생성기.
  2. **`TriuFunction` & `TrilFunction` 자동 미분 체인 탑재**:
     - 순전파 시 `k=diagonal` 오프셋 반영.
     - 역전파 시 해당 삼각 마스크(`mask = np.triu/tril(ones)`)를 생성하여 기울기를 정확히 게이팅(`grad_output * mask`).
  3. **`Tensor.triu()`, `Tensor.tril()` 인스턴스 메서드 및 최상위 공개 API 등록**:
     - `forge.arange`, `forge.eye`, `forge.linspace`, `forge.triu`, `forge.tril` 완비.

---

## 3. 빅테크는 어떻게 하고 있는지 (Big Tech Comparative Analysis)
* **Meta PyTorch (`torch.arange`, `torch.eye`, `torch.triu`, `torch.tril`)**:
  - 텐서 생성의 기초 빌딩 블록 및 C++ 커널 레벨의 삼각 행렬 미분 마스킹 제공.
* **Google JAX (`jax.numpy.arange`, `jax.numpy.triu`)**:
  - 정적 컴파일(XLA) 및 자동 미분(`vjp`) 그래프에 삼각 연산자 기본 내장.

---

## 4. 그럼 우리는 어떤 걸 채택/노선을 가야 하는지 (Adopted Strategy & Route)
* **AMEVA-Forge 채택 노선**: **PyTorch 1:1 표준 텐서 팩토리 + Autograd Triangular Routing 아키텍처**
* **선정 사유**: 브라우저 로컬 환경에서 트랜스포머 Causal Mask, Positional Encoding, Diffusion Timestep 생성 시 외부 넘파이 의존성 없이 순수 Forge 텐서 그래프로 직결하기 위함임.

---

## 5. 영향도 분석 (Impact Analysis)
* **표현력**: 인과적 마스크, 단위 행렬, 스케줄링 텐서 생성이 한 줄로 가능.
* **미분 무결성**: `triu`/`tril` 역전파 시 0으로 마스킹된 하삼각/상삼각 영역으로 그래디언트 누출 방지.
* **코드 간결화**: `scaled_dot_product_attention` 및 모델 구현체에서 직접 텐서 생성 활용 가능.

---

## 6. 그랬더니 어떤 긍정적 효과가 있을지/있는지 (Positive Outcomes & Proof)
1. **트랜스포머 및 생성 모델 기반 완성**: RoPE, Causal Attention, DDPM 스케줄 텐서 순수 생성 가능.
2. **테스트 검증 통과**: `test_fuzz_tensor_creation_and_triangular_ops` 포함 **271개 전체 단위 테스트 100% All-Pass**.
