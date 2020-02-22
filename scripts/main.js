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

function stone() {
   document.write("<h2>Вы могли выбрать что-нибудь другое...</h2> <p>Но вы выбрали камень, поэтому видите эту страницу</p> <input type='button' value='Вас понял...' onClick='window.location.reload()'>");
}

function scis() {
    alert('Вы выбрали ножницы');
}

function paper() {
   alert('Вы выбрали камень');
}


bstone.onclick = function() {
   stone();
}

bscis.onclick = function() {
   scis();
}

bpaper.onclick = function() {
   paper();
}

const lizard = document.querySelector('#lizard');
const spok = document.querySelector('#spok')
const output = document.querySelector('.but-output');
let compChoose = ["Ящерица", "Спок"];
var rand = Math.floor(Math.random() * compChoose.length);
const compOutput = document.querySelector('.comp-output');
const resultOutput = document.querySelector('.result-output');

lizard.onclick = function() {
   output.textContent = lizard.value;
   compOutput.textContent = compChoose[rand];
   if (compChoose[rand] === lizard.value) {
      resultOutput.textContent = 'VICTORY!!!';
   } else {
      resultOutput.textContent = 'HA-HA, LOSER!!!';
   }
}

spok.onclick = function() {
   output.textContent = spok.value;
}

const reset = document.getElementById('reset');

reset.onclick = function () {
   output.textContent = ' ';
}