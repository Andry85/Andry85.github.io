'use strict';

$(function () {

	let object = {

		name: 'Тест по програмированию',
		resulte: 'Проверить мои результаты',

		questions: {
			'1': {
				'title': 'Что такое Html?',
				'answers': ['Язык разметки веб сайтов', 'Вкусное блюдо', 'Денежное средство'],
				'check': 0
			},
			'2': {
				'title': 'Что такое Css?',
				'answers': ['Метод шифрования', 'Каскадные таблицы стилей', 'Вид помидор'],
				'check': 1
			},
			'3': {
				'title': 'Что такое Javascript?',
				'answers': ['Средство для похудения', 'Символическая музыка', 'Язык программирования'],
				'check': 2
			}
		}

	};

	localStorage.setItem("obj", JSON.stringify(object));
	let test = localStorage.getItem("obj");
	test = JSON.parse(test);

	let formaTest = document.getElementById("forma");
	formaTest.innerHTML = tmpl("forma_tmpl", test);

	$("#button").click(function (event) {
		event.preventDefault();

		$('ul').each(function () {

			let check = $(this).children().find("input").is(":checked");
			console.log(check);

			if (check) {

				$('input:checked').each(function () {
					let indexParent = $(this).parent("li").index();
					let classParent = parseInt($(this).parents("ul").attr("class"));
					if (indexParent == classParent) {
						$(".resultate").text("Поздровляем! Вы дали правильный ответ на все вопросы.");
					} else {
						$(".resultate").text("Ответ не правильный");
						return false;
					}
				});
			} else {
				$(".resultate").text("Вы не оветели на все вопросы");
				return false;
			}
		});
	});
});