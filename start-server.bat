@echo off
title Media Transfer Server
color 0A
cd /d "%~dp0"

echo.
echo ============================================
echo    Media Transfer Server
echo ============================================
echo.
echo Checking dependencies...
echo.

if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    echo.
)

echo Starting server...
echo.
node server.js

pause
