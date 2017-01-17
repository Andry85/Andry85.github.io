<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Створення форми зворотного зв'язку</title>
<meta http-equiv="Refresh" content="4; URL=http://www.exist.ua/"> 
</head>
<body>

<?php 

$sendto   = "htmlverstka.biz@gmail.com"; // почта, на которую будет приходить письмо
$username = $_POST['name'];   // сохраняем в переменную данные полученные из поля c именем
$usertel = $_POST['phone']; // сохраняем в переменную данные полученные из поля c телефонным номером
$usermail = $_POST['email']; // сохраняем в переменную данные полученные из поля c адресом электронной почты

// Формирование заголовка письма
$subject  = "A new message";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Повідомлень з сайту exist.ua</h2>\r\n";
$msg .= "<p><strong>Від кого:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Пошта:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "<center><img src='img/spasibo.png'></center>";
} else {
	echo "<center><img src='img/ne-otpravleno.png'></center>";
}

?>

</body>
</html>