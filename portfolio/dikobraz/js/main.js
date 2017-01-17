$(function() {

	/*********************************************************/
						/* Start SLIDER  */
	/********************************************************/
	$(".owl").owlCarousel({
		autoPlay : 3000,
		stopOnHover : true,
		navigation:true,
		pagination: true,
		singleItem : true,
		autoHeight : true,
		slideSpeed : 300
	});
	/*********************************************************/
						/* End SLIDER  */
	/********************************************************/


	/*********************************************************/
						/* Start TABS  */
	/********************************************************/
	$('#list li a').on('click', function(e){
		e.preventDefault();
		var $tabs = $("#tabs");
		var $tabsList = $tabs.children();
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		var $parent = $(this).parent('li');
		var $parentIndex = $parent.index();
		var $current = $tabsList[$parentIndex];
		$($current).addClass('active').siblings().removeClass('active');
	});
	/*********************************************************/
						/* End TABS  */
	/********************************************************/


	/*********************************************************/
						/* Start CUSTOM SELECT  */
	/********************************************************/
        $(".chosen-select").chosen();
    /*********************************************************/
						/* End CUSTOM SELECT  */
	/********************************************************/


	/*********************************************************/
						/* Start SLIDER PRICES  */
	/********************************************************/
	$("#slider").slider({
		min: 0,
		max: 30000,
		values: [0,30000],
		range: true,
		step: 1000,
		stop: function(event, ui) {
			$("input#minCost").val($("#slider").slider("values",0));
			$("input#maxCost").val($("#slider").slider("values",1));
			
	    },
	    slide: function(event, ui){
			$("input#minCost").val($("#slider").slider("values",0));
			$("input#maxCost").val($("#slider").slider("values",1));
	    }
	});
	/*********************************************************/
						/* End SLIDER PRICES  */
	/********************************************************/


	/*********************************************************/
						/* PHOTO SLIDER PRODUCTMAIN  */
	/********************************************************/
		$('#small-photo li a').on('click', function(e){
			e.preventDefault();
			$(this).parent('li').addClass('active').siblings().removeClass('active');
			$('#big-photo a img').hide().attr('src', $(this).attr('href'));
			$('#big-photo a img').load(function() {							  
				$(this).fadeIn(2000);							 
			 });
		});
	/*********************************************************/
						/* End PHOTO SLIDER PRODUCTMAIN  */
	/********************************************************/

	/*********************************************************/
						/* Start CARUSEL  */
	/********************************************************/
	$(".slideProducts ul").owlCarousel({
		stopOnHover : true,
		navigation: true,
		pagination: false,
		singleItem : false,
		autoHeight : true,
		slideSpeed : 300,
		items : 4
	});
	/*********************************************************/
						/* End CARUSEL  */
	/********************************************************/

});