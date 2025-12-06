<?php
	if (empty($_POST['contact_name']) && strlen($_POST['contact_name']) == 0 || empty($_POST['form_phone']) && strlen($_POST['form_phone']) == 0 || empty($_POST['form_email']) && strlen($_POST['form_email']) == 0 || empty($_POST['form_message']) && strlen($_POST['form_message']) == 0)
	{
		return false;
	}
	
	$contact_name = $_POST['contact_name'];
	$form_phone = $_POST['form_phone'];
	$form_email = $_POST['form_email'];
	$form_message = $_POST['form_message'];
	
	// Create Message	
	$to = 'asher@asherblumenthal.com';
	$email_subject = "New Message From asherblumenthal.com";
	$email_body = "You've Got Mail! \n\nContact_Name: $contact_name \nForm_Phone: $form_phone \nForm_Email: $form_email \nForm_Message: $form_message \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: form@contact.asherblumenthal.com\r\n";
	$headers .= "Reply-To: $form_email";

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