<?php
if(isset($_POST['email'])) {

  // Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
  $email_to = "pomikelor@gmail.com";
  $email_subject = "Contacto desde el sitio web";

  // Aquí se deberían validar los datos ingresados por el usuario
  if(!isset($_POST['name']) ||
  !isset($_POST['email']) ||
  !isset($_POST['phone']) ||
  !isset($_POST['opcion-otros']) ||
  !isset($_POST['message'])) {

  echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
  echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
  die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['name'] . "\n";
$email_message .= "Apellido: " . $_POST['email'] . "\n";
$email_message .= "E-mail: " . $_POST['phone'] . "\n";
$email_message .= "Teléfono: " . $_POST['opcion-otros'] . "\n";
$email_message .= "Comentarios: " . $_POST['message'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

echo "¡El formulario se ha enviado con éxito!";
}
?>