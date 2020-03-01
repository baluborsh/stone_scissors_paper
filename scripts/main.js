var userButton = document.getElementById('changeuser');
var userHeading = document.getElementById('greetings');

function setUserName() {
   var myName = prompt('Пожалуйста представьтесь');
   localStorage.setItem('name', myName);
   userHeading.textContent = 'Приветствую, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
   setUserName();
} else {
   var storedName = localStorage.getItem('name');
   userHeading.textContent = 'Приветствую, ' + storedName + '!';
}

userButton.onclick = function() {
   setUserName();
}

var bstone = document.getElementById('b-stone');
var bscis = document.getElementById('b-scis');
var bpaper = document.getElementById('b-paper');
const output = document.querySelector('.user-output');
let compChoose = ["Камень", "Ножницы", "Бумага"];
var rand = Math.floor(Math.random() * compChoose.length);
const compOutput = document.querySelector('.comp-output');
const resultOutput = document.querySelector('.result-output');
var userChoice

function Play() {
   bstone.parentNode.removeChild(bstone);
   bscis.parentNode.removeChild(bscis);
   bpaper.parentNode.removeChild(bpaper);
   if (compChoose[rand] === userChoice) {
      resultOutput.textContent = 'Ничья...';
      resultOutput.style.color = "gray";
   }
   if (compChoose[rand] === "Камень" && userChoice === "Ножницы") {
      resultOutput.textContent = 'PRIMO VICTORIA!!!1';
      resultOutput.style.color = "green";
   }
   if (compChoose[rand] === "Камень" && userChoice === "Бумага") {
      resultOutput.textContent = 'HA-HA, LOSER!!!'
      resultOutput.style.color = "red";
   }
   if (compChoose[rand] === "Ножницы" && userChoice === "Камень") {
      resultOutput.textContent = 'PRIMO VICTORIA!!!1';
      resultOutput.style.color = "green";
   }
   if (compChoose[rand] === "Ножницы" && userChoice === "Бумага") {
      resultOutput.textContent = 'HA-HA, LOSER!!!';
      resultOutput.style.color = "red";
   }
   if (compChoose[rand] === "Бумага" && userChoice === "Ножницы") {
      resultOutput.textContent = 'PRIMO VICTORIA!!!1';
      resultOutput.style.color = "green";
   }
   if (compChoose[rand] === "Бумага" && userChoice === "Камень") {
      resultOutput.textContent = 'HA-HA, LOSER!!!';
      resultOutput.style.color = "red";
   }
}

bstone.onclick = function() {
   userChoice = "Камень";
   output.textContent = bstone.value;
   compOutput.textContent = compChoose[rand];
   Play(); 
}

bscis.onclick = function() {
   userChoice = "Ножницы";
   output.textContent = bscis.value;
   compOutput.textContent = compChoose[rand];
   Play();
}

bpaper.onclick = function() {
   userChoice = "Бумага";
   output.textContent = bpaper.value;
   compOutput.textContent = compChoose[rand];
   Play();
}