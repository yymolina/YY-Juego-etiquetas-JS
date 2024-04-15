window.onload = function() {

    var box = document.getElementById("box-answerd");

    function calcularValorEntrada() {
    const nombre = prompt("Ingrese su nombre:");
    const fechaNacimiento = new Date(prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD):"));
    const tipoSala = prompt("Ingrese el tipo de sala \n1.premium (valor de entrada 20.000), \n2.platino (valor de entrada 15.000), \n3.estándar (valor de entrada 10.000):");
    const diaSemana = prompt("Ingrese el día de la semana: 1.miercoles (50% descuento), 2.Sabado (aumenta el valor un 25%)");
  
    let valorEntrada = 0;
  
    switch (tipoSala) {
      case "1":
        valorEntrada = 20000;
        break;
      case "2":
        valorEntrada = 15000;
        break;
      case "3":
        valorEntrada = 10000;
        break;
      default:
        box.textContent = "Tipo de sala inválido.";
        return;
    }
  
    const edad = calcularEdad(fechaNacimiento);
  
    if (edad < 18) {
      valorEntrada *= 0.9; // Descuento del 10% para menores de 18 años
    } else if (edad >= 30 && edad <= 45) {
      valorEntrada *= 0.95; // Descuento del 5% para edades entre 30 y 45 años
    } else if (edad > 45) {
      valorEntrada *= 0.8; // Descuento del 20% para mayores de 45 años
    }
  
    if (diaSemana.toLowerCase() === "1") {
      valorEntrada *= 0.5; // Descuento del 50% los miércoles
    } else if (diaSemana.toLowerCase() === "2") {
      valorEntrada *= 1.25; // Aumento del 25% los sábados
    }
  
    box.textContent = "Nombre: " + nombre;
    box.textContent = "Valor de la entrada: " + valorEntrada.toFixed(2);
  }
  
  function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
  
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
  
    return edad;
  }
  
  calcularValorEntrada();

}