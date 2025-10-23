"use strict"

/*
Escriu un programa per una botiga de surf on se li exposarà un menú als usuaris i usuàries amb les següents opcions:

Calcular material taula (crida a una funció que rep un boolean que representi si la persona té experiència o no) si té, 
retornarà el missatge "taula de fibra", si no retornarà el missatge "taula d'espuma". (demanem per pantalla si l'usuari/ària si té experiència o no)

Imprimir forecast (crida a una funció  que rep l'alçada de l'onada en metres). Si l'alçada és més de 2 metres, imprimirà "onades grans", 
si no imprimirà "onades petites". (Introduïm l'alçada de les onades per pantalla, simulant que les rebem d'una aplicació externa)

Calcula el cost per reserva (crida a una funció  que rep els minuts de reserva i el tipus de taula reservada i retorna el cost de la reserva).
(demanem per pantalla els minuts i el tipus)

Taula tipus espuma: 20 € cada 60 min.
Taula tipus fibra: 35 € cada 60 min.
Sortir del programa.

Fins que la persona no escrigui un 4, el programa ha de continuar mostrant el menú i donar la possibilitat de fer accions.
-->
*/

function catchUserOption() {
    const userOption = parseInt(document.getElementById("userOption").value);
    return userOption //returns a num
}

function calcBoardMaterial(userExperience) {
    if (userExperience === 1) userExperience = true;
    if (userExperience === 0) userExperience = false;

    return userExperience;
}

function printForecast(waveHeight) {
    const waveThreshold = 2
    if(waveHeight > waveThreshold) {
        return "Onades grans."
    } else {
        return "Onades petites"
    }
}

function calcBookingCost(bookingCostMins, bookingCostBoard) {


}


function navigateMenu() {

const userExperience = document.getElementById("userExperience").value;
const waveHeight = parseFloat(document.getElementById("waveHeight").value);
const bookingCostMins = parseInt(document.getElementById("bookingCost").value);
const bookingCostBoard = document.getElementById("bookingCost2").value;

const resultDiv = document.getElementById("result");
const err = "Has de triar una opció!";
let message = "";

let userOption = catchUserOption();

//validar madafaka

switch (userOption) {
    case 0:
        message = err;
        break;
    case 1:
        userExperience = calcBoardMaterial(userExperience);
        if (userExperience) { 
            message =  "Taula de fibra"
        } else {
            message = "Taula d'escuma"
        }
        break;
    case 2:
        message = showTasks()
        break;
    case 3:
        message = removeTask()
        break;
}
    resultDiv.innerHTML = message;

}