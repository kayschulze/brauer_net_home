/***************************
This is JavaScript (JS), the programming language that powers the web (and this is a comment, which you can delete).

To use this file, link it to your markup by placing a <script> in the <body> of your HTML file:

  <body>
    <script src="script.js"></script>

replacing "script.js" with the name of this JS file.

Learn more about JavaScript at

https://developer.mozilla.org/en-US/Learn/JavaScript
***************************/                       

function WriteLetter(){
  var nameDeclareVar = document.myForm.nameDeclare.value;
  var address1Var = document.myForm.address1.value;
  var address2Var = document.myForm.address2.value;
  var cityVar = document.myForm.city.value;
  var stateVar = document.myForm.state.value;
  var zipVar = document.myForm.zip.value;
  //create.addEventListener("click", writeLetter(), false);*/

  var userName = document.myForm.theletter.value;

  var launchLetter = "";  
  launchLetter += "Dear Whom It May Concern:  ";
  //launchLetter += <br><br>;
  launchLetter += "I am writing you with concern about our environment.  Climate change is a growing concern for our country and our citizens, especially in our great state of ";
  launchLetter += stateVar;
  launchLetter += ".  ";
  //launchLetter += <br><br>  
  launchLetter += "Please join me in supporting our Environmental Protection Agency (EPA).  ";
  launchLetter += "I appreciate your support.  ";
  launchLetter += "Sincerely,"
  //launchLetter += <br><br><br><br>;
  launchLetter += nameDeclareVar;

  document.myForm.theletter.value = launchLetter;
} 

greetMe("World");
