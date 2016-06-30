// JavaScript Document
$(function() {

       $('.menu').slicknav();
 

 			$('.menu > li.hasSub > a').on('click', function(e){
			    e.preventDefault();
			  });
		  $('.menu > li').hover(function () {
		     clearTimeout($.data(this,'timer'));
		     $('ul',this).stop(true,true).slideDown(300);
		  }, function () {
		    $.data(this,'timer', setTimeout($.proxy(function() {
		      $('ul',this).stop(true,true).slideUp(300);
		    }, this), 100));
		  });



});
//end read


