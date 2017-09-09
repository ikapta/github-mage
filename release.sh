#!/bin/bash
# This is the automated release script

# guard against stupid
if [ -z "$1" ]; then
   echo "You must specify a new version level: [patch, minor, major]";
   exit 1;
fi

npm install
npm run build

git checkout gh-pages
mv * backup/ -p
mv backup/out/* /
rm -rf backup

git add .
git commit -m "new version"
git push
