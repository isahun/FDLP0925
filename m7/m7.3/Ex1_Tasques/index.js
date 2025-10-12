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

function taskList() {

const userOption = parseInt(document.getElementById("userOption").value);
const resultDiv = document.getElementById("result");
const case0 = "Adéu!";
const arrTasks = [];
let message = "";

let addTaskStr = "";
let rmTaskStr = "";
let rmTaskInd = "";
let rmIndOf = "";

while (userOption !== 0) {

switch (userOption) {
    case 0:
        message = case0;
        break;
    case 1:
        let howManyTasks = parseInt("Quantes tasques vols introduir?");
        do {
            addTaskStr = prompt("Introdueix una tasca:");
            arrTasks.push(addTaskStr);
            i ++
        } while (i < howManyTasks)
        break;
    case 2:
        message = arrTasks.join("<br>");
        break;
    case 3:
        let howManyRm = parseInt("Quantes tasques vols esborrar?");
        let rmConfirm = "";
        do {
            rmConfirm = confirm("Si vols esborrar per posició: OK. <br> Si vols esborrar per paraula clau: Cancel");

            if (rmConfirm) {
                rmTaskInd = parseInt(prompt("Introdueix la posició de la tasca a esborrar"));
                arrTasks.splice((rmTaskInd - 1), 1);
                
            } else {
                rmTaskStr = prompt("Introdueix la tasca a esborrar:");
                rmIndOf = arrTasks.indexOf(rmTaskStr);     
            }
        } while (i < howManyRm)
            
        message = "Tasca esborrada, així queda la teva llista: " + arrTasks.join("<br>")
        
        break;
    }
}
resultDiv.innerHTML = message;

}