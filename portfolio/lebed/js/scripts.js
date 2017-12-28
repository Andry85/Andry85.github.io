(function($) {
$(function() {

	$('.tabs-rules ul').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('.tabs-outer').find('div.tab-box').hide().eq($(this).index()).fadeIn(150);
	});
	
	
	$('.text nav').delegate('a:not(.activ)', 'click', function() {
		$(this).addClass('activ').siblings().removeClass('activ')
			.parents('.text').find('.bloc').hide().eq($(this).index()).fadeIn(150);
	});
	
	
	$('#slides').slides({
	preload: true,
	preloadImage: 'images/loading.gif',
	play: 3000,
	pause: 2500,
	hoverPause: true
	});
	
	
	jQuery('#naw').jcarousel({
		wrap: 'circular'
	});
	$(".slidd img").click(function() {
		$(".mid img").attr("src", $(this).attr("src"));
	});
	
	
	$(".slidd ul li img").click(function(){
		$(this).parent('li').addClass('cur').siblings('li').removeClass('cur');
	});
		
	

})
})(jQuery)