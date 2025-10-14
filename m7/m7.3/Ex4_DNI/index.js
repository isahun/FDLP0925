"use strict"

/*
<!-- L’usuari/ària ha d’introduir un DNI i el programa ha de dir si la lletra és correcte o no amb el nombre de DNI. 
 Si la lletra no és correcta, ha de dir quina lletra és la correcta.
Per calcular la lletra DNI has de prendre el número de DNI a verificar i dividir-lo entre 23. 
La resta es reemplaça per una lletra que ja està assignada a aquest nombre mitjançant la taula adjunta:
-->

<input type="text" placeholder="Introdueix un número de DNI" id="userDNI">
<p>Fes clic per saber si la lletra del DNI és correcta:</p>
<button type="button" onclick="isRightLetterDNI()">Fes clic</button>
<p></p>
<div id="result"></div>

<script src="index.js"></script>
*/


function validateDNI (userDNI, userDNInum, userDNIletter) {
    return userDNI.trim() == "" ||isNaN(userDNInum) || !isNaN(userDNIletter) //nose pk no funciona .trim() com amb l'anterior
}

function isRightLetterDNI() {
    const userDNI = document.getElementById("userDNI").value;
    const resultDiv = document.getElementById("result");
    const err = "Has d'introduir un número de DNI"
    let message = ""

    const userDNIletter = [userDNI.split("").splice(-1, 8)]
    const userDNInum = parseInt(userDNI.splice(0,1));

    validateDNI(userDNI, userDNInum, userDNIletter)

    const arrDNI = [userDNInum[userDNIletter]]

//FER SWITCH AMB RESTO I .mathRound per arrodonir el resto %
    let modulDNI = Math.round(userDNInum % 23).toFixed(0);

    //fer un array amb les lletres i mirar si amb quina i de l'array coincideix el modul

    



    

}