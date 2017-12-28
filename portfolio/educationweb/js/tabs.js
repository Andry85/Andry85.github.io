(function($) {
		$(function() {
			$('.tabs-list').delegate('li:not(.cur)', 'click', function() {
				$(this).addClass('cur').siblings().removeClass('cur').parents('div.tabs-outer').find('div.box').hide().eq($(this).index()).fadeIn(150);
			})
		
		})
		
		$(function() {
                $('.kurs-tabs-list').delegate('li:not(.cur)', 'click', function() {
                    $(this).addClass('cur').siblings().removeClass('cur').parents('div.kurs-tabs-outer').find('div.kurs-tabs-box').hide().eq($(this).index()).fadeIn(150);
                })
            
            })
			
			$(function() {
			$('.cat-curs-list').delegate('li:not(.activ)', 'click', function() {
				$(this).addClass('activ').siblings().removeClass('activ').parents('.right').find('div.lektors-outer').hide().eq($(this).index()).fadeIn(150);
			})
		
		})
		
		})(jQuery);