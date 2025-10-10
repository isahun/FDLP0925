"use strict"

/*
Taula de multiplicar. L’usuari/ària introduirà un número (de l'1 al 10) per pantalla, i utilitzant un bucle, el programa li mostrarà la taula de multiplicar d’aquell número. 
    TO DO
    HTML
        input pel nombre del user
        div result
        botó
        script
    JS
    variables
        numero
        message
        error
        result
    validació
    operació (bucle for)
    display

    <input type="number" placeholder="Introdueix un nombre" id="num">
    <p>Fes clic per conèixer la taula de multiplicar del teu nombre.</p>
    <button type="button" onclick="tableNum()">Fes clic</button>
    <div id="result"></div>
    <script src="index.js"></script>
*/

function tableNum() {

const numUser = parseInt(document.getElementById("num").value);
const resultDiv = document.getElementById("result");
const err = "Introdueix un nombre";
let message = "";
let multi = 0;

//VALIDAR
if (isNaN(numUser)){
    resultDiv.innerHTML = err
    return;
}

for (let i = 0; i < 10; i++) {
    multi = i*numUser;
    message += numUser + " x " + i + " = " + multi;
}

resultDiv.innerHTML = message;

}
