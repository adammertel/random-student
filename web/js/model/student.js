(function() {
  this.Student = (function() {
    function Student(name, id) {
      var studentObject;
      this.name = name;
      this.id = id;
      studentObject = {
        name: this.name,
        id: this.id,
        counter: 0,
        active: true
      };
      data.students.push(studentObject);
      this.index = _.indexOf(data.students, studentObject);
      Object.observe(data.students[this.index], (function(_this) {
        return function(changes) {
          return refresh();
        };
      })(this));
    }

    return Student;

  })();

}).call(this);
