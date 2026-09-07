@echo off
echo Starting Raydrim.com Development Server...
cd /d "%~dp0"
start "" http://localhost:3000
npm run dev
if errorlevel 1 pause

