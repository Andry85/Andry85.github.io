$(document).ready(function(){
    
    $.ajax({
        url: "https://repetitora.net/api/JS/Images", 
        success: function(result){
            console.log(result);
        }});
  });