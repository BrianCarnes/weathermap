'use strict';
function WeatherAppFetch(location = ["-98.48527","29.423017"]) {
	const day1Card = document.querySelector(".day1Card");
	const day2Card = document.querySelector(".day2Card");
	const day3Card = document.querySelector(".day3Card");
	const day4Card = document.querySelector(".day4Card");
	const day5Card = document.querySelector(".day5Card");
	const day6Card = document.querySelector(".day6Card");
	// prepare the query parameters to identify us to openweather
	// and give it our weather query
	console.log(location);
	let queryParameters = new URLSearchParams({
		APPID: OPEN_WEATHER_APPID,
		lat: location[1],
		lon: location[0],
		units: "imperial"
	}); // concat the query parameters onto the URL
	console.log(queryParameters);

	fetch("http://api.openweathermap.org/data/2.5/onecall?" + queryParameters, {
		method: "GET"
	}).then(async function (response) {
		/* Use await to wait for the json data and then do something with it */
		/* Six Day Forecast */
		const data = await response.json();
		console.log('The entire response:', data);
		// console.log('Diving in - here is current information: ', data.current.temp);
		// console.log('A step further - information for tomorrow: ', data);
		/* Time of Day Function */
		function tod (data) {
			console.log(data.current.dt);
			const todayDateTime = new Date(data.current.dt * 1000);
			document.querySelector(".currentTime").innerHTML = todayDateTime.toLocaleTimeString("en-US",{hours: "numeric", minutes: "numeric"});
			document.querySelector(".longDate").innerHTML = todayDateTime.toLocaleDateString("en-US", {weekday: 'long', day: 'numeric', year: 'numeric', month: 'long'});
		}
		tod(data);
		/* Day 1 DOM Manipulation */
		let convertDT1 = data.daily[0].dt * 1000
		let dateObject1 = new Date(convertDT1);
		let today1 = dateObject1.toLocaleString("en-US", {weekday: 'long'});
		let currentTemp1 = parseInt(data.daily[0].temp.day);
		day1Card.innerHTML = `<h1>ICON</h1><h3>${today1}</h3>\n<h2>${currentTemp1}&deg;F</h2>`
		day1Card.classList.add(backgroundGradient(currentTemp1));
		/* Day 2 DOM Manipulation */
		let convertDT2 = data.daily[1].dt * 1000
		let dateObject2 = new Date(convertDT2);
		let today2 = dateObject2.toLocaleString("en-US", {weekday: 'long'});
		let currentTemp2 = parseInt(data.daily[1].temp.day);
		day2Card.innerHTML = `<h1>ICON</h1><h3>${today2}</h3>\n<h2>${currentTemp2}&deg;F</h2>`
		day2Card.classList.add(backgroundGradient(currentTemp2));
		/* Day 3 DOM Manipulation */
		let convertDT3 = data.daily[2].dt * 1000
		let dateObject3 = new Date(convertDT3);
		let today3 = dateObject3.toLocaleString("en-US", {weekday: 'long'});
		let currentTemp3 = parseInt(data.daily[2].temp.day);
		day3Card.innerHTML = `<h1>ICON</h1><h3>${today3}</h3>\n<h2>${currentTemp3}&deg;F</h2>`
		day3Card.classList.add(backgroundGradient(currentTemp3));
		/* Day 4 DOM Manipulation */
		let convertDT4 = data.daily[3].dt * 1000
		let dateObject4 = new Date(convertDT4);
		let today4 = dateObject4.toLocaleString("en-US", {weekday: 'long'});
		let currentTemp4 = parseInt(data.daily[3].temp.day);
		day4Card.innerHTML = `<h1>ICON</h1><h3>${today4}</h3>\n<h2>${currentTemp4}&deg;F</h2>`
		day4Card.classList.add(backgroundGradient(currentTemp4));
		/* Day 5 DOM Manipulation */
		let convertDT5 = data.daily[4].dt * 1000
		let dateObject5 = new Date(convertDT5);
		let today5 = dateObject5.toLocaleString("en-US", {weekday: 'long'});
		let currentTemp5 = parseInt(data.daily[4].temp.day);
		day5Card.innerHTML = `<h1>ICON</h1><h3>${today5}</h3>\n<h2>${currentTemp5}&deg;F</h2>`
		day5Card.classList.add(backgroundGradient(currentTemp5));
		/* Day 6 DOM Manipulation */
		let convertDT6 = data.daily[5].dt * 1000
		let dateObject6 = new Date(convertDT6);
		let today6 = dateObject6.toLocaleString("en-US", {weekday: 'long'});
		let currentTemp6 = parseInt(data.daily[5].temp.day);
		day6Card.innerHTML = `<h1>ICON</h1><h3>${today6}</h3>\n<h2>${currentTemp6}&deg;F</h2>`
		day6Card.classList.add(backgroundGradient(currentTemp6));
		/* Sunrise and Sunset */
		let sunrise = data.daily[0].sunrise * 1000
		let sunriseObject = new Date(sunrise);
		let sunriseToday = sunriseObject.toLocaleString("en-US", {hour: 'numeric', minute: "numeric", second: "numeric"});
		let sunset = data.daily[0].sunset * 1000
		let sunsetObject = new Date(sunset);
		let sunsetToday = sunsetObject.toLocaleString("en-US", {hour: 'numeric', minute: "numeric", second: "numeric"});
		document.querySelector(".currentRNS").innerHTML = `<p>Sunrise: ${sunriseToday}</p>\n<p>Sunset: ${sunsetToday}</p>`
		/* Moonrise and Moonset */
		let moonrise = data.daily[0].moonrise * 1000
		let moonriseObject = new Date(moonrise);
		let moonriseToday = moonriseObject.toLocaleString("en-US", {hour: 'numeric', minute: "numeric", second: "numeric"});
		let moonset = data.daily[0].moonset * 1000
		let moonsetObject = new Date(moonset);
		let moonsetToday = moonsetObject.toLocaleString("en-US", {hour: 'numeric', minute: "numeric", second: "numeric"});
		document.querySelector(".moonRise").innerHTML = `<p>Moonrise: ${moonriseToday}</p>`
		document.querySelector(".moonSet").innerHTML = `<p>Moonset: ${moonsetToday}</p>`
		/* Large Card DOM Manipulation */
		let currentTemp = parseInt(data.current.temp);
		let currentMain = data.current.weather[0].main;
		let currentDT = new Date(data.current.dt * 1000);
		// let currentIcon = iconLoader(currentMain);
		// let currentLocation = cityFinder(location);
		let currentClimate = data.current.weather[0].description;
		let currentWindDirection = data.current.wind_deg;
		let currentWindSpeed = data.current.wind_speed;
		let currentHumidity = data.current.humidity;
		document.querySelector(".shortDate").innerHTML = "Today, " + currentDT.toLocaleDateString("en-US",{day: "numeric", month: "long"});
		// document.querySelector(".location").innerHTML = currentLocation
		// document.querySelector(".currentIcon").innerHTML = currentIcon
		document.querySelector(".currentTemp").innerHTML = `${currentTemp}&deg;F`;
		document.querySelector(".currentClimate").innerHTML = `${currentClimate}`
		document.querySelector(".wind").innerHTML = `Wind Direction: ${currentWindDirection}&deg;<br>Wind Speed: ${currentWindSpeed} mph`
		document.querySelector(".humidity").innerHTML = `Humidity: ${currentHumidity}%`
		document.querySelector(".largeCard").classList.add(backgroundGradient(currentTemp));
	});
}
WeatherAppFetch();

function backgroundGradient (temp = 1) {
	let output;
	if (temp <= 30) {
		output = "temp20s";
	} else if (temp > 30 && temp <= 50) {
		output = "temp30s-50s";
	} else if (temp > 50 && temp <= 70) {
		output = "temp50s-60s";
	} else if (temp > 70 && temp <= 90) {
		output = "temps70s-80s";
	} else if (temp > 90 && temp <= 99) {
		output = "temp90s";
	} else {
		output = "temp100s"
	}
	return output
}