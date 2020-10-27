<?php
require_once "../vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;

//PHPMailer Object
$mail = new PHPMailer;

//settings
$mail -> IsSMTP();
$mail -> SMTPDebug = 1;
$mail -> SMTPAuth = true;
$mail -> SMTPSecure = 'ssl';
$mail -> Host = 'smtp.gmail.com';
$mail -> Port = 465; // or 587

//gmail info
$mail -> Username = "nwankwo.claus@gmail.com";
$mail -> Password = "Heros94!";
$mail -> setFrom("nwankwo.claus@gmail.com");

//Send HTML or Plain Text email
$mail->isHTML(false);

//From email address and name
// $mail->From = "cnwankwo@softingines.com";
// $mail->FromName = "softingines company";

//To address and name
$mail->addAddress("nwankwo.claus@gmail.com", "Nstandev");
// $mail->addAddress("recepient1@example.com"); //Recipient name is optional

//Address to which recipient will reply
$mail->addReplyTo("cnwankwo@softingines.com", "Reply");

//CC and BCC
// $mail->addCC("cc@example.com");
// $mail->addBCC("bcc@example.com");



// $mail->Subject = "Subject Text";
// $mail->Body = "<i>Mail body in HTML</i>";
// $mail->AltBody = "This is the plain text version of the email content";

if ( isset($_POST['message']) && isset($_POST['email']) && isset($_POST['name']) ){
		$message = $_POST['message'];
		// $to = "nwankwo.chibike@yahoo.com";
		// $from = "nwankwo.claus@gmail.com";

		$mail->Subject = $_POST['subject'];
		$mail->Body = $_POST['message'];
		$mail->AltBody = "This is the plain text version of the email content";	
	}

if(!$mail->send()) 
{
    echo "Mailer Errorrrr: " . $mail->ErrorInfo . " " . $_POST['name'];
} 
else 
{
    echo "Message has been sent successfully";
}

	// $subject = "Mail from website";
	// $to = "";
	// $from = "";
	// $headers = "From: $from \r\n";
	// $message = "";

	// if ( isset($_POST['mail']) && isset($_POST['email']) && isset($_POST['name']) ){
	// 	$message = $_POST['mail'];
	// 	$to = "cnwankwo@softingines.com";
	// 	$from = "info@softingines.com";

	// 	echo "string";
		
	
	// }

	// if (!mail($to, $subject, $message, $headers)){
	// 		echo "$message";
	// }

	
?>