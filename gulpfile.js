'use strict';

var gulp   = require('gulp'),
    watch  = require('gulp-watch'),
    babel  = require('gulp-babel'),
    uglify = require('gulp-uglify');

var path = {
    build: {
        js: 'build/js/'
    },
    src: {
        js: 'src/js/app.js'
    },
    watch: {
        js: 'src/js/**/*.js'
    },
    clean: './build'
};

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) 
        .pipe(babel({
            presets: ['env'],
            plugins: ['transform-runtime']
        })) 
        .pipe(uglify())  
        .pipe(gulp.dest(path.build.js));
});

gulp.task('build', [
    'js:build'
]);


gulp.task('watch', function(){
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
});


gulp.task('default', ['build', 'watch']);