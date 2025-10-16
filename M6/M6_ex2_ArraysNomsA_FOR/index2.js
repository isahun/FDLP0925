"use strict"

//VERSIÓ CLASSE

function validate(num) {
    return isNaN(num) || num <= 0
} //ens tornarà si és true o false, T 

function printMessage(elementHTML, message) {
    elementHTML.innerHTML = message;
}

function operate(num) { //aqui va numUser de la funcio addNames()
    //num fins quant girarem
    //on guardem la info
    
    const arrNames = [];
    const arrNamesWithA = [];

    for (let i = 0; i < num; i++) {
        let addName = prompt("Escriu un nom");

        if (addName.trim() !== "") {
            arrNames.push(addName);
        
            if (addName.charAt(0).toLowerCase() == "a") {
                arrNamesWithA.push(addName);
            }
        } else { //per evitar que l'user introdueixi entremig dels noms un espai en blanc
            i--
            alert ("És un espai en blanc")
        }
    }

    return arrNamesWithA
}

function addNames() {
        
    const resultDiv = document.getElementById("result");
    const numUser = parseInt(document.getElementById("numUser").value);
    const err = "Valor invàlid."

    if (validate(numUser)) return printMessage(resultDiv, err)

    const resultOperateArray = operate(numUser);
    const message = `Els noms que comencen per A són: ${resultOperateArray.join(",")}`
    printMessage(resultDiv, message)

}
    