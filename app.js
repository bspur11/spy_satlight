
 const getIss = async () => {
  const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
  const response = await fetch(api_url);
  const data = await response.json();
  // Parse out the long and lat.

const { latitude, longitude} = data;
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
