"use strict"

function validate(numUser) {
    return isNaN(numUser) || 2 > numUser
} //torna valor booleà

function drawL() {

    const height = parseInt(document.getElementById("numUser").value);
    const resultDiv = document.getElementById("result")
    const err = "Valors invàlids."

    if (validate(height)) return resultDiv.innerHTML = err;

    const base = Math.floor(height/2) + 1;
    let message = "";

    let i = 0;

    for (i = 0; i < height; i++) {
        message += "*" + "<br>"
    }

    for (i = 0; i < base; i++) {
        message += "*"
    }

    resultDiv.innerHTML = message;

}