"use strict"

function validateData(numNoms) {
    while (numNoms <= 0 || isNaN(numNoms)) {
    alert("Introdueix un número major a 0");
    numNoms = parseInt(prompt("Quants noms vols posar a la llista?"))}
}

function printNamesWithA() {
    let i = 0;
    for (i = 0; i < numNoms; i++) {
    quinsNoms = prompt("Quins noms vols introduir a la llista?"); 
    arrNames.push(quinsNoms); 
    
    let firstChar = arrNames[i].toLowerCase().charAt(0); 
    if (firstChar === "a") return arrNames
}

    let firstChar = arrNames[i].toLowerCase().charAt(0); 
    if (firstChar === "a") return arrNames
}

const numNoms = parseInt(prompt("Quants noms vols introduir a la llista?"))
const resultDiv = document.getElementById("result");
let arrNames = [];
let quinsNoms = "";

function nameswithA() {

    validateData(numNoms)
    
    printNamesWithA()

    console.log(printNamesWithA(arrNames))


}