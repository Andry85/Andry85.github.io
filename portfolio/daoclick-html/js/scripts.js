jQuery(document).ready(function(){
								

    
	// select element styling
	$('select.select').each(function(){
		var title = $(this).attr('title');
		if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
		$(this)
			.css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
			.after('<span class="select">' + title + '</span>')
			.change(function(){
				val = $('option:selected',this).text();
				$(this).next().text(val);
				})
	});

								
								
	
	
			
$('#slides').slides({
	preload: true,
	preloadImage: 'images/loading.gif',
	play: 5000,
	pause: 2500,
	hoverPause: true,
	animationStart: function(current){
		$('.caption').animate({
			bottom:-35
		},100);
		if (window.console && console.log) {
			// example return of current slide number
			console.log('animationStart on slide: ', current);
		};
	},
	animationComplete: function(current){
		$('.caption').animate({
			bottom:0
		},200);
		if (window.console && console.log) {
			// example return of current slide number
			console.log('animationComplete on slide: ', current);
		};
	},
	slidesLoaded: function() {
		$('.caption').animate({
			bottom:0
		},200);
	}
});		



function elementSupportsAttribute(element, attribute) {
var test = document.createElement(element);
return (attribute in test);
};


if (!elementSupportsAttribute('textarea', 'placeholder')) {
$("#example-three")
.data("originalText", $("#example-three").text())
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
		
		


});