// Question used in quiz
var questions = [{
    question: "Q1: This is a test: Choose 1",
    choices: ["1","2","3","4"],
    answer: 0
},{
    question: "Q2: This is test 2: choose 3",
    choices: ["1","2","3","4"],
    answer: 2
}]


// Selectors
var welcomeEl = document.querySelector(".welcome");
var timeEl = document.querySelector(".time");
var scoreEl = document.querySelector(".score");
var startBtn = document.querySelector(".startBtn");
var questionEl = document.querySelector(".question");
var questionTextEl = document.querySelector(".questionText");
var choicesEl = document.querySelector(".choices");

var lineBreak = document.createElement("hr");
var choiceBtn0 = document.createElement("button");
var choiceBtn1 = document.createElement("button");
var choiceBtn2 = document.createElement("button");
var choiceBtn3 = document.createElement("button");

choiceBtn0.setAttribute("class", "button choiceBtn0");
choiceBtn1.setAttribute("class", "button choiceBtn1");
choiceBtn2.setAttribute("class", "button choiceBtn2");
choiceBtn3.setAttribute("class", "button choiceBtn3");

var answer;

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

function test(){
    //Loop over questions
    questionTextEl.textContent = questions[0].question;
    quizScreen(questions[0],questions[0].answer);
}

function quizScreen(arr, answer) {
    // Loop over choices and answers
    //answer = questions[0].answer
    questionEl.append(lineBreak);
    
    choiceBtn0.textContent = arr.choices[0];
    choiceBtn1.textContent = arr.choices[1];
    choiceBtn2.textContent = arr.choices[2];
    choiceBtn3.textContent = arr.choices[3];

    choicesEl.append(choiceBtn0);
    choicesEl.append(choiceBtn1);
    choicesEl.append(choiceBtn2);
    choicesEl.append(choiceBtn3);

    choiceBtn0.addEventListener("click", function(){
        if(answer === 0){
            alert("Correct");
        }
        else{
            alert("Incorrect");
        }
    });
    choiceBtn1.addEventListener("click", function(){
        if(answer === 1){
            alert("Correct");
        }
        else{
            alert("Incorrect");
        }
    });
    choiceBtn2.addEventListener("click", function(){
        if(answer === 2){
            alert("Correct");
        }
        else{
            alert("Incorrect");
        }
    });
    choiceBtn3.addEventListener("click", function(){
        if(answer === 3){
            alert("Correct");
        }
        else{
            alert("Incorrect");
        }
    });
}

startBtn.addEventListener("click", function(){
    startBtn.remove();
    setTimer();
    test();
});

//Main Logic
startScreen();
