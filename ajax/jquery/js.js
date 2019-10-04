$(document).ready(function(){
    
    $.ajax({
        url: "https://repetitora.net/api/JS/Images", 
        success: function(result){
            console.log(result);
            result.forEach(function(item, i, arr) {
			   const img = document.createElement('img');
			   img.src = item.thumbnail;
			   const link = document.createElement('a');
			   link.href = item.original;
			   link.target = '_blank';
			   link.appendChild(img);
			  
			  document.querySelector('body').appendChild(link);
			});


        }});
  });