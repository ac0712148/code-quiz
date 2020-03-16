
// Selectors
var welcomeEl = document.querySelector(".welcome");
var timeEl = document.querySelector(".time");
var scoreEl = document.querySelector(".score");

// Variable for number of seconds
var secondsLeft = 5;

//function for countdown
function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft + " seconds left";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "TIME'S UP!";
            welcomeEl.textContent = "Game Over!"
        }
    },1000);
}

welcomeEl.textContent = "Welcome to Code Quiz";
scoreEl.textContent = "Score:";
timeEl.textContent = "Time:";
setTimer();
