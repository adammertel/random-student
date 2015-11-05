class @Student
  constructor: (@name, @id) ->
    studentObject = {
      name: @name
      id: @id
      counter: 0
      active: true
    }
    data.students.push studentObject
    @index = _.indexOf(data.students, studentObject)

    Object.observe data.students[@index], (changes) =>
      refresh()
