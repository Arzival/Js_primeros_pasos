if (typeof Storage !== "undefined") {
  console.log("local storage disponible");
}

// --- guardar datos ---
localStorage.setItem("titulo", "armando es el mejor");

// --- recuperar un elemento ---

var titulo = localStorage.getItem("titulo");
document.querySelector("#test").innerHTML = titulo;

// --- guardar objetos ---

var usuario = {
  nombre: "Armando",
  mail: "armando.com",
  web: "armando.web",
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// --- recuperar objeto ---

var userJS = JSON.parse(localStorage.getItem("usuario")); // esto es para convertirlo en un string usable para js
document.querySelector("#test").append(" " + userJS.web);
localStorage.clear();
