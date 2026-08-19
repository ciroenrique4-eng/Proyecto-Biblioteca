(function () {
  "use strict";

  const libros = [
    { titulo: "Harry Potter", imagen: "Recursos/portadas/harrypoter.jpg", enlace: "libro.html?id=0" },
    { titulo: "El Hobbit", imagen: "Recursos/portadas/LIBRO_ El Hobbit.jpg", enlace: "libro.html?id=1" },
    { titulo: "Drácula", imagen: "Recursos/portadas/Dracula.jpg", enlace: "libro.html?id=2" },
    { titulo: "Frankenstein", imagen: "Recursos/portadas/Frankenstein, or the Modern Prometheus by Mary Shelly.jpg", enlace: "libro.html?id=3" },
    { titulo: "IT", imagen: "Recursos/portadas/libroIT.jpg", enlace: "libro.html?id=4" },
    { titulo: "Pet Sematary", imagen: "Recursos/portadas/Pet Semetary_.jpg", enlace: "libro.html?id=5" },
    { titulo: "Totoro", imagen: "Recursos/portadas/totoro.webp", enlace: "libro.html?id=6" },
    { titulo: "The Name of the Wind", imagen: "Recursos/portadas/The Name of the Wind (The Kingkiller Chronicle).jpg", enlace: "libro.html?id=7" },
    { titulo: "Juego de Tronos", imagen: "Recursos/portadas/A Game of Thrones _ Book 1 of A Song of Ice and Fire.jpg", enlace: "libro.html?id=8" },
    { titulo: "The Way of Kings", imagen: "Recursos/portadas/The Way of Kings - Brian Sanderson.jpg", enlace: "libro.html?id=9" },
    { titulo: "El Léon, la Bruja y el Ropero", imagen: "Recursos/portadas/The Lion, the Witch and the Wardrobe.jpg", enlace: "libro.html?id=10" },
    { titulo: "Terror", imagen: "Recursos/portadas/Shirley Jackson, Jordan Peele and More_ 15 Terrifying Books to Read This Halloween.jpg", enlace: "libro.html?id=11" },
    { titulo: "La Maldición", imagen: "Recursos/portadas/la maldicion.jpg", enlace: "libro.html?id=12" },
  ];

  const h1 = document.getElementById("parallax-row-1");
  const h2 = document.getElementById("parallax-row-2");
  const h3 = document.getElementById("parallax-row-3");
  const escena = document.getElementById("parallax-scene");
  const hero = document.getElementById("hero-parallax");
  const polvo = document.getElementById("hero-particles");

  if (!h1 || !h2 || !h3 || !escena || !hero) return;

  let ratonX = 0;
  let ratonY = 0;

  function crearCarta(libro) {
    const a = document.createElement("a");
    a.className = "book-card";
    a.href = libro.enlace;
    a.setAttribute("aria-label", libro.titulo);
    const img = document.createElement("img");
    img.src = libro.imagen;
    img.alt = libro.titulo;
    img.loading = "lazy";
    img.onerror = function () {
      this.style.display = "none";
    };
    const capa = document.createElement("div");
    capa.className = "book-card-overlay";
    const txt = document.createElement("span");
    txt.textContent = libro.titulo;
    capa.appendChild(txt);
    a.appendChild(img);
    a.appendChild(capa);
    return a;
  }

  function repartir() {
    const t1 = Math.ceil(libros.length / 3);
    const t2 = Math.ceil((libros.length - t1) / 2);
    const filas = [h1, h2, h3];
    let idx = 0;
    for (let f = 0; f < filas.length; f++) {
      const lim = f === 0 ? t1 : f === 1 ? t2 : libros.length - idx;
      for (let i = 0; i < lim && idx < libros.length; i++, idx++) {
        filas[f].appendChild(crearCarta(libros[idx]));
      }
      const cartas = filas[f].querySelectorAll(".book-card");
      for (let c = 0; c < cartas.length; c++) {
        filas[f].appendChild(cartas[c].cloneNode(true));
      }
    }
  }

  repartir();

  function lerp(a, b, t) {
    return a + (b - a) * Math.max(0, Math.min(1, t));
  }

  function animar() {
    const rect = hero.getBoundingClientRect();
    const alto = rect.bottom - rect.top;
    const prog = Math.max(0, Math.min(1, -rect.top / (alto - window.innerHeight)));

    const pe = Math.min(prog / 0.3, 1);
    const rx = lerp(5, 0, pe) + ratonY;
    const rz = lerp(4, 0, pe) + ratonX;
    const ty = lerp(-100, 150, pe);
    const op = lerp(0.7, 1, pe);

    escena.style.transform = "rotateX(" + rx + "deg) rotateZ(" + rz + "deg) translateY(" + ty + "px)";
    escena.style.opacity = op;

    const p2 = Math.max(0, (prog - 0.3) / 0.7);
    h1.style.transform = "translateX(" + lerp(0, 800, p2) + "px)";
    h2.style.transform = "translateX(" + lerp(0, -800, p2) + "px)";
    h3.style.transform = "translateX(" + lerp(0, 1000, p2) + "px)";

    const cont = document.querySelector(".hero-content");
    if (cont) {
      cont.style.opacity = lerp(1, 0.25, p2);
      cont.style.transform = "scale(" + lerp(1, 0.92, p2) + ")";
    }
  }

  let ocupado = false;
  window.addEventListener(
    "scroll",
    function () {
      if (!ocupado) {
        requestAnimationFrame(function () {
          animar();
          ocupado = false;
        });
        ocupado = true;
      }
    },
    { passive: true }
  );

  animar();

  const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reducir) {
    let rOcupado = false;
    document.addEventListener("mousemove", function (e) {
      ratonX = ((e.clientX / window.innerWidth) - 0.5) * 2;
      ratonY = ((e.clientY / window.innerHeight) - 0.5) * -2;
      if (!rOcupado) {
        requestAnimationFrame(function () {
          animar();
          rOcupado = false;
        });
        rOcupado = true;
      }
    });
  }

  if (polvo && !reducir) {
    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const s = Math.random() * 2.5 + 0.5;
      p.style.cssText =
        "left:" + Math.random() * 100 + "%;" +
        "top:" + Math.random() * 100 + "%;" +
        "width:" + s + "px;height:" + s + "px;" +
        "animation-delay:" + Math.random() * 6 + "s;" +
        "animation-duration:" + (Math.random() * 8 + 6) + "s;" +
        "opacity:" + (Math.random() * 0.4 + 0.05);
      polvo.appendChild(p);
    }
  }
})();
