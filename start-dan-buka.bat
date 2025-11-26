@echo off
echo ================================================
echo   Lembata Ocean Explorer
echo   Starting Server + Opening Browser
echo ================================================
echo.

cd /d "%~dp0"

echo [1/2] Starting development server...
start "Lembata Ocean Server" cmd /k "npm run dev"

echo [2/2] Waiting for server to start...
timeout /t 8 /nobreak >nul

echo Opening browser...
start http://localhost:3000

echo.
echo ================================================
echo   Server: http://localhost:3000
echo   
echo   Untuk stop server, tutup window "Lembata Ocean Server"
echo ================================================
echo.
pause
