// JavaScript Document

 define(['jquery', 'jquerytransit', 'layerslider', 'kreaturamedia', 'owl', 'wow', 'jquerysteller', 'retina', 'modernizr'], function ($) {


 	$(function() {

	   $('#layerslider').layerSlider({
	        thumbnailNavigation :   false,
	        navPrevNext             : false,
	        navStartStop            : false,
	        navButtons              : false
	    });

	   $("#carusel").owlCarousel({
	        autoPlay : 3000,
	        stopOnHover : true,
	        navigation: false,
	        pagination: false,
	        singleItem : true,
	        autoHeight : true,
	        slideSpeed : 300
	      }); 

	   $.stellar({
	        horizontalScrolling: false,
	        responsive: true
	    });


	});

	if (Modernizr.csstransforms) {
		new WOW().init();
	}



 });


//end read

