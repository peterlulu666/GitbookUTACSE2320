#!/bin/bash
gitbook build
git add _book
git commit -m "commit"
git push master:gh-pages

