#!/bin/bash
gitbook build
cd _book
git init      
git add -A      
git commit -m "deploy"
git push -f https://github.com/peterlulu666/GitbookUTACSE2320.git master:gh-pages     

