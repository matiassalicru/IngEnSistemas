<?php
    //Almacena los contenidos de los Campos
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    //Datos para enviar
    $mailTo = "mattiassalicru@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "Recibiste un correo de ".$name. ".\n\n". "El mensaje es el siguiente: ".$message;

    //Enviar el mensaje
    mail($mailTo, $headers, $txt);
    header("Location: index.html");
    
?>
