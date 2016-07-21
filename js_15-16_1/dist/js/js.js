$(function(){

	

	$.ajax({
	  url: "https://pixabay.com/api/?key=2953875-64107f3e4a827b9cba547e216&q=yellow+flowers&image_type=photo",
	  dataType : "jsonp",    
      success: function (data) {
           

            var images = document.getElementById("images");
    		images.innerHTML = tmpl("pics", data);
        }
	  });



  


});