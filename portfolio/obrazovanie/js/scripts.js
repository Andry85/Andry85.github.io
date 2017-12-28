$(document).ready(function() {


		$('.sub').css('opacity', '0.9')
		$(".menu li").hover(
		  function () {
			$(this).children("div").css('padding-top', '10px');
		  }, 
		  function () {
			$(this).children("div").css('padding-top', '0px');
		  }
		);
		
		$('.menu').NavDropDown();	


		
	});