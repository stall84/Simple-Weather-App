

// Section to hold the API communication mechansim .

const url1 = "https://api.worldweatheronline.com/premium/v1/weather.ashx";
const apiKey = "0eab6e3837ad474491b152802202103";
// hardcoding atlanta's lat/long initially
var latLon = `&q=33.75,84.39`
const callURL = `${url1}?key=${apiKey}${latLon}&format=json`;

console.log(callURL);