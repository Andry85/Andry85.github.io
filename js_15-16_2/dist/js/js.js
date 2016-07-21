$(function(){

	
	function Human() {
	  this.name = "Петр";
	  this.old = 40;
	  this.sex = "Мужчина";
	  this.height = "180см";
	  this.weight = "80кг";
	};



	Worker.prototype = new Human();
	function Worker() {
	  this.working = function (job,summa) {
	  		this.work = job;
	  	    this.salary = summa;
	  };
	};


	var worker_1 = new Worker();
	worker_1.working("Магазин Корона","5000грн");
	console.log('worker_1.name:', worker_1.name)
	console.log('worker_1.work:', worker_1.work);
	console.log('worker_1.salary:', worker_1.salary);
	console.log('___________________________________________');


	var worker_2 = new Worker();
	worker_2.working("Завод Рошен","1000грн");
	console.log('worker_2.name:', worker_2.name)
	console.log('worker_2.work:', worker_2.work);
	console.log('worker_2.salary:', worker_2.salary);
	console.log('___________________________________________');



	Student.prototype = new Human();
	function Student() {
	  this.name = "Иван";
	  this.watchTV = function (vnz,monay) {
	  		this.study = vnz;
	  	    this.stipend = monay;
	  };
	};


	var student_1 = new Student();
	student_1.watchTV("Политехнический институт","800грн");
	console.log('student_1.name:', student_1.name)
	console.log('student_1.old:', student_1.old);
	console.log('student_1.study:', student_1.study);
	console.log('student_1.stipend:', student_1.stipend);
	console.log('___________________________________________');


	var student_2 = new Student();
	student_2.watchTV("Институт тараса Шевченка","900грн");
	console.log('student_2.height:', student_2.height);
	console.log('student_2.study:', student_2.study);
	console.log('student_2.stipend:', student_2.stipend);
	console.log('___________________________________________');




});