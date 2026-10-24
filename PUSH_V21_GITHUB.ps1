# SVS Experience V21 — safe first-time publication to Amoghchowdary/SVS
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
function Invoke-Git {
  & git @args
  if ($LASTEXITCODE -ne 0) { throw "Git command failed: git $($args -join ' ')" }
}
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw 'Git for Windows is required. Install from https://git-scm.com/download/win' }
if (-not (Test-Path '.git')) { Invoke-Git init -b main }
Invoke-Git branch -M main
$remote = (& git remote get-url origin 2>$null)
if ($LASTEXITCODE -ne 0) { Invoke-Git remote add origin 'https://github.com/Amoghchowdary/SVS.git' }
elseif ($remote.Trim() -ne 'https://github.com/Amoghchowdary/SVS.git') { throw "Unexpected origin remote: $remote" }
$remoteHead = (& git ls-remote --heads origin main)
if ($LASTEXITCODE -ne 0) { throw 'Cannot contact GitHub. Check internet access and login with Git Credential Manager.' }
if ($remoteHead -and -not (& git rev-parse --verify 'refs/remotes/origin/main' 2>$null)) {
 throw 'GitHub main already contains commits. Clone the remote repo first, then merge V21; this script refuses to overwrite it.'
}
Invoke-Git add -A
& git diff --cached --quiet
if ($LASTEXITCODE -eq 0) { Write-Host 'No new changes to commit.' }
else { Invoke-Git commit -m 'Release SVS V21 fullscreen campus video and Pages deployment' }
Invoke-Git push -u origin main
Write-Host 'Source pushed. Check GitHub Actions and configure Settings > Pages > Source: GitHub Actions.' -ForegroundColor Green
