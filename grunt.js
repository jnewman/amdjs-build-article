module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-clean');
    grunt.loadNpmTasks('grunt-jasmine-runner');

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
                './test/**/*.js'
            ]
        },
        'jasmine': {
            amd: true,
            helpers: [
                './src/requirejs/require.js',
                './test/run.js'
            ],
            src: 'src/**/*.js',
            specs: 'spec/**/*.js',
            timeout: 10000
        },
        'jasmine-server': {
            browser: false
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
    grunt.registerTask('default', 'lint jasmine');
    grunt.registerTask('release', 'lint jasmine requirejs');

};
