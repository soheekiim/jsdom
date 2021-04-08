var title;
var executeButton;
var outputText;
var inputElement;

var basic = ["white", "black", "gray", "navy", "ivory"]
var fit = ["jumper", "suit", "loungewear set", "overalls"]
var accent = ["dark red", "yellow gold", "forest green", "off white", "royal blue"]
var acc = ["bucket hat", "silver necklace", "gold chain", "patterned mask", "pair of Nikes", "pair of Converse", "tote bag"]


window.addEventListener('DOMContentLoaded', function() {

title = document.getElementbyId("title");
executeButton = document.getElementById("fortune");
outputText = document.getElementById("outputText");
inputElement = document.getElementById("fortuneInput");

});

executeButton.addEventListener("click", outfitFunction);
function outfitFunction () {

  var inputName = inputElement.value;
  console.log(inputName);


  var randomBaseIndex = Math.floor(Math.random() * basic.length);
  var selectedBase = base[randomBaseIndex];

  var randomFitIndex = Math.floor(Math.random() * fit.length);
  var selectedFit = fit[randomFitIndex];

  var randomAccentIndex = Math.floor(Math.random() * accent.length);
  var selectedAccent = accent[randomAccentIndex];

  var randomAccIndex = Math.floor(Math.random() * acc.length);
  var selectedAcc = acc[randomAccIndex];

  var finalOutput = inputName + "'s OOTD: " + selectedBase + selectedFit + ", " + selectedAccent + "socks, and a " + selectedAcc;

  outputText.innerHTML = finalOutput;


  finalOutput.style.fontSize = "2em";
  finalOutput.style.backgroundColor = "#FF5733";
  finalOutput.style.fontFamily = "futura";
}
