// Using gulp for automation
// dependencies
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested');

//gulp default task
gulp.task('default', function () {
    console.log("horray you created a gulp task");
});

gulp.task('html', function () {
    console.log("Imageing somthing useful with your html here");
});

gulp.task('styles', function () {
   return gulp.src('./app/assets/styles/styles.css')
   .pipe(postcss([nested,cssvars,autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {
    // watch for changes in html
    watch ('./app/index.html', function(){
        gulp.start('html');
    });

    // watch for changes in all css files
    watch ('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
});