// JavaScript Document
$(function() {

    /* this script connects only to the home page */

    $('.header').addClass('no-bg');
//    $('.logo').addClass('no-visible');

    $(window).scroll(function() {
        if($(window).scrollTop() > ($('.big-logo-wrap').height())) {
//            $('.big-logo').css('visibility','hidden');
            $('.header').removeClass('no-bg');
//            $('.logo').removeClass('no-visible');
        }
        else {
//            $('.big-logo').css('visibility','visible');
            $('.header').addClass('no-bg');
//            $('.logo').addClass('no-visible');
        };
    });
});
//end read
