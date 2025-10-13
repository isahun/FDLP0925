"use strict"

function validateNums(numUser) {
    return isNaN(numUser) || numUser === 0 
} //retorna valor booleà

function validateOperator(optionMenu) {
    return optionMenu === 0 
} //retorna valor booleà

function convMtoFeet(numUser) {
    const mToFeetFactor = 3.28084;
    return numUser * mToFeetFactor; 
}

function convFtoMeter(numUser) {
    const fToMeterFactor = 0.3048;
    return numUser * fToMeterFactor; 
}

function convMtoYard(numUser) {
    const mToYardFactor = 1.09361;
    return numUser * mToYardFactor; 
}

function convYtoMeter(numUser) {
    const yToMeterFactor = 0.91;
    return numUser * yToMeterFactor; 
}

function printElement(HTMLelement, message){
    HTMLelement.innerHTML = message;
}

function convertNums() {
    const numUser = parseFloat(document.getElementById("num").value);
    const optionMenu = parseInt(document.getElementById("conversion").value);

    const resultDiv = document.getElementById("result");
    const err = "Introdueix un nombre";
    const err2 = "Has de triar una conversió";
    let message = "";
    
    if (validateNums(numUser)) return printElement(resultDiv, err)
    if (validateOperator(optionMenu)) return printElement(resultDiv, err2)

    switch (optionMenu) {
        case 1:
            message = `${convMtoFeet(numUser).toFixed(2)} peus.`;
            break;
        case 2:
            message = `${convFtoMeter(numUser).toFixed(2)} metres.`;
            break;
        case 3:
            message = `${convMtoYard(numUser).toFixed(2)} iardes.`;
            break;
        case 4:
            message = `${convYtoMeter(numUser).toFixed(2)} metres.`
            break;
    }

    resultDiv.innerHTML = message;
    
}