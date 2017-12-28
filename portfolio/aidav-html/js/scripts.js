$(function() {
		$( "#datepicker" ).datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true
		});
	
		$(".block").hover(
  			function () {
    		$(this).children(".add").css("display", "block");
  			},
		  function () {
			$(this).children(".add").css("display", "none");
		  }
		);	
		
	});