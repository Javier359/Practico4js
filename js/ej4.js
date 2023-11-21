class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    document.write(`<h2>Arreglo de productos</h2>`);
    document.write(`<ul>`);
    document.write(`<li>Código: ${this.codigo}</li>`);
    document.write(`<li>Nombre: ${this.nombre}</li>`);
    document.write(`<li>Precio: ${this.precio}</li>`);
    document.write(`</ul>`);
  }
}

// Ejemplo de uso
let producto1 = new Producto(1, "Manzana", 1.99);
let producto2 = new Producto(2, "Banana", 0.99);
let producto3 = new Producto(3, "Naranja", 2.49);

let productos = [producto1, producto2, producto3];

productos.forEach((producto) => {
  producto.imprimeDatos();
});
