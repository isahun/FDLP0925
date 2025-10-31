"use strict"

function cleanInputs() { //sempre netegem input al final
    const inputs = document.querySelectorAll("input") //consulta tots els inputs, crea un array d inputs
    
    //loop x limpiar values
    for (let i = 0; i < inputs.length; i++){
        const input = inputs[i];
        input.value = ""
    }
}

function findPlane(numPlane) { 

    //busquem nom, dins de l'array 
    let buildingPosition = -1 
    if (arrBuildings.length < 1) return buildingPosition

    let i = 0; //compte

    do {
        if(arrBuildings[i].nom === buildingName) {
            buildingPosition = i;
        }
        i++
    } while (i < arrBuildings.length && buildingPosition == -1)

    return buildingPosition; //la funció genera un nombre, l'index
}

