window.onload = function() {

    var box = document.getElementById("box-answerd");

    const usuarioCorrecto = "admin";
    const claveCorrecta = "12345";

    let usuarioIngresado = prompt("Ingrese su usuario: admin");
    let claveIngresada = prompt("Ingrese su clave de acceso: 12345");

    while (usuarioIngresado !== usuarioCorrecto || claveIngresada !== claveCorrecta) {
    alert("Usuario o clave incorrectos. Inténtelo nuevamente.");

    usuarioIngresado = prompt("Ingrese su usuario:");
    claveIngresada = prompt("Ingrese su clave de acceso:");
    }

    box.textContent = "¡Acceso concedido! Bienvenido, " + usuarioIngresado + ".";

}