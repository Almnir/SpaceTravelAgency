<?php

if(empty($_POST['name'])  		||
   empty($_POST['phone']) 		||
   empty($_POST['email']) 		||
   empty($_POST['address']) 	||
   empty($_POST['tourtype']) 	||
   empty($_POST['comments'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = $_POST['name'];
$phone = $_POST['phone'];
$email_address = $_POST['email'];
$address = $_POST['address'];
$tourtype = $_POST['tourtype'];
$comments = $_POST['comments'];
	
// 
$to = "gfghg@example.com"; 
$email_subject = "Заявку на тур оставил:  $name";
$email_body = "Зявка на тур.\n\n"."Подробнее:\n\nИмя: $name\n\nEmail: $email_address\n\nТелефон: $phone\n\nАдрес: $address\n\nТип тура: $tourtype\n\nКоментарий:\n$comments";
$headers = "From: me@example.com\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>