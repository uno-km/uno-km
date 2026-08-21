# 🛡️ [Adversarial Hardening Loop - Task Dossier: Iteration 07]
> **Task ID**: `audit_loop_iteration_07`  
> **Target Subsystem**: Similarity & Numerical Stability (`packages/forge-py/src/forge/functional.py`, `ops.py`, `nn.py`)  
> **Timestamp**: 2026-08-20  

---

## 1. 어떤 게 지적되었는지 / 취약한지 (Vulnerabilities & Findings)
* **결함 요약**: `cosine_similarity` 및 `nn.CosineSimilarity` 연산자의 부재와 $\sqrt{0}$ 미분 특이점(Singularity)으로 인한 0-벡터 유사도 역전파 시 그래디언트 NaN 폭발 결함, 및 `clamp`, `maximum`, `minimum` Autograd 미지원 결함.
* **왜 취약한가**:
  1. RAG(Retrieval-Augmented Generation), 벡터 검색, 대조 학습(CLIP, SimCLR), 샴 네트워크에 필수적인 코사인 유사도가 부재했습니다.
  2. 단순 구현 시 $	ext{denom} = \max(\|\mathbf{x}\|, \epsilon)$ 방식을 취하면 순전파는 $\epsilon$으로 나누어져 정상이지만, $\mathbf{x} = \mathbf{0}$일 때 $rac{d}{dx} \sqrt{x^2} = rac{x}{\sqrt{x^2}} = rac{0}{0} = \mathbf{NaN}$이 발생하여 모델 전체 가중치가 영구 파괴됩니다.
  3. 활성화 클리핑 및 경계값 제한에 쓰이는 `clamp`, `maximum`, `minimum` 연산과 서브그래디언트 역전파가 누락되어 있었습니다.

---

## 2. 어떻게 수정했는지 / 왜 그렇게 수정했는지 (Implementation & Rationale)
* **수정 내역**:
  1. **$\epsilon^2$-Clamped L2 Norm 안정화 수식 도입**:
     - $	ext{norm}_1 = \sqrt{\max\left(\sum x_1^2, \epsilon^2ight)}$ 수식을 적용하여 $\mathbf{x}=\mathbf{0}$ 지점에서도 제곱근 내부가 항상 $\epsilon^2 > 0$을 유지하도록 설계.
     - 이로 인해 $rac{d}{dx}$ 미분값이 $0 	imes rac{1}{2\epsilon} = 0.0$으로 수렴하여 NaN을 원천 박멸.
  2. **`MaximumFunction`, `MinimumFunction`, `clamp` 자동 미분 체인 구현**:
     - 마스크 기반 서브그래디언트 분기(`mask_a = data_a >= data_b`)를 통해 정확한 역전파 라우팅 지원.
  3. **`nn.CosineSimilarity` 모듈 및 `Tensor.clamp()` 편의 메서드 추가**:
     - PyTorch 1:1 패리티 인터페이스 완비.

---

## 3. 빅테크는 어떻게 하고 있는지 (Big Tech Comparative Analysis)
* **Meta PyTorch (`torch.nn.functional.cosine_similarity`)**:
  - 분모 계산 시 `torch.clamp(norm, min=eps)` 또는 L2 norm 제곱에 $\epsilon^2$을 더해 미분 불능점 회피.
* **Google JAX / Flax (`jax.numpy.clip` & `optax.cosine_similarity`)**:
  - `jnp.maximum(norm, eps)` 및 안전한 그래디언트 마스킹 채택.

---

## 4. 그럼 우리는 어떤 걸 채택/노선을 가야 하는지 (Adopted Strategy & Route)
* **AMEVA-Forge 채택 노선**: **$\epsilon^2$-Pre-Sqrt Clamped Cosine Similarity + Subgradient Routing 아키텍처**
* **선정 사유**: 브라우저 로컬 환경에서 벡터 검색 임베딩 및 임베딩 미세조정(Fine-tuning) 시 0-노름 패딩 벡터가 유입되어도 그래디언트 NaN으로 모델이 죽는 현상을 100% 방지하기 위함임.

---

## 5. 영향도 분석 (Impact Analysis)
* **RAG & Vector Search**: 브라우저 로컬 임베딩 코사인 유사도 검색 완벽 지원.
* **수치 안정성**: 0 벡터, 극단적 저노름 입력에 대해 순전파 및 역전파 NaN 완전 제로화.
* **표현력**: `clamp`, `maximum`, `minimum`을 통한 경계 제어 및 활성화 함수 커스텀 자유도 확보.

---

## 6. 그랬더니 어떤 긍정적 효과가 있을지/있는지 (Positive Outcomes & Proof)
1. **0-노름 벡터 역전파 NaN 결함 영구 방어**: 제로 벡터 입력 시에도 그래디언트가 `0.0`으로 깨끗하게 통과.
2. **테스트 검증 통과**: `test_fuzz_cosine_similarity_clamp_and_maximum` 포함 **269개 전체 단위 테스트 100% All-Pass**.
