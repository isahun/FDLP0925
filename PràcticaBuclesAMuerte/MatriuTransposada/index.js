"use strict"


//Donat un array bidimensional, imprimeix la matriu transposada (intercanviar files i columnes).

function transposeMatrix() {

    const arrNums = [[3, 5, 2] , [1, 0, 3] , [1, 2, 0]];
    const resultDiv = document.getElementById("result");
    const transArrNums = [];
    let i = 0;
    let j = 0;

    for (i = 0; i <= arrNums.length-1; i++) {
        let fila = [];
        for (j = 0; j < arrNums[i].length; j++){

            fila.splice(i, 0, arrNums[i][j]);
        }
        //transArrNums.splice(i, 0, fila[i]);
        transArrNums.push(fila[i]);
    }
    
    resultDiv.innerHTML = transArrNums.join(",");
}