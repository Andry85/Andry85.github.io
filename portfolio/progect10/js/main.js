// JavaScript Document
$(function() {

    $('.menu').slicknav();


    $(".menu-ico").click(function () {
        $(this).toggleClass("activ");
        $(".main").toggleClass("open");
        $(".sidebar").slideToggle(50);
    });


    $(".nav .menu").accordion({
        accordion:false,
        speed: 500
    });




    /* user Menu */
    $("#toogle-menu").click(function () {
        $(this).children("ul").slideToggle(50);
        $(this).toggleClass("activ");
    });

    // Start choosen
    jQuery(".select-outer select").chosen().change(function(e){
        console.log(e);
    });
    // End choosen

    $('.tabs-list').delegate('li:not(.cur)', 'click', function() {
        $(this).addClass('cur').siblings().removeClass('cur').parents('div.tabs-wrap').find('div.tabBox').hide().eq($(this).index()).fadeIn(150);
    });

    $('#table').columnHover({eachCell:true, hoverClass:'betterhover'});


});
//end read



