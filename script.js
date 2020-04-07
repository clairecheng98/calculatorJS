//Half Calculation
var halfButton = document.getElementById("half-button");
var inputNum = document.getElementById("half-input");

halfButton.addEventListener("click", halfNumber);

function halfNumber() {
  alert(inputNum.value/2);
  console.log("Half of " + inputNum.value+ " is " + inputNum.value/2+ ".");
}

//Fortune telling
var fortuneButton = document.getElementById("fortune-button");
var inputFortune = document.getElementById("fortune-input");
var fortuneLst = ["Do not be afraid of competition.", "Forget injuries; never forget kindnesses.", "A man cannot be comfortable without his own approval.", "Experience is the best teacher.", "Expect the unexpected.", "The only way to have a friend is to be one."];
var outputIndex;
var currentOutput = document.getElementById("fortune-outputTxt");

fortuneButton.addEventListener("click", fortune);

function fortune() {
  outputIndex = Math.floor(Math.random() * fortuneLst.length);
  currentOutput.innerHTML = inputFortune.value + ": " + fortuneLst[outputIndex];
}

//restyle
currentOutput.addEventListener("mouseover", restyle);
function restyle() {
  // changed color of text and shadow, and size of shadow
  currentOutput.style.color = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
  currentOutput.style.fontSize ="2rem";
  currentOutput.style.textShadow = "0px 0px " + Math.round(Math.random()*10) + "px "+"rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
}
