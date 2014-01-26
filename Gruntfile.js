'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade: {
            dev: {
                options: {
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: './',
                    dest: './',
                    src: '*.jade',
                    ext: '.html'
                }]
            },
            dist: {
                options: {
                    pretty: false
                },
                files: [{
                    expand: true,
                    cwd: './',
                    dest: 'dist/',
                    src: '*.jade',
                    ext: '.html'
                }]
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-jade');

    // Default task(s)
    grunt.registerTask('build', ['jade:dist']);

    // default task (with no arguments)
    // grunt.registerTask('default', ['build']);
};
