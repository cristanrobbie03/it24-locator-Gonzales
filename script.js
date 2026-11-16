const map = L.map("map").setView([8.38214, 124.86737], 13
);
L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
maxZoom: 19
}
).addTo(map);

const marker = L.marker([ 8.35306, 124.81292 ]).addTo(map);
marker.bindPopup("<b>Damilag</b><p>Welcome to Damilag</p>"
);


L.circle([8.35306,  124.81292], {
color: "blue",
fillColor: "#30a3ec",
fillOpacity: 0.3,
radius: 2000
}).addTo(map);


map.on("click", function(event) {
const lat = event.latlng.lat;
const lng = event.latlng.lng;

L.popup()
.setLatLng(event.latlng)
.setContent(
"Latitude: " + lat.toFixed(5) +
"<br>Longitude: " + lng.toFixed(5)
)
.openOn(map);
});

const locations = [
{ name: "Manolo", lat: 8.36739, lng: 124.86586 },
{ name: "Gonzales Home", lat: 8.36434, lng: 124.80896  },



];

locations.forEach(function(place) {
L.marker([place.lat, place.lng])
.addTo(map)
.bindPopup(place.name);
});