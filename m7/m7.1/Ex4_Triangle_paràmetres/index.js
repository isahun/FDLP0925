"use strict"

/*
Crea una funciò que ha de rebre com a paràmetres els costats d'un triangle. 
La funció ha de retornar un missatge indicant si el triangle és equilàter, isòsceles o escalè.

*/

function whatTriangle() {

const side1 = parseInt(document.getElementById("num1").value);
const side2 = parseInt(document.getElementById("num2").value);
const side3 = parseInt(document.getElementById("num3").value);
const resultDiv = document.getElementById("result");
let message = "";
const err = "Introdueix un nombre"

//VALIDACIONS
if (isNaN(side1) || isNaN(side2) || isNaN(side3)) 
    {resultDiv.innerHTML = err; 
    return;
}

if (side1 === side2 && side2 === side3) {
    message = "Triangle equilàter."
} else if (side1 === side2 || side2 === side3) {
    message = "Triangle isòsceles."
} else {
    message = "Triangle escalè."
}

resultDiv.innerHTML = message

}
