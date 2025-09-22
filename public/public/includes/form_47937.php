<?php
	if (empty($_POST['name_24998_47937']) && strlen($_POST['name_24998_47937']) == 0 || empty($_POST['email_24998_47937']) && strlen($_POST['email_24998_47937']) == 0 || empty($_POST['message_24998_47937']) && strlen($_POST['message_24998_47937']) == 0)
	{
		return false;
	}
	
	$name_24998_47937 = $_POST['name_24998_47937'];
	$email_24998_47937 = $_POST['email_24998_47937'];
	$message_24998_47937 = $_POST['message_24998_47937'];
	
	// Create Message	
	$to = 'asherblumenthal@icloud.com';
	$email_subject = "Message from asherblumenthal.com";
	$email_body = "You have received a new message! \n\nName_24998_47937: $name_24998_47937 \nEmail_24998_47937: $email_24998_47937 \nMessage_24998_47937: $message_24998_47937 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: messaget@asherblumenthal.com\r\n";
	$headers .= "Reply-To: $email_24998_47937";

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