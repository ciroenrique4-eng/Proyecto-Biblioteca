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
        let contadorVerito = 0;

        input.addEventListener("keydown", e => {
            if (e.key === "Enter" && input.value.trim()) {
                if (input.value.trim().toLowerCase() === "verito") {
                    contadorVerito++;
                    input.value = "";
                    if (contadorVerito >= 3) {
                        mostrarMensajeSecreto();
                        contadorVerito = 0;
                    }
                    return;
                }
                contadorVerito = 0;
                window.location.href = "buscar.html?q=" + encodeURIComponent(input.value.trim());
            }
        });
    }

    mostrarIndicadorSesion();
});

function mostrarMensajeSecreto() {
    if (document.querySelector(".easter-egg-verito")) return;

    const overlay = document.createElement("div");
    overlay.className = "easter-egg-verito";
    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        background: transparent;
        pointer-events: none;
    `;

    const mensaje = document.createElement("p");
    mensaje.style.cssText = `
        color: #1a1a1a;
        font-size: clamp(1rem, 2.5vw, 1.4rem);
        font-family: inherit;
        text-align: center;
        max-width: 55ch;
        line-height: 1.8;
        padding: 2rem;
        transition: color 3s ease;
        pointer-events: auto;
        cursor: default;
        user-select: none;
    `;
    mensaje.textContent =
        "Veronica, ya lo sabes, pero eres lo que le da valor a esos días en qué nos vemos... Ya sabes lo malo que soy expresando eso... Pero, cada vez que te veo, vuelvo con una sonrisa de oreja a oreja a casa, y la conservo toda la semana pensando solo en ti... Y, aunque no te volveré a ver, seguiré recordandote, y seguiré sonriendo por ti";

    overlay.appendChild(mensaje);
    document.body.appendChild(overlay);
    mensaje.addEventListener("mouseenter", () => {
        mensaje.style.color = "#0077ae";
    });
    mensaje.addEventListener("mouseleave", () => {
        mensaje.style.color = "#1a1a1a";
    });

    mensaje.addEventListener("click", () => overlay.remove());
}

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
            if (perfil) perfil.href = "mi_lista.html";
        })
        .catch(() => {});
}
