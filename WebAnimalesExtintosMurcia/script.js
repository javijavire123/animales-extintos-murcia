var map = L.map('map').setView([37.9922, -1.1307], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

attribution: '© OpenStreetMap'

}).addTo(map);

L.marker([37.9922, -1.1307])
.addTo(map)
.bindPopup("Ejemplo de yacimiento fósil");