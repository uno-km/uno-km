# --- 한글 주석  영어 프린팅 설정 ---
# 이 스크립트는 로컬 git 설정을 통해 사용자의 GitHub 계정명을 동적으로 감지하고,
# GitHub API를 통해 해당 계정의 모든 AMEVA 프리픽스 리포지토리 목록을 동적으로 가져와 클론합니다.

# ANSI 컬러 코드 정의 (콘솔 꾸미기용)
$ESC = [char]27
$Reset = "$ESC[0m"
$Bold = "$ESC[1m"
$Cyan = "$ESC[36m"
$Green = "$ESC[32m"
$Red = "$ESC[31m"
$Yellow = "$ESC[33m"
$Magenta = "$ESC[35m"
$White = "$ESC[37m"

# 화면 지우기 및 헤더 출력
Clear-Host
Write-Host "${Bold}${Cyan}====================================================${Reset}"
Write-Host "${Bold}${Magenta}       ___  ___  ___  _________  __  __  ___        ${Reset}"
Write-Host "${Bold}${Magenta}      / _ \/ _ \/ _ \/ ___/ __ \/  |/  |/ _ \       ${Reset}"
Write-Host "${Bold}${Magenta}     /  __/  __/  __/ /__/ /_/ / /|_/ /  __/       ${Reset}"
Write-Host "${Bold}${Magenta}    /_/  /_/  /_/  \___/\____/_/  /_/_/            ${Reset}"
Write-Host "${Bold}${Cyan}====================================================${Reset}"
Write-Host "${Bold}${White}    AMEVA Project Cloner v2.3 - Fully Dynamic       ${Reset}"
Write-Host "${Bold}${Cyan}====================================================${Reset}"
Write-Host ""

# 현재 폴더의 git 설정을 확인하여 GitHub 사용자 이름/조직을 동적으로 추출합니다.
$githubUser = "uno-km" # 기본값 설정
$remoteUrl = git config --get remote.origin.url 2>$null

if ($remoteUrl) {
    # git remote URL에서 유저네임/조직명을 추출하기 위한 정규식 패턴
    if ($remoteUrl -match "github\.com[:/]([^/]+)/") {
        $githubUser = $Matches[1].Trim()
    }
}

# GitHub API URL 생성 (페이지당 최대 100개 검색)
$apiUrl = "https://api.github.com/users/$githubUser/repos?per_page=100"

Write-Host "${Cyan}[*] Detecting GitHub account: $githubUser${Reset}"
Write-Host "${Cyan}[*] Dynamically fetching repositories via GitHub API...${Reset}"

$amevaRepos = @()
try {
    # TLS 1.2 프로토콜을 명시적으로 활성화
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    
    # User-Agent 헤더 명시 (GitHub API 요구사항 및 일부 파워쉘 버전 대응)
    $headers = @{
        "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) PowerShell/Invoke-RestMethod"
    }
    
    # API 호출
    $response = Invoke-RestMethod -Uri $apiUrl -Headers $headers -TimeoutSec 15 -ErrorAction Stop
    
    # Invoke-RestMethod가 간혹 JSON을 파싱하지 않고 원본 문자열로 반환하는 경우 대응
    if ($response -is [string]) {
        $response = ConvertFrom-Json $response
    }
    
    # AMEVA 프리픽스를 가진 레포지토리만 필터링 (대소문자 구분 없이 매칭)
    $matchedRepos = $response | Where-Object { $_.name -like "AMEVA*" }
    
    if ($matchedRepos) {
        $amevaRepos = $matchedRepos | Select-Object -ExpandProperty name
    }
} catch {
    Write-Host "${Red}[X] Error: Failed to fetch repositories from GitHub API.${Reset}"
    Write-Host "${Red}    Details: $_${Reset}"
    Write-Host ""
    Write-Host "Press any key to exit..."
    [void][Console]::ReadKey($true)
    exit 1
}

# 검색된 리포지토리가 없을 경우 처리
if ($null -eq $amevaRepos -or $amevaRepos.Count -eq 0) {
    Write-Host "${Yellow}[!] No repositories starting with 'AMEVA' were found for '$githubUser'.${Reset}"
    Write-Host ""
    Write-Host "Press any key to exit..."
    [void][Console]::ReadKey($true)
    exit 0
}

Write-Host "${Green}[V] Dynamically found $($amevaRepos.Count) AMEVA repositories for '$githubUser'.${Reset}"
Write-Host ""

# 현재 스크립트가 실행된 폴더 경로를 기본값으로 설정
$currentDir = Get-Location | Select-Object -ExpandProperty Path
$targetDir = $currentDir

# 클론 대상 경로 확인 단계
Write-Host "${Bold}${White}Do you want to clone into the current directory?${Reset}"
Write-Host "${Bold}${Cyan}Current path: $currentDir${Reset}"
$choice = Read-Host "Proceed here? (Y/N) [Default: Y]"

if ($choice -ne "" -and $choice.ToUpper().Substring(0,1) -eq "N") {
    Write-Host ""
    Write-Host "${Yellow}[*] Please specify the absolute target directory.${Reset}"
    $inputDir = Read-Host "Target Path [Default: $currentDir]"
    if ($inputDir -ne "") {
        $targetDir = $inputDir
    }
}

# 절대 경로 변환 및 디렉터리 부재 시 생성
$targetDir = [System.IO.Path]::GetFullPath($targetDir)
if (-not (Test-Path -Path $targetDir)) {
    Write-Host "${Cyan}[*] Creating directory: $targetDir...${Reset}"
    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
}

Write-Host ""
Write-Host "${Bold}${Cyan}----------------------------------------------------${Reset}"
Write-Host "${Bold}${White}Target Directory: $targetDir${Reset}"
Write-Host "${Bold}${Cyan}----------------------------------------------------${Reset}"
Write-Host ""

$successCount = 0
$alreadyExistsCount = 0
$failedRepos = [System.Collections.Generic.List[string]]::new()

# 감지된 모든 AMEVA 리포지토리를 순회
foreach ($repo in $amevaRepos) {
    $repoPath = Join-Path $targetDir $repo
    
    # 1. 대상 폴더가 이미 존재하는지 체크
    if (Test-Path -Path $repoPath) {
        Write-Host "${Red}[■] ALREADY EXISTS  - $repo${Reset}"
        $alreadyExistsCount++
    } else {
        # 2. 존재하지 않으면 git clone 수행
        Write-Host "${Cyan}[*] Cloning: $repo...${Reset}" -NoNewline
        
        $cloneUrl = "https://github.com/$githubUser/$repo.git"
        
        try {
            # git clone 호출 및 종료 코드 캡처
            $process = Start-Process git -ArgumentList "clone", $cloneUrl, $repoPath -NoNewWindow -PassThru -Wait
            
            if ($process.ExitCode -eq 0) {
                # 캐리지 리턴(\r)을 이용하여 줄 바꿈 없이 성공 상태 갱신
                Write-Host "`r${Green}[V] SUCCESS         - $repo${Reset}"
                $successCount++
            } else {
                Write-Host "`r${Red}[X] FAILED          - $repo${Reset}"
                $failedRepos.Add($repo)
            }
        } catch {
            Write-Host "`r${Red}[X] ERROR           - $repo${Reset}"
            $failedRepos.Add($repo)
        }
    }
}

# 최종 정산 리포트
Write-Host ""
Write-Host "${Bold}${Cyan}====================================================${Reset}"
Write-Host "${Bold}${White}                  CLONING SUMMARY                   ${Reset}"
Write-Host "${Bold}${Cyan}====================================================${Reset}"
Write-Host "Total processed: $($amevaRepos.Count)"
Write-Host "${Green}Successfully Cloned: $successCount${Reset}"
Write-Host "${Yellow}Already Existed    : $alreadyExistsCount${Reset}"
Write-Host "${Red}Failed             : $($failedRepos.Count)${Reset}"
Write-Host "${Bold}${Cyan}====================================================${Reset}"

# 실패한 항목이 있으면 목록 출력
if ($failedRepos.Count -gt 0) {
    Write-Host ""
    Write-Host "${Bold}${Red}[!] The following repositories failed to clone:${Reset}"
    foreach ($failed in $failedRepos) {
        Write-Host "  - $failed"
    }
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "${Bold}${Green}[V] All repositories processed successfully!${Reset}"
    Write-Host ""
}

Write-Host "Press any key to exit..."
[void][Console]::ReadKey($true)
