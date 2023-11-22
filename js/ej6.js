class Libro {
    constructor(isbn, titulo, autor, numPaginas) {
      this.isbn = isbn;
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
    }
  
    getISBN() {
      return this.isbn;
    }
  
    setISBN(isbn) {
      this.isbn = isbn;
    }
  
    getTitulo() {
      return this.titulo;
    }
  
    setTitulo(titulo) {
      this.titulo = titulo;
    }
  
    getAutor() {
      return this.autor;
    }
  
    setAutor(autor) {
      this.autor = autor;
    }
  
    getNumPaginas() {
      return this.numPaginas;
    }
  
    setNumPaginas(numPaginas) {
      this.numPaginas = numPaginas;
    }
  
    mostrarLibro() {
      document.write(`<p> libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.</p>`);
    }
  }
  
  // creacion de objetos
  let libro1 = new Libro("1234567890", "El Quijote", "Miguel de Cervantes", 863);
  let libro2 = new Libro("0987654321", "Cien años de soledad", "Gabriel García Márquez", 417);
  //llamada
  libro1.mostrarLibro(); 
  libro2.mostrarLibro();
  //doncidon para ver que libros tiene mas pagina
  if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
    document.write(`El libro ${libro1.getTitulo()} tiene más páginas.`);
  } else if (libro2.getNumPaginas() > libro1.getNumPaginas()) {
    document.write(`El libro ${libro2.getTitulo()} tiene más páginas.`);
  } else {
    document.write("Los dos libros tienen la misma cantidad de páginas.");
  }
  