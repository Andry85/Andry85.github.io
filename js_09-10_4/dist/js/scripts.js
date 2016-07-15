jQuery(document).ready(function(){
          
        
  


	jQuery(".menu li").mouseenter(function() {
  		jQuery(this).children("ul").slideDown(100);
  		jQuery(this).children("a").animate({
  			backgroundColor:"#949799",
  			color: "#ded46a"
    	}, 500 );

	});

	jQuery(".menu li").mouseleave(function() {
		jQuery(this).children("a").animate({
  			backgroundColor:"#ccc",
  			color: "#fff"
    	}, 500 );
  		jQuery(this).children("ul").slideUp(100).stop(true,true);
	});

	








});









     
     

    

    

    


   


   
    