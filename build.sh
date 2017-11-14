#!/bin/sh

npx node-sass --o css/static scss/ --output-style compressed

# If there are whitespace errors, print the offending file names and fail.
exec git diff-index --check --cached $against --
