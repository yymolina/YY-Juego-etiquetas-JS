window.onload = function() {

    var box = document.getElementById("box-answerd");

    var añoActual  = parseFloat(prompt("Por favor ingrese el año actual:"));
    var añoNacimiento = parseFloat(prompt("Por favor ingrese el año de nacimiento :"));
    var edad = añoActual - añoNacimiento 

    
    for (var año = parseInt(añoNacimiento); año <= parseInt(añoActual); año++) {
        if (año === parseInt(añoActual)) {
          
          edad = año - parseInt(añoNacimiento);
        }
      }
      
      
      box.textContent = "Su edad es de: " +edad+ " años";


}