<?php
// PHP hecho por Ciro Rivera
// Conexión compartida a MySQL
$DB_HOST = "db";
$DB_USUARIO = "azuu_user";
$DB_PASSWORD = "azuu_password";
$DB_NOMBRE = "azuu";

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $conexion = new mysqli($DB_HOST, $DB_USUARIO, $DB_PASSWORD, $DB_NOMBRE);
    $conexion->set_charset("utf8mb4");
} catch (mysqli_sql_exception $e) {
    http_response_code(500);
    exit("Error: no se pudo conectar a la base de datos.");
}
