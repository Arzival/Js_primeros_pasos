function cambiaColor(color) {
  caja.style.backgroundColor = color;
}

// --- conseguir elementos con el id----

// var caja = document.getElementById("micaja");
// var caja = document.querySelector("#micaja");
// caja.innerHTML = "Texto en la caja desde Js";

//---Conseguir elementos por las etiquetas-----

var todosLosDivs = document.getElementsByTagName("div");
// var contenidoEnTexto = todosLosDivs[2];
// contenidoEnTexto.innerHTML = "otro texto de un elemento";
var valor;
for (valor in todosLosDivs) {
  if (typeof todosLosDivs[valor].textContent == "string") {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
  }
}

//---conseguir elmentos por sus clases---

var divsRojos = document.getElementsByClassName("rojo");
var div;
for ( div in divsRojos) {
  if (divsRojos[div].className == "rojo") {
    divsRojos[div].style.background = "red";
  }
}

//----conseguir elementos por el query selector----

var id = document.querySelector("#encabezado");
console.log(id);