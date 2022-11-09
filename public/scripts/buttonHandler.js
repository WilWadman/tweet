$(document).ready(function () {
  // --- our code goes here ---

  $("form").submit(function (event) {
   event.preventDefault();
   
   let serial = $(this).serialize();
   console.log(serial);
  $.post( '/tweets' , serial)
    
  
    })
  })

 