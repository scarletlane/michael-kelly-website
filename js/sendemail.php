<?php
//if "email" is filled out, then send email
if (isset($_POST['email']))
  {
  $email = $_POST['email']; // sender
  $text = $_POST['text'];
  // text lines should not exceed 70 characters (PHP rule), so wrap it
  $text = wordwrap($text, 70);
  mail("mikekellymusic@gmail.com", "Contact", $text, "From: $email");
  echo "Thank you for sending us feedback";
  }
else
  {
  echo "Please enter your email address to send message.";
  }
?>