"use strict"

//Calcula la mitjana d’un array amb un while.

function averageArr() {
    const arrNums = [7, 12, 4, 21, 5]; //length 5
    const resultDiv = document.getElementById("result");
    let average = ""
    let suma = 0;


    let i = 0;

    while (i < arrNums.length) {
        suma += arrNums[i];
        i++
    }
    
    average = suma / arrNums.length;

    resultDiv.innerHTML = average;

}