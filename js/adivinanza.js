function jugar_ahora() {
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
}

function play() {
  var correcta1 = "Caiman";
  var correcta2 = "Lobo";
  var correcta3 = "Oso";
  var cant_intentos = 3;
}
