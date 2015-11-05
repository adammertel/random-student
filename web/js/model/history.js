(function() {
  this.History = (function() {
    function History() {
      this.render();
      Array.observe(data.logs, (function(_this) {
        return function(changes) {
          return _this.render();
        };
      })(this));
    }

    History.prototype.makeLog = function(action, studentId) {
      var timeStamp, timeString;
      timeStamp = new Date();
      timeString = timeStamp.getHours() + ':' + timeStamp.getMinutes() + ':' + timeStamp.getSeconds();
      return data.logs.push({
        action: action,
        studentId: studentId,
        time: timeString
      });
    };

    History.prototype.restart = function() {
      data.logs = [];
      Array.observe(data.logs, (function(_this) {
        return function(changes) {
          return _this.render();
        };
      })(this));
      return this.render();
    };

    History.prototype.render = function() {
      var template;
      template = Templates.history(data);
      return $('#history').html(template);
    };

    return History;

  })();

}).call(this);
