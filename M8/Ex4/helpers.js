"use strict"

function cleanInputs() { //sempre netegem input al final
    const inputs = document.querySelectorAll("input") //consulta tots els inputs, crea un array d inputs
    
    //loop x limpiar values
    for (let i = 0; i < inputs.length; i++){
        const input = inputs[i];
        input.value = ""
    }
}

function catchInputs(planeID, planeBrand, planeModel, planeLoad, planeLength) {
    planeID = document.getElementById("planeID").value
    planeBrand = document.getElementById("planeBrand").value
    planeModel = document.getElementById("planeModel").value
    planeLoad = document.getElementById("planeLoad").value
    planeLength = document.getElementById("planeLength").value

    return [planeID, planeBrand, planeModel, planeLoad, planeLength]

}

function findPlane(numPlane) { 

    //busquem nom, dins de l'array 
    let planePosition = -1 
    if (avions.length < 1) return planePosition

    let i = 0; //compte

    do {
        if(avions[i].nom === numPlane) {
            planePosition = i;
        }
        i++
    } while (i < avions.length && planePosition == -1)

    return planePosition; //la funció genera un nombre, l'index
}

