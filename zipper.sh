#!/bin/bash

# zipper
# a script to compress dist/ into a zip file with the project version in its name.
########

# exit early if dist dir doesn't exist
if [ ! -d "dist/" ]; then
  echo "[zipper][ERROR] The dist/ directory doesn't exist. Did you run the build command?"
  exit 1
fi

# grab version from package.json, add it to a file name
VERSION=`node -p "require('./package.json').version"`
FILENAME="tntp_$VERSION.zip"

# compress dist folder contents into a zip
cd dist/
zip -rq $FILENAME *

echo "[zipper][DONE] Wrote distributable zip file to dist/$FILENAME"
