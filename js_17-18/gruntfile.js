module.exports = function(grunt) {

  grunt.initConfig({
   
   /*
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: ['js/*.js'],
        // the location of the resulting JS file
        dest: 'dist/js/scripts.js'
      }
    },

   */ 

    concat: {
      options: {
        separator: '\n\r'
      },
      dist: {
        src: ['css/*.css'],
        dest: 'dist/css/main.css'
      }
    },


    uglify: {
      dist: {
        src: ['dist/js/scripts.js'],
        dest: 'dist/js/scripts.min.js'
      }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};