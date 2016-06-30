// JavaScript Document
$(function() {

     $('.menu').slicknav();

     // Start choosen
        jQuery(".chosen").chosen().change(function(e){

            console.log(e);

        });
    // End choosen



    /* Start popap */
    $(".btnn-2").click(function () {
        $(this).parents().find("#popap-login").fadeIn(200);
    });

    $(".cloze").click(function () {
        $(this).parents().find(".popap-outer").fadeOut(200);
    });

    $(document).keyup(function(event){
        if (event.keyCode == 27) {
            $(".popap-outer").fadeOut(200);
        }
    });

    $("a.forgot").click(function () {
        $(this).parents().find("#popap-password").fadeIn(200);
        $(this).parents().find("#popap-login").fadeOut(200);
    });



    /* End popap */

    /* Start sidebar menu */
        $('.submenu li span .arrow').click(function() {
            $(this).parents().next('ul').slideToggle(500);
            $(this).toggleClass("cur");
        }).parents().next('ul').hide();


    /* End sidebar menu */


    //Scrolling to id.
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

    /* Start Tooltip */
        $(".toolTipList li span").hover(
            function () {
                $(this).next(".tooptipOuter").show();
            },
            function () {
                $(this).next(".tooptipOuter").hide();
            }
        );
    /* End Tooltip */



    /* Start tabs */
        $('.tabs-list').delegate('li:not(.activ)', 'click', function() {
            $(this).addClass('activ').siblings().removeClass('activ').parents('div.deposit_outer').find('div.tabBox').hide().eq($(this).index()).fadeIn(150);
        });

        $('#account-tabs-main-list').delegate('li:not(.curr)', 'click', function() {
            $(this).addClass('curr').siblings().removeClass('curr').parents('div.page').find('div.account-tabBox').hide().eq($(this).index()).fadeIn(150);
        });


        $('.currency-list').delegate('li:not(.cur)', 'click', function() {
            $(this).addClass('cur').siblings().removeClass('cur').parents('div.bank-entry').find('div.paymentsInfo').hide().eq($(this).index()).fadeIn(150);
        });

        $(".bank-title").click(function() {
          $(this).next(".bank-entry").slideToggle("slow");
          $(this).children('.bank-arrow').toggleClass("activ");
        });

    /* End tabs */

    $('.menu > li').mouseenter(function() {
        $(this).find('ul').slideDown(300);
    }).mouseleave(function() {
        $(this).find('ul').slideUp(300);
    });


    






});
//end read


