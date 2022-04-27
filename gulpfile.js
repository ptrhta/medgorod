let project_folder = 'dist';

let path = {
    build: {
        css: project_folder + '/css/',
        fonts: project_folder + '/fonts/',
        js: project_folder + '/js'
    },
    srcPath: {
        css: './style.scss',
        fonts: { 0: './fonts/Inter/', 1: './fonts/golos/' },
        js: './js/*.js'
    },
    watch: {
        css: '/blocks/*.scss',
        js: './js/*.js'
    },
    clean:  {
        css: './' + project_folder + '/css/',
        js: './' + project_folder + '/js/*.js'
    }
}

const { src, dest } = require('gulp');
const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const media_queries = require('gulp-group-css-media-queries');
const clean_css = require('gulp-clean-css');
const rename = require('gulp-rename');
const fs = require('fs');
const fileinclude = require('gulp-file-include');
const include = require('gulp-include')
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');

function css() {
    return src(path.srcPath.css)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'], grid: true, cascade: true
        }))
        .pipe(media_queries())
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(
            rename({
                extname: '.min.css'
            })
        )
        .pipe(dest(path.build.css))
}

function js() {
    return src([path.srcPath.js, '!js/*.min.js'])
        .pipe(include())
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(
            rename({
                extname: '.min.js'
            })
        )
        .pipe(dest(path.build.js))
}

function watchFiles() {
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
}

function cleanCSS() {
    return del(path.clean.css);
}

function cleanJS() {
    return del(path.clean.js);
}

let build = gulp.series(cleanCSS, cleanJS, css, js)
let watch = gulp.parallel(build, watchFiles)

exports.js = js;
exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = watch;

function getDirectories(ext) {
    let source = path.src.blocks;
    let res = fs.readdirSync(source)
      .filter(item => fs.lstatSync(source + item).isDirectory())
      .filter(item => fileExist(source + item + '/' + item + '.' + ext));
    return res;
  }

function fileExist(filepath){
    let flag = true;
    try{
      fs.accessSync(filepath, fs.F_OK);
    }catch(e){
      flag = false;
    }
    return flag;
  }