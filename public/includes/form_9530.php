<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	require 'PHPMailer/Exception.php';
	require 'PHPMailer/PHPMailer.php';
	require 'PHPMailer/SMTP.php';

	if (empty($_POST['contact_name']) && strlen($_POST['contact_name']) == 0 || empty($_POST['form_phone']) && strlen($_POST['form_phone']) == 0 || empty($_POST['form_email']) && strlen($_POST['form_email']) == 0 || empty($_POST['form_message']) && strlen($_POST['form_message']) == 0)
	{
		return false;
	}
	
	$contact_name = $_POST['contact_name'];
	$form_phone = $_POST['form_phone'];
	$form_email = $_POST['form_email'];
	$form_message = $_POST['form_message'];

	/** SMTP Server Credentials **/
	$smtp_host = 'imap.mail.me.com';
	$smtp_username = 'asherblumenthal@icloud.com';
	$smtp_password = '';
	$smtp_port = '993';

	// Create Message	
	$to = 'asher@asherblumenthal.com';
	$replyTo = $form_email;
	$email_subject = "New Message From asherblumenthal.com";
	$email_body = "You've Got Mail! <br><br>Contact_Name: $contact_name <br>Form_Phone: $form_phone <br>Form_Email: $form_email <br>Form_Message: $form_message <br>";

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

		$mail->setFrom($smtp_username, 'public');
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
