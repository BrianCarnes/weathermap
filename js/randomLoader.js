'use strict'

function randomLoader (weather) {
	let randomNumber = Math.round(Math.random() * 4)
	switch (randomNumber) {
		case 0:
			document.querySelector(".random").classList.add("animeClearSkies")
			break;
		case 1:
			document.querySelector(".random").classList.add("animeHot")
			break;
		case 2:
			document.querySelector(".random").classList.add("animeCloud")
			break;
		case 3:
			document.querySelector(".random").classList.add("animeRain")
			break;
	}
}
randomLoader();