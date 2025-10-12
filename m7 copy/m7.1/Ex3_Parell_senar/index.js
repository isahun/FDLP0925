"use strict"

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
