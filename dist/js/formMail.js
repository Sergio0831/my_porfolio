$(document).ready(function() {
  $("#form").submit( function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var submit = $("#sendMail").val();

    $(".form-message").load("ajax/mail.php", {
      name: name,
      email: email,
      message: message,
      submit: submit,
    })
  })
});
