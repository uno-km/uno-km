# Termux Official Upstream Packaging Guide (`termux-packages`)

SPDX-License-Identifier: Apache-2.0  
Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.

---

## 1. 개요 (Overview)

본 문서는 전 세계 모든 안드로이드 Termux 환경에서 별도의 PPA 등록 절차 없이 순정 터미널에서 즉시 `pkg install <package>` 명령어로 설치 및 구동될 수 있도록, 공식 글로벌 업스트림 저장소([termux/termux-packages](https://github.com/termux/termux-packages))에 8대 핵심 AI 모달리티 패키지 및 1종 통합 메타패키지를 기고(Pull Request)하기 위한 공식 엔지니어링 표준 가이드입니다.

---

## 2. 패키지 규격 및 아키텍처 명세 (Package Matrix)

| 패키지 명칭 | 버전 | 라이선스 | 패키지 유형 | 주요 진입점 (CLI) | 의존성 (Depends) |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **`termux-tts`** | 1.6.0 | Apache-2.0 | aarch64 | `termux-tts` | `nodejs, python, libc++` |
| **`termux-stt`** | 1.4.0 | Apache-2.0 | aarch64 | `termux-stt`, `termux-stt-install` | `nodejs, python, libc++, libvulkan` |
| **`termux-bitnet`** | 2.0.1 | Apache-2.0 | aarch64 | `termux-bitnet` | `nodejs, python, libc++` |
| **`termux-llamacpp`** | 1.4.0 | Apache-2.0 | aarch64 | `termux-llama`, `termux-llamacpp` | `nodejs, python, libc++` |
| **`termux-diffusion`**| 2.0.1 | Apache-2.0 | aarch64 | `termux-diffusion` | `nodejs, python, libc++` |
| **`termux-vision`** | 1.7.0 | Apache-2.0 | aarch64 | `termux-vision`, `tv` | `nodejs, python, libc++` |
| **`termux-aichain`** | 1.1.5 | Apache-2.0 | all | Python SDK & Agent | `python` |
| **`termux-train`** | 2.0.1 | Apache-2.0 | aarch64 | `termux-train`, `tt` | `nodejs, python, libc++` |
| **`termux-ai-suite`** | 1.0.0 | Apache-2.0 | all | `termux-ai-suite` | 8대 모달리티 패키지 전체 |

---

## 3. 사전 무결성 검증 완료 내역 (Pre-flight Audit)

본 리포지토리의 자동화 감사 도구(`tools/validate_termux_upstream_recipes.py`)를 통해 다음 항목에 대한 검증을 100% 완료하였습니다:

1. **SPDX 라이선스 규격 준수**: 전 패키지 `Apache-2.0` 오픈소스 적격성 통과
2. **원격 소스 아카이브 및 SHA-256 해시 무결성**: 전 패키지 퍼블릭 릴리스 바이너리 다운로드 및 체크섬 일치 확인
3. **설치 훅 무결성**: `termux_step_make_install()` 함수를 통한 POSIX 심볼릭 링크 및 실행 권한(`chmod 755`) 설정 검증 완료

---

## 4. 로컬 도커 빌드 환경 검증 (Local Docker Verification)

Termux 공식 빌드 팜 환경과 100% 동일한 컨테이너에서 사전 크로스 컴파일 테스트를 수행합니다.

```bash
# 1. 공식 termux-packages 저장소 클론
git clone https://github.com/termux/termux-packages.git
cd termux-packages

# 2. 본 리포지토리에서 준비된 레시피 복사
cp -r /path/to/uno-km/upstream/termux-packages/packages/termux-* packages/

# 3. 공식 Docker 빌드 컨테이너 실행 및 aarch64 타겟 컴파일 검증
./scripts/run-docker.sh ./build-package.sh -a aarch64 termux-tts
./scripts/run-docker.sh ./build-package.sh -a aarch64 termux-stt
./scripts/run-docker.sh ./build-package.sh -a aarch64 termux-bitnet
./scripts/run-docker.sh ./build-package.sh -a aarch64 termux-llamacpp
./scripts/run-docker.sh ./build-package.sh -a aarch64 termux-diffusion
./scripts/run-docker.sh ./build-package.sh -a aarch64 termux-vision
./scripts/run-docker.sh ./build-package.sh -a aarch64 termux-aichain
./scripts/run-docker.sh ./build-package.sh -a aarch64 termux-train
./scripts/run-docker.sh ./build-package.sh -a aarch64 termux-ai-suite
```

---

## 5. 업스트림 Git PR 제출 워크플로우 (Upstream Submission)

### 가. 브랜치 생성 및 커밋 규칙

Termux 업스트림 커밋 메시지 표준 컨벤션을 준수합니다:

```bash
git checkout -b feat/add-termux-ai-modalities

# 개별 패키지별 원자적 커밋(Atomic Commits) 작성
git add packages/termux-tts/build.sh
git commit -m "termux-tts: new package at version 1.6.0"

git add packages/termux-stt/build.sh
git commit -m "termux-stt: new package at version 1.4.0"

git add packages/termux-bitnet/build.sh
git commit -m "termux-bitnet: new package at version 2.0.1"

git add packages/termux-llamacpp/build.sh
git commit -m "termux-llamacpp: new package at version 1.4.0"

git add packages/termux-diffusion/build.sh
git commit -m "termux-diffusion: new package at version 2.0.1"

git add packages/termux-vision/build.sh
git commit -m "termux-vision: new package at version 1.7.0"

git add packages/termux-aichain/build.sh
git commit -m "termux-aichain: new package at version 1.1.5"

git add packages/termux-train/build.sh
git commit -m "termux-train: new package at version 2.0.1"

git add packages/termux-ai-suite/build.sh
git commit -m "termux-ai-suite: new package at version 1.0.0"
```

### 나. 공식 Pull Request 및 레지스트리 증적 (Submitted PR #32505)

공식 PR 링크: [termux/termux-packages#32505](https://github.com/termux/termux-packages/pull/32505)

| 패키지 명칭 및 버전 | 웹 문서 | PyPI 배포처 | npm 배포처 | 소스 저장소 |
| :--- | :---: | :---: | :---: | :---: |
| `termux-tts` (v1.6.0) | [Docs](https://uno-km.vercel.app/lib/tts/) | [PyPI](https://pypi.org/project/termux-tts/) | [npm](https://www.npmjs.com/package/termux-tts) | [GitHub](https://github.com/uno-km/termux-tts) |
| `termux-stt` (v1.4.0) | [Docs](https://uno-km.vercel.app/lib/stt/) | [PyPI](https://pypi.org/project/termux-stt/) | [npm](https://www.npmjs.com/package/termux-stt) | [GitHub](https://github.com/uno-km/termux-stt) |
| `termux-bitnet` (v2.0.1) | [Docs](https://uno-km.vercel.app/lib/bitnet/) | [PyPI](https://pypi.org/project/termux-bitnet/) | [npm](https://www.npmjs.com/package/termux-bitnet) | [GitHub](https://github.com/uno-km/termux-bitnet) |
| `termux-llamacpp` (v1.4.0) | [Docs](https://uno-km.vercel.app/lib/llamacpp/) | [PyPI](https://pypi.org/project/termux-llamacpp/) | [npm](https://www.npmjs.com/package/termux-llamacpp) | [GitHub](https://github.com/uno-km/termux-llamacpp) |
| `termux-diffusion` (v2.0.1) | [Docs](https://uno-km.vercel.app/lib/diffusion/) | [PyPI](https://pypi.org/project/termux-diffusion/) | [npm](https://www.npmjs.com/package/termux-diffusion) | [GitHub](https://github.com/uno-km/termux-diffusion) |
| `termux-vision` (v1.7.0) | [Docs](https://uno-km.vercel.app/lib/vision/) | [PyPI](https://pypi.org/project/termux-vision/) | [npm](https://www.npmjs.com/package/termux-vision) | [GitHub](https://github.com/uno-km/termux-vision) |
| `termux-aichain` (v1.1.5) | [Docs](https://uno-km.vercel.app/lib/aichain/) | [PyPI](https://pypi.org/project/termux-aichain/) | [npm](https://www.npmjs.com/package/termux-aichain) | [GitHub](https://github.com/uno-km/termux-aichain) |
| `termux-train` (v2.0.1) | [Docs](https://uno-km.vercel.app/lib/train/) | [PyPI](https://pypi.org/project/termux-train/) | [npm](https://www.npmjs.com/package/termux-train) | [GitHub](https://github.com/uno-km/termux-train) |
| `termux-ai-suite` (v1.0.0) | [Portal](https://uno-km.vercel.app/) | — | — | Meta-package |

---

## 6. 업스트림 머지 후 자동 전파 과정

1. **GitHub Actions CI 빌드**: PR 생성 시 Termux 공식 워크플로우가 aarch64, arm, x86_64, i686 전 아키텍처에 대해 교차 컴파일을 자동 실행합니다.
2. **공식 메인라인 머지**: 메인테이너 승인 후 `termux-packages`의 `master` 브랜치에 머지됩니다.
3. **공식 APT 미러 배포**: Bintray 및 `packages.termux.dev` 공식 저장소에 `.deb` 바이너리가 등재됩니다.
4. **글로벌 단말기 활성화**: 전 세계 모든 순정 Termux 단말기에서 추가 명령어 없이 `pkg install termux-stt` 등이 즉시 동작합니다.
