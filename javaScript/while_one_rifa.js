window.onload = function() {

var box = document.getElementById("box-answerd");

let numeroRifa = prompt("Ingresa el número de la rifa (1 al 10):");

while (numeroRifa !== "8") {
  alert("El número es incorrecto.");
  numeroRifa = prompt("Ingresa nuevamente el número de la rifa (1 al 10):");
}

box.textContent = "El numero 8 es correcto. Ganaste!!";

}

