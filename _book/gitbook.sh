#!/bin/bash
npm install -g gitbook-cli
npm install -g gulp
gitbook install
gitbook build
gulp
gitbook serve

