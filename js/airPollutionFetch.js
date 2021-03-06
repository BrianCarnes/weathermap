'use strict';
function airPollutionFetch () {
	let queryParameters = new URLSearchParams({

		APPID: OPEN_WEATHER_APPID,
		d: location, //user input location
		lat: 29.423017,
		lon: -98.48527,
		units: "imperial"
	});
// concat the query parameters onto the URL
	fetch("http://api.openweathermap.org/data/2.5/air_pollution?" + queryParameters, {
		method: "GET"
	}).then(async function (response) {
		/* Use await to wait for the json data and then do something with it */
		/* Air Quality Index */
		const data = await response.json();
		console.log('The entire response:', data);
		// console.log('Diving in - here is current information: ', data.current.temp);
		// console.log('A step further - information for tomorrow: ', data);
		// Air Quality Index. Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.
		let AQI = data.list[0].main.aqi;
		let description = "";
		switch (AQI) {
			case 1:
				AQI = 'Good';
				description = "A fine day for a merry stroll"
				break;
			case 2:
				AQI = "Fair";
				description = "Okay for a wie saunter"
				break;
			case 3:
				AQI = "Moderate"
				description = "Perhaps consider a movie"
				break;
			case 4:
				AQI = "Poor"
				description = "You should experience the outdoors from the indoors"
				break;
			case 5:
				AQI = "Severe"
				description = "Please, stay inside"
				break;
		}
		let currentAQI = document.querySelector('.currentAqi');
		currentAQI.innerHTML = "<h3 style='margin:0'>" + AQI + "\n</h3>" + "<h6 style='margin:0;'>" + description + "</h6>"
		let airComponentsPM2 = data.list[0].components.pm2_5;
		let airComponentsPM10 = data.list[0].components.pm10;
		let airComponentsSO2 = data.list[0].components.so2;
		let airComponentsNH3 = data.list[0].components.nh3;
		let airComponentsO3 = data.list[0].components.o3;
		let airComponentsCO = data.list[0].components.co;

		document.querySelector(".aqiDetails1").innerHTML = `<p>Particles<br>${airComponentsPM2}</p>`
		document.querySelector(".aqiDetails2").innerHTML = `<p>Pollution<br>${airComponentsPM10}</p>`
		document.querySelector(".aqiDetails3").innerHTML = `<p>SO2<br>${airComponentsSO2}</p>`
		document.querySelector(".aqiDetails4").innerHTML = `<p>NH3<br>${airComponentsNH3}</p>`
		document.querySelector(".aqiDetails5").innerHTML = `<p>Ozone<br>${airComponentsO3}</p>`
		document.querySelector(".aqiDetails6").innerHTML = `<p>CO<br>${airComponentsCO}</p>`
	});
}

airPollutionFetch();
