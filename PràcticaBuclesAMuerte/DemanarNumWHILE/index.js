"use strict"

//Demana números a l’usuari amb prompt fins que introdueixi 0. Mostra la suma total.


function validate(userNum) {
    return (isNaN(userNum))
}

function askNum(){

    let userNum = 0;
    const resultDiv = document.getElementById("result");
    const err = "Has d'introduir un nombre"
    let suma = 0;


    do {
        userNum = parseInt(prompt("Introdueix un nombre"));
        if (validate(userNum)) {
            alert(err)
            userNum = parseInt(prompt("Introdueix un nombre"))
        }
        suma += userNum;

    } while (userNum !== 0)

        resultDiv.innerHTML = `La suma dels nombres que has introduït és: ${suma}`;


    
}