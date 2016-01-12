<?php
 // These lines assign data from right to left into variables
 // the $_GET[] array of data is set up by the server as it reads the URL
$from_email = $_GET['email'];
$subject    = $_GET['subject'];
$name       = $_GET['name'];
$message    = $_GET['message'];
$to_email   = "dmik3d@gmail.com"; /* This part is hidden from the sender and
                                      more importantly from spam "spiders". You
                                      should change this to your email address. */
                                    
/* This part just makes the email a bit more conventional, it's not essential. */
$headers = "From: $name\r\n" .
           "Reply-To: $from_email\r\n" .
           "X-Mailer: PHP/" . phpversion();

mail($to_email, $subject, $message, $headers);

print("<html><body><h1>Thank you for sending us email!</h1></body></html>");

?>