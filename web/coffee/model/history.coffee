class @History

  constructor: () ->
    @render()
    Array.observe data.logs, (changes) =>
      @render()

  makeLog: (action, studentId) ->
    timeStamp = new Date()
    timeString = timeStamp.getHours() + ':' + timeStamp.getMinutes() + ':' + timeStamp.getSeconds()
    data.logs.push {
      action: action
      studentId: studentId
      time: timeString
    }

  restart: () ->
    data.logs = []
    Array.observe data.logs, (changes) =>
      @render()
    @render()

  render: () ->
    template = Templates.history(data)
    $('#history').html(template)
