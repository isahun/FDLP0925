"use strict"

//Donat un array, crea un nou array amb només els elements positius.

function arrayPositive() {
    const arrNums = [2, 6, 4, -7, -2, -9, 5];
    const arrPos = [];
    const resultDiv = document.getElementById("result");

    for (let i = 0; i < arrNums.length; i++) {
        if (arrNums[i] > 0){
            arrPos.push(arrNums[i]);
        }
    }

    resultDiv.innerHTML = arrPos.join(", ");
}

