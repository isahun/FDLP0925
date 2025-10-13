"use strict"

function stringReverse() {

    let userStr = document.getElementById("userString").value;
    let arrStr = [];
    const resultDiv = document.getElementById("result")
    const err = "Has d'introduir lletres."
    let message = "";

    //Validacions
    if (!isNaN(userStr)) {
        message = err
        return;
    }

    //Operacions
    arrStr = userStr.split("");
    let arrRev = arrStr.toReversed();

    //DISPLAY
    resultDiv.innerHTML = arrRev;





}