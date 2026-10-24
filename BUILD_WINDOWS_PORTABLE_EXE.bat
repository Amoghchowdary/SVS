@echo off
cd /d "%~dp0"
call npm run build
if errorlevel 1 goto error
call npm run desktop:setup
if errorlevel 1 goto error
call npm run desktop:package
if errorlevel 1 goto error
echo Portable EXE located in release
pause
exit /b 0
:error
echo Build failed. Check console log.
pause
exit /b 1
