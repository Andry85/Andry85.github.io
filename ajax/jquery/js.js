$(document).ready(function(){


	var pageNumber = document.querySelector('#page-number');

	$(".btn").click(function(){

		$.ajax({
			url: `https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=1`, 
			success: function(result){
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
		}});
		
	});
    
    
	
  });