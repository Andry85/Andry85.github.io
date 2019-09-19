// JavaScript Document

$(function() {

    $('.asheaderLinks').slicknav();

    $(".asFooterList__item").mouseover(function() {
    	if (!$(this).hasClass("asFooterList__item--noChildren")) {
    		$(this).addClass('asFooterList__item--opened');
	  		$(this).siblings('li').removeClass('asFooterList__item--opened');
    	}
	});


    var windowWith = $( window ).width();
    if (windowWith > 575) {
    	var blockHeight = 0;
	    var h = 0;
		$(".asFooterSubLists").each(function(){
		    h = $(this).height();
		    if (h > blockHeight) {
		    	$('.asFooterLinks').height(h);
		    }
		    blockHeight = $('.asFooterLinks').height();
		});
    }

    $(window).scroll(function() {
	 	if ($(this).scrollTop() > 0) {
	 		$('.asTop').addClass('addVisible');
	 	} else {
	 		$('.asTop').removeClass('addVisible');
	 	}
    	
	});

	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 800, function(){

		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
		});
	} // End if
	});

	// Modal Start
		$('.js-callModal').click(function(e){
			e.preventDefault();
			$('body').addClass('asModalBody');
			var title = $(this).attr("title");
			$('.asModal__title').text(title)
			$('.asModal').show();
		});
		$('.asModal__shadow,.asModal__cloze').click(function(){
			$('.asModal').hide();
			$('body').removeClass('asModalBody');
		});
		$(document).keydown(function(event) { 
			if (event.keyCode == 27) { 
				$('.asModal').hide();
			}
		});
	// Modal End

	// Form validation Start
		$("#popupForm").validate({
			rules: {
				firstname: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				firstname: "Пожалуйста, введите ваше имя.",
				email: "Пожалуйста, введите корректный email",
			}
		});
		$("#subscribeForm").validate({
			rules: {
				subscribeEmail: {
					required: true,
					email: true
				}
			},
			messages: {
				subscribeEmail: "Пожалуйста, введите корректный email",
			}
		});
	// Form validation End	

 $(".asCarousel .owl-carousel").owlCarousel({
    responsiveClass:true,
    responsive:{
		0:{
            items:1,
			nav:false,
			dots: true,
			loop: true,
			margin:0
        },
        768:{
            items:2
        },
        992:{
            items:4,
			dots: false,
			loop: false,
			nav:true,
			margin: 15
        }
    }
 });
	
});

//end read





