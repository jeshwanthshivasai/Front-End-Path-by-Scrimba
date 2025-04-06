let container = document.getElementById('container');
let scorehome = document.getElementById('score-home');
let scoreguest = document.getElementById('score-guest');

let counthome = 0;
let countguest = 0;

scorehome.textContent = counthome;
scoreguest.textContent = countguest;

function hone() {
    counthome += 1;
    scorehome.textContent = counthome;
}

function htwo() {
    counthome += 2;
    scorehome.textContent = counthome;
}

function hthree() {
    counthome += 3;
    scorehome.textContent = counthome;
}

function gone() {
    countguest += 1;
    scoreguest.textContent = countguest;
}

function gtwo() {
    countguest += 2;
    scoreguest.textContent = countguest;
}

function gthree() {
    countguest += 3;
    scoreguest.textContent = countguest;
}