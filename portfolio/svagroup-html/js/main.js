// JavaScript Document
$(document).ready( function(){
	/* PIE */
	if (window.PIE) {
		$('.licenses ul li a figure img,.reviews figure img,.meter img').each(function() {
		PIE.attach(this);
		});
	}
	
	$('#nav ul li:last-child').css('padding','0');
	$('#nav ul li:last-child').css('background','none');
	
	$('#nav ul li:last-child a').css('width','96px');
	
	
	$('.licenses ul li:odd').css('margin','0');
	
	
	$(".client-list li").hover(
      function () {
        $(this).addClass("cur");
      },
      function () {
        $(this).removeClass("cur");
      }
    );
	
	
	
	
	$(".accordion-list li:first").addClass("activ");
	$(".accordion-list li .li-inner .more-text:not(:first)").hide();

	$(".accordion-list li .li-inner h3").click(function(){
		$(this).next(".more-text").slideToggle("slow").parents("li").siblings().find(".more-text:visible").slideUp("slow");
		$(this).parents("li").toggleClass("activ");
		$(this).parents("li").siblings().removeClass("activ");
	});
	
	
		
	$("#mycarousel li a img").click(function(){
	
		$(this).toggleClass("activ");
		$(this).parents("li").siblings().find("img").removeClass("activ");
		 
	});	
		
	

	$(".slid ul li a").click(function(){
	
		var largePath = $(this).attr("href");
		$("#largeImg").attr({ src: largePath });
		 return false;
 
	});

	
	$('#verticalslide li:even').css('background-color','#f3f8fb');
	

	


});
//end ready

