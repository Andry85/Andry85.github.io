<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Feedback form</title>
<meta http-equiv="Refresh" content="4; URL=http://www.mediawolf.com.hk"> 
<style type="text/css">
	* {margin: 0; padding: 0; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; -webkit-font-smoothing: antialiased; word-wrap: break-word;}
		html, body {width:100%; height:100%;}
		table {border-collapse: collapse; width: 100%;}
		.clear {clear: both; height: 0; text-indent: -9000px; overflow: hidden;}
		img, table {border: none;}

	body {background: #fff; font-family: Arial, Helvetica, sans-serif;}
	.message {max-width: 50%; margin: 100px auto; border: 5px solid #ff9700; padding: 70px 35px; text-align: center; color: #94c067;}
	.message h2 {text-transform: uppercase; font-weight: bold; font-size: 36px; padding: 0 0 20px 0;}
	.message p {font-weight: bold; font-size: 22px;}
	.message.err {color: #ff9700;}
</style>
</head>
<body>

<?php 

$sendto   = "stan@prodiz.com"; // E-mail, which will come to an
$username = $_POST['name_row'];   // Stored in the variable data received from the field with the name of
$usertel = $_POST['telephone_row']; // Stored in the variable data received from the field with the phone number
$usermail = $_POST['email_row']; // Stored in the variable data received from the field with the email address
$usertextarea = $_POST['textarea_row']; // Stored in the variable data received from the field with the messege

// Formation of the message header
$subject  = "A new message";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Formation of the message body
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Message from the site: mediawolf.com.hk</h2>\r\n";
$msg .= "<p><strong>From whom:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Email address:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Phone number:</strong> ".$usertel."</p>\r\n";
$msg .= "<p><strong>Message:</strong> ".$usertextarea."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "<div class='message'>
			<h2>Thank you for contacting us.</h2>
			<p>You are very important to us, all information received will always remain confidential. We will contact you as soon as we review your message.</p>
		</div>";
} else {
	echo "<div class='message err'>
			<h2>Message Sending Failed.</h2>
			<p>Something went wrong, go back and try again!</p>
		</div>";
}


?>

</body>
</html>