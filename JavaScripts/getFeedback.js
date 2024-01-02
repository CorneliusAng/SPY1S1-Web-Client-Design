/* 
   Filename: script.js

   Author:   Cornelius Ang
   Date:     11/8/2018
 */
 
//Create statements 
var fromValue = document.querySelector(".feedback-from");
var feedbackValue = document.querySelector(".feedback-content");
var nameField = document.querySelector("#nameinput");
var feedbackField = document.querySelector("#other-info");
var form = document.querySelector(".contact-form");
var feedbackPreview = document.querySelector(".feedback-preview");
var submitButton = document.querySelector (".submitbutton");

//Create function
function completePreview() {
  fromValue.textContent = nameField.value;
  feedbackValue.textContent = feedbackField.value;
  //change the css with javascript
  feedbackPreview.className = "feedback-preview show";
  //create if statement
  if (form.checkValidity() === true) {
	  submitButton.className = "submitbutton show"; 
  }
}

//Add an Event listener
form.addEventListener("change", completePreview, false);
