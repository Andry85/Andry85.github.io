$(document).ready(function () {

	var diagram = function () {
	
		var rotate = function (el, deg) {
			el.css({	'-webkit-transform': 'rotate('+ deg +'deg)',
						'-moz-transform': 'rotate('+ deg +'deg)',
						'-o-transform': 'rotate('+ deg +'deg)',
						'-ms-transform': 'rotate('+ deg +'deg)',
						'transform': 'rotate('+ deg +'deg)'
					});
		}
		
		$('.diagram').each(function () {
	
			var t = parseInt($(this).find('.text').html());
			
			if (t < 0) return false;
			if (t > 100) t = 100;
			
			t = 360 * t / 100;
			
			if (t < 180) {
				$(this).find('.left_rad').css({'background' : '#DCDCDC', 'z-index' : '18'});
				$(this).find('.right_rad').css({'z-index' : '10', 'background' : '#02A9E7'});
				rotate($(this).find('.temp'), t);
			}
			
			if (t > 180) {
				$(this).find('.right_rad').css({'background' : '#02A9E7', 'z-index' : '18'});
				$(this).find('.left_rad').css({'z-index' : '10', 'background' : '#02A9E7'});
				rotate($(this).find('.temp'), t);
			}
			
		});
	}
	
	diagram();
	
});
