// JavaScript Document
$(document).ready( function(){


    // First languages selector
    $("#flagtoogle").click(function(event) {
        event.preventDefault();
        $('#lang-selector').toggle();
    });
    $('#lang-selector').find('a').click(function(e) {
        e.preventDefault();
        var str = $(this).children('i').text();
        $('#flagtoogle i').html(str);
        $('#flagtoogle .folFlag').attr('class', $(this).find('.folFlag').attr('class'));
        $('#lang-selector').hide();
    });


    // Second languages selector
    $("#flagtoogle-second").click(function(event) {
        event.preventDefault();
        $('#lang-selector-second').toggle();
    });
    $('#lang-selector-second').find('a').click(function(e) {
        e.preventDefault();
        var strnew = $(this).children('i').text();
        $('#flagtoogle-second i').html(strnew);
        $('#lang-selector-second').hide();
    });

    $('.informer').popover('hide')



});
//end ready

