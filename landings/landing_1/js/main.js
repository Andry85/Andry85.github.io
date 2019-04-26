 window.onload = function() {
    
    var actionArr = document.querySelectorAll('.callform');
    var formPopap = document.querySelector('.formPopap');
    var clozeBtn = document.querySelector('.formPopapInner__cloze');
    var shadow = document.querySelector('.formPopap__shadow');

    
    for (var i = 0; i < actionArr.length; i++) {
	   actionArr[i].addEventListener("click", function(){
	    	formPopap.classList.add("active");
	   });
	}

    
   

	clozeBtn.addEventListener("click", function(){
    	formPopap.classList.remove("active");
	});

	shadow.addEventListener("click", function(){
    	formPopap.classList.remove("active");
	});


	// TIMER

	// Set the date we're counting down to
	var countDownDate = new Date("May 18, 2019 15:37:25").getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

	  // Get todays date and time
	  var now = new Date().getTime();

	  // Find the distance between now and the count down date
	  var distance = countDownDate - now;

	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  // Display the result in the element with id="demo"

	  var daysBlocks = document.querySelectorAll('.days .digits');
	  var hoursBlocks = document.querySelectorAll('.hours .digits');
	  var minutesBlocks = document.querySelectorAll('.minutes .digits');
	  var secondsBlocks = document.querySelectorAll('.seconds .digits');

	  for (var i = 0; i < daysBlocks.length; i++) {
		   daysBlocks[i].innerHTML = days;
	  }
	  for (var i = 0; i < hoursBlocks.length; i++) {
		   hoursBlocks[i].innerHTML = hours;
	  }
	  for (var i = 0; i < minutesBlocks.length; i++) {
		   minutesBlocks[i].innerHTML = minutes;
	  }
	  for (var i = 0; i < secondsBlocks.length; i++) {
		   secondsBlocks[i].innerHTML = seconds;
	  }



	  // If the count down is finished, write some text 
	  if (distance < 0) {
	    clearInterval(x);
	  }
	}, 1000);



};