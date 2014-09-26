module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      dist: {
        files: {
            'styles.css' : 'styles.less'
        },
        options : {
          compress : true
        }
      }
    },
    watch: {
      styles: {
        files: '**/*.less', // tous les fichiers Sass de n'importe quel dossier
        tasks: ['less:dist']
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-watch')

}