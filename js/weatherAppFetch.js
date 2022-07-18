'use strict';
function WeatherAppFetch(location) {
	const day1Card = document.querySelector(".day1Card");
	const day2Card = document.querySelector(".day2Card");
	const day3Card = document.querySelector(".day3Card");
	const day4Card = document.querySelector(".day4Card");
	const day5Card = document.querySelector(".day5Card");
	const day6Card = document.querySelector(".day6Card");
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
		/* Use await to wait for the json data and then do something with it */
		/* Six Day Forecast */
		const data = await response.json();
		console.log('The entire response:', data);
		// console.log('Diving in - here is current information: ', data.current.temp);
		// console.log('A step further - information for tomorrow: ', data);
		/* Day 1 DOM Manipulation */
		let convertDT1 = data.daily[0].dt * 1000
		let dateObject1 = new Date(convertDT1);
		let today1 = dateObject1.toLocaleString("en-US", {weekday: 'long'});
		let currentTemp1 = parseInt(data.daily[0].temp.day);
		day1Card.innerHTML = `<h1>ICON</h1><h3>${today1}</h3><h2>${currentTemp1}&deg;F</h2>`
		/* Day 2 DOM Manipulation */
		let convertDT2 = data.daily[1].dt * 1000
		let dateObject2 = new Date(convertDT2);
		let today2 = dateObject2.toLocaleString("en-US", {weekday: 'long'});
		let currentTemp2 = parseInt(data.daily[1].temp.day);
		day2Card.innerHTML = `<h1>ICON</h1><h3>${today2}</h3><h2>${currentTemp2}&deg;F</h2>`
		/* Day 3 DOM Manipulation */
		let convertDT3 = data.daily[2].dt * 1000
		let dateObject3 = new Date(convertDT3);
		let today3 = dateObject3.toLocaleString("en-US", {weekday: 'long'});
		let currentTemp3 = parseInt(data.daily[2].temp.day);
		day3Card.innerHTML = `<h1>ICON</h1><h3>${today3}</h3><h2>${currentTemp3}&deg;F</h2>`
		/* Day 4 DOM Manipulation */
		let convertDT4 = data.daily[3].dt * 1000
		let dateObject4 = new Date(convertDT4);
		let today4 = dateObject4.toLocaleString("en-US", {weekday: 'long'});
		let currentTemp4 = parseInt(data.daily[3].temp.day);
		day4Card.innerHTML = `<h1>ICON</h1><h3>${today4}</h3><h2>${currentTemp4}&deg;F</h2>`
		/* Day 5 DOM Manipulation */
		let convertDT5 = data.daily[4].dt * 1000
		let dateObject5 = new Date(convertDT5);
		let today5 = dateObject5.toLocaleString("en-US", {weekday: 'long'});
		let currentTemp5 = parseInt(data.daily[4].temp.day);
		day5Card.innerHTML = `<h1>ICON</h1><h3>${today5}</h3><h2>${currentTemp5}&deg;F</h2>`
		/* Day 6 DOM Manipulation */
		let convertDT6 = data.daily[5].dt * 1000
		let dateObject6 = new Date(convertDT6);
		let today6 = dateObject6.toLocaleString("en-US", {weekday: 'long'});
		let currentTemp6 = parseInt(data.daily[5].temp.day);
		day6Card.innerHTML = `<h1>ICON</h1><h3>${today6}</h3><h2>${currentTemp6}&deg;F</h2>`
	});
}
WeatherAppFetch("San Antonio, US");
