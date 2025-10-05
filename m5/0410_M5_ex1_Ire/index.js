"use strict"

/*
    Crea un programa que sol·liciti a l'usuari/ària quants noms desitja introduir. Una vegada tenim aquest número, 
    demanarem a l'usuari/ària tants noms de persona com ha dit prèviament i els emmagatzemarem en un Array. 
    Després, mostrarem per pantalla només els noms que comencen per la lletra “A”.
    
    TO DO
        HTML
        inputs per demanar quants noms, input per demanar cada nom que ha dit anteriorment
        output per mostrar els noms que comencen per la lletra A

        JS 
        variables (array, numero de noms, nom introduit, missatge, errors)
        validacions - condicionals
        bucle for per introduir noms al array
        bucle for per mostrar llista de noms de l'array final, i charAt per seleccionar nomes els q comencen x A a la llista final -->

        <input type="number" placeholder="Introdueix quants noms té la teva llista" id="nomsQuants">
        <input type="text" placeholder="Introdueix un nom a la llista" id="nomsId">
        <div id="result"></div> */

let quantsNoms = parseInt(prompt("Quants noms vols introduir a la llista?")); //recollir dades amb prompt no input
const nomsLlista = [];
let quinsNoms = "";
let message = "";
const resultDiv = document.getElementById("result");


//validacions
while (quantsNoms <= 0 || isNaN(quantsNoms)) { //validem amb bucle while per a que mostri error mentre el num sigui 0 o menys, o sigui text
    alert("Introdueix un número major a 0");
    quantsNoms = parseInt(prompt("Quants noms vols introduir a la llista?")); //tornem a declarar la variable per a que pugui entrar al for seguent, 
    //on es demana el nom a introduir i s'incorpora a l'array
}

for (let i = 0; i < quantsNoms; i++) { //primer bucle for per recórrer tot el nou array a mida que es vagi formant amb nous inputs gracies al codi de dins
    quinsNoms = prompt("Quins noms vols introduir a la llista?"); //recollim input string de user
    nomsLlista.push(quinsNoms); //introduim aquest valor a l'array amb .push()
    console.log(quinsNoms); //per comprovar que l'array conté tots els inputs que posa l'usuari
}

const nomsAmbA = []; //creem un nou array fora del bucle, on guardarem els valors q comencen per A del primer array, si n'hi ha

for (let i = 0; i < nomsLlista.length; i++) { //tornem a recórrer l'array amb aquest bucle for, aquet cop x filtrar valors q comencen x A

    let firstChar = nomsLlista[i].toLowerCase().charAt(0); //tb nomsLlista[i][0].toLowerCase(). No podem fer .toLowerCase().charAt() a un array, només a un string
    //amb aquesta variable firstChar fem possible comparar el primer caràcter de cada valor de l'array original

    if (firstChar == "a") {
        nomsAmbA.push(nomsLlista[i]); 
}
}

if (nomsAmbA.length > 0) { //per mostrar en pantalla només si l'array nomsAmbA conté algun valor en alguna posició
    resultDiv.innerHTML = `La llista inclou només els noms començats per A: </br> ${nomsAmbA}`;
} else {
    resultDiv.innerHTML = `La teva llista no inclou cap element començat per A.`;
}
