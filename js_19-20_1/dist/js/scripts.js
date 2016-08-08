$(document).ready(function(){
    

    $(".owl-demo").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });
    

    $( "#accardion li h3" ).click(function() {
	  if ($(this).parent().hasClass("activ")) {


	  		$(this).next("p").slideUp();
	  		$(this).children("span").text("+");
	  		$(this).parent().removeClass("activ");

	  }
	  else {

			$(this).next("p").slideDown();
			$(this).parent().addClass("activ");
			$(this).parent().siblings().removeClass("activ");
			$(this).parent().siblings().children("p").slideUp();
			$(this).children("span").text("-");
			$(this).parent().siblings().children("h3").find("span").text("+");

	  }
	});

	$(".fancybox").fancybox();
    
});