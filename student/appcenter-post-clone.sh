#!/usr/bin/env bash
echo "Metro config script."
# pwd
# cd student
sed -i -e 's/watchFolders,//g' ./student/metro.config.js 
# sed -i "metro.config-backup.js" "s/watchFolders,//g" metro.config.js 
# cd ..