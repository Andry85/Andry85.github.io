// JavaScript Document
$(document).ready( function(){


    var deck = new $.scrolldeck({
        buttons: '.navi ul li a',
        easing: 'easeInOutExpo'
    });


    $("a.arrow").click(function(){
        var selected = $(this).attr('href');
        $.scrollTo(selected, 1000);
        return false;
    });

    $(window).scroll(function() {

        if($(window).scrollTop() > ($('.header').height()-5)) {
            $('.navi').addClass('activ');
        }
        else {
            $('.navi').removeClass('activ');
        };

        var d = $('.slogan');
        var offset = d.offset();
        var offsetTopp = offset.top;
        var anime = offsetTopp - (d.height()/2);


        if ($(window).scrollTop() > anime) {
           d.css('opacity', '0.3');
        }
        else {
            d.css('opacity', '1.0');
        }
    });

    var visota = $(window).height();
    $('.header-pic').css('height', visota + 'px');


    $( window ).resize(function() {
        var visota = $(window).height();
        $('.header-pic').css('height', visota + 'px');
    });






    $('#menu').slicknav();

});
//end ready

