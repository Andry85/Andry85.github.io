jQuery(document).ready(function() {	
	
	jQuery('.men').NavDropDown();
	jQuery(".menu li").hover(
		  function () {
			jQuery(this).children(".sub-wrap1").css('padding-bottom', '10px');
		  }, 
		  function () {
			jQuery(this).children(".sub-wrap1").css('padding-bottom', '0px');
		  }
		);
	});
