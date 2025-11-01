"use strict"

function cleanInputs() { //sempre netegem input al final
    const inputs = document.querySelectorAll("input") //consulta tots els inputs, crea un array d inputs
    
    //loop x limpiar values
    for (let i = 0; i < inputs.length; i++){
        const input = inputs[i];
        input.value = ""
    }
}

function catchInputs() {
    const numPlane = document.getElementById("numPlane").value.trim()
    const brand = document.getElementById("brand").value.trim()
    const model = document.getElementById("model").value.trim()
    const loadKg = parseFloat(document.getElementById("loadKg").value)
    const lengthMt = parseFloat(document.getElementById("lengthMt").value)

    return {
        numPlane, brand, model, loadKg, lengthMt
    };
}

function validateCommonInputs(commonInputs) {
    let validateInput = (!commonInputs.numPlane || !commonInputs.brand || !commonInputs.model || !commonInputs.loadKg || !commonInputs.lengthMt)
        return validateInput
    }

function validateNumInputs(commonInputs) {
    let validateNumInput = (commonInputs.loadKg <= 0 || commonInputs.lengthMt <= 0)
    return validateNumInput
}

function findPlane(numPlane) { 
    //busquem nom, dins de l'array 
    let planePosition = -1 
    if (avions.length < 1) return planePosition

    let i = 0; //compte

    do {
        if(avions[i].numPlane === numPlane) {
            planePosition = i;
        }
        i++
    } while (i < avions.length && planePosition == -1)

    return planePosition; //la funció genera un nombre, l'index
}

