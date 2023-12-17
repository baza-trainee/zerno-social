function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) || (window.innerWidth <= 768);
}

var map;

if (isMobileDevice()) {
    map = L.map('map', {
        center: [48.7902308, 22.9469080],
        zoom: 17, 
        maxZoom: 17, 
        minZoom: 17, 
    });
} else {

    map = L.map('map', {
        center: [48.7902308, 22.9469080],
        zoom: 15,
        maxZoom: 17
    });
}

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
}).addTo(map);

var marker = L.marker([48.7902308, 22.9469080]).addTo(map)
    .bindPopup(
        `<div>
            <span data-lang="map_1">Село Збини 29.</span><br>
            <span data-lang="map_2">Мукачівський район.</span><br>
            <span data-lang="map_3">Закарпатська обл.</span><br>
            <span data-lang="map_4"> Україна.</span>
        </div>`
        )
    .openPopup();
