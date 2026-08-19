<?php
// PHP hecho por GUSTAVO TAPIA ORTIZ
// Agrega o quita un libro de la lista
session_start();
require "conexion.php";
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["ok" => false, "motivo" => "metodo"]);
    exit;
}

if (!isset($_SESSION["usuario_id"])) {
    http_response_code(401);
    echo json_encode(["ok" => false, "logueado" => false]);
    exit;
}

$usuarioId = (int)$_SESSION["usuario_id"];
$libroId = isset($_POST["libro_id"]) ? (int)$_POST["libro_id"] : -1;
$accion = $_POST["accion"] ?? "alternar";

if ($libroId < 0) {
    http_response_code(400);
    echo json_encode(["ok" => false, "motivo" => "libro_invalido"]);
    exit;
}

$sql = "SELECT id FROM lista_usuario WHERE usuario_id = ? AND libro_id = ? LIMIT 1";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("ii", $usuarioId, $libroId);
$stmt->execute();
$yaEsta = $stmt->get_result()->fetch_assoc() !== null;

if ($accion === "alternar") {
    $accion = $yaEsta ? "quitar" : "agregar";
}

if ($accion === "quitar") {
    $sql = "DELETE FROM lista_usuario WHERE usuario_id = ? AND libro_id = ?";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("ii", $usuarioId, $libroId);
    $stmt->execute();
    echo json_encode(["ok" => true, "enlistado" => false]);
    exit;
}

$sql = "INSERT IGNORE INTO lista_usuario (usuario_id, libro_id) VALUES (?, ?)";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("ii", $usuarioId, $libroId);
$stmt->execute();
echo json_encode(["ok" => true, "enlistado" => true]);
