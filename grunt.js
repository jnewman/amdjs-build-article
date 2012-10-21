module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-clean');
    grunt.loadNpmTasks('grunt-jasmine-runner');

    // Project configuration.
    grunt.initConfig({
        clean: {
            dist: './dist',
            junit: './junit'
        },
        lint: {
            files: ['grunt.js', 'src/**/*.js', 'src/*.js', 'test/**/*.js']
        },
        'jasmine' : {
            amd: true,
            helpers : [
                './src/requirejs/require.js',
                './test/run.js'
            ],
            junit : {
                output : 'junit/'
            },
            phantomjs : {
                'ignore-ssl-errors' : true
            },
            src : 'src/**/*.js',
            specs : 'test/**/*.spec.js',
            timeout : 10000
        },
        'jasmine-server' : {
            browser : false
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
                exports: true
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
