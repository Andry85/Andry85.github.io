$(function() {
			$(".slide").jCarouselLite({
				btnNext: ".next",
				btnPrev: ".prew"	
			});
			
			
			
			
			
			
			
			$(".foto-slider-inner .slide ul li a").click(function(eventObject) {
										  
			$('.big-foto-bg3 img').hide().attr('src', $(this).attr('href'));
			$('.big-foto-bg3 img').load(function() {							  
				$(this).fadeIn(2000);							 
			 });
			
			
			
			eventObject.preventDefault();
						
		});
			
			
			
			
			
			
			
			
			
			
		});
