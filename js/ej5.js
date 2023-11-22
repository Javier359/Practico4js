class Persona {
    constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
        this.dni = this.generaDNI();
      }
  
    mostrarGeneracion() {
      let generacion = "";
      let rasgo = "";
  
      if (this.anioNacimiento >= 1928 && this.anioNacimiento <= 1945) {
        generacion = "Generación Silenciosa";
        rasgo = "Disciplina";
      } else if (this.anioNacimiento >= 1946 && this.anioNacimiento <= 1964) {
        generacion = "Baby Boomers";
        rasgo = "Ambición";
      } else if (this.anioNacimiento >= 1965 && this.anioNacimiento <= 1980) {
        generacion = "Generación X";
        rasgo = "Escepticismo";
      } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
        generacion = "Generación Y (Millennials)";
        rasgo = "Tecnología";
      } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
        generacion = "Generación Z";
        rasgo = "Irreverencia";
      } else if (this.anioNacimiento >= 2011 && this.anioNacimiento <= 2025) {
        generacion = "Generación Alpha";
        rasgo = "Tecnología";
      }
  
      document.write(`<p>Generación: ${generacion}</p>`);
      document.write(`<p>Rasgo característico: ${rasgo}</p>`);
    }
  
    esMayorDeEdad() {
      if (this.edad >= 18) {
        document.write(`<p>${this.nombre} es mayor de edad.</p>`);
      } else {
        document.write(`<p>${this.nombre} es menor de edad.</p>`);
      }
    }
  
    mostrarDatos() {
      document.write(`<p>Nombre: ${this.nombre}</p>`);
      document.write(`<p>Edad: ${this.edad}</p>`);
      document.write(`<p>Sexo: ${this.sexo}</p>`);
      document.write(`<p>Peso: ${this.peso}</p>`);
      document.write(`<p>Altura: ${this.altura}</p>`);
      document.write(`<p>Año de nacimiento: ${this.anioNacimiento}</p>`);
      document.write(`DNI: ${this.dni}`);
    }
  
    generaDNI() {
        let dni = Math.floor(Math.random() * 100000000);
        console.log(`DNI generado: ${dni}`);
        return dni;
      }
  }
  
  // Ejemplo de uso
  let persona = new Persona("Juan", 25, 12345678, "H", 70, 1.75, 1998);
  persona.mostrarGeneracion(); // Generación Y (Millennials), Tecnología
  persona.esMayorDeEdad(); // Juan es mayor de edad.
  persona.mostrarDatos(); // Muestra toda la información del objeto.
  persona.generaDNI(); // Genera un número aleatorio de 8 cifras para el DNI.
  