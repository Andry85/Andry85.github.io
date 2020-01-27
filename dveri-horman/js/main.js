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



(function($) {


	$('.newConfigSlider').slick({
		slidesToShow: 6,
		slidesToScroll: 3,
		dots: false,
		infinite: false,
		cssEase: 'easeInExpo',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 5
				}
			}
		]
	});

	var dataColor = 1;
	var dataSection = 1;

	var urlPath = 'img/constructor/previews/';

	$(".newConfigSlider--types .newConfigSlider__item").click(function(){

	   $(this).addClass('active').parents('.newConfigSlider--types').find('.newConfigSlider__item').not(this).
	   removeClass('active');

	   dataSection = $(this).attr("data-section");
	   checkFoto(dataColor, dataSection);
	   var sectionName = $(this).find('p').text();
	   $('.calculateDoorsList__value--name').text(sectionName);

	});

	$(".newConfigSlider--colors .newConfigSlider__item").click(function(){
		
		$(this).addClass('active').parents('.newConfigSlider--colors').find('.newConfigSlider__item').not(this).
	   removeClass('active');

	   dataColor = $(this).attr("data-color");
	   checkFoto(dataColor, dataSection);
	   
	   var profileColor = $(this).find('p span').text();
	   $('.calculateDoorsList__value--color').text(profileColor);
	   setPreviewTypeSections(dataColor);

	   

	});

	function setPreviewTypeSections(color) {
		$(".newConfigSlider--types .newConfigSlider__item").each(function(){
			var sectionType = $(this).attr('data-type');
		   $(this).find('img').attr('src', urlPath + sectionType +'/'+ color+'.jpg');
		});
	}


	var prewImg = $('.newConfigPreview__selected');

	function checkFoto(color, section) {
		var price = $('.newConfigPreview__price i');
		if (color == 1 && section == 1) {
			prewImg.attr("src",`${urlPath}/THP-010/1.jpg`);
			price.html('40 500');
		} else if (color == 1 && section == 2) {
			prewImg.attr("src",`${urlPath}/THP-015/1.jpg`);
			price.html('40 600');
		} else if (color == 1 && section == 3) {
			prewImg.attr("src",`${urlPath}/THP-515/1.jpg`);
			price.html('40 500');
		} else if (color == 1 && section == 4) {
			prewImg.attr("src",`${urlPath}/THP-700S/1.jpg`);
			price.html('51 000');
		} else if (color == 1 && section == 5) {
			prewImg.attr("src",`${urlPath}/THP-810S/1.jpg`);
			price.html('51 000');
		} else if (color == 1 && section == 6) {
			prewImg.attr("src",`${urlPath}/THP-900S/1.jpg`);
			price.html('51 000');
		} else if (color == 1 && section == 7) {
			prewImg.attr("src",`${urlPath}/THP-700A/1.jpg`);
			price.html('39 900');
		} else if (color == 1 && section == 8) {
			prewImg.attr("src",`${urlPath}/THP-750F/1.jpg`);
			price.html('39 900');
		} else if (color == 2 && section == 1) {
			prewImg.attr("src",`${urlPath}/THP-010/2.jpg`);
			price.html('40 500');
		} else if (color == 2 && section == 2) {
			prewImg.attr("src",`${urlPath}/THP-015/2.jpg`);
			price.html('40 500');
		} else if (color == 2 && section == 3) {
			prewImg.attr("src",`${urlPath}/THP-515/2.jpg`);
			price.html('40 500');
		} else if (color == 2 && section == 4) {
			prewImg.attr("src",`${urlPath}/THP-700S/2.jpg`);
			price.html('51 000');
		} else if (color == 2 && section == 5) {
			prewImg.attr("src",`${urlPath}/THP-810S/2.jpg`);
			price.html('51 000');
		} else if (color == 2 && section == 6) {
			prewImg.attr("src",`${urlPath}/THP-900S/2.jpg`);
			price.html('51 000');
		} else if (color == 2 && section == 7) {
			prewImg.attr("src",`${urlPath}/THP-700A/2.jpg`);
			price.html('43 500');
		} else if (color == 2 && section == 8) {
			prewImg.attr("src",`${urlPath}/THP-750F/2.jpg`);
			price.html('43 500');

		} else if (color == 3 && section == 1) {
			prewImg.attr("src",`${urlPath}/THP-010/3.jpg`);
			price.html('40 500');
		} else if (color == 3 && section == 2) {
			prewImg.attr("src",`${urlPath}/THP-015/3.jpg`);
			price.html('40 500');
		} else if (color == 3 && section == 3) {
			prewImg.attr("src",`${urlPath}/THP-515/3.jpg`);
			price.html('40 500');
		} else if (color == 3 && section == 4) {
			prewImg.attr("src",`${urlPath}/THP-700S/3.jpg`);
			price.html('51 000');
		} else if (color == 3 && section == 5) {
			prewImg.attr("src",`${urlPath}/THP-810S/3.jpg`);
			price.html('51 000');
		} else if (color == 3 && section == 6) {
			prewImg.attr("src",`${urlPath}/THP-900S/3.jpg`);
			price.html('51 000');
		} else if (color == 3 && section == 7) {
			prewImg.attr("src",`${urlPath}/THP-700A/3.jpg`);
			price.html('43 500');
		} else if (color == 3 && section == 8) {
			prewImg.attr("src",`${urlPath}/THP-750F/3.jpg`);
			price.html('43 500');

		} else if (color == 4 && section == 1) {
			prewImg.attr("src",`${urlPath}/THP-010/4.jpg`);
			price.html('40 500');
		} else if (color == 4 && section == 2) {
			prewImg.attr("src",`${urlPath}/THP-015/4.jpg`);
			price.html('40 500');
		} else if (color == 4 && section == 3) {
			prewImg.attr("src",`${urlPath}/THP-515/4.jpg`);
			price.html('40 500');
		} else if (color == 4 && section == 4) {
			prewImg.attr("src",`${urlPath}/THP-700S/4.jpg`);
			price.html('51 000');
		} else if (color == 4 && section == 5) {
			prewImg.attr("src",`${urlPath}/THP-810S/4.jpg`);
			price.html('51 000');
		} else if (color == 4 && section == 6) {
			prewImg.attr("src",`${urlPath}/THP-900S/4.jpg`);
			price.html('51 000');
		} else if (color == 4 && section == 7) {
			prewImg.attr("src",`${urlPath}/THP-700A/4.jpg`);
			price.html('46 500');
		} else if (color == 4 && section == 8) {
			prewImg.attr("src",`${urlPath}/THP-750F/4.jpg`);
			price.html('46 500');
			
		} else if (color == 5 && section == 1) {
			prewImg.attr("src",`${urlPath}/THP-010/5.jpg`);
			price.html('40 500');
		} else if (color == 5 && section == 2) {
			prewImg.attr("src",`${urlPath}/THP-015/5.jpg`);
			price.html('40 500');
		} else if (color == 5 && section == 3) {
			prewImg.attr("src",`${urlPath}/THP-515/5.jpg`);
			price.html('40 500');
		} else if (color == 5 && section == 4) {
			prewImg.attr("src",`${urlPath}/THP-700S/5.jpg`);
			price.html('55 500');
		} else if (color == 5 && section == 5) {
			prewImg.attr("src",`${urlPath}/THP-810S/5.jpg`);
			price.html('55 500');
		} else if (color == 5 && section == 6) {
			prewImg.attr("src",`${urlPath}/THP-900S/5.jpg`);
			price.html('55 500');
		} else if (color == 5 && section == 7) {
			prewImg.attr("src",`${urlPath}/THP-700A/5.jpg`);
			price.html('46 500');
		} else if (color == 5 && section == 8) {
			prewImg.attr("src",`${urlPath}/THP-750F/5.jpg`);
			price.html('46 500');
			
		} else if (color == 6 && section == 1) {
			prewImg.attr("src",`${urlPath}/THP-010/6.jpg`);
			price.html('45 000');
		} else if (color == 6 && section == 2) {
			prewImg.attr("src",`${urlPath}/THP-015/6.jpg`);
			price.html('45 000');
		} else if (color == 6 && section == 3) {
			prewImg.attr("src",`${urlPath}/THP-515/6.jpg`);
			price.html('45 000');
		} else if (color == 6 && section == 4) {
			prewImg.attr("src",`${urlPath}/THP-700S/6.jpg`);
			price.html('55 500');
		} else if (color == 6 && section == 5) {
			prewImg.attr("src",`${urlPath}/THP-810S/6.jpg`);
			price.html('55 500');
		} else if (color == 6 && section == 6) {
			prewImg.attr("src",`${urlPath}/THP-900S/6.jpg`);
			price.html('55 500');
		} else if (color == 6 && section == 7) {
			prewImg.attr("src",`${urlPath}/THP-700A/6.jpg`);
			price.html('46 500');
		} else if (color == 6 && section == 8) {
			prewImg.attr("src",`${urlPath}/THP-750F/6.jpg`);
			price.html('46 500');
			
		} else if (color == 7 && section == 1) {
			prewImg.attr("src",`${urlPath}/THP-010/7.jpg`);
			price.html('45 000');
		} else if (color == 7 && section == 2) {
			prewImg.attr("src",`${urlPath}/THP-015/7.jpg`);
			price.html('45 000');
		} else if (color == 7 && section == 3) {
			prewImg.attr("src",`${urlPath}/THP-515/7.jpg`);
			price.html('45 000');
		} else if (color == 7 && section == 4) {
			prewImg.attr("src",`${urlPath}/THP-700S/7.jpg`);
			price.html('55 500');
		} else if (color == 7 && section == 5) {
			prewImg.attr("src",`${urlPath}/THP-810S/7.jpg`);
			price.html('55 500');
		} else if (color == 7 && section == 6) {
			prewImg.attr("src",`${urlPath}/THP-900S/7.jpg`);
			price.html('55 500');
		} else if (color == 7 && section == 7) {
			prewImg.attr("src",`${urlPath}/THP-700A/7.jpg`);
			price.html('46 500');
		} else if (color == 7 && section == 8) {
			prewImg.attr("src",`${urlPath}/THP-750F/7.jpg`);
			price.html('46 500');
			
		}     

	}

	$("#newConfigPreview__btn").click(function(e){
		e.preventDefault();
		$('.selectionDoorsCalculateWrap').slideToggle();

	});

	$(".mobileTabsList__item").click(function(e){
		e.preventDefault();
		$(this).addClass('active').siblings('li').removeClass('active');
		$(this).parents('.mobileTabs').find('.mobileTabsContainer > div')
		.eq($(this).index()).addClass('active').siblings('div').removeClass('active');
		$('.newConfigSlider').slick('refresh');
	});


})(jQuery);	