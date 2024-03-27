
<?php
if (isset($_POST['email']) && !empty($_POST['email'])) {
$subject = "New contact request: $_POST['name']";
$message = $_POST['body'];
$headers = 'From: ali.madina01@gmail.com' . "\r\n" .
           'Reply-To: ' . $_POST['email']. "\r\n" .
           'X-Mailer: PHP/' . phpversion();

mail('ali.madina@gmail.com', $subject, $message, $headers);

die('Thank you for your email');
}