function geocode(search, token = MAPBOX_API) {
	const baseUrl = 'https://api.mapbox.com';
	const endPoint = '/geocoding/v5/mapbox.places/';
	return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
		.then(function(res) {
			return res.json();
			// to get all the data from the request, comment out the following three lines...
		}).then(function(data) {
			console.log(data.features[0].center)
			return data.features[0].center;
		});
}

// function getLong(city) {
// 	let latAndLong = geocode(city)
// 	return latAndLong[0];
// }
// function getLat(city) {
// 	let latAndLong = geocode(city)
// 	return latAndLong[1];
// }