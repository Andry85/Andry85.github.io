var map;
$(document).ready(function(){
    map = new GMaps({
        el: '#map',
        lat: 32.069295,
        lng: 34.782998,
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