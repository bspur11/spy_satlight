const mymap = L.map('issMap').setView([0, 0], 1);

// Setting the Attribution to OpenstreetMap
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributers';

// Getting the Map Tiles from Openstreetmap
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {
  attribution
});
tiles.addTo(mymap);

// Making a marker with an ICON
var issIcon = L.icon({
  iconUrl: 'International_Space_Station.svg.png',
  iconSize: [32, 20],
  iconAnchor: [16, 10]
});

const marker = L.marker([0, 0], {
  icon: issIcon
}).addTo(mymap);

// Declare the API and Use FETCH
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

const getIss = async () => {
  const response = await fetch(api_url);
  const data = await response.json();


  // Parse out the long and lat.
  const {
    latitude,
    longitude
  } = data;
  marker.setLatLng([latitude, longitude]);
  console.log(latitude);
  console.log(longitude);

  document.getElementById('lon').innerHTML = longitude;
  document.getElementById('lat').innerHTML = latitude;


  // console.log(Number(data.velocity));
  // const velocity = Number(data.velocity);
  // console.log(data.altitude);
  // console.log(`The Station is traveling at a velocity of ${data.velocity.toFixed(2)} km/hr.`);
};
getIss();