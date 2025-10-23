"use strict"

const arrTasks = [];

function catchUserOption() {
    const userOption = parseInt(document.getElementById("userOption").value);
    return userOption //returns a num
}

function catchTask() {
    const userTask = document.getElementById("userTask").value
    if (!userTask) return ""
    return userTask.toLowerCase(); //returns a string
    }


function addTask() {
    const userTask = catchTask()
    
    if (userTask === "") {
        return "Has d'introduir una tasca.";
    } else {
        arrTasks.push(userTask);
    }
    
    return "Has afegit la teva tasca correctament!"
}

function showTasks() {
    let message = "";
    for (let i = 0; i < arrTasks.length; i++) {
        message += (i + 1) + ". " + arrTasks[i] + "<br>";
    }
    return message
}

function removeTask() {
    const userTaskStr = catchTask();
    const taskInd = arrTasks.indexOf(userTaskStr); //num

    if (userTaskStr === "") {
        return "Has d'introduir una tasca.";
    } else if (taskInd === -1) {
        return "Aquesta tasca no existeix."
    }

    arrTasks.splice(taskInd, 1)
    return "Tasca eliminada correctament."
}

function taskList() {

const userOption = parseInt(document.getElementById("userOption").value);
const resultDiv = document.getElementById("result");
const err = "Has de triar una opció!";
let message = "";

switch (userOption) {
    case 0:
        message = err;
        break;
    case 1:
        message = addTask()
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
