#!/bin/bash

#npm install --registry=http://cp01-rdqa-dev418.cp01.baidu.com:8888/
npm install --registry=http://registry.npm.baidu.com/
npm run build

mkdir -p output

tar -cvzf output/output.tar.gz --exclude=*.map -C ./dist ./

echo "build end"

