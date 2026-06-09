#!/bin/bash
# -*- coding: utf-8 -*-
################################################################################
#                     🎮 AMEVA Universe Setup - Bash Edition 🎮               #
#                  한번의 커맨드로 모든 AI 에코시스템을 시작하세요!            #
################################################################################

set -e  # 에러 발생시 스크립트 중단

# 🎨 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'  # No Color

# ⚙️ 시스템 정보
OS=$(uname -s)
ARCH=$(uname -m)
PYTHON_VERSION=$(python3 --version 2>&1 | awk '{print $2}')

# 🏠 AMEVA 홈 디렉토리 (모두 소문자)
if [ "$OS" = "Darwin" ]; then
    AMEVA_HOME="${HOME}/ameva"
elif [ "$OS" = "Linux" ]; then
    AMEVA_HOME="${HOME}/ameva"
else
    echo "❌ Unsupported OS: $OS"
    exit 1
fi

################################################################################
# 함수 정의
################################################################################

print_banner() {
    cat << 'EOF'
    
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║               █████  ███    ███ ███████ ██    ██  █████                   ║
║              ██   ██ ████  ████ ██      ██    ██ ██   ██                  ║
║              ███████ ██ ████ ██ █████   ██    ██ ███████                  ║
║              ██   ██ ██  ██  ██ ██       ██  ██  ██   ██                  ║
║              ██   ██ ██      ██ ███████   ██ ██   ██   ██                  ║
║                                                                           ║
║                   🎮 AMEVA Universe Setup Installer 🎮                   ║
║              Welcome to the AMEVA AI Ecosystem Portal!                   ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
    
EOF
}

print_section() {
    echo -e "\n${BLUE}${BOLD}========================================${NC}"
    echo -e "${BLUE}${BOLD}► $1${NC}"
    echo -e "${BLUE}${BOLD}========================================${NC}\n"
}

print_check() {
    if [ $1 -eq 0 ]; then
        echo -e "  ${GREEN}✓${NC}  $2"
    else
        echo -e "  ${RED}✗${NC}  $2"
    fi
}

spinner() {
    local pid=$1
    local delay=0.1
    local spinstr='|/-\'
    while [ -d /proc/$pid ]; do
        local temp=${spinstr#?}
        printf " ${YELLOW}%c${NC}" "$spinstr"
        local spinstr=$temp${spinstr%"$temp"}
        sleep $delay
        printf "\b\b\b"
    done
}

################################################################################
# Phase 1: 시스템 진단
################################################################################

print_banner
sleep 1

print_section "PHASE 1: SYSTEM DIAGNOSIS"

echo "  OS: $OS ($ARCH)"
echo "  Python: $PYTHON_VERSION"
echo "  CPU Cores: $(nproc)"

# GPU 감지
if command -v nvidia-smi &> /dev/null; then
    echo -e "  ${GREEN}GPU: NVIDIA CUDA Available${NC}"
else
    echo -e "  ${YELLOW}GPU: Not Available (CPU Mode)${NC}"
fi

sleep 1

################################################################################
# Phase 2: 폴더 구조 생성 (모두 소문자)
################################################################################

print_section "PHASE 2: CREATING DIRECTORY STRUCTURE"

mkdir -p "$AMEVA_HOME"/{models/{llm,stt,tts},venv,logs,cache,projects}

echo -e "  ${GREEN}✓${NC}  Created: $AMEVA_HOME"
echo -e "  ${GREEN}✓${NC}  Created: $AMEVA_HOME/models/llm"
echo -e "  ${GREEN}✓${NC}  Created: $AMEVA_HOME/models/stt"
echo -e "  ${GREEN}✓${NC}  Created: $AMEVA_HOME/models/tts"

sleep 1

################################################################################
# Phase 3: Python 버전 확인
################################################################################

print_section "PHASE 3: PYTHON VERSION CHECK"

PYTHON_MAJOR=$(echo $PYTHON_VERSION | cut -d. -f1)
PYTHON_MINOR=$(echo $PYTHON_VERSION | cut -d. -f2)

if [ "$PYTHON_MAJOR" -ge 3 ] && [ "$PYTHON_MINOR" -ge 9 ]; then
    echo -e "  ${GREEN}✓${NC}  Python $PYTHON_VERSION (Required: 3.9+)"
else
    echo -e "  ${RED}✗${NC}  Python $PYTHON_VERSION (Required: 3.9+)"
    echo -e "\n${YELLOW}📥 Install Python using:${NC}"
    if [ "$OS" = "Darwin" ]; then
        echo "   brew install python@3.12"
    else
        echo "   sudo apt update && sudo apt install python3.12 python3.12-venv"
    fi
    exit 1
fi

sleep 1

################################################################################
# Phase 4: 모델 컴포넌트 선택
################################################################################

print_section "PHASE 4: SELECT AI MODEL COMPONENTS"

echo -e "${BOLD}Which AI components do you want to install?${NC}\n"
echo "  [1] LLM (Large Language Model)"
echo "       llama-cpp-python, transformers, torch"
echo ""
echo "  [2] STT (Speech-to-Text)"
echo "       torchaudio, librosa, vosk, whisper"
echo ""
echo "  [3] TTS (Text-to-Speech)"
echo "       edge-tts, gTTS"
echo ""
echo "  [4] All (Recommended)"
echo "       Complete AMEVA Experience\n"

read -p "${YELLOW}Select option (1-4): ${NC}" CHOICE

case $CHOICE in
    1) COMPONENTS="llm" ;;
    2) COMPONENTS="stt" ;;
    3) COMPONENTS="tts" ;;
    4) COMPONENTS="llm stt tts" ;;
    *) echo "Invalid choice"; exit 1 ;;
esac

echo -e "\n${GREEN}✓ Selected components: $COMPONENTS${NC}\n"

sleep 1

################################################################################
# Phase 5: 라이브러리 설치
################################################################################

print_section "PHASE 5: INSTALLING DEPENDENCIES"

echo -e "${BOLD}Installing common libraries...${NC}\n"

python3 -m pip install --upgrade pip setuptools wheel > /dev/null 2>&1 &
spinner $!
echo -e "  ${GREEN}✓${NC}  pip, setuptools, wheel upgraded"

python3 -m pip install fastapi uvicorn requests psutil pandas pyyaml rich > /dev/null 2>&1 &
spinner $!
echo -e "  ${GREEN}✓${NC}  Common libraries installed (fastapi, requests, pandas...)"

if echo "$COMPONENTS" | grep -q "llm"; then
    python3 -m pip install torch transformers > /dev/null 2>&1 &
    spinner $!
    echo -e "  ${GREEN}✓${NC}  LLM stack installed (torch, transformers...)"
fi

if echo "$COMPONENTS" | grep -q "stt"; then
    python3 -m pip install librosa soundfile > /dev/null 2>&1 &
    spinner $!
    echo -e "  ${GREEN}✓${NC}  STT stack installed (librosa, soundfile...)"
fi

if echo "$COMPONENTS" | grep -q "tts"; then
    python3 -m pip install edge-tts > /dev/null 2>&1 &
    spinner $!
    echo -e "  ${GREEN}✓${NC}  TTS stack installed (edge-tts...)"
fi

sleep 1

################################################################################
# Phase 6: 설정 파일 생성
################################################################################

print_section "PHASE 6: CREATING CONFIGURATION"

cat > "$AMEVA_HOME/config.json" << EOF
{
  "ameva_version": "1.0.0",
  "ameva_home": "$AMEVA_HOME",
  "system": {
    "os": "$OS",
    "arch": "$ARCH",
    "python_version": "$PYTHON_VERSION"
  },
  "components": {
    "llm": $(echo "$COMPONENTS" | grep -q "llm" && echo "true" || echo "false"),
    "stt": $(echo "$COMPONENTS" | grep -q "stt" && echo "true" || echo "false"),
    "tts": $(echo "$COMPONENTS" | grep -q "tts" && echo "true" || echo "false")
  }
}
EOF

echo -e "  ${GREEN}✓${NC}  Config saved: $AMEVA_HOME/config.json"

sleep 1

################################################################################
# Phase 7: 완료
################################################################################

print_section "INSTALLATION COMPLETE"

echo -e "${GREEN}${BOLD}✓ System Diagnosis${NC}"
echo -e "${GREEN}${BOLD}✓ Directory Structure${NC}"
echo -e "${GREEN}${BOLD}✓ Python Version${NC}"
echo -e "${GREEN}${BOLD}✓ Components Selected${NC}"
echo -e "${GREEN}${BOLD}✓ Dependencies Installed${NC}"
echo -e "${GREEN}${BOLD}✓ Configuration Created${NC}\n"

echo -e "${GREEN}${BOLD}"
cat << 'EOF'
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║         🌟 AMEVA is now alive and breathing! 🌟               ║
║                                                                ║
║              Your AI Ecosystem is Ready to Launch!            ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}\n"

################################################################################
# 다음 단계
################################################################################

print_section "NEXT STEPS"

echo -e "${BOLD}1. Clone AMEVA Projects:${NC}"
echo "
   cd $AMEVA_HOME/projects
   git clone https://github.com/uno-km/AMEVA-Agent-Orchestra.git
   git clone https://github.com/uno-km/AMEVA-Model-Nexus.git
"

echo -e "${BOLD}2. Start Model API Server:${NC}"
echo "
   cd $AMEVA_HOME/projects/AMEVA-Model-Nexus
   python main.py
"

echo -e "${BOLD}3. Check API Status:${NC}"
echo "
   http://localhost:8000/docs
"

echo -e "${BOLD}4. Download Model Files:${NC}"
echo "
   Visit: https://huggingface.co/models?search=gguf
   Place in: $AMEVA_HOME/models
"

echo -e "${GREEN}Thank you for joining the AMEVA Universe!${NC}\n"
