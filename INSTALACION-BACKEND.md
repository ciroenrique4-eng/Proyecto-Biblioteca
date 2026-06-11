# Backend PHP + MySQL de AZUU

Guía rápida para dejar funcionando los formularios y "Mi lista".

1. Abrir phpMyAdmin: `http://localhost:8082`.
2. Seleccionar la base de datos **`azuu`** (ya la crea el `docker-compose.yml`).
3. Pestaña **Importar** → elegir el archivo **`azuu.sql`** → **Continuar**.

Esto crea 4 tablas: `usuarios`, `mensajes_contacto`, `resenas` y `lista_usuario`.

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

