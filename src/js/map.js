var map = L.map('map').setView([48.4312, 22.7172], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker([48.4312, 22.7172]).addTo(map)
    .bindPopup('<b>Село Збини 29</b><br>Мукачівський район<br>Закарпатська область<br>Україна.')
    .openPopup();