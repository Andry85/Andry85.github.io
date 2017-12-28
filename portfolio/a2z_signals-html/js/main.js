// JavaScript Document
$(document).ready( function(){
	/* PIE */
	if (window.PIE) {
		$('.clientsList li figure img,.list li.li-01 .listInner,.btn,.contactForm div.clearfix input,.sbHolder').each(function() {
		PIE.attach(this);
		});
	}
	/* End PIE */
	
	
	$('.list li:nth-child(3n-2)').css('marginLeft','38px');
	$('.partnersList li:nth-child(3n-2)').css('marginLeft','0px');
	$('.listSub li:nth-child(3n-2)').css('marginLeft','0px');
	$('.listThird li:nth-child(3n-2)').css('marginLeft','0px');

});
//end ready

