$(document).ready(function(){
  $('#portfolio-view').click(function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#works').offset().top -10
    }, 1200);
  });

  $('#email').tooltip();

});
