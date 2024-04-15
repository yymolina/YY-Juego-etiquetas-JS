window.onload = function() {

    var box = document.getElementById("box-answerd");

    let msg='';
    let letra = prompt("Escriba una letra");
    let veces= parseInt(prompt("Escriba un entero"));
    for(i = 0; i < veces; i++)
    {
    msg += letra;
    }
    box.textContent = (msg);
}