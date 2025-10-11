"use strict"

function calcFibonacci() {
    const numUser = parseInt(document.getElementById("num").value)
    const resultDiv = document.getElementById("result")
    const err = "Introdueix un nombre"
    let message = "";

/* Cada número se calcula sumando los dos anteriores a él.
el 2 se obtiene sumando los dos números anteriores (1+1),
el 3 se obtiene sumando los dos números anteriores (1+2),
el 5 es (2+3),
Si l’usuari/ària introdueix el 10, el resultat ha de ser:
0,1,1,2,3,5,8,13,21,34

--> 
for (i = numUser; i > 0; i--) { //la i defineix les files i parteix de la "base" numUser, pk la volem a la primera linia, i restant 1 a "i" a cada iteració
    for (j = 1; j <= i; j++) {
        message += "*"; //afegeix un asterisc a la linia numero "i" a cada iteració (la "i" la defineix el bucle exterior)
    }
    message += "<br>"    
}
*/

//VALIDACIONS
    if (isNaN(numUser)) {
    resultDiv.innerHTML = err;
    return;
    }

let numAlt = numUser
let suma = 0;
let i = 0;
let j = 0;

    for (i = numAlt; i > 0; i --){
        i = i-2
        for (j = 1; j <= i; j++) {
            message += i;
        }

        message += ","
    }

    resultDiv.innerHTML = message;




}
