$(function() {
   
	
		
	$('.popap-title').css('opacity', '0.5');
	$('.popap-inner').css('opacity', '0.5');
	$('#tabs li.activ .li-inner').css('opacity', '0.8');
	
		
		
	$("#tabs li").hover(
      function () {
        $(this).children(".popap-outer").fadeIn("slow");
      },
      function () {
        $(this).children(".popap-outer").fadeOut("slow");
      }
    );
	

	
	
	$(".more").click(function(){
		$(this).prevAll(".more-info").slideToggle(2000);
		$(this).toggleClass("activ");
		return false;
	});
	
	
});




(function($) {
		$(function() {
		
			$('#tabs').delegate('li:not(.activ)', 'click', function() {
				$(this).addClass('activ').siblings().removeClass('activ')
					.parents('div.content').find('div.tab-box').hide().eq($(this).index()).fadeIn(150);
				$(this).parents('div.content').find('div.text').fadeOut("fast");
				$(this).children('.popap-outer').fadeOut("fast");
				
			});
			
			
		
		
		})
		})(jQuery)



