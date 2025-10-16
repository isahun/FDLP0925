"use strict"

//Donat un array, calcula la suma de tots els elements amb un for.

function sumArray() {
    const arrNums = [2, 4, 6, 23, 5, -2, -13, 9];
    const resultDiv = document.getElementById("result");

    let suma = 0;

    for (let i = 0; i < arrNums.length; i++) {
        suma += arrNums[i];
    }

    resultDiv.innerHTML = suma

}