jQuery(function($) {
  
		

	(function appendText() {            
		var $pop = $('<div class="pop"></div>');   
	    $(".form-group").append($pop);
	    $("#exampleInputName").next('.pop').text('Please provide your firstname');
	    $("#exampleInputLastName").next('.pop').text('Please provide also your lastname');
	    $("#exampleInputAddress").next('.pop').text('Your home or work adress');

	    var $target = $(".form-group input");

	    $($target).hover(
		  function() {
		    $(this).next('.pop').animate({
				    top: "28px",
				    opacity: 1
				  }, 500 );

		  }, function() {

		  	$(this).next('.pop').animate({
				    top: "-28px",
				    opacity: 0
				  }, 500 );
		   
		  }
		);

	    $('.btn').on('click', function(e){
			e.preventDefault();
			$('.pop').animate({
				    top: "28px",
				    opacity: 1
				  }, 500 );

			
		});

		$($target).focus(function() {
			$(this).next('.pop').animate({
				    top: "28px",
				    opacity: 1
				  }, 500 );
		});

		$($target).blur(function() {
			$(this).next('.pop').animate({
				    top: "-28px",
				    opacity: 0
				  }, 500 );
		});



	}());


});





	 
	 

	

	

	


   


   
    