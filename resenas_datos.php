<?php
// PHP hecho por Ciro Rivera
// Devuelve todas las reseñas en JSON (las más recientes primero)
require "conexion.php";
header("Content-Type: application/json; charset=utf-8");

$resenas = [];
try {
    $resultado = $conexion->query(
        "SELECT titulo, autor, calificacion, texto FROM resenas ORDER BY fecha DESC"
    );
    while ($fila = $resultado->fetch_assoc()) {
        $resenas[] = [
            "titulo" => $fila["titulo"],
            "autor" => $fila["autor"],
            "calificacion" => (int)$fila["calificacion"],
            "texto" => $fila["texto"],
        ];
    }
} catch (mysqli_sql_exception $e) {
    // Ante un fallo devolvemos una lista vacía: la página seguirá mostrando las reseñas de ejemplo.
}

echo json_encode($resenas);
