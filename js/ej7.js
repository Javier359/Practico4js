class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    getTelefono() {
      return this.telefono;
    }
  
    setTelefono(telefono) {
      this.telefono = telefono;
    }
  
    equals(contacto) {
      return this.nombre === contacto.getNombre();
    }
  }
  
  class Agenda {
    constructor(tamano = 10) {
      this.contactos = [];
      this.tamano = tamano;
    }
  
    aniadirContacto(contacto) {
      if (this.contactos.length < this.tamano) {
        this.contactos.push(contacto);
        console.log(`Contacto ${contacto.getNombre()} añadido a la agenda.`);
      } else {
        console.log("La agenda está llena.");
      }
    }
  
    existeContacto(contacto) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].equals(contacto)) {
          return true;
        }
      }
  
      return false;
    }
  
    listarContactos() {
      console.log("Lista de contactos:");
  
      for (let i = 0; i < this.contactos.length; i++) {
        console.log(`${this.contactos[i].getNombre()}: ${this.contactos[i].getTelefono()}`);

      }
    }
  
    buscarContacto(nombre) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].getNombre() === nombre) {
          console.log(`Teléfono de ${nombre}: ${this.contactos[i].getTelefono()}`);
          return;
        }
      }
  
      console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
    }
  
    eliminarContacto(contacto) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].equals(contacto)) {
          this.contactos.splice(i, 1);
          console.log(`Contacto ${contacto.getNombre()} eliminado de la agenda.`);
          return;
        }
      }
  
      console.log(`No se encontró ningún contacto con el nombre ${contacto.getNombre()}.`);
    }
  
    agendaLlena() {
      return this.contactos.length === this.tamano;
    }
  
    huecosLibres() {
      return this.tamano - this.contactos.length;
    }
  }
  
  function mostrarMenu() {
    let agenda = new Agenda();
  
    while (true) {
      let opcion = prompt(`Menú de opciones:
  1. Añadir contacto
  2. Buscar contacto
  3. Eliminar contacto
  4. Listar contactos
  5. Salir`);
  
      switch (opcion) {
        case "1":
          let nombre = prompt("Ingrese el nombre del contacto:");
          let telefono = prompt("Ingrese el teléfono del contacto:");
          let contacto = new Contacto(nombre, telefono);
          agenda.aniadirContacto(contacto);
          break;
  
        case "2":
          let nombreBusqueda = prompt("Ingrese el nombre del contacto a buscar:");
          agenda.buscarContacto(nombreBusqueda);
          break;
  
        case "3":
          let nombreEliminacion = prompt("Ingrese el nombre del contacto a eliminar:");
          let contactoEliminacion = new Contacto(nombreEliminacion, "");
          agenda.eliminarContacto(contactoEliminacion);
          break;
  
        case "4":
          agenda.listarContactos();
          break;
  
        case "5":
          return;
  
        default:
          console.log("Opción inválida.");
          break;
      }
    }
  }

  mostrarMenu();
  //las salidas son mostradas todas por consola

  