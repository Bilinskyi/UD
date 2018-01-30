<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
// require 'PHPMailer/src/SMTP.php';
$msg = '';
date_default_timezone_set('Etc/UTC');
$mail = new PHPMailer;

$mail->CharSet = 'UTF-8';
        //Server settings
    // $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    // $mail->isSMTP();                                      // Set mailer to use SMTP
    // $mail->Host = 'mail.ukraine.com.ua';  // Specify main and backup SMTP servers
    // $mail->SMTPAuth = true;                               // Enable SMTP authentication
    // $mail->Username = 'test@divclass.org';                 // SMTP username
    // $mail->Password = '';                           // SMTP password
    // $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    // $mail->Port = 25;                                    // TCP port to connect to


$mail->setFrom('test@divclass.org', 'First Last');
$mail->addAddress('1unitedcrew@gmail.com', 'Bilinskyi');
$mail->addAddress('sales@lpdiamond.com', 'Bilinskyi');

$mail->isHTML(true); 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$telegram = $_POST['telegram'];
$links = $_POST['links'];
$formname = $_POST['formname'];

$msg = '';
    if (array_key_exists('name', $_POST)) {
    $mail->Subject = 'Заявка UD';
    $mail->Body = "$name<br>$phone<br>$email<br>$telegram<br>$links<br>$formname";
    if (!$mail->send()) {
        $msg .= "Mailer Error: " . $mail->ErrorInfo;
    } else {
        $msg .= "Message sent!";
    }
}




?>
