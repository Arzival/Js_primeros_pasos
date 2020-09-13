$(document).ready(function () {
  $("#mostrar").click(function () {
    $("#caja").fadeIn('normal');
  });

  $("#ocultar").click(function () {
    $("#caja").fadeOut('normal');
  });

  var caja = document.querySelector('#caja');
  caja.addEventListener("mouseover", function () {
    $("#caja").fadeOut('normal');
  });

  caja.addEventListener("mouseout", function () {
    $("#caja").fadeIn('slow');
  });
});
