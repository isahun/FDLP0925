"use strict"

function sumPairOdd () {

    const numberNums = parseInt(prompt("Quants números vols introduir?"));
    const err = "Has d'introduir un número més gran que 0";
    const resultDiv  = document.getElementById("result");
    let userNum = 0;
    const userNums = [];
    const oddArr = [];
    const pairArr = [];
    let sumOdds = 0;
    let sumPairs = 0;

//validem
    while (numberNums <= 0 || isNaN(numberNums)) { //validem amb bucle while per a que mostri error mentre el num sigui 0 o menys, o sigui text
    alert(err);
    numberNums = parseInt(prompt("Quants números vols introduir a la llista?")); //canviem valor d variable per a que pugui entrar al for seguent, 
    //on es demana la paraula a introduir i s'incorpora a l'array
}

//operem
for (let i = 0; i < numberNums; i++){
    userNum = parseInt(prompt("Quins números vols introduir a la llista?"));
    userNums.push(userNum);

    if (userNum % 2 === 0) {
        sumPairs += userNum;
    } else {
        sumOdds += userNum;
    }

}

resultDiv.innerHTML = `La suma dels nombres parells de la teva llista és ${sumPairs} i la suma dels senars és ${sumOdds}.`
}