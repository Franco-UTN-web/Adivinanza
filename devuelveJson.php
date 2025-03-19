<?php

require_once __DIR__ . "/devuelveResultadoNoJson.php";

function devuelveJson($resultado)
{
    $json = json_encode($resultado);

    if ($json === false) {
        // Obtener el error de json_encode
        $error = json_last_error_msg();
        // Podrías registrar el error en un log o manejarlo de alguna forma más informativa
        devuelveResultadoNoJson();
    } else {
        http_response_code(200);
        header("Content-Type: application/json");
        echo $json;
    }
}
