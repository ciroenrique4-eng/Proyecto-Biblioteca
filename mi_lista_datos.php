<?php
// PHP hecho por gustavo tapia ortiz
// Devuelve la lista del usuario en JSON
session_start();
require "conexion.php";
header("Content-Type: application/json; charset=utf-8");

if (!isset($_SESSION["usuario_id"])) {
    echo json_encode(["logueado" => false, "libros" => []]);
    exit;
}

$usuarioId = (int)$_SESSION["usuario_id"];

$sql = "SELECT libro_id FROM lista_usuario WHERE usuario_id = ? ORDER BY fecha DESC";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("i", $usuarioId);
$stmt->execute();
$resultado = $stmt->get_result();

$libros = [];
while ($fila = $resultado->fetch_assoc()) {
    $libros[] = (int)$fila["libro_id"];
}

echo json_encode([
    "logueado" => true,
    "usuario" => $_SESSION["usuario"] ?? "",
    "libros" => $libros,
]);
