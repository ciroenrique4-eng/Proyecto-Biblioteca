// JS hecho por Ciro Rivera
// Carga las reseñas guardadas en la base de datos y controla el acceso al formulario.
document.addEventListener("DOMContentLoaded", () => {
    cargarResenas();
    controlarFormulario();
});

// Trae las reseñas del servidor y las muestra al inicio de la cuadrícula.
function cargarResenas() {
    const grid = document.querySelector(".reseñas-grid");
    if (!grid) return;

    fetch("/api/resenas_datos.php")
        .then(respuesta => respuesta.json())
        .then(resenas => {
            // Se insertan al principio (antes de las de ejemplo) dejando la más reciente arriba.
            resenas
                .slice()
                .reverse()
                .forEach(resena => grid.prepend(crearTarjeta(resena)));
        })
        .catch(() => {});
}

// Construye una tarjeta con el mismo formato que las reseñas de ejemplo.
function crearTarjeta(resena) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "review-card";

    const titulo = document.createElement("h3");
    titulo.textContent = resena.titulo;

    const autor = document.createElement("div");
    autor.className = "review-author";
    autor.textContent = "Autor: " + resena.autor;

    const estrellas = document.createElement("div");
    estrellas.className = "rating";
    const n = Math.max(1, Math.min(5, resena.calificacion));
    estrellas.textContent = "★".repeat(n) + "☆".repeat(5 - n);

    const texto = document.createElement("p");
    texto.textContent = resena.texto;

    tarjeta.append(titulo, autor, estrellas, texto);
    return tarjeta;
}

// Si no hay sesión iniciada, oculta el formulario y muestra un aviso para iniciar sesión.
function controlarFormulario() {
    const seccion = document.querySelector(".formulario-reseña");
    if (!seccion) return;

    fetch("/api/sesion.php")
        .then(respuesta => respuesta.json())
        .then(datos => {
            if (datos.logueado) return;

            const form = seccion.querySelector("form");
            if (form) form.remove();

            const aviso = document.createElement("p");
            aviso.innerHTML = 'Debes <a href="login.html">iniciar sesión</a> para escribir una reseña.';
            seccion.appendChild(aviso);
        })
        .catch(() => {});
}
