

// Section to hold the API communication mechansim .

const ipGeoURL = 'https://api.ipgeolocation.io/ipgeo';
const ipGeoKEY = '?apiKey=7fe2f42dd89d4dc6b2f11b4b47167af0';
const ipGeoCallURL = `${ipGeoURL}${ipGeoKEY}&fields=geo`;

fetch(ipGeoCallURL)
    .then(res => res.json())
    .then(data => console.log('ipGeo Data: ', data));



const wwXURL = "https://api.worldweatheronline.com/premium/v1/weather.ashx";
const wwXKey = "0eab6e3837ad474491b152802202103";
// hardcoding atlanta's lat/long initially
var latLon = `&q=33.75,84.39`
const wwXcallURL = `${wwXURL}?key=${wwXKey}${latLon}&format=json`;

//console.log(callURL);

fetch(wwXcallURL)
    .then(res => res.json())
    .then(data => console.log('wwX Data: ', data));
