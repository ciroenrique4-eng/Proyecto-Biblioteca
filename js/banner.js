// Banner rotativo del hero — Ciro E. Rivera
const banners = [
    {
        imagen: "Recursos/banners/3.png",
        titulo: "Mi Vecino Totoro",
        sinopsis:
            "Cuenta la historia de dos hermanas que se mudan al campo y descubren espíritus del bosque, entre ellos el enorme y silencioso Totoro.",
        porQue:
            "Porque te recuerda algo que probablemente ya olvidaste mientras crecías: la imaginación no es una tontería infantil, es una forma de sobrevivir.",
        libroId: 6,
    },
    {
        imagen: "Recursos/banners/Hobbit.jpg",
        titulo: "El Hobbit",
        sinopsis:
            "Bilbo Bolsón, un hobbit que prefería la comodidad de su hogar, es arrastrado inesperadamente en una aventura épica hacia la Montaña Solitaria.",
        porQue:
            "Porque a veces la mayor aventura comienza en el momento en que decides salir por la puerta. Un clásico atemporal que no envejece.",
        libroId: 1,
    },
    {
        imagen: "Recursos/banners/Frankenstein.jpg",
        titulo: "Frankenstein",
        sinopsis:
            "El doctor Víctor Frankenstein desafía los límites de la ciencia y la ética al crear vida artificial, con consecuencias devastadoras.",
        porQue:
            "Porque 200 años después sigue siendo la pregunta más urgente de la humanidad: ¿hasta dónde podemos llegar con la ciencia?",
        libroId: 3,
    },
    {
        imagen: "Recursos/banners/Gitpro.png",
        titulo: "Pro Git",
        sinopsis:
            "La guía definitiva sobre Git, el sistema de control de versiones más usado en el mundo, escrita por expertos y disponible de forma completamente libre.",
        porQue:
            "Porque si escribes código, dominar Git no es opcional. Este libro lo explica todo, desde lo básico hasta el uso avanzado en equipos.",
        libroId: 13,
    },
];

let bannerActual = 0;
let intervalo;

const heroBg = document.getElementById("hero-bg");
const heroTitulo = document.getElementById("hero-titulo");
const heroSinopsis = document.getElementById("hero-sinopsis");
const heroPorQue = document.getElementById("hero-porque");
const heroBoton = document.getElementById("hero-boton");
const hero = document.querySelector(".hero");

function aplicarBanner(banner, animado = true) {
    if (animado) hero.classList.add("hero-fade");

    setTimeout(
        () => {
            heroBg.style.backgroundImage = `url("${banner.imagen}")`;
            heroTitulo.textContent = banner.titulo;
            heroSinopsis.textContent = banner.sinopsis;
            heroPorQue.textContent = banner.porQue;
            heroBoton.href = `libro.html?id=${banner.libroId}`;

            if (animado) {
                hero.classList.remove("hero-fade");
            }
        },
        animado ? 400 : 0,
    );
}

function siguiente() {
    bannerActual = (bannerActual + 1) % banners.length;
    aplicarBanner(banners[bannerActual]);
}

aplicarBanner(banners[bannerActual], false);
intervalo = setInterval(siguiente, 10000);
