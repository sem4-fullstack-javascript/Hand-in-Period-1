@ECHO OFF
SET msg=changes
git add -A
SET /P msg=Enter commit message:
git commit -m"%msg%"
git push
@ECHO ON