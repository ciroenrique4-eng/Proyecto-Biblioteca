//Archivo Js realizado por Diego Alexander Ramirez Rodriguez.   
const libros = [
    {
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        editorial: "Bloomsbury",
        anio: 1997,
        isbn: "978-0747532743",
        portada: "Recursos/harrypoter.jpg",
        descripcion: "La primera aventura de Harry Potter, donde descubre que es un mago y comienza su vida en Hogwarts."
    },
    {
        titulo: "El Hobbit",
        autor: "J.R.R. Tolkien",
        editorial: "Allen & Unwin",
        anio: 1937,
        isbn: "978-0547928227",
        portada: "Recursos/LIBRO_ El Hobbit.jpg",
        descripcion: "La historia de Bilbo Bolsón y su viaje inesperado junto a un grupo de enanos hacia la Montaña Solitaria."
    },
    {
        titulo: "Drácula",
        autor: "Bram Stoker",
        editorial: "Archibald Constable & Co",
        anio: 1897,
        isbn: "978-0141439846",
        portada: "Recursos/Dracula.jpg",
        descripcion: "La clásica novela gótica que introdujo al Conde Drácula y definió la figura del vampiro moderno."
    },
    {
        titulo: "Frankenstein",
        autor: "Mary Shelley",
        editorial: "Lackington, Hughes, Harding, Mavor & Jones",
        anio: 1818,
        isbn: "978-0486282114",
        portada: "Recursos/Frankenstein, or the Modern Prometheus by Mary Shelly.jpg",
        descripcion: "La historia del doctor Victor Frankenstein y la criatura que creó, explorando temas de ciencia y humanidad."
    },
    {
        titulo: "IT",
        autor: "Stephen King",
        editorial: "Viking",
        anio: 1986,
        isbn: "978-1501142970",
        portada: "Recursos/libroIT.jpg",
        descripcion: "Un grupo de amigos enfrenta a una entidad maligna que adopta la forma de un payaso llamado Pennywise."
    },
    {
        titulo: "Pet Sematary",
        autor: "Stephen King",
        editorial: "Doubleday",
        anio: 1983,
        isbn: "978-0743412285",
        portada: "Recursos/Pet Semetary_.jpg",
        descripcion: "Una inquietante historia sobre un cementerio de mascotas con poderes oscuros y sus consecuencias."
    },
    {
        titulo: "Mi vecino Totoro",
        autor: "Hayao Miyazaki",
        editorial: "Tokuma Shoten",
        anio: 1988,
        isbn: "978-4198616774",
        portada: "Recursos/3.png",
        descripcion: "Un cuento mágico sobre dos hermanas que descubren criaturas fantásticas en el campo japonés."
    }
];

function cargarLibro() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id")) || 0;
    const libro = libros[id];

    document.getElementById("titulo").textContent = libro.titulo;
    document.getElementById("portada").src = libro.portada;

    document.getElementById("metadata").innerHTML = `
        <dt>Autor:</dt><dd>${libro.autor}</dd>
        <dt>Editorial:</dt><dd>${libro.editorial}</dd>
        <dt>Año de publicación:</dt><dd>${libro.anio}</dd>
        <dt>ISBN:</dt><dd>${libro.isbn}</dd>
    `;

    document.getElementById("descripcion").textContent = libro.descripcion;
}

window.onload = cargarLibro;