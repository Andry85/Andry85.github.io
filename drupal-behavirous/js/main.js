(function ($) {



  setTimeout(function(){ 
      $('body').prepend('<p>First text</p>');
  }, 3000);
  

  Drupal.behaviors.paragrapg = {

      attach: function (context, settings) {

  

      // $('p', context).once('paragrapg').each(function() {
      //     $(this, context).css('color', 'red');
      // });

      // $('p', context).once('paragrapg').each(function() {
      //   $(this).css('color', 'red');
      // });

      // $('p').once('paragrapg').each(function() {
      //   $(this).css('color', 'red');
      // });
   

      }
      
  };

  


})(jQuery);