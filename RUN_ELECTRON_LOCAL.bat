@echo off
setlocal
cd /d "%~dp0"
if not exist "node_modules\electron\cli.js" (
 echo Electron is an OPTIONAL native desktop dependency.
 echo Run: npm run desktop:setup
 echo Then run this script again.
 pause
 exit /b 1
)
call npm run desktop
pause
