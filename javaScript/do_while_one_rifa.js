window.onload = function() {

    var box = document.getElementById("box-answerd");

    let numeroRifa;

    do {
    numeroRifa = parseInt(prompt("Ingrese el número de rifa (1 al 10):"));

    if (numeroRifa === 5) {
        box.textContent = "¡Ganaste! El número de rifa es correcto.";
    } else {
        box.textContent = "El número de rifa es incorrecto. Intenta nuevamente.";
    }
    } while (numeroRifa !== 5);

}