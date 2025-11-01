"use strict"


const resultDiv = document.getElementById("result");

function createComPlane() {

    const commonInputs = catchInputs();
    const passNumComercial = parseInt(document.getElementById("numPassCom").value)

    if (validateCommonInputs(commonInputs)) return resultDiv.innerHTML = "Els camps no poden estar en blanc."
    if (validateNumInputs(commonInputs)) return resultDiv.innerHTML = "Has d'introduir un número vàlid."
    if (!passNumComercial || passNumComercial <= 0) return resultDiv.innerHTML = "Has d'introduir mínim 1 passatger."

    const newComercial = new AvioComercial (commonInputs.numPlane, commonInputs.brand, commonInputs.model, commonInputs.loadKg, commonInputs.lengthMt, passNumComercial)

    avions.push(newComercial)

    resultDiv.innerHTML = `<pre>Has afegit l'avió de tipus ${newComercial.planeType} amb èxit!
    
    ${newComercial.toString()}</pre>`

    cleanInputs()
}

function createAircraft() {

    const commonInputs = catchInputs();
    const numHelix = document.getElementById("numHelix").value;

    if (validateCommonInputs(commonInputs)) return resultDiv.innerHTML = "Els camps no poden estar en blanc."
    if (validateNumInputs(commonInputs)) return resultDiv.innerHTML = "Has d'introduir un número vàlid."
    if (!numHelix || numHelix < 2) return resultDiv.innerHTML = "Has d'introduir mínim 2 hèlixs."

    const newAircraft = new Avioneta (commonInputs.numPlane, commonInputs.brand, commonInputs.model, commonInputs.loadKg, commonInputs.lengthMt, numHelix)

    avions.push(newAircraft)

    resultDiv.innerHTML = `<pre>Has afegit l'avió de tipus ${newAircraft.planeType} amb èxit!
    
    ${newAircraft.toString()}</pre>`

    cleanInputs()
}

function createJet() {

    const commonInputs = catchInputs(); //guardem en una variable l'objecte d'inputs comuns que recull la funció
    const passNumJet = parseInt(document.getElementById("numPassJet").value)

    if (validateCommonInputs(commonInputs)) return resultDiv.innerHTML = "Els camps no poden estar en blanc."
    if (validateNumInputs(commonInputs)) return resultDiv.innerHTML = "Has d'introduir un número vàlid."
    
    const newJet = new JetPrivat (commonInputs.numPlane, commonInputs.brand, commonInputs.model, commonInputs.loadKg, commonInputs.lengthMt, passNumJet)
    //accedim a cada valor de l'objecte que hem cridat amb catchInputs()
    
    if (passNumJet > newJet.maxPass) return resultDiv.innerHTML = "No hi pot haver més de 10 passatgers."


    avions.push(newJet)

    resultDiv.innerHTML = `<pre>Has afegit l'avió de tipus ${newJet.planeType} amb èxit!
    
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
        cleanInputs()
    } else {
        resultDiv.innerHTML = "L'avió no s'ha eliminat.";
    }
    
    
}