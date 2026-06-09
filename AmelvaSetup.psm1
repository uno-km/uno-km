# Write-Host와 함께 사용할 AMEVA 설정 로드 함수
function Initialize-AmelvaEnvironment {
    <#
    .SYNOPSIS
        AMEVA Universe 환경 초기화 함수
    .DESCRIPTION
        PowerShell에서 AMEVA 환경변수를 설정합니다.
    #>
    param(
        [string]$AmelvaHome = "C:\AMEVA"
    )

    $env:AMEVA_HOME = $AmelvaHome
    $env:MODEL_PATH_LLM = "$AmelvaHome\models\llm"
    $env:MODEL_PATH_STT = "$AmelvaHome\models\stt"
    $env:MODEL_PATH_TTS = "$AmelvaHome\models\tts"
    
    [Environment]::SetEnvironmentVariable("AMEVA_HOME", $AmelvaHome, "User")
    [Environment]::SetEnvironmentVariable("MODEL_PATH_LLM", "$AmelvaHome\models\llm", "User")
    [Environment]::SetEnvironmentVariable("MODEL_PATH_STT", "$AmelvaHome\models\stt", "User")
    [Environment]::SetEnvironmentVariable("MODEL_PATH_TTS", "$AmelvaHome\models\tts", "User")
}

Export-ModuleMember -Function Initialize-AmelvaEnvironment
