$(function(){
'use strict';


var object = {

	name: 'Тест по програмированию',
	resulte: 'Проверить мои результаты',
	

	questions: {
					'1': {
						'title': 'Что такое Html?',
						'answers': 
							[
								'Язык разметки веб сайтов',
								'Вкусное блюдо',
								'Денежное средство'
							],
						'check': 0
						},
					'2': {
						'title': 'Что такое Css?',
						'answers': 
							[
								'Метод шифрования',
								'Каскадные таблицы стилей',
								'Вид помидор'
							],
						'check': 1
						},
					'3': {
						'title': 'Что такое Javascript?',
						'answers': 
							[
								'Средство для похудения',
								'Символическая музыка',
								'Язык программирования'
							],
						'check': 2
						}
				}

		
};

	localStorage.setItem("obj", JSON.stringify(object));
	var test = localStorage.getItem("obj");
	test = JSON.parse(test);

	var formaTest = document.getElementById("forma");
    formaTest.innerHTML = tmpl("forma_tmpl", test);

  

		$( "#button").click(function(event) {
			event.preventDefault();
	
			
			var cicle = test.questions;

			for (var prop in cicle) {

				var check =  cicle[prop].check;

				 var list = $("input:checked");
					
				
					$(list).each(function(i) {

						var parentIndex = $(this).parent("li").index();


						
						 if ( parentIndex == check) {
						 	$(".resultate").text("Правильно");
						 } 
						 else {

							$(".resultate").text("Ошибка");

						}
	
					});

				}


			$('input:checkbox').removeAttr('checked');
			  
			});




			$( "input" ).on( "click", function() {
				  
				  if ($('input').is(":checked")) {
						$(this).parent("li").siblings("li").children("input").removeAttr("checked")
					}

				});



			





	     

	     
	     	

	


});