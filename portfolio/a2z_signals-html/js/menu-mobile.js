<!--  // Стрим меню для мобильных устройств -->
$(function(){
	// Добавляем элемент select 
	$('<select />').appendTo('#nav');

	//Добавляем опции в элемент select
	$('<option />', {
		'selected': 'selected',
		'value' : '',
		'text': 'go to'
	}).appendTo('#nav select');

	$('#nav ul li a').each(function(){
		var target = $(this);

		$('<option />', {
			'value' : target.attr('href'),
			'text': target.text()
		}).appendTo('#nav select');

	});

	// Событие onclicking при нажатии на ссылку
	$('#nav select').on('change',function(){
		window.location = $(this).find('option:selected').val();
	});
});


