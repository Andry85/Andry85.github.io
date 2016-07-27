(function($) {


     $.fn.slider = function( options ) {

        var $link = this;

        var defaul = {
            prev: "Prev",
            next: "Next"
        }

        var settings = $.extend(defaul, options);

        $($link).wrap('<div class="carousel-hider"></div>');

        var $prev = $('<div class="carousel-arrow-left"><span>' + settings.prev + '</span></div>');
        var $next = $('<div class="carousel-arrow-right"><span>' + settings.next + '</span></div>');
        $($link).parent().parent().append($next);
        $($link).parent().parent().prepend($prev);


        var leftUIEl = $prev;
        var rightUIEl = $next;

     
        var pixelsOffset = 125;
        var currentLeftValue = 0;
        var elementsCount = $link.find('li').length;
        var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
        var maximumOffset = 0;
     
        leftUIEl.click(function() {        
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 125;
                $link.animate({ left : currentLeftValue + "px"}, 500);
                 $(this).removeClass("default");
                 rightUIEl.removeClass("default");
            } else {
                $(this).addClass("default");
            }         
        });
     
        rightUIEl.click(function() {        
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 125;
                $link.animate({ left : currentLeftValue + "px"}, 500);
                $(this).removeClass("default");
                leftUIEl.removeClass("default");
            } else {
                $(this).addClass("default");
            }        
        });

        

        return this;
 
    };

    

})(jQuery);;(function($) {
      $(".carousel-list").slider({
            prev: "Назад",
            next: "Вперед"
        });
    })(jQuery);