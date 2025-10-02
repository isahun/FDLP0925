"use strict"

/*TO DO
js
    variables
        plat (carn, pasta, risotto)
        preferencia (4 opcions, 3 opcions i 1 cap preferencia)
        resultat comanda (pot menjar/no pot menjar)
        missatge
        errors
    validacions (NO HAN CALGUT AMB SWITCH I SELECT)
        no marcar cap opció dels dropdown
        marcar una opció només (això podria caure com a equivalent a cap preferència)
    operacions
        un switch que avalui els casos i doni un missatge en funció de la lògica     
        o condicionals amb operadors lògics combinant plat amb preferència
        
    display
        en funció de la tria de l'usuari, es mostrarà un missatge o un altre a la variable missatge
        */
    
function calcDish() {  //he d declarar les funcions dins o fora? best practice?
    const plat = parseInt(document.getElementById("plat").value);
    const pref = parseInt(document.getElementById("pref").value);
    let message = " ";
    const resultDiv = document.getElementById("resultat");
    const err1 = "Has de triar una opció entre els plats."
    const mess1 = "No pots menjar el plat";
    const mess2 = "Pots menjar el plat";

//operacions 
// AMB OPERADOR TERNARI:
    //message = (plat === 1 && pref === 1) || (plat === 2 && pref === 2) || (plat === 3 && pref === 3) ? mess1 : mess2;

//AMB IF-ELSE
    //if ((plat === 1 && pref === 1) || (plat === 2 && pref === 2) || (plat === 3 && pref === 3)) {
    //  message = "No pots menjar aquest plat.";   
//} else if (plat === 0) {
// message = err1;
// return; // es correcte?
//} else { 
       //message = "Pots menjar aquest plat.";
    //}
//}

//AMB SWITCH & OPERADOR TERNARI definitiva
    switch (plat) {
        case 0:
            message = err1;
            break;
        case 1:
            message = (pref === 1) ? mess1 : mess2 ;
            break;
        case 2:
            message = (pref === 2) ? mess1 : mess2 ;
            break;
        case 3:
            message = (pref === 3) ? mess1 : mess2 ;
            break;
        default:
            message = mess2;
            break;
            
    }
    
    resultDiv.innerHTML = message;

}

/*ALTERNATIVES DE SOLUCIÓ
1.
switch(true) {
    case (plat == "1" && pref == "1"):
        message = "No pots menjar el plat"}

2.
let aEvaluar = `${plat}_${pref}` //aquí estem posant en un string les dues variables per a que s'evaluin conjuntament
switch(aEvaluar) {
    case "1_1" //aquesta es la primera opcio de comparacio combinada
        mess = "No pots menjar el plat"
    }



*/

