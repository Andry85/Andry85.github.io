// JavaScript Document
$(document).ready( function(){

    // A smooth transition on the links.
        $(function() {
            $('.navbar-nav > li a[href*=#]:not([href=#]),a.logo[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                    && location.hostname == this.hostname) {

                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top //offsets for fixed header
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
                        scrollTop: target.offset().top //offset height of header here too.
                    }, 1000);
                    return false;
                }
            }
        });

    // Lighting options links while scrolling
        $('body').scrollspy({ target: '#navbar-example' });


    // Accordion effect for jobs.
        $(".row-hide").hide();
        $("a.accordion-link").click(function(event) {
            event.preventDefault();
            $(this).toggleClass("activ");
            $(this).parents(".row-accordion").siblings("tr").find("a.accordion-link").removeClass("activ");
            $(this).parents(".row-accordion").next(".row-hide").toggle(300).siblings(".row-hide").hide();
            $(this).parent("td").siblings("td").find(".btn").toggleClass("current");
            $(this).parents(".row-accordion").siblings("tr").find(".btn").removeClass("current");
        });
        $(".row-accordion button.btn").click(function(event) {
            event.preventDefault();
            $(this).toggleClass("current");
            $(this).parents(".row-accordion").siblings("tr").find("button.btn").removeClass("current");
            $(this).parents(".row-accordion").next(".row-hide").toggle(300).siblings(".row-hide").hide();
            $(this).parent("td").siblings("td").find("a.accordion-link").toggleClass("activ");
            $(this).parents(".row-accordion").siblings("tr").find("a.accordion-link").removeClass("activ");
        });



    // The effect of showing and hiding the top menu.
        function onResize() {
            var offseter = $('.header-bottom');
            var offset = offseter.offset();
            var wiw = window.innerWidth;
            if(wiw > 767) {
                $('.header-top').hide();
                $(window).scroll(function() {
                    if($(window).scrollTop() >= offset.top) {
                        $('.header-top').show();
                    }
                    else {
                        $('.header-top').hide();
                    }
                })
            }
            else
            {
                $('.header-top').show();
            }
        }
        onResize();
        $(window).resize(onResize);



    // gallery.
        (function($) {
            $(function() {
                var jcarousel = $('.jcarousel');

                jcarousel
                    .on('jcarousel:reload jcarousel:create', function () {
                        var carousel = $(this),
                            width = carousel.innerWidth();

                        if (width >= 1025) {
                            width = width / 3;

                        }
                        else if (width >= 768) {
                            width = width / 2;
                        }
                        else if (width >= 320) {
                            width = width / 1;
                        }

                        carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
                    })
                    .jcarousel({
                        wrap: 'circular'
                    });

                $('.jcarousel-control-prev')
                    .jcarouselControl({
                        target: '-=1'
                    });

                $('.jcarousel-control-next')
                    .jcarouselControl({
                        target: '+=1'
                    });

                $('.jcarousel-pagination')
                    .on('jcarouselpagination:active', 'a', function() {
                        $(this).addClass('active');
                    })
                    .on('jcarouselpagination:inactive', 'a', function() {
                        $(this).removeClass('active');
                    })
                    .on('click', function(e) {
                        e.preventDefault();
                    })
                    .jcarouselPagination({
                        perPage: 1,
                        item: function(page) {
                            return '<a href="#' + page + '">' + page + '</a>';
                        }
                    });
            });
        })(jQuery);












});
//end ready

