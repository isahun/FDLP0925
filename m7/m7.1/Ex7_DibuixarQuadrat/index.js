"use strict"

function drawSquare() {

const numUser = parseInt(document.getElementById("num").value);
const charUser = document.getElementById("char").value;
const resultDiv = document.getElementById("result");
let message = "";
const err1 = "Introdueix un nombre";
const err2 = "Introdueix un caràcter";
const err3 = "El nombre ha de ser superior a 2";

//VALIDACIONS
if (isNaN(numUser) || numUser <= 0) {
    resultDiv.innerHTML = err1;
    return;
}
if (numUser < 2) {
    resultDiv.innerHTML = err3
    return;
}
if (!isNaN(charUser) || charUser === "") {
    resultDiv.innerHTML = err2;
    return;
}

//OPERACIONS

for (let i = 0; i < numUser; i++ ) {    //comprovar si i=0 o 1
        for (let j = 0; i < numUser; j++ ) { 
        message += charUser;
        }
    message += "<br>";
}

resultDiv.innerHTML = message;

//Alternativa amb 1 bucle i .repeat()
//    for (let i = 0; i < numUser; i++ ) {
//        message += charUser.repeat(numUser) + "\n";
//    }

//Pel q sigui aixo tb funciona, amb i  com a segon index:
//for (let i = 0; i < numUser; i++ ) {
//        message += "<br>" + charUser;

//        for (let i = 1; i < numUser; i++ ) { 
//        message += charUser;
//    }
//    }

}