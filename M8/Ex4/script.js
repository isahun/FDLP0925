"use strict"


const resultDiv = document.getElementById("result");

function createComPlane() {

    const commonInputs = catchInputs();
    const passNumComercial = document.getElementById("passNumComPlane").value

    const newComercial = new AvioComercial (commonInputs.planeID, commonInputs.planeBrand, commonInputs.planeModel, commonInputs.planeLoad, commonInputs.planeLength, passNumComercial)

    avions.push(newComercial)

    resultDiv.innerHTML = `<pre>Has afegit l'avió de tipus ${AvioComercial.planeType} amb èxit!
    
    ${newComercial.toString()}</pre>`

    cleanInputs()
}

function createAircraft() {

    const commonInputs = catchInputs();
    const helixNum = document.getElementById("helixNum").value

    const newAircraft = new Avioneta (commonInputs.planeID, commonInputs.planeBrand, commonInputs.planeModel, commonInputs.planeLoad, commonInputs.planeLength, helixNum)

    avions.push(newAircraft)

    resultDiv.innerHTML = `<pre>Has afegit l'avió de tipus ${Avioneta.planeType} amb èxit!
    
    ${newAircraft.toString()}</pre>`

    cleanInputs()
}

function createJet() {

    const commonInputs = catchInputs();
    const passNumJet = parseInt(document.getElementById("passNumJet").value)
    
    if (passNumJet > JetPrivat.maxPass) return resultDiv.innerHTML = "No hi pot haver més de 10 passatgers."
    
    const newJet = new JetPrivat (commonInputs.planeID, commonInputs.planeBrand, commonInputs.planeModel, commonInputs.planeLoad, commonInputs.planeLength, passNumJet)

    avions.push(newJet)

    resultDiv.innerHTML = `<pre>Has afegit l'avió de tipus ${JetPrivat.planeType} amb èxit!
    
    ${newJet.toString()}</pre>`

    cleanInputs()
}

function showPlanes() {
    if (avions.length < 1) return resultDiv.innerHTML = "No hi ha avions guardats."
    
    resultDiv.innerHTML = `<pre>${avions.toString()}</pre>`

    cleanInputs()
}

function showOnePlane() {
    if (avions.length < 1) return resultDiv.innerHTML = "No hi ha avions guardats."

    const showPlaneName = document.getElementById("showPlaneName").value
    if (!showPlaneName ) return resultDiv.innerHTML = "Has d'introduir un identificador vàlid."

    const planePosition = findPlane(showPlaneName);
    if (planePosition == -1) return resultDiv.innerHTML = "Aquest avió no existeix."

    resultDiv.innerHTML = `<pre>${avions[planePosition].toString()}</pre>`

    cleanInputs()
}

function removePlane () {
    if (avions.length < 1) return resultDiv.innerHTML = "No hi ha avions guardats."

    const rmPlaneName = document.getElementById("rmPlaneName").value
    if (!rmPlaneName ) return resultDiv.innerHTML = "Has d'introduir un identificador vàlid."

    const planePosition = findPlane(rmPlaneName);
    if (planePosition == -1) return resultDiv.innerHTML = "Aquest avió no existeix."

    let userConfirmation = confirm("Estàs segur que vols eliminar l'avió?");
    if (userConfirmation === true) {
        avions.splice(planePosition, 1);
        resultDiv.innerHTML = "S'ha eliminat l'avió correctament.";
    } else {
        resultDiv.innerHTML = "L'avió no s'ha eliminat.";
    }
    
    cleanInputs()
}