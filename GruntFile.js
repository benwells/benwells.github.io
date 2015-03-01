module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      reload: {
        files: '**/*',
        options: {
          reload: true,
        },
      },
    },
    concat: {
      tagyml: {
        options: {
          process: function(src, filepath) {
            var newLns = "- slug: " + grunt.config('tagSlug') + "\n" + "  name: " +
              grunt.config('tagName') + "\n";
            return src + newLns;
          },
        },
        files: {
          '_data/tags.yml': ['_data/tags.yml'],
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('add-tag', function (tagSlug, tagName) {
    grunt.config.set('tagSlug', tagSlug);
    grunt.config.set('tagName', tagName);
    grunt.task.run('concat:tagyml');
  });

};
