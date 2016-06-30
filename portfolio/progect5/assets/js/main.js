// JavaScript Document
$(document).ready( function(){
	
	$(".nav li a").click(function(){
		var selected = $(this).attr('href');	
		$.scrollTo(selected, 1000);		
		return false;
	});	
	
	
	$(".certificates-list li a").fancybox();
	
	$('.popap-shadow').css('opacity', '0.8');
	
	
	$('.popap-shadow').css('opacity', '0.9');
		
		
		
		
		$(".zakaz").click(function () {
	   		$(this).parents().find(".popap-outer").fadeIn("slow");
	  	});
		
		$(".cl").click(function () {
	   		$(this).parents().find(".popap-outer").fadeOut("slow");
	  	});
		
		$(document).keyup(function(event){
			if (event.keyCode == 27) {
				$(".popap-outer").fadeOut();	
			}
		});	
		
	
	
	


});
//end ready

