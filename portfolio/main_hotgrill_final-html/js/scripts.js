$(document).ready(function() {
		$(".menu").NavDropDown();	

		$(".menu li").hover(
		  function () {
			$(this).children("span").css("visibility", "hidden");
			$(this).children("div").css('padding-bottom', '13px');
		  }, 
		  function () {
			$(this).children("span").css("visibility", "visible");
			$(this).children("div").css('padding-bottom', '0px');
		  }
		);
	});