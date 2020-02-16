var bstone = document.getElementById('b-stone');
var bscis = document.getElementById('b-scis');
var bpaper = document.getElementById('b-paper');
var field = document.getElementById('field');

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

const price = document.querySelector('#price')
const output = document.querySelector('.price-output')

price.onclick = function() {
   output.textContent = price.value
}