<?

/**
*	Author: Jesse Jaeger
*	Date: Sept. 25, 2015
*	Contact Form Submit PHP
**/

$html = "<strong>Email: </strong>".$_GET['email']."<br />
		<strong>Reason: </strong>".$_GET['field_reason']."<br />
		<strong>Text: </strong>".$_GET['field_contact'];

$headers =  "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

mail("webmaster@quickorangefox.com","Website Contact Form Submission",$html,$headers);
echo "OK";
die();





?>