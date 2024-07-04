// const gulp = require('gulp');

// function task1(done) {
//   setTimeout(function() {
//     console.log('Task 1 완료');
//     done();
//   }, 1000);
// }

// function task2(done) {
//   setTimeout(function() {
//     console.log('Task 2 완료');
//     done();
//   }, 500);
// }

// gulp.task('default', gulp.series(task1, task2));

const gulp = require('gulp');
const { src, dest, series, parallel } = require('gulp');
const clean = require('gulp-clean'); // 예시용 추가 패키지, 필요한 경우 설치하세요
const sass = require('gulp-sass')(require('sass')); // 예시용 추가 패키지, 필요한 경우 설치하세요
const uglify = require('gulp-uglify'); // 예시용 추가 패키지, 필요한 경우 설치하세요

// 예시용 clean 작업
function cleanTask() {
    return src('dist', { read: false, allowEmpty: true })
        .pipe(clean());
}

// 예시용 CSS 작업
function cssTask() {
    return src('src/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
}

// 예시용 JavaScript 작업
function jsTask() {
    return src('src/js/*.js')
        .pipe(uglify())
        .pipe(dest('dist/js'));
}

gulp.task('dev', function(){
    return console.log('gulp dev test !!!');
  });

// build 작업 정의
const build = series(cleanTask, parallel(cssTask, jsTask));

// build 작업을 기본 작업으로 설정
exports.build = build;
exports.default = build;
