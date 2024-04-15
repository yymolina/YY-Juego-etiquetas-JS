window.onload = function() {

    var box = document.getElementById("box-answerd");

    let max
    let msg = " ";
    max = parseInt(prompt("Teclear un número entero"));
    for(i = max; i > 0;  i--)
    {
    msg += i + ", ";
    }
    msg += i;   
    box.textContent = (msg);

}