<?php
// PHP hecho por LUZ CASTELLANOS MUSITO
// Cierra la sesión
session_start();
$_SESSION = [];
session_destroy();
header("Location: /index.html?estado=sesion_cerrada");
exit;
