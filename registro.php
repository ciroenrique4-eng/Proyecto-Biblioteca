<?php
// PHP hecho por Ciro Rivera
// Guarda una cuenta nueva
require "conexion.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: crear_cuenta.html");
    exit;
}

$nombre = trim($_POST["nombre"] ?? "");
$email = trim($_POST["email"] ?? "");
$usuario = trim($_POST["usuario"] ?? "");
$password = $_POST["password"] ?? "";
$confirmar = $_POST["confirmar_password"] ?? "";

if ($nombre === "" || $email === "" || $usuario === "" || $password === "") {
    header("Location: crear_cuenta.html?estado=error&motivo=vacios");
    exit;
}

if ($password !== $confirmar) {
    header("Location: crear_cuenta.html?estado=error&motivo=password");
    exit;
}

try {
    $sql = "INSERT INTO usuarios (nombre, email, usuario, password) VALUES (?, ?, ?, ?)";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("ssss", $nombre, $email, $usuario, $password);
    $stmt->execute();
    header("Location: crear_cuenta.html?estado=ok");
    exit;
} catch (mysqli_sql_exception $e) {
    if ($e->getCode() === 1062) {
        header("Location: crear_cuenta.html?estado=error&motivo=existe");
    } else {
        header("Location: crear_cuenta.html?estado=error&motivo=servidor");
    }
    exit;
}
