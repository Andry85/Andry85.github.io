(function($) {
		$(function() {
		
			$('ul.navi').delegate('li:not(.active)', 'click', function() {
				$(this).addClass('active').siblings().removeClass('active')
					.parents('div.box').find('div.tabs-box').hide().eq($(this).index()).fadeIn(150);
			})
		
		})
		})(jQuery)
$(function(){
$('.reg').click(function(){
		$(this).parent().fadeOut('slow');
		$(this).parent().prev().fadeOut('slow');
		$(this).parent().next('.disp').fadeIn('slow');
	});
});