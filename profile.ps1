# PowerShell Core / Windows PowerShell 설정 파일
# 이 파일을 $PROFILE에 추가하면 PowerShell 실행시 AMEVA 환경이 자동 설정됩니다.

# === AMEVA Universe 환경 설정 ===

# 🎨 색상 정의
$Host.UI.RawUI.BackgroundColor = 'Black'
$Host.UI.RawUI.ForegroundColor = 'White'

function Write-AmelvaHeader {
    Write-Host "`n" -ForegroundColor Black
    Write-Host "╔═══════════════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "║                                                                           ║" -ForegroundColor Cyan
    Write-Host "║                     ███    ███  ███████ ██    ██  █████                  ║" -ForegroundColor Cyan
    Write-Host "║                     ████  ████  ██      ██    ██ ██   ██                 ║" -ForegroundColor Cyan
    Write-Host "║                     ██ ████ ██  █████   ██    ██ ███████                 ║" -ForegroundColor Cyan
    Write-Host "║                     ██  ██  ██  ██       ██  ██  ██   ██                 ║" -ForegroundColor Cyan
    Write-Host "║                     ██      ██  ███████  ██ ██   ██   ██                 ║" -ForegroundColor Cyan
    Write-Host "║                                                                           ║" -ForegroundColor Cyan
    Write-Host "║                   🎮 AMEVA Universe Portal 🎮                            ║" -ForegroundColor Cyan
    Write-Host "║                                                                           ║" -ForegroundColor Cyan
    Write-Host "╚═══════════════════════════════════════════════════════════════════════════╝`n" -ForegroundColor Cyan
}

function Initialize-AmelvaEnvironment {
    <#
    .SYNOPSIS
        AMEVA Universe 환경 초기화
    .DESCRIPTION
        PowerShell에서 AMEVA 환경변수 및 함수를 설정합니다.
    .EXAMPLE
        Initialize-AmelvaEnvironment -AmelvaHome "C:\AMEVA"
    #>
    param(
        [string]$AmelvaHome = "C:\AMEVA"
    )

    Write-AmelvaHeader

    # 환경변수 설정
    $env:AMEVA_HOME = $AmelvaHome
    $env:MODEL_PATH_LLM = "$AmelvaHome\models\llm"
    $env:MODEL_PATH_VLM = "$AmelvaHome\models\vlm"
    $env:MODEL_PATH_STT = "$AmelvaHome\models\stt"
    $env:MODEL_PATH_TTS = "$AmelvaHome\models\tts"
    $env:AMEVA_API_HOST = "localhost"
    $env:AMEVA_API_PORT = "8000"

    # 영구 설정 (사용자 환경변수)
    [Environment]::SetEnvironmentVariable("AMEVA_HOME", $AmelvaHome, "User")
    [Environment]::SetEnvironmentVariable("MODEL_PATH_LLM", "$AmelvaHome\models\llm", "User")
    [Environment]::SetEnvironmentVariable("MODEL_PATH_VLM", "$AmelvaHome\models\vlm", "User")
    [Environment]::SetEnvironmentVariable("MODEL_PATH_STT", "$AmelvaHome\models\stt", "User")
    [Environment]::SetEnvironmentVariable("MODEL_PATH_TTS", "$AmelvaHome\models\tts", "User")

    Write-Host "✓ Environment variables initialized" -ForegroundColor Green
    Write-Host "  AMEVA_HOME: $AmelvaHome`n" -ForegroundColor Green
}

function Start-AmelvaAPI {
    <#
    .SYNOPSIS
        AMEVA API 서버 시작
    #>
    $projectPath = "$env:AMEVA_HOME\projects\AMEVA-Model-Nexus"
    if (Test-Path $projectPath) {
        Write-Host "🚀 Starting AMEVA API Server...`n" -ForegroundColor Green
        Push-Location $projectPath
        python main.py
        Pop-Location
    } else {
        Write-Host "❌ AMEVA-Model-Nexus not found at $projectPath" -ForegroundColor Red
    }
}

function Get-AmelvaStatus {
    <#
    .SYNOPSIS
        AMEVA 시스템 상태 확인
    #>
    Write-Host "`n=== AMEVA System Status ===" -ForegroundColor Cyan
    Write-Host "AMEVA_HOME: $env:AMEVA_HOME" -ForegroundColor Yellow
    
    if (Test-Path $env:AMEVA_HOME) {
        Write-Host "✓ AMEVA_HOME exists" -ForegroundColor Green
    } else {
        Write-Host "✗ AMEVA_HOME not found" -ForegroundColor Red
    }

    if (Test-Path $env:MODEL_PATH_LLM) {
        Write-Host "✓ LLM models folder: $env:MODEL_PATH_LLM" -ForegroundColor Green
    } else {
        Write-Host "✗ LLM models folder not found" -ForegroundColor Red
    }

    if (Test-Path $env:MODEL_PATH_VLM) {
        Write-Host "✓ VLM models folder: $env:MODEL_PATH_VLM" -ForegroundColor Green
    } else {
        Write-Host "✗ VLM models folder not found" -ForegroundColor Red
    }

    if (Test-Path $env:MODEL_PATH_STT) {
        Write-Host "✓ STT models folder: $env:MODEL_PATH_STT" -ForegroundColor Green
    } else {
        Write-Host "✗ STT models folder not found" -ForegroundColor Red
    }

    Write-Host "`n"
}

# 초기화 실행
Initialize-AmelvaEnvironment -AmelvaHome "C:\AMEVA"
