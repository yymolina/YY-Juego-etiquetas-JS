window.onload = function() {
    var numero1 = parseFloat(prompt("Ingrese el primer número:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    var box = document.getElementById("box-answerd");

    if (numero1 > numero2) {
        box.textContent = "El numero mayor entre: " +numero1+ " - " +numero2+ " es:  " +numero1;
      } else if (numero1 < numero2) {
        box.textContent = "El numero menor entre: " +numero1+ " - " +numero2+ " es:  " +numero1;
      } else {
        box.textContent = "Los dos números son iguales.";
      }

} 
