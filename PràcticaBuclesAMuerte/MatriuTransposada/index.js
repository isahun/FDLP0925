"use strict"


//Donat un array bidimensional, imprimeix la matriu transposada (intercanviar files i columnes).

function transposeMatrix() {

    const arrNums = [[3, 5, 2] , [1, 0, 3] , [1, 2, 0]];
    const resultDiv = document.getElementById("result");
    const transArrNums = [];
    let i = 0;
    let j = 0;

    for (i = 0; i <= arrNums.length-1; i++) { //primer bucle per crear els sub arrays buits
        transArrNums.push([])
    }

    for (i = 0; i <= arrNums.length-1; i++) {
        for (j = 0; j < arrNums[i].length; j++){
            transArrNums[j].push(arrNums[i][j]);
        }
    }
    resultDiv.innerHTML = transArrNums;
}