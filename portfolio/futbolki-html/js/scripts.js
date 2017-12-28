$(function() {
		$('.ds_basket a').click(function(){	
		$(".ds_popap").fadeIn("fast");	
		});
		$('.ds_clos span').click(function(){	
		$(".ds_popap").fadeOut("fast");
		});
	$(document).keyup(function(event){
		if (event.keyCode == 27) {
			$(".ds_popap").fadeOut("fast");
		}
	});
	 
	 $(".ds_vibor-iiner input").click( function() {
			$(this).next("i").addClass('focus');
			$(this).parents().siblings().children("i").removeClass('focus');
});
	$(".ds_faq-inner ul li a").next("p").hide();
	$(".ds_faq-inner ul li a.cur").next("p").show();
	$(".ds_faq-inner ul li a").click(function(){
		$(this).next("p").slideToggle("slow");
		$(this).toggleClass("cur");
		$(this).parents().siblings().children("a").removeClass("cur");
		$(this).parents().siblings().children("p").hide();
	});	
	
	
	$(".ds_list-table tr td:last-child").addClass("border-second");

	$(".ds_list-table tr").hover(
	  function () {
		$(this).children().last().addClass("border");
	  },
	  function () {
		$(this).children().last().removeClass("border");
	  }
);



	$(".accordion .ds_outer:not(:last)").hide();

	$(".accordion h3").click(function(){
		$(this).next(".ds_outer").slideToggle("slow")
		.siblings(".ds_outer:visible").slideUp("slow");
	});
	
	
	
	
	$('.ds_poisk-input').focus(function(){	
		$(this).css({'color': '#000'});
		});
	
	$('.ds_txxx').focus(function(){	
		$(this).css({'color': '#000'});
		});	
	
	$('.ds_text').focus(function(){	
		$(this).css({'color': '#000'});
		});
	
	
	
	$('.ds_tab1-outer tr').click(function(){	
		$(this).parent().parent().parent().css({'background-color': '#cee5ea'});
		});	
	
	

	
});


