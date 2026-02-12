@echo off
echo ==========================================
echo      GUARDANDO Y SUBIENDO CAMBIOS
echo ==========================================
echo.

echo 1. Agregando archivos al control de versiones...
git add .

echo.
echo 2. Creando commit...
set /p commit_msg="Introduce el mensaje del commit: "
git commit -m "%commit_msg%"

echo.
echo 3. Subiendo a GitHub...
git push origin main

echo.
echo 4. Desplegando a Firebase...
firebase deploy

echo.
echo ==========================================
echo           PROCESO FINALIZADO
echo ==========================================
pause
