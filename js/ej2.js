class Cuenta {
    constructor(titular, saldo = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    ingresar(cantidad) {
      this.saldo += cantidad;
    }
  
    extraer(cantidad) {
      if (cantidad > this.saldo) {
        alert("No hay suficiente saldo en la cuenta.");
        console.log("No hay suficiente saldo en la cuenta.");
      } else {
        this.saldo -= cantidad;
      }
    }
  
    informar() {
        alert(`el titular es ${this.titular} y su saldo es ${this.saldo}`);
         console.log(`Titular: ${this.titular}`);
         console.log(`Saldo: ${this.saldo}`);
    }
  }
  
  // Ejemplo de uso
  let cuenta = new Cuenta("Alex");
  cuenta.informar(); // Titular: Alex, Saldo: 0
  cuenta.ingresar(parseFloat(prompt('ingrese un monto')));
  cuenta.informar(); // Titular: Alex, Saldo: 1000
  cuenta.extraer(parseFloat(prompt('ingrese un monto para extraer')));
  cuenta.informar(); // Titular: Alex, Saldo: 500
  cuenta.extraer(parseFloat(prompt('ingrese un monto para extraer'))); // No hay suficiente saldo en la cuenta.
  