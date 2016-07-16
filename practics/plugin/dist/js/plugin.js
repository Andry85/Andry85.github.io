(function( $ ){

  
  $.fn.greenify = function( options ) {

  		var $link = this;

  		var defaul = {
  			color: "#556b2f",
            backgroundColor: "white",
            fontSize: "34px"
  		}
 
        // This is the easiest way to have default options.
        var settings = $.extend(defaul, options);
 

 		$link.css({color: settings.color, backgroundColor: settings.backgroundColor, fontSize: settings.fontSize})


        return this;
 
    };
 
})( jQuery );
     
     

    

    

    


   


   
    