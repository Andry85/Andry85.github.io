$(function() {

	/*********************************************************/
						/* START SCROLL  */
	/********************************************************/
		var deck = new $.scrolldeck({
			buttons: '.navi__link',
			easing: 'easeInOutExpo'
		});
		var deck_2 = new $.scrolldeck({
			buttons: '.stick__link',
			easing: 'easeInOutExpo'
		});
	/*********************************************************/
						/* END SCROLL */
	/********************************************************/


	/*********************************************************/
						/* START FIXED MENU  */
	/********************************************************/
		 
		 // The effect of showing and hiding the top menu.
	        function onResize() {
	            var offseter = $('.preambuleBottom');
	            var offset = offseter.offset();
	            var wiw = window.innerWidth;
	            
	                $('.stick').hide();
	                $(window).scroll(function() {
	                    if($(window).scrollTop() >= offset.top) {
	                        $('.stick').show();
	                    }
	                    else {
	                        $('.stick').hide();
	                    }
	                })  
	        }
	        onResize();
	        $(window).resize(onResize);
		
	/*********************************************************/
						/* END FIXED MENU */
	/********************************************************/

	/*********************************************************/
						/* START FANCYBOX  */
	/********************************************************/
		$(".certificates__link").fancybox();
		$('.fancyform').fancybox();
	/*********************************************************/
						/* END FANCYBOX */
	/********************************************************/

	/*********************************************************/
						/* START FORM VALIDATION  */
	/********************************************************/
	$("#form").validate({
        
       rules:{ 
        
            name:{
                required: true,
                minlength: 4,
                maxlength: 50,
            },
            
            email:{
                required: true,
                email: true
            },
        
       },
       messages:{
            name:{
                required: "Це поле є обов`язковим для заповнення",
                minlength: "Логін повинен бути мінімум 4 символу",
                maxlength: "Максимальне число символів - 50",
            },
            email:{
                required: "Це поле є обов`язковим для заповнення",
                email: "Будь ласка, введіть адресу електронної адреси",
            },     
       }
        
    });
    /*********************************************************/
						/* END FORM VALIDATION */
	/********************************************************/


	/*********************************************************/
						/* START PHONE MASK  */
	/********************************************************/
		$(".phone").mask("+38 (999) 999-99-99");
	/*********************************************************/
						/* END PHONE MASK */
	/********************************************************/

	/*********************************************************/
						/* START SELECT TARIFF  */
	/********************************************************/	
		$("#scheduleFirst").find(".scheduleTable__col").click(function() {
		  $(this).parents("#scheduleFirst").find("td").removeClass("scheduleTable__col--activ");
		  $(this).toggleClass("scheduleTable__col--activ");
		});
		$("#scheduleSecond").find(".scheduleTable__col").click(function() {
		  $(this).parents("#scheduleSecond").find("td").removeClass("scheduleTable__col--activ");
		  $(this).toggleClass("scheduleTable__col--activ");
		});
		
	/*********************************************************/
						/* END SELECT TARIFF */
	/********************************************************/


	


});