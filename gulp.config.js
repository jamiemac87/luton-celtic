module.exports = function(){
  var config = {
    dist: './dist',
    html: {
      src: './src/**/*.html'
    },
    fonts: {
      src: ['./src/fonts/**/*.*', './node_modules/simple-line-icons/fonts/**/*.*'],
      dist: './dist/fonts/'
    },
    jsVendor: {
      src: [
        './node_modules/responsive-img/responsive-img.min.js',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/requirejs/require.js'
      ],
      dist: './dist/js/vendor'
    },
    jsClint: {
      src: './src/js/client/**/*.js',
      dist: './dist/js/client/'
    },
    scss: {
      src: './src/scss/**/*.scss',
      dist: './dist/css/',
      options: {
        outputStyle: 'expanded',
        includePaths: [
          './node_modules/breakpoint-sass/stylesheets',
          './node_modules/bourbon/app/assets/stylesheets',
          './node_modules/normalize-scss/sass',
          './node_modules/susy/sass'
        ]
      }
    },
    deploy: {
      dist: './dist/**/*'
    }
  };
  return config;
}

