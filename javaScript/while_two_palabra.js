
window.onload = function() {

    var box = document.getElementById("box-answerd");
    
    let palabra = prompt("Adivine el color correcto \npista: termina en l\nIngresa un color:");
    
    while (palabra !== "azul") {
      alert("palabra incorrecta.");
      palabra = prompt("Ingresa nuevamente el color:");
    }
    
    box.textContent = "El color azul es correcto. Ganaste!!";
    
    }