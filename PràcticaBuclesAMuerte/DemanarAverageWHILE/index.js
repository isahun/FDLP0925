"use strict"

//Demana números fins que la mitjana superi un valor donat.




function validate(userNum) {
    return (isNaN(userNum))
}

function askNumAv(){

    let userNum = 0;
    const resultDiv = document.getElementById("result");
    const err = "Has d'introduir un nombre"
    let average = 0;
    let suma = 0;
    let counter = 0;

    do {
        userNum = parseInt(prompt("Introdueix un nombre"));
        if (validate(userNum)) {
            alert(err)
            userNum = parseInt(prompt("Introdueix un nombre"))
        }
        suma += userNum;
        counter++
        average += suma/counter
    } while (average < 20)

        resultDiv.innerHTML = `La mitjana dels teus números ha estat ${suma} / ${counter} = ${average}.`;


    
}