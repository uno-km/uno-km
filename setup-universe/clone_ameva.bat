@echo off
rem UTF-8 인코딩 설정
chcp 65001 >nul

rem 파워쉘 스크립트 실행
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0clone_ameva.ps1"
exit /b %ERRORLEVEL%
