jQuery(document).ready(function() {
	$(".submenu li").hover(
  			function () {
    		$(this).prev("li").children("a").css("background", "none");

  			},
		  function () {
			$(this).prev("li").children("a").css("background", "url(images/submenu-li-a-bg.gif) left bottom no-repeat");
		  }
		);	
	
	
	
});





jQuery(document).ready(function(){

jQuery(".niceRadio").each(

function() {
     
     changeRadioStart(jQuery(this));
     
});


});


function changeRadio(el)

{

	var el = el,
		input = el.find("input").eq(0);
	var nm=input.attr("name");
		
	jQuery(".niceRadio input").each(
	
	function() {
     
		if(jQuery(this).attr("name")==nm)
		{
			jQuery(this).parent().removeClass("radioChecked");
		}
	   
	   
	});					  
	
	
	if(el.attr("class").indexOf("niceRadioDisabled")==-1)
	{	
		el.addClass("radioChecked");
		input.attr("checked", true);
	}
	
    return true;
}

function changeVisualRadio(input)
{

	var wrapInput = input.parent();
	var nm=input.attr("name");
		
	jQuery(".niceRadio input").each(
	
	function() {
     
		if(jQuery(this).attr("name")==nm)
		{
			jQuery(this).parent().removeClass("radioChecked");
		}
	   
	   
	});

	if(input.attr("checked")) 
	{
		wrapInput.addClass("radioChecked");
	}
}

function changeRadioStart(el)

{

try
{
var el = el,
	radioName = el.attr("name"),
	radioId = el.attr("id"),
	radioChecked = el.attr("checked"),
	radioDisabled = el.attr("disabled"),
	radioTab = el.attr("tabindex");
	radioValue = el.attr("value");
	if(radioChecked)
		el.after("<span class='niceRadio radioChecked'>"+
			"<input type='radio'"+
			"name='"+radioName+"'"+
			"id='"+radioId+"'"+
			"checked='"+radioChecked+"'"+
			"tabindex='"+radioTab+"'"+
            "value='"+radioValue+"' /><label>choose this</label></span>");
	else
		el.after("<span class='niceRadio'>"+
			"<input type='radio'"+
			"name='"+radioName+"'"+
			"id='"+radioId+"'"+
			"tabindex='"+radioTab+"'"+
	        "value='"+radioValue+"' /><label>choose this</label></span>");
	
	
	if(radioDisabled)
	{
		el.next().addClass("niceRadioDisabled");
		el.next().find("input").eq(0).attr("disabled","disabled");
	}
	

	el.next().bind("mousedown", function(e) { changeRadio(jQuery(this)) });
	el.next().find("input").eq(0).bind("change", function(e) { changeVisualRadio(jQuery(this)) });
	if(jQuery.browser.msie)
	{
		el.next().find("input").eq(0).bind("click", function(e) { changeVisualRadio(jQuery(this)) });	
	}
	el.remove();
}
catch(e)
{

}

    return true;
}
