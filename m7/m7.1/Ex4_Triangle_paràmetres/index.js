"use strict"

function whatTriangle(side1, side2, side3) {

    let typeOfTriangle = "";

    if (side1 === side2 && side2 === side3) {
        typeOfTriangle = "triangle equilàter."
    } else if (side1 === side2 || side2 === side3 || side1 === side3) { //qualsevol dels dos pot ser igual
        typeOfTriangle = "triangle isòsceles."
    } else {
        typeOfTriangle = "triangle escalè."
    }

    return typeOfTriangle;

}

function operate(){

    const side1 = parseInt(document.getElementById("num1").value);
    const side2 = parseInt(document.getElementById("num2").value);
    const side3 = parseInt(document.getElementById("num3").value);
    const resultDiv = document.getElementById("result");
    let message = "";
    const err = "Introdueix un nombre";
    const err1 = "No pot ser 0.";

//VALIDACIONS
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        resultDiv.innerHTML = err; 
        return;
    }

    if ((num1 === 0) || (num2 === 0) || (num3 === 0)) {
        resultDiv.innerHTML = err1; 
        return;
    }

    const typeOfTriangle = typeOfTriangle(side1, side2, side3);

    resultDiv.innerHTML = `El teu triangle és un ${typeOfTriangle}`
}
