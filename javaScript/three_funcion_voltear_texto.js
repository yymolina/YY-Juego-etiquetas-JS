window.onload = function() {
    let box = document.getElementById("box-answerd");

function voltear(texto){
    var caracter = "";
    var salida = "";
    for(var i=0; i < texto.length; i++){
      caracter = texto.charAt(i);
      salida = caracter + salida;
    }
    return salida;
  }
 
  var texto = prompt("Introduce un texto");
  var reves = voltear(texto);
  box.textContent = "Texto original: " + texto;
  box.textContent = "Texto al revés: " + reves;

}