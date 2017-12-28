$(document).ready(function(){
	
	$(".sidebar .nav li h3:first").addClass("active");
	$(".sidebar .nav li ul:not(:first)").hide();

	$(".sidebar .nav li h3").click(function(){
		$(this).next("ul").slideToggle("slow")
		.siblings("ul:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});
	
	
	
	$('.chek-outer').find('li').click(function(){
		$(this).addClass('activ');	
	});
	
	
	
	$('.small-foto a').hover(function(eventObject) {
										  
			$('.big a img').hide().attr('src', $(this).attr('href'));
			$('.big a img').load(function() {							  
				$(this).fadeIn(1000);							 
			 });
			
		eventObject.preventDefault();
						
	});
	

		$(".big a img").hover(
		  function () {
			$(this).parents().parents().children(".big-popap-bg").fadeIn("slow");
		  });
		
	
	$(".plashka").hide();
		$(".spravka").hover(
			  function () {
				$(this).next(".plashka").fadeIn("slow");
			  });
		
		$(".spravka").mouseout(function(){
				$(this).next(".plashka").fadeOut("slow");						
			
		 });
	
	
	
	
		$(".tex .spravka").hover(
			  function () {
				$(this).parents().next(".plashka").fadeIn("slow");
			  });
		
		$(".tex .spravka").mouseout(function(){
				$(this).parents().next(".plashka").fadeOut("slow");						
			
		 });
		
		
		
		$(".inside ul li a").click(
			  function () {
				$(this).next(".plashka").fadeIn("slow");
				return false;
			  });
		
		$(".inside ul li a").mouseout(function(){
				$(this).next(".plashka").fadeOut("slow");						
			
		 });
		
		
		
		$(".box h4 .spravka").hover(
			  function () {
				$(this).next(".plashka").fadeIn("slow");
			  });
		
		$(".box h4 .spravka").mouseout(function(){
				$(this).next(".plashka").fadeOut("slow");						
			
		 });
		
		
		
		$(".zakaz-body .arrow:last").addClass("activ");
		$(".zakaz-body  .slider:not(:first)").hide();
	
		$(".zakaz-body .arrow").click(function(){
			$(this).parents().parents().next(".slider").slideToggle("slow")
			.siblings(".slider:visible").slideUp("slow");
			$(this).toggleClass("activ");
			$(this).siblings(".arrow").removeClass("active");
		});
		
		
		$(".info .spravka").hover(
			  function () {
				$(this).parents().next(".plashka").fadeIn("slow");
			  });
		
		$(".info .spravka").mouseout(function(){
				$(this).parents().next(".plashka").fadeOut("slow");						
			
		 });
		
		
		$(".hea .spravka").hover(
			  function () {
				$(this).parents().next(".plashka").fadeIn("slow");
			  });
		
		$(".hea .spravka").mouseout(function(){
				$(this).parents().next(".plashka").fadeOut("slow");						
			
		 });
		
		$(".step-outer .inne-inside div p .spravka").hover(
			  function () {
				$(this).parents().next(".plashka").fadeIn("slow");
			  });
		
		$(".step-outer .inne-inside div p .spravka").mouseout(function(){
				$(this).parents().next(".plashka").fadeOut("slow");						
			
		 });
		
	
	
});


(function($) {
		$(function() {
		
			$('.heading').delegate('li:not(.current)', 'click', function() {
				$(this).addClass('current').siblings().removeClass('current')
					.parents('div.tabs-outer').find('div.container ').hide().eq($(this).index()).fadeIn(150);
			})
			
			
			
		
		})
		})(jQuery)