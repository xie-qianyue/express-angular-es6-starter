'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack-stream';
import path     from 'path';
import sync     from 'run-sequence';
// import serve    from 'browser-sync';
// import rename   from 'gulp-rename';
// import template from 'gulp-template';
// import fs       from 'fs';
// import yargs    from 'yargs';
// import lodash   from 'lodash';
import nodemon from 'gulp-nodemon';
import beautify from 'gulp-beautify';
import prettify from 'gulp-html-prettify';

// let reload = () => serve.reload();
let root = 'client';

// helper method for resolving paths
let resolveToApp = (glob) => {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
};

// let resolveToComponents = (glob) => {
//   glob = glob || '';
//   return path.join(root, 'app/components', glob); // app/components/{glob}
// };

// map of all paths
let paths = {
  js: resolveToApp('**/*.js'), // all the js under app
  styl: resolveToApp('**/*.styl'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(root, 'app/app.js'),
  output: root
  // ,blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

// use webpack.config.js to build modules
gulp.task('webpack', () => {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output));
});

// gulp.task('serve', () => {
//   serve({
//     port: process.env.PORT || 3000,
//     open: false,
//     server: { baseDir: root }
//   });
// });

gulp.task('watch', () => {
  let allPaths = [].concat([paths.js], paths.html, [paths.styl]);
  gulp.watch(allPaths, ['webpack']);
});

// gulp.task('component', () => {
//   let cap = (val) => {
//     return val.charAt(0).toUpperCase() + val.slice(1);
//   };
//   let name = yargs.argv.name;
//   let parentPath = yargs.argv.parent || '';
//   let destPath = path.join(resolveToComponents(), parentPath, name);

//   return gulp.src(paths.blankTemplates)
//     .pipe(template({
//       name: name,
//       upCaseName: cap(name)
//     }))
//     .pipe(rename((path) => {
//       path.basename = path.basename.replace('temp', name);
//     }))
//     .pipe(gulp.dest(destPath));
// });

gulp.task('default', (done) => {
  sync('webpack', 'start', 'watch', done);
});

gulp.task('start', function () {
  nodemon({
    script: './server/server.js'
  })
});

gulp.task('beautify-js', function() {
    return gulp.src(resolveToApp('**/*.js'), {
            base: './' // save the original path 
        })
        .pipe(beautify())
        .pipe(gulp.dest('./'));
});

gulp.task('prettify-html', function() {
    return gulp.src([resolveToApp('**/*.html')], {
            base: './' // save the original path 
        })
        .pipe(prettify())
        .pipe(gulp.dest('./'));
});

gulp.task('beautify', function() {
    gulp.start('beautify-js', 'prettify-html');
});

