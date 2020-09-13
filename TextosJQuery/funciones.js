$(document).ready(function () {
  reloadLinks();
  $("#add_button").click(function () {
    $("#lista").prepend('<li><a href="' + $("#add_link").val() + '"></a></li>');
    reloadLinks();
  });
});

function reloadLinks() {
  $("a").each(function (index) {
    //each me ayuda a recorrer un elemento
    var that = $(this);
    var enlace = that.attr("href"); //attr me ayuda a obtener el texto que tiene dentro mi elemento
    that.attr('target','_blank')
    that.text(enlace);
  });
}
