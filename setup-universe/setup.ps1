# =============================================================================
# 🎮 AMEVA Universe Setup — PowerShell Edition 🎮
# 한번의 커맨드로 모든 Windows AMEVA AI 에코시스템을 설정하세요!
# =============================================================================
# Usage: irm https://raw.githubusercontent.com/uno-km/uno-km/setup-universe-feature/setup.ps1 | iex
# or locally: powershell -ExecutionPolicy Bypass -File setup.ps1
# =============================================================================

$ErrorActionPreference = "Stop"
$UTF8Encoding = [System.Text.Encoding]::UTF8

# 원격 다운로드를 위한 기본 GitHub 저장소 경로
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

function Exit-Script {
    param([int]$exitCode = 1)
    Write-Host ""
    Read-Host "Press Enter to exit..."
    exit $exitCode
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

# PowerShell 실행 정책 (Execution Policy) 진단 및 조정
$currentPolicy = Get-ExecutionPolicy
if ($currentPolicy -eq "Restricted" -or $currentPolicy -eq "Undefined") {
    try {
        Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force -ErrorAction Stop
        Write-Check $true "PowerShell script execution policy enabled (RemoteSigned)"
    } catch {
        Write-Host "  [!] Could not automatically configure script execution policy (system/group policy restrictions)." -ForegroundColor Yellow
        Write-Host "      Continuing the installation safely within the non-administrator scope." -ForegroundColor Yellow
    }
} else {
    Write-Check $true "PowerShell script execution policy verified ($currentPolicy)"
}

# Git 설치 여부 사전 진단 및 winget 자동 설치
$gitCmd = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitCmd) {
    Write-Host "  [!] Git is not installed on this system." -ForegroundColor Yellow
    $gitChoice = ""
    while ("y","n" -notcontains $gitChoice) {
        $gitChoice = Read-Host "[?] Do you want to install Git now via winget? (y/n)"
        $gitChoice = $gitChoice.Trim().ToLower()
    }
    
    if ($gitChoice -eq "y") {
        try {
            Write-Host "  ⚙️ Installing Git via winget..." -ForegroundColor Yellow
            $null = winget install --id Git.Git -e --source winget --accept-package-agreements --accept-source-agreements --quiet
            
            $gitCmd = Get-Command git -ErrorAction SilentlyContinue
            if ($gitCmd) {
                Write-Check $true "Git installed successfully! (Note: You may need to restart PowerShell to use it)"
            } else {
                Write-Check $true "Git installation initiated. If 'git' is not recognized, please restart your PowerShell window."
            }
        } catch {
            Write-Check $false "Failed to install Git via winget: $_"
        }
    } else {
        Write-Host "  => Skipped Git installation. Please manually install Git to clone repositories later." -ForegroundColor DarkGray
    }
} else {
    Write-Check $true "Git installation verified"
}

# C++ Build Tools (MSVC Compiler) 진단
$cppCompilerAvailable = $false
$vswherePath = "${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe"
if (Get-Command cl -ErrorAction SilentlyContinue) {
    $cppCompilerAvailable = $true
} elseif (Test-Path $vswherePath) {
    $vsPath = & $vswherePath -latest -products * -requires Microsoft.VisualStudio.Workload.VCTools -property installationPath
    if ($vsPath) {
        $cppCompilerAvailable = $true
    }
}

Write-Check $cppCompilerAvailable "C++ Build Tools (MSVC Compiler)"
if (-not $cppCompilerAvailable) {
    Write-Host "  [!] C++ Build Tools (MSVC) are missing." -ForegroundColor Yellow
    Write-Host "      This is highly recommended if you compile components like llama-cpp-python locally." -ForegroundColor Yellow
    Write-Host "      Command to install: winget install Microsoft.VisualStudio.2022.BuildTools --override `"--add Microsoft.VisualStudio.Workload.VCTools --includeRecommended --passive`"" -ForegroundColor Cyan
}


# Windows Long Path 지원 상태 확인 및 활성화
$keyPath = "HKLM:\System\CurrentControlSet\Control\FileSystem"
$valName = "LongPathsEnabled"
$currentVal = (Get-ItemProperty -Path $keyPath -Name $valName -ErrorAction SilentlyContinue).$valName

if ($currentVal -ne 1) {
    Write-Host "  [!] Windows Long Path support is currently disabled." -ForegroundColor Yellow
    Write-Host "      This might cause installation failures for deep learning packages." -ForegroundColor Yellow
    
    $isAdmin = [bool](([System.Security.Principal.WindowsIdentity]::GetCurrent()).Groups | Where-Object { $_.Value -eq "S-1-5-32-544" })
    
    if ($isAdmin) {
        try {
            Set-ItemProperty -Path $keyPath -Name $valName -Value 1 -Force -ErrorAction Stop
            Write-Check $true "Windows Long Path support has been enabled in registry (Administrator)."
        } catch {
            Write-Check $false "Failed to enable Windows Long Path support: $_"
        }
    } else {
        $lpChoice = ""
        while ("y","n" -notcontains $lpChoice) {
            $lpChoice = Read-Host "[?] Do you want to enable Windows Long Path support now? (Requires UAC Administrator elevation) (y/n)"
            $lpChoice = $lpChoice.Trim().ToLower()
        }
        
        if ($lpChoice -eq "y") {
            try {
                Write-Host "  ⚙️ Requesting Administrator permission to enable Long Paths..." -ForegroundColor Yellow
                $proc = Start-Process powershell -Verb RunAs -ArgumentList "-NoProfile", "-WindowStyle", "Hidden", "-Command", "Set-ItemProperty -Path '$keyPath' -Name '$valName' -Value 1 -Force" -PassThru -Wait
                
                # 변경 사항 재확인
                $currentVal = (Get-ItemProperty -Path $keyPath -Name $valName -ErrorAction SilentlyContinue).$valName
                if ($currentVal -eq 1) {
                    Write-Check $true "Windows Long Path support has been enabled successfully!"
                } else {
                    Write-Check $false "Windows Long Path support was not enabled (UAC declined or failed)."
                }
            } catch {
                Write-Check $false "Failed to launch administrator process to enable Long Paths: $_"
            }
        } else {
            Write-Host "  => Skipped." -ForegroundColor DarkGray
        }
    }
} else {
    Write-Check $true "Windows Long Path support is already enabled"
}

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
# PHASE 3: Python 설치 및 버전 확인 & 임시 가상환경 구축
# =============================================================================
Write-Header "PHASE 3: PYTHON VERSION CHECK & TEMP ENVIRONMENT"

$pythonCmd = Get-Command python -ErrorAction SilentlyContinue
if (-not $pythonCmd) {
    Write-Check $false "Python: Not found"
    Write-Host "`n❌ Python is not installed or not added to your PATH environment variable." -ForegroundColor Red
    Write-Host "📥 Please install Python 3.9 or higher (3.12 recommended) from https://www.python.org/downloads/ and try again." -ForegroundColor Yellow
    Exit-Script
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
        Write-Host "`n❌ An outdated Python version was detected." -ForegroundColor Red
        Write-Host "📥 Please install Python 3.9 or higher." -ForegroundColor Yellow
        Exit-Script
    }
} else {
    Write-Check $false "Python version check failed"
    Exit-Script
}

# 임시 가상환경 env_ai 생성 (CUDA 검증 전용)
$tempVenvPath = "$AMEVA_HOME\temp_env_ai"
$venvPython = "$tempVenvPath\Scripts\python.exe"

Write-Host "`n⚙️ Creating temporary validation virtual environment at $tempVenvPath..." -ForegroundColor Yellow
if (Test-Path $tempVenvPath) {
    Remove-Item $tempVenvPath -Recurse -Force -ErrorAction SilentlyContinue
}
& python -m venv "$tempVenvPath"
if (-not (Test-Path $venvPython)) {
    Write-Host "❌ Failed to create temporary virtual environment." -ForegroundColor Red
    Exit-Script
}
Write-Check $true "Created Temporary Python Virtual Environment for CUDA verification"

Start-Sleep -Seconds 1

# =============================================================================
# PHASE 4: 모델 컴포넌트 선택 (Select AI Components)
# =============================================================================
Write-Header "PHASE 4: SELECT AI MODEL COMPONENTS"

Write-Host "Please select the AI components to install:`n" -ForegroundColor White
Write-Host "  [1] LLM (Large Language Model)" -ForegroundColor Cyan -Bold
Write-Host "       └─ Local LLM Engine (Llama.cpp / GGUF Server)`n" -ForegroundColor DarkGray
Write-Host "  [2] STT (Speech-to-Text)" -ForegroundColor Cyan -Bold
Write-Host "       └─ Voice Input Processing (Whisper / Audio Engine)`n" -ForegroundColor DarkGray
Write-Host "  [3] TTS (Text-to-Speech)" -ForegroundColor Cyan -Bold
Write-Host "       └─ Voice Synthesis Engine`n" -ForegroundColor DarkGray
Write-Host "  [4] All (Install everything - Recommended)" -ForegroundColor Cyan -Bold
Write-Host "       └─ Complete AMEVA Experience`n" -ForegroundColor DarkGray


$choice = ""
while ("1","2","3","4" -notcontains $choice) {
    $choice = Read-Host "Select option (1-4)"
    $choice = $choice.Trim()
}

$components = @()
switch ($choice) {
    "1" { $components += "llm" }
    "2" { $components += "stt" }
    "3" { $components += "tts" }
    "4" { $components += @("llm", "stt", "tts") }
}

Write-Host "`n✓ Selected components: $($components -join ', ')" -ForegroundColor Green
Start-Sleep -Seconds 1

# =============================================================================
# PHASE 5: 의존성 라이브러리 설치 (Installing Dependencies - Delegated)
# =============================================================================
Write-Header "PHASE 5: RESOLVING DEPENDENCIES (DELEGATED)"

Write-Host "  ► Python packages installation is now delegated to individual cloned projects." -ForegroundColor Yellow
Write-Host "    Each repository holds its own separate virtual environment for stability." -ForegroundColor Yellow
Write-Host "    (Setup will skip massive global package installations here.)" -ForegroundColor Gray
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

$profileLocalPath = "$AMEVA_HOME\profile.ps1"
$moduleLocalPath = "$AMEVA_HOME\AmelvaSetup.psm1"

try {
    Write-Host "📥 Downloading AMEVA profile & setup module..." -ForegroundColor Cyan
    Invoke-WebRequest -Uri "$BASE_URL/profile.ps1" -OutFile $profileLocalPath -UseBasicParsing -ErrorAction Stop
    Invoke-WebRequest -Uri "$BASE_URL/AmelvaSetup.psm1" -OutFile $moduleLocalPath -UseBasicParsing -ErrorAction Stop
    Write-Check $true "Downloaded helper script files"
} catch {
    Write-Check $false "Failed to download profile scripts. Creating baseline profile.ps1 locally."
    
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

function Activate-AmelvaVenv {
    `$activatePath = "`$env:AMEVA_HOME\env_ai\Scripts\Activate.ps1"
    if (Test-Path `$activatePath) {
        . `$activatePath
    } else {
        Write-Host "❌ AMEVA virtual environment not found at `$env:AMEVA_HOME\env_ai" -ForegroundColor Red
    }
}

Set-Alias -Name act -Value Activate-AmelvaVenv -Force
Set-Alias -Name activate -Value Activate-AmelvaVenv -Force
Set-Alias -Name env_ai -Value Activate-AmelvaVenv -Force

Initialize-AmelvaEnvironment
"@
    $fallbackProfile | Out-File -FilePath $profileLocalPath -Encoding utf8
}

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
        "filename" = "qwen2.5-0.5b-instruct-q4_k_m.gguf"
        "url"      = "https://huggingface.co/Qwen/Qwen2.5-0.5B-Instruct-GGUF/resolve/main/qwen2.5-0.5b-instruct-q4_k_m.gguf"
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

$downloadQueue = @()

foreach ($model in $models) {
    $destDir = "$AMEVA_HOME\models\$($model.category)"
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    
    $destFile = Join-Path $destDir $model.filename
    
    if (Test-Path $destFile) {
        Write-Host "  [✓] $($model.name) already exists. ($($model.filename))" -ForegroundColor Green
        continue
    }
    
    $dlChoice = ""
    while ("y","n" -notcontains $dlChoice) {
        $dlChoice = Read-Host "[?] Do you want to download $($model.name) ($($model.filename))? (y/n)"
        $dlChoice = $dlChoice.Trim().ToLower()
    }
    
    if ($dlChoice -eq "y") {
        $model.destFile = $destFile
        $downloadQueue += $model
    } else {
        Write-Host "  => Skipped ($($model.filename))" -ForegroundColor DarkGray
    }
}

if ($downloadQueue.Count -gt 0) {
    Write-Host "`n📥 Starting download queue for selected models ($($downloadQueue.Count) file(s))...`n" -ForegroundColor Yellow
    
    foreach ($model in $downloadQueue) {
        Write-Host "  📥 Downloading $($model.name) ($($model.filename))..." -ForegroundColor Cyan
        
        try {
            Import-Module BitsTransfer -ErrorAction Stop
            Start-BitsTransfer -Source $model.url -Destination $model.destFile -ErrorAction Stop
            Write-Host "  ✓ Download complete!`n" -ForegroundColor Green
        } catch {
            try {
                $oldProgressPreference = $ProgressPreference
                $ProgressPreference = 'SilentlyContinue'
                Invoke-WebRequest -Uri $model.url -OutFile $model.destFile -UseBasicParsing -ErrorAction Stop
                $ProgressPreference = $oldProgressPreference
                Write-Host "  ✓ Download complete (using default downloader)!`n" -ForegroundColor Green
            } catch {
                Write-Host "  ❌ Download failed: $_`n" -ForegroundColor Red
                if (Test-Path $model.destFile) { Remove-Item $model.destFile -Force }
            }
        }
    }
} else {
    Write-Host "`n✓ No models selected for download." -ForegroundColor Green
}

Start-Sleep -Seconds 1

# =============================================================================
# PHASE 8.5: GPU 가속 검증 및 테스트 (GPU Acceleration & CUDA Validation)
# =============================================================================
Write-Header "PHASE 8.5: GPU ACCELERATION & CUDA VALIDATION"

$cudaTested = $false
$cudaStatus = "Not Tested"

if ($gpuAvailable) {
    $cudaChoice = ""
    while ("y","n" -notcontains $cudaChoice) {
        $cudaChoice = Read-Host "[?] Do you want to install GPU-accelerated PyTorch (CUDA 12.1) and validate CUDA? (y/n)"
        $cudaChoice = $cudaChoice.Trim().ToLower()
    }
    
    if ($cudaChoice -eq "y") {
        Write-Host "⚙️ Installing CUDA 12.1-enabled PyTorch, torchvision, and torchaudio in temp environment..." -ForegroundColor Cyan
        
        $shortTemp = "$AMEVA_HOME\tmp"
        if (-not (Test-Path $shortTemp)) {
            New-Item -ItemType Directory -Path $shortTemp -Force | Out-Null
        }
        $origTemp = $env:TEMP
        $origTmp = $env:TMP
        $env:TEMP = $shortTemp
        $env:TMP = $shortTemp
        
        # 컴파일 대비 1070 Ti 가속 플래그 지정
        $origCMakeArgs = $env:CMAKE_ARGS
        $env:CMAKE_ARGS = "-DGGML_CUDA=on"
        
        & $venvPython -m pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121 --upgrade --quiet --cache-dir "$shortTemp\cache"
        $installExitCode = $LASTEXITCODE
        
        $env:TEMP = $origTemp
        $env:TMP = $origTmp
        if (Test-Path $shortTemp) {
            Remove-Item $shortTemp -Recurse -Force -ErrorAction SilentlyContinue
        }
        $env:CMAKE_ARGS = $origCMakeArgs
        
        if ($installExitCode -eq 0) {
            Write-Check $true "CUDA-enabled PyTorch installed in temp environment successfully"
            
            Write-Host "⚙️ Running CUDA system validation test..." -ForegroundColor Cyan
            
            $cudaTestLocalPath = Join-Path $PSScriptRoot "test\cuda_test.py"
            $cudaTestTempPath = "$AMEVA_HOME\cuda_test.py"
            
            $testScriptPath = ""
            if (Test-Path $cudaTestLocalPath) {
                $testScriptPath = $cudaTestLocalPath
            } else {
                try {
                    Invoke-WebRequest -Uri "$BASE_URL/test/cuda_test.py" -OutFile $cudaTestTempPath -UseBasicParsing -ErrorAction Stop
                    $testScriptPath = $cudaTestTempPath
                } catch {
                    # Failed to download
                }
            }
            
            if ($testScriptPath) {
                & $venvPython $testScriptPath
                if ($LASTEXITCODE -eq 0) {
                    $cudaTested = $true
                    $cudaStatus = "Success (GPU Verified)"
                    Write-Check $true "CUDA environment verified and fully functional!"
                } else {
                    $cudaStatus = "Failed (Runtime Error)"
                    Write-Check $false "CUDA test script execution failed."
                }
            } else {
                Write-Check $false "Could not locate or download 'test/cuda_test.py' script."
            }
            
            if (Test-Path $cudaTestTempPath) {
                Remove-Item $cudaTestTempPath -Force -ErrorAction SilentlyContinue
            }
        } else {
            $cudaStatus = "Failed (Installation Error)"
            Write-Check $false "Failed to install CUDA-enabled PyTorch."
        }
    } else {
        Write-Host "  => Skipped CUDA validation." -ForegroundColor DarkGray
        $cudaStatus = "Skipped"
    }
} else {
    Write-Host "  => NVIDIA GPU was not detected. Skipping CUDA validation." -ForegroundColor DarkGray
    $cudaStatus = "Not Available (CPU Only)"
}

# 🧼 임시 검증 가상환경 정리 및 삭제 (Clean up)
if (Test-Path $tempVenvPath) {
    Write-Host "`n🧼 Cleaning up temporary verification environment..." -ForegroundColor Yellow
    Remove-Item $tempVenvPath -Recurse -Force -ErrorAction SilentlyContinue
    Write-Check $true "Temporary environment removed."
}

Start-Sleep -Seconds 1

# =============================================================================
# PHASE 9: 설치 완료 및 다음 단계
# =============================================================================
Write-Header "INSTALLATION COMPLETE - FINAL CHECKLIST"

Write-Check $true "Python 3.9+ Environment"
Write-Check (Test-Path $AMEVA_HOME) "AMEVA Home Directory"
Write-Check (Test-Path "$AMEVA_HOME\models") "Model Folders (llm, vlm, stt, tts)"
Write-Check (Test-Path $configFile) "Configuration File (config.json)"
Write-Check (Test-Path $profileLocalPath) "PowerShell Module & Profile Settings"
if ($gpuAvailable) {
    Write-Check ($cudaStatus -eq "Success (GPU Verified)") "CUDA GPU Acceleration ($cudaStatus)"
}

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

Write-Host "1. Navigate to the AMEVA projects folder and clone the projects you want:" -ForegroundColor White
Write-Host "   cd C:\ameva\projects" -ForegroundColor Cyan
Write-Host "   git clone https://github.com/uno-km/AMEVA-Model-Nexus.git" -ForegroundColor Cyan
Write-Host "   git clone https://github.com/uno-km/AMEVA-Agent-Orchestra.git" -ForegroundColor Cyan
Write-Host "   git clone https://github.com/uno-km/AMEVA-Doc-AI.git" -ForegroundColor Cyan -Bold

Write-Host "`n2. Navigate into the cloned project, create its local environment, and install dependencies:" -ForegroundColor White
Write-Host "   cd C:\ameva\projects\AMEVA-Model-Nexus" -ForegroundColor Cyan
Write-Host "   python -m venv venv" -ForegroundColor Cyan
Write-Host "   .\venv\Scripts\Activate.ps1" -ForegroundColor Cyan
Write-Host "   pip install -r requirements.txt" -ForegroundColor Cyan

Write-Host "`n3. Run the project server:" -ForegroundColor White
Write-Host "   python main.py" -ForegroundColor Cyan

Write-Host "`n4. Check API status:" -ForegroundColor White
Write-Host "   http://localhost:8000/docs" -ForegroundColor Cyan

Write-Host "`n5. To apply the environment settings, please restart your PowerShell window." -ForegroundColor Yellow -Bold

# 웰컴 메시지 별빛 효과 함수 정의
function Write-StarLine {
    param([string]$line)
    for ($i = 0; $i -lt $line.Length; $i++) {
        $c = $line[$i]
        if ($c -eq '*') {
            Write-Host $c -ForegroundColor Yellow -NoNewline
        } elseif ($c -eq '.') {
            Write-Host $c -ForegroundColor Gray -NoNewline
        } elseif ($c -eq '+') {
            Write-Host $c -ForegroundColor White -NoNewline
        } elseif ($c -eq 'o') {
            Write-Host $c -ForegroundColor DarkGray -NoNewline
        } elseif ("╔","═","╗","║","╚","╝" -contains $c) {
            Write-Host $c -ForegroundColor Cyan -NoNewline
        } else {
            Write-Host $c -ForegroundColor Green -NoNewline
        }
    }
    Write-Host ""
}

Write-Host ""
Write-StarLine "          .            o           *            .         "; Start-Sleep -Milliseconds 150
Write-StarLine "     *          .          +            o          .      "; Start-Sleep -Milliseconds 150
Write-StarLine "  o     ╔══════════════════════════════════════════╗   o  "; Start-Sleep -Milliseconds 150
Write-StarLine "    .   ║      Welcome to the AMEVA Universe!      ║  .   "; Start-Sleep -Milliseconds 150
Write-StarLine "  *     ╚══════════════════════════════════════════╝     o"; Start-Sleep -Milliseconds 150
Write-StarLine "     .          *          o            +          .      "; Start-Sleep -Milliseconds 150
Write-StarLine "          o            .           .            o         "; Start-Sleep -Milliseconds 150
Write-Host ""
