
	  jQuery(function(){
$(".main_image .desc").show(); //Show Banner
$(".main_image .block").animate({ opacity: 0.65 }, 1 ); //Set Opacity
$(".image_thumb ul li:first").addClass('active'); //Add the active class (highlights the very first list item by default)
//runs function on click
$(".image_thumb ul li").click(function () {
$active = $(this);
slideSwitchClick();
})
.hover(function(){ //Hover effects on list-item
$(this).addClass('hover'); //Add class “hover” on hover
}, function() {
$(this).removeClass('hover'); //Remove class “hover” on hover out
});
//runs function, set timer here
$(function() {
setInterval( 'slideSwitchTimed()', 6000 );
});
});
function slideSwitchTimed() {
$active = $('.image_thumb ul li.active').next();
if ( $active.length == 0 ) $active = $('.image_thumb ul li:first'); //goes back to start when finishes
slideSwitch();
}
function slideSwitchClick() {
slideSwitch();
}
function slideSwitch() {
var $prev = $('.image_thumb ul li.active');
//Show active list-item
$prev.removeClass('active');
$active.addClass('active');
//Set Variables
var imgAlt = $active.find('img').attr("alt"); //Get Alt Tag of Image
var imgTitle = $active.find('a').attr("href"); //Get Main Image URL
var imgDesc = $active.find('.block').html(); //Get HTML of the “block” container
var imgDescHeight = $(".main_image").find('.block').height(); //Find the height of the “block”
if ($(this).is(".active")) { //If the list item is active/selected, then…
return false; // Don’t click through – Prevents repetitive animations on active/selected list-item
} else { //If not active then…
//Animate the Description
$(".main_image img").animate({ opacity: 0}, 250 );
$(".main_image .block").animate({ opacity: 0, marginBottom: -imgDescHeight }, 250 , function() {
$(".main_image .block").html(imgDesc).animate({ opacity: 0.85, marginBottom: "0" }, 250 );
$(".main_image img").attr({ src: imgTitle}).animate({ opacity: 1}, 1050 );



});
}
return false;
}



$(document).ready(function() {	
		var parentTaglineEl = $('#tagline');
		parentTaglineEl.cycle({
			fx: 'fade',
			speed: 1000,
			timeout: 10000,
			random:  0
		});
		
		
		$(".next").click(function(){
        $(this).addClass("act");
        return false;
    1});


	$(".next").mouseout(function(){
			$(this).removeClass("act");
			return false;
		});
	
	
	$(".prew").click(function(){
			$(this).addClass("act-1");
			return false;
		});
	
	$(".prew").mouseout(function(){
			$(this).removeClass("act-1");
			return false;
		});
			
	});

