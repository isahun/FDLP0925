"use strict"

function prettyWord() {

    const word = document.getElementById("word").value.trim();
    //const wordTrim = word.trim(); pero lo de dalt més sintetitzat
    const resultParraf = document.getElementById("result");
    let message = " ";
    const err1 = "Camp buit";
    const err2 = "Introdueix una paraula";
    const mess1 = "És una paraula bonica";
    const mess2 = "No és una paraula bonica";
        
    //validacions
    if (!isNaN(word)) return resultParraf.innerHTML = err2; //això és més robust q lo de sota com a validació
    if (typeof word == "number") return resultParraf.innerHTML = err2;
    if (word == "") return resultParraf.innerHTML = err1; //podriem eliminarla 

    //OPERATE
    //charAt

    //per determinar el primer caràcter fem word.charAt(0), i per determinar la longitud, longitud = word.length
    let firstChar = word.charAt(0).toLowerCase(); //encadenem perq no distingeixi mayus de minus
    let longitud = word.length 

    if ((firstChar == "h" && longitud == 9) || (firstChar == "p" && longitud == 5)) {//no calen parentesi pk el && ja unifica elements, 
    // el pc ja ho llegira abans k OR
        message = mess1;
    } else {
        message = mess2;
    } //ternaris

    resultParraf.innerHTML = `${word} : ${message}`;

    //break x parlar de regex
    //INVESTIGAR REG-EX I com es barreja amb una funció q es diu text(). EN la regex podem dirli el q vulguem, i el text() 
    // ens dira si esta o no esta dins de l’expressio regular (regex). Es fan servir molt x validacions. 
    // Per validar espais de dreta i esquerra fem servir el TRIM(). Amb regex podem demanar q tots caracters 
    // siguin numeros, ç, accents, podem fer el q vulguem. MIRAR EN W3SCHOOL. Podem fer regex q sigui insensitive a mayus i minus

}