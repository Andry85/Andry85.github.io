$(function(){
$('.top-nav').find('li').find('a').click(function(){
		$(this).parent().addClass('currernt');
		$(this).parent().siblings().removeClass('currernt');		
	});



$(".tags").hide();
		$(".heading-wrapper-second").click(function(){
			$(this).next(".tags").slideToggle("slow");
			
			$(this).toggleClass("active");
			$(this).children("div").toggle();
		
		});
	
	
	

$(".heading-wrapper-third").click(function(){
			$(this).next(".slid").slideToggle("slow");
			$(this).toggleClass("active");

		});


$(".arrow").click(function(){
			$(this).parent().next(".block-outer-wrap").slideToggle("slow");
			$(this).toggleClass("arrowiactiv");

		});




	 $(".links li a.a1").click(function () {
	 		$(this).parents().parents().parents().parents().find(".popap-outer").fadeIn("slow");
			$(this).parents().parents().parents().parents().find(".popap-outer").children().fadeIn("slow");
			
	  });
	 
	 
	   $(".clos").click(function () {
	   		$(this).parents().parents().parents().parents().parents(".popap-wrap").fadeOut("slow");
			$(this).parents().parents().parents().parents().parents(".popap-wrap").prev().fadeOut("slow");
			$(this).parents().parents().parents().parents().parents().parents(".popap-outer").fadeOut("slow");
			

	  });


	$(".links li a.a2").click(function () {
	 		$(this).parents().parents().parents().parents().find(".popap-outer-seocnd").fadeIn("slow");
			$(this).parents().parents().parents().parents().find(".popap-outer-seocnd").children().fadeIn("slow");
			
	  });
	 
	 
	   $(".closs").click(function () {
	   		$(this).parents().parents().parents().parents().parents(".popap-wrap-seocnd").fadeOut("slow");
			$(this).parents().parents().parents().parents().parents(".popap-wrap-seocnd").prev().fadeOut("slow");
			$(this).parents().parents().parents().parents().parents().parents(".popap-outer-seocnd").fadeOut("slow");
			

	  });
	   
	   
	  $(".closss").click(function () {
	   		$(this).parents().parents().parents().parents().parents(".popap-wrap-third").fadeOut("slow");
			$(this).parents().parents().parents().parents().parents(".popap-wrap-third").prev().fadeOut("slow");
			$(this).parents().parents().parents().parents().parents().parents(".popap-outer-third").fadeOut("slow");
			

	  });
	   
	   

	$(".pass").click(function () {
	   		$(this).parents().parents().parents().parents().parents().parents(".popap-wrap-seocnd").fadeOut("slow");
			$(this).parents().parents().parents().parents().parents().parents().parents(".popap-wrap-seocnd").prev().fadeOut("slow");
			$(this).parents().parents().parents().parents().parents().parents().parents().parents(".popap-outer-seocnd").fadeOut("slow");
			$(this).parents().parents().parents().parents().parents().parents().parents().find(".popap-outer-third").fadeIn("slow");
			$(this).parents().parents().parents().parents().parents().parents().parents().find(".popap-outer-third").children().fadeIn("slow");
			

	  });

	 $(".block-top .pl a").click(function () {
	 		$(this).parents().parents().parents().parents().find(".cap-outer").fadeIn("slow");
			$(this).parents().parents().parents().parents().find(".cap-outer").children().fadeIn("slow");
			
	  });
	 

	 $(".block-top .second a").click(function () {
	 		$(this).parents().parents().parents().parents().find(".cap-outer").fadeIn("slow");
			$(this).parents().parents().parents().parents().find(".cap-outer").children().fadeIn("slow");
			
	  });
	 
	  $(".cl").click(function () {
	   		$(this).parents().prev(".cap-shadow").fadeOut("slow");
			$(this).parents().parents(".cap-outer").fadeOut("slow");
			

	  });




	$('.cap-shadow').css('opacity', '0.6')
	$('.popap-shadow').css('opacity', '0.8')
	$('.popap-shadow-seocnd').css('opacity', '0.8')
	$('.popap-shadow-third').css('opacity', '0.8')
	
	
	
	
	
	$(".slid-preambule p").hide();
		$(".plashka").click(function(){
			$(this).prev("p").slideToggle("slow");	
			$(this).toggleClass("act");
			
		});
		
		
		
		
		$(".down-outer-bottom-bg1").hide();
		$(".down-outer-top-heading").click(function(){
			$(this).parents().next(".down-outer-bottom-bg1").slideToggle("slow");
			$(this).toggleClass("cu");
			
		
		});
		
		
		
		
		$(".arrow-sec").click(function(){
			$(this).parent().next(".slid").slideToggle("slow");
			$(this).toggleClass("arrowiactiv");

		});
		
	
	
	
	$(".tickets").click(function(){
			$(this).next().next(".ticked-outer").slideToggle("slow");
		});


});


	(function($) {
		$(function() {
		
			$('#heading ul').delegate('li:not(.curr)', 'click', function() {
				$(this).addClass('curr').siblings().removeClass('curr')
					.parents('div.content-bg4').find('div.block-outer ').hide().eq($(this).index()).fadeIn(150);
			})
		
		})
		})(jQuery)