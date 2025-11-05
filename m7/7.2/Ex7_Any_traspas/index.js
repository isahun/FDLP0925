"use strict"

function isLeapYear(yearInput) { //no ens cal input pk agafarem les dades del que posi l'usuari a la funció

    const err = "Introdueix un any";
    let message = "";

    //VALIDACIÓ
    if (isNaN(yearInput)) { //pensar si deixar negatius
    alert(err)
    return;
    } 

    //OPERACIONS
    let calcLeap1 = yearInput % 400
    let calcLeap2 = yearInput % 4
    let calcLeap3 = yearInput % 100

    if ((calcLeap1 === 0) || (calcLeap2 === 0 && calcLeap3 !== 0)) {
        message = "El número que has introduït és un any de traspàs."
    } else {
        message = "El número que has introduït NO és un any de traspàs."
    }

    return alert(message);

}

let yearUser = parseInt(prompt("Introdueix un any")) //provem que funciona assignant un valor (argument) al paràmetre

isLeapYear(yearUser);

