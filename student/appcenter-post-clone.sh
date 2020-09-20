#!/usr/bin/env bash
echo "Metro config script."

cd student
sed -i "metro.config-backup.js" "s/watchFolders,//g" metro.config.js 
cd ..