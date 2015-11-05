var gulp = require('gulp');
var coffee = require('gulp-coffee');
var watch = require('gulp-watch');

var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

gulp.task('coffee', function() {
  console.log('coffee');
  gulp.src('web/coffee/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('web/js'));
});

gulp.task('watch', function() {
  gulp.watch('web/coffee/**/*.coffee', ['coffee']);
  gulp.watch('web/templates/*.hbs', ['handlebars']);
  gulp.watch('web/templates/_*.hbs', ['partials']);
});

gulp.task('handlebars', function(){
  gulp.src('web/templates/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
        namespace: 'Templates',
        noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('web/js/tpl'));
})

gulp.task('partials', function() {
  gulp.src(['web/templates/_*.hbs'])
    .pipe(handlebars())
    .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
      imports: {
        processPartialName: function(fileName) {
          return JSON.stringify(path.basename(fileName, '.js').substr(1));
        }
      }
    }))
    .pipe(concat('partials.js'))
    .pipe(gulp.dest('web/js/tpl'));
});

gulp.task('default', ['coffee', 'watch', 'handlebars', 'partials']);
