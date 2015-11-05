(function() {
  this.Table = (function() {
    function Table() {}

    Table.prototype.toggleActiveStudent = function(studentId) {
      this.getStudentById(studentId).active = !this.getStudentById(studentId).active;
      return null;
    };

    Table.prototype.getStudentById = function(studentId) {
      return _.find(data.students, function(student) {
        return student.id === studentId;
      });
    };

    Table.prototype.restartCounters = function() {
      _.forEach(data.students, function(student) {
        return student.counter = 0;
      });
      return null;
    };

    Table.prototype.noActiveStudents = function() {
      var activeStudents;
      activeStudents = _.filter(data.students, function(student) {
        return student.active;
      });
      return activeStudents.length;
    };

    Table.prototype.incrementCounter = function(studentId) {
      this.getStudentById(studentId).counter++;
      log.makeLog('increment', this.getStudentById(studentId).name);
      return null;
    };

    Table.prototype.decrementCounter = function(studentId) {
      var student;
      student = this.getStudentById(studentId);
      if (student.counter > 0) {
        log.makeLog('decrement', this.getStudentById(studentId).name);
        student.counter--;
      }
      return null;
    };

    Table.prototype.studentWithSmallerCounter = function(studentId) {
      var smallerCounter, studentCounter;
      studentCounter = this.getStudentById(studentId).counter;
      smallerCounter = _.filter(data.students, function(student) {
        return student.counter < studentCounter;
      });
      return smallerCounter;
    };

    Table.prototype.render = function() {
      var template;
      template = Templates.table(data);
      $('#table').html(template);
      return null;
    };

    return Table;

  })();

}).call(this);
