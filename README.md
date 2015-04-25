# Grunt Starter

A demo to use [GruntJS](http://gruntjs.org) JavaScript task Runner.

- Mostly files are already generated on my repo, you can create a empty project, then do it by yourself.

- Happy Hacking!

## Prerequisites

- NodeJS

## Goal

- Use jade to generate dist/index.html 

## Install GruntJS cli tool

Grunt depends on [Node](http://nodejs.org) and [npm](http://npmjs.org). it's installed globally using npm:

```
$ npm install -g grunt-cli
```

## Initial project

```
$ npm init
```

Follow the prompt and it will generate `package.json` for you.

## Install local dependency packages

```
$ npm install grunt --save-dev
$ npm install grunt-contrib-jade --save-dev
```

**Hint:** `--save-dev` will auto add installed package to *package.json*, next time you can simply execute `npm i` to install all packages in *packages.json*

## Initial Gruntfile.js

```
'use strict'

module.exports = function(grunt) {
	grunt.initConfig({});
};
```

## Execute tasks

```
$ grunt jade  # run both dev and dist
$ grunt jade:dev
$ grunt jade:dist
```

After prepared all materials, you just need to modify Gruntfile.js and install more dev-depenedncy you need.

## Tips

### Search other available grunt package by npm

```
$ npm search grunt
$ npm search grunt contrib
$ npm search grunt jade
```
