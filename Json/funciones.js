var pelicula = {
  titulo: "batman",
  year: 2017,
  pais: "Estados Unidos",
};

var peliculas = [
  { titulo: "hola mundo", year: 2020, pais: "mexico" },
  pelicula,
];

var caja_peliculas = document.querySelector("#peliculas");

for (var index in peliculas) {
  var p = document.createElement("p");
  p.append(peliculas[index].titulo);
  caja_peliculas.append(p);
}
