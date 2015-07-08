var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var jadeInheritance = require('gulp-jade-inheritance');
var concat = require('gulp-concat');
var git = require('gulp-git');
var replace = require('gulp-replace');
var replaceTask = require('gulp-replace-task');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var runSequence = require('run-sequence');
var bower = require('gulp-bower');
var install = require('gulp-install');

gulp.task('default',['build_all']);

gulp.task('heroku:production', ['build_all']);

gulp.task('build_all',function(){
    runSequence('process_r','doc_build_components','doc_build_stylesheets','doc_browserify','doc_compile_jade','process_r','ss_build_components','ss_build_stylesheets','ss_browserify','ss_compile_jade', function(){
        console.log("Finished Building all");
    });
});

gulp.task('doc_build',function(){
    return runSequence('process_r','doc_build_components','doc_build_stylesheets','doc_browserify','doc_compile_jade',function(){
        console.log("Finished Building doc");
    })
});

gulp.task('ss_build',function(){
    return runSequence('process_r','ss_build_components','ss_build_stylesheets','ss_browserify','ss_compile_jade',function(){
        console.log('Finished Building ss');
    })
});

gulp.task('doc_build_components',['bower_install','clone_backbone','clone_rfiddle']);

gulp.task('doc_build_stylesheets',['parse_backbone_css','doc_compile_less']);

gulp.task('doc_compile_less', function(){
    return gulp.src('./src/styles/less/doc-main.less')
        .pipe(less())
        .pipe(gulp.dest('./src/styles/'));
});

//must browserify first
gulp.task('doc_compile_jade', function(){
    return gulp.src('./src/views/doc.jade')
        .pipe(jadeInheritance({basedir:'./src/views'}))
        .pipe(jade())
        .pipe(gulp.dest('views'));
});

//must clone_rfiddle, parse_backbone_css, and compile_less first
gulp.task('doc_browserify',function(){
    var b = browserify({
        entries:['./src/scripts/doc.js'],
        debug:true,
    });
    return b.transform(require('browserify-css'),{autoInject:true})
        .bundle()
        .pipe(source('doc-bundle.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('ss_build_components',['bower_install','clone_backbone','clone_rfiddle']);

gulp.task('ss_build_stylesheets',['parse_backbone_css','ss_compile_less']);

gulp.task('ss_compile_less', function(){
    return gulp.src('./src/styles/less/ss-main.less')
        .pipe(less())
        .pipe(gulp.dest('./src/styles/'));
});

//must browserify first
gulp.task('ss_compile_jade', function(){
    return gulp.src('./src/views/ss.jade')
        .pipe(jadeInheritance({basedir:'./src/views'}))
        .pipe(jade())
        .pipe(gulp.dest('views'));
});

//must clone_rfiddle, parse_backbone_css, and compile_less first
gulp.task('ss_browserify',function(){
    var b = browserify({
        entries:['./src/scripts/ss.js'],
        debug:true,
    });
    return b.transform(require('browserify-css'),{autoInject:true})
        .bundle()
        .pipe(source('ss-bundle.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('bower_install',function(){
    return bower();
});

gulp.task('clone_backbone', function(){
    return git.clone('http://github.com/jashkenas/backbone.git',{cwd: './src/components/'});
});

gulp.task('clone_rfiddle', function(){
    return git.clone('http://github.com/Data-Camp/rfiddleHelper.git',{cwd:'./src/components/'});
});

//must clone_backbone first
gulp.task('parse_backbone_css', function(){
    return gulp.src('./src/components/backbone/index.html')
        .pipe(replace(/^((?!<style>[^]*?<\/style>)[^])*$/m,''))
        .pipe(replace(/<body>[^]*?<\/body>/m,''))
        .pipe(replace(/<\/head>/,''))
        .pipe(replace(/<\/html>/,''))
        .pipe(replace(/<style>/,''))
        .pipe(replace(/<\/style>/,''))
        .pipe(rename('backbone.css'))
        .pipe(gulp.dest('src/components/_processed'));
});

gulp.task('process_r', function(){
    return gulp.src('./src/R/*.R')
        .pipe(replaceTask({
            patterns: [
                {
                    match: /((\b|#).*?(\n|$))/g,
                    replacement: '| $1'
                }
            ]
        }))
        .pipe(rename(function(path){
            path.extname = ".jade";
        }))
        .pipe(gulp.dest('./src/views/_R'))
});




