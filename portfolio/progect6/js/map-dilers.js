ymaps.ready(init);
        var dilersMap, moscovPlacemark, novgorodPlacemark, permPlacemark, chelybinskPlacemark, sararovPlacemark, tambovPlacemark, lipetskPlacemark, voronegPlacemark;


        function init(){ 

             dilersMap = new ymaps.Map("dilers-map", {
                center: [54.842963, 50.101738],
                zoom: 6,
                behaviors:['default', 'scrollZoom']
            }); 

            moscovPlacemark = new ymaps.Placemark([55.75396, 37.620393], {
                hintContent: 'г. Москва'
                }, {

                    iconLayout: 'default#image',
                    iconImageHref: 'img/myIcon.png',
                    // Размеры метки.
                    iconImageSize: [20, 28],
                    iconImageOffset: [-10, -28]
                });

            novgorodPlacemark = new ymaps.Placemark([56.326887, 44.005986], {
                hintContent: 'Нижний Новгород'
                }, {

                    iconLayout: 'default#image',
                    iconImageHref: 'img/myIcon.png',
                    // Размеры метки.
                    iconImageSize: [20, 28],
                    iconImageOffset: [-10, -28]
                });

                permPlacemark = new ymaps.Placemark([58.010259, 56.234195], {
                hintContent: 'Пермь'
                }, {

                    iconLayout: 'default#image',
                    iconImageHref: 'img/myIcon.png',
                    // Размеры метки.
                    iconImageSize: [20, 28],
                    iconImageOffset: [-10, -28]
                });

                chelybinskPlacemark = new ymaps.Placemark([55.160283, 61.400856], {
                hintContent: 'Челябинск'
                }, {

                    iconLayout: 'default#image',
                    iconImageHref: 'img/myIcon.png',
                    // Размеры метки.
                    iconImageSize: [20, 28],
                    iconImageOffset: [-10, -28]
                });

                 sararovPlacemark = new ymaps.Placemark([51.533103, 46.034158], {
                hintContent: 'Саратов'
                }, {

                    iconLayout: 'default#image',
                    iconImageHref: 'img/myIcon.png',
                    // Размеры метки.
                    iconImageSize: [20, 28],
                    iconImageOffset: [-10, -28]
                });

                 tambovPlacemark = new ymaps.Placemark([52.721246, 41.452238], {
                hintContent: 'Тамбов'
                }, {

                    iconLayout: 'default#image',
                    iconImageHref: 'img/myIcon.png',
                    // Размеры метки.
                    iconImageSize: [20, 28],
                    iconImageOffset: [-10, -28]
                });

                  lipetskPlacemark = new ymaps.Placemark([52.61022, 39.594719], {
                hintContent: 'Липецк'
                }, {

                    iconLayout: 'default#image',
                    iconImageHref: 'img/myIcon.png',
                    // Размеры метки.
                    iconImageSize: [20, 28],
                    iconImageOffset: [-10, -28]
                });

                voronegPlacemark = new ymaps.Placemark([51.661535, 39.200287], {
                hintContent: 'Воронеж'
                }, {

                    iconLayout: 'default#image',
                    iconImageHref: 'img/myIcon.png',
                    // Размеры метки.
                    iconImageSize: [20, 28],
                    iconImageOffset: [-10, -28]
                });   
            

             dilersMap.geoObjects.add(moscovPlacemark);
             dilersMap.geoObjects.add(novgorodPlacemark);
             dilersMap.geoObjects.add(permPlacemark);
             dilersMap.geoObjects.add(chelybinskPlacemark);
             dilersMap.geoObjects.add(sararovPlacemark);
             dilersMap.geoObjects.add(tambovPlacemark);
             dilersMap.geoObjects.add(lipetskPlacemark);
             dilersMap.geoObjects.add(voronegPlacemark);
             dilersMap.behaviors.disable('drag');
             dilersMap.options.set('scrollZoomSpeed', 0.5);

        }



