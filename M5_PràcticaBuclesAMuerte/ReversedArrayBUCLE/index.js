"use strict"

function revArr(){

    const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arrRev = [];
    const resultDiv = document.getElementById("result");

    for (let i = arrNums.length -1; i >= 0; i--) {

        arrRev.push(arrNums[i]);
    }

    resultDiv.innerHTML = arrRev;
    
}