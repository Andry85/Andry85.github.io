jQuery(function(){
	jQuery('ul.sf-menu').superfish();
	
	if (!$.browser.opera) {
    
			// select element styling
			$('select.select').each(function(){
				var title = $(this).attr('title');
				if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
				$(this)
					.css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
					.after('<span class="select">' + title + '</span>')
					.change(function(){
						val = $('option:selected',this).text();
						$(this).next().text(val);
						})
			});

		};
		
		
		$(".scenes table tr td .pico .com").hide();
		$(".scenes table tr td .pico .com-first").show();
		$(".hide-smoll").hide();
		$(".scenes table tr td .pico a").hover(
			  function () {
				$(this).next(".hide-smoll").fadeIn("slow");
				$(this).prevAll(".com").fadeIn("slow");
			  });
		
		$(".hide-smoll").mouseout(function(){
				$(this).fadeOut("slow");	
				$(this).prevAll(".com").fadeOut("slow");
			
		 });
		
		$(".hide-big").hide();
		
		$(".scenes table tr td .pico-first a").hover(
			  function () {
				$(this).next(".hide-big").fadeIn("slow");
			  });
		
		$(".hide-big").mouseout(function(){
				$(this).fadeOut("slow");	
		 });	
		
		$(".come-hd a").click(function () {
			$(this).parents().find(".popap-outer").fadeIn("slow");
		  });
		
		
		$(".close").click(function () {
			$(this).parents().find(".popap-outer").fadeOut("slow");
		  });
		
		
		$(document).keyup(function(event){
				if (event.keyCode == 27) {
					$(".popap-outer").fadeOut("slow");	
				}
			});	
			
});