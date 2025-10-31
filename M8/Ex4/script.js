"use strict"


const resultDiv = document.getElementById("result");

function createComPlane() {

    const planeID = document.getElementById("planeID").value
    const planeBrand = document.getElementById("planeBrand").value
    const planeModel = document.getElementById("planeModel").value
    const planeLoad = document.getElementById("planeLoad").value
    const planeLength = document.getElementById("planeLength").value
    const passNumComercial = document.getElementById("passNumComPlane").value

    const newComercial = new AvioComercial (planeID, planeBrand, planeModel, planeLoad, planeLength, passNumComercial)

    avions.push(newComercial)

    resultDiv.innerHTML = `<pre>Has afegit l'avió de tipus ${AvioComercial.planeType} amb èxit!
    
    ${newComercial.toString()}</pre>`

}