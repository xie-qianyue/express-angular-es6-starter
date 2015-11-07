'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack-stream';
import path     from 'path';
import sync     from 'run-sequence';
import nodemon  from 'gulp-nodemon';
import beautify from 'gulp-beautify';
import prettify from 'gulp-html-prettify';

let client = 'client';
let server = 'server';

// helper method for resolving client paths
let resolveToClient = (glob) => {
  glob = glob || '';
  return path.join(client, 'app', glob); // app/{glob}
};

// helper method for resolving server paths
let resolveToServer = (glob) => {
  glob = glob || '';
  return path.join(server, glob); // app/{glob}
};

// map of all paths
let paths = {
  clientJS: resolveToClient('**/*.js'), // client js
  serverJS: resolveToServer('**/*.js'), // server js
  css: resolveToClient('**/*.css'), // stylesheets
  html: [
    resolveToClient('**/*.html'),
    path.join(client, 'index.html')
  ],
  entry: path.join(client, 'app/app.js'),
  output: client
};

// use webpack.config.js to build modules
gulp.task('webpack', () => {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output));
});

gulp.task('watch', () => {
  let allPaths = [].concat(paths.clientJS, paths.serverJS, paths.html, paths.css);
  gulp.watch(allPaths, ['webpack']);
});

gulp.task('start', function () {
  nodemon({
    script: './server/server.js'
  })
});

gulp.task('beautify-js', function() {
    return gulp.src([paths.clientJS, paths.serverJS], {
            base: './' // save the original path 
        })
        .pipe(beautify({indent_size: 2}))
        .pipe(gulp.dest('./'));
});

gulp.task('prettify-html', function() {
    return gulp.src(paths.html, {
            base: './' // save the original path 
        })
        .pipe(prettify({indent_size: 2}))
        .pipe(gulp.dest('./'));
});

gulp.task('beautify', function() {
    gulp.start('beautify-js', 'prettify-html');
});

gulp.task('default', (done) => {
  sync('beautify', 'webpack', 'start', 'watch', done);
});