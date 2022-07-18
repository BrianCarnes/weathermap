"use strict";
(async function() {



	/* Left Container */
	/* Time of Day */
	function tod () {
		const todayTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
		const currentDate = new Date();
		const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
		const options = {weekday: 'long', day: 'numeric', year: 'numeric', month: 'long'};
		document.querySelector(".currentTime").innerHTML = todayTime;
		document.querySelector(".longDate").innerHTML = event.toLocaleDateString('CST', options)
	}
	tod();
	/* End Time of Day */

	/* Day/Night Toggle */
	/* End Day/Night Toggle */




	/* End Six Day Forecast */

})();