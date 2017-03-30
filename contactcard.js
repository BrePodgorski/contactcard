$(document).ready(function(){

  $('#submit').click(function(){
    $('#new').append("<div class='cards'><h3>" + $('#first').val() + " "+ $('#last').val() + "</h3><p>" + "Click here for a small description" + "</p><p class='hidden'>" + $("#description").val() + "</p></div>")
    // $('#second').append('<div class="cards">')
    console.log("hi");

    $('#first').val("");
    $('#last').val("");
    $('#description').val("");

    return false;

  })

    $(document).on('click', '.cards', function(){
      $(this).children().toggle()

    // $('.card').click(function(){
    //   // $('.card').toggle(("#description").val());
    // $('.card').toggle("<p>" + $('#description').val() + "</p>");
    // }
    // $(document).on('click')



  });



});
