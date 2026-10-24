@echo off
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0PUSH_V21_GITHUB.ps1"
if errorlevel 1 (echo Git push needs attention; review the error above.)
pause
