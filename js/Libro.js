//Archivo Js realizado por Diego Alexander Ramirez Rodriguez.

// funcion cargar libro modificado por Gustavo tapia y luz castellanos
function cargarLibro() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id")) || 0;
    const libro = libros[id];

    document.getElementById("titulo").textContent = libro.titulo;
    document.getElementById("portada").src = libro.portada;
    document.getElementById("portada").alt = "Portada de " + libro.titulo;

    document.getElementById("metadata").innerHTML = `
        <dt>Autor:</dt><dd>${libro.autor}</dd>
        <dt>Editorial:</dt><dd>${libro.editorial}</dd>
        <dt>Año de publicación:</dt><dd>${libro.anio}</dd>
        <dt>ISBN:</dt><dd>${libro.isbn}</dd>
    `;

    document.getElementById("descripcion").textContent = libro.descripcion;

    const btnLeer = document.getElementById("btn-leer");
    if (libro.archivo) {
        btnLeer.textContent = "Leer ahora";
        btnLeer.disabled = false;
        btnLeer.onclick = () => window.open(libro.archivo, "_blank");
    } else {
        btnLeer.textContent = "Archivo no disponible";
        btnLeer.disabled = true;
        btnLeer.style.opacity = "0.5";
        btnLeer.style.cursor = "not-allowed";
    }
    configurarBotonLista(id);
}

// Botón agregar/quitar de mi lista
function configurarBotonLista(libroId) {
    const btn = document.getElementById("btn-lista");
    if (!btn) return;
    fetch("/api/mi_lista_datos.php")
        .then(respuesta => respuesta.json())
        .then(datos => {
            if (!datos.logueado) {
                btn.textContent = "Inicia sesión para guardar";
                btn.onclick = () => (window.location.href = "login.html");
                return;
            }

            let enlistado = datos.libros.includes(libroId);
            pintarBotonLista(btn, enlistado);

            btn.onclick = () => {
                btn.disabled = true;
                const cuerpo = new URLSearchParams({ libro_id: libroId, accion: "alternar" });
                fetch("/api/mi_lista_accion.php", { method: "POST", body: cuerpo })
                    .then(respuesta => respuesta.json())
                    .then(resultado => {
                        if (resultado.ok) {
                            enlistado = resultado.enlistado;
                            pintarBotonLista(btn, enlistado);
                        }
                    })
                    .finally(() => (btn.disabled = false));
            };
        })
        .catch(() => {
            btn.textContent = "Mi lista no disponible";
            btn.disabled = true;
        });
}

// Actualiza el botón de la lista
function pintarBotonLista(btn, enlistado) {
    btn.textContent = enlistado ? "Quitar de mi lista" : "Agregar a mi lista";
    btn.classList.toggle("en-lista", enlistado);
}

window.onload = cargarLibro;
