window.onload = function() {

    var box = document.getElementById("box-answerd");

    let result = '';
    let i = 0;
    let numero = parseInt(prompt("Ingrese en numero hasta el que desea contar"))

    do {
      i = i + 1;
      result = result + i;
    } while (i < numero);



    box.textContent = " El conteo de numeros es: "  + result ;
    
      
}
