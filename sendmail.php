<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('en', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('GreenArrow4k@gmail.com', 'Quivivs');

$mail->addAddress('BlackArrow4k@gmail.com');

$mail->Subject = "Доброго дня!";

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>ПІБ:</strong> '.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
}

if(trim(!empty($_POST['message']))){
    $body.='<p><strong>ПІБ:</strong> '.$_POST['message'].'</p>';
}

$mail->Body = $body;

if(!$mail->send()){
    $message = 'Error';
} else{
    $message = 'Complited';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>