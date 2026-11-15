<#
.SYNOPSIS
    SportNotes DeepSeek Pipeline Master Batch Runner
.DESCRIPTION
    Loads .env / .env.local, verifies DEEPSEEK_API_KEY, and sequentially executes:
      1) fabryka_anatomia_3d.py     (Clean-Room 3D Atlas cards + spatial sub-pins)
      2) fabryka_oer_matura.py      (Clean-Room OER textbooks across all 9 departments)
      3) fabryka_ryciny_podreczniki.py (CC-BY sample extraction for anatomia)
      4) fabryka_arkusze_cke.py     (1:1 CKE 2015-2024 extraction + DeepSeek step polishing)
#>

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

function Import-EnvFile {
    param([string]$FilePath)
    if (-not (Test-Path $FilePath)) { return }
    Write-Host "[ENV] Loading $FilePath" -ForegroundColor DarkGray
    Get-Content $FilePath | ForEach-Object {
        $line = $_.Trim()
        if (-not $line -or $line.StartsWith("#") -or -not $line.Contains("=")) { return }
        $idx = $line.IndexOf("=")
        $key = $line.Substring(0, $idx).Trim()
        $val = $line.Substring($idx + 1).Trim().Trim('"').Trim("'")
        if ($key -and -not [Environment]::GetEnvironmentVariable($key)) {
            [Environment]::SetEnvironmentVariable($key, $val, "Process")
        }
    }
}

Import-EnvFile (Join-Path $PSScriptRoot ".env.local")
Import-EnvFile (Join-Path $PSScriptRoot ".env")

if (-not $env:DEEPSEEK_API_KEY) {
    Write-Error "DEEPSEEK_API_KEY is not set in .env or environment variables. Aborting."
    exit 1
}

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host " SportNotes DeepSeek Clean-Room & CKE Batch Pipeline" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan

Write-Host "`n[1/4] Generating Clean-Room 3D Anatomy Cards (fabryka_anatomia_3d.py)..." -ForegroundColor Green
python scripts/fabryka_anatomia_3d.py --concurrency 4
if ($LASTEXITCODE -ne 0) { Write-Warning "fabryka_anatomia_3d.py exited with $LASTEXITCODE" }

Write-Host "`n[2/4] Synthesizing All 9 OER Science Departments (fabryka_oer_matura.py)..." -ForegroundColor Green
python scripts/fabryka_oer_matura.py --department all --concurrency 4
if ($LASTEXITCODE -ne 0) { Write-Warning "fabryka_oer_matura.py exited with $LASTEXITCODE" }

Write-Host "`n[3/4] Extracting CC-BY Textbook Figures (fabryka_ryciny_podreczniki.py)..." -ForegroundColor Green
python scripts/fabryka_ryciny_podreczniki.py --extract-samples --subject anatomia
if ($LASTEXITCODE -ne 0) { Write-Warning "fabryka_ryciny_podreczniki.py exited with $LASTEXITCODE" }

Write-Host "`n[4/4] Enriching 2015-2024 CKE Exam Walkthroughs with DeepSeek (fabryka_arkusze_cke.py)..." -ForegroundColor Green
python scripts/fabryka_arkusze_cke.py --years 2015,2016,2017,2018,2019,2020,2021,2022,2023,2024 --use-deepseek --concurrency 4
if ($LASTEXITCODE -ne 0) { Write-Warning "fabryka_arkusze_cke.py exited with $LASTEXITCODE" }

Write-Host "`n============================================================" -ForegroundColor Cyan
Write-Host " Batch Pipeline Completed. Run 'npm test; npm run build' next." -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
