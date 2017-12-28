jQuery(document).ready(function() {	
	
	
	jQuery('.men').NavDropDown();
	
	
	jQuery(".list li .obg:not(:first)").hide();

	jQuery(".list li a").click(function(){
		jQuery(this).next(".obg").slideToggle('slow');
		return false;
	});
	
	jQuery('.popap-shadow').css('opacity', '0.8');
	jQuery('.popap-shadow-login').css('opacity', '0.8');
	
	
	jQuery(".left-part a.more.vopros").click(function () {
				jQuery(this).parents().find(".popap-outer").fadeIn(500);
				jQuery(this).parents().find(".popap-outer").children().fadeIn(500);		
		  });
	
	
	jQuery(document).keyup(function(event){
				if (event.keyCode == 27) {
					jQuery(".popap-outer").fadeOut();	
				}
			});	


	jQuery(".inn a").click(function () {
				jQuery(this).parents().find(".popap-outer-login").fadeIn(500);
				jQuery(this).parents().find(".popap-outer-login").children().fadeIn(500);		
		  });
	
		jQuery(document).keyup(function(event){
				if (event.keyCode == 27) {
					jQuery(".popap-outer-login").fadeOut();	
				}
			});	
		
		
		jQuery(".popap-shadow-login").click(function () {
				jQuery(this).fadeOut(500);
				jQuery(this).next(".popap-wrap-login").fadeOut(500);
				jQuery(this).parent(".popap-outer-login").fadeOut(500);
						
		  });
		
		jQuery(".popap-shadow-login").dblclick(function () {
				jQuery(this).fadeOut(500);
				jQuery(this).next(".popap-wrap-login").fadeOut(500);
				jQuery(this).parent(".popap-outer-login").fadeOut(500);
						
		  });
		
		
		jQuery(".popap-shadow").click(function () {
				jQuery(this).fadeOut(500);
				jQuery(this).next(".popap-wrap").fadeOut(500);
				jQuery(this).parent(".popap-outer").fadeOut(500);
						
		  });
		
		jQuery(".popap-shadow").dblclick(function () {
				jQuery(this).fadeOut(500);
				jQuery(this).next(".popap-wrap").fadeOut(500);
				jQuery(this).parent(".popap-outer").fadeOut(500);
						
		  });
		
		
			jQuery(".social a span").hide();
			
			jQuery(".social a").hover(
				  function () {
					jQuery(this).children("span").fadeIn("slow");
				  },
			
					function () {
				jQuery(this).children("span").fadeOut("slow");
			  }
			);
			
	
	});
