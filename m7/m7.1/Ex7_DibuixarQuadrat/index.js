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

function drawSquare() {

const numUser = parseInt(document.getElementById("num").value);
const charUser = document.getElementById("char").value;
const resultDiv = document.getElementById("result");
let message = "";
const err1 = "Introdueix un nombre";
const err2 = "Introdueix un caràcter";

//VALIDACIONS
if (isNaN(numUser) || numUser <= 0) {
    resultDiv.innerHTML = err1;
    return;
}

if (charUser === "") {
    resultDiv.innerHTML = err2;
    return;
}

//OPERACIONS

    for (let i = 0; i < numUser; i++ ) {
        message += charUser.repeat(numUser) + "\n";
    }

resultDiv.innerHTML = message;

}