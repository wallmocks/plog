const gulp = require('gulp');

function task1(done) {
  setTimeout(function() {
    console.log('Task 1 완료');
    done();
  }, 1000);
}

function task2(done) {
  setTimeout(function() {
    console.log('Task 2 완료');
    done();
  }, 500);
}

gulp.task('default', gulp.series(task1, task2));
