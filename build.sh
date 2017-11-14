#!/bin/sh

echo 'running pre-commit hook'

npx node-sass --o css/static scss/ --output-style compressed
