"use strict";
(async function() {


	// DISPLAY MAPBOX API VIA TOKEN KEY
	mapboxgl.accessToken = MAPBOX_API;
	let map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/light-v10\n',
		zoom: 11,
		center: [-98.4916, 29.4252]
	});

	/* Left Container */
	/* Time of Day */
	const todayTime= new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	const currentDate = new Date();
	const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
	const options = { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' };
	document.querySelector(".currentTime").innerHTML = todayTime;
	document.querySelector(".longDate").innerHTML = event.toLocaleDateString('CST', options)
	/* End Time of Day */

	/* Day/Night Toggle */
	/* End Day/Night Toggle */

	/* Six Day Forecast */
	const day1Card = document.querySelector(".day1Card")
	const day2Card = document.querySelector(".day2Card")
	const day3Card = document.querySelector(".day3Card")
	const day4Card = document.querySelector(".day4Card")
	const day5Card = document.querySelector(".day5Card")
	const day6Card = document.querySelector(".day6Card")

	/* End Six Day Forecast */

})();