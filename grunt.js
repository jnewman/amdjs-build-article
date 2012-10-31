module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-clean');

    // Project configuration.
    grunt.initConfig({
        clean: {
            dist: './dist',
            junit: './junit',
            spec: '_SpecRunner.html'
        },
        lint: {
            files: [
                './grunt.js',
                './src/run.js',
                './src/article/**/*.js',
                './spec/**/*.js'
            ]
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                node: true
            },
            globals: {
                beforeEach: false,
                define: false,
                describe: false,
                expect: false,
                exports: true,
                it: false,
                jasmine: false,
                require: false,
                spyOn: false
            }
        },
        pkg: '<json:package.json>',
        requirejs: require('./profiles/article.profile').config,
        watch: {
            files: '<config:lint.files>',
            tasks: 'default'
        }
    });

    // Default task.
    grunt.registerTask('default', 'lint');
    grunt.registerTask('release', 'lint requirejs');

};
