/* 
   Filename: script2.js

   Author:   Cornelius Ang
   Date:     11/8/2018
 */
 
 //Create statement
var formData = location.search;
formData = formData.substring(1, formData.length);

//Create while loop
while (formData.indexOf("+") !== -1) {
formData = formData.replace("+", " ");
}
formData = decodeURIComponent(formData);

//Create second statement
var formArray = formData.split("&");

//Create for loop
for (var i = 0; i < formArray.length; i = i + 1) {
document.write("<p>" + formArray[i] + "</p>");
}