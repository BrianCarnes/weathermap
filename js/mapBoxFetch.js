'use strict';
async function mapBoxFetch(center = [-98.4916, 29.4252]) {
// DISPLAY MAPBOX API VIA TOKEN KEY
	mapboxgl.accessToken = MAPBOX_API;
	let map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/light-v10\n',
		zoom: 11,
		center: center
	});
}
mapBoxFetch();