-- ============================================================
--  Base de datos de la Biblioteca Digital AZUU
--  SQL hecho por Diego Alexander Ramirez Rogdriguez
--
--  Cómo usar:
--    1. Entrar a phpMyAdmin (http://localhost:8082).
--    2. Seleccionar la base de datos "azuu" (ya la crea Docker).
--    3. Pestaña "Importar" -> elegir este archivo -> "Continuar".
-- ============================================================

USE azuu;

-- ------------------------------------------------------------
--  Cuentas de usuario (crear_cuenta.html / login.html)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS usuarios (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    nombre          VARCHAR(120)  NOT NULL,
    email           VARCHAR(180)  NOT NULL UNIQUE,
    usuario         VARCHAR(60)   NOT NULL UNIQUE,
    password        VARCHAR(255)  NOT NULL,
    fecha_registro  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ------------------------------------------------------------
--  Mensajes del formulario de contacto (contacto.html)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS mensajes_contacto (
    id        INT AUTO_INCREMENT PRIMARY KEY,
    nombre    VARCHAR(120)  NOT NULL,
    email     VARCHAR(180)  NOT NULL,
    asunto    VARCHAR(200)  NOT NULL,
    mensaje   TEXT          NOT NULL,
    fecha     TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ------------------------------------------------------------
--  Reseñas de libros (resenas.html)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS resenas (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    titulo        VARCHAR(200)  NOT NULL,
    autor         VARCHAR(160)  NOT NULL,
    calificacion  TINYINT       NOT NULL,
    texto         TEXT          NOT NULL,
    fecha         TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ------------------------------------------------------------
--  "Mi lista": libros guardados por cada usuario (libro.html)
--  libro_id = índice del libro en el arreglo de js/libros.js
--  La clave única evita que un usuario guarde el mismo libro 2 veces.
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS lista_usuario (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id  INT       NOT NULL,
    libro_id    INT       NOT NULL,
    fecha       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_usuario_libro (usuario_id, libro_id),
    CONSTRAINT fk_lista_usuario
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
