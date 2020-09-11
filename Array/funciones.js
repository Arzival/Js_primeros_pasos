// introducir elmentos a un arrya

// var peliculas = [];
// var elemento = "";

// do {
//   elemento = prompt("Introduce una pelicula");
//   peliculas.push(elemento);
// } while (elemento != "acabar");
// peliculas.pop();
// console.log(peliculas);

//---------------------------------------------------------

//Recorrer un array  con for in

// var lengunajes = ["php", "js"];
// document.write("<ul>");

// for (let lenguaje in lengunajes) {
//   document.write("<li>" + lengunajes[lenguaje] + "</li>");
// }
// document.write("</ul>");

//--------------------------------------------------------

//---Declarar el array---
var numeros = new Array(6);

//---Funcion para mostrar el array en pantalla---
function mostrarArray(elementos, texto) {
  document.write("<ul>");
  document.write("<h1>Contenido del Array " + texto + "</h1>");
  elementos.forEach((elemento, index) => {
    document.write("<li>" + elemento + "</li>");
  });
  document.write("</ul>");
}

//---Pedir los numeros al usuario---
for (let index = 0; index < 6; index++) {
  numeros[index] = parseInt(prompt("Introduce un numero:", 0));
  numeros.push();
}

//-- mostrar array mediante la funcion--
mostrarArray(numeros, "normal");

//-- mostrar el array ordenado--
numeros.sort();
mostrarArray(numeros, "ordenado");

// -- invertir los numero--

numeros.reverse();
mostrarArray(numeros, "reverso");

// -- contar el numero total de elmentos--

document.write("<h2>El array tiene " + numeros.length + "</h2>");

// --buscar un numero--

var buscar = parseInt(prompt("Busca un numero", 0));
var buscado = numeros.findIndex(numero => numero == buscar);

if (buscado && buscado != -1) {
  document.write("<h2>Numero encontrado en la posicion " + buscado+"</h2>");
}else{
    document.write("<h2>Numero no encontrado </h2>");
}
