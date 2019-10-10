$(document).ready(function(){


	var pageNumber = document.querySelector('#page-number');

	$(".btn").click(function(){

		getImages(pageNumber.value, onDataReceived);
		
	});



	function onDataReceived (result){
		console.log(result);
		result.forEach(function(item, i, arr) {
			const img = document.createElement('img');
			img.src = item.thumbnail;
			const link = document.createElement('a');
			link.href = item.original;
			link.target = '_blank';
			link.appendChild(img);
			
			document.querySelector('#result').appendChild(link);
		});
    }
    
	
  });