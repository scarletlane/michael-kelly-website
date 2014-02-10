<?php
header('Refresh: 5; URL=http://www.officialmichaelkelly.com');
//if "email" is filled out, then send email
if (isset($_POST['email']))
  {
  $email = $_POST['email']; // sender
  $text = $_POST['text'];
  // text lines should not exceed 70 characters (PHP rule), so wrap it
  $text = wordwrap($text, 70);
  mail("mikekellymusic@gmail.com", "Message from officialmichaelkelly.com", $text, "From: $email");
  echo "Thanks for messaging me.  I'll get back to you as soon as possible. -MK";
  }
else
  {
  echo "Please enter your email address to send message.";
  } 
?>