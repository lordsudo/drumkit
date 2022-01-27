var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}


document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    case "a":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "s":
    var hat = new Audio("sounds/crash.mp3");
    hat.play();
    break;

    case "d":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "j":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "k":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "l":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    default: console.log(buttonInnerHTML);


  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout (function() {
    activeButton.classList.remove("pressed");
  }, 100);
}




















/*
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i <numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    this.style.color="white";
  });
}

*/


/*

var Kick = new Audio ('sounds/kick-bass.mp3');
var Snare = new Audio ('sounds/snare.mp3');
var Crash = new Audio ('sounds/crash.mp3');
var Tom1 = new Audio ('sounds/tom-1.mp3');
var Tom2 = new Audio ('sounds/tom-2.mp3');
var Tom3 = new Audio ('sounds/tom-3.mp3');
var Tom4 = new Audio ('sounds/tom-4.mp3');
var Bass = new Audio ('sounds/bass.wav');


document.querySelector(".kick").addEventListener("click", function () {Kick.play();} );
document.querySelector(".snare").addEventListener("click", function () {Snare.play();} );
document.querySelector(".crash").addEventListener("click", function () {Crash.play();} );
document.querySelector(".tom1").addEventListener("click", function () {Tom1.play();} );
document.querySelector(".tom2").addEventListener("click", function () {Tom2.play();} );
document.querySelector(".tom3").addEventListener("click", function () {Tom3.play();} );
document.querySelector(".tom4").addEventListener("click", function () {Tom4.play();} );


document.querySelector(".bass").addEventListener("k", function() {Bass.play();} );

*/
