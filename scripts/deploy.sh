#!/bin/bash

local_branch="master"
remote_branch="master"
local_repo="origin"
remote_repo="origin"
site="sharonspetgrooming.com"

echo "Enter in the message for the changes made and then hit enter:"
read message

git add .
git commit -m "$message"
git pull $local_repo HEAD
git push $local_repo HEAD

ssh -t geoffberger@geoffberger.com "
cd sharonspetgrooming.com;
git pull $remote_repo master
"

echo "[info] Changes have been deployed and are viewable at $site"
