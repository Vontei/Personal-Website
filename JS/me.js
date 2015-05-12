
$(document).ready(function() {
  
  $('button').on('click', function () {
    $(this).closest('.button-block').find('.row').slideToggle('swing');
  });
});






