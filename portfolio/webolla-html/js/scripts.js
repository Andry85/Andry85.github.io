$(document).ready(function(){
		$('.selectWrap').click(function(){
			return false;
		});
		$('.selectWrap .link').click(function(){
			return false;
		});
		$('.selectWrap select[name="country"]').change(function(){
			var value = $(this).val();
			$('.selectWrap .link').text( $('option[value="'+value+'"]', this).text() );
		});
		$('.selectWrap select').css({'opacity':0});
	
	});