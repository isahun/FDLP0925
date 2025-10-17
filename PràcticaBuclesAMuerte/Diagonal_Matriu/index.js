"use strict"


//Donat un array bidimensional (matriu), imprimeix la diagonal principal.


function drawDiagonal() {

    const arrNums = [[3, 5, 2], [1, 0, 3], [1, 2, 0]];
    const resultDiv = document.getElementById("result");
    let message = "";
    let i = 0;
    let j = 0;

    for (i = 0; i <= arrNums.length -1; i++) {
        for (j = 0; j <= arrNums.length -1; j++) {
            if (i !== j) {
                message += "*";
            } else {
                message += arrNums[i][j];
            }
        }

        message += "<br>"
    }

    resultDiv.innerHTML = message;
}