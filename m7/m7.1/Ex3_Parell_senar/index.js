"use strict"

/* <!--L’usuari/ària ha d'introduir un número i el programa ha de mostrar per pantalla si el número és parell o imparell.
    TO DO
    HTML
        input pel numero
        div
        botó
        script
    JS
        variable (num)
        validació
        operació (% 2)+ condicionals
        display
    -->
<input type="number" placeholder="Introdueix un nombre" id="num">
<button type="button" onclick="isPair()">Fes clic per saber si és parell</button>
<div id="result"></div>
<script src="index.js"></script> 
*/

function isPair() {
    const num = parseInt(document.getElementById("num").value);
    let resultDiv = document.getElementById("result");
    const err = "Introdueix un nombre"
    let message = "";

    //VALIDACIONS
    if (isNaN(num)) {
    resultDiv.innerHTML = err;
    return;
}
    
    let isNumPair = num % 2


    isNumPair === 0 ? message = "És parell" : message = "És senar";
    
    resultDiv.innerHTML = message;
}
