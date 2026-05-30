// JavaScript del encabezado por Ciro E. Rivera
// En pantallas pequeñas muestra u oculta el cuadro de búsqueda al pulsar la lupa.
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
});
