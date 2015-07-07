module.exports = function(grunt) {

  grunt.initConfig({
    clean : {
      src: [ 
        'bundle.js'
      ]
    },    
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    browserify : {
      dev : {
        options: {
            alias : {
              'underscore' : './bower_components/underscore/underscore.js',
              'underscore.deferred' : './bower_components/underscore.deferred/underscore.deferred.js'
            }
        },
        src : ['main.js'],
        dest : 'bundle.js'
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    'http-server' : {

      'dev': {
          // the server root directory
          root: ".",

          port: 9020,
          // port: function() { return 8282; }

          host: "127.0.0.1",

          cache: 5,
          showDir : true,
          autoIndex: true,

          // server default file extension
          ext: "html",

          // run in parallel with other tasks
          runInBackground: false //true|false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('default', ['jshint', 'browserify']);
  grunt.registerTask('serve', ['http-server']);

};