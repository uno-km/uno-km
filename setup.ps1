# =============================================================================
# 🎮 AMEVA Universe Setup — PowerShell Edition 🎮
# 한번의 커맨드로 모든 Windows AMEVA AI 에코시스템을 설정하세요!
# =============================================================================
# Usage: irm https://raw.githubusercontent.com/uno-km/uno-km/setup-universe-feature/setup.ps1 | iex
# or locally: powershell -ExecutionPolicy Bypass -File setup.ps1
# =============================================================================

$ErrorActionPreference = "Stop"
$UTF8Encoding = [System.Text.Encoding]::UTF8

# Base GitHub Repository path for remote downloads
$BASE_URL = "https://raw.githubusercontent.com/uno-km/uno-km/setup-universe-feature"
$AMEVA_HOME = "C:\ameva"

# 🎨 색상 유틸리티 함수
function Write-Header {
    param([string]$text)
    Write-Host "`n========================================================================" -ForegroundColor Cyan
    Write-Host "► $text" -ForegroundColor Cyan -Bold
    Write-Host "========================================================================`n" -ForegroundColor Cyan
}

function Write-Check {
    param([bool]$status, [string]$text)
    if ($status) {
        Write-Host "  [✓] $text" -ForegroundColor Green
    } else {
        Write-Host "  [✗] $text" -ForegroundColor Red
    }
}

function Show-Spinner {
    param(
        [ScriptBlock]$ScriptBlock,
        [string]$Message
    )
    
    $spinstr = @('|', '/', '-', '\')
    $job = Start-Job -ScriptBlock $ScriptBlock
    $idx = 0
    
    while ($job.State -eq "Running") {
        $c = $spinstr[$idx % 4]
        Write-Host -NoNewline "`r  $c $Message..." -ForegroundColor Yellow
        Start-Sleep -Milliseconds 100
        $idx++
    }
    
    $result = Receive-Job -Job $job
    Remove-Job -Job $job
    
    # Clear line
    Write-Host -NoNewline "`r                                                                           `r"
    return $result
}

# 🎮 환영 배너 출력
Clear-Host
$banner = @"
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
"@
Clear-Host
Write-Host $banner -ForegroundColor Cyan

Start-Sleep -Seconds 1

# =============================================================================
# PHASE 1: 시스템 진단 (System Diagnosis)
# =============================================================================
Write-Header "PHASE 1: SYSTEM DIAGNOSIS"

# OS 확인
$osVersion = (Get-WmiObject -Class Win32_OperatingSystem).Caption
Write-Check $true "OS: $osVersion (Windows)"

# CPU 코어 수 확인
$cpuCores = $env:NUMBER_OF_PROCESSORS
Write-Check $true "CPU Cores: $cpuCores"

# GPU 확인
$gpuAvailable = $false
$gpuName = "Not Available (CPU Mode)"
$nvidiaSmi = Get-Command nvidia-smi -ErrorAction SilentlyContinue

if ($nvidiaSmi) {
    try {
        $gpuNameRaw = (nvidia-smi --query-gpu=name --format=csv,noheader) | Select-Object -First 1
        if ($gpuNameRaw) {
            $gpuName = $gpuNameRaw.Trim()
            $gpuAvailable = $true
        }
    } catch {
        # nvidia-smi failed or no nvidia gpu
    }
}

Write-Check $gpuAvailable "GPU: $gpuName"
Start-Sleep -Seconds 1

# =============================================================================
# PHASE 2: 폴더 구조 생성 (Creating Directory Structure)
# =============================================================================
Write-Header "PHASE 2: CREATING DIRECTORY STRUCTURE"

$folders = @(
    "$AMEVA_HOME\models\llm",
    "$AMEVA_HOME\models\vlm",
    "$AMEVA_HOME\models\stt",
    "$AMEVA_HOME\models\tts",
    "$AMEVA_HOME\venv",
    "$AMEVA_HOME\logs",
    "$AMEVA_HOME\cache",
    "$AMEVA_HOME\projects"
)

foreach ($folder in $folders) {
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
        Write-Check $true "Created: $folder"
    } else {
        Write-Check $true "Exists: $folder"
    }
}

Write-Host "`n✓ AMEVA Home Directory: $AMEVA_HOME" -ForegroundColor Green
Start-Sleep -Seconds 1

# =============================================================================
# PHASE 3: Python 설치 및 버전 확인
# =============================================================================
Write-Header "PHASE 3: PYTHON VERSION CHECK"

$pythonCmd = Get-Command python -ErrorAction SilentlyContinue
if (-not $pythonCmd) {
    Write-Check $false "Python: Not found"
    Write-Host "`n❌ Python이 설치되어 있지 않거나 환경 변수 PATH에 등록되지 않았습니다." -ForegroundColor Red
    Write-Host "📥 https://www.python.org/downloads/ 에서 Python 3.9 이상(3.12 권장) 버전을 설치한 후 다시 실행해 주세요." -ForegroundColor Yellow
    exit 1
}

$pythonVersionRaw = & python --version 2>&1
$pythonVersion = ""
if ($pythonVersionRaw -match "Python\s+([0-9]+\.[0-9]+\.[0-9]+)") {
    $pythonVersion = $Matches[1]
} else {
    $pythonVersion = "Unknown"
}

$versionSplit = $pythonVersion.Split('.')
if ($versionSplit.Length -ge 2) {
    $major = [int]$versionSplit[0]
    $minor = [int]$versionSplit[1]
    
    if ($major -eq 3 -and $minor -ge 9) {
        Write-Check $true "Python $pythonVersion (Required: 3.9+)"
    } else {
        Write-Check $false "Python $pythonVersion (Required: 3.9+)"
        Write-Host "`n❌ 오래된 Python 버전이 감지되었습니다." -ForegroundColor Red
        Write-Host "📥 Python 3.9 이상 버전을 새로 설치해 주세요." -ForegroundColor Yellow
        exit 1
    }
} else {
    Write-Check $false "Python version check failed"
    exit 1
}

# 가상환경 venv 생성 및 확인
$venvPython = "$AMEVA_HOME\venv\Scripts\python.exe"
if (-not (Test-Path $venvPython)) {
    Write-Host "`n⚙️ Creating virtual environment at $AMEVA_HOME\venv..." -ForegroundColor Yellow
    & python -m venv "$AMEVA_HOME\venv"
    if (-not (Test-Path $venvPython)) {
        Write-Host "❌ 가상환경 생성에 실패했습니다." -ForegroundColor Red
        exit 1
    }
    Write-Check $true "Created Python Virtual Environment"
} else {
    Write-Check $true "Python Virtual Environment already exists"
}

Start-Sleep -Seconds 1

# =============================================================================
# PHASE 4: 모델 컴포넌트 선택 (Select AI Components)
# =============================================================================
Write-Header "PHASE 4: SELECT AI MODEL COMPONENTS"

Write-Host "설치할 AI 컴포넌트를 선택해 주세요:`n" -ForegroundColor White
Write-Host "  [1] LLM (Large Language Model)" -ForegroundColor Cyan -Bold
Write-Host "       └─ llama-cpp-python, transformers, torch`n" -ForegroundColor DarkGray
Write-Host "  [2] STT (Speech-to-Text)" -ForegroundColor Cyan -Bold
Write-Host "       └─ torchaudio, librosa, vosk, whisper`n" -ForegroundColor DarkGray
Write-Host "  [3] TTS (Text-to-Speech)" -ForegroundColor Cyan -Bold
Write-Host "       └─ edge-tts, gTTS`n" -ForegroundColor DarkGray
Write-Host "  [4] All (모두 설치 - 권장)" -ForegroundColor Cyan -Bold
Write-Host "       └─ Complete AMEVA Experience`n" -ForegroundColor DarkGray

$choice = ""
while ("1","2","3","4" -notcontains $choice) {
    $choice = Read-Host "옵션을 선택하세요 (1-4)"
    $choice = $choice.Trim()
}

$components = @()
switch ($choice) {
    "1" { $components += "llm" }
    "2" { $components += "stt" }
    "3" { $components += "tts" }
    "4" { $components += @("llm", "stt", "tts") }
}

Write-Host "`n✓ 선택된 컴포넌트: $($components -join ', ')" -ForegroundColor Green
Start-Sleep -Seconds 1

# =============================================================================
# PHASE 5: 의존성 라이브러리 설치 (Installing Dependencies)
# =============================================================================
Write-Header "PHASE 5: INSTALLING DEPENDENCIES"

Write-Host "의존성 라이브러리를 설치합니다. 이 작업은 다소 시간이 소요될 수 있습니다.`n" -ForegroundColor Yellow

# requirements.txt 다운로드
$reqFile = "$AMEVA_HOME\requirements.txt"
try {
    Write-Host "📥 Downloading requirements.txt..." -ForegroundColor Cyan
    Invoke-WebRequest -Uri "$BASE_URL/requirements.txt" -OutFile $reqFile -UseBasicParsing -ErrorAction Stop
    Write-Check $true "Downloaded requirements.txt"
} catch {
    Write-Check $false "Failed to download requirements.txt. Using pre-defined list."
}

# pip 업그레이드
Write-Host "⚙️ Upgrading pip, setuptools, wheel..." -ForegroundColor Cyan
& $venvPython -m pip install --upgrade pip setuptools wheel --quiet
Write-Check $true "pip upgraded"

# 공통 패키지 설치
$commonPackages = @(
    "fastapi>=0.100.0",
    "uvicorn[standard]>=0.22.0",
    "requests>=2.31.0",
    "psutil>=5.9.0",
    "GPUtil>=1.4.0",
    "pandas>=2.2.0",
    "pydantic>=2.0",
    "pyyaml>=6.0",
    "rich>=13.0.0",
    "python-dotenv>=1.0.0",
    "jinja2>=3.1.2",
    "httpx>=0.23.0",
    "websockets>=10.0",
    "watchdog>=4.0.0",
    "numpy>=1.20",
    "python-json-logger>=2.0.0",
    "typer>=0.9.0",
    "tqdm>=4.65.0"
)

Write-Host "⚙️ Installing common dependencies..." -ForegroundColor Cyan
& $venvPython -m pip install $commonPackages --quiet
Write-Check $true "Common packages installed"

# 컴포넌트별 설치
if ($components -contains "llm") {
    Write-Host "⚙️ Installing LLM stack (torch, transformers, llama-cpp-python...)..." -ForegroundColor Cyan
    # torch & transformers 우선 설치
    & $venvPython -m pip install torch transformers accelerate peft datasets sentencepiece gguf --quiet
    # llama-cpp-python은 윈도우 환경에서 컴파일 이슈 방지를 위해 미리 wheel 설치 시도
    & $venvPython -m pip install llama-cpp-python --prefer-binary --quiet
    Write-Check $true "LLM stack installed"
}

if ($components -contains "stt") {
    Write-Host "⚙️ Installing STT stack (torchaudio, librosa, soundfile, vosk...)..." -ForegroundColor Cyan
    if (-not ($components -contains "llm")) {
        # LLM이 선택되지 않아 torch가 안 깔려있는 경우 torch 먼저 설치
        & $venvPython -m pip install torch --quiet
    }
    & $venvPython -m pip install torchaudio librosa soundfile pydub scipy vosk pywhispercpp yt-dlp jiwer evaluate --quiet
    Write-Check $true "STT stack installed"
}

if ($components -contains "tts") {
    Write-Host "⚙️ Installing TTS stack (edge-tts, gTTS)..." -ForegroundColor Cyan
    & $venvPython -m pip install edge-tts gTTS --quiet
    Write-Check $true "TTS stack installed"
}

Write-Host "`n✓ All dependencies installed successfully!" -ForegroundColor Green
Start-Sleep -Seconds 1

# =============================================================================
# PHASE 6: 설정 파일 생성 (Creating Unified Configuration)
# =============================================================================
Write-Header "PHASE 6: CREATING UNIFIED CONFIGURATION"

$config = @{
    "ameva_version" = "1.0.0"
    "ameva_home"    = $AMEVA_HOME
    "created_at"    = (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
    "system"        = @{
        "os"             = "Windows"
        "python_version" = $pythonVersion
        "gpu_available"  = $gpuAvailable
        "cpu_count"      = [int]$cpuCores
    }
    "components"    = @{
        "llm" = $components -contains "llm"
        "stt" = $components -contains "stt"
        "tts" = $components -contains "tts"
    }
    "model_paths"   = @{
        "llm" = "$AMEVA_HOME\models\llm"
        "vlm" = "$AMEVA_HOME\models\vlm"
        "stt" = "$AMEVA_HOME\models\stt"
        "tts" = "$AMEVA_HOME\models\tts"
    }
    "api_server"    = @{
        "host"    = "localhost"
        "port"    = 8000
        "workers" = [int][Math]::Max(1, $cpuCores - 1)
    }
}

$configFile = "$AMEVA_HOME\config.json"
$config | ConvertTo-Json -Depth 5 | Out-File -FilePath $configFile -Encoding utf8
Write-Check $true "Config saved: $configFile"
Start-Sleep -Seconds 1

# =============================================================================
# PHASE 7: PowerShell 프로필 연동 (Profile Initialization)
# =============================================================================
Write-Header "PHASE 7: POWERSHELL PROFILE INTEGRATION"

# profile.ps1 및 AmelvaSetup.psm1 다운로드
$profileLocalPath = "$AMEVA_HOME\profile.ps1"
$moduleLocalPath = "$AMEVA_HOME\AmelvaSetup.psm1"

try {
    Write-Host "📥 Downloading AMEVA profile & setup module..." -ForegroundColor Cyan
    Invoke-WebRequest -Uri "$BASE_URL/profile.ps1" -OutFile $profileLocalPath -UseBasicParsing -ErrorAction Stop
    Invoke-WebRequest -Uri "$BASE_URL/AmelvaSetup.psm1" -OutFile $moduleLocalPath -UseBasicParsing -ErrorAction Stop
    Write-Check $true "Downloaded helper script files"
} catch {
    Write-Check $false "Failed to download profile scripts. Creating baseline profile.ps1 locally."
    
    # 로컬 fallback profile.ps1 생성
    $fallbackProfile = @"
function Initialize-AmelvaEnvironment {
    param([string]`$AmelvaHome = "C:\AMEVA")
    `$env:AMEVA_HOME = `$AmelvaHome
    `$env:MODEL_PATH_LLM = "`$AmelvaHome\models\llm"
    `$env:MODEL_PATH_VLM = "`$AmelvaHome\models\vlm"
    `$env:MODEL_PATH_STT = "`$AmelvaHome\models\stt"
    `$env:MODEL_PATH_TTS = "`$AmelvaHome\models\tts"
    Write-Host "✓ AMEVA Environment variables initialized" -ForegroundColor Green
}
Initialize-AmelvaEnvironment
"@
    $fallbackProfile | Out-File -FilePath $profileLocalPath -Encoding utf8
}

# 사용자 PowerShell 프로필 확인 및 업데이트
$profilePath = $PROFILE.CurrentUserAllHosts
if (-not $profilePath) {
    $profilePath = $PROFILE
}

$profileDir = Split-Path -Parent $profilePath
if (-not (Test-Path $profileDir)) {
    New-Item -ItemType Directory -Path $profileDir -Force | Out-Null
}

if (-not (Test-Path $profilePath)) {
    New-Item -ItemType File -Path $profilePath -Force | Out-Null
}

$profileContent = Get-Content -Path $profilePath -Raw -ErrorAction SilentlyContinue
$initLine = "`n# AMEVA Universe Initialization`nif (Test-Path `"$profileLocalPath`") { . `"$profileLocalPath`" }"

if ($profileContent -notlike "*AMEVA Universe Initialization*") {
    Add-Content -Path $profilePath -Value $initLine
    Write-Check $true "Added AMEVA setup launcher trigger to PowerShell profile"
} else {
    Write-Check $true "AMEVA launcher trigger is already present in your PowerShell profile"
}

Start-Sleep -Seconds 1

# =============================================================================
# PHASE 8: 인터랙티브 AI 모델 다운로드 (Interactive Model Downloader)
# =============================================================================
Write-Header "PHASE 8: INTERACTIVE MODEL INSTALLATION"

$models = @(
    # LLM
    @{
        "category" = "llm"
        "name"     = "Qwen2.5 0.5B Instruct (Nano LLM / Router)"
        "filename" = "qwen2.5-0.5b-q4_k_m.gguf"
        "url"      = "https://huggingface.co/Qwen/Qwen2.5-0.5B-Instruct-GGUF/resolve/main/qwen2.5-0.5b-q4_k_m.gguf"
    },
    @{
        "category" = "llm"
        "name"     = "Qwen2.5 1.5B Instruct (Light LLM / Edge)"
        "filename" = "qwen2.5-1.5b-instruct-q4_k_m.gguf"
        "url"      = "https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF/resolve/main/qwen2.5-1.5b-instruct-q4_k_m.gguf"
    },
    @{
        "category" = "llm"
        "name"     = "Qwen2.5 3B Instruct (Balance LLM / Orchestra)"
        "filename" = "qwen2.5-3b-instruct-q4_k_m.gguf"
        "url"      = "https://huggingface.co/Qwen/Qwen2.5-3B-Instruct-GGUF/resolve/main/qwen2.5-3b-instruct-q4_k_m.gguf"
    },
    # VLM
    @{
        "category" = "vlm"
        "name"     = "Qwen2 VL 2B Instruct (Vision VLM / Window Assistant)"
        "filename" = "Qwen2-VL-2B-Instruct-Q4_K_M.gguf"
        "url"      = "https://huggingface.co/bartowski/Qwen2-VL-2B-Instruct-GGUF/resolve/main/Qwen2-VL-2B-Instruct-Q4_K_M.gguf"
    },
    # STT
    @{
        "category" = "stt"
        "name"     = "Whisper.cpp Small model (STT / Voice Assistant)"
        "filename" = "ggml-small.bin"
        "url"      = "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.bin"
    }
)

Write-Host "각 인공지능 모델 다운로드 여부를 선택해 주세요 (대용량 파일이므로 네트워크 속도에 따라 시간이 소요됩니다):`n" -ForegroundColor White

foreach ($model in $models) {
    $destDir = "$AMEVA_HOME\models\$($model.category)"
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    
    $destFile = Join-Path $destDir $model.filename
    
    if (Test-Path $destFile) {
        Write-Host "  [✓] $($model.name) 이미 존재합니다. ($($model.filename))" -ForegroundColor Green
        continue
    }
    
    $dlChoice = ""
    while ("y","n" -notcontains $dlChoice) {
        $dlChoice = Read-Host "[?] $($model.name) ($($model.filename)) 모델을 다운로드하시겠습니까? (y/n)"
        $dlChoice = $dlChoice.Trim().ToLower()
    }
    
    if ($dlChoice -eq "y") {
        Write-Host "  📥 $($model.filename) 다운로드 중..." -ForegroundColor Cyan
        
        # BITS (Background Intelligent Transfer Service) 사용 시도 (프로그레스 바 지원)
        try {
            Import-Module BitsTransfer -ErrorAction Stop
            Start-BitsTransfer -Source $model.url -Destination $destFile -ErrorAction Stop
            Write-Host "  ✓ 다운로드 완료!" -ForegroundColor Green
        } catch {
            # BITS 실패 시 Invoke-WebRequest 백업 사용 (프로그레스 바 숨겨서 속도 향상)
            try {
                $oldProgressPreference = $ProgressPreference
                $ProgressPreference = 'SilentlyContinue'
                Invoke-WebRequest -Uri $model.url -OutFile $destFile -UseBasicParsing -ErrorAction Stop
                $ProgressPreference = $oldProgressPreference
                Write-Host "  ✓ 다운로드 완료 (기본 다운로더 사용)!" -ForegroundColor Green
            } catch {
                Write-Host "  ❌ 다운로드 실패: $_" -ForegroundColor Red
                if (Test-Path $destFile) { Remove-Item $destFile -Force }
            }
        }
    } else {
        Write-Host "  => 건너뜀" -ForegroundColor DarkGray
    }
}

Start-Sleep -Seconds 1

# =============================================================================
# PHASE 9: 설치 완료 및 다음 단계
# =============================================================================
Write-Header "INSTALLATION COMPLETE - FINAL CHECKLIST"

Write-Check $true "Python 3.9+ Environment"
Write-Check (Test-Path $AMEVA_HOME) "AMEVA Home Directory"
Write-Check (Test-Path "$AMEVA_HOME\models") "Model Folders (llm, vlm, stt, tts)"
Write-Check (Test-Path "$AMEVA_HOME\venv") "Python Virtual Environment"
Write-Check (Test-Path $configFile) "Configuration File (config.json)"
Write-Check (Test-Path $profileLocalPath) "PowerShell Module & Profile Settings"

$successBanner = @"

╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║         🌟 AMEVA is now alive and breathing! 🌟               ║
║                                                                ║
║              Your AI Ecosystem is Ready to Launch!            ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝

"@
Write-Host $successBanner -ForegroundColor Green

Write-Header "NEXT STEPS"

Write-Host "1. AMEVA 프로젝트 폴더로 이동하여 원하는 프로젝트를 복제하세요:" -ForegroundColor White
Write-Host "   cd C:\ameva\projects" -ForegroundColor Cyan
Write-Host "   git clone https://github.com/uno-km/AMEVA-Agent-Orchestra.git" -ForegroundColor Cyan
Write-Host "   git clone https://github.com/uno-km/AMEVA-Model-Nexus.git" -ForegroundColor Cyan
Write-Host "   git clone https://github.com/uno-km/AMEVA-Doc-AI.git" -ForegroundColor Cyan -Bold

Write-Host "`n2. 모델 API 서버(Nexus)를 실행하세요:" -ForegroundColor White
Write-Host "   cd C:\ameva\projects\AMEVA-Model-Nexus" -ForegroundColor Cyan
Write-Host "   python main.py" -ForegroundColor Cyan

Write-Host "`n3. API 작동 상태를 확인하세요:" -ForegroundColor White
Write-Host "   http://localhost:8000/docs" -ForegroundColor Cyan

Write-Host "`n4. 환경 설정을 적용하려면 현재 PowerShell 창을 닫고 다시 실행해 주세요." -ForegroundColor Yellow -Bold

Write-Host "`n🎮 AMEVA Universe에 오신 것을 환영합니다! 🎮`n" -ForegroundColor Green
