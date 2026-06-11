// JS hecho por Ciro Rivera y Gustavo Tapia ortiz
// Pinta la lista del usuario logueado
document.addEventListener("DOMContentLoaded", () => {
    const galeria = document.getElementById("lista-galeria");
    const aviso = document.getElementById("lista-aviso");
    if (!galeria) return;

    fetch("mi_lista_datos.php")
        .then(respuesta => respuesta.json())
        .then(datos => {
            if (!datos.logueado) {
                aviso.textContent = "Inicia sesión para ver y guardar tu lista de lectura.";
                return;
            }

            if (!datos.libros.length) {
                aviso.textContent = "Tu lista está vacía. Agrega libros desde la página de cada libro.";
                return;
            }

            aviso.textContent = "";
            datos.libros.forEach(id => {
                const libro = libros[id];
                if (!libro) return;
                galeria.appendChild(crearTarjeta(id, libro));
            });
        })
        .catch(() => {
            aviso.textContent = "No se pudo cargar tu lista. Intenta de nuevo más tarde.";
        });
});

// Construye la tarjeta de un libro
function crearTarjeta(id, libro) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    const enlace = document.createElement("a");
    enlace.href = "libro.html?id=" + id;

    const img = document.createElement("img");
    img.src = libro.portada;
    img.alt = "Portada de " + libro.titulo;

    const nombre = document.createElement("p");
    nombre.textContent = libro.titulo;

    enlace.appendChild(img);
    tarjeta.appendChild(enlace);
    tarjeta.appendChild(nombre);
    return tarjeta;
}
