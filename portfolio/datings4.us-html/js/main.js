// JavaScript Document
$(document).ready( function(){
	/* PIE */
	if (window.PIE) {
		$('.btn,.aside,.start-search,.total-list .title,.total-list .inner a img,.w-box,.freind-list li,.pagenavi li a,.user-info,.messeg-searc,.tit,.photo-list li a img,.cabinet figure img,.profile-pic figure img,.file .fonTypeFile,.file .fonTypeFile span,.in input.tx,.contact-outer,.on .us img,.message-list,.hed figure img,.message-list li textarea ').each(function() {
		PIE.attach(this);
		});
	};
	
	$('.freind-list li:nth-child(3n+3)').css('marginRight','0px');
	$('.search-result-list li:nth-child(3n+3)').css('marginRight','39px');
	$('.search-result-list li:nth-child(5n+5)').css('marginRight','0px');
	
	

	$(".select-outer select,.in select").selectbox();
	
	
	$('.bxslider').bxSlider({
        displaySlideQty: 1,
        moveSlideQty: 1,
        auto: false,
        controls: true,
        autoHover: true,
        pause: 2000,
        randomStart: false,
        pager: false
    });

	
	
	

});
//end ready

