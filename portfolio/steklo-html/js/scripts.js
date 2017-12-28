$(document).ready(function(){
		$('.selectWrap').click(function(){
			return false;
		});
		$('.selectWrap .link').click(function(){
			return false;
		});
		$('.selectWrap select[name="coun"]').change(function(){
			var value = $(this).val();
			$('.selectWrap .link').text( $('option[value="'+value+'"]', this).text() );
		});
		$('.selectWrap select').css({'opacity':0});
		
		
		$('.selectWrap-1').click(function(){
			return false;
		});
		$('.selectWrap-1 .link').click(function(){
			return false;
		});
		$('.selectWrap-1 select[name="coun-1"]').change(function(){
			var value = $(this).val();
			$('.selectWrap-1 .link').text( $('option[value="'+value+'"]', this).text() );
		});
		$('.selectWrap-1 select').css({'opacity':0});
	
	
	$('.selectWrap-2').click(function(){
			return false;
		});
		$('.selectWrap-2 .link').click(function(){
			return false;
		});
		$('.selectWrap-2 select[name="coun-2"]').change(function(){
			var value = $(this).val();
			$('.selectWrap-2 .link').text( $('option[value="'+value+'"]', this).text() );
		});
		$('.selectWrap-2 select').css({'opacity':0});
		
		
		
		$('.selectWrap-3').click(function(){
			return false;
		});
		$('.selectWrap-3 .link').click(function(){
			return false;
		});
		$('.selectWrap-3 select[name="coun-3"]').change(function(){
			var value = $(this).val();
			$('.selectWrap-3 .link').text( $('option[value="'+value+'"]', this).text() );
		});
		$('.selectWrap-3 select').css({'opacity':0});
		
		
		$('.selectWrap-4').click(function(){
			return false;
		});
		$('.selectWrap-4 .link').click(function(){
			return false;
		});
		$('.selectWrap-4 select[name="coun-4"]').change(function(){
			var value = $(this).val();
			$('.selectWrap-4 .link').text( $('option[value="'+value+'"]', this).text() );
		});
		$('.selectWrap-4 select').css({'opacity':0});
		
	
		$(".hide").hide();	
		$(".submenu-bg3 .plus").click(function () {
			$(this).prevAll(".hide").toggle();
			$(this).children("a").toggleClass("minu")
	  	});
		
		
		$(".remember-inside-bottom").hide();	
		$(".parol").click(function () {
			$(this).parents().nextAll(".remember-inside-bottom").toggle();
			$(this).toggleClass("activ")
	  	});
		
		
		
		$(".catalog .plus").click(function () {
			$(this).prevAll(".catalog-inner-bg1").children().find(".hide").toggle();
			$(this).children("a").toggleClass("minu")
	  	});
		
		
		
	
		$(".head-top .city").click(function () {
				$(this).parents().find(".popap-outer").fadeIn(500);
				$(this).parents().find(".popap-outer").children().fadeIn(500);		
		  });
		
		
		$(".box-1 a").click(function () {
				$(this).parents().find(".otpravka").fadeIn(500);
				$(this).parents().find(".otpravka").children().fadeIn(500);		
		  });
		
		
		$(".otpravka-inside .titleng .clo").click(function () {
			$(this).parents().find(".otpravka").fadeOut("slow");
	  	});
		
		
	 
	   $(".cl").click(function () {
			$(this).parents().find(".popap-outer").fadeOut("slow");
	  	});
	   
	   $(".cit").click(function () {
			$(this).parents().find(".popap-outer").fadeOut("slow");
	  	});
		
		
		$('.alfavit div dl dd a').click(function(){
			var stroka = $(this).text();
			 $(this).parents().find(".alfavit").prevAll(".cit").children("p").html(stroka);
			 $(this).parents().find(".popap-outer").prevAll(".page").find(".city").children("span").html(stroka);
			 return false;

		});
		
		
		$('.alfavit div dl dd a').dblclick(function(){
			var stroka = $(this).text();
			 $(this).parents().find(".alfavit").prevAll(".cit").children("p").html(stroka);
			 $(this).parents().find(".popap-outer").prevAll(".page").find(".city").children("span").html(stroka);
			 $(this).parents().find(".popap-outer").fadeOut("slow");
			 return false;

		});
		
		
		$(".regi .p2").click(function () {
				$(this).parents().find(".popap-wrapper").fadeIn("slow");
				$(this).parents().find(".popap-wrapper").children().fadeIn("slow");		
		  });
		
		
		$(".clo").click(function () {
			$(this).parents().find(".popap-wrapper").fadeOut("slow");
	  	});
		
		
		
		$(".remember-inside-top .clo").click(function () {
			$(this).parents().find(".remember").fadeOut("slow");
	  	});
		
		$(".remember-inside-top-second .clo").click(function () {
			$(this).parents().find(".new-password").fadeOut("slow");
	  	});
		
		
		
		
		$(".addres-inside .clo").click(function () {
			$(this).parents().find(".addres").fadeOut("slow");
	  	});
		
		
		$(".table table tr td .p3").hover(
		  function () {
			$(this).nextAll(".plashka").fadeIn("slow");
			$(this).children("img").css("visibility","hidden");
		  });
		
		$(".table table tr td .p3").mouseout(function(){
				$(this).nextAll(".plashka").fadeOut("slow");
				$(this).children("img").css("visibility","visible");
			
		 });
		
		
		$(".table-company-heading tr th p img").hover(
		  function () {
			$(this).parents().nextAll(".plashka").fadeIn("slow");
			$(this).css("visibility","hidden");
		  });
		
		$(".table-company-heading tr th .plashka").mouseout(function(){
				$(this).fadeOut("slow");
				$(this).prevAll("p").children("img").css("visibility","visible");
			
		 });
		
		
		
		
		
		
		
		$(".table table tr td .in li u").hover(
		  function () {
			$(".color-palett").fadeIn("slow");
		  });
		
		$(".table table tr td .in li i").hover(
		  function () {
			$(this).nextAll(".plashka").fadeIn("slow");
		  });
		
		
		$(".color-palett a").click(function () {
				$(this).parents().find(".color-palett").fadeOut("slow");	
		 });
		

		
		$(".table table tr td .in li i").mouseout(function(){
				$(this).nextAll(".plashka").fadeOut("slow");
			
		 });
		
		
	
		$(".hedding p a ").click(function(){
			$(this).parents().next(".postambule-body").slideToggle(2000);
			$(this).children("i").toggleClass("activ");
			return false;
		
		});
		
		
		
		$(".hide-1").hide();	
		$(".see-all").click(function () {
			$(this).prevAll().find(".hide-1").slideDown(2000);
			return false;
	  	});
		
		
		$(".horizontal-slider .carousel ul li .img .del").click(function () {
			$(this).parents().parents("li").fadeOut("slow");
			return false;
	  	});

		
		$('.popap-shadow').css('opacity', '0.8');
		$('.plashka').css('opacity', '0.8');
		
	
	$(".niceCheck-1").click(function () {
			$(this).parents("td").siblings().find(".hidenn").fadeIn("slow");
			$(this).parents().parents("tr").addClass("current");
	  	});
	
	
		
	});



$(document).ready(function() {

	//rotation speed and timer
	var speed = 5000;
	var run = setInterval('rotate()', speed);	
	
	//grab the width and calculate left value
	var item_width = $('.slides li').outerWidth(); 
	var left_value = item_width * (-1); 
        
    //move the last item before first item, just in case user click prev button
	$('.slides li:first').before($('.slides li:last'));
	
	//set the default item to the correct position 
	$('.slides ul').css({'left' : left_value});

    //if user clicked on prev button
	$('#pre').click(function() {

		//get the right position            
		var left_indent = parseInt($('.slides ul').css('left')) + item_width;

		//slide the item            
		$('.slides ul:not(:animated)').animate({'left' : left_indent}, 200,function(){    

            //move the last item and put it as first item            	
			$('.slides li:first').before($('.slides li:last'));           

			//set the default item to correct position
			$('.slides ul').css({'left' : left_value});
		
		});

		//cancel the link behavior            
		return false;
            
	});

 
    //if user clicked on next button
	$('#nex').click(function() {
		
		//get the right position
		var left_indent = parseInt($('.slides ul').css('left')) - item_width;
		
		//slide the item
		$('.slides ul:not(:animated)').animate({'left' : left_indent}, 200, function () {
            
            //move the first item and put it as last item
			$('.slides li:last').after($('.slides li:first'));                 	
			
			//set the default item to correct position
			$('.slides ul').css({'left' : left_value});
		
		});
		         
		//cancel the link behavior
		return false;
		
	});        
	
	//if mouse hover, pause the auto rotation, otherwise rotate it
	$('#slides').hover(
		
		function() {
			clearInterval(run);
		}, 
		function() {
			run = setInterval('rotate()', speed);	
		}
	); 
        
});

//a simple function to click next link
//a timer will call this function, and the rotation will begin :)  
function rotate() {
	$('#next').click();
}
        
		
(function($) {
		$(function() {
		
			$('ul.select-buttoms').delegate('li:not(.curr)', 'click', function() {
				$(this).addClass('curr').siblings().removeClass('curr');
			})	
		})
		})(jQuery)	


jQuery(document).ready(function() {
    jQuery('#mycarousel').jcarousel();
	
	
	
	
	

	
	
	 $('.select-buttoms li a').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
    });
	
	
	
});
	
