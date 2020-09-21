#!/usr/bin/env bash
echo "Metro config script."
pwd
sed -i -e 's/watchFolders,//g' metro.config.js 
# sed -i "metro.config-backup.js" "s/watchFolders,//g" metro.config.js 