"use strict"

/*
<!--Crea un programa que tingui un menú:
Afegir tasca, mostrar totes les tasques i eliminar tasca, a més de l’opció de sortir de l’aplicació.
D’aquesta manera tindrem un programa amb un llistat de tasques per fer. Les tasques es podran afegir, mostrar i eliminar un cop fetes.

TO DO
HTML
    3 botons, un per cada tasca (funció?)
    div x resultat
    script
JS
    3 funcions
    o un switch 
*/

/*function validateNumTasks(numTasks) {
    if (isNaN(numTasks) || numTasks === 0) {
    resultDiv.innerHTML = err2;
    return;
} 
}*/

function taskList() {

const userOption = parseInt(document.getElementById("userOption").value);
const resultDiv = document.getElementById("result");
const err = "Has de triar una opció!";
const err2 = "Has d'introduir un nombre més gran que 0";
const arrTasks = [];
let message = "";
let howManyTasks = 0;
let addTaskStr = "";
let rmTaskStr = "";
let rmTaskInd = "";
let rmIndOf = "";
let userExit = false;

while (!userExit) {
switch (userOption) {
    case 0:
        message = err;
;
        break;
    case 1:
        do {
        howManyTasks = parseInt(prompt("Quantes tasques vols introduir?"));
        let i = 0;
            do {
                addTaskStr = prompt("Introdueix una tasca:");
                arrTasks.push(addTaskStr);
                i ++
            } while (i < howManyTasks)

        } while (addTaskStr != "")
        break;
    case 2:
        message = arrTasks.join("<br>");
        break;
    case 3:
        do { 
            let howManyRm = parseInt(prompt("Quantes tasques vols esborrar?"));       
            let rmConfirm = "";
            let j = 0;

            do {
                rmConfirm = confirm("Si vols esborrar per posició: OK. <br> Si vols esborrar per paraula clau: Cancel");

                if (rmConfirm) {
                    rmTaskInd = parseInt(prompt("Introdueix la posició de la tasca a esborrar"));
                    arrTasks.splice((rmTaskInd - 1), 1);
                    
                } else {
                    rmTaskStr = prompt("Introdueix la tasca a esborrar:");
                    rmIndOf = arrTasks.indexOf(rmTaskStr);
                    arrTasks.splice((rmIndOf), 1);
                }
                j++

            } while (j < howManyRm)

        } while (howManyRm !== null)

        message = "Tasca esborrada, així queda la teva llista: " + arrTasks.join("<br>")
        break;
    }
    userExit = true;
}
    resultDiv.innerHTML = message;

}
