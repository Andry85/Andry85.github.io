var map;
$(document).ready(function(){
    prettyPrint();
    map = new GMaps({
        div: '#map',
        lat: 49.225017,
        lng: 28.411106
    });

    map.addMarker({
        lat: 49.225017,
        lng: 28.411106,
        title: 'htmlverstka.biz',
        infoWindow: {
            content: '<p>Tel: 068-328-85-41<br/> E-mail: htmlverstka.biz@gmail.com<br/> Icq: 560-809-361<br/> Skype: shapovala</p>'
        }
    });
});