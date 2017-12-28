jQuery(document).ready(function() {		
if (!$.browser.opera) {

		// select element styling
		$('select.select').each(function(){
			var title = $(this).attr('title');
			if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
			$(this)
				.css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
				.after('<span class="select">' + title + '</span>')
				.change(function(){
					val = $('option:selected',this).text();
					$(this).next().text(val);
					})
		});

	};
	
	
	$(function() {
		
			$('ul.tab-list').delegate('li:not(.activ)', 'click', function() {
				$(this).addClass('activ').removeClass('no-activ').siblings().removeClass('activ').addClass('no-activ')
					.parents('div.tabs-inner').find('div.tab-box').hide().eq($(this).index()).fadeIn(150);
			})
		
		});
	

});

