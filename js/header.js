// JavaScript del encabezado por Ciro E. Rivera
// En pantallas pequeñas muestra u oculta el cuadro de búsqueda al pulsar la lupa.
// Al presionar Enter en el buscador navega a buscar.html con el término como parámetro.
document.addEventListener("DOMContentLoaded", () => {
    const barra = document.querySelector(".barra");
    const lupa = document.querySelector(".lupa");
    if (!barra || !lupa) return;

    const input = barra.querySelector(".buscador input");

    lupa.addEventListener("click", () => {
        const activa = barra.classList.toggle("busqueda-activa");
        lupa.setAttribute("aria-expanded", activa);
        if (activa && input) {
            input.focus();
        }
    });
    //Funcion para el buscador de libros que filtra por id que es el titulo del lirbo
    if (input) {
        input.addEventListener("keydown", e => {
            if (e.key === "Enter" && input.value.trim()) {
                window.location.href = "buscar.html?q=" + encodeURIComponent(input.value.trim());
            }
        });
    }

    mostrarIndicadorSesion();
});

// Consulta la sesión y, si hay una iniciada, muestra el nombre de usuario
// a la izquierda del icono de cuenta.
function mostrarIndicadorSesion() {
    fetch("sesion.php")
        .then(respuesta => respuesta.json())
        .then(datos => {
            if (!datos.logueado) return;

            const buscador = document.querySelector(".buscador");
            const perfil = document.querySelector(".perfil");

            if (buscador && perfil && !buscador.querySelector(".sesion-indicador")) {
                const indicador = document.createElement("span");
                indicador.className = "sesion-indicador";
                indicador.textContent = datos.usuario || "Sesión activa";
                indicador.title = "Sesión iniciada como " + (datos.usuario || "");
                buscador.insertBefore(indicador, perfil);
            }

            // Con la sesión iniciada, el icono de perfil ya no lleva al login.
            if (perfil) perfil.href = "mi_lista.html";
        })
        .catch(() => {});
}
