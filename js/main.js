"use strict";
(async function() {
	const userCity = document.getElementById("search");
	const searchButton = document.getElementById("search-button");
	searchButton.addEventListener("click",  async function(event){
		event.preventDefault();

		const location = await geocode(userCity.value);
		await WeatherAppFetch(location);
		await mapBoxFetch(location);
	});
})();