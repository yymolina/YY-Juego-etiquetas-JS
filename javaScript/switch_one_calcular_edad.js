window.onload = function() {

var nombreCompleto = prompt("Ingrese su nombre y apellido:");
var anactual = parseInt(prompt("Por favor digite año de Actual"));
var anacimiento = parseInt(prompt("Por favor digite año de Nacimiento"));
var opcion = parseInt(prompt("Por favor digite su mes del 1 a 12"));

var box = document.getElementById("box-answerd");

var edad = anactual - anacimiento

switch (opcion) {
  case 1:{
    box.textContent = nombreCompleto + " nacio en el mes de enero y su edad es de " + edad+ " años"
    break
  }
  case 2:{
    box.textContent = nombreCompleto + " nacio en el mes de febrero y su edad es de " + edad+ " años"
    break
  }
  case 3:{
    box.textContent = nombreCompleto + " nacio en el mes de marzo y su edad es de " + edad+ " años"
    break
  }
  case 4:{
    box.textContent = nombreCompleto + " nacio en el mes de abril y su edad es de " + edad+ " años"
    break
  }
  case 5:{
    box.textContent = nombreCompleto + " nacio en el mes de mayo y su edad es de " + edad+ " años"
    break
  }
  case 6:{
    box.textContent = nombreCompleto + " nacio en el mes de junio y su edad es de " + edad+ " años"
    break
  }
  case 7:{
    box.textContent = nombreCompleto + " nacio en el mes de julio y su edad es de " + edad+ " años"
    break
  }
  case 8:{
    box.textContent = nombreCompleto + " nacio en el mes de agosto y su edad es de " + edad+ " años"
    break
  }
  case 9:{
    box.textContent = nombreCompleto + " nacio en el mes de septiembre y su edad es de " + edad+ " años"
    break
  }
  case 10:{
    box.textContent = nombreCompleto + " nacio en el mes de octubre y su edad es de " + edad+ " años"
    break
  }
  case 11:{
    box.textContent = nombreCompleto + " nacio en el mes de noviembre y su edad es de " + edad+ " años"
    break
  }
  case 12:{
    box.textContent = nombreCompleto + " nacio en el mes de diciembre y su edad es de " + edad+ " años"
    break
  }

  default:{
    box.textContent = "Esta opcion no existe"
  }

}
}
