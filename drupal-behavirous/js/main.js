(function ($) {

  


  Drupal.behaviors.paragrapg = {

      COLOR: 'red',
      attach: function (context, settings) {

        var $self = this;
        console.log($self);


        $('p', context).once('paragrapg').each(function() {
          console.log(this);
          $(this).css('color', $self.COLOR);
        });
   

      },
      detach: function (context, settings) {
        $('p', context).removeOnce('paragrapg').each(function() {
          $(this).css('color', '');
        });
      }
      
  };

  


})(jQuery);