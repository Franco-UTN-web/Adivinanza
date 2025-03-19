<?php

require_once __DIR__ . "/INTERNAL_SERVER_ERROR.php";

function devuelveResultadoNoJson()
{
    http_response_code(INTERNAL_SERVER_ERROR);
    header("Content-Type: application/problem+json");

    $errorResponse = [
        "title" => "El resultado no puede representarse como JSON.",
        "type"  => "/error/resultadonojson.html"
    ];

    echo json_encode($errorResponse);
}
