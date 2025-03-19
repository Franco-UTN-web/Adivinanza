<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("HTTP/1.1 405 Method Not Allowed");
    exit(json_encode(["error" => "Método no permitido. Usa POST."]));
}

require_once __DIR__ . "/../lib/php/recuperaTexto.php";
require_once __DIR__ . "/../lib/php/devuelveJson.php";

$respuestaUsuario = recuperaTexto("respuesta");

// Validar que se recibió una respuesta
if (empty($respuestaUsuario)) {  // Usamos empty() para verificar valores vacíos
    devuelveJson(["resultado" => "Error: No se recibió ninguna respuesta válida."]);
    exit;
}

$adivinanzaCorrecta = "esponja"; // Respuesta correcta

// Se asegura de que la respuesta esté en minúsculas y sin espacios
$respuestaUsuario = recuperaTexto("respuesta");
if ($respuestaUsuario === $adivinanzaCorrecta) {
    $resultado = "¡Correcto! La respuesta es esponja.";
} else {
    $resultado = "Incorrecto. La respuesta correcta es esponja.";
}

devuelveJson(["resultado" => $resultado]);
