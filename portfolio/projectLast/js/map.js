
/*********************************************************/
						/* Start YANDEX MAP  */
/********************************************************/
ymaps.ready(init);
var myMap, myPlacemark;


function init(){ 
    myMap = new ymaps.Map("map", {
        center: [55.773945, 37.59109],
        zoom: 16,
		behaviors:['default', 'scrollZoom']
    }); 
    
    myPlacemark = new ymaps.Placemark([55.773945, 37.59109], {
        hintContent: 'г. Москва',
        balloonContent: 'ул. 2-ая Тверская-ямская 40'
    });
    
    myMap.geoObjects.add(myPlacemark);
	myMap.behaviors.disable('drag');
	myMap.options.set('scrollZoomSpeed', 0.5);

}
/*********************************************************/
						/* End YANDEX MAP  */
/********************************************************/