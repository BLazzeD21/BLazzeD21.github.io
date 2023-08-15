<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->SMTPDebug = 3;

$mail->isSMTP();
$mail->Host = ''; // Specify main and backup SMTP servers. For example: smtp.gmail.com for google 
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = ''; // Email login
$mail->Password = ''; // Email password
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;// TCP port
 
$mail->setFrom('', 'RunSmart'); // mail from which letters will be sent
$mail->addAddress(''); // Mail to which letters will be sent
$mail->isHTML(true);

$mail->Subject = 'Данные';
$mail->Body = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>