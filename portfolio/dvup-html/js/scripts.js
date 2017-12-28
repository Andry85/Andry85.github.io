jQuery(document).ready(function(){


/* слайдер цен */

jQuery("#slider").slider({
	min: 0,
	max: 2500,
	values: [0,2500],
	range: true,
	step: 100,
	stop: function(event, ui) {
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
		
    },
    slide: function(event, ui){
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});

jQuery("input#minCost").change(function(){

	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		jQuery("input#minCost").val(value1);
	}
	jQuery("#slider").slider("values",0,value1);	
});

	
jQuery("input#maxCost").change(function(){
		
	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();
	
	if (value2 > 2500) { value2 = 2500; jQuery("input#maxCost").val(2500)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		jQuery("input#maxCost").val(value2);
	}
	jQuery("#slider").slider("values",1,value2);
});



// фильтрация ввода в поля
	jQuery('.formCost input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});
	
	
	$(".carusel").jCarouselLite({
				btnNext: ".next",
				btnPrev: ".prew",
				auto: 2500
			});
	
	
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
	
	$(".plashka").css({ opacity: 0.9 });
	
	
	
	if (!$.browser.opera) {
    
			// select element styling
			$('select.select').each(function(){
				var title = $(this).attr('title');
				if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
				$(this)
					.css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
					.after('<span class="select">' + title + '</span>')
					.change(function(){
						val = $('option:selected',this).text();
						$(this).next().text(val);
						})
			});

		};
		
		
		$(".slid ul li a").click(function(eventObject) {
										  
			$('.big-photo a img').hide().attr('src', $(this).attr('href'));
			$('.big-photo a img').load(function() {							  
				$(this).fadeIn(2000);							 
			 });
				
			eventObject.preventDefault();
						
		});
		
		
		$(".slid ul li a").click(function(){
	
			var largePath = $(this).attr("href");
			$("#largeImg").attr({ src: largePath });
			
			 return false;
		});
		
		
		$(".see").click(function(){
			$(this).parent(".commnets-hd").next(".commnets-body").slideToggle("slow");
			$(this).toggleClass("actt");
			if($(this).text()!='спрятать')
			$(this).text("спрятать");
			else
			$(this).text("показать");
			
		});
		
		
		function elementSupportsAttribute(element, attribute) {
		var test = document.createElement(element);
		return (attribute in test);
		};
		
		
		if (!elementSupportsAttribute('textarea', 'placeholder')) {
		// Если браузер не поддерживает атрибут, то выполняется код jQuery
		$("#example-three")
		.data("originalText", $("#example-three").text())
		.css("color", "#929292")
		.focus(function() {
		var $el = $(this);
		if (this.value == $el.data("originalText")) {
		this.value = "";
		}
		})
		.blur(function() {
		if (this.value == "") {
		this.value = $(this).data("originalText");
		}
		});
		} else {
		// Если же браузер поддерживает HTML5, то просто используем эту возможность
		$("#example-three")
		.attr("placeholder", $("#example-three").text())
		.text("");
		}
		
		
		
		$(".basket-list li .li-inner a.delete").hover(
		  function () {
			$(this).children(".podskazka").fadeIn();
		  },
		  function () {
			$(this).children(".podskazka").fadeOut();
		  }
		);
		
		$(".img div a").hover(
		  function () {
			$(this).children(".zoom").fadeIn();
		  },
		  function () {
			$(this).children(".zoom").fadeOut();
		  }
		);
		
		
		$(".list-hits li a").hover(
		  function () {
			$(this).children(".plashka").fadeIn();
		  },
		  function () {
			$(this).children(".plashka").fadeOut();
		  }
		);
		
		$(".confirmation-list li .telo").hide();
		
		$(".confirmation-list li .telo-second").show();
		
		$(".confirmation-list li .izm").click(function(){
			$(this).parents(".shapka-outer").next(".telo").slideToggle("slow").parents("li").siblings("li").children(".telo").slideUp("slow");
			$(this).parents("li").toggleClass("no-bg").siblings("li").removeClass("no-bg");
			$(this).toggleClass("actt");
			$(this).parents("li").siblings("li").find(".izm").removeClass("actt");
			if($(this).text()!='Изменить')
			$(this).text("Изменить");
			else
			$(this).text("Изменить");
			
		});
		
		
		$(".delivery-list li .info-about").hide();
		
		$(".delivery-list li .li-inner").click(function(){
			$(this).next(".info-about").slideDown("slow").parent().siblings("li").children(".info-about").slideUp("slow");
			
			
		});
		
		
		$(".delivery-list-second li .vopros").hide();
		
		$(".delivery-list-second li .li-outer").click(function(){
			$(this).next(".vopros").slideDown("slow").parent().siblings("li").children(".vopros").slideUp("slow");
			
			
		});
		
		$('.popap-shadow').css('opacity', '0.8');
		$('.popap-shadow-basket').css('opacity', '0.8');
		$('.popap-shadow-login').css('opacity', '0.8');
		$('.popap-shadow-color').css('opacity', '0.8');
		$('.popap-inner').css('opacity', '0.8');
		
		
		
		$(".add-comments").click(function () {
				$(this).parents().find(".popap-outer").fadeIn(500);
				$(this).parents().find(".popap-outer").children().fadeIn(500);		
		  });
	
	
	$(document).keyup(function(event){
				if (event.keyCode == 27) {
					$(".popap-outer").fadeOut();	
				}
			});	
	
	
	
	$(".info-tover .redact-outer .redact-a").click(function () {
				$(this).parents().find(".popap-outer-basket").fadeIn(500);
				$(this).parents().find(".popap-outer-basket").children().fadeIn(500);		
		  });
	
	
	$(document).keyup(function(event){
				if (event.keyCode == 27) {
					$(".popap-outer-basket").fadeOut();	
				}
			});	
		
		
		jQuery(".popap-shadow").click(function () {
				jQuery(this).fadeOut(500);
				jQuery(this).next(".popap-wrap").fadeOut(500);
				jQuery(this).parent(".popap-outer").fadeOut(500);
						
		  });
		
		
		jQuery(".close").click(function () {
				$(".popap-outer").fadeOut();	
						
		  });
		
		jQuery(".popap-shadow-basket").click(function () {
				jQuery(this).fadeOut(500);
				jQuery(this).next(".popap-wrap-basket").fadeOut(500);
				jQuery(this).parent(".popap-outer-basket").fadeOut(500);
						
		  });
		
		jQuery(".close").click(function () {
				$(".popap-outer-basket").fadeOut();	
						
		  });


		$(".login a").click(function () {
				$(this).parents().find(".popap-outer-login").fadeIn(500);
				$(this).parents().find(".popap-outer-login").children().fadeIn(500);		
		  });
	
	
	$(document).keyup(function(event){
				if (event.keyCode == 27) {
					$(".popap-outer-login").fadeOut();	
				}
			});	
	
	jQuery(".popap-shadow-login").click(function () {
				jQuery(this).fadeOut(500);
				jQuery(this).next(".popap-wrap-login").fadeOut(500);
				jQuery(this).parent(".popap-outer-login").fadeOut(500);
						
		  });
	
	jQuery(".close").click(function () {
				$(".popap-outer-login").fadeOut();	
						
		  });
	
	
	$(".color").click(function () {
				$(this).parents().find(".popap-outer-color").fadeIn(500);
				$(this).parents().find(".popap-outer-color").children().fadeIn(500);		
		  });
	
	$(document).keyup(function(event){
				if (event.keyCode == 27) {
					$(".popap-outer-color").fadeOut();	
				}
			});	
	
	jQuery(".popap-shadow-color").click(function () {
				jQuery(this).fadeOut(500);
				jQuery(this).next(".popap-wrap-color").fadeOut(500);
				jQuery(this).parent(".popap-outer-color").fadeOut(500);
						
		  });
	
	jQuery(".close").click(function () {
				$(".popap-outer-color").fadeOut();	
						
		  });
	

});











	  jQuery(function(){
$(".ban .desc").show(); //Show Banner
$(".ban .desc-inner").animate({ opacity: 0.85 }, 1 ); //Set Opacity
$(".hd-right ul li:first").addClass('active'); //Add the active class (highlights the very first list item by default)
//runs function on click
$(".hd-right ul li").click(function () {
$active = $(this);
slideSwitchClick();
})
.hover(function(){ //Hover effects on list-item
$(this).addClass('hover'); //Add class �hover� on hover
}, function() {
$(this).removeClass('hover'); //Remove class �hover� on hover out
});
//runs function, set timer here
$(function() {
setInterval( 'slideSwitchTimed()', 6000 );
});
});
function slideSwitchTimed() {
$active = $('.hd-right ul li.active').next();
if ( $active.length == 0 ) $active = $('.hd-right ul li:first'); //goes back to start when finishes
slideSwitch();
}
function slideSwitchClick() {
slideSwitch();
}
function slideSwitch() {
var $prev = $('.hd-right ul li.active');
//Show active list-item
$prev.removeClass('active');
$active.addClass('active');
//Set Variables
var imgAlt = $active.find('img').attr("alt"); //Get Alt Tag of Image
var imgTitle = $active.find('a').attr("href"); //Get Main Image URL
var imgDesc = $active.find('.block-1').html(); //Get HTML of the �block� container
var imgDescHeight = $(".ban").find('.desc-inner').height(); //Find the height of the �block�
if ($(this).is(".active")) { //If the list item is active/selected, then�
return false; // Don�t click through � Prevents repetitive animations on active/selected list-item
} else { //If not active then�
//Animate the Description
$(".ban img").animate({ opacity: 0}, 250 );
$(".ban .desc-inner").animate({ opacity: 0, marginBottom: -imgDescHeight }, 250 , function() {
$(".ban .desc-inner").html(imgDesc).animate({ opacity: 0.85, marginBottom: "0" }, 250 );
$(".ban img").attr({ src: imgTitle}).animate({ opacity: 1}, 1050 );



});
}
return false;
}


jQuery(document).ready(function(){

jQuery(".niceCheck").mousedown(
/* при клике на чекбоксе меняем его вид и значение */
function() {

     changeCheck(jQuery(this));
     
});


jQuery(".niceCheck").each(
/* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
function() {
     
     changeCheckStart(jQuery(this));
     
});

                                        });

function changeCheck(el)
/* 
	функция смены вида и значения чекбокса
	el - span контейнер дял обычного чекбокса
	input - чекбокс
*/
{
     var el = el,
          input = el.find("input").eq(0);
   	 if(!input.attr("checked")) {
		el.css("background-position","0 -26px");	
		input.attr("checked", true)
	} else {
		el.css("background-position","0 0");	
		input.attr("checked", false)
	}
     return true;
}

function changeCheckStart(el)
/* 
	если установлен атрибут checked, меняем вид чекбокса
*/
{
var el = el,
		input = el.find("input").eq(0);
      if(input.attr("checked")) {
		el.css("background-position","0 -26px");	
		}
     return true;
}
