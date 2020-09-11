window.addEventListener("load", function () {
  // --- timers ---

  function intervalo() {
    var tiempo = setInterval(function () {
      console.log("set interval ejecutando");

      var encabezado = document.querySelector("h1");

      if (encabezado.style.fontSize == "50px") {
        encabezado.style.fontSize = "45px";
      } else {
        encabezado.style.fontSize = "50px";
      }
    }, 100);

    return tiempo;
  }

  var tiempo = intervalo();

  var stop = document.querySelector("#stop");
  stop.addEventListener("click", function () {
    clearInterval(tiempo);
  });

  var go = document.querySelector("#go");
  go.addEventListener("click", function () {
    tiempo = intervalo();
  });
});
