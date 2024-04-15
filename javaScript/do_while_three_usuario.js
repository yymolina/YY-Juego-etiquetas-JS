window.onload = function() {

    var box = document.getElementById("box-answerd");

    let usuarioCorrecto = "admin";
    let claveCorrecta = "12345";
    let usuarioIngresado;
    let claveIngresada;

    do {
    usuarioIngresado = prompt("Ingrese su usuario:");
    claveIngresada = prompt("Ingrese su clave de acceso:");
    } while (usuarioIngresado !== usuarioCorrecto || claveIngresada !== claveCorrecta);

    box.textContent = "Acceso concedido. Bienvenido, " + usuarioIngresado + "!";

}