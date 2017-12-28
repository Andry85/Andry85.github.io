function clickmini(itemNum)
{
	makeitem(itemNum);
	return false;
}



function makeitem(itemNum)
{
	  html = "<li class='m0"+itemNum+" slide'>"+ $("li.m0"+itemNum).html() + "</li>";
    //$("li.m0"+itemNum).remove();
    $(html).css("opacity", 0).prependTo(".slider-container").animate({opacity: 1},1000);
  	//$(".slider-container").prepend(html).fadeIn('slow');;
}



jQuery(document).ready(function(){
															


function elementSupportsAttribute(element, attribute) {
var test = document.createElement(element);
return (attribute in test);
};


if (!elementSupportsAttribute('textarea', 'placeholder')) {
$("#example-three")
.data("originalText", $("#example-three").text())
.css("color", "#f2f2f2")
.focus(function() {
var $el = $(this);
if (this.value == $el.data("originalText")) {
this.value = "";
}
})
.blur(function() {
if (this.value == "") {
this.value = $(this).data("originalText");
}
});
} else {
$("#example-three")
.attr("placeholder", $("#example-three").text())
.text("");
}




var curItemNum = 0;

$(".next").click(function()
{
	curItemNum++;
	
	if(curItemNum == 6)
		curItemNum = 1;
	
	makeitem(curItemNum);
	return false;
});

$(".prew").click(function()
{
	curItemNum--;
	
	if(curItemNum == 0)
		curItemNum = 5;
	
	makeitem(curItemNum);
	return false;
});

$(".slider-inner").hide();

$(".content").click(function () {
	   $(".slider-inner").delay(50).fadeIn('fast');
		$(".slider-list").fadeOut('fast');
	   
	   
      }
);
$(".content").hover(
      function () {
	   
	   
      },
      function () {
	   $(".slider-inner").fadeOut('fast');
		$(".slider-list").delay(50).fadeIn('fast');
	   
	   
      }
    );




$(".inactiveelem").mouseover(function()
{
	itemNum = parseInt($(this).attr("rel"));
	makeitem(itemNum);
	curItemNum = itemNum;
});





});
