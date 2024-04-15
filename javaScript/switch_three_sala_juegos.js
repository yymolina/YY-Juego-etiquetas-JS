window.onload = function() {
    
    var box = document.getElementById("box-answerd");

    let creditos, acceso='Salas: ';
    creditos = parseInt(prompt("¿Cuántos créditos vas a pagar? \nCreditos disponible: \n1)Realidad virtual, Juegos 3D, Juegos 2D, Consolas \n2)Realidad virtual, Juegos 3D, Juegos 2D \n3)Realidad virtual, Juegos 3D \n4)Realidad virtual"));
    switch (creditos){
        case 1:
            acceso += "Realidad Virtual, ";
        case 2:
            acceso += "Juegos 3D, ";
        case 3:
            acceso += "Juegos 2D, ";
        case 4:
            acceso += "Consolas ";
            break;
        default:
            acceso += "Ninguna";
    }
    box.textContent = "Usted a elegido disfrutar de las " + acceso;

}