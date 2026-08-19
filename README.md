# Biblioteca Digital AZUU

> Sitio web de biblioteca digital desarrollado como proyecto para la materia de **Diseño y Elaboración de Sitios Web**.

---

## Descripción

Azuu es un sitio web que permite a los usuarios explorar, buscar y acceder a libros y recursos digitales de forma sencilla e intuitiva. El proyecto tiene como objetivo aplicar los fundamentos del diseño y desarrollo enseñados por la profa florencia

---

## Objetivos del Proyecto

- Diseñar una interfaz web atractiva y fácil de usar.
- Queremos que se note nuestro progeso el hacer paginas web.
- Deseamos que los libros sean accesibles para todos!

---

## Tecnologías Utilizadas

| Tecnología | Uso                     |
| ---------- | ----------------------- |
| HTML5      | Estructura del sitio    |
| CSS3       | Estilos y diseño visual |
| JavaScript | Interactividad          |
| Git        | Control de versiones    |
| GitHub     | Repositorio remoto      |

---

## Estructura del Proyecto

```
.
├── *.html              Páginas del sitio (son las URLs públicas: /index.html, /explorar.html…)
├── api/                Backend PHP — endpoints y conexión a MySQL
├── db/azuu.sql         Esquema y datos de la base
├── js/                 Scripts del sitio
├── styles/             Hojas de estilo
├── Recursos/
│   ├── portadas/       Tapas de los libros del catálogo
│   ├── banners/        Imágenes del carrusel de portada
│   ├── ui/             Logo/favicon y avatar de perfil
│   └── Libros/         Archivos descargables (epub)
└── check_enlaces.py    Verifica que no haya enlaces ni imágenes rotas
```

Los `.html` viven en la raíz a propósito: mover uno cambiaría su URL y rompería
`sitemap.xml`, `robots.txt` y los enlaces ya publicados.

## Autores

- **Ciro Enrique Rivera López**
- **Gustavo Tapia Oriz**
- **Luz Lisanya Castellanos Musitos**
- **Diego Alexander Ramirez Rodriguez**

Materia: Diseño y Elaboración de Sitios Web
