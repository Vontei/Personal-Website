$(document).ready(function () {
	$('.nick').on('mouseenter', function () {
		$(this).addClass('highlight');
	});
	$('.nick').on('mouseleave', function () {
		$(this).removeClass('highlight');
	
	});
});


$(document).ready(function () {
	$('.welcome-block').on('mouseenter', '.nick' , function  () {
		$(this).animate({'top': "10px"});

	});
});