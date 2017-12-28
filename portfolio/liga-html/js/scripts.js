$(function() {
	$(".slide").jCarouselLite({
		btnNext: ".next",
		btnPrev: ".prew"
	});
	
	
	
	
	
	$(".foto-slider-inner .slide ul li a").hover(
      function () {
		$(this).children("span").css("background-color", "none").animate({opacity: 0.0}, 500 );
      }, 
      function () {
		$(this).children("span").css("background-color", "#615125").animate({opacity: 0.6}, 500 );
		

      }
    );


	
	
});


jQuery(document).ready(function(){
 
jQuery(".niceCheck").mousedown(

function() {
 
     changeCheck(jQuery(this));
     
});
 
 
jQuery(".niceCheck").each(

function() {
     
     changeCheckStart(jQuery(this));
     
});
 
                                        });
 
function changeCheck(el)

{
     var el = el,
          input = el.find("input").eq(0);
   	 if(!input.attr("checked")) {
		el.css("background-position","0 -14px");	
		input.attr("checked", true)
	} else {
		el.css("background-position","0 0");	
		input.attr("checked", false)
	}
     return true;
}
 
function changeCheckStart(el)
{
var el = el,
		input = el.find("input").eq(0);
      if(input.attr("checked")) {
		el.css("background-position","0 -14px");	
		}
     return true;
}




