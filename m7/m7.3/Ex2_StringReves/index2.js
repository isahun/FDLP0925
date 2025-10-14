"use strict"

 function validateNums(userStr) {
    return !isNaN(userStr) || (userStr.trim() == "")   //booleà
}

function stringReverse() {

    const userStr = (document.getElementById("userString").value);
    const resultDiv = document.getElementById("result")
    const err = "Has d'introduir una paraula."
    let message = "";

    if (validateNums(userStr)) {
        resultDiv.innerHTML = err
        return;
    }

    const arrStr = userStr.split("");
    const arrStrRev = arrStr.toReversed();

    for (let i = 0; i <= arrStrRev.length -1; i++) {
        message += arrStrRev[i]
    }

    resultDiv.innerHTML = message;

}