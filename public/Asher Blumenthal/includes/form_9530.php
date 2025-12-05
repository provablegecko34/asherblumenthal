<?php
	if (empty($_POST['name_24998_1795_9530']) && strlen($_POST['name_24998_1795_9530']) == 0 || empty($_POST['email_24998_1795_9530']) && strlen($_POST['email_24998_1795_9530']) == 0 || empty($_POST['message_24998_1795_9530']) && strlen($_POST['message_24998_1795_9530']) == 0)
	{
		return false;
	}
	
	$name_24998_1795_9530 = $_POST['name_24998_1795_9530'];
	$email_24998_1795_9530 = $_POST['email_24998_1795_9530'];
	$message_24998_1795_9530 = $_POST['message_24998_1795_9530'];
	
	// Create Message	
	$to = 'asherblumenthal@icloud.com';
	$email_subject = "New Message From asherblumenthal.com";
	$email_body = "You've Got Mail! \n\nName_24998_1795_9530: $name_24998_1795_9530 \nEmail_24998_1795_9530: $email_24998_1795_9530 \nMessage_24998_1795_9530: $message_24998_1795_9530 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: mail@asherblumenthal.com\r\n";
	$headers .= "Reply-To: $email_24998_1795_9530";

	// Post Message
	if (function_exists('mail'))
	{
		$result = mail($to,$email_subject,$email_body,$headers);
	}
	else // Mail() Disabled
	{
		$error = array("message" => "The php mail() function is not available on this server.");
	    header('Content-Type: application/json');
	    http_response_code(500);
	    echo json_encode($error);
	}	
?>