$(function(){

$('#slides').slides({
	preload: true,
	preloadImage: 'images/loading.gif',
	play: 5000,
	pause: 2500,
	hoverPause: true,
	animationStart: function(current){
		$('.caption').animate({
			bottom:-35
		},100);
		if (window.console && console.log) {
			// example return of current slide number
			console.log('animationStart on slide: ', current);
		};
	},
	animationComplete: function(current){
		$('.caption').animate({
			bottom:0
		},200);
		if (window.console && console.log) {
			// example return of current slide number
			console.log('animationComplete on slide: ', current);
		};
	},
	slidesLoaded: function() {
		$('.caption').animate({
			bottom:0
		},200);
	}
});


$('.navi').css('opacity', '0.6');


$(".small-photo a").click(function(eventObject) {
										  
			$('.big-photo a img').hide().attr('src', $(this).attr('href'));
			$('.big-photo a img').load(function() {							  
				$(this).fadeIn(2000);							 
			 });
			
			eventObject.preventDefault();
						
		});


});


