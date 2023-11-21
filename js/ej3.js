class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    modificarAlto(nuevoAlto) {
      this.alto = nuevoAlto;
    }
  
    modificarAncho(nuevoAncho) {
      this.ancho = nuevoAncho;
    }
  
    mostrarPropiedades() {
      alert(`Alto: ${this.alto}, Ancho: ${this.ancho}`);
    }
  
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    calcularArea() {
      return this.alto * this.ancho;
    }
  }
  
  // Ejemplo de uso
  let rectangulo = new Rectangulo(5, 10);
  rectangulo.mostrarPropiedades(); // Alto: 5, Ancho: 10
  rectangulo.modificarAlto(7);
  rectangulo.modificarAncho(12);
  rectangulo.mostrarPropiedades(); // Alto: 7, Ancho: 12
  alert(`Perímetro: ${rectangulo.calcularPerimetro()}`);
  alert(`Área: ${rectangulo.calcularArea()}`);
  