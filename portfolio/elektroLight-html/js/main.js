// JavaScript Document
$(document).ready( function(){


	/* PIE */
	if (window.PIE) {
		$('.contact-title figure,.in input,.in textarea,.btn').each(function() {
		PIE.attach(this);
		});
	}


jQuery('#mycarousel').jcarousel({
        auto: 2,
        scroll: 1,
		animation: 'slow',
		visible: 1,
        wrap: 'circular'
    });

 $(".news-list li:last-child").css('border-bottom','none');
  $(".menu li:last-child").css('border-bottom','none');


});
//end ready

