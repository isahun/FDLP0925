"use strict"

//Donat un array [1,2,3,4,5], 
//crea un nou array amb tots els elements menys l’element actual multiplicats (com el que fèiem abans).

function multiArr () {
const arrNums = [1, -2, 3, 4];
const newArrMulti = [];
let i = 0;
let j = 0;
const resultDiv = document.getElementById("result");
let multi = 0;

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

resultDiv.innerHTML = newArrMulti;

}