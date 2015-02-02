<?php
	$email = htmlspecialchars($_POST["email"]);
	$name = htmlspecialchars($_POST["name"]);
	$message = htmlspecialchars($_POST["message"]);

	echo "Email: " . $email . 
		 "\nName: " . $name . 
		 "\nMessage: " . $message;
	

?>