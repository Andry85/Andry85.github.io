(function($) {
		$(function() {
		
			$('ul.navigator').delegate('li:not(.active)', 'click', function() {
				$(this).addClass('active').siblings().removeClass('active')
					.parents('div.tabs').find('div.tabs-box').hide().eq($(this).index()).fadeIn(150);
			})
		
		})
		})(jQuery)