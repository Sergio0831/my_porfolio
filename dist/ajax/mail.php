<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $hideMessage = false;

  $subject = "=?utf-8?B?".base64_encode("Message From $name")."?=";
  $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";


  if (empty($name) || empty($email) || empty($message)) {
    echo "<div class='alert-warning' style='display:block;'>Please fill in all fields.</div>";
  }
  elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "<div class='alert-warning' style='display:block;'>Please write a valid e-mail address!</div>";
  }
  else {
    echo mail("sergejs.ivcenko@inbox.lv", $subject, $message, $headers);
    echo "<div class='alert-success' style='display:block;'>
      <h3>Thank you!</h3>
      <p>Your message has been successfully sent.</p>
    </div>";
    $hideMessage = true;
  }
}
else {
  echo "<div class='alert-warning' style='display:block;'>There was a problem</div>";
}

 ?>

 <script type="text/javascript">
   var hideMessage = "<?php echo $hideMessage; ?>"
   if (hideMessage == true) {
     setTimeout(function () {
            $(".alert-success").css("display", "none");
          }, 3000);
          $("#form").trigger("reset");
   }
 </script>
