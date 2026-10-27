@echo off
cd /d "%~dp0"
where node >nul 2>nul || (echo Install Node.js 20 or later. & pause & exit /b 1)
echo Starting SVS Group V25 on localhost:3003
call npm run dev
pause
