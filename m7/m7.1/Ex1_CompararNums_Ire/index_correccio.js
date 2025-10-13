"use strict"

function operate() {

    const resultDiv = document.getElementById("result");
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);
    const err = "Invalid values.";

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) return resultDiv.innerHTML=err;

    //comparem si són iguals

    if (num1 == num2 || num1 == num3 || num2 == num3) return resultDiv.innerHTML = "Al menys dos nombres són iguals"

    const menor = Math.min(num1, num2, num3);
    const major = Math.max(num1, num2, num3);

    resultDiv.innerHTML = `El número més petit és ${menor} i el més gran és ${major}.`


}