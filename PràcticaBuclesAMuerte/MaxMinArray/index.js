"use strict"

//Calcula el mínim i màxim d’un array amb un bucle.

function minMax(){

    const arrNums = [2, 56, 4, -7, 33, -2, 0];
    const resultDiv = document.getElementById("result");

    let i = 0;
    let max = 0;
    let min = 0;

    for (i = 0; i < arrNums.length; i++) {
        max = Math.max(arrNums[i]);
        min = Math.min(arrNums[i]);
    }

    resultDiv.innerHTML = `El màxim és ${max} i el mínim és ${min}.`

}