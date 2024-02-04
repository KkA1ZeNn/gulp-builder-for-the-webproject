import gulp from "gulp";

// Конфигурация 
import { path } from "../config/path.js";

// Плагины
import gulpPlumber from "gulp-plumber";
import concat from "gulp-concat";
import cssimport from "gulp-cssimport";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import size from "gulp-size";
import shorthand from "gulp-shorthand";
import CombineMedia  from "gulp-combine-media";

// Обработка CSS
const css = () => {
   return gulp.src(path.css.src, { sourcemaps: true })
   .pipe(gulpPlumber())
   .pipe(concat("main.css"))
   .pipe(cssimport())
   .pipe(autoprefixer())
   .pipe(shorthand())
   .pipe(CombineMedia())
   .pipe(size())
   .pipe(gulp.dest(path.css.dest, { sourcemaps: true }))
   .pipe(rename({ suffix: ".min" }))
   .pipe(csso())
   .pipe(size())
   .pipe(gulp.dest(path.css.dest, { sourcemaps: true }));
}

export { css };