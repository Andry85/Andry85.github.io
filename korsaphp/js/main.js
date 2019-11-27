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

		$("#calculateDoorsForm").validate({
			rules: {
				calculateDoorsForm__name: "required",
				calculateDoorsForm__tel: "required",
			},
			messages: {
				calculateDoorsForm__name: "Пожалуйста, введите ваше имя.",
				calculateDoorsForm__tel: "Пожалуйста, введите ваш телефон.",
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

	// Slider Start
	 $(".presentationList .owl-carousel").owlCarousel({
	    responsiveClass:true,
	    loop: true,
	    items:1,
	    dots: false,
		nav:true
	 });
	// Slider End 

	var dataLamination = 1;
	var dataSection = 1;
	var urlPath = 'uploads/your_city-vorota-sekcionnye/door_types';

	$(".sectionTypeList__item").click(function(){
	   $(this).addClass('sectionTypeList__item--active').siblings().removeClass('sectionTypeList__item--active');
	   dataSection = $(this).attr("data-section");
	   checkFoto(dataLamination, dataSection);
	   var sectionName = $(this).find('h4').text();
	   $('.calculateDoorsList__value--name').text(sectionName);
	});

	$(".laminationColorList__item").click(function(){
	   $(this).addClass('laminationColorList__item--active').siblings().removeClass('laminationColorList__item--active');
	    dataLamination = $(this).attr("data-lamination");
	   checkFoto(dataLamination, dataSection);
	   
	   var profileColor = $(this).find('h4 span').text();
	   $('.calculateDoorsList__value--color').text(profileColor);

	   if (profileColor.length == 0) {
	   	$('.calculateDoorsList__value--color').text('-');
	   } else {
	   	$('.calculateDoorsList__value--color').text(profileColor);
	   }

	   var laminationVariant = $(this).find('h4 i').text();

	   if (laminationVariant.length == 0) {
	   	$('.calculateDoorsList__value--lamination').text('-');
	   } else {
	   	$('.calculateDoorsList__value--lamination').text(laminationVariant);
	   }
	   

	});

	function checkFoto(lamination, section) {
		if (lamination == 1 && section == 1) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/m-gofr/1.png`);
		} else if (lamination == 1 && section == 2) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/s-gofr/1.png`);
		} else if (lamination == 1 && section == 3) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/l-gofr/1.png`);
		} else if (lamination == 1 && section == 4) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/kaseta/1.png`);
		} else if (lamination == 1 && section == 5) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/d-gofr/1.png`);
		} else if (lamination == 1 && section == 6) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/t-gofr/1.png`);
		} else if (lamination == 2 && section == 1) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/m-gofr/2.png`);
		} else if (lamination == 3 && section == 1) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/m-gofr/3.png`);
		} else if (lamination == 4 && section == 1) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/m-gofr/4.png`);
		} else if (lamination == 5 && section == 1) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/m-gofr/5.png`);
		} else if (lamination == 6 && section == 1) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/m-gofr/6.png`);
		} else if (lamination == 7 && section == 1) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/m-gofr/7.png`);
		} else if (lamination == 8 && section == 1) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/m-gofr/8.png`);
		} else if (lamination == 2 && section == 2) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/s-gofr/2.png`);
		} else if (lamination == 3 && section == 2) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/s-gofr/3.png`);
		} else if (lamination == 4 && section == 2) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/s-gofr/4.png`);
		} else if (lamination == 5 && section == 2) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/s-gofr/5.png`);
		} else if (lamination == 6 && section == 2) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/s-gofr/6.png`);
		} else if (lamination == 7 && section == 2) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/s-gofr/7.png`);
		} else if (lamination == 8 && section == 2) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/s-gofr/8.png`);
		} else if (lamination == 2 && section == 3) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/l-gofr/2.png`);
		} else if (lamination == 3 && section == 3) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/l-gofr/3.png`);
		} else if (lamination == 4 && section == 3) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/l-gofr/4.png`);
		} else if (lamination == 5 && section == 3) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/l-gofr/5.png`);
		} else if (lamination == 6 && section == 3) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/l-gofr/6.png`);
		} else if (lamination == 7 && section == 3) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/l-gofr/7.png`);
		} else if (lamination == 8 && section == 3) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/l-gofr/8.png`);
		} else if (lamination == 2 && section == 4) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/kaseta/2.png`);
		} else if (lamination == 3 && section == 4) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/kaseta/3.png`);
		} else if (lamination == 4 && section == 4) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/kaseta/4.png`);
		} else if (lamination == 5 && section == 4) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/kaseta/5.png`);
		} else if (lamination == 6 && section == 4) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/kaseta/6.png`);
		} else if (lamination == 7 && section == 4) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/kaseta/7.png`);
		} else if (lamination == 8 && section == 4) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/kaseta/8.png`);
		} else if (lamination == 2 && section == 5) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/d-gofr/2.png`);
		} else if (lamination == 3 && section == 5) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/d-gofr/3.png`);
		} else if (lamination == 4 && section == 5) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/d-gofr/4.png`);
		} else if (lamination == 5 && section == 5) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/d-gofr/5.png`);
		} else if (lamination == 6 && section == 5) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/d-gofr/6.png`);
		} else if (lamination == 7 && section == 5) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/d-gofr/7.png`);
		} else if (lamination == 8 && section == 5) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/d-gofr/8.png`);
		} else if (lamination == 2 && section == 6) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/t-gofr/2.png`);
		} else if (lamination == 3 && section == 6) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/t-gofr/3.png`);
		} else if (lamination == 4 && section == 6) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/t-gofr/4.png`);
		} else if (lamination == 5 && section == 6) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/t-gofr/5.png`);
		} else if (lamination == 6 && section == 6) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/t-gofr/6.png`);
		} else if (lamination == 7 && section == 6) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/t-gofr/7.png`);
		} else if (lamination == 8 && section == 6) {
			$('#gateConfigurator__picture').attr("src",`${urlPath}/t-gofr/8.png`);
		}                	

	}

	$('.gateConfiguratorForm__btn').on('click', function(e) {
	  e.preventDefault()

	  $(".selectionDoorsCalculateWrap").slideDown();
	  var confWidthData = $('.gateConfiguratorForm__width').val();
	  var confWidth = Number(confWidthData);
	  var confHeightData = $('.gateConfiguratorForm__height').val();
	  var confHeight = Number(confHeightData);

	  if (isNaN(confWidth) || confWidthData.length == 0) {
	  	$('.calculateDoorsList__value--width i').text(2500);
	  } else if (confWidth < 2500 || confWidth > 5000) {
	  	$('.calculateDoorsList__value--width i').text(2500);
	  	$('.gateConfiguratorForm__width').val(2500);
	  } else {
	  	$('.calculateDoorsList__value--width i').text(confWidth);
	  	$('.gateConfigurator__width span').text(confWidth);
	  }


	  if (isNaN(confHeight) || confHeightData.length == 0) {
	  	$('.calculateDoorsList__value--height i').text(2250);
	  } else if (confHeight < 2250 || confHeight > 5000) {
	  	$('.calculateDoorsList__value--height i').text(2250);
	  	$('.gateConfiguratorForm__height').val(2250);
	  }  
	  else {
	  	$('.calculateDoorsList__value--height i').text(confHeight);
	  	$('.gateConfigurator__height span').text(confHeight);
	  }

	  
	  
	});

	// Slider variants Start
	 $(".variantSlider .owl-carousel").owlCarousel({
	    responsiveClass:true,
	    loop: true,
		responsive:{
			0:{
				nav:false,
				dots: true,
				autoHeight:true,
				items:1,
				margin: 0
				
	        },
	        992:{
	        	items:4,
				dots: false,
				nav:true,
				items:2,
				margin: 45
	        }
	    }
	 });
	// Slider End 

	

	

		

});

//end read





