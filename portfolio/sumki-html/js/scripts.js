$(document).ready(function(){
$(".small-photo li a ").click(function(eventObject) {
										  
			$('.big-pic a img').hide().attr('src', $(this).attr('href'));
			$('.big-pic a img').load(function() {							  
				$(this).fadeIn(2000);							 
			 });
			
			$(this).parent().addClass('cur');
			$(this).parent().siblings().removeClass('cur');
			eventObject.preventDefault();				
		});

});