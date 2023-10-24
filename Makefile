PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash

build: node_modules src/rhumb.js
	echo "--> Building project ..."
	# No build process in an ESM world, let's see how long this lasts...

test: build
	echo "--> Running tests ..."
	tape test/**/*.js | faucet

node_modules: package.json
	echo "--> Installing dependencies ..."
	npm install

clean:
	rm -rf dist node_modules

all: clean build test

.PHONY: clean all
.SILENT: build test node_modules clean
