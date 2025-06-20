<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	require 'PHPMailer/Exception.php';
	require 'PHPMailer/PHPMailer.php';
	require 'PHPMailer/SMTP.php';

	if (empty($_POST['name_24998_26293']) && strlen($_POST['name_24998_26293']) == 0 || empty($_POST['email_24998_26293']) && strlen($_POST['email_24998_26293']) == 0 || empty($_POST['message_24998_26293']) && strlen($_POST['message_24998_26293']) == 0)
	{
		return false;
	}
	
	$name_24998_26293 = $_POST['name_24998_26293'];
	$email_24998_26293 = $_POST['email_24998_26293'];
	$message_24998_26293 = $_POST['message_24998_26293'];

	/** SMTP Server Credentials **/
	$smtp_host = 'smtp.mail.me.com';
	$smtp_username = 'asherblumenthal@icloud.com';
	$smtp_password = 'hjck-mwgw-noep-ujsf';
	$smtp_port = '587';

	// Create Message	
	$to = 'asherblumenthal@icloud.com';
	$replyTo = $email_24998_26293;
	$email_subject = "New Contact Form Submission";
	$email_body = "You have received a new message. <br><br>Name_24998_26293: $name_24998_26293 <br>Email_24998_26293: $email_24998_26293 <br>Message_24998_26293: $message_24998_26293 <br>";

	$mail = new PHPMailer(true);

	try {
		$mail->isSMTP();
		$mail->CharSet = 'utf-8';
		$mail->Host = $smtp_host;
		$mail->SMTPAuth = true;
		$mail->Username = $smtp_username;
		$mail->Password = $smtp_password;
		$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; /** or PHPMailer::ENCRYPTION_SMTPS for SSL **/
		$mail->Port = $smtp_port;

		$mail->setFrom($smtp_username, 'Blocs Website');
		$mail->addAddress($to);
    	$mail->addReplyTo($replyTo, 'Reply To');

		$mail->isHTML(true);
		$mail->Subject = $email_subject;
		$mail->Body = $email_body;

		$mail->send();
		exit;
	}
	catch (Exception $e)
	{
		$error = array("message" => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
		header('Content-Type: application/json');
		http_response_code(500);
		echo json_encode($error);
	}
?>
