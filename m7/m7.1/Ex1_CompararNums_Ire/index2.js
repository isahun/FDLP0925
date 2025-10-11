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
const messLower = "El nombre més petit és"
const messHigher = "El nombre més gran és"
const messSameLow = "són més petits però iguals entre si."
const messSameHigh = "són més grans però iguals entre si"

//VALIDACIONS: si cap dels nums és NaN
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    resultDiv.innerHTML = err;
    return;
}
// VARIABLES D'OPERACIÓ - POST VALIDACIÓ
let dif12 = num1 - num2;
let dif13 = num1 - num3;
let dif23 = num2 - num3;
let numLarge = Math.max(num1, num2, num3); //per tenir sempre 
let numLow = Math.min(num1, num2, num3);

if ((dif12 === 0) && (dif23 === 0)) { //primer l'opcio més restrictiva
    message = "Els tres números són iguals."

        } else if (numLarge === num1) { //combinacions si num1 és el més gran
            if (dif12 === 0) {
                message = `${messLower} + ${num3}, i ${num1} i ${num2} ${messSameHigh}`
            } else if (dif13 === 0) {
                    message = `${messLower} + ${num2}, i ${num1} i ${num3} ${messSameHigh}`
                } else if (dif23 === 0) {
                    message = `${messHigher} + ${num1}, i ${num2} i ${num3} ${messSameLow}`
                    } else if (dif23 !== 0) {
                            message = `${messHigher} ${num1} i el més petit és ${numLow}.`
                        }

            } else if (numLarge === num2) { //combinacions si num2 és el més gran
                if (dif12 === 0) {
                    message = `${messLower} + ${num3}, i ${num1} i ${num2} ${messSameHigh}`
                    } else if (dif23 === 0) {
                        message = `${messLower} + ${num1}, i ${num2} i ${num3} ${messSameHigh}`
                        } else if (dif13 === 0) {
                            message = `${messHigher} + ${num2}, i ${num1} i ${num3} ${messSameLow}`
                            } else if (dif13 !== 0) {
                                message = `${messHigher} ${num2} i el més petit és ${numLow}.`                                    }

                } else if (numLarge === num3) { //combinacions si num3 és el més gran
                    if (dif13 === 0) {
                        message = `${messLower} + ${num2}, i ${num1} i ${num3} ${messSameHigh}`
                        } else if (dif23 === 0) {
                            message = `${messLower} + ${num1}, i ${num2} i ${num3} ${messSameHigh}`
                            } else if (dif12 === 0) {
                                message = `${messHigher} + ${num3}, i ${num1} i ${num2} ${messSameLow}`
                                } else if (dif12 !== 0) {
                                    message = `${messHigher} ${num3} i el més petit és ${numLow}.`
                                }
                            }
                
                    

resultDiv.innerHTML = message;
}