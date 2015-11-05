(function() {
  this.Modal = (function() {
    function Modal() {}

    Modal.prototype.open = function(studentData) {
      var template;
      template = Templates.modal(studentData);
      $('#modal').html(template);
      $('#result-modal').foundation('reveal', 'open');
      return null;
    };

    return Modal;

  })();

}).call(this);
