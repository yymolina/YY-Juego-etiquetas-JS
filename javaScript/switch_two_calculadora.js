window.onload = function() {

let operacion = prompt("Selecciona la operación que deseas realizar:  \n1) Suma \n2) Resta \n3) Multiplicar \n4) Dividir");
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

let box = document.getElementById("box-answerd");

let resultado;

switch (operacion) {
  case '1':{
    resultado = num1 + num2;
    break
    }
  case '2':{
    resultado = num1 - num2;
    break
    }
  case '3':{
    resultado = num1 * num2;
    break
    }
  case '4':{
    resultado = num1 / num2;
    break
    }
  default:
    box.textContent = "Esta opcion no existe"
    break
}

box.textContent = "El resultado de la operacion es: " + resultado;

}