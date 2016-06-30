// JavaScript Document
$(function() {

    /* Search */
        $(".ic-search").click(function () {
            $(".search-wrap").slideToggle("slow");
            $(this).toggleClass("activ");
        });
        $(".ic-cloze").click(function () {
            $(this).parents().find(".search-wrap").fadeOut(200);
            $(this).parents().find(".ic-search").removeClass("activ");
        });
    /* End Search */
    $(window).resize(onResize);
    onResize();
    function onResize() {
        var wiw = window.innerWidth;
        if(wiw > 767) {
            /* height responsive start */
            var currWindowHeight= $(window).height();
            var currAreaHeight = currWindowHeight-101;
            var everyBoxHeight= (currAreaHeight/3);
            $(".slide-ins,.slidesjs-container,.slidesjs-control").css("height",currWindowHeight);
            $(".main-buttons").css("height",currAreaHeight);
            $(".main-buttons a").css("height",everyBoxHeight);
            var everyBoxWidth= $(".main-buttons a").width();
            var bgImgWidth = $(window).width() - everyBoxWidth;
            $(".slide-pic img").css("width",bgImgWidth);
            $(".slidesjs-pagination").css("width",bgImgWidth);
            /* height responsive end*/

        }
        else
        {
            $(".main-buttons").insertAfter(".page-main");
        }


    };
    /* user Menu */
    $("#toogle-menu").click(function () {
        $(this).next("ul").slideToggle(50);
    });

    $(document).click(function (event) {
        if ($(event.target).closest('.user-outer > li > ul').length == 0 && $(event.target).attr('id') != 'toogle-menu') {
            $('.user-outer > li > ul').hide();
        }
    });

    /* End user Menu */

    /* slide Menu */
        $(".ic-toogle").click(function () {
            $(".slide-menu").toggle("fast");
            $(this).toggleClass("activ");
        });
        $(document).click(function (event) {
            if ($(event.target).closest('.slide-menu').length == 0 && $(event.target).attr('id') != 'toogle') {
                $('.slide-menu').hide();
                $(".ic-toogle").removeClass("activ");
            }
        });
    /* End slide Menu */
    $('.menu').slicknav();




});
//end read


