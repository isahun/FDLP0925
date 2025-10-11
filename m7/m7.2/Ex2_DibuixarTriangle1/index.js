"use strict"

function drawTriangle() {

const numUser = parseInt(document.getElementById("num").value);
const resultDiv = document.getElementById("result");
let message = "";
let message2 = "";
let messFinal = "";
const err1 = "Introdueix un nombre";

//VALIDACIONS
if (isNaN(numUser) || numUser <= 0) {
    resultDiv.innerHTML = err1;
    return;
}

//OPERACIONS
let i = 0; //index q controla el bucle exterior, el q diu quantes files hi haurà (numUser files)
let j = 0; //index diferent q controla bucle interior i per tant quants asteriscs per fila hi haurà

for (i = 1; i <= numUser; i++) { //la i defineix les files i parteix de la "base" numUser, pk la volem a la primera linia, i augmentant 1 a "i" a cada iteració
    for (j = 1; j <= i; j++) {
        message += "*"; //afegeix un asterisc a la linia numero "i" a cada iteració (la "i" la defineix el bucle exterior)
    }
    message += "<br>"    
}

resultDiv.innerHTML = message;

}