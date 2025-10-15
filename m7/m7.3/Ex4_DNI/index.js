"use strict"


function validateDNI (userDNI, userDNInum, userDNIletter) {
    return userDNI.trim() == "" ||isNaN(userDNInum) || !isNaN(userDNIletter) 
}

function findEquivalence (letterFix, modulDNI, moduleFix) {

    return letterFix[modulDNI] == letterFix[moduleFix]
    
}

function isRightLetterDNI() {
    const userDNI = document.getElementById("userDNI").value;
    const resultDiv = document.getElementById("result");
    const err = "Has d'introduir un número de DNI"
    let message = ""

    const userDNIletter = [userDNI.split("").splice(-1, 8)] 
    let userDNInum = userDNI.slice(0,-1) //string

    userDNInum = parseInt(userDNInum); //a num

    if (validateDNI(userDNI, userDNInum, userDNIletter)) return resultDiv.innerHTML = err; //mirar si va be aixi o cal desplegar i fer innerHTML

    let modulDNI = Math.round(userDNInum % 23).toFixed(0);

    //fer un array amb les lletres i mirar amb quina i de l'array coincideix el modul
    const letterFix = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"] 
    const moduleFix = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] 

    let isRightLetter = findEquivalence(letterFix, modulDNI, moduleFix);
    
    if (isRightLetter){
        message = `La lletra ${userDNIletter} es correspon amb el número de DNI ${userDNInum}.`
    } else {
        message = `La lletra ${userDNIletter} NO es correspon amb el número de DNI ${userDNInum}. La lletra correcta és ${letterFix[modulDNI]}`
        }

    resultDiv.innerHTML = message;

}