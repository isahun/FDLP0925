"use strict"

function convertNums() {
    const numUser = parseFloat(document.getElementById("num").value);
    const optionMenu = parseInt(document.getElementById("conversion").value);

    const resultDiv = document.getElementById("result");
    const err = "Introdueix un nombre";
    const err2 = "Has de triar una conversió";
    const mToFeetFactor = 3.28084;
    const fToMeterFactor = 0.3048;
    const mToYardFactor = 1.09361;
    const yToMeterFactor = 0.91;
    let message = "";

    if (isNaN(numUser) || numUser <= 0) {
        resultDiv.innerHTML = err;
        return;
    }   
    if (optionMenu === 0) {
        resultDiv.innerHTML = err2;
        return;
    }

    switch (optionMenu) {
        case 1:
            let mToFeet = numUser * mToFeetFactor;
            message = `${numUser} metres són ${mToFeet.toFixed(2)} peus.`;
            break;
        case 2:
            let fToMeter = numUser * fToMeterFactor;
            message = `${numUser} peus són ${fToMeter.toFixed(2)} metres.`;
            break;
        case 3:
            let mToYard = numUser * mToYardFactor
            message = `${numUser} metres són ${mToYard.toFixed(2)} iardes.`;
            break;
        case 4:
            let yToMeter = numUser * yToMeterFactor
            message = `${numUser} iardes són ${yToMeter.toFixed(2)} metres.`;
            break;
    }

    resultDiv.innerHTML = message;
    
}