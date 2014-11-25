$(document).ready(function(){
  $('#portfolio-view').click(function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#skills').offset().top -10
    }, 1200);
  });

});
