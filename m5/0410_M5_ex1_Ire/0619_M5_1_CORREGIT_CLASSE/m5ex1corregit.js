"use strict"

//crear inputs dinàmics (no ho farem)
//prompts SÍ

//inici     condició    canvi
//0,            <5,     ++


const resultDiv = document.getElementById("result");
const num = parseInt(document.getElementById("num").value);
const err = "Introdueix un valor vàlid"
let message = "";
const arrNames = [];
const arrNameswithA = []; //el creem al fer el segon if

//VALIDACIONS
if (isNaN(num) || num <= 0) {
    return
    resultDiv.innerHTML = err;
}
//OPERACIONS
for (let i = 0; i < num; i++) {
    let friends_name = prompt("Escriu un nom");

    if (friends_name.trim() != "" ) {
        arrNames.push(friends_name);
    

        if (friends_name.charAt(0).toLowerCase() == "a") {
            arrNameswithA.push(friends_name);
        }
    } else {
        i--
        alert ("És un espai en blanc") //REVISAR AIXO
    }
}
resultDiv.innerHTML = `Els noms que comencen per A són: ${message}`

//alternativa de resultDiv amb mètode .join(), x donarli format a la llista

resultDiv.innerHTML = `Els noms que comencen per A són: ${arrNameswithA.join("<br>")}`
