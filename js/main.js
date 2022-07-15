"use strict";
(async function() {
// prepare the query parameters to identify us to openweather
// and give it our weather query
	let queryParameters = new URLSearchParams({
		APPID: OPEN_WEATHER_APPID,
		q: "San Antonio, US",
		units: "imperial"
	});
// concat the query parameters onto the URL
	fetch("http://api.openweathermap.org/data/2.5/weather?" + queryParameters, {
			method: "GET"
		}).then(async function(response) {
		// use await to wait for the json data and then do something with it
		const data = await response.json();
		console.log('The entire response:', data);
		console.log('Diving in - here is current information: ', data.main);
		console.log('A step further - information for tomorrow: ', data);
	});

})();