$(document).ready(function () {
  // selector de id
  var parrafo1 = $("#parrafo1").css("background", "red").css("color", "blue");

  console.log(parrafo1);

  // selector por clase

  var parrafos = $(".zebra");
  parrafos.css("border", "5px dashed black");

  $(".sin_borde").click(function () {
    $(this).css("border", "5px dashed black"); // con una clase de css seria .addClass(nombre de la clase css)
  });
});
