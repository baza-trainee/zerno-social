var map = L.map('map').setView([48.7902308, 22.9469080], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker([48.7902308, 22.9469080]).addTo(map)
    .bindPopup('<b>Село Збини 29</b><br>Мукачівський район<br>Закарпатська область<br>Україна.')
    .openPopup();