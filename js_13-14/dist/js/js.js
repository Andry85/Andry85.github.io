$(function(){
'use strict';


var object = {

	title: 'Тест по програмированию',
	resulte: 'Проверить мои результаты',
	questions: ["Что такое Html","Что такое Css","Что такое Javascript"],
	answer: [
				["Язык разметки веб сайтов","Вкусное блюдо","Денежное средство"],
				["Метод шифрования","Каскадные таблицы стилей","Вид помидор"],
				["Средство для похудения","Символическая музыка","Язык программирования"]
			],
		
};

	localStorage.setItem("obj", JSON.stringify(object));
	var test = localStorage.getItem("obj");
	test = JSON.parse(test);

	var formaTest = document.getElementById("forma");
    formaTest.innerHTML = tmpl("forma_tmpl", test);

    console.log($( "input:checked").val());


 		

		$( "#button").click(function(event) {
			event.preventDefault();

			if ( 

				($('input#00') && $('input#11') && $('input#22')).is(":checked") 


				&&

				!($('input#01') && $('input#02') && $('input#10')&& $('input#12')&& $('input#20')&& $('input#21')).is(":checked")


			   )

			{
				

				$(".resultate").text("Правильно");

			} else {

				$(".resultate").text("Ошибка");
			}


			$('input:checkbox').removeAttr('checked');
			  

			  	
				
			 
			});



	     

	     
	     	

	


});