#!/bin/bash
gitbook build
gulp
git add docs/
git commit -m "commit"
git push -u origin master
git add _book
git commit -m "commit"
git push -u origin master

