$('.testimonial-slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 720,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}
	]
});



$('#certificate-slider').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: false,
	centerMode: false,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 520,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.catalogBoxSlider').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: false,
	centerMode: false,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		}
	]
});






$(window).on('resize', function () {
	$('.works-slider-preview').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		asNavFor: '.works-slider-nav',
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
				}
			}
		]
	});
	 
	$('.works-slider-nav').not('.slick-initialized').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.works-slider-preview',
		dots: true,
		centerMode: false,
		focusOnSelect: true
	});
	
});

$(window).on('load', function () {
	if(window.innerWidth < 992) {
		$('.works-slider-preview').not('.slick-initialized').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			asNavFor: '.works-slider-nav',
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: true,
					}
				}
			]
		});
		 
		$('.works-slider-nav').not('.slick-initialized').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.works-slider-preview',
			dots: true,
			centerMode: false,
			focusOnSelect: true
		});
	}
});

$(document).on('click', '[data-toggle="lightbox-close"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox({
      alwaysShowClose: true
  });
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});


(function($) {

	$(".asreviewsBox__entry p").each(function(){
	    var lengthString = $(this).text();
	    var trimString = lengthString.slice(0, 130);
	    $(this).text(trimString + '...');
	});
		


	$(document).click(function (event) {
		var clickover = $(event.target);
		var $navbar = $(".navbar-collapse");
		var _opened = $navbar.hasClass("in");
		if (_opened === true && !clickover.hasClass("navbar-toggle")) {
			$navbar.collapse('hide');
		}
	});

})(jQuery);

