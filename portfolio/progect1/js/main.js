// JavaScript Document
$(function() {
    /* Start Slider monitor pic */
        $('#slides').slidesjs({
            width: 396,
            height: 364,
            navigation: {
                active: false
            },
            pagination: {
                active: true


            },
            play: {
                auto: true,
                effect: "slide"
            },
            effect: {
                fade: {
                    speed: 600
                }
            }
        });

    /* End Slider monitor pic */

    /* Start popap */
        $(".popap-inside").css('opacity', 0.7);
        $(".login-link").click(function () {
            $(this).parents().find(".popap-outer").fadeIn(200);
            $(".popap-inside").css('opacity', 1.0);
        });

        $(".cloze").click(function () {
            $(this).parents().find(".popap-outer").fadeOut(200);
            $(".popap-inside").css('opacity', 0.7);
        });

        $(document).keyup(function(event){
            if (event.keyCode == 27) {
                $(".popap-outer").fadeOut(200);
                $(".popap-inside").css('opacity', 0.7);
            }
        });
    /* End popap */



    /* Start menu for mobile */
        $('.menu').slicknav();
    /* End menu for mobile */

    /* Start add-menu for mobile */
        $(".add-menu li").hover(
            function() {
                $(this).addClass("activ").animate({width: "159px"}, 500);
                $(this).siblings().removeClass("activ").animate({width: "41px"}, 500);
                $(this).children().find(".add-text").show(500);
                $(this).siblings().children().find(".add-text").hide(500);
            }, function() {
                $(this).removeClass("activ").animate({width: "41px"}, 500);
                $(this).children().find(".add-text").hide(500);
            }
        );
    /* End  add-menu for mobile */


    /* Start tabs */
        $('.category-list').delegate('li:not(.activ)', 'click', function() {
            $(this).addClass('activ').siblings().removeClass('activ').parents('div.asset-outer').find('div.tabBlock').hide().eq($(this).index()).fadeIn(150);
        });
        $('.tabs-list').delegate('li:not(.activ)', 'click', function() {
            $(this).addClass('activ').siblings().removeClass('activ').parents('div.deposit_outer').find('div.tabBox').hide().eq($(this).index()).fadeIn(150);
        });

        $('.tabBoxAccountHeading ul').delegate('li:not(.current)', 'click', function() {
            $(this).addClass('current').siblings().removeClass('current').parents('div.tabBoxAccount').find('div.dealsBox').hide().eq($(this).index()).fadeIn(150);
        });

        $('.account-tabs-list').delegate('li:not(.curr)', 'click', function() {
            $(this).addClass('curr').siblings().removeClass('curr').parents('div.tabBox').find('div.account-tabBox').hide().eq($(this).index()).fadeIn(150);
        });

        $('.paymements-list').delegate('li:not(.activ)', 'click', function() {
            $(this).addClass('activ').siblings().removeClass('activ').parents('div.tabBox').find('div.paymentBox').hide().eq($(this).index()).fadeIn(150);
        });
    /* End tabs */


    /* Start Effect accordion for Asset Index page */
        $(".content-list > li:first-child").addClass("current");
        $(".content-list > li h5").click(function(){
            $(this).next("ul").slideToggle("slow").parents("li").siblings().children("ul:visible").slideUp("slow");
            $(this).toggleClass("current");
            $(this).parents("li").siblings().removeClass("current");
        });
    /* End Effect accordion for Asset Index page */





    /* Start tooltip */
        $('.qussion').hover(function() {
            $(this).children(".tooltip").fadeIn();
        },function() {
            $(this).children(".tooltip").fadeOut();
        });
    /* End tooltip */




    /* Start clicks on links */
        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                    && location.hostname == this.hostname) {

                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 70 //offsets for fixed header
                        }, 1000);
                        return false;
                    }
                }
            });
            //Executed on page load with URL containing an anchor tag.
            if($(location.href.split("#")[1])) {
                var target = $('#'+location.href.split("#")[1]);
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 70 //offset height of header here too.
                    }, 1000);
                    return false;
                }
            }
        });
    /* End clicks on links */

    /* Start menu */
        $('.topMenuL ul li').mouseenter(function() {
            $(this).find('ul').slideDown(300);
        }).mouseleave(function() {
            $(this).find('ul').slideUp(300);
        });
    /* End menu*/





});
//end read


