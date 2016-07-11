jQuery(function($) {
  
		

	(function() {            
		var $pop = $('<div class="pop"></div>');   
	    $(".form-group").append($pop);
	    var $targetInput = $(".form-group input");



	    $($targetInput).hover(
		  function() {
		    if ($(this).attr("title") == "") {

				$(this).next('.pop').animate({
				    opacity: 1,
				    right: "-240px",
				    top: "28px",
				  }, 300 );
			} else {
				$(this).next('.pop').text($(this).attr("title")).animate({
				    opacity: 1,
				    right: "-240px",
				    top: "28px",
				  }, 300 ).text($(this).attr("title"));
		    	$(this).attr("title","");
			}

		  }, function() {
  			$(this).attr("title", $(this).next('.pop').text());
		  	$(this).next('.pop').animate({
				    opacity: 0,
				    right: "-440px",
				    top: "-28px",
				  }, 300 ).text("");
		  }
		);

		

	    $('.btn').on('click', function(e){ 
	    	  e.preventDefault();
		      $(".form-group input").each(function(){
	    		$(this).next('.pop').animate({
				    opacity: 1,
				    right: "-240px",
				    top: "28px",
				  }, 300 ).text($(this).attr("title"));
		      });
		});

		

		$($targetInput).focus(function() {
			if ($(this).attr("title") == "") {
				$(this).next('.pop').animate({
				    opacity: 1,
				    right: "-240px",
				    top: "28px",
				  }, 300 );
			} else {
				$(this).next('.pop').animate({
				    opacity: 1,
				    right: "-240px",
				    top: "28px",
				  }, 300 ).text($(this).attr("title"));
		    	$(this).attr("title","");
			}	
		});

	

	}());


});





	 
	 

	

	

	


   


   
    