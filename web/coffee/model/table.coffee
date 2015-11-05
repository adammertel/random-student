class @Table
  toggleActiveStudent: (studentId) ->
    @getStudentById(studentId).active = !@getStudentById(studentId).active
    return null

  getStudentById: (studentId) ->
    _.find data.students, (student) ->
      student.id == studentId

  restartCounters: () ->
    _.forEach data.students, (student) ->
      student.counter = 0
    return null

  noActiveStudents: () ->
    activeStudents = _.filter data.students, (student) ->
      student.active
    activeStudents.length

  incrementCounter: (studentId) ->
    @getStudentById(studentId).counter++
    log.makeLog('increment', @getStudentById(studentId).name)
    return null

  decrementCounter: (studentId) ->
    student = @getStudentById(studentId)
    if student.counter > 0
      log.makeLog('decrement', @getStudentById(studentId).name)
      student.counter--
    return null

  studentWithSmallerCounter: (studentId) ->
    studentCounter = @getStudentById(studentId).counter
    smallerCounter = _.filter data.students, (student) ->
      student.counter < studentCounter
    smallerCounter

  render: ->
    template = Templates.table(data)
    $('#table').html(template)

    return null
