// JavaScript Document
$(function() {

    $('.menu').slicknav();


    $(".owl-demo").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });


    $('.testimonials-list li').hover(function() {
        $(this).children().find(".popap").slideDown();
    },function() {
        $(this).children().find(".popap").slideUp();
    });

    // A smooth transition on the links.
    $(function() {
        $('.menu li a[href*=#]:not([href=#]),a.logo[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 55 //offsets for fixed header
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
                    scrollTop: target.offset().top - 55 //offset height of header here too.
                }, 1000);
                return false;
            }
        }
    });

    // Accordion effect for Open Positions.
    $(".row-hide").hide();
    $("a.accordion-link").click(function(event) {
        event.preventDefault();
        $(this).parents(".row-accordion").toggleClass("curr");
        $(this).parents(".row-accordion").siblings("tr").removeClass("curr");
        $(this).parents(".row-accordion").next(".row-hide").toggle(300).siblings(".row-hide").hide();
    });

    $("button.btn").click(function(event) {
        event.preventDefault();
        $(this).parents(".row-accordion").toggleClass("curr");
        $(this).parents(".row-accordion").siblings("tr").removeClass("curr");
        $(this).parents(".row-accordion").next(".row-hide").toggle(300).siblings(".row-hide").hide();
    });


    // The effect of showing and hiding the top menu.
    function onResize() {
        var offseter = $('.slider-outer');
        var offset = offseter.offset();
        $(window).scroll(function() {
            if($(window).scrollTop() >= offset.top) {
                $('.header').addClass("sticky");
            }
            else {
                $('.header').removeClass("sticky");
            }
        });


    }
    onResize();
    $(window).resize(onResize);

    // Start choosen
        jQuery(".select-outer select").chosen().change(function(e){
            console.log(e);
        });
    // End choosen


});
//end read


