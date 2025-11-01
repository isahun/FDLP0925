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
    const planeID = document.getElementById("planeID").value.trim()
    const planeBrand = document.getElementById("planeBrand").value.trim()
    const planeModel = document.getElementById("planeModel").value.trim()
    const planeLoad = parseFloat(document.getElementById("planeLoad").value)
    const planeLength = parseFloat(document.getElementById("planeLength").value)

    return {
        planeID, planeBrand, planeModel, planeLoad, planeLength
    };

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

