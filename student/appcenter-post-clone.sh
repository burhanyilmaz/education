#!/usr/bin/env bash
echo "Metro config script."

sed -i -e 's/watchFolders,//g' metro.config.js