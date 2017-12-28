$(function(){

  $(".n01").click(function () {
        $(".m01").fadeIn("slow");
		$("ul.houses li:not(.m01)||li:not(.m00)").fadeOut("slow");
		$(".forms h3").addClass("cur");
		$("ul.submenu li").removeClass("cur");
		$(".forms p span:eq(0)").removeClass("showall");
		$(".forms p span:eq(1)").addClass("showall");

  });
  
   $(".n02").click(function () {
        $(".m02").fadeIn("slow");
		$("ul.houses li:not(.m02)||li:not(.m00)").fadeOut("slow");
		$("ul.submenu li.n02").addClass("cur");
		$("ul.submenu li:not(.n02)").removeClass("cur");
		$(".forms h3").removeClass("cur");
		$(".forms p span:eq(0)").removeClass("showall");
		$(".forms p span:eq(1)").addClass("showall");
		

  });
   
   $(".n03").click(function () {
        $(".m03").fadeIn("slow");
		$("ul.houses li:not(.m03)||li:not(.m00)").fadeOut("slow");
		$("ul.submenu li.n03").addClass("cur");
		$("ul.submenu li:not(.n03)").removeClass("cur");
		$(".forms h3").removeClass("cur");
		$(".forms p span:eq(0)").removeClass("showall");
		$(".forms p span:eq(1)").addClass("showall");

  });
   
    $(".n04").click(function () {
        $(".m04").fadeIn("slow");
		$("ul.houses li:not(.m04)||li:not(.m00)").fadeOut("slow");
		$("ul.submenu li.n04").addClass("cur");
		$("ul.submenu li:not(.n04)").removeClass("cur");
		$(".forms h3").removeClass("cur");
		$(".forms p span:eq(0)").removeClass("showall");
		$(".forms p span:eq(1)").addClass("showall");

  });
	
	
	 $(".first").click(function () {
        $(".m05").fadeIn("slow");
		$("ul.houses li:not(.m05)||li:not(.m00)").fadeOut("slow");
		$("ul.submenu li").removeClass("cur");
		$(".forms h3").removeClass("cur");
		$(".forms p span:eq(0)").addClass("showall");
		$(".forms p span:eq(1)").removeClass("showall");
		

  });
	
	
  
  $(".forms p span:eq(0)").click(function () {
    
		
		$(".m01").fadeIn("slow");
		$("ul.houses li:not(.m01)||li:not(.m00)").fadeOut("slow");
		$(".forms h3").addClass("cur");
		$("ul.submenu li").removeClass("cur");
		$(".forms p span:eq(0)").removeClass("showall");
		$(".forms p span:eq(1)").addClass("showall");
		

  });
  
 
   
   $("ul.houses li:first").css('display','block');
 
 
  });