"use strict"


function calcMulti () {

    const arrOriginal = [-2, 3, 7, 2, -4] //length = 5
    const arrFinal = [];
    const resultDiv = document.getElementById("result");

    for (let i = 0; i < arrOriginal.length; i++) {
        let resultMulti = 1; //abans de multiplicar res amb bucle interior posem 1 de base i 
        // evito q doni sempre 0 en multiplicar dins del bucle

        for (let j = 0; j < arrOriginal.length; j++) {
            if (i !== j) { //x multiplicar només si tenen indexs diferents, x deixar fora la posició actual
            // "i" és index de l'element q tem calculant, i "j" del que estem multiplicant al bucle interior
                resultMulti *= arrOriginal[j];
            }
        }

        arrFinal.push(resultMulti);
    }
    
    resultDiv.innerHTML = "Entrada: " + arrOriginal + "<br>" + "Sortida: " + arrFinal;

}
