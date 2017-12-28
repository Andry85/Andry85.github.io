$(function() {
			$(".slide").jCarouselLite({
				btnNext: ".next",
				btnPrev: ".prew"
			});
			
			
			$(".table table tr").hover(
			  function () {
				$(this).addClass("even");
			  }, 
			  function () {
				$(this).removeClass("even");
			  }
			);


			
		});