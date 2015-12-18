var gulp = require('gulp'),
    gutil = require('gulp-util'),
    //$ = require('gulp-load-plugins')({ lazy: true }),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('./gulp.config')();

gulp.task('compileMasterLess', function() {

  return gulp
        .src(config.lessMaster)
        .pipe(less())        
        //.pipe(minifycss()) // TODO Uncomment for production
        .on('error', function (err) {
            gutil.log(err.message);
            this.emit('end');
        })
        .pipe(gulp.dest(config.cssDest))
        ;
});

 
// Minifying Base JS files

gulp.task('minifyBaseJs', function () {

    //console.log(config.vendorsJsFiles);
    return gulp
        .src(config.mainJsFiles) 
        //.pipe(uglify())
        .pipe(concat(config.mainJsMin)) //  'main.min.js'
        .pipe(gulp.dest(config.mainJsDest));
});

// Minifying Vendors JS files

gulp.task('minifyVendorsJs', function () {

    //console.log(config.vendorsJsFiles);
    return gulp
        .src(config.vendorsJsFiles) // TO DO create vendorsJsFiles
        .pipe(uglify())
        .pipe(concat(config.vendorsJsMin)) //  'main.min.js'
        .pipe(gulp.dest(config.vendorsJsDest));
});

// Compiling LESS files


// Init tasks

gulp.task('minifyJS', ['minifyBaseJs', 'minifyVendorsJs']);
gulp.task('styles', ['compileMasterLess']); 

gulp.task('default', ['minifyJS', 'styles']);



var watcher = gulp.task('watcher', function(){

  //console.log(config.vendorsJsFiles);

  // Watch  base js files
  gulp.watch(config.mainJsFiles, ['minifyBaseJs']);

  // Watch  vendors js files
  gulp.watch(config.vendorsJsFiles, ['minifyVendorsJs']);

  // Watch  LESS files
  gulp.watch([
    config.lessSrc + '*.less',
    config.lessSrc + '/**/*.less'
    ], ['compileMasterLess']);

});

//watcher.on('')
