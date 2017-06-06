/*This javascript function reacts to the question of which planet
    is the user's favorite.  Earth is the only acceptable answer. */
function ourPlanet() {
  var inputPlanet = document.myForm.planetResponse.value;
  inputPlanet = inputPlanet.toLowerCase();
  if (inputPlanet == "earth") {
    alert("The Earth?  We agree.  Go Planet!");
  }
  else {
    alert("What are you thinking?  Don't you live on Earth?")
  }
}
