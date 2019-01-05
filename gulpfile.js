var gulp = require('gulp');
var rev = require('gulp-rev');                        //- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector');//替换文件
var minifyCss = require('gulp-minify-css');//压缩css
var uglify = require('gulp-uglify');//压缩js
var clean = require('gulp-clean');//清理文件

gulp.task('clean', function () {
    return gulp.src(['./demo/**/*.css','./demo/**/*.js'], { read: false })
        .pipe(clean())
})
gulp.task('revImage',function(){
    return gulp.src('./images/**')
            .pipe(gulp.dest('./dist/images/'))
})
gulp.task('revCss', function () {
    return gulp.src('./demo/css/*.css')
        .pipe(rev())
        .pipe(minifyCss())                              //- 文件名加MD5后缀
        .pipe(gulp.dest('./demo/css/'))                //- 输出文件本地
        .pipe(rev.manifest())                    //- 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev/css/'));
});
gulp.task('revJs', function () {
    return gulp.src('./demo/js/*.js')
        .pipe(rev())
        .pipe(uglify())
        .pipe(gulp.dest('./demo/js/'))
        .pipe(rev.manifest())                    //- 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev/js/'));
});
gulp.task('revHtml', function () {
    gulp.src(['./rev/**/*.json', './pages/*.html'])
        .pipe(revCollector({
            replaceReved: true
        }))
        .pipe(gulp.dest('./template'));
});
gulp.task('default', ['clean','revImage', 'revCss', 'revJs', 'revHtml']);