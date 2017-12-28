jQuery(document).ready(function() {
	$('.popap-shadow').css('opacity', '0.5');
	$('.player-shadow').css('opacity', '0.5');
		 $(".sidebar-bg4 .add-coment").click(function () {
	 		$(this).parents().find(".popap-outer").fadeIn("slow");	
	  });
	 
	 $(".popap-inner .add-coment").click(function () {
	 		$(this).parents().find(".popap-outer").fadeOut("slow");
	  });
	 
	 
	  $(".mobile .see").click(function () {
	 		$(this).parents().find(".player-outer").fadeIn("slow");	
	  });
	
	
});