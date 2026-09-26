@echo off
echo ========================================================
echo   SA ADVENTURE - DEPLOY KE PRODUCTION VERCEL
echo ========================================================
echo.
set NODE_TLS_REJECT_UNAUTHORIZED=0
echo Memulai deploy ke https://saadventureprofile.com ...
echo.
npx vercel --prod --yes
echo.
echo ========================================================
echo   DEPLOY SELESAI! Silakan cek https://saadventureprofile.com
echo ========================================================
pause
