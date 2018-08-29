var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
var rename = require("gulp-rename");

gulp.task("sass", function() {
  gulp
    .src("sass/main.scss")
    .pipe(sass({ includePaths: ["scss"] }))
    .pipe(rename("style.css"))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

gulp.task("browser-sync", function() {
  browserSync.init(["css/*.css"], {
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("default", ["sass", "browser-sync"], function() {
  gulp.watch("sass/*.scss", ["sass"]);
  gulp.watch("sass/**/*.scss", ["sass"]);
  gulp.watch("*.html").on("change", browserSync.reload);
});
