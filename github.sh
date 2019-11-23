#!/bin/bash
gitbook build
git init      
git add -A      
git commit -m "commit"      
git push -u origin master

