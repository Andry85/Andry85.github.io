// JavaScript Document
$(document).ready( function(){

    $('.trigger').click(function () {
        $('.nav').slideToggle();
        $(this).toggleClass('activ');
        $('.main').toggleClass('compress');
    });

    $(".nav_menu li.singup a").click(function (event) {
        event.preventDefault();
        $("#popap-signup").fadeIn();
    });

    $(".nav_menu li.login a").click(function (event) {
        event.preventDefault();
        $("#popap-autorization").fadeIn();
    });

    $(document).keyup(function(event){
        if (event.keyCode == 27) {
            $(".popap").fadeOut();
        }
    });
	
	$('.search .btn').click(function (event) {
        event.preventDefault();
        $('.search input').toggle();
        $(this).parents().find('.search').toggleClass('activ');
    });

});
//end ready

