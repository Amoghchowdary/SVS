@echo off
cd /d "%~dp0"
where node >nul 2>nul || (echo Please install Node.js LTS first. & pause & exit /b 1)
echo Opening SVS Experience V21 local website...
npm run dev
pause
