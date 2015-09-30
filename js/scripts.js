$(document).ready(function(){

  console.log("1");

  $("#add").click(function(e) {
    e.preventDefault();

    console.log("2");

    console.log($("#entry").val());

    $("#things").append('<li>' + $("#entry").val() + '</li>');

    console.log("3");

    $('#entry').val('');

    var count = $('#things li').length;

    $('#taskcount').html(count);

  });

  $("#clear").click(function(e) {
    e.preventDefault();

    $('#things').html('');
    $('#taskcount').html(0);    

  });

  $("#complete").click(function(e) {
    e.preventDefault();

  });


});
