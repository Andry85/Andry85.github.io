$(function(){

		
	

	


	

	$( ".btn" ).on( "click", function(event) {
  		event.preventDefault();
  		
  		var valuetext = $('#textInput').val();

  		if ( $('#textInput').val() == '' ) {
			$('.list').hide();
			$('#images').text('Введите запрос в поле поиска');
		} else {

	  		$.ajax({
			  url: "https://pixabay.com/api/?key=2953875-64107f3e4a827b9cba547e216&q="+ valuetext +"&image_type=all",
			  dataType : "jsonp",    
		      success: function (data) {
		           

		            var images = document.getElementById("images");
		    		images.innerHTML = tmpl("pics", data);
		        }
			  });

  		}
  		

	});

	$(document).keypress(function(e){
		if(e.which == 13) {

			
			var valuetext = $('#textInput').val();

	  		if ( $('#textInput').val() == '' ) {
				$('.list').hide();
				$('#images').text('Введите запрос в поле поиска');
			} else {

		  		$.ajax({
				  url: "https://pixabay.com/api/?key=2953875-64107f3e4a827b9cba547e216&q="+ valuetext +"&image_type=all",
				  dataType : "jsonp",    
			      success: function (data) {
			           

			            var images = document.getElementById("images");
			    		images.innerHTML = tmpl("pics", data);
			        }
				  });

	  		}


    	}
	    
	});






	

	
	

	

	




  


});