$(document).ready(function(){


    $("#contactform").validate({
        
       rules:{ 
        
            name_row:{
                required: true,
            },
            
            email_row:{
                required: true,
                email: true
            },

            textarea_row:{
                required: true,
                minlength: 4,
            },
        
       },
       
       messages:{
        
            name_row:{
                required: "This field is required",
            },
            
            email_row:{
                required: "This field is required",
                email: "Please enter your e-mail address",
            },
            textarea_row:{
                required: "This field is required",
                minlength: "The message must be at least 4 characters",
            },       
        
       }
        
    });


}); //end of ready