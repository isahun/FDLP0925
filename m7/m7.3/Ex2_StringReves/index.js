"use strict"

function stringReverse() {

    const userStr = document.getElementById("userString").value;
    let arrStr = [];
    const resultDiv = document.getElementById("result")
    const err = "Has d'introduir una paraula."
    let message = "";

    //Validacions
    if (!isNaN(userStr) || userStr == "") {
        message = err
        return;
    }
for (i = 0; i > arrStr.length -1; i++ )
    //Operacions
    arrStr = userStr.split("");
    let arrRev = arrStr.toReversed();

    //DISPLAY
    resultDiv.innerHTML = arrRev.join(" ");





}