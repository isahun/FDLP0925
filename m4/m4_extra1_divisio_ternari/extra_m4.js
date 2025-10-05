"use strict"

 /*Fes un programa que pregunti a l'usuari/ària dos nombres enters al qual anomenaràs dividend i divisor respectivament.
El divisor haurà d'estar comprès entre 2 i 7.
En cas contrari, el programa haurà de mostrar un missatge d'error.
Si el divisor és correcte (2-7) mostra en pantalla si el dividend és múltiple del divisor, o no. 

TO DO
JS
    variables: dividend, divisor (2-7), resultat, missatge, error
    funció
    operar (switch que avaluï casos?)
    display

*/


function isMulti() {

const dividend = parseInt(document.getElementById("num1").value);
const divisor = parseInt(document.getElementById("num2").value);
const isMultiple = dividend % divisor === 0;
const resultDiv = document.getElementById("result");
const divideResult = dividend / divisor;
let message = "";
let isValid = true; //nova variable x separar en blocs validacions i operacions
const mess1 = "El resultat és " + (divideResult.toFixed(2)) + " i el dividend és múltiple del divisor."; 
const mess2 = "El resultat és " + (divideResult.toFixed(2)) + " i el dividend NO és múltiple del divisor."; 
const err1 = "Introdueix un divisor entre 2 i 7";
const err2 = "Introdueix un nombre."

/*Validacions i operacions sense separar
if (isNaN(dividend)||isNaN(divisor)) {
    message = err2;
} else if (divisor < 2 || divisor > 7) {
    message = err1;} else {
        message = (isMultiple === 0) ? mess1 : mess2 ;
resultDiv.innerHTML = message;
} */

//Validacions separades d'operacions
if (isNaN(dividend)||isNaN(divisor)) {
    message = err2;
    isValid = false;
    } else if (divisor < 2 || divisor > 7) {
    isValid = false;
    message = err1;
}

//operacions
if (isValid) {
message = (isMultiple === 0) ? mess1 : mess2 ;
}

//display
resultDiv.innerHTML = message;

}



