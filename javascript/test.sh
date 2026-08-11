#!/usr/bin/env bash

cd node/dist/tests

node geometry/point.js
node image/color.js
node util/string.js

cd ..
