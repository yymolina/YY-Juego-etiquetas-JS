window.onload = function() {
  var operacion = prompt("Selecciona la operación que deseas realizar:  \n1) Suma \n2) Resta \n3) Multiplicar \n4) Dividir");
  var num1 = parseInt(prompt("Ingresa el primer número:"));
  var num2 = parseInt(prompt("Ingresa el segundo número:"));
  
  var box = document.getElementById("box-answerd");

  if (operacion === "1") {
    var resultadoS = num1 + num2;
    box.textContent = "El resultado de la suma es: " + resultadoS;
  } else if (operacion === "2") {
    var resultadoR = num1 - num2;
    box.textContent = "El resultado de la suma es: " + resultadoR;
  } else if (operacion === "3") {
    var resultadoM = num1 * num2;
    box.textContent = "El resultado de la multiplicación es: " + resultadoM;
  } else if (operacion === "4") {
    var resultadoD = num1 / num2;
    box.textContent = "El resultado de la división es: " + resultadoD;
  } else {
    box.textContent = "Operación inválida. Por favor, selecciona una opción válida.";
  }
}