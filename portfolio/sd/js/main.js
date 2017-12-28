var menu,mobileView;

// JavaScript Document
$(document).ready( function(){


	/* PIE */
	if (window.PIE) {
		$('').each(function() {
		PIE.attach(this);
		});
	}
	/* End PIE */

    /* Adapt menu */
    menu =  $('.sidebar');
    $(window).resize(onResize);
    onResize();
    $('.clMenuLink').click(function(e) {
        e.preventDefault();
        menu.toggle();
        $(this).toggleClass("cur");

    });
    function onResize() {
        var wiw = window.innerWidth;
        if(wiw <= 767) {
            if(!mobileView) menu.hide();
            mobileView = true;
            $('.product_list > li:first-child').insertAfter('.product_list > li:last-child');

        } else {
            mobileView = false;
            menu.show();
            $('.product_list > li:first-child').insertBefore('.product_list > li:last-child');
        }
    }
    /* End Adapt menu */


    /* Product Details */
    $('.det-top').click(function() {
        $(this).next('.select-list').show();
    });
    $('.select-list').click(function() {
        $(this).hide();
    });
    $("#select-size > dd > a").click(function(eventObject) {
        var str = $(this).text();
        $(this).parents('.select-list').prev('.det-top').find('.title').html(str);
        eventObject.preventDefault();
    });
    $("#select-color > dd > a").click(function(eventObject) {
        $(this).parents('.select-list').prev('.det-top').find('.title a img').hide().attr('src', $(this).attr('href'));
        $(this).parents('.select-list').prev('.det-top').find('.title a img').load(function() {
            $(this).fadeIn(100);
        });
        eventObject.preventDefault();
    });
    /* End Product Details */


    $('.down').click(function () {
        var $input = $(this).parent('.rules').prevAll('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.upp').click(function () {
        var $input = $(this).parent('.rules').prevAll('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

});
//end ready

