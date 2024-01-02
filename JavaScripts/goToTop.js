/* 
   Filename: script2.js

   Author:   Cornelius Ang
   Date:     11/8/2018
 */
 
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

//Create function
function scrollFunction() {
	//Create if statement
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myButton").style.display = "block";
    } else {
        document.getElementById("myButton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}