"use strict"

//Mostra per pantalla els nombres parells compresos entre el 100 i el 0 en ordre descendent.

function pairNums() {

    const resultDiv = document.getElementById("result");
    let message = "";

    for (let i = 100; i >= 0; i -= 2) {
        message += "<br>" + i + "<br>";
    }
resultDiv.innerHTML = message;
}
