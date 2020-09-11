function play() {
  var respCorrecta = "oso";
  var intentos = 3;
  var acerto = false;
  var pregunta;
  var nombre = document.getElementById("nombre").value;

  if (nombre == "") {
    alert("¡Recuerda que debes ingresar tu nombre para continuar!");
  } else {
    while (intentos > 0 && acerto != true) {
      pregunta = prompt("¿Que animál da como botín -Una GARRA-?");
      intentos--;
      if (pregunta.toLowerCase() == respCorrecta) {
        alert(
          "¡Excelente! " +
            nombre.toUpperCase() +
            " ¡Haz menorizado la tabla muy bien!"
        );
        acerto = true;
      } else if (intentos == 2) {
        alert(
          "¡Vamos! " +
            nombre.toUpperCase() +
            " ¡No te desanimes! Aquí va una pista: Es el animal mas grande que aparece en la tabla!"
        );
        alert("Le quedan " + intentos + " intentos!");
      } else if (intentos == 1) {
        alert("Aquí va la ultima pista: No siempre camina en cuatro patas!");
      } else {
        alert("Lo sentimos " + nombre.toUpperCase() + " perdiste.");
      }
    }
    document.getElementById("rdo").innerHTML =
      "El animal era el: <strong>" + respCorrecta + "</strong>";
  }
}
