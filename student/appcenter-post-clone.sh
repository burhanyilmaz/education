#!/usr/bin/env bash
cd student
sed -i "metro.config-backup.js" "s/watchFolders,//g" metro.config.js 
cd ..