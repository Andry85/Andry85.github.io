function initMenu() {
$('.submenu ul').hide();
$('.submenu ul:last').show();
$('.submenu li a').click(
function() {
var checkElement = $(this).next();
if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
return false;
}
if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
$('.submenu ul:visible').slideUp('normal');
checkElement.slideDown('normal');
return false;
}
}
);
$(".submenu li:last-child").addClass("activ");
$(".submenu li a").click(function(){
	$(this).parents("li").toggleClass("activ");
	$(this).parents("li").siblings("li").removeClass("activ");
});

}
$(document).ready(function() {initMenu();});
	
