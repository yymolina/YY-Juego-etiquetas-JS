window.onload = function() {

    var box = document.getElementById("box-answerd");

    function mostrarMesYDias() {
        var meses = [
          { nombre: "Enero", dias: 31 },
          { nombre: "Febrero", dias: 28 },
          { nombre: "Marzo", dias: 31 },
          { nombre: "Abril", dias: 30 },
          { nombre: "Mayo", dias: 31 },
          { nombre: "Junio", dias: 30 },
          { nombre: "Julio", dias: 31 },
          { nombre: "Agosto", dias: 31 },
          { nombre: "Septiembre", dias: 30 },
          { nombre: "Octubre", dias: 31 },
          { nombre: "Noviembre", dias: 30 },
          { nombre: "Diciembre", dias: 31 }
        ];
      
        var numeroMes = parseInt(prompt("Ingrese el número de mes (1-12):"));
      
        if (numeroMes >= 1 && numeroMes <= 12) {
          var mesSeleccionado = meses[numeroMes - 1];
          box.textContent = "El mes seleccionado es " + mesSeleccionado.nombre + " y tiene " + mesSeleccionado.dias + " días.";
        } else {
          box.textContent = "Número de mes inválido.";
        }
      }
      
      mostrarMesYDias();

}