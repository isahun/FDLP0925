"use strict"

function suma (num1, num2) {return num1 + num2}
function resta (num1, num2) {return num1 - num2}
function multi (num1, num2) {return num1 * num2}
function divi (num1, num2) {return num1 / num2}

function operateNums() {
    
    const userNum1 = parseInt(document.getElementById("num1").value);
    const userNum2 = parseInt(document.getElementById("num2").value);
    const userOperator = parseInt(document.getElementById("userOperator").value);
    const resultDiv = document.getElementById("result");
    const err = "Introdueix un nombre";
    const err1 = "Tria un operador";
    let resultOperate = 0;
    let message = "El resultat de la operació és: ";

    //validacions
    if (isNaN(userNum1) || isNaN(userNum2)) return resultDiv.innerHTML = err
    if (userOperator === 0) resultDiv.innerHTML = err1;

    switch (userOperator) {
        case 1:
            resultOperate = suma(userNum1, userNum2);
            break;
        case 2:
            resultOperate = resta(userNum1, userNum2);
            break;
        case 3:
            resultOperate = multi(userNum1, userNum2);
            break;
        case 4:
            resultOperate = divi(userNum1, userNum2).toFixed(2);
            break;
        }

    resultDiv.innerHTML = `${message} ${resultOperate}`;
}