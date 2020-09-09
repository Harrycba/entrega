function jugar_ahora() {
  var max = 11;
  var min = 1;
  var cant_intentos = 3;
  var acerto = false;
  var numero_aleatorio = Math.round(Math.random() * (max - min) + min);
  var numero;

  var nombre = document.getElementById("nombre").value;

  if (nombre == "") {
    alert("Por favor, ingrese su  nombre para JUGAR");
  } else {
    while (cant_intentos > 0 && acerto != true) {
      cant_intentos--;
      numero = parseInt(prompt("Ingrese el número"));
      if (numero == numero_aleatorio) {
        alert("EUREKA!!");
        acerto = true;
      } else if (numero < numero_aleatorio) {
        alert("PISTA: es mayor");
      } else if (numero > numero_aleatorio) {
        alert("PISTA: es menor");
      } else {
        alert("Le quedan " + cant_intentos + " intentos");
      }
    }

    document.getElementById("rdo").innerHTML =
      "El número era: <strong>" + numero_aleatorio + "</strong>";
  }
}

function play() {
  var correcta1 = "Caiman";
  var correcta2 = "Lobo";
  var correcta3 = "Oso";
  var cant_intentos = 3;
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
