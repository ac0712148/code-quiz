var headerEl = document.querySelector("header");
var mainEl = document.querySelector("main");

var topContainerEl = document.createElement("div");
var h3El = document.createElement("h3");
var h1El = document.createElement("h1");
var scoreTagEl = document.createElement("span");
var timeTagEl = document.createElement("span");
var introEl = document.createElement("div");
var startBtn = document.createElement("button");

var secondsLeft = 75;

//Set Timer//
function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeTagEl.textContent = "Time: " + secondsLeft + " seconds left";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timeTagEl.textContent = "TIME'S UP!";
            window.open("./scores.html");
            localStorage.setItem("secondsLeft", secondsLeft);
        }
    },1000);
}
/*/////////////////////////
//// Start Page Set up ////
*//////////////////////////
function setAttributeForIntro() {
    topContainerEl.setAttribute("class", "top-container");
    h1El.setAttribute("class", "welcome")
    scoreTagEl.setAttribute("class", "score");
    timeTagEl.setAttribute("class", "time");
    introEl.setAttribute("class", "intro");
    startBtn.setAttribute("class", "button startBtn");
}
function setAppendsForIntro() {
    headerEl.append(topContainerEl);
    topContainerEl.append(h3El);
    topContainerEl.append(h1El);
    h3El.append(scoreTagEl);
    h3El.append(timeTagEl);
    mainEl.append(introEl);
    introEl.append(startBtn);
}
function setTextContextForIntro() {
    scoreTagEl.textContent = "View High Scores";
    h1El.textContent = "Welcome to Code Quiz";
    startBtn.textContent = "Press to Start";
}
function intro() {
    setAttributeForIntro();
    setAppendsForIntro();
    setTextContextForIntro();
    startBtn.addEventListener("click", function() {
        startBtn.remove();
        introEl.remove();
        h1El.textContent = "Answer Quiz Questions";
        quiz();
    });
}
//////// End Start Page Setup //////////////////////

/////// Start Quiz Page Set Up /////////////////////
var questionEl = document.createElement("div");
var lineBreak1El = document.createElement("hr");
var h2El = document.createElement("h2");
var ulEl = document.createElement("ul");
var fadeEl = document.createElement("div");///////////////////////////////////////////////
var choiceBtn0 = document.createElement("button");
var choiceBtn1 = document.createElement("button");
var choiceBtn2 = document.createElement("button");
var choiceBtn3 = document.createElement("button");
var answer;
var score = 0;
var questions = [{
    question: "Q1: Inside which HTML element do we put the JavaScript?",
    choices: ["<scripting>","<script>","<java>","<html>"],
    answer: 1
},{
    question: "Q2: Which of the following is the correct syntax to display “Hello World” in an alert box using JavaScript?",
    choices: ["alertbox(“Hello World”);","msg(“Hello World”);","msgbox(“Hello World”);","alert(“Hello World”);"],
    answer: 3
},{
    question: "What is the correct syntax for referring to an external script called “script.js”",
    choices: ["<script src=”script.js”>","<script href=”script.js”>","<script ref=”script.js”>","<script name=”script.js”>"],
    answer: 0
},{
    question: "Which of the following is not a reserved word in JavaScript?",
    choices: ["interface","throws","program","short"],
    answer: 2
},{
    question: "What special character is commonly used in jQuery?",
    choices: ["@","!","*","$"],
    answer: 3
}]

function setAttributeForQuestions() {
    questionEl.setAttribute("class", "question");
    h2El.setAttribute("class", "questionText");
    ulEl.setAttribute("class", "choices");
    fadeEl.setAttribute("class", "fadeout");
    choiceBtn0.setAttribute("class", "button choiceBtn0");
    choiceBtn1.setAttribute("class", "button choiceBtn1");
    choiceBtn2.setAttribute("class", "button choiceBtn2");
    choiceBtn3.setAttribute("class", "button choiceBtn3");
}
function setAppendsForQuestions() {
    mainEl.append(questionEl);
    mainEl.append(ulEl);
    questionEl.append(lineBreak1El);
    questionEl.append(h2El);
    questionEl.append(lineBreak1El);
    ulEl.append(choiceBtn0);
    ulEl.append(choiceBtn1);
    ulEl.append(choiceBtn2);
    ulEl.append(choiceBtn3);
}
function setTextContextForQuestions(index) {
    h2El.textContent = questions[index].question;
    answer = questions[index].answer;
    choiceBtn0.textContent = questions[index].choices[0];
    choiceBtn1.textContent = questions[index].choices[1];
    choiceBtn2.textContent = questions[index].choices[2];
    choiceBtn3.textContent = questions[index].choices[3];
}
function setUpQuestions() {
    var numOfQuestions = questions.length;
    var index = 0;
    
    setTextContextForQuestions(index);
    choiceBtn0.addEventListener("click", function(){
        if(answer === 0){
            alert("Correct");
        }else{
            alert("Incorrect -10 Seconds");
            secondsLeft = secondsLeft - 10;
        }
        index++;
        if(index !== numOfQuestions){
            setTextContextForQuestions(index);
        }else{
            setTextContextForQuestions(index - 1);
            window.open("./scores.html");
            secondsLeft = 1;
            
            localStorage.setItem("secondsLeft", secondsLeft);
        }
    });
    choiceBtn1.addEventListener("click", function(){
        if(answer === 1){
            alert("Correct");
        }else{
            alert("Incorrect -10 Seconds");
            secondsLeft = secondsLeft - 10;
        }
        index++;
        if(index !== numOfQuestions){
            setTextContextForQuestions(index);
        }else{
            setTextContextForQuestions(index - 1);
            window.open("./scores.html");
            secondsLeft = 1;
            localStorage.setItem("secondsLeft", secondsLeft);
        }
    });
    choiceBtn2.addEventListener("click", function(){
        if(answer === 2){
            alert("Correct");
        }else{
            alert("Incorrect -10 Seconds");
            secondsLeft = secondsLeft - 10;
        }
        index++;
        if(index !== numOfQuestions){
            setTextContextForQuestions(index);
        }else{
            setTextContextForQuestions(index - 1);
            window.open("./scores.html");
            secondsLeft = 1;
            localStorage.setItem("secondsLeft", secondsLeft);
        }
    });
    choiceBtn3.addEventListener("click", function(){
        if(answer === 3){
            alert("Correct");
        }else{
            alert("Incorrect -10 Seconds");
            secondsLeft = secondsLeft - 10;
        }
        index++;
        if(index !== numOfQuestions){
            setTextContextForQuestions(index);
        }else{
            setTextContextForQuestions(index - 1);
            window.open("./scores.html");
            secondsLeft = 1;
            localStorage.setItem("secondsLeft", secondsLeft);
        }    
    });
}
function quiz() {
    setTimer();
    setAttributeForQuestions();
    setAppendsForQuestions();
    setUpQuestions();
}
/////// End Quiz Set Up ///////////////////


intro();