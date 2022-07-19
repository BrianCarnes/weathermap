"use strict";
(async function() {
	const userCity = document.getElementById("search");
	const searchButton = document.getElementById("search-button");
	searchButton.addEventListener("click",  async function(event){
		event.preventDefault();
		console.log(userCity.value);
		const location = await geocode(userCity.value);


		console.log(location);
		WeatherAppFetch(location);
	});
})();