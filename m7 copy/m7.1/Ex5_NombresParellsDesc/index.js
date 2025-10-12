"use strict"

function pairNums() {

    const resultDiv = document.getElementById("result");
    let message = "";

    for (let i = 100; i >= 0; i -= 2) {
        message += "<br>" + i + "<br>";
    }
resultDiv.innerHTML = message;
}
