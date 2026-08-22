#!/usr/bin/env bash

cd anniviers/dist/tests

cd geometry
node point.js
cd ..

cd image
node color.js
cd ..

cd util
node string.js
cd ..
