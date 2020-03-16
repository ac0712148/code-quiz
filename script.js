
// Selectors
var welcomeEl = document.querySelector(".welcome");
var timeEl = document.querySelector(".time");
var scoreEl = document.querySelector(".score");
var startBtn = document.querySelector(".startBtn");

// Variable for number of seconds
var secondsLeft = 5;
var score = 0;

//function for countdown
function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft + " seconds left";
        scoreEl.textContent = "Score: " + score;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            scoreEl.textContent = "Final Score: " + 50;
            timeEl.textContent = "TIME'S UP!";
            welcomeEl.textContent = "Game Over!";
        }
    },1000);
}

function startScreen() {
    welcomeEl.textContent = "Welcome to Code Quiz";
    scoreEl.textContent = "Score: ";
    timeEl.textContent = "Time: ";
}

function quizScreen() {

}

startBtn.addEventListener("click", function(){
    startBtn.remove();
    welcomeEl.textContent = "Doing Quiz";
    setTimer();
});


//Main Logic
startScreen();
