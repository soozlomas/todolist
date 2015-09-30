$(document).ready(function(){

  var itemnumber = 0;

  console.log("1");

  $("#add").click(function(a) {
    a.preventDefault();

    itemnumber += 1;

    var listItem =  '<li><span id="changeitem">' + $("#entry").val() +
                    '</span><button id="remove' + itemnumber + '">remove</button>' +
                    '<button id="edit' + itemnumber + '">edit</button>';

    $("#things").append(listItem);

    updateCount();

    $('#entry').val('');


    $('#remove' + itemnumber).click(function(a) {
      $(a.currentTarget.parentNode).remove();
      updateCount();

    });

    $('#edit' + itemnumber).click(function(a) {
      $(a.currentTarget.parentNode).remove();

    });

    function updateCount() {
      var count = $('#things li').length;
      $('#taskcount').html(count);
    }

  });


  $('#clear').click(function() {

    $('#things').html('');
    $('#taskcount').html(0);

  });

  $('#complete').click(function(e) {
    e.preventDefault();

  });


});
