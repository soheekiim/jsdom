var title;
var executeButton;
var outputText;
var inputElement;
var randomColorIndex;

var basic = ["white", "black", "gray", "navy", "ivory"]
var fit = ["jumper", "suit", "loungewear set", "overalls"]
var accent = ["dark red", "yellow gold", "forest green", "off white", "royal blue"]
var acc = ["bucket hat", "silver necklace", "gold chain", "patterned mask", "pair of Nikes", "pair of Converse", "tote bag", "beanie"]

var color = ["#f8f9fa", "#f7ede2", "#feeafa", "#edf2fb", "#f2e9e4"]


window.addEventListener('DOMContentLoaded', function() {

  title = document.getElementById("title");
  executeButton = document.getElementById("fortune");
  outputText = document.getElementById("outputText");
  inputElement = document.getElementById("fortuneInput");

  executeButton.addEventListener("click", outfitFunction);

});


function outfitFunction () {

  var inputName = inputElement.value;
  console.log(inputName);


  var randomBaseIndex = Math.floor(Math.random() * basic.length);
  var selectedBase = basic[randomBaseIndex];

  var randomFitIndex = Math.floor(Math.random() * fit.length);
  var selectedFit = fit[randomFitIndex];

  var randomAccentIndex = Math.floor(Math.random() * accent.length);
  var selectedAccent = accent[randomAccentIndex];

  var randomAccIndex = Math.floor(Math.random() * acc.length);
  var selectedAcc = acc[randomAccIndex];

  var finalOutput = inputName + "'s OOTD: " + selectedBase + " " + selectedFit + ", " + selectedAccent + " socks, and a " + selectedAcc;

  outputText.innerHTML = finalOutput;

  restyle();
}

function restyle () {

  randomColorIndex = Math.floor(Math.random() * color.length);

  outputText.style.fontSize = "1em";
  outputText.style.backgroundColor = color[randomColorIndex];
  outputText.style.fontFamily = "futura";

}
