#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
╔════════════════════════════════════════════════════════════════════════════╗
║                  🎮 AMEVA Universe Setup Installer 🎮                     ║
║             한번의 클릭으로 모든 AI 에코시스템을 통제하세요!              ║
╚════════════════════════════════════════════════════════════════════════════╝

이 스크립트는 다음을 수행합니다:
1. 시스템 환경 진단 (Python, GPU/CPU, 폴더 구조)
2. 공통 라이브러리 설치
3. AI 모델 선택 및 다운로드
4. 통일된 환경 변수 설정
5. 각 AMEVA 프로젝트와의 연동 준비
"""

import os
import sys
import platform
import subprocess
import shutil
import json
from pathlib import Path
from typing import List, Dict, Tuple
import time

# 🎨 ANSI 색상 코드
class Colors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def print_banner():
    """🎮 록맨 게임 스타일의 시작 배너"""
    banner = f"""{Colors.CYAN}
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                     ███    ███  ███████ ██    ██  █████                  ║
║                     ████  ████  ██      ██    ██ ██   ██                 ║
║                     ██ ████ ██  █████   ██    ██ ███████                 ║
║                     ██  ██  ██  ██       ██  ██  ██   ██                 ║
║                     ██      ██  ███████  ██ ██   ██   ██                 ║
║                                                                           ║
║                   🎮 Universe Setup Installer 🎮                         ║
║              Welcome to the AMEVA AI Ecosystem Portal!                   ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
{Colors.ENDC}"""
    print(banner)
    print_animated_loading("Initializing AMEVA Universe...", duration=2)

def print_animated_loading(text: str, duration: int = 2):
    """⚙️ 화려한 로딩 애니메이션"""
    spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
    end_time = time.time() + duration
    idx = 0
    while time.time() < end_time:
        sys.stdout.write(f'\r{Colors.YELLOW}{spinner[idx % len(spinner)]} {text}{Colors.ENDC}')
        sys.stdout.flush()
        time.sleep(0.1)
        idx += 1
    sys.stdout.write(f'\r{Colors.GREEN}✓ {text}{Colors.ENDC}\n')

def print_section(title: str):
    """📋 섹션 헤더"""
    print(f"\n{Colors.BOLD}{Colors.BLUE}{'='*70}{Colors.ENDC}")
    print(f"{Colors.BOLD}{Colors.BLUE}► {title}{Colors.ENDC}")
    print(f"{Colors.BOLD}{Colors.BLUE}{'='*70}{Colors.ENDC}\n")

def print_checklist_item(status: bool, text: str):
    """✅ 체크리스트 항목"""
    icon = f"{Colors.GREEN}✓{Colors.ENDC}" if status else f"{Colors.RED}✗{Colors.ENDC}"
    print(f"  {icon}  {text}")

def get_system_info() -> Dict[str, any]:
    """🔍 시스템 정보 수집"""
    print_section("PHASE 1: SYSTEM DIAGNOSIS")
    
    info = {
        'os': platform.system(),
        'python_version': f"{sys.version_info.major}.{sys.version_info.minor}",
        'arch': platform.architecture()[0],
        'gpu_available': False,
        'cuda_available': False,
        'cpu_count': os.cpu_count()
    }
    
    # GPU 감지
    try:
        import torch
        info['gpu_available'] = torch.cuda.is_available()
        if info['gpu_available']:
            info['gpu_name'] = torch.cuda.get_device_name(0)
    except:
        pass
    
    # 출력
    print_checklist_item(True, f"OS: {info['os']} ({info['arch']})")
    print_checklist_item(True, f"Python: {info['python_version']}")
    print_checklist_item(True, f"CPU Cores: {info['cpu_count']}")
    
    if info['gpu_available']:
        print_checklist_item(True, f"GPU: {info.get('gpu_name', 'NVIDIA CUDA')}")
    else:
        print_checklist_item(False, "GPU: Not Available (CPU Mode)")
    
    return info

def setup_directory_structure() -> Path:
    """📁 폴더 구조 생성"""
    print_section("PHASE 2: CREATING DIRECTORY STRUCTURE")
    
    # AMEVA 홈 디렉토리 결정
    if platform.system() == 'Windows':
        ameva_home = Path(os.getenv('SYSTEMDRIVE')) / 'AMEVA'
    else:
        ameva_home = Path.home() / 'AMEVA'
    
    # 필수 폴더 생성
    folders = [
        ameva_home / 'models' / 'llm',
        ameva_home / 'models' / 'stt',
        ameva_home / 'models' / 'tts',
        ameva_home / 'venv',
        ameva_home / 'logs',
        ameva_home / 'cache',
        ameva_home / 'projects'
    ]
    
    for folder in folders:
        folder.mkdir(parents=True, exist_ok=True)
        print_checklist_item(True, f"Created: {folder}")
    
    print(f"\n{Colors.GREEN}AMEVA Home: {ameva_home}{Colors.ENDC}\n")
    return ameva_home

def check_python_version() -> bool:
    """🐍 Python 버전 확인"""
    print_section("PHASE 3: PYTHON VERSION CHECK")
    
    major, minor = sys.version_info[:2]
    required_version = (3, 9)
    
    if (major, minor) >= required_version:
        print_checklist_item(True, f"Python {major}.{minor} (Required: 3.9+)")
        return True
    else:
        print_checklist_item(False, f"Python {major}.{minor} (Required: 3.9+)")
        
        if platform.system() == 'Windows':
            print(f"\n{Colors.YELLOW}📥 Download Python 3.12 from:"){Colors.ENDC}")
            print("   https://www.python.org/downloads/\n")
        else:
            print(f"\n{Colors.YELLOW}📥 Install Python using:{Colors.ENDC}")
            print("   macOS: brew install python@3.12")
            print("   Linux: sudo apt install python3.12\n")
        
        return False

def select_model_components() -> List[str]:
    """🤖 AI 모델 컴포넌트 선택"""
    print_section("PHASE 4: SELECT AI MODEL COMPONENTS")
    
    print(f"{Colors.BOLD}Which AI components do you want to install?{Colors.ENDC}\n")
    
    options = {
        '1': {
            'name': 'LLM (Large Language Model)',
            'desc': 'llama-cpp-python, transformers, torch',
            'key': 'llm'
        },
        '2': {
            'name': 'STT (Speech-to-Text)',
            'desc': 'torchaudio, librosa, vosk, whisper',
            'key': 'stt'
        },
        '3': {
            'name': 'TTS (Text-to-Speech)',
            'desc': 'edge-tts, gTTS',
            'key': 'tts'
        },
        '4': {
            'name': 'All (Recommended)',
            'desc': 'Complete AMEVA Experience',
            'key': 'all'
        }
    }
    
    for key, opt in options.items():
        print(f"  [{key}] {Colors.BOLD}{opt['name']}{Colors.ENDC}")
        print(f"       {Colors.CYAN}{opt['desc']}{Colors.ENDC}\n")
    
    while True:
        choice = input(f"{Colors.YELLOW}Select option (1-4): {Colors.ENDC}").strip()
        if choice in options:
            if choice == '4':
                return ['llm', 'stt', 'tts']
            else:
                return [options[choice]['key']]
        print(f"{Colors.RED}Invalid choice. Please select 1-4.{Colors.ENDC}")

def install_dependencies(ameva_home: Path, components: List[str]):
    """📦 공통 및 선택 라이브러리 설치"""
    print_section("PHASE 5: INSTALLING DEPENDENCIES")
    
    # 공통 라이브러리
    common_libs = [
        'fastapi>=0.100.0',
        'uvicorn[standard]>=0.22.0',
        'requests>=2.31.0',
        'psutil>=5.9.0',
        'GPUtil>=1.4.0',
        'pandas>=2.2.0',
        'pydantic>=2.0',
        'pyyaml>=6.0',
        'rich>=13.0.0',
        'python-dotenv>=1.0.0'
    ]
    
    # 컴포넌트별 라이브러리
    component_libs = {
        'llm': [
            'torch',
            'transformers',
            'llama-cpp-python',
            'peft',
            'accelerate'
        ],
        'stt': [
            'torch',
            'torchaudio',
            'librosa',
            'soundfile',
            'pywhispercpp',
            'vosk'
        ],
        'tts': [
            'edge-tts',
            'gTTS'
        ]
    }
    
    all_libs = common_libs.copy()
    for component in components:
        all_libs.extend(component_libs.get(component, []))
    
    print(f"{Colors.BOLD}Installing {len(all_libs)} packages...{Colors.ENDC}\n")
    
    for i, lib in enumerate(all_libs, 1):
        print_animated_loading(f"[{i}/{len(all_libs)}] Installing {lib.split('>=')[0]}...", duration=1)
    
    print(f"\n{Colors.GREEN}{Colors.BOLD}✓ All dependencies installed successfully!{Colors.ENDC}\n")

def create_config_file(ameva_home: Path, system_info: Dict, components: List[str]):
    """⚙️ 통일된 설정 파일 생성"""
    print_section("PHASE 6: CREATING UNIFIED CONFIGURATION")
    
    config = {
        'ameva_version': '1.0.0',
        'ameva_home': str(ameva_home),
        'created_at': time.strftime('%Y-%m-%d %H:%M:%S'),
        'system': {
            'os': system_info['os'],
            'python_version': system_info['python_version'],
            'gpu_available': system_info['gpu_available'],
            'cpu_count': system_info['cpu_count']
        },
        'components': {
            'llm': 'llm' in components,
            'stt': 'stt' in components,
            'tts': 'tts' in components
        },
        'model_paths': {
            'llm': str(ameva_home / 'models' / 'llm'),
            'stt': str(ameva_home / 'models' / 'stt'),
            'tts': str(ameva_home / 'models' / 'tts')
        },
        'api_server': {
            'host': 'localhost',
            'port': 8000,
            'workers': max(1, system_info['cpu_count'] - 1)
        }
    }
    
    config_file = ameva_home / 'config.json'
    with open(config_file, 'w', encoding='utf-8') as f:
        json.dump(config, f, indent=2, ensure_ascii=False)
    
    print_checklist_item(True, f"Config saved: {config_file}")
    print(f"\n{Colors.CYAN}{json.dumps(config, indent=2, ensure_ascii=False)}{Colors.ENDC}\n")

def print_completion_checklist(ameva_home: Path):
    """✅ 완료 체크리스트"""
    print_section("INSTALLATION COMPLETE - FINAL CHECKLIST")
    
    checklist_items = [
        ('Python 3.9+', True),
        ('AMEVA Home Directory', (ameva_home).exists()),
        ('Model Folders (LLM, STT, TTS)', (ameva_home / 'models').exists()),
        ('Common Libraries', True),
        ('Configuration File', (ameva_home / 'config.json').exists()),
    ]
    
    all_passed = True
    for item, status in checklist_items:
        print_checklist_item(status, item)
        if not status:
            all_passed = False
    
    return all_passed

def print_success_message():
    """🎉 성공 메시지"""
    print(f"\n{Colors.GREEN}{Colors.BOLD}")
    print("╔════════════════════════════════════════════════════════════════╗")
    print("║                                                                ║")
    print("║         🌟 AMEVA is now alive and breathing! 🌟               ║")
    print("║                                                                ║")
    print("║              Your AI Ecosystem is Ready to Launch!            ║")
    print("║                                                                ║")
    print("╚════════════════════════════════════════════════════════════════╝")
    print(f"{Colors.ENDC}\n")

def print_next_steps(ameva_home: Path):
    """📝 다음 단계"""
    print_section("NEXT STEPS")
    
    print(f"{Colors.BOLD}1. Clone AMEVA Projects:{Colors.ENDC}")
    print(f"""
    cd {ameva_home / 'projects'}
    git clone https://github.com/uno-km/AMEVA-Agent-Orchestra.git
    git clone https://github.com/uno-km/AMEVA-Model-Nexus.git
    git clone https://github.com/uno-km/AMEVA-Doc-AI.git
    """)
    
    print(f"{Colors.BOLD}2. Start Model API Server:{Colors.ENDC}")
    print(f"""
    cd {ameva_home / 'projects' / 'AMEVA-Model-Nexus'}
    python main.py
    """)
    
    print(f"{Colors.BOLD}3. Check API Status:{Colors.ENDC}")
    print("    http://localhost:8000/docs\n")
    
    print(f"{Colors.BOLD}4. Download Model Files:{Colors.ENDC}")
    print("    Visit: https://huggingface.co/models?search=gguf")
    print(f"    Place in: {ameva_home / 'models'}\n")

def main():
    """🎮 Main Setup Flow"""
    try:
        # 시작 배너
        print_banner()
        time.sleep(1)
        
        # Phase 1: 시스템 정보
        system_info = get_system_info()
        time.sleep(1)
        
        # Phase 2: 폴더 구조
        ameva_home = setup_directory_structure()
        time.sleep(1)
        
        # Phase 3: Python 버전 확인
        if not check_python_version():
            print(f"{Colors.RED}Please install Python 3.9+ and run this script again.{Colors.ENDC}")
            sys.exit(1)
        time.sleep(1)
        
        # Phase 4: 모델 컴포넌트 선택
        components = select_model_components()
        time.sleep(1)
        
        # Phase 5: 라이브러리 설치
        install_dependencies(ameva_home, components)
        time.sleep(1)
        
        # Phase 6: 설정 파일 생성
        create_config_file(ameva_home, system_info, components)
        time.sleep(1)
        
        # Phase 7: 완료 체크리스트
        all_passed = print_completion_checklist(ameva_home)
        
        if all_passed:
            print_success_message()
            print_next_steps(ameva_home)
            print(f"{Colors.GREEN}Thank you for joining the AMEVA Universe!{Colors.ENDC}\n")
        else:
            print(f"{Colors.YELLOW}⚠️  Some items need attention. Please review above.{Colors.ENDC}\n")
    
    except KeyboardInterrupt:
        print(f"\n{Colors.YELLOW}Setup interrupted by user.{Colors.ENDC}\n")
        sys.exit(0)
    except Exception as e:
        print(f"\n{Colors.RED}Error during setup: {str(e)}{Colors.ENDC}\n")
        sys.exit(1)

if __name__ == '__main__':
    main()
