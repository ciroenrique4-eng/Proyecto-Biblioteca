# Backend PHP + MySQL de AZUU

Guía rápida para dejar funcionando los formularios y "Mi lista".

## 1. Importar la base de datos

1. Abre phpMyAdmin: `http://localhost:8082`.
2. Selecciona la base de datos **`azuu`** (ya la crea el `docker-compose.yml`).
3. Pestaña **Importar** → elige el archivo **`azuu.sql`** → **Continuar**.

Esto crea 4 tablas: `usuarios`, `mensajes_contacto`, `resenas` y `lista_usuario`.

## 2. Requisito del contenedor PHP: extensión `mysqli`

Los `.php` usan **mysqli**, que **no viene** en la imagen oficial de PHP por defecto.
Asegúrate de que tu `php/Dockerfile` la instale. Debe contener una línea como:

```dockerfile
RUN docker-php-ext-install mysqli
```

Si no está, agrégala y reconstruye:

```bash
docker compose build php
docker compose up -d
```

Para verificar que la extensión está activa, dentro del contenedor:

```bash
docker exec azuu-php php -m | grep mysqli
```

## 3. Cómo se conectan las piezas

- **`conexion.php`** — conexión compartida (host `db`, usuario `azuu_user`). Si cambias
  las credenciales en `docker-compose.yml`, cámbialas también aquí.
- **Formularios** (`crear_cuenta`, `login`, `contacto`, `resenas`) envían por POST a su
  `.php` correspondiente, que guarda en la BD y redirige de vuelta con `?estado=...`.
  `js/formularios.js` lee ese parámetro y muestra el aviso de éxito/error.
- **Login** inicia sesión PHP (`$_SESSION`). El usuario queda identificado mientras dure
  la sesión (cookie). `logout.php` la cierra.
- **Mi lista**: en `libro.html` el botón "Agregar/Quitar de mi lista" llama por `fetch` a
  `mi_lista_accion.php`, que guarda el `libro_id` (el índice del libro en `js/libros.js`)
  en la tabla `lista_usuario`. `mi_lista.html` pide los libros del usuario a
  `mi_lista_datos.php` y los pinta.

## Nota de seguridad

Las contraseñas se guardan en **texto plano** (decisión del proyecto escolar para poder
verlas en phpMyAdmin). En un sitio real deberían cifrarse con `password_hash()` /
`password_verify()`. El cambio son pocas líneas en `registro.php` y `login.php`.
