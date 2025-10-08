"use strict"

 //TO DO
    //JS
        //1 variable x cada nombre enter, és a dir 2
        //1 variable pel resultat
        //condicionals x comparar els nombres
    //OUTPUT
        //omplir el div amb el resultat de la comparació, quin nombre és major, quin menor i si són iguals 2 nombres

function compareNums() {
    
const num1 = parseInt(document.getElementById("num1").value);
const num2 = parseInt(document.getElementById("num2").value);
const num3 = parseInt(document.getElementById("num3").value);
let message = "";
const err = "Introdueix un nombre."
const resultDiv = document.getElementById("result");

//Recollim dades
//Validem les dades: si no és nan
//comparem les dades en escenaris diferents intentant no repetir comparacions


//si treiem una variable per la diferència entre cada variable podem comparar més netament potser

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    resultDiv.innerHTML = err;
    return;
}
// VARIABLES PER COMPROVAR SI DOS NOMBRES SÓN IGUALS O NO
//I QUIN ÉS EL MÉS GRAN I EL MÉS PETIT

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
                } 
                else if (dif23 !== 0) {
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

/*
if ((dif12 === 0) && (dif23 === 0)) {
    message = "Els tres números són iguals."
        } else if ((numLarge === num3) && (dif12 === 0)) {
            message = `El nombre més gran és ${num3}, i ${num1} i ${num2} són més petits però iguals entre si.`
            } else if ((numLarge === num1) && (dif12 === 0)) {
                message = `El nombre més petit és ${num3}, i ${num1} i ${num2} són més grans però iguals entre si.`
                } else if ((numLarge === num1) && (dif13 === 0)) {
                    message = `El nombre més petit és ${num2}, i ${num1} i ${num3} són més grans però iguals entre si.`
                    } else if ((numLarge === num2) && (dif13 === 0)) {
                        message = `El nombre més gran és ${num2}, i ${num1} i ${num3} són més petits però iguals entre si.`
                        } else if ((numLarge === num1) && (dif23 === 0)) {
                            message = `El nombre més gran és ${num1}, i ${num2} i ${num3} són més petits però iguals entre si.`
                            } else if ((numLarge === num3) && (dif23 === 0)  ) {
                                message = `El nombre més petit és ${num1}, i ${num2} i ${num3} són més grans però iguals entre si.`
                                } else if (numLarge === num1 && dif23 !== 0) {
                                    message = `El nombre més gran és ${num1} i el més petit és ${numLow}.`
                                    } else if ((numLarge === num2) && (dif13 !==0)) {
                                        message = `El nombre més gran és ${num2} i el més petit és ${numLow}.`
                                        } else if ((numLarge === num3) && (dif12 !==0)) {
                                            message = `El nombre més gran és ${num3} i el més petit és ${numLow}.`
                                                }
*/
resultDiv.innerHTML = message;

                                            }
