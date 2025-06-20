<?php
	if (empty($_POST['name_24998_26293']) && strlen($_POST['name_24998_26293']) == 0 || empty($_POST['email_24998_26293']) && strlen($_POST['email_24998_26293']) == 0 || empty($_POST['message_24998_26293']) && strlen($_POST['message_24998_26293']) == 0)
	{
		return false;
	}
	
	$name_24998_26293 = $_POST['name_24998_26293'];
	$email_24998_26293 = $_POST['email_24998_26293'];
	$message_24998_26293 = $_POST['message_24998_26293'];
	
	// Create Message	
	$to = 'asherblumenthal@icloud.com';
	$email_subject = "New Contact Form Submission";
	$email_body = "You have received a new message. \n\nName_24998_26293: $name_24998_26293 \nEmail_24998_26293: $email_24998_26293 \nMessage_24998_26293: $message_24998_26293 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: asherblumenthal@icloud.com\r\n";
	$headers .= "Reply-To: $email_24998_26293";

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