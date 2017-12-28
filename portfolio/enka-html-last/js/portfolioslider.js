jQuery(document).ready(function(){
$('#slideshow').after('<ul id="small">').cycle({
	fx:     'fade',
	speed:  'slow',
	timeout: 0,
	pager:  '#small',
	pagerAnchorBuilder: function(idx, slide) {
		return '<li><a href="#"><span></span><img src="' + slide.src + '" width="60" height="55"></a></li>';
	}
  });

});