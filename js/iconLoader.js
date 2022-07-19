'use strict';

function iconLoader(description){
	let newClass;
	switch (description) {
		case "Thunderstorm":
			newClass = "iconStorm";
			break;
		case "Drizzle":
			newClass = "iconRain";
			break;
		case "Rain":
			newClass = "iconTorrentialRain";
			break;
		case "Snow":
			newClass = "iconSnow";
			break;
		case "Mist":
			newClass = "iconHaze";
			break;
		case "Smoke":
			newClass = "iconHaze";
			break;
		case "Haze":
			newClass = "iconHaze";
			break;
		case "Dust":
			newClass = "iconHaze";
			break;
		case "Fog":
			newClass = "iconFog";
			break;
		case "Sand":
			newClass = "iconHaze";
			break;
		case "Ash":
			newClass = "iconHaze";
			break;
		case "Squall":
			newClass = "iconRain";
			break;
		case "Tornado":
			newClass = "iconWind";
			break;
		case "Clear":
			newClass = "iconSun";
			break;
		case "Clouds":
			newClass = "iconPartlyCloudy";
			break;
	}
	return newClass;
}