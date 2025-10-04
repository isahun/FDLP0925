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



let quantsNoms = parseInt(prompt("Quants noms vols introduir a la llista?"));
const nomsLlista = [];
let quinsNoms = "";
let message = "";
const resultDiv = document.getElementById("result");


//validacions
while (quantsNoms <= 0 || isNaN(quantsNoms)) {
    alert("Introdueix un número major a 0");
    quantsNoms = parseInt(prompt("Quants noms vols introduir a la llista?"));
}

for (let i = 0; i < quantsNoms; i++) {
    quinsNoms = prompt("Quins noms vols introduir a la llista?");
    nomsLlista.push(quinsNoms);
    console.log(quinsNoms);
}

const nomsAmbA = [];

for (let i = 0; i < nomsLlista.length; i++) {

    let firstChar = nomsLlista[i].toLowerCase().charAt(0); //tb nomsLlista[i][0].toLowerCase()

    if (firstChar == "a") {
        nomsAmbA.push(nomsLlista[i]); 
}
}

if (nomsAmbA.length > 0) {
    resultDiv.innerHTML = `La llista inclou només els noms començats per A: <br/> ${nomsAmbA}`;
} else {
    resultDiv.innerHTML = `La teva llista no inclou cap element començat per A.`;
}
