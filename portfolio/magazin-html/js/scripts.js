$(document).ready(function(){
			$('#one').jqGalScroll();
			
			
			$(".popap-shadow").css({ opacity: 0.6 });
			
			$(".price-big").click(function () {
				$(this).parents().find(".letter-outer").fadeIn("slow");
		  	});
			
			$(".popap-shadow").click(function () {
				$(this).parents().find(".letter-outer").fadeOut("slow");
		  	});
		
			$(document).keyup(function(event){
				if (event.keyCode == 27) {
					$(".letter-outer").fadeOut("slow");	
				}
			});	
			
			
			$(".slider-gallery li a").click(function(eventObject) {
										  
				$('.big a img').hide().attr('src', $(this).attr('href'));
				$('.big a img').load(function() {							  
					$(this).fadeIn(2000);							 
				 });
				
				
				$('.popap-wrap img').attr('src', $(this).attr('href'));
				$(this).parent().addClass('cur');
				
				
				eventObject.preventDefault();
							
			});
			
			
			
			
		});