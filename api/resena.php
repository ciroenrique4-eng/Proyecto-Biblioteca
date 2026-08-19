<?php
// PHP hecho por Ciro Rivera
// Guarda una reseña
session_start();
require "conexion.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: /resenas.html");
    exit;
}

// Solo los usuarios con sesión iniciada pueden publicar reseñas.
if (!isset($_SESSION["usuario_id"])) {
    header("Location: /resenas.html?estado=error&motivo=sesion");
    exit;
}

$titulo = trim($_POST["titulo"] ?? "");
$autor = trim($_POST["autor"] ?? "");
$calificacion = (int)($_POST["calificacion"] ?? 0);
$texto = trim($_POST["texto"] ?? "");

if ($titulo === "" || $autor === "" || $texto === "" || $calificacion < 1 || $calificacion > 5) {
    header("Location: /resenas.html?estado=error&motivo=vacios");
    exit;
}

try {
    $sql = "INSERT INTO resenas (titulo, autor, calificacion, texto) VALUES (?, ?, ?, ?)";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("ssis", $titulo, $autor, $calificacion, $texto);
    $stmt->execute();
    header("Location: /resenas.html?estado=ok");
    exit;
} catch (mysqli_sql_exception $e) {
    header("Location: /resenas.html?estado=error&motivo=servidor");
    exit;
}
