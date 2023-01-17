#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
# build
npm install --prefix client && npm run build --prefix client
