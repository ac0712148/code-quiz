// create references to HTMLElement objects
var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var msgDiv = document.querySelector("#msg");
var userInitialsSpan = document.querySelector("#user-initials");

// display
renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var initials = localStorage.getItem("initials");
  var secondsLeft = localStorage.getItem("secondsLeft");

  if (initials === null) {
    return;
  }
  userInitialsSpan.textContent = initials + "-" + secondsLeft;
}

submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  var initials = document.querySelector("#initials").value;
  

  if (initials === "") {
    displayMessage("error", "Initials cannot be blank");
  } else {
    displayMessage("success", "Submission successful");

    localStorage.setItem("initials", initials);
    renderLastRegistered();
  }
});
