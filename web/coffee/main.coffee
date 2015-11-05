Handlebars.registerPartial 'studentrRow', Templates._studentrow

Handlebars.registerHelper 'activeStudent', (active) ->
  if active
    return 'student-tr-active'
  else
    return 'student-tr-not-active'

Handlebars.registerHelper 'toggleActiveStudentFunction', (studentId) ->
  'table.toggleActiveStudent(' + studentId + ')'

Handlebars.registerHelper 'incrementCounterManually', (studentId) ->
  'table.incrementCounter(' + studentId + ')'

Handlebars.registerHelper 'decrementCounterManually', (studentId) ->
  'table.decrementCounter(' + studentId + ')'

window.refresh = () ->
  table.render()

window.restart = () ->
  log.restart()
  table.restartCounters()

window.generate = () ->

  noStudents = data.students.length
  noActiveStudent = table.noActiveStudents()

  getRandom = () ->
    randomIndex = Math.floor(Math.random() * noStudents)
    data.students[randomIndex]

  validate = (student) ->
    harmonyCoef = (table.studentWithSmallerCounter(student.id).length / (noActiveStudent - 1)) - 0.1
    if !selectedStudent.active
      false
    else if Math.random() < harmonyCoef
      false
    else
      true

  selectedStudent = getRandom()
  while !validate(selectedStudent)
    selectedStudent = getRandom()

  table.incrementCounter selectedStudent.id
  modal.open selectedStudent

Array.observe data.students, (changes) ->
  refresh()

document.addEventListener 'DOMContentLoaded', ()  ->

  window.log = new History()
  window.table = new Table()
  window.modal = new Modal()

  new Student 'Čekan Peter',  423332
  new Student 'Faltejsková Martina',  423468
  new Student 'Hebelka David',  410065
  new Student 'Hradecká Anna',  423512
  new Student 'Janeček Tomáš',  423389
  new Student 'Koudelka Ladislav',  420959
  new Student 'Kucharčík David',  423915
  new Student 'Lahoda Marek',  391792
  new Student 'Musil Martin',  421094
  new Student 'Sháněl Jan',  424021
  new Student 'Snopková Dajana',  423348
  new Student 'Svoboda Libor',  423748
  new Student 'Sýkorová Lucie',  323827
  new Student 'Šilhák Petr',  408102
  new Student 'Tajovský Jan',  423920


  return null
