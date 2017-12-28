// JavaScript Document
$(document).ready( function(){
	/* PIE */
	if (window.PIE) {
		$('.nav-inner,.slides_container div.slide img,.container,.inner,.but').each(function() {
		PIE.attach(this);
		});
	};
	
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
	
	
	$('.katalog-list li:nth-child(5n+5)').css('marginRight','0px');
	
	$('.catalog li:nth-child(3n+3)').css('marginRight','0px');
	$('.news-list li:last-child p').css('paddingBottom','6px');


});
//end ready

