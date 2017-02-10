module.exports = function(){
  var config = {
    dist: './dist',
    html: {
      src: './src/**/*.html'
    },
    img: {
      src: './src/img/**/*.*',
      dist: './dist/img/'
    },
    fonts: {
      src: ['./src/fonts/**/*.*', './node_modules/simple-line-icons/fonts/**/*.*'],
      dist: './dist/fonts/'
    },
    jsVendor: {
      src: [
        './node_modules/picturefill/dist/picturefill.min.js',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/requirejs/require.js'
      ],
      dist: './dist/js/vendor'
    },
    jsClint: {
      src: './src/js/client/**/*.js',
      dist: './dist/js/client/'
    },
    serviceWorker: {
      src: './src/js/service-workers/service-worker.js',
      dist: './dist'
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

