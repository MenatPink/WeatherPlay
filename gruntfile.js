module.exports = function(grunt){
  // Configure task(s)
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

  sass:{
    dev:{
      options:{
        outputStyle:'expanded'
      },
      files:{
        'CSS/index.css' : 'src/CSS/*.scss'
      }
    }
  },

  autoprefixer:{
    dev:{
      files:{
        'CSS/index.css': 'CSS/index.css'
      }
    }
  },

  connect: {
    dev:{
      options:{
        hostname:'localhost',
        port:9000,
        bases:['.']
      }
    }
  },

  watch:{
    options:{
      livereload:true
    },
    css:{
      files:['src/CSS/*.scss'],
      tasks:'sass'
    },
      autoprefixer: {
        files:['src/CSS/*.scss'],
        tasks: 'autoprefixer'
      }
    }


  });

  // Load the plugins
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-connect');

  // registerTask(s)
grunt.registerTask('default',['autoprefixer', 'sass', 'connect', 'watch']);
};
