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
	$('.ascategoriesNav__link,.nonStandardList--scroll .nonStandardList__link').on('click', function(e) {
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
				phone: "required",
			},
			messages: {
				firstname: "Пожалуйста, введите ваше имя.",
				phone: "Пожалуйста, введите ваш телефон.",
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
		$("#getCallForm_1").validate({
			rules: {
				getcalfirstname__getCallForm_1: "required",
				getcalphone__getCallForm_1: "required",
			},
			messages: {
				getcalfirstname__getCallForm_1: "Пожалуйста, введите ваше имя.",
				getcalphone__getCallForm_1: "Пожалуйста, введите ваш телефон.",
			}
		});
		$("#getCallForm_2").validate({
			rules: {
				getcalfirstname__getCallForm_2: "required",
				getcalphone__getCallForm_2: "required",
			},
			messages: {
				getcalfirstname__getCallForm_2: "Пожалуйста, введите ваше имя.",
				getcalphone__getCallForm_2: "Пожалуйста, введите ваш телефон.",
			}
		});
		$("#getCallForm_3").validate({
			rules: {
				getcalfirstname__getCallForm_3: "required",
				getcalphone__getCallForm_3: "required",
			},
			messages: {
				getcalfirstname__getCallForm_3: "Пожалуйста, введите ваше имя.",
				getcalphone__getCallForm_3: "Пожалуйста, введите ваш телефон.",
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

	// Slider Start
	 $(".asCarousel--big .owl-carousel").owlCarousel({
	    responsiveClass:true,
	    loop: false,
	    margin:15,
	    items:1,
	    responsive:{
			0:{
				nav:false,
				dots: true,
				autoHeight:true
				
	        },
	        768:{
	        },
	        992:{
	        	items:4,
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

	// Catalog Exclusive Start
		if (w > 767 && w < 992) {
			$( ".catalogExclusiveList__item:gt(11)" ).hide();
		} else if (w > 991) {
			$( ".catalogExclusiveList__item:gt(14)" ).hide();
		} else {
			$( ".catalogExclusiveList__item:gt(7)" ).hide();
		}

		$('.catalogExclusive__btn').click(function(e){
			e.preventDefault();
			$(this).hide();
			$(".catalogExclusiveList li").each(function(){
			    $(this).show();
			});	
		});
	// Catalog Exclusive End


	// Catalog popular colors Start
		$( ".colorsList__item:gt(11)" ).hide();
		

		$('.colorsBtnWrap .asBtnLink').click(function(e){
			e.preventDefault();
			$(this).hide();
			$(".colorsList li").each(function(){
			    $(this).show();
			});	
		});
	// Catalog popular colors End	

	// Tooltip Start
		$(".profileSystemsBox__labelWrap").hover(function(){
		  $(this).find('.profileSystemsBox__tooltip').addClass('profileSystemsBox__tooltip--visible');
		  }, function(){
		  $(this).find('.profileSystemsBox__tooltip').removeClass('profileSystemsBox__tooltip--visible');
		});
	// Tooltip End

	// Catalog Video Start
		var rowCount = $(".videoCatalog > .row").length;

		if (rowCount > 2) {
			$('.videoCatalogBtnWrap').show();
		} else {
			$('.videoCatalogBtnWrap').hide();
		}

		$(".videoCatalog > .row:gt(1)" ).hide();
		$('.videoCatalogBtnWrap .asBtnLink').click(function(e){
			e.preventDefault();
			$(this).hide();
			$(".videoCatalog > .row").each(function(){
			    $(this).show();
			});	
		});
	// Catalog Video End

	// Form GET CAll validation Start
		
	// Form GET CAll validation End	

		

});

//end read





