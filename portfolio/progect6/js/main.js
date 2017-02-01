$(function() {

	
	/*********************************************************/
						/* Start TABS  */
	/********************************************************/
	$('#list li a').on('click', function(e){
		e.preventDefault();
		var $tabs = $("#tabs");
		var $tabsList = $tabs.children();
		$(this).parent('li').addClass('tabsList__item--activ').siblings().removeClass('tabsList__item--activ');
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





	


});