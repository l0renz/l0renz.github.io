#!/usr/bin/env sh

set -e
npm run build
cd dist

git init 
git add -A
git commit -m 'new deployment'
git push -f git@github.com:l0renz/l0renz.github.io.git master:gh-pages
cd -