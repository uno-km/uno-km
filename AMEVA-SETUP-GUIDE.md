# 🎮 AMEVA Universe - Setup Guide

> **한번에 모든 AMEVA 프로젝트를 설치하고 통일된 환경으로 실행하세요!**

## 🌟 AMEVA 유니버스란?

AMEVA는 로컬 GGUF 모델 기반의 **분산 AI 에이전트 생태계**입니다. 각 프로젝트는 독립적이지만, 공통의 기초 라이브러리와 모델 구조를 공유합니다.

### 📦 AMEVA 프로젝트 목록

| 프로젝트 | 설명 | 타입 |
|---------|------|------|
| [AMEVA-Agent-Orchestra](https://github.com/uno-km/AMEVA-Agent-Orchestra) | 계층형 멀티 에이전트 오케스트레이션 | Core |
| [AMEVA-Model-Nexus](https://github.com/uno-km/AMEVA-Model-Nexus) | 중앙 집중형 API 허브 | Core |
| [AMEVA-LLM-Trainer](https://github.com/uno-km/AMEVA-LLM-Trainer) | LLM 파인튜닝 엔진 | AI Training |
| [AMEVA-STT-Trainer](https://github.com/uno-km/AMEVA-STT-Trainer) | STT 파인튜닝 (Whisper 기반) | AI Training |
| [AMEVA-Doc-AI](https://github.com/uno-km/AMEVA-Doc-AI) | 오프라인 문서 요약 & PDF 변환 | Utility |
| [AMEVA-Window-Assistant](https://github.com/uno-km/AMEVA-Window-Assistant) | Windows 로컬 AI 어시스턴트 | Utility |
| [AMEVA-Conductor](https://github.com/uno-km/AMEVA-Conductor) | 텔레그램 봇 기반 원격 제어 | Integration |
| [AMEVA-Data-Harvester](https://github.com/uno-km/AMEVA-Data-Harvester) | 엣지 데이터 포워더 | Data |
| [AMEVA-Database](https://github.com/uno-km/AMEVA-Database) | SQLite 인스펙터 | Data |
| [AMEVA-Benchmark-Suite](https://github.com/uno-km/AMEVA-Benchmark-Suite) | 성능 검증 아키텍처 | Testing |

---

## 🚀 원클릭 설치 (One-Click Setup)

### 방법 1️⃣: PowerShell (Windows)
```powershell
# PowerShell을 관리자로 실행한 후:
irm https://raw.githubusercontent.com/uno-km/AMEVA-Setup-Universe/main/setup.ps1 | iex
```

### 방법 2️⃣: Bash (macOS / Linux)
```bash
curl -fsSL https://raw.githubusercontent.com/uno-km/AMEVA-Setup-Universe/main/setup.sh | bash
```

### 방법 3️⃣: Git Clone + Manual Setup
```bash
git clone https://github.com/uno-km/AMEVA-Setup-Universe.git
cd AMEVA-Setup-Universe
python setup.py
```

---

## 📋 설치 흐름

### Phase 1: 환경 진단 (System Diagnosis)
- ✅ Python 버전 확인 (3.12+ 권장)
- ✅ CPU vs GPU 감지
- ✅ 필수 폴더 구조 생성
- ✅ 기존 설치 검사

### Phase 2: 기초 라이브러리 설치 (Base Dependencies)
- ✅ 공통 라이브러리 설치 (fastapi, requests, psutil 등)
- ✅ 진행률 표시 (spinning animation)
- ✅ 설치 결과 체크리스트

### Phase 3: AI 모델 선택 (Model Selection)
```
Which AI components do you want to install?

[1] LLM (Large Language Model)
    └─ llama-cpp-python, transformers, torch
[2] STT (Speech-to-Text)
    └─ torchaudio, librosa, vosk
[3] TTS (Text-to-Speech)
    └─ edge-tts
[4] All (권장)
```

### Phase 4: 모델 다운로드 (Model Download)
- 선택한 모델 그룹의 기초 가중치 다운로드
- 또는 나중에 수동 다운로드 가능

---

## 🗂️ 생성되는 폴더 구조

```
C:\AMEVA\                          (Windows) 또는 ~/AMEVA/ (macOS/Linux)
├── models/
│   ├── llm/
│   │   ├── neural-chat-7b-v3-2.Q4_K_M.gguf
│   │   ├── mistral-7b-instruct.Q4_K_M.gguf
│   │   └── ...
│   ├── stt/
│   │   ├── base.pt
│   │   ├── small.pt
│   │   └── ...
│   ├── tts/
│   │   └── ...
│   └── config.json
├── venv/                          (가상환경)
├── logs/
├── cache/
└── README.md
```

---

## ✨ 설치 완료 후

### 1️⃣ 각 프로젝트 실행

```bash
# AMEVA-Model-Nexus (API 서버)
cd AMEVA-Model-Nexus
python main.py

# AMEVA-Agent-Orchestra (에이전트 오케스트레이션)
cd AMEVA-Agent-Orchestra
python orchestra.py

# AMEVA-Doc-AI (문서 처리)
cd AMEVA-Doc-AI
python app.py
```

### 2️⃣ API 테스트

```bash
curl http://localhost:8000/docs
```

### 3️⃣ 모델 업데이트

```python
from ameva_setup import ModelManager

manager = ModelManager()
manager.update_llm_models()    # LLM 모델 업데이트
manager.update_stt_models()    # STT 모델 업데이트
```

---

## 🔧 트러블슈팅

### ❌ "Python not found"
```bash
# Python 3.12 설치
# Windows: https://www.python.org/downloads/
# macOS: brew install python@3.12
# Linux: sudo apt install python3.12
```

### ❌ "CUDA not available"
- GPU 없이도 작동하지만 속도가 느립니다.
- CPU 최적화 모드로 자동 전환됩니다.

### ❌ "모델 다운로드 실패"
```bash
# 수동 다운로드 후 폴더에 배치
# C:\AMEVA\models\llm\ 또는 ~/AMEVA/models/llm/
```

---

## 📚 상세 가이드

자세한 설치 및 설정 방법은 다음을 참고하세요:

- **Setup 저장소**: [AMEVA-Setup-Universe](https://github.com/uno-km/AMEVA-Setup-Universe)
- **각 프로젝트 README**: 위의 프로젝트 목록 참고
- **모델 다운로드**: [Hugging Face - GGUF Models](https://huggingface.co/models?search=gguf)

---

## 🤝 기여하기

AMEVA 유니버스 개선에 참여하세요!

```bash
git clone https://github.com/uno-km/AMEVA-Setup-Universe.git
cd AMEVA-Setup-Universe
git checkout -b feature/your-feature
# 수정 후
git push origin feature/your-feature
```

---

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

---

**🌌 AMEVA 유니버스에 오신 것을 환영합니다! 🌌**

*"한번의 설치로 전체 AI 에코시스템을 통제하세요."*
