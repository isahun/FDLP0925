"use strict"


/*
Crea un programa que sol·liciti a l'usuari/ària quants noms desitja introduir. Una vegada tenim aquest número, 
    demanarem a l'usuari/ària tants noms de persona com ha dit prèviament i els emmagatzemarem en un Array. 
    Després, mostrarem per pantalla només els noms que comencen per la lletra “A”.
    
    TO DO

        
        JS 
        funcio global
        variables (numero de noms, nom introduit, missatge, errors)
        funció x sol·licitar numero de noms
        funció x demanar noms i guardar en array
        funció x guardar en array els que comensen x A?
        funció x mostrar en pantalla només els q comencen x A
        array
        bucle for per introduir noms al array
        bucle for per mostrar llista de noms de l'array final, i charAt per seleccionar nomes els q comencen x A a la llista final
        */

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

//
//function funcioMare() {
//  let variableMare = "Sóc la variable de la funció mare";
//  funcioFilla(variableMare);  // Passant la variable de la funció mare com a argument
//}


//const ages = [32, 33, 16, 40];
//document.getElementById("demo").innerHTML = ages.filter(checkAdult);
//function checkAdult(age) {
 // return age >= 18;
//}

const numNoms = parseInt(prompt("Quants noms vols introduir a la llista?"))
const resultDiv = document.getElementById("result");
let arrNames = [];
let quinsNoms = "";

function nameswithA() {

    validateData(numNoms)
    
    printNamesWithA()

    console.log(printNamesWithA(arrNames))


}