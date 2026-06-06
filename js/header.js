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
});
