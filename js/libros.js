// Datos de los libros del catálogo — compartidos por libro.html y mi_lista.html.
// Originalmente estaban dentro de js/Libro.js (Diego Alexander Ramirez Rodriguez);
// se extrajeron aquí para reutilizarlos en "Mi lista".

const libros = [
    {
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        editorial: "Bloomsbury",
        anio: 1997,
        isbn: "978-0747532743",
        portada: "Recursos/harrypoter.jpg",
        descripcion:
            "La primera aventura de Harry Potter, donde descubre que es un mago y comienza su vida en Hogwarts.",
        archivo: null,
    },
    {
        titulo: "El Hobbit",
        autor: "J.R.R. Tolkien",
        editorial: "Allen & Unwin",
        anio: 1937,
        isbn: "978-0547928227",
        portada: "Recursos/LIBRO_ El Hobbit.jpg",
        descripcion:
            "La historia de Bilbo Bolsón y su viaje inesperado junto a un grupo de enanos hacia la Montaña Solitaria.",
        archivo: null,
    },
    {
        titulo: "Drácula",
        autor: "Bram Stoker",
        editorial: "Archibald Constable & Co",
        anio: 1897,
        isbn: "978-0141439846",
        portada: "Recursos/Dracula.jpg",
        descripcion: "La clásica novela gótica que introdujo al Conde Drácula y definió la figura del vampiro moderno.",
        archivo: null,
    },
    {
        titulo: "Frankenstein",
        autor: "Mary Shelley",
        editorial: "Lackington, Hughes, Harding, Mavor & Jones",
        anio: 1818,
        isbn: "978-0486282114",
        portada: "Recursos/Frankenstein, or the Modern Prometheus by Mary Shelly.jpg",
        descripcion:
            "La historia del doctor Victor Frankenstein y la criatura que creó, explorando temas de ciencia y humanidad.",
        archivo: null,
    },
    {
        titulo: "IT",
        autor: "Stephen King",
        editorial: "Viking",
        anio: 1986,
        isbn: "978-1501142970",
        portada: "Recursos/libroIT.jpg",
        descripcion:
            "Un grupo de amigos enfrenta a una entidad maligna que adopta la forma de un payaso llamado Pennywise.",
        archivo: null,
    },
    {
        titulo: "Pet Sematary",
        autor: "Stephen King",
        editorial: "Doubleday",
        anio: 1983,
        isbn: "978-0743412285",
        portada: "Recursos/Pet Semetary_.jpg",
        descripcion:
            "Una inquietante historia sobre un cementerio de mascotas con poderes oscuros y sus consecuencias.",
        archivo: null,
    },
    {
        titulo: "Mi vecino Totoro",
        autor: "Hayao Miyazaki",
        editorial: "Tokuma Shoten",
        anio: 1988,
        isbn: "978-4198616774",
        portada: "Recursos/totoro.webp",
        descripcion: "Un cuento mágico sobre dos hermanas que descubren criaturas fantásticas en el campo japonés.",
        archivo: null,
    },
    {
        titulo: "Juego de Tronos",
        autor: "George R.R. Martin",
        editorial: "Bantam Books",
        anio: 1996,
        isbn: "978-0553103540",
        portada: "Recursos/A Game of Thrones _ Book 1 of A Song of Ice and Fire.jpg",
        descripcion:
            "El inicio de Canción de Hielo y Fuego, una épica lucha por el control de los Siete Reinos de Westeros.",
        archivo: null,
    },
    {
        titulo: "El Nombre del Viento",
        autor: "Patrick Rothfuss",
        editorial: "DAW Books",
        anio: 2007,
        isbn: "978-0756404741",
        portada: "Recursos/The Name of the Wind (The Kingkiller Chronicle).jpg",
        descripcion:
            "La historia de Kvothe, un legendario mago y músico, contada en sus propias palabras desde una posada.",
        archivo: null,
    },
    {
        titulo: "El León, la Bruja y el Ropero",
        autor: "C.S. Lewis",
        editorial: "Geoffrey Bles",
        anio: 1950,
        isbn: "978-0064404990",
        portada: "Recursos/The Lion, the Witch and the Wardrobe.jpg",
        descripcion:
            "Cuatro hermanos descubren el reino mágico de Narnia a través de un ropero y deben luchar contra la Bruja Blanca.",
        archivo: null,
    },
    {
        titulo: "El Camino de los Reyes",
        autor: "Brandon Sanderson",
        editorial: "Tor Books",
        anio: 2010,
        isbn: "978-0765326355",
        portada: "Recursos/The Way of Kings - Brian Sanderson.jpg",
        descripcion:
            "El comienzo de El Archivo de las Tormentas, una ambiciosa epopeya de fantasía con un mundo radicalmente original.",
        archivo: null,
    },
    {
        titulo: "La Maldición de Hill House",
        autor: "Shirley Jackson",
        editorial: "Viking Press",
        anio: 1959,
        isbn: "978-0143039976",
        portada: "Recursos/Shirley Jackson, Jordan Peele and More_ 15 Terrifying Books to Read This Halloween.jpg",
        descripcion:
            "Una casa con historia oscura atrae a un grupo de investigadores del mundo paranormal con consecuencias aterradoras.",
        archivo: null,
    },
    {
        titulo: "La Maldición",
        autor: "Varios Autores",
        editorial: "Editorial Terror",
        anio: 2020,
        isbn: "978-0000000000",
        portada: "Recursos/la maldicion.jpg",
        descripcion:
            "Una colección de relatos de terror que exploran las maldiciones ancestrales y sus consecuencias en el mundo moderno.",
        archivo: null,
    },
    {
        titulo: "Pro Git",
        autor: "Scott Chacon y Ben Straub",
        editorial: "Apress",
        anio: 2014,
        isbn: "978-1484200773",
        portada: "Recursos/GitBook.png",
        descripcion:
            "La guía definitiva y de acceso libre sobre el sistema de control de versiones Git, desde los conceptos básicos hasta el uso avanzado.",
        archivo: "Recursos/Libros/progit.epub",
    },
];
