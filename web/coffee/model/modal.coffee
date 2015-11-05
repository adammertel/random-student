class @Modal

  open: (studentData) ->
    template = Templates.modal(studentData)
    $('#modal').html(template)
    $('#result-modal').foundation('reveal', 'open')
    return null
