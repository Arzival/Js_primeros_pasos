$(document).ready(function () {
  // load
  //$("#datos").load("https://reqres.in/");
  //get y post
  // $.get("https://reqres.in/api/users", { page: 2 }, function (response) {
  //   console.log(response);
  //   response.data.forEach((element, index) => {
  //     $("#datos").append("<p>" + element.first_name + "</p>");
  //   });
  // });
  $.ajax({
    type: "GET",
    url:"https://reqres.in/api/users?page=2",
    success:  (response) => {
        console.log(response);
        response.data.forEach(element => {
          $("#datos").append("<p>" + element.first_name + "</p>");
        });
    }
});

  $("#formulario").submit(function (e) {
    e.preventDefault();
    var url = $(this).attr("action");
    var usuario = {
      name: $('input[name="user"]').val(),
      web: $('input[name="web"]').val(),
    };

    // $.post(url, usuario, function (response) {
    //   console.log(response);
    // }).done(function () {
    //   alert("user regustradi");
    // });
    
    $.ajax({
        type: "POST",
        url: url,
        data: usuario,
        success:(response)=> {
            console.log(response);
        }
    });
    return false;
  });
});
