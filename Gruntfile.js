/* global module:false */
module.exports = function(grunt) {
  var port = grunt.option('port') || 8000;
  var base = grunt.option('base') || '.';

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: port,
          base: base,
          livereload: true,
          open: true
        }
      }
    },

    pug: {
      compile: {
        files: {
          'index.html': 'index.pug'
        }
      }
    },

    watch: {
      pug: {
        files: [ '*.pug' ],
        tasks: 'pug'
      },
      html: {
        files: [ '*.html']
      },
      options: {
        livereload: true
      }
    }
  });

  // Dependencies
  grunt.loadNpmTasks( 'grunt-contrib-pug' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-connect' );

  grunt.registerTask( 'serve', [ 'connect', 'watch' ] );
};
