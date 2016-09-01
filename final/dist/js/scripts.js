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
	        }
		  });
  			
	});


	$('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: '.grid-sizer',
	  gutter: '.gutter-sizer',
	  percentPosition: true
	});
    
  
    
});