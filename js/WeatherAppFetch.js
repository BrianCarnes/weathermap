'use strict';
function WeatherAppFetch(location) {
	// prepare the query parameters to identify us to openweather
// and give it our weather query
	let queryParameters = new URLSearchParams({

		APPID: OPEN_WEATHER_APPID,
		d: location, //user input location
		lat: 29.423017,
		lon: -98.48527,
		units: "imperial"
	});
// concat the query parameters onto the URL
	fetch("http://api.openweathermap.org/data/2.5/onecall?" + queryParameters, {
		method: "GET"
	}).then(async function (response) {
		// use await to wait for the json data and then do something with it
		const data = await response.json();
		console.log('The entire response:', data);
		console.log('Diving in - here is current information: ', data.current.temp);
		console.log('A step further - information for tomorrow: ', data);
		// let convertDT = data.current.dt * 1000
		// let dateObject = new Date(convertDT);
		// today = dateObject.toLocaleString("en-US");
		// currentTemp = data.current.temp;
	});
}

