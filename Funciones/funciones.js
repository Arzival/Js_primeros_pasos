function sumar() {
  var numero1 = Number(document.getElementById("numero1").value);
  var numero2 = Number(document.getElementById("numero2").value);
  var resultado = numero1 + numero2;
  document.getElementById("resultado").innerHTML = resultado;
}

function restar() {
  var numero1 = Number(document.getElementById("numero1").value);
  var numero2 = Number(document.getElementById("numero2").value);
  var resultado = numero1 - numero2;
  document.getElementById("resultado").innerHTML = resultado;
  
}

function multiplicar() {
  var numero1 = Number(document.getElementById("numero1").value);
  var numero2 = Number(document.getElementById("numero2").value);
  var resultado = numero1 * numero2;
  document.getElementById("resultado").innerHTML = resultado;
  
}

function dividir() {
  var numero1 = Number(document.getElementById("numero1").value);
  var numero2 = Number(document.getElementById("numero2").value);
  var resultado = numero1 / numero2;
  document.getElementById("resultado").innerHTML = resultado;
  
}
