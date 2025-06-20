<?php
	if (empty($_POST['name_24998_18923']) && strlen($_POST['name_24998_18923']) == 0 || empty($_POST['email_24998_18923']) && strlen($_POST['email_24998_18923']) == 0 || empty($_POST['message_24998_18923']) && strlen($_POST['message_24998_18923']) == 0)
	{
		return false;
	}
	
	$name_24998_18923 = $_POST['name_24998_18923'];
	$email_24998_18923 = $_POST['email_24998_18923'];
	$message_24998_18923 = $_POST['message_24998_18923'];
	
	// Create Message	
	$to = 'asherblumenthal@icloud.com';
	$email_subject = "New Contact Form Submission";
	$email_body = "Thank You For Reaching Out! We'll Get Back To You Soon \n\nName_24998_18923: $name_24998_18923 \nEmail_24998_18923: $email_24998_18923 \nMessage_24998_18923: $message_24998_18923 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: ash\r\n";
	$headers .= "Reply-To: $email_24998_18923";

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