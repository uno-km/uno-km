# ====================================================================
# AMEVA Project Local Repository Batch Git Pull Script
# ====================================================================

# 1. Base main folder path (Based on the current folder where the script runs)
$MainFolder = Get-Location

Write-Host "====================================================" -ForegroundColor Cyan
Write-Host " Starting batch Git Pull for AMEVA repositories..." -ForegroundColor Cyan
Write-Host " Main folder path: $MainFolder" -ForegroundColor Gray
Write-Host "====================================================" -ForegroundColor Cyan

# 2. Search only for subfolders starting with the 'AMEVA' prefix that contain a .git folder
# * Modify the pattern after '-like' if case-sensitivity or a different folder name pattern is required.
$AmevaRepos = Get-ChildItem -Directory | Where-Object { $_.Name -like "AMEVA*" }

if ($AmevaRepos.Count -eq 0) {
    Write-Host "[-] No subfolders starting with 'AMEVA' were found." -ForegroundColor Yellow
    Exit
}

# 3. Iterate through each repository and execute git pull
foreach ($Repo in $AmevaRepos) {
    $RepoPath = $Repo.FullName
    
    Write-Host "`n[▶] Scanning repository: $($Repo.Name)" -ForegroundColor Green
    
    # Verify if a .git folder exists inside (Check if it's a valid Git repository)
    if (Test-Path "$RepoPath\.git") {
        # Navigate into the repository folder
        Set-Location -Path $RepoPath
        
        Write-Host " -> Updating the current branch (`git pull`)..." -ForegroundColor Gray
        
        # Execute the git pull command (Errors will be displayed on the screen if any occur)
        git pull
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "[✔] $($Repo.Name) updated successfully!" -ForegroundColor Green
        } else {
            Write-Host "[❌] $($Repo.Name) Pull failed (Check for conflicts or network issues)" -ForegroundColor Red
        }
    } else {
        Write-Host " [-] Not a valid Git repository (Missing .git folder)." -ForegroundColor Yellow
    }
}

# 4. Return to the original main folder after completing the task
Set-Location -Path $MainFolder
Write-Host "`n====================================================" -ForegroundColor Cyan
Write-Host "[★] Batch pull completed for all AMEVA repositories." -ForegroundColor Cyan
Write-Host "====================================================" -ForegroundColor Cyan