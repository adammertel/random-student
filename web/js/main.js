(function() {
  Handlebars.registerPartial('studentrRow', Templates._studentrow);

  Handlebars.registerHelper('activeStudent', function(active) {
    if (active) {
      return 'student-tr-active';
    } else {
      return 'student-tr-not-active';
    }
  });

  Handlebars.registerHelper('toggleActiveStudentFunction', function(studentId) {
    return 'table.toggleActiveStudent(' + studentId + ')';
  });

  Handlebars.registerHelper('incrementCounterManually', function(studentId) {
    return 'table.incrementCounter(' + studentId + ')';
  });

  Handlebars.registerHelper('decrementCounterManually', function(studentId) {
    return 'table.decrementCounter(' + studentId + ')';
  });

  window.refresh = function() {
    return table.render();
  };

  window.restart = function() {
    log.restart();
    return table.restartCounters();
  };

  window.generate = function() {
    var getRandom, noActiveStudent, noStudents, selectedStudent, validate;
    noStudents = data.students.length;
    noActiveStudent = table.noActiveStudents();
    getRandom = function() {
      var randomIndex;
      randomIndex = Math.floor(Math.random() * noStudents);
      return data.students[randomIndex];
    };
    validate = function(student) {
      var harmonyCoef;
      harmonyCoef = (table.studentWithSmallerCounter(student.id).length / (noActiveStudent - 1)) - 0.1;
      if (!selectedStudent.active) {
        return false;
      } else if (Math.random() < harmonyCoef) {
        return false;
      } else {
        return true;
      }
    };
    selectedStudent = getRandom();
    while (!validate(selectedStudent)) {
      selectedStudent = getRandom();
    }
    table.incrementCounter(selectedStudent.id);
    return modal.open(selectedStudent);
  };

  Array.observe(data.students, function(changes) {
    return refresh();
  });

  document.addEventListener('DOMContentLoaded', function() {
    window.log = new History();
    window.table = new Table();
    window.modal = new Modal();
    new Student('Čekan Peter', 423332);
    new Student('Faltejsková Martina', 423468);
    new Student('Hebelka David', 410065);
    new Student('Hradecká Anna', 423512);
    new Student('Janeček Tomáš', 423389);
    new Student('Koudelka Ladislav', 420959);
    new Student('Kucharčík David', 423915);
    new Student('Lahoda Marek', 391792);
    new Student('Musil Martin', 421094);
    new Student('Sháněl Jan', 424021);
    new Student('Snopková Dajana', 423348);
    new Student('Svoboda Libor', 423748);
    new Student('Sýkorová Lucie', 323827);
    new Student('Šilhák Petr', 408102);
    new Student('Tajovský Jan', 423920);
    return null;
  });

}).call(this);
