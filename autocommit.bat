@echo off
cd /d "%~dp0"
:loop
git add -A
git commit -m "saving before pull"
git pull origin main --rebase
git add -A 
git rebase --continue
git push origin main
timeout /t 1000
goto loop
