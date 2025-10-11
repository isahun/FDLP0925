"use strict"

/*
Fer un programa on l’usuari/ària introdueix per pantalla un caràcter i un número. 
    El programa imprimeix per pantalla un quadrat amb la mida i el caràcter introduïts per l’usuari/ària.
    
    TO DO
    js
        validació num i caràcter
        bucle for
        display    
    -->

    <input type="number" placeholder="Introdueix un número" id="num">
    <input type="number" placeholder="Introdueix un caràcter" id="char">
    <p>Fes clic per dibuixar un quadrat amb la mida i el caràcter que has introduït:</p>
    <button type="button" onclick="drawSquare()">Fes clic</button>
    <p></p>
    <div id="result"></div>
    <script src="index.js"></script>
*/

function drawInvTriangle() {

const numUser = parseInt(document.getElementById("num").value);
const resultDiv = document.getElementById("result");
let message = "";
const err1 = "Introdueix un nombre";

//VALIDACIONS
if (isNaN(numUser) || numUser <= 0) {
    resultDiv.innerHTML = err1;
    return;
}

//OPERACIONS
let i = 0; //index q controla el bucle exterior, el q diu quantes files hi haurà (numUser files)
let j = 0; //index diferent q controla bucle interior i per tant quants asteriscs per fila hi haurà

for (i = numUser; i > 0; i--) { //la i defineix les files i parteix de la "base" numUser, pk la volem a la primera linia, i restant 1 a "i" a cada iteració
    for (j = 1; j <= i; j++) {
        message += "*"; //afegeix un asterisc a la linia numero "i" a cada iteració (la "i" la defineix el bucle exterior)
    }
    message += "<br>"    
}

resultDiv.innerHTML = message;

}