"use strict";

const wheel = document.querySelector(".wheel");
const startButton = document.querySelector(".spin-the-wheel");

let deg = 0;

startButton.addEventListener("click", () => {
	startButton.style.pointerEvents = "none";

	deg = Math.floor(5000 + Math.random() * 5000);
	// console.log(deg);

	wheel.style.transition = "all 10s ease ";

	wheel.style.transform = `rotate(${deg}deg)`;
});
wheel.addEventListener("transitionend", () => {
	startButton.style.pointerEvents = "auto";
	wheel.style.transition = "none";

	const actualDeg = deg % 360;

	wheel.style.transform = `rotate(${actualDeg}deg)`;

	if (actualDeg >= 14 && actualDeg <= 46) {
		alert("11%");
	} else if (actualDeg >= 47 && actualDeg <= 72) {
		alert("8%");
	} else if (actualDeg >= 73 && actualDeg <= 105) {
		alert("5%");
	} else if (actualDeg >= 106 && actualDeg <= 132) {
		alert("3%");
	} else if (actualDeg >= 133 && actualDeg <= 166) {
		alert("2%");
	} else if (actualDeg >= 167 && actualDeg <= 193) {
		alert("10%");
	} else if (actualDeg >= 194 && actualDeg <= 227) {
		alert("7%");
	} else if (actualDeg >= 228 && actualDeg <= 254) {
		alert("4%");
	} else if (actualDeg >= 255 && actualDeg <= 287) {
		alert("15%");
	} else if (actualDeg >= 289 && actualDeg <= 313) {
		alert("6%");
	} else if (actualDeg >= 314 && actualDeg <= 345) {
		alert("9%");
	} else if (actualDeg >= 346 && actualDeg <= 360) {
		alert("2%");
	} else if (actualDeg >= 0 && actualDeg <= 13) {
		alert("2%");
	}
});
