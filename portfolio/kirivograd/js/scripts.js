jQuery(document).ready(function() {
		
			
	$(".partners ul li a.banner img").eq(1).hide();
	
	$(".partners ul li a.banner").hover(
      function () {
		$(this).children("img").eq(0).hide();
		$(this).children("img").eq(1).show();
      }, 
      function () {
		$(this).children("img").eq(1).hide();
		$(this).children("img").eq(0).show();

      }
    );
	
		
	});