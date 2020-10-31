(function ($) {

  'use strict';



  
  

  $(".button").click(function(){
    var $button = $(this);
    $.ajax({url: "text.txt", success: function(result){
      $(".gettingText").html(result);
      $button.toggleClass('on');
    }});
    $('body').css('background-color', 'white');
  });
  
  

  Drupal.behaviors.paragrapg = {

      attach: function (context, settings) {

   
          $('body').css('background-color', 'blue'); // тут буде визиватись щоразу після аджаксі запросів
       

          
          console.log('attach');

          $('body', context).once('body').each(function() {
            // $('body').css('background-color', 'blue'); // тут буде визиватись лише раз
              var self = $(this);
              self.addClass('asyncClass');
              
              if (self.hasClass('asyncClass')) {
                  setTimeout(function(){ 
                    self.removeClass('asyncClass');
                }, 1000);
              }

              
            

              // $(".button").click(function(){
              //   var $button = $(this);
              //   $.ajax({url: "text.txt", success: function(result){
              //     $(".gettingText").html(result);
              //     $button.toggleClass('on');
              //   }});
              //   self.css('background-color', 'white');
              // });
    

          });


          $('p', context).once('paragrapg').each(function() {
            $(this).css('background', 'red');
            console.log(this);
          });

          $('p', context).findOnce('paragrapg').each(function() {
            if (!$(this).hasClass('last')) {
              $(this).css('background', 'green');
              console.log(this);
            }
           
          });
  
      },
      detach: function(context, settings) {
        $('p', context).removeOnce('paragrapg').each(function() {
          if ($(this).hasClass('last')) {
            $(this).css('background', '');
            console.log(this);
          }
        });
      }
      
  };

  


})(jQuery);