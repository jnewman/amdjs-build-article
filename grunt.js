module.exports = function (grunt) {
    grunt.loadTasks("./node_modules/grunt-requirejs/tasks");
    grunt.loadTasks("./node_modules/grunt-clean/tasks");

    // Project configuration.
    grunt.initConfig({
        clean: {
            folder: "./dist"
        },
        pkg: '<json:package.json>',
        test: {
            files: ['test/**/*.js']
        },
        lint: {
            files: ['grunt.js', 'src/**/*.js', 'src/*.js', 'test/**/*.js']
        },
        watch: {
            files: '<config:lint.files>',
            tasks: 'default'
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
        requirejs: require('./profiles/article.profile').config
    });

    // Default task.
    grunt.registerTask('default', 'lint test');
    grunt.registerTask('release', 'lint test requirejs');

};
