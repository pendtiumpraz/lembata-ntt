@echo off
echo ================================================
echo   Lembata Ocean Explorer - Development Server
echo ================================================
echo.
echo Starting server...
echo.
echo Server akan jalan di: http://localhost:3000
echo.
echo Tekan CTRL + C untuk stop server
echo ================================================
echo.

cd /d "%~dp0"
npm run dev

pause
