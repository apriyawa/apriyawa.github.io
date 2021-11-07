"use strict";
const showTimer = true;
// Add list of names here
const namesList = [
	'Gryffindor',
	'Slytherin',
	'Hufflepuff', 
	'Ravenclaw',
];

// Default variables
let i = 0;
let x = 0;
let intervalHandle = null;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const headerOne = document.getElementById('headerNames');

// Optional countdown timer
// Add zero in front of numbers < 10
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
		sec = "0" + sec;
	} 
  if (sec < 0) {
		sec = "59";
	}
  return sec;
}
// Start or stop the name shuffle on button click
startButton.addEventListener('click', function() {
	this.style.display = "none";
	stopButton.style.display = "block";
	intervalHandle = setInterval(function () {
		headerNames.textContent = namesList[i++ % namesList.length];
	}, 50);
	if (showTimer===true) {
		timerWrapper.classList.remove('visible');
	}
});
stopButton.addEventListener('click', function() {
	this.style.display = "none";
	startButton.style.display = "block";
	clearInterval(intervalHandle);
	timer.innerHTML = time;
	if (showTimer===true) {
		timerWrapper.classList.add('visible');
	}
	startTimer();
});

// Allow use of spacebar to start/stop name shuffle
document.body.onkeyup = function(e) {
	if (e.keyCode == 32) {
		if (x%2===0) {
			startButton.style.display = "none";
			stopButton.style.display = "block";
			intervalHandle = setInterval(function () {
				headerNames.textContent = namesList[i++ % namesList.length];
			}, 50);
			if (showTimer===true) {
				timerWrapper.classList.remove('visible');
			}
		} else {
			startButton.style.display = "block";
			stopButton.style.display = "none";
			clearInterval(intervalHandle);
			timer.innerHTML = time;
			if (showTimer===true) {
				timerWrapper.classList.add('visible');
			}
			startTimer();
		}
		x++; 
	}
} 

