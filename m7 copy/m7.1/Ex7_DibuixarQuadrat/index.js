"use strict"

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
        message += "<br>" + charUser;

        for (let i = 1; i < numUser; i++ ) {
        message += charUser;
    }
    }

resultDiv.innerHTML = message;

//Alternativa amb 1 bucle i .repeat()
//    for (let i = 0; i < numUser; i++ ) {
//        message += charUser.repeat(numUser) + "\n";
//    }

}