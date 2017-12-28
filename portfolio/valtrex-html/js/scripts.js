jQuery(document).ready(function() {
	$(".shop a").hover(
  			function () {
    		$(this).children("span").slideUp();
  			},
		  function () {
			$(this).children("span").slideDown();
		  }
		);	
});