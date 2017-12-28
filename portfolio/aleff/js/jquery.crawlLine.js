/*******************************************************************************************/	
// jquery.event.wheel.js - rev 1 
// Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)
// Liscensed under the MIT License (MIT-LICENSE.txt)
// http://www.opensource.org/licenses/mit-license.php
// Created: 2008-07-01 | Updated: 2008-07-14
// $(body).bind('wheel',function(event,delta){    alert( delta>0 ? "up" : "down" );    });
/*******************************************************************************************/
;(function($){$.fn.wheel=function(a){return this[a?"bind":"trigger"]("wheel",a)};$.event.special.wheel={setup:function(){$.event.add(this,b,wheelHandler,{})},teardown:function(){$.event.remove(this,b,wheelHandler)}};var b=!$.browser.mozilla?"mousewheel":"DOMMouseScroll"+($.browser.version<"1.9"?" mousemove":"");function wheelHandler(a){switch(a.type){case"mousemove":return $.extend(a.data,{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY});case"DOMMouseScroll":$.extend(a,a.data);a.delta=-a.detail/3;break;case"mousewheel":a.delta=a.wheelDelta/120;if($.browser.opera)a.delta*=-1;break}a.type="wheel";return $.event.handle.call(this,a,a.delta)}})(jQuery);

/*
 * jQuery crawlLine v1.1.0 
 *
 * Copyright (c) 2008 Taranets Aleksey
 * email: aleks_tar@ukr.net
 * www: markup-javascript.com
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

jQuery.fn.crawlLine = function(_options){
    // defaults options	
    var _options = jQuery.extend({
	    speed:1,
	    crawElement:'div',
	    textElement:'span',
	    hoverClass:'viewText'
    },_options);

    return this.each(function(){
	    var _THIS = jQuery(this);
	    var _el = $(_options.crawElement, _THIS);
	    var _text = $(_options.textElement, _THIS);
	    var _clone = _text.clone();
	    var _elWidth = 0;
	    var _k = 1;
	
		// set parametrs *******************************************************
		var _textHeight = _text.outerHeight(true);				var _divWidth = _text.outerWidth(true);		
		var _duration = _textHeight*50 / _options.speed;		_text.css('display','block')		
		_text.after(_clone);
		_el.css('Height',_textHeight*2, 'Width','200px');
	    
	    var animate = function() {
			_el.animate({marginTop:-_textHeight}, {queue:false, duration:_duration*_k, easing:'linear', complete:function(){
				_el.css('marginTop','0');
				_k=1;
				animate();
			}})
	    }
	    animate();
		
	    _THIS.hover(function() {
			_el.stop();
			_THIS.addClass(_options.hoverClass);
	    }, function(){
			_THIS.removeClass(_options.hoverClass);
			_k = (_textHeight + parseInt(_el.css('marginTop')))/_textHeight;
			animate();
	    })
		
		_THIS.bind('wheel',function(event,delta){
			var _marginScroll;
			if (delta>0) {
				_marginScroll = parseInt(_el.css('marginTop')) + 20;				if (_marginScroll > 0) _marginScroll = 0;				
				_el.animate({marginTop:_marginScroll}, {queue:false, duration:100, easing:'linear', complete:function(){
					_k = (_textHeight + parseInt(_el.css('marginTop')))/_textHeight;
				}})
			} else {
				_marginScroll = parseInt(_el.css('marginTop')) - 20;
				_el.animate({marginTop:_marginScroll}, {queue:false, duration:100, easing:'linear', complete:function(){
					_k = (_textHeight + parseInt(_el.css('marginTop')))/_textHeight;
				}})				
			}
		});		
	});
}







