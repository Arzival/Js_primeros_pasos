$(document).ready(function () {
  // mover elemento por la pagina
  $(".elemento").draggable();
  // redimencionar
  $(".elemento").resizable();

  // seleccionar elementos y ordenar
  //$('.lista').selectable();
  $('.lista').sortable({
    update: function(event,ui){
      console.log('la lista cambio');
    }
  });
});
