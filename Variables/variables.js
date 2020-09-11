
//varibles con var son globales y se van actualizando en todo el codigo
var pais = "Mexico";
var continente = "America";
var paisYContinente = pais +' '+continente;
console.log(paisYContinente);

//variables con Let actuan a nivel de bloque, tiene alcance limitado

if (pais == "Mexico" && continente == "America") {
    alert("hola mundo");
} 

