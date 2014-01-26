# Grunt Starter

A demo to use [GruntJS](http://gruntjs.org) JavaScript task Runner.

- Mostly files are already generated on my repo, you can create a empty project, then do it by yourself.

- Happy Hacking!

## Demo covered

- Use jade to generate dist index.html
- 

## Installing GruntJS cli tool

Grunt depends on [Node](http://nodejs.org) and [npm](http://npmjs.org) it's installed globally using npm:

```
$ npm install -g grunt-cli
```

## Initial project

```
$ npm init
```

Follow the prompt and it will generate `package.json` for you.

## Install dependency packages

```
$ npm install grunt --save-dev
$ npm install grunt-contrib-jade --save-dev
```

## Create Gruntfile.js

```
'use strict'

module.exports = function(grunt) {
	grunt.initConfig({});
};
```

After prepared all materials, you just need to modify Gruntfile.js and install more dev-depenedncy you need.

## Tips

### Search available grunt package by npm

```
$ npm search grunt
$ npm search grunt contrib
$ npm search grunt jade
```