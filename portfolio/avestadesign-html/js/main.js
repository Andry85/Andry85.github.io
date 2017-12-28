// JavaScript Document
$(document).ready( function(){
	/* PIE */
	if (window.PIE) {
		$('.list li .list-inside,.contact-form textarea,.article-inner .slider-inner').each(function() {
		PIE.attach(this);
		});
	}
	
	$('.list li:last-child').css('marginRight','0');
	$('.honors-list li:last-child').css('marginRight','0');
	$('.main-office-list li:last-child').css('background','none');
	
	
	
	
	 $("a.up-link").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
	
	
	
	
	
	$(".accardion-inner").hide();
	
	$(".sub li.ln-01 a").click(function (event) {
      $(this).parents().parents().next(".accardion-inner").slideToggle(2000);
	  $(this).parents("li").toggleClass("activ");
	  event.preventDefault();
    });
	
	
	
	$(".sub li.close a").click(function (event) {
      $(this).parents().parents().next(".accardion-inner").slideUp(2000);
	  $(this).parents().prevAll("li").removeClass("activ");
		event.preventDefault();
	  

    });
	
	
	$(".offices li a").click(function (event) {
	  $(this).parents().siblings("li").removeClass("current");
	  $(this).parents("li").addClass("current");
	  $(this).parents().find(".regions").fadeIn();
		event.preventDefault();
	  
    });
	
	$(".offices li#g-01 a").click(function () {
	  $(this).parents().find(".city-maps").children(".city-1").show().siblings("li").hide();
	  $(this).parents().find(".map").children(".tula").addClass("activ").siblings("a").removeClass("activ");
	  $(this).parents().find(".regions").find(".cats-list").children(".t-07").addClass("activ").siblings("li").removeClass("activ");
	  
    });
	
	$(".offices li#g-02 a").click(function () {
	  $(this).parents().find(".city-maps").children(".city-2").show().siblings("li").hide();
	  $(this).parents().find(".map").children(".moscva").addClass("activ").siblings("a").removeClass("activ");
	  $(this).parents().find(".regions").find(".cats-list").children(".t-05").addClass("activ").siblings("li").removeClass("activ");
    });
	
	$(".offices li#g-03 a").click(function () {
	  $(this).parents().find(".city-maps").children(".city-3").show().siblings("li").hide();  
	  $(this).parents().find(".map").children(".kiyv").addClass("activ").siblings("a").removeClass("activ");
	  $(this).parents().find(".regions").find(".cats-list").children(".t-06").addClass("activ").siblings("li").removeClass("activ");
    });
	
	
	$(".regions .cats-list li a").click(function (event) {
		event.preventDefault();
    });
	
	$(".map a").click(function (event) {
		event.preventDefault();
    });
	
	$(".cats-list li.t-05 a").click(function () {
	 $(this).parents().find(".city-maps").children(".city-2").show().siblings("li").hide();
	  $(this).parents("li").addClass("activ").siblings("li").removeClass("activ");
	  $(this).parents().find(".map").children(".moscva").addClass("activ").siblings("a").removeClass("activ");
	  $(this).parents().find(".offices").children("#g-02").addClass("current").siblings("li").removeClass("current");
    });
	
	$(".cats-list li.t-06 a").click(function () {
	 $(this).parents().find(".city-maps").children(".city-3").show().siblings("li").hide();
	  $(this).parents("li").addClass("activ").siblings("li").removeClass("activ");
	  $(this).parents().find(".map").children(".kiyv").addClass("activ").siblings("a").removeClass("activ");
	  $(this).parents().find(".offices").children("#g-03").addClass("current").siblings("li").removeClass("current");
    });
	
	$(".cats-list li.t-07 a").click(function () {
	 $(this).parents().find(".city-maps").children(".city-1").show().siblings("li").hide();
	  $(this).parents("li").addClass("activ").siblings("li").removeClass("activ");
	  $(this).parents().find(".map").children(".tula").addClass("activ").siblings("a").removeClass("activ");
	  $(this).parents().find(".offices").children("#g-01").addClass("current").siblings("li").removeClass("current");
    });
	
	
	
	$(".review-body").hide();
	
	$(".leave-review").click(function (event) {
      $(this).parents().next(".review-body").slideToggle(2000);
	  event.preventDefault();
    });
	
	$(".inf a").hover(
      function () {
        $(this).parents(".inf").prevAll(".plash").show();
      }
    );
	
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
	
	
	
	

});
//end ready

