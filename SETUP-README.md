# 🎮 AMEVA Universe - 통합 설정 및 가이드문서

이 디렉토리는 모든 AMEVA 프로젝트의 **원클릭 설치 및 통합 관리 센터**입니다.

## 📋 구조

```
uno-km/
├── setup.py                    # Python 기반 설치 프로그램 (모든 OS)
├── setup.sh                    # Bash 설치 스크립트 (macOS, Linux)
├── setup.ps1                   # PowerShell 설치 스크립트 (Windows)
├── requirements.txt            # 통합 의존성 파일 (모든 AMEVA 프로젝트의 중복 제거)
├── .env.example               # 환경변수 템플릿
├── AmevaSetup.psm1           # PowerShell 모듈
├── profile.ps1                # PowerShell 프로필 (자동 초기화)
├── AMEVA-SETUP-GUIDE.md       # 상세 설치 가이드
└── README.md                  # 이 파일
```

---

## 🚀 빠른 시작 (One-Click Installation)

### 🪟 Windows (PowerShell)

```powershell
# 관리자 권한으로 PowerShell 실행 후:
irm https://raw.githubusercontent.com/uno-km/uno-km/setup-universe-feature/setup.ps1 | iex
```

또는 로컬에서:

```powershell
# PowerShell 실행 정책 변경 (필요시)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# 설치 실행
.\setup.ps1
```

### 🍎 macOS / 🐧 Linux (Bash)

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/uno-km/uno-km/setup-universe-feature/setup.sh)
```

또는 로컬에서:

```bash
chmod +x setup.sh
./setup.sh
```

### 🐍 Python (모든 OS)

```bash
python setup.py
```

---

## 📊 설치 프로세스

### Phase 1: 시스템 진단 ✓
- OS, Python, CPU/GPU 정보 수집
- AMEVA 홈 디렉토리 결정

### Phase 2: 폴더 구조 생성 ✓
```
C:\AMEVA (Windows) 또는 ~/AMEVA (macOS/Linux)
├── models/
│   ├── llm/       (LLM 모델)
│   ├── stt/       (STT 모델)
│   └── tts/       (TTS 모델)
├── projects/      (AMEVA 프로젝트 클론 위치)
├── venv/          (가상환경)
├── logs/
└── cache/
```

### Phase 3: Python 버전 확인 ✓
- 3.9+ 필요 (3.12 권장)

### Phase 4: AI 모델 컴포넌트 선택 ✓
- LLM (Large Language Model)
- STT (Speech-to-Text)
- TTS (Text-to-Speech)
- All (모두 설치)

### Phase 5: 의존성 설치 ✓
- 공통 라이브러리 (fastapi, requests, pandas...)
- 선택한 AI 스택 (torch, librosa, edge-tts...)
- 화려한 진행률 표시와 애니메이션

### Phase 6: 설정 파일 생성 ✓
- `config.json` 생성
- 환경변수 설정

### Phase 7: 완료 체크리스트 ✓
- 모든 항목 확인
- 성공 메시지 출력
- 다음 단계 안내

---

## 📦 통합된 의존성 (requirements.txt)

모든 AMEVA 프로젝트의 `requirements.txt`를 분석하여 **중복 제거 및 통합**:

### 공통 필수 라이브러리 (All Projects)
- **API Server**: fastapi, uvicorn, jinja2
- **Network**: requests, httpx, websockets
- **System**: psutil, GPUtil, watchdog
- **Data**: pandas, numpy, python-dotenv
- **CLI**: rich, typer, tqdm

### LLM 스택 (선택)
- torch, transformers, llama-cpp-python, peft, accelerate

### STT 스택 (선택)
- torchaudio, librosa, soundfile, vosk, pywhispercpp

### TTS 스택 (선택)
- edge-tts, gTTS

---

## 🛠️ 설치 후 사용

### 1️⃣ AMEVA 프로젝트 클론

```bash
cd ~/AMEVA/projects  # 또는 C:\AMEVA\projects

git clone https://github.com/uno-km/AMEVA-Agent-Orchestra.git
git clone https://github.com/uno-km/AMEVA-Model-Nexus.git
git clone https://github.com/uno-km/AMEVA-Doc-AI.git
git clone https://github.com/uno-km/AMEVA-Conductor.git
# ... 기타 프로젝트
```

### 2️⃣ API 서버 시작

```bash
cd ~/AMEVA/projects/AMEVA-Model-Nexus
python main.py
```

### 3️⃣ API 확인

```
http://localhost:8000/docs
```

### 4️⃣ 모델 다운로드

[Hugging Face - GGUF Models](https://huggingface.co/models?search=gguf)에서 모델을 다운로드하고 다음 폴더에 배치:

```
~/AMEVA/models/llm/        # LLM 모델
~/AMEVA/models/stt/        # STT 모델
~/AMEVA/models/tts/        # TTS 모델
```

---

## 📋 체크리스트

설치 완료 후 다음을 확인하세요:

- [ ] Python 3.9+ 설치됨
- [ ] AMEVA 홈 디렉토리 생성됨
- [ ] 모델 폴더 생성됨 (llm, stt, tts)
- [ ] 공통 라이브러리 설치됨
- [ ] 선택한 AI 스택 설치됨
- [ ] config.json 생성됨
- [ ] 환경변수 설정됨

---

## 🔍 트러블슈팅

### ❌ "Python not found"
- Windows: https://www.python.org/downloads/ 에서 3.12 설치
- macOS: `brew install python@3.12`
- Linux: `sudo apt install python3.12 python3.12-venv`

### ❌ "Permission denied" (macOS/Linux)
```bash
chmod +x setup.sh setup.py
```

### ❌ "Access is denied" (Windows PowerShell)
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### ❌ 모델 다운로드 실패
- 수동으로 모델을 다운로드하고 `~/AMEVA/models/` 폴더에 배치
- 또는 각 프로젝트의 README 참고

---

## 🌍 AMEVA 유니버스 전체 구조

### 코어 (Core)
- **AMEVA-Agent-Orchestra**: 계층형 멀티 에이전트 오케스트레이션
- **AMEVA-Model-Nexus**: 중앙 집중형 API 허브

### AI 학습 (AI Training)
- **AMEVA-LLM-Trainer**: LLM 파인튜닝
- **AMEVA-STT-Trainer**: STT 파인튜닝

### 유틸리티 (Utility)
- **AMEVA-Doc-AI**: 오프라인 문서 요약 & PDF 변환
- **AMEVA-Window-Assistant**: Windows 로컬 AI 어시스턴트

### 통합 (Integration)
- **AMEVA-Conductor**: 텔레그램 봇 기반 원격 제어
- **AMEVA-Data-Harvester**: 엣지 데이터 포워더
- **AMEVA-Database**: SQLite 인스펙터

### 테스트 (Testing)
- **AMEVA-Benchmark-Suite**: 성능 검증
- **AMEVA-Dead-Internet-Threatre**: 멀티 에이전트 시뮬레이션

---

## 📞 지원

문제가 발생하면:

1. 위의 트러블슈팅 섹션 확인
2. 각 프로젝트의 README 확인
3. GitHub Issues 등록

---

**🌟 AMEVA 유니버스에 오신 것을 환영합니다! 🌟**

*"한번의 설치로 전체 AI 에코시스템을 통제하세요."*
