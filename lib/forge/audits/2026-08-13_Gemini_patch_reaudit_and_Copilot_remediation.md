# AMEVA-Forge Gemini 1차 수정 재감사 및 Copilot 후속 조치 보고서

**기준 스냅샷:** commit `2633ef5ff21bd90ac44c0118f26343e1697bf8e4`  
**작성일:** 2026-08-13  
**대상:** `20260813_125948_552_export.txt`에서 복원한 132개 파일  
**비교 기준:** `AMEVA_Forge_전수조사_및_클로드_비교분석_보고서.docx`의 AF-001~AF-044  
**결론:** Gemini 수정은 뼈대를 상당 부분 올바르게 따라갔지만, Release 1 승인 상태는 아니다. 특히 GPU 오류의 비동기 전파, 임시 reduction 자원의 quota 통합, 브라우저 E2E가 차단 이슈로 남아 있다.

## 1. 실행 요약

이번 export는 이전 조사본과 달리 디렉터리, 패키지 설정, 테스트, 문서, Jira 도구까지 포함되어 비교 신뢰도가 높아졌다. Gemini 수정은 중앙 quota token, staging cleanup, op schema, random handle, raw GPUDevice 비노출, global API freeze, rollback 골격을 도입했다. 이는 단순 주석 추가가 아니라 실제 구조 변경이다.

그러나 일부 수정은 `Fix` 주석과 달리 완료 수준이 아니다. 가장 심각한 사례는 `executeGraph()`가 여전히 동기 반환하면서 `popErrorScope()` Promise를 백그라운드 catch로만 처리하는 점이다. GPU validation/OOM/internal failure가 발생해도 Python에 handle이 먼저 반환될 수 있다. 또한 reduction 임시 buffer와 uniform buffer는 아직 `device.createBuffer()`를 직접 호출하므로 새 allocation ledger를 우회한다.

Copilot 후속 패치에서는 구조 전체를 무리하게 비동기로 바꿔 Python 브리지까지 깨뜨리지 않고, 즉시 확정 가능한 오류를 우선 수정했다. scalar reduction 입력 크기, reduction-only submit, 중복 readback, readMappedInto 길이, 버전 drift, 허위 benchmark fallback, 위험한 append script, README 공개 상태를 정리했다.

## 2. Gemini 1차 수정 중 잘된 항목

### 2.1 메모리 회계 뼈대

- `quota.ts`에 `AllocationToken`, allocation kind, owner graph, generation, token map, strict release 상태가 추가됐다.
- tensor record가 token을 보유하고 `tensorRegistry.dispose()`가 token 기반으로 quota를 반환한다.
- 일반 readback과 map readback staging buffer가 `allocateBuffer(..., 'staging')`를 사용한다.
- `mapAsync()` 실패 시 staging buffer destroy와 token release가 수행된다.

**판정:** AF-006, AF-008, AF-011은 구조적으로 상당히 개선됐다. 다만 reduction temporary/uniform까지 중앙 allocator를 사용하지 않으므로 AF-005는 미완료다.

### 2.2 보안 경계 개선

- raw `GPUDevice`를 `globalThis.__AMEVA_DEVICE__`에 게시하는 코드가 비활성화됐다.
- bridge API가 `Object.freeze(api)`로 동결된다.
- Tensor handle은 단조 증가 문자열 대신 `crypto.randomUUID()` 우선 방식으로 바뀌었다.
- graph op allowlist와 op별 input/params schema 검증이 추가됐다.

**판정:** AF-013, AF-015는 코드 기준 조치됨. AF-014는 변조 가능성은 줄었지만 global realm 노출 자체는 유지되므로 부분 조치다. Worker 격리 전에는 강한 보안 경계로 볼 수 없다.

### 2.3 그래프 rollback 골격

- 생성 handle을 `createdHandles`로 추적하고 동기 예외 시 dispose한다.
- 임시 params buffer도 후처리 목록에 추가된다.
- GPU error scope 3종이 도입됐다.

**판정:** AF-002는 “아무 rollback도 없음” 상태에서는 벗어났다. 다만 handle이 실행 중 즉시 registry에 commit되고, 비동기 GPU 오류를 await하지 않기 때문에 완전한 transaction은 아니다.

### 2.4 입력 및 계약 검증

- duplicate instruction ID와 그래프 dependency 검증이 추가된 흔적이 확인된다.
- op schema가 input 수와 params 수를 검사한다.
- direct add/mul은 byteLength가 아니라 shape exact equality를 검사한다.
- direct transpose는 batch params `B=1`을 사용하도록 이미 수정되어 있다.

**판정:** AF-017, AF-020, AF-021은 큰 폭으로 개선됐다. 다만 schema 수치가 실제 Python/WGSL packing과 불일치하는 항목이 있어 완전 조치로 보지 않는다.

## 3. 기존 AF-001~AF-044 재판정

### 조치됨 또는 실질 조치

- **AF-006 일반 readback quota 우회:** staging token 사용으로 조치.
- **AF-008 mapAsync 실패 cleanup:** catch에서 destroy/release 수행.
- **AF-011 quota ownership ledger:** token ledger 도입.
- **AF-013 raw GPUDevice 노출:** 게시 코드 제거.
- **AF-015 예측 가능한 handle:** UUID 우선 handle 도입.
- **AF-020 direct add/mul shape 검사:** exact shape 비교로 변경.
- **AF-021 transpose B=0:** `B=1`로 변경.

### 부분 조치

- **AF-002 rollback:** 동기 예외 rollback은 있으나 pending allocation commit 분리 없음.
- **AF-007 동일 handle 중복 map:** Copilot 패치에서 pending handle 재매핑을 명시적으로 거부.
- **AF-009 readMappedInto 길이:** Copilot 패치에서 exact length 검사 추가.
- **AF-014 global bridge:** freeze는 됐지만 global surface와 Worker 미격리.
- **AF-017 op schema:** schema 도입은 좋으나 contract 값 검증 필요.
- **AF-018 load metadata:** 일부 검증 흔적이 있으나 record 권위 모델과 dtype 확정 필요.
- **AF-019 upload size:** 경로별 검증 편차 재확인 필요.
- **AF-035 dispose 오류:** 정리 강화는 됐으나 batch 결과와 재시도 telemetry 없음.
- **AF-036 device lost:** generation이 추가됐으나 pending callback 경쟁 테스트 없음.
- **AF-037 warmup:** core/experimental 분리 정책은 불충분.
- **AF-042 version drift:** Copilot 패치에서 TS/Python/`__version__`을 `0.1.0`으로 통일했지만 lockfile/artifact 재생성 필요.
- **AF-043 append script:** Copilot 패치에서 실행 불가능한 deprecated stub으로 변경.

### 미조치 Release Blocker

- **AF-001 비동기 GPU 오류 은폐:** `executeGraph()`는 여전히 동기 반환이며 error-scope Promise를 await하지 않는다.
- **AF-005 reduction temporary quota:** intermediate와 uniform이 direct `createBuffer()`를 사용한다.
- **AF-010 PyProxy release:** 모든 bridge acquisition 경로를 finally로 보장하는지 추가 검증 필요.
- **AF-016 전역 GPU 오류 경쟁:** `__ameva_last_gpu_error` 단일 채널이 남아 있다.
- **AF-023 sum_axis ND 의미:** 2D M×N 계약에서 일반 axis 의미로 확장되지 않았다.
- **AF-024 scatter duplicate race:** non-atomic duplicate index 누적 문제가 남아 있다.
- **AF-025 index dtype:** float32 index 모델이 남아 있다.
- **AF-026 AvgPool padding 의미:** CPU/GPU 정책 통일 증거가 없다.
- **AF-027~AF-034:** pooling backward, slice/pad backward, embedding, dropout 계약, BatchNorm state, positional encoding, Conv workspace, CPU Conv 병목은 Release 1 제외 대상이다.
- **AF-039 placeholder tests:** 전수 실행 증거가 없고 일부 테스트는 여전히 형식 중심이다.
- **AF-040 numerical gradient:** Release 1 core 전체 finite-difference gate가 없다.
- **AF-041 browser E2E:** 실제 Pyodide MLP 학습 acceptance gate가 없다.

## 4. 새로 발견한 고위험 사항

### NEW-P0-01: GPU 오류 scope를 await하지 않는 가짜 transaction

`GraphExecutor`의 종료부는 `Promise.all(...).catch(...)`만 등록하고 즉시 `idToHandle`을 반환한다. 따라서 JS 호출자는 성공 객체를 받고 Python은 정상 tensor로 간주한 뒤, 나중에 registry에서 handle이 사라지는 경쟁 상태가 생길 수 있다. 이는 단순 로깅 문제가 아니라 stale handle, 잘못된 학습 결과, 후속 dispose 오류를 만든다.

**필수 수정:** `executeGraph(): Promise<Record<...>>`로 변경하고 `await Promise.all(errorScopes)`, 필요 시 `await queue.onSubmittedWorkDone()`, 성공 후 commit, 실패 시 rollback. Python/Pyodide bridge는 Promise를 명시적으로 await해야 한다.

### NEW-P0-02: reduction 임시 buffer가 새 ledger를 우회

Gemini가 allocation token 시스템을 도입했지만 reduction 루프는 `device.createBuffer()`를 직접 사용한다. 결과적으로 큰 reduction을 반복하면 quota는 정상처럼 보여도 실제 GPU memory가 압박될 수 있다. destroy는 예약 회계와 연결되지 않는다.

**필수 수정:** temporary와 uniform allocation을 모두 `allocateBuffer(kind='temporary'|'uniform', ownerGraph)`로 교체하고 token 목록을 transaction에 귀속한다.

### NEW-P1-01: schema hardcoding이 정상 graph를 거부할 가능성

`OP_SCHEMA`는 pad params 9, gather/scatter 7, cat 최소 params 1 등으로 고정돼 있으나 실제 runtime packing은 경로별로 더 많은 값을 사용한다. “엄격한 검증”이 계약 생성기로부터 나온 것이 아니라 수동 상수이므로 Python → TS → WGSL 중 하나가 바뀌면 정상 연산이 보안 오류로 차단된다.

**필수 수정:** 단일 schema 정의에서 Python serializer, TS validator, params packer, compatibility matrix test를 생성한다.

### NEW-P1-02: benchmark 문서가 실제 실행 없이 성공·가속을 주장

Extreme benchmark는 ImportError 시 Mock 객체를 사용하고, CPU OOM/timeout은 일부러 raise하며, WebGPU는 실제 계산 없이 성공 시간과 “브라우저 생존”을 출력한다. 이는 테스트가 아니라 합성 홍보 결과다. Release 문서에 남으면 신뢰성 문제와 허위 benchmark 위험이 생긴다.

**Copilot 조치:** real runtime이 없으면 즉시 실패하도록 mock fallback을 제거했다. 기존 결과 보고서는 verified/unverified를 분리해야 한다.

### NEW-P1-03: 배포 상태와 버전이 상충

README는 Release 1 Public Technical Preview라고 선언하지만 package.json, pyproject, `__version__`은 2.0.0이고 e2e artifact는 0.1.0이다. PyPI 설치 명령도 실제 공개 여부를 보장하지 않는다.

**Copilot 조치:** source metadata를 0.1.0 Alpha로 맞추고 README를 Release 1 Candidate/Internal Alpha로 변경했다. lockfile과 wheel/tgz는 원본 저장소에서 재빌드해야 한다.

### NEW-P2-01: 자동 생성식 장문 주석이 코드 감사를 방해

핵심 함수마다 WHAT/WHY/HOW 주석이 과도하게 반복되며 실제 불변조건과 다르게 유지될 위험이 있다. 예를 들어 “Transaction”이라고 부르지만 commit 분리가 없다. 주석이 코드 품질을 높이는 대신 취약점을 가릴 수 있다.

**권고:** 클래스/함수 수준 계약, ownership, error semantics만 남기고 지역 변수 설명은 제거한다. 테스트 이름으로 불변조건을 표현한다.

## 5. Copilot 실제 수정 내역

다음 목록은 ZIP 안의 실제 diff와 일치한다.

1. `packages/forge/src/tensor/graphExecutor.ts`
   - scalar `sum/max`의 `currentSize`를 output byteLength가 아닌 input tensor record에서 계산.
   - unresolved reduction input을 명시적으로 거부.
   - `encoderHasCommands`를 추가해 reduction-only graph도 submit.
2. `packages/forge/src/tensor/gpuCore.ts`
   - 동일 handle에 pending staging readback이 있으면 2차 map을 거부.
3. `packages/forge/src/webgpu/buffers.ts`
   - allocation마다 출력하던 console log 제거.
   - `readMappedInto()` destination 길이를 exact match로 검증.
4. `packages/forge/tests/sourceContract.test.ts`
   - reduction input-size 계약과 duplicate readback 계약을 고정하는 source regression test 추가.
5. `packages/forge/package.json`
   - 버전 `2.0.0` → `0.1.0`.
6. `packages/forge-py/pyproject.toml`
   - 버전 `2.0.0` → `0.1.0`, Beta → Alpha.
7. `packages/forge-py/src/forge/__init__.py`
   - `__version__`을 `0.1.0`으로 통일.
8. `packages/forge-py/add_conv.py`
   - 절대경로 직접 append 동작을 제거하고 실행 불가 migration stub으로 변경.
9. `docs/papers/benchmark/webgpu_benchmark_extreme.py`
   - mock 성공과 합성 timing fallback 제거.
10. `docs/papers/benchmark/webgpu_benchmark_low_extreme.py`
    - mock timing fallback 제거.
11. `README.md`
    - Public Preview 확정 표현을 Release Candidate/Internal Alpha로 변경.
    - 설치 명령을 repository local install로 변경.
    - 직접 `.data` 변이 예제를 optimizer API로 변경.
12. `docs/audits/2026-08-13_Gemini_patch_reaudit_and_Copilot_remediation.md`
    - 본 재감사 및 수정 대응 문서 추가.

## 6. 검증 결과

- export parser 결과: 표식 133개 중 완전한 file block 132개 복원. 디렉터리 tree와 일치하는 소스 스냅샷을 구성했다.
- Python `compileall`: 패치 후 `src`와 `tests` 모두 통과.
- TypeScript/Jest: export에는 `node_modules`가 포함되지 않았다. `npm ci`는 실행 환경 제한 시간 안에 완료되지 않아 실제 TS typecheck/Jest 결과를 확정하지 않았다.
- Browser WebGPU: 현재 실행 환경에서 실제 adapter/Pyodide E2E를 수행하지 못했다.
- 결론: 이 ZIP은 “정적 재감사 + 확정 결함 1차 보정본”이며 RC 승인을 의미하지 않는다.

## 7. Release 1 이전 필수 후속 순서

1. `executeGraph` async transaction과 Python Promise bridge를 한 묶음으로 수정.
2. reduction/uniform/temporary를 allocation token ledger에 통합.
3. op schema single source of truth 구축.
4. core numerical gradient와 CPU/GPU parity 추가.
5. Chrome Playwright에서 Pyodide 2-layer MLP forward/backward/SGD/loss 감소 검증.
6. 1,000 step allocation baseline 복귀 확인.
7. wheel/tgz, lockfiles, docs version 재생성.
8. 그 후 `0.1.0-rc.1` 생성. P0/P1 blocker가 0일 때만 `0.1.0` Public Technical Preview.

## 8. 최종 판정

Gemini 수정은 무의미한 땜질만 한 상태는 아니다. quota token, UUID handle, raw device 비노출, API freeze, schema, rollback 골격은 올바른 방향이다. 그러나 가장 중요한 “GPU 실패가 호출자에게 동기화되어 전달되는가”는 해결되지 않았다. 따라서 현재 코드는 **Internal Alpha 유지**가 맞다.

Copilot 패치는 현재 export에서 안전하게 확정할 수 있는 reduction, readback, 버전, benchmark, source mutation 문제를 실제 코드에 반영했다. 남은 P0는 API 전체의 async 계약을 건드리므로 별도 패치와 실제 브라우저 검증 없이 완료라고 선언해서는 안 된다.
