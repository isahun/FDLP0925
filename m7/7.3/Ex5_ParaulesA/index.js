"use strict"


function wordsWithA () {
    let numWords = parseInt(prompt("Quantes paraules vols introduir a la llista?")); //recollir dades amb prompt no input
    const wordsArr = [];
    let userWord = "";
    const resultDiv = document.getElementById("result");


//validacions
while (numWords <= 0 || isNaN(numWords)) { //validem amb bucle while per a que mostri error mentre el num sigui 0 o menys, o sigui text
    alert("Introdueix un número major a 0");
    numWords = parseInt(prompt("Quantes paraules vols introduir a la llista?")); //tornem a declarar la variable per a que pugui entrar al for seguent, 
    //on es demana la paraula a introduir i s'incorpora a l'array
}

//BUCLE FOR
for (let i = 0; i < numWords; i++) { //primer bucle for per recórrer tot el nou array a mida que es vagi formant amb nous inputs gracies al codi de dins
    userWord = prompt("Quines paraules vols introduir a la llista?"); //recollim input string de user
    wordsArr.push(userWord); //introduim aquest valor a l'array amb .push()
}

console.log(userWord); //per comprovar que l'array conté tots els inputs que posa l'usuari

const nomsAmbA = []; //creem un nou array fora del bucle, on guardarem els valors q comencen per A del primer array, si n'hi ha

for (let i = 0; i < wordsArr.length; i++) { //tornem a recórrer l'array amb aquest bucle for, aquet cop x filtrar valors q comencen x A

    let firstChar = wordsArr[i].toLowerCase().charAt(0); //tb nomsLlista[i][0].toLowerCase(). No podem fer .toLowerCase().charAt() a un array, només a un string
    //amb aquesta variable firstChar fem possible comparar el primer caràcter de cada valor de l'array original

    if (firstChar == "a") {
        nomsAmbA.push(wordsArr[i]); 
}
}

if (nomsAmbA.length > 0) { 
    resultDiv.innerHTML = `La teva llista té ${nomsAmbA.length} noms començats per A: </br> ${nomsAmbA.join("<br>")}`;
} else {
    resultDiv.innerHTML = `La teva llista no inclou cap element començat per A.`;
}

}