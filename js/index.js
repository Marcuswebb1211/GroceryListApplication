const menu = document.querySelector('.menu');

$('.fa-bars').on("click", function() { 
    if (menu.style.display !== "block") {
      // in plain javascript: menu.style.display = "block";
      $('.menu').slideDown(500).show();
    } else {
      //  in plain javascript: menu.style.display = "none";
      $('.menu').slideUp().hide(500);
    }  
}); // end event handler


// Get the modal
let $modal = $('#myModal');

// Get the button that opens the modal
let $addNewBtn = $('.addNew i');

// Get the <span> element that closes the modal
let $span = $('.close');

// Get the <a> tag that closes the modal
let $cancel = $('.cancel-btn');

// When the user clicks the button, open the modal 
$addNewBtn.on("click", function() {
  $modal.fadeIn(500).css("display", "block");
});

// When the user clicks on <span> (x) or the cancel button, close the modal
$span.on("click", function() {
    $modal.fadeOut(500).css("display", "none");
});
$cancel.on("click", function() {
  $modal.fadeOut(500).css("display", "none");
});

// When the user clicks anywhere outside of the modal, close it
$(window).on("click", function(event) {
  if (event.target == $modal) {
    $modal.css("display", "none");
  }
});