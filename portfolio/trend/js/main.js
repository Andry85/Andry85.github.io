// JavaScript Document
$(document).ready( function(){
	/* PIE */
	if (window.PIE) {
		$('').each(function() {
		PIE.attach(this);
		});
	};


    $(".soc-toogle").click(function () {
        $(this).next(".soc-list").slideToggle();
        $(this).toggleClass("activ");
    });

    $('#nav > ul > li').mouseenter(function() {
        $(this).find('ul').slideDown(300);
    }).mouseleave(function() {
        $(this).find('ul').slideUp(300);
    });

    $('.category-list li:nth-child(4n-3)').css('marginLeft','0px');


    $("a.back-top").click(function(){
        var selected = $(this).attr('href');
        $.scrollTo(selected, 1000);
        return false;
    });










});
//end ready

