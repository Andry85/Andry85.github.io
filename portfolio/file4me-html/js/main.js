// JavaScript Document
$(document).ready( function(){
	/* PIE */
	if (window.PIE) {
		$('.header-inner,.search-form,.download-outer,.inn input,.responde-form,.reg-form-phone,.list li figure img').each(function() {
		PIE.attach(this);
		});
	};
	
	 $(".flag").click(function () {
      $(".flag-form").toggle();
    });
	
	$(".switch").click(function () {
		$(this).toggleClass("activ");
      $(this).nextAll(".more-text").slideToggle("slow");
    });
	
	
	$('.list li:nth-child(1n+1)').css('width','234px');
	
	$('.list li:nth-child(3n+3)').css('width','237px').css('borderRight','0');
	
	$(".reg-form-phone input").focus(function() {
	  $(this).parents().find(".reg-form-phone").addClass("focuss");
	});
	
	$(".reg-form-phone input").focusout(function() {
	  $(this).parents().find(".reg-form-phone").removeClass("focuss");
	});
	
	$(".search-form input").focus(function() {
	  $(this).parents().find(".search-form").addClass("foc");
	});
	
	$(".search-form input").focusout(function() {
	  $(this).parents().find(".search-form").removeClass("foc");
	});
	

	
	

});
//end ready

