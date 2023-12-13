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
    .bindPopup('<b>Село Збини 29</b><br>Мукачівський район<br>Закарпатська область<br>Україна.')
    .openPopup();
