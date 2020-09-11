/*function play() {
  var max = 11;
  var min = 1;
  var cant_intentos = 3;
  var acerto = false;
  var numeroCorrecto = Math.round(Math.random() * (max - min) + min);
  var numeroIngresado;

  var nombre = document.getElementById("nombre").value;

  if (nombre == "") {
    alert("Por favor, ingrese su  nombre para JUGAR");
  } else {
    while (cant_intentos > 0 && acerto != true) {
      cant_intentos--;
      numeroIngresado = parseInt(prompt("Ingrese el número"));
      if (numeroIngresado == numeroCorrecto) {
        alert("EUREKA!!");
        acerto = true;
      } else if (numeroIngresado < numeroCorrecto) {
        alert("PISTA: es mayor");
      } else if (numeroIngresado > numeroCorrecto) {
        alert("PISTA: es menor");
      } else {
        alert("Le quedan " + cant_intentos + " intentos");
      }
    }

    document.getElementById("rdo").innerHTML =
      "El número era: <strong>" + numeroCorrecto + "</strong>";
  }
}*/

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
        alert("¡Excelente! " + nombre + " ¡Haz menorizado la tabla muy bien!");
        acerto = true;
      } else if (intentos == 2) {
        alert(
          "¡Vamos! " +
            nombre +
            " ¡No te desanimes! Aquí va una pista: Es el animal mas grande que aparece en la tabla!"
        );
        alert("Le quedan " + intentos + " intentos!");
      } else if (intentos == 1) {
        alert("Aquí va la ultima pista: No siempre camina en cuatro patas!");
      } else {
        alert("Lo sentimos " + nombre + " perdiste.");
      }
    }
    document.getElementById("rdo").innerHTML =
      "El animal era el: <strong>" + respCorrecta + "</strong>";
  }
}
