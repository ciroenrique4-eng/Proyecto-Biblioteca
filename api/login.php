<?php
// PHP hecho por Gustavo Tapia Ortiz
// Verifica credenciales e inicia sesión
session_start();
require "conexion.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: /login.html");
    exit;
}

$identificador = trim($_POST["usuario"] ?? "");
$password = $_POST["password"] ?? "";

if ($identificador === "" || $password === "") {
    header("Location: /login.html?estado=error&motivo=vacios");
    exit;
}

$sql = "SELECT id, nombre, usuario, password FROM usuarios WHERE usuario = ? OR email = ? LIMIT 1";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("ss", $identificador, $identificador);
$stmt->execute();
$fila = $stmt->get_result()->fetch_assoc();

if ($fila && password_verify($password, $fila["password"])) {
    $_SESSION["usuario_id"] = $fila["id"];
    $_SESSION["usuario"] = $fila["usuario"];
    $_SESSION["nombre"] = $fila["nombre"];
    header("Location: /index.html?estado=bienvenido");
    exit;
}

header("Location: /login.html?estado=error&motivo=credenciales");
exit;
