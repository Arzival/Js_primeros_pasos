// --- el evento load me sirve para esperar a que primero cargue toda mi pagina ----

window.addEventListener("load", function () {
  var boton = document.querySelector("#boton");
  function cambiarColor() {
    var bg = boton.style.background;
    if (bg == "green") {
      boton.style.background = "red";
    } else {
      boton.style.background = "green";
    }
  }
  // ---- evento click ----
  boton.addEventListener("click", function () {
    cambiarColor();
  });

  // ---- mouse over ----

  boton.addEventListener("mouseover", function () {
    boton.style.background = "#ccc";
  });

  // ---- mouse out ----

  boton.addEventListener("mouseout", function () {
    boton.style.background = "white";
  });

  // --- focus ----
  var input = document.querySelector("#nombre");
  input.addEventListener("focus", function () {
    console.log("foco en input");
  });

  // --- blur ---
  var input = document.querySelector("#nombre");
  input.addEventListener("blur", function () {
    console.log("fuera del input");
  });

  // --- keydown ---
  var input = document.querySelector("#nombre");
  input.addEventListener("keydown", function (event) {
    console.log("pulsando la tecla ", String.fromCharCode(event.keyCode));
  });

  // --- keypress ---
  var input = document.querySelector("#nombre");
  input.addEventListener("keypress", function (event) {
    console.log("tecla presionada ", String.fromCharCode(event.keyCode));
  });

  // --- keyup ----
  var input = document.querySelector("#nombre");
  input.addEventListener("keyup", function (event) {
    console.log("tecla levantada ", String.fromCharCode(event.keyCode));
  });
}); // fin de el load
