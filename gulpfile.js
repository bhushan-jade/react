"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //runs a local dev server
var open = require('gulp-open'); //Open a URL in web browser
var browserify = require('browserify'); //bundles js
var reactify = require('reactify'); //Transform React JSX to Js
var source = require('vinyl-source-stream'); // Use Conventional text Streams with gulp

//Configs

var config = {
    port: 9005, //any random port
    devBaseUrl: 'http://localhost', //base currently localhost
    paths: { //globs
        html: './src/*.html', //any html file in src to be matched. anything with match html
        js: './src/**/*.js',
        dist: './dist',
        mainJs: './src/main.js'
    }
}

//Task
//start a local development server
/*
 * Typically task synax
 gulp.task('name_of_task',function(){

 })
 *
 * */
gulp.task('connect', function () {
    connect.server({

        root: ['dist'], //the root
        port: config.port, //defined in config
        base: config.devBaseUrl, //the baseurl /basepath
        livereload: true,//anytime file changes reload source in browser
        browser: 'chromium-browser' //tells the default browser to load.
    });

});


//need a task to open file in server
//task dependency
//when we run task open first task `connect`
/*
 * When This does
 * Go get index.html and open it in browser given in pipe.open (url)
 *
 * 1. Whenever open called fist call conenct
 * 2. which file to open.
 * pipe the output url using `config`
 *
 *
 *
 *
 * */
gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open('', {url: config.devBaseUrl + ':' + config.port + '/'}))
});


//task


/*
 * get any html put in dist and once done reload.
 *
 * */
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload())
});


gulp.task('js', function () {
    browserify(config.paths.mainJs) //bundle js
        .transform(reactify) //JSX to js
        .bundle() //bundle in single file
        //.on('error', console.error.bind(console)) //show error in console
        .pipe(source('bundle.js')) //single bundle js file name
        .pipe(gulp.dest(config.paths.dist + '/scripts'))//single js destination
        .pipe(connect.reload()) //reload on changes
});

//watcher this will watch files for any changes and reload browser

gulp.task('watcher', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
});


//default task
gulp.task('default', ['html', 'js', 'open', 'watcher']);

