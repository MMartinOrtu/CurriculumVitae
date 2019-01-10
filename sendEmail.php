<?php
if(isset($_GET['submit'])) {

  // Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
  $email_to = "pomikelor@gmail.com";
  $email_subject = "Contacto desde el sitio web";

  // Aquí se deberían validar los datos ingresados por el usuario
  if(!isset($_GET['name']) ||
  !isset($_GET['email']) ||
  !isset($_GET['phone']) ||
  !isset($_GET['opcion-otros']) ||
  !isset($_PGE['message'])) {

  echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
  echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
  die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_GET['name'] . "\n";
$email_message .= "Apellido: " . $_GET['email'] . "\n";
$email_message .= "E-mail: " . $_GET['phone'] . "\n";
$email_message .= "Teléfono: " . $_GET['opcion-otros'] . "\n";
$email_message .= "Comentarios: " . $_GET['message'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
/* $headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion(); */
sendmail($email_to, $email_subject, $email_message);

echo "¡El formulario se ha enviado con éxito!";
}

function sendmail($to, $subject, $message) {
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
	$headers .= 'From: ' . . "\r\n";
	
	$result = mail($to,$subject,$message,$headers);
	
	if ($result) return 1;
	else return 0;
}
?>