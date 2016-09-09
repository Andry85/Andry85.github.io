$(document).ready(function(){
    

    $(".owl-demo").owlCarousel({
        autoPlay : 3000,
        stopOnHover : true,
        navigation:true,
        pagination: false,
        singleItem : true,
        autoHeight : true,
        slideSpeed : 300
      });


	
	$.ajax({
	  url: "https://pixabay.com/api/?key=2953875-64107f3e4a827b9cba547e216&q=word&image_type=all",
	  dataType : "jsonp",    
	  success: function (data) {
	        var images = document.getElementById("images");
			images.innerHTML = tmpl("pics", data);

			var $grid = $('.grid').masonry({
			  columnWidth: '.grid-sizer',
			  itemSelector: '.grid-item',
			  gutter: '.gutter-sizer',
			  percentPosition: true
			});

			$grid.on( 'click', '.grid-item-content', function( event ) {
			  $( event.currentTarget ).parent('.grid-item').toggleClass('is-expanded');
			  $grid.masonry();
			});
	    }
	});

	$(".btn").on( "click", function(event) {
  		event.preventDefault();
  		var valuetext = $('#textInput').val();
  		
  		$.ajax({
		  url: "https://pixabay.com/api/?key=2953875-64107f3e4a827b9cba547e216&q="+ valuetext +"&image_type=all",
		  dataType : "jsonp",    
	      success: function (data) {
	            var images = document.getElementById("images");
	    		images.innerHTML = tmpl("pics", data);

	    		var $grid = $('.grid').masonry({
				  columnWidth: '.grid-sizer',
				  itemSelector: '.grid-item',
				  gutter: '.gutter-sizer',
				  percentPosition: true
				});

				$grid.on( 'click', '.grid-item-content', function( event ) {
				  $( event.currentTarget ).parent('.grid-item').toggleClass('is-expanded');
				  $grid.masonry();
				});

	        }
		  });
  			
	});

	
    
  
    
});
