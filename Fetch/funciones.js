var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

getUsers()
  .then((data) => data.json()) // aqui traigo los datos
  .then((users) => {
    listadosUsuarios(users.data); // funcion para poder mostrar los datos
    return getJanet(); // return a mi segunda funcion para hacer la promesa
  })
  .then((data) => data.json()) //  sacar los datos de juana
  .then((janet) => {
    mostrarJanet(janet.data);
  })
  .catch(error => { // es para capturar errores
    console.log(error);
  });

function getUsers() {
  return fetch("https://reqres.in/api/users"); //aqui va la api a la que me conecto
}

function getJanet() {
  return fetch("https://reqres.in/api/users/2");
}

function listadosUsuarios(usuarios) {
  usuarios.map((users, i) => {
    // este es un ciclo para ir sacando los datos de cada user
    let nombre = document.createElement("h2");
    nombre.innerHTML =
      i + users.first_name + " " + users.last_name + " " + users.email;
    div_usuarios.appendChild(nombre);
  });
}

function mostrarJanet(usuario) {
  //como es el dato de una sola persona no se hace el map
  let nombre = document.createElement("h2");
  let avatar = document.createElement("img");

  avatar.src = usuario.avatar;

  nombre.innerHTML = usuario.first_name + " " + usuario.last_name;
  div_janet.appendChild(nombre);
  div_janet.appendChild(avatar);
}
