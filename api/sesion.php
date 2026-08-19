<?php
// PHP hecho por Ciro Rivera
// Indica si hay una sesión iniciada (lo usa el indicador del menú en js/header.js)
session_start();
header("Content-Type: application/json; charset=utf-8");

if (isset($_SESSION["usuario_id"])) {
    echo json_encode([
        "logueado" => true,
        "usuario" => $_SESSION["usuario"] ?? "",
        "nombre" => $_SESSION["nombre"] ?? "",
    ]);
} else {
    echo json_encode(["logueado" => false]);
}
