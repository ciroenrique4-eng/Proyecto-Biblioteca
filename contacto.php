<?php
// PHP hecho por Ciro Rivera
// Guarda un mensaje de contacto
require "conexion.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: contacto.html");
    exit;
}

$nombre = trim($_POST["nombre"] ?? "");
$email = trim($_POST["email"] ?? "");
$asunto = trim($_POST["asunto"] ?? "");
$mensaje = trim($_POST["mensaje"] ?? "");

if ($nombre === "" || $email === "" || $asunto === "" || $mensaje === "") {
    header("Location: contacto.html?estado=error&motivo=vacios");
    exit;
}

try {
    $sql = "INSERT INTO mensajes_contacto (nombre, email, asunto, mensaje) VALUES (?, ?, ?, ?)";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("ssss", $nombre, $email, $asunto, $mensaje);
    $stmt->execute();
    header("Location: contacto.html?estado=ok");
    exit;
} catch (mysqli_sql_exception $e) {
    header("Location: contacto.html?estado=error&motivo=servidor");
    exit;
}
