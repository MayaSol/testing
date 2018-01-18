"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
//var minify = require("gulp-csso");
var rename = require("gulp-rename");
//var imagemin = require("gulp-imagemin");
var del = require("del");
var run = require("run-sequence");
//var uglify = require("gulp-uglify");
var pump = require("pump");
var csscomb = require("gulp-csscomb");

gulp.task("clean", function() {
  return del("build");
});

gulp.task("copy", function() {
  return gulp.src([
    "fonts/**/*.{woff,woff2}",
    "img/**",
    "js/**",
    "js-mini/**",
    "*.html"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"));
});

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass({
            includePaths: require('node-normalize-scss').includePaths
          }))
//    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]})
    ]))
    .pipe(csscomb())
    .pipe(gulp.dest("build/css"))
//.pipe(minify())
//    .pipe(rename("style.min.css"))
//   .pipe(gulp.dest("build/css"))

    .pipe(server.stream());
});

//gulp.task("images", function(){
//  return gulp.src("build/img/**/*.{png,jpg,gif}")
/*  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true})
  ]))
  .pipe(gulp.dest("build/img"));
});
*/

//gulp.task("compress", function(cb){
//  pump([
//    gulp.src("build/js/**/*.js"),
/*    uglify(),
    gulp.dest("build/js-mini")
    ],
    cb
    );
});
*/

gulp.task("build", function(fn) {
  run("clean",
      "copy",
      "style",
//      "images",
//      "compress",
      fn);
});

gulp.task("html:copy", function(){
  return gulp.src("*.html")
  .pipe(gulp.dest("build"));
});

gulp.task("html:update", ["html:copy"], function(done){
  server.reload();
  done();
});

gulp.task("serve", function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html", ["html:update"]);
});
