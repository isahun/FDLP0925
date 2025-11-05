"use strict"

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

for (let i = 0; i <= 10; i++) {
    multi = i*numUser;
    message += "<br>" + numUser + " x " + i + " = " + multi + "<br>";
}

resultDiv.innerHTML = message;

}
