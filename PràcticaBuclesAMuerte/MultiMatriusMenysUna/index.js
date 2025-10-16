"use strict"

//Crea una nova matriu on cada element sigui el producte de tots els altres 
//números de la mateixa fila, menys ell mateix.
//  [2, 3, 1][4, 0, 5][1, 2, 3]
//  [3, 2, 6][0, 20, 0][6, 3, 2]

function multiMatrix () {
const arrNums = [[2, 3, 1], [4, 0, 5], [1, 2, 3]];
const newArrMulti = [];
let i = 0;
let j = 0;
let k = 0;
const resultDiv = document.getElementById("result");
let multi = 0;

    for (i = 0; i < arrNums.length; i++){
        let fila = []
        for (j = 0; j < arrNums.length; j++) {
            multi = 1;
                for (k = 0; k < arrNums[i].length; k++) {
                    if (j !== k) {
                        multi *= arrNums[i][k];
                    }
                } 
                fila.push(multi);
            }

        newArrMulti.push(fila);
    }

    resultDiv.innerHTML = newArrMulti;

}

/*
for (i = 0; i < arrNums.length; i++){
    multi = 1;
    
    for (j = 0; j < arrNums.length; j++) {
        if (j !== i) {
            multi *= arrNums[j];
        }
    }
    if (multi < 0) {
        multi *= -1
    }
    
    newArrMulti.push(multi)
}

*/