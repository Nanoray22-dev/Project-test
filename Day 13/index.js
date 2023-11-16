const biblioteca = [
    {
      titulo: "Matar a un ruiseñor",
      autor: "Harper Lee",
      genero: "Novela",
      publicacion: 1960,
      disponibilidad: true
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      genero: "Ciencia ficción",
      publicacion: 1949,
      disponibilidad: true
    },
    {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      genero: "Realismo mágico",
      publicacion: 1967,
      disponibilidad: false
    },
    {
      titulo: "Crimen y castigo",
      autor: "Fiodor Dostoievski",
      genero: "Novela",
      publicacion: 1866,
      disponibilidad: true
    },
    {
      titulo: "En busca del tiempo perdido",
      autor: "Marcel Proust",
      genero: "Novela",
      publicacion: 1913,
      disponibilidad: false
    },
    {
      titulo: "El Gran Gatsby",
      autor: "F. Scott Fitzgerald",
      genero: "Novela",
      publicacion: 1925,
      disponibilidad: true
    },
    {
      titulo: "Moby-Dick",
      autor: "Herman Melville",
      genero: "Aventuras",
      publicacion: 1851,
      disponibilidad: false
    },
    {
      titulo: "Canción de hielo y fuego: Juego de tronos",
      autor: "George R.R. Martin",
      genero: "Fantasía",
      publicacion: 1996,
      disponibilidad: true
    },
    {
      titulo: "Ulises",
      autor: "James Joyce",
      genero: "Novela",
      publicacion: 1922,
      disponibilidad: true
    },
    {
      titulo: "La Odisea",
      autor: "Homero",
      genero: "Épico",
      publicacion: -800,
      disponibilidad: false
    },
    {
      titulo: "Cazadores de sombras: Ciudad de hueso",
      autor: "Cassandra Clare",
      genero: "Fantasía",
      publicacion: 2007,
      disponibilidad: false
    },
    {
      titulo: "El nombre de la rosa",
      autor: "Umberto Eco",
      genero: "Novela histórica",
      publicacion: 1980,
      disponibilidad: true
    },
    {
      titulo: "El Hobbit",
      autor: "J.R.R. Tolkien",
      genero: "Fantasía",
      publicacion: 1937,
      disponibilidad: false
    },
    {
      titulo: "Orgullo y prejuicio",
      autor: "Jane Austen",
      genero: "Novela romántica",
      publicacion: 1813,
      disponibilidad: true
    },
    {
      titulo: "El Conde de Montecristo",
      autor: "Alejandro Dumas",
      genero: "Aventuras",
      publicacion: 1844,
      disponibilidad: false
    },
    {
      titulo: "La sombra del viento",
      autor: "Carlos Ruiz Zafón",
      genero: "Misterio",
      publicacion: 2001,
      disponibilidad: true
    },
    {
      titulo: "El retrato de Dorian Gray",
      autor: "Oscar Wilde",
      genero: "Novela gótica",
      publicacion: 1890,
      disponibilidad: false
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      genero: "Ciencia ficción",
      publicacion: 1949,
      disponibilidad: true
    },
    {
      titulo: "Canción de hielo y fuego: Juego de tronos",
      autor: "George R.R. Martin",
      genero: "Fantasía",
      publicacion: 1996,
      disponibilidad: false
    },
    {
      titulo: "Ulises",
      autor: "James Joyce",
      genero: "Novela",
      publicacion: 1922,
      disponibilidad: true
    },
    {
      titulo: "El Hobbit",
      autor: "J.R.R. Tolkien",
      genero: "Fantasía",
      publicacion: 1937,
      disponibilidad: false
    },
    {
      titulo: "Crimen y castigo",
      autor: "Fiodor Dostoievski",
      genero: "Novela",
      publicacion: 1866,
      disponibilidad: true
    },
    {
      titulo: "Moby-Dick",
      autor: "Herman Melville",
      genero: "Aventuras",
      publicacion: 1851,
      disponibilidad: false
    },
  ]

  biblioteca.forEach(libro => {
    if (libro.genero === "Ciencia ficción" && libro.publicacion > 1800) {
        console.log(`Título: ${libro.titulo}, Año de publicación: ${libro.publicacion}`);
    }
});
  
