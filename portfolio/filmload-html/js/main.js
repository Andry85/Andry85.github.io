// JavaScript Document
$(document).ready( function(){
	/* PIE */
	if (window.PIE) {
		$('.search-form,.pic img,.title-box,.slider-list li figure img,a.down,.respond-regi,.pic-film img,.reg-form-phone,.spisok-title,.cat-1 figure img').each(function() {
		PIE.attach(this);
		});
	};
	
	
	$('.popular-outer .slider-list li:nth-child(4n+4)').css('marginRight','0px');
	
	
	$(".search-form input").focus(function() {
	  $(this).parents().find(".search-form").addClass("focuss");
	});
	
	$(".search-form input").focusout(function() {
	  $(this).parents().find(".search-form").removeClass("focuss");
	});
	
	
	
	$(".reg-form-phone input").focus(function() {
	  $(this).parents().find(".reg-form-phone").addClass("focus");
	});
	
	$(".reg-form-phone input").focusout(function() {
	  $(this).parents().find(".reg-form-phone").removeClass("focus");
	});
	
	
	
	

});
//end ready

