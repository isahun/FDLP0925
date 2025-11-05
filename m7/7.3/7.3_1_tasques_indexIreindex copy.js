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

const arrTasks = [];

function catchUserOption() {
    const userOption = parseInt(document.getElementById("userOption").value);
    return userOption //returns a num
}

function catchTask() {
    const userTask = document.getElementById("userTask").value
    if (!userTask) {
        return document.getElementById("result").innerHTML = "Has d'introduir una tasca.";
    } else {
    return userTask.toLowerCase(); //returns a string
    }
}

function addTask() {
    const userTask = catchTask()
    arrTasks.push(userTask);
    return "Has afegit la teva tasca correctament!"
}

function showTasks() {
    let message = "";
    for (let i = 0; i < arrTasks.length; i++) {
        message += (i + 1) + ". " + arrTasks[i];
    }
    return message
}

function removeTask() {
    const userTaskStr = catchTask();
    const taskInd = arrTasks.indexOf(userTaskStr); //num
    
    if (taskInd === -1) return "Aquesta tasca no existeix."

arrTasks.splice(taskInd, 1)
return `Tasca eliminada correctament. Així queda l'array: <br> ${arrTasks.join("<br>")}`

}

function taskList() {

const userOption = parseInt(document.getElementById("userOption").value);
const resultDiv = document.getElementById("result");
const err = "Has de triar una opció!";
const err2 = "Has d'introduir un nombre més gran que 0";
let message = "";
let howManyTasks = 0;
let addTaskStr = "";
let rmTaskStr = "";
let rmTaskInd = "";
let rmIndOf = "";

switch (userOption) {
    case 0:
        message = err;
        break;
    case 1:
        addTask()
        break;
    case 2:
        message = showTasks()
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
    resultDiv.innerHTML = message;

}
