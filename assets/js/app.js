$(document).ready(function(){

  "use strict";

  /* additional options toggle */
  
  additionalOptionsToggle();
  

});

function additionalOptionsToggle(){
  $('button.additional').on('click', function(e){
    e.stopPropagation();
  });

  $('.additional_btn').on("click", function () {
    
    $(this).toggleClass('opened');

    $('.c-search_form__additional').slideToggle(300);


  });



}

