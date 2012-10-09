module.exports = function(grunt) {
    grunt.loadTasks("./node_modules/grunt-requirejs/tasks");

  // Project configuration.
  grunt.initConfig({
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
    requirejs: {
      name: "article",
      dir: 'dist',
      appDir: 'src',
      baseUrl: '.',
      paths: {
          article: 'article/main'
      },
      pragmas: {
          doExclude: true
      },
      skipModuleInsertion: false,
      optimizeAllPluginResources: true,
      findNestedDependencies: true
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint test');
  grunt.registerTask('release', 'lint test requirejs');

};
