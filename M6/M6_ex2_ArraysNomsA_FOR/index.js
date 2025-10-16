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

function validateData() {
    let numNoms = parseInt(prompt("Quants noms vols posar a la llista?"))
    while (numNoms <= 0 || isNaN(numNoms)) {
    alert("Introdueix un número major a 0");
    numNoms = parseInt(prompt("Quants noms vols posar a la llista?"))
    }
    return numNoms
}

function printNamesWithA(numNoms) {
    let i = 0;
    const arrNames = []
    let quinsNoms = ""

    for (i = 0; i < numNoms; i++) {
    quinsNoms = prompt("Quins noms vols introduir a la llista?"); 
    arrNames.push(quinsNoms)
    } 

    let arrANames = [];

    for (i = 0; i < arrNames.length; i++) {
    let firstChar = arrNames[i].charAt(0).toLowerCase();
    if (firstChar === "a") {
        arrANames.push(arrNames[i])} 
    } return arrANames
    }

function nameswithA() {

    const numNoms = validateData();
    let arrANames= printNamesWithA(numNoms)
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = `La teva llista conté els següents noms començats per "A": <br> ${arrANames.join("<br>")}`
    
    }
