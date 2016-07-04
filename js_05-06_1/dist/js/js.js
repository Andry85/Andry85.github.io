'use strict';


var addEvent, removeEvent;

if (document.addEventListener) {
  addEvent = function(elem, type, handler) {
    elem.addEventListener(type, handler, false);
  };
  removeEvent = function(elem, type, handler) {
    elem.removeEventListener(type, handler, false);
  };
} else {
  // for ie, no this
  addEvent = function(elem, type, handler) {
    elem.attachEvent("on" + type, handler);
  };
  removeEvent = function(elem, type, handler) {
    elem.detachEvent("on" + type, handler);
  };
};


(function timer(){

			
	
			var mil = 0;
			var sec = 0;
			var min = 0;
			var hour = 0;
			var miliseconds = document.getElementById('milliseconds');
			var seconds = document.getElementById('seconds');
			var minutes = document.getElementById('minutes');
			var hours = document.getElementById("hours");
			var start = document.getElementById("start");
			var stoping = document.getElementById("stop");
			stoping.style.display = "none";
			var clearing = document.getElementById("clearing");
			

			function clock () {
				mil++;
				if (mil > 999) {
				    mil = 0;
				    sec++;
				    if(sec > 59) {
				    	sec = 0;
				    	min++;
				    	if(min > 59) {
				    		min = 0;
				    		hour++;
				    	}
				    }
				};
				
				miliseconds.innerHTML = mil;

				if(sec < 10) {
					seconds.innerHTML = '0' + sec;
				}
				else {
					seconds.innerHTML = sec;
				}

				if(min < 10) {
					minutes.innerHTML = '0' + min;
				}
				else {
					minutes.innerHTML = min;
				}

				if(hour < 10) {
					hours.innerHTML = '0' + hour;
				}
				else {
					hours.innerHTML = hour;
				};

		   };


		  

		   var timerId
		   	var hendler = function intervalFunction () {
		   			timerId = setInterval(clock, 1);
		   			start.style.display = "none";
		   			stoping.style.display = "block";
		    };

		    var hendlerStop = function intervalFunction () {
		   			clearTimeout(timerId);
		   			stoping.style.display = "none";
		   			start.style.display = "block";
		   			start.innerHTML = 'Continue';
		   			start.setAttribute("class", "alert-info");

		   			
		    };


		    var resetFu = function resetFunction () {
		    	start.style.display = "block";
		    	start.innerHTML = 'Start';
		    	start.removeAttribute("class", "alert-info");
		    	start.setAttribute("class", "alert-success");
		    	stoping.style.display = "none";
		        clearTimeout(timerId);
		    	mil = 0;
		        sec = 0;
			    min = 0;
			    hour = 0;
			    
			    
				miliseconds.innerHTML = 0;
				

				if(sec < 10) {
					seconds.innerHTML = '0' + 0;
				}
				else {
					seconds.innerHTML = 0;
				}

				if(min < 10) {
					minutes.innerHTML = '0' + 0;
				}
				else {
					minutes.innerHTML = 0;
				}

				if(hour < 10) {
					hours.innerHTML = '0' + 0;
				}
				else {
					hours.innerHTML = 0;
				};
			    
		    };


			

			addEvent(start, "click", hendler);
			addEvent(stoping, "click", hendlerStop);
			addEvent(clearing, "click", resetFu);


  		
 }());
  
  	





	 
	 

	

	

	


   


   
    