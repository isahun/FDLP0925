"use strict"
/*

<!--Realitzar un programa on l’usuari/ària introdueix un número i el programa crida a un mètode que retorna 
el factorial del número introduït.
El factorial d'un nombre n (enter, no negatiu) és el producte de tots els nombres enters 
positius inferiors o iguals a n. 
*/

function calcFactorial() {

    const numUser = parseInt(document.getElementById("num").value);
    const resultDiv = document.getElementById("result")
    const err = "Introdueix un nombre"



    //VALIDACIONS
    if (isNaN(numUser) || numUser <= 0) {
    resultDiv.innerHTML = err;
    return;
    }

  let factor = numUser; //creem una variable que contingui el valor de numUser x fer servir
  //dins del bucle sense afectar l'original

    for (let i = factor - 1 ; i >= 1; i--) {
        factor = factor * i //aquí guardem el valor acumulat de factor a cada iteració. 
    // Exemple: 1a ite: factor = 5, i = 4, x tant: factor = 5 * 4 = 20 
    //2a ite: i=3, factor = 20 (de l'anterior ite), factor = 20 * 3 = 60
    }

    resultDiv.innerHTML = factor;

}



