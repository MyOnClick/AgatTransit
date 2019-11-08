<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['Name'];
$phone = $_POST['user_phone'];
$phone2 = $_POST['user_phone2'];
$email = $_POST['Email'];
$text = $_POST['user_text'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'forma_2016@bk.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'OA4Y_1scyiGo'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('forma_2016@bk.ru'); // от кого будет уходить письмо?
$mail->addAddress('inchood@yandex.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с формы';
$mail->Body    = 'Оставил заявку:  ' .$name . ' <br> Его телефон:  ' .$phone. "<br>" .$phone2;
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>