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
	$('.ascategoriesNav__link').on('click', function(e) {
	  e.preventDefault()

	  $('html, body').animate(
	    {
	      scrollTop: $($(this).attr('href')).offset().top-30,
	    },
	    500,
	    'linear'
	  )
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

	// Slider Start
	 $(".asCarousel .owl-carousel").owlCarousel({
	    responsiveClass:true,
	    loop: true,
	    items:2,
	    responsive:{
			0:{
				nav:false,
				dots: true,
				autoHeight:true
				
	        },
	        768:{
	        },
	        992:{
				dots: false,
				nav:true,
	        }
	    }
	 });
	// Slider End 

	// Tabs Start
		$('.ourOffices_Tablist__link').click(function(e){
			e.preventDefault();
			var self = $(this);
			$(this).parent('li').addClass('ourOffices_Tablist__item--active').siblings().removeClass('ourOffices_Tablist__item--active');
			var linkID = self.data("link-id");

			console.log(linkID);
			$(".ourOfficesTabs__item").each(function(){
			    var id = $(this).attr('id');
			    if (linkID == id) {
			    	$(this).addClass('ourOfficesTabs__item--active').siblings().removeClass('ourOfficesTabs__item--active');
			    }
			});
		});
	// Tabs End

	var w = $(window).width();
	if (w > 991) {
		jQuery('.asnavbarSubList--regions.scrollbar-dynamic').scrollbar();
	}

	$('.asnavbarSubList--regions .asnavbarSubList__link').click(function(e){
			e.preventDefault();
			$(this).next('.asnavbarSubListlevelTwo').slideToggle();
			
		});

	
	
});

//end read





