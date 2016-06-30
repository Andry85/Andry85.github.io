var map;
$(document).ready(function(){
    map = new GMaps({
        el: '#map',
        lat: 32.084000,
        lng: 34.806488,
        zoomControl : false,
        panControl :  false,
        mapTypeControl: false,
        streetViewControl: false
    });
    map.drawOverlay({
        lat: map.getCenter().lat(),
        lng: map.getCenter().lng(),
        layer: 'overlayLayer',
        content: '<div class="overlay"><div class="overlay_arrow above"></div></div>',
        verticalAlign: 'top',
        horizontalAlign: 'center'
    });
});