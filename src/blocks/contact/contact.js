import ymaps from "ymaps";

ymaps
    .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
    .then(maps => {
        const map = new maps.Map('contact_map', {
            center: [55.762373, 37.607898],
            zoom: 16,
            controls: []
        },{
            suppressMapOpenBlock: true,
        });

        let placemark = new maps.Placemark([55.762373, 37.607898], {}, { preset: 'islands#redIcon' });
        map.geoObjects.add(placemark);
    })
    .catch(error => console.log('Failed to load Yandex Maps', error));