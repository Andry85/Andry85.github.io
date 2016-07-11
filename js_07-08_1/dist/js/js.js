jQuery(function($) {
  
		

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

});





	 
	 

	

	

	


   


   
    