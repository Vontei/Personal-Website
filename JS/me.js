$(document).ready(function() {
  		

  		$(".tab").on("click", 'button', function() {
    	$(this).css({" background-color": "transparent"});
    	$(this).find(".sub").fadeToggle('fast');
  	});
  		$(".tab").on("click", function() {
    	$(this).css({" background-color": "transparent"});
    	$(this).find(".sub").fadeToggle('fast');
    });
  		
  

});





