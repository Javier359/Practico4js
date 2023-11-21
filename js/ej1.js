let auto = {
    color: "rojo",
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false,
    encender: function() {
      if (!this.encendido) {
        this.encendido = true;
        console.log("El auto está encendido.");
      } else {
        console.log("El auto ya está encendido.");
      }
    },
    apagar: function() {
      if (this.encendido) {
        this.encendido = false;
        console.log("El auto está apagado.");
      } else {
        console.log("El auto ya está apagado.");
      }
    }
  };
  
  // Ejemplo de uso
  auto.encender(); // El auto está encendido.
  auto.apagar(); // El auto ya está apagado.
  