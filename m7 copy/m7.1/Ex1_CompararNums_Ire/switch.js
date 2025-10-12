"use strict"

function compareNums() {
    
const num1 = parseInt(document.getElementById("num1").value);
const num2 = parseInt(document.getElementById("num2").value);
const num3 = parseInt(document.getElementById("num3").value);
let message = "";
const err = "Introdueix un nombre."
const resultDiv = document.getElementById("result");

//VALIDACIONS: si cap dels nums és NaN

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    resultDiv.innerHTML = err;
    return;
}
// VARIABLES D'OPERACIÓ - POST VALIDACIÓ

let dif12 = num1 - num2;
let dif13 = num1 - num3;
let dif23 = num2 - num3;
let numLarge = Math.max(num1, num2, num3);
let numLow = Math.min(num1, num2, num3)

if ((num1 === num2) && (num1 == num3)) {
    message = "Els tres números són iguals."
} else {

    switch (numLarge) { //variable argument del switch, numLarge, què passa quan cada número és el més gran, combinacions possibles, + endreçat
        case num1: 
            if (dif23 === 0) {
                message = `El nombre més gran és ${num1}, i ${num2} i ${num3} són més petits però iguals entre si.`
            } else if (dif13 === 0){
                message = `El nombre més petit és ${num2}, i ${num1} i ${num3} són més grans però iguals entre si.`
                } else if (dif12 === 0) {
                    message = `El nombre més petit és ${num3}, i ${num1} i ${num2} són més grans però iguals entre si.`
                    } else if (dif23 !== 0) {
                        message = `El nombre més gran és ${num1} i el més petit és ${numLow}.`
                    }
        break;

        case num2:
            if (dif13 === 0) {
                message = `El nombre més gran és ${num2}, i ${num2} i ${num3} són més petits però iguals entre si.`
            } else if (dif23 === 0){
                message = `El nombre més petit és ${num1}, i ${num2} i ${num3} són més grans però iguals entre si.`
                } else if (dif12 === 0) {
                    message = `El nombre més petit és ${num3}, i ${num1} i ${num2} són més grans però iguals entre si.`
                    } else if (dif23 !== 0) {
                        message = `El nombre més gran és ${num2} i el més petit és ${numLow}.`
                }
        break;
        
        case num3:
            if (dif13 === 0) {
                message = `El nombre més petit és ${num2}, i ${num1} i ${num3} són més grans però iguals entre si.`
            } else if (dif23 === 0){
                message = `El nombre més petit és ${num1}, i ${num2} i ${num3} són més grans però iguals entre si.`
                } else if (dif12 === 0) {
                    message = `El nombre més gran és ${num3}, i ${num1} i ${num2} són més petits però iguals entre si.`
                    } else if (dif23 !== 0) {
                        message = `El nombre més gran és ${num3} i el més petit és ${numLow}.`
                    }
        break;
        }
    }

    resultDiv.innerHTML = message;
}



