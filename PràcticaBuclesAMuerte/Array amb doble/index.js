"use strict"
//Donat un array [3, 5, 2, 4], crea un nou array amb el doble de cada element.

function arrayDoubleNum() {

    const arrNums = [3, 5, 2, 4];
    const arrDoubleNums = [];
    const resultDiv = document.getElementById("result");

    for (let i = 0; i < arrNums.length; i++) {
        arrDoubleNums.push((arrNums[i])*2);
    }

    resultDiv.innerHTML = `L'array ${arrNums} dona lloc a un amb el doble de cada valor: <br> ${arrDoubleNums}.`;
}