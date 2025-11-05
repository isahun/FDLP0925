"use strict"

function drawDoubleTriangle() {

const numUser = parseInt(document.getElementById("num").value);
const resultDiv = document.getElementById("result");
let message = "";
let message2 = "";
const err1 = "Introdueix un nombre";

//VALIDACIONS
if (isNaN(numUser) || numUser <= 0) {
    resultDiv.innerHTML = err1;
    return;
}

//OPERACIONS
let i = 0; 
let j = 0; 

for (i = 1; i <= numUser; i++) { 
    for (j = 1; j <= i; j++) {
        message += "*"; 
    }
    message += "<br>"    
}

for (i = numUser-1; i > 0; i--) { //fem numUser-1 pk l'invertit tingui una fila menys i el triangle final tingui punta
    for (j = 1; j <= i; j++) {
        message2 += "*"; 
    }
    message2 += "<br>"    
}

resultDiv.innerHTML = message + message2;

}