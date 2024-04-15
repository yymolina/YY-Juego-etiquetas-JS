window.onload = function() {
    var numero1 = prompt("Ingrese el primer número:");
    var numero2 = prompt("Ingrese el segundo número:");
    var numero3 = prompt("Ingrese el tercer número:");

    var box = document.getElementById("box-answerd");

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    numero3 = parseFloat(numero3);
    
    if (numero1 >= numero2 && numero1 >= numero3) {
        box.textContent = "El numero mayor entre: " +numero1+ " - " +numero2+ " - " +numero3+ " es:  " +numero1;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        box.textContent = "El numero mayor entre: " +numero1+ " - " +numero2+ " - " +numero3+ " es:  " +numero2;
    } else {
        box.textContent = "El numero mayor entre: " +numero1+ " - " +numero2+ " - " +numero3+ " es:  " +numero3;
    }

}